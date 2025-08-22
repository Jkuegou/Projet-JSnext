// src/hooks/useOnboarding.js
import { useContext } from 'react';
import { OnboardingProvider } from '../context/OnboardingContext';

export const useOnboarding = () => {
  const context = useContext(OnboardingProvider);
  
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  
  return context;
};