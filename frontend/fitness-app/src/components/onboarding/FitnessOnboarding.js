// src/components/onboarding/FitnessOnboarding.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// CORRECTION: Importer directement depuis le contexte
import { useOnboarding } from '../../context/OnboardingContext';
import { useAuth } from '../../hooks/useAuth';
import PersonalInfo from './OnboardingSteps/PersonalInfo';
import FitnessGoals from './OnboardingSteps/FitnessGoals';
import TrainingSchedule from './OnboardingSteps/OnboardingStepSchedule';
import FinalSetup from './OnboardingSteps/FinalSetup';
import OnboardingSummary from './OnboardingSteps/OnboardingSummary';
import './Onboarding.css';

const FitnessOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const {
    currentStep,
    steps,
    progressInfo,
    goToNextStep,
    goToPreviousStep,
    completeOnboarding,
    loading,
    error,
    onboardingData,
    setUserInfo
  } = useOnboarding();

  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialiser les informations utilisateur si venant du register
  useEffect(() => {
    if (location.state?.fromRegistration && location.state?.userInfo) {
      setUserInfo(location.state.userInfo);
    } else if (user) {
      // Si l'utilisateur est connecté, utiliser ses infos
      setUserInfo({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        fullName: user.name || '',
        userId: user.id
      });
    }
  }, [location.state, user, setUserInfo]);

  // Gérer la finalisation de l'onboarding
  const handleComplete = async () => {
    try {
      await completeOnboarding();
      
      // Redirection vers le dashboard avec message de succès
      navigate('/dashboard', {
        state: {
          welcomeMessage: `Bienvenue ${onboardingData.userInfo.firstName}! Votre profil fitness est maintenant configuré.`,
          showWelcome: true
        }
      });
    } catch (error) {
      console.error('Erreur lors de la finalisation:', error);
    }
  };

  // Composants des étapes
  const stepComponents = {
    0: PersonalInfo,
    1: FitnessGoals,
    2: TrainingSchedule,
    3: FinalSetup
  };

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <div className="fitness-onboarding-container">
      {/* Particules d'arrière-plan */}
      <div className="onboarding-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <i className={`bi ${['bi-heart-pulse', 'bi-lightning', 'bi-trophy', 'bi-star'][i % 4]}`}></i>
          </div>
        ))}
      </div>

      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Sidebar de progression */}
          <div className="col-lg-4 col-md-5 onboarding-sidebar">
            <div className={`sidebar-content ${isVisible ? 'animate-slide-left' : ''}`}>
              {/* Header avec logo */}
              <div className="onboarding-header">
                <div className="brand-logo">
                  <i className="bi bi-heart-pulse"></i>
                  <span>JuniorFitness</span>
                </div>
                <h2>Complete Your Profile</h2>
                <p>Let's personalize your fitness journey</p>
              </div>

              {/* Barre de progression globale */}
              <div className="progress-section">
                <div className="progress-info">
                  <span>Step {progressInfo.currentStep} of {progressInfo.totalSteps}</span>
                  <span>{progressInfo.percentage}%</span>
                </div>
                <div className="progress-bar-main">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progressInfo.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Liste des étapes */}
              <div className="steps-list">
                {steps.map((step, index) => (
                  <div 
                    key={step.key}
                    className={`step-item ${
                      index === currentStep ? 'active' : 
                      index < currentStep ? 'completed' : 'pending'
                    }`}
                  >
                    <div className="step-indicator">
                      {index < currentStep ? (
                        <i className="bi bi-check-circle-fill"></i>
                      ) : (
                        <span className="step-number">{index + 1}</span>
                      )}
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                    {index === currentStep && (
                      <div className="step-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Informations utilisateur */}
              {onboardingData.userInfo.firstName && (
                <div className="user-welcome">
                  <div className="welcome-card">
                    <div className="user-avatar">
                      <i className="bi bi-person-circle"></i>
                    </div>
                    <div className="welcome-text">
                      <h4>Hello {onboardingData.userInfo.firstName}!</h4>
                      <p>Building your perfect fitness plan...</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Motivation */}
              <div className="motivation-card">
                <div className="motivation-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <blockquote>
                  "Every expert was once a beginner. Every pro was once an amateur."
                </blockquote>
                <cite>- Robin Sharma</cite>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="col-lg-8 col-md-7 onboarding-main">
            <div className={`main-content ${isVisible ? 'animate-slide-right' : ''}`}>
              {/* Header de l'étape */}
              <div className="step-header">
                <div className="step-icon">
                  <i className={`bi ${progressInfo.currentStepInfo?.icon}`}></i>
                </div>
                <div className="step-title">
                  <h1>{progressInfo.currentStepInfo?.title}</h1>
                  <p>{progressInfo.currentStepInfo?.description}</p>
                </div>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-triangle"></i>
                  {error}
                </div>
              )}

              {/* Contenu de l'étape */}
              <div className="step-content">
                {CurrentStepComponent ? (
                  <CurrentStepComponent />
                ) : (
                  <OnboardingSummary onComplete={handleComplete} />
                )}
              </div>

              {/* Navigation */}
              <div className="step-navigation">
                <div className="nav-left">
                  {!progressInfo.isFirstStep && (
                    <button 
                      type="button"
                      onClick={goToPreviousStep}
                      className="btn-outline-fitness"
                      disabled={loading}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Previous
                    </button>
                  )}
                </div>
                
                <div className="nav-right">
                  {progressInfo.isLastStep ? (
                    <button 
                      type="button"
                      onClick={handleComplete}
                      className="btn-fitness-primary"
                      disabled={loading || !progressInfo.canProceed}
                    >
                      {loading ? (
                        <>
                          <div className="spinner-border spinner-border-sm me-2"></div>
                          Finalizing...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-rocket-takeoff me-2"></i>
                          Complete Setup
                        </>
                      )}
                    </button>
                  ) : (
                    <button 
                      type="button"
                      onClick={goToNextStep}
                      className="btn-fitness-primary"
                      disabled={loading || !progressInfo.canProceed}
                    >
                      Continue
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* Indicateur de sauvegarde */}
              <div className="auto-save-indicator">
                <i className="bi bi-cloud-check"></i>
                <span>Progress saved automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip option (optionnel) */}
      <div className="skip-option">
        <button 
          type="button"
          onClick={() => navigate('/dashboard')}
          className="skip-btn"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default FitnessOnboarding;