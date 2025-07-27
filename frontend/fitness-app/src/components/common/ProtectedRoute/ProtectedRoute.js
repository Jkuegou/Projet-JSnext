// components/common/ProtectedRoute/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useOnboarding } from '../../../context/OnboardingContext';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, requireOnboarding = false }) => {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const { isCompleted, loading: onboardingLoading, loadOnboardingData } = useOnboarding();
  const location = useLocation();
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  // Charger les données d'onboarding une fois que l'utilisateur est authentifié
  useEffect(() => {
    if (isAuthenticated && user && !initialCheckDone) {
      loadOnboardingData().finally(() => {
        setInitialCheckDone(true);
      });
    }
  }, [isAuthenticated, user, initialCheckDone, loadOnboardingData]);

  // Afficher un loader pendant la vérification
  if (authLoading || (isAuthenticated && !initialCheckDone && onboardingLoading)) {
    return (
      <div className="protected-route-loading">
        <div className="spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  // Rediriger vers la page de connexion si non authentifié
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // Rediriger vers l'onboarding si requis et non complété
  if (requireOnboarding && !isCompleted && location.pathname !== '/onboarding') {
    return (
      <Navigate 
        to="/onboarding" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // Rediriger vers le dashboard si l'onboarding est complété et qu'on essaie d'y accéder
  if (isCompleted && location.pathname === '/onboarding') {
    return (
      <Navigate 
        to="/dashboard" 
        replace 
      />
    );
  }

  return children;
};

export default ProtectedRoute;