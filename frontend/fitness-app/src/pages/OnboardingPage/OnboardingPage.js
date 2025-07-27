import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FitnessOnboarding from '../../components/onboarding/FitnessOnboarding';
import onboardingService from '../../services/onboardingService';
import './OnboardingPage.css';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const isCompleted = await onboardingService.checkOnboardingStatus();
      if (isCompleted) {
        navigate('/dashboard');
        return;
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la vérification du statut:', error);
      setIsLoading(false);
    }
  };

  const handleOnboardingComplete = async (profileData) => {
    try {
      setIsLoading(true);
      await onboardingService.saveUserProfile(profileData);
      await onboardingService.completeOnboarding();
      onboardingService.clearTemporaryData();
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="onboarding-loading">
        <div className="spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="onboarding-page">
      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button onClick={() => setError('')}>✕</button>
        </div>
      )}
      <FitnessOnboarding onComplete={handleOnboardingComplete} />
    </div>
  );
};

export default OnboardingPage;
