// src/context/OnboardingContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import onboardingService from '../services/onboardingService';

const OnboardingContext = createContext();

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    // Informations utilisateur de base (du register)
    userInfo: {
      firstName: '',
      lastName: '',
      email: '',
      fullName: '',
      userId: null
    },
    
    // Étape 1: Informations personnelles
    personalInfo: {
      age: '',
      gender: '',
      height: '',
      weight: '',
      activityLevel: ''
    },
    
    // Étape 2: Objectifs fitness
    fitnessGoals: {
      primaryGoal: '', // weight_loss, muscle_gain, endurance, strength, general_fitness
      targetWeight: '',
      targetDate: '',
      experience: '', // beginner, intermediate, advanced
      preferredWorkoutTypes: [] // cardio, strength, flexibility, sports
    },
    
    // Étape 3: Planning d'entraînement
    trainingSchedule: {
      workoutDays: [], // ['monday', 'tuesday', ...]
      sessionDuration: '', // 30, 45, 60, 90 minutes
      preferredTime: '', // morning, afternoon, evening
      workoutLocation: '' // home, gym, outdoor
    },
    
    // Étape 4: Préférences et notifications
    preferences: {
      units: 'metric', // metric, imperial
      notifications: {
        workout: true,
        progress: true,
        challenges: true,
        social: true
      },
      privacy: {
        profileVisibility: 'friends', // public, friends, private
        shareProgress: true,
        allowChallenges: true
      }
    }
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Étapes du processus d'onboarding
  const steps = [
    {
      key: 'personalInfo',
      title: 'Personal Information',
      description: 'Tell us about yourself',
      icon: 'bi-person-badge',
      required: ['age', 'gender', 'height', 'weight']
    },
    {
      key: 'fitnessGoals',
      title: 'Fitness Goals',
      description: 'What do you want to achieve?',
      icon: 'bi-bullseye',
      required: ['primaryGoal', 'experience']
    },
    {
      key: 'trainingSchedule',
      title: 'Training Schedule',
      description: 'When do you prefer to workout?',
      icon: 'bi-calendar-week',
      required: ['workoutDays', 'sessionDuration']
    },
    {
      key: 'preferences',
      title: 'Final Setup',
      description: 'Customize your experience',
      icon: 'bi-gear',
      required: []
    }
  ];

  // Initialiser l'onboarding (appelé depuis Register)
  const initializeOnboarding = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    setError(null);
  };

  // Définir les informations utilisateur (depuis Register)
  const setUserInfo = (userInfo) => {
    setOnboardingData(prev => ({
      ...prev,
      userInfo: { ...prev.userInfo, ...userInfo }
    }));
  };

  // Mettre à jour les données d'une étape
  const updateStepData = (stepKey, data) => {
    setOnboardingData(prev => ({
      ...prev,
      [stepKey]: { ...prev[stepKey], ...data }
    }));
  };

  // Valider une étape
  const validateStep = (stepIndex) => {
    const step = steps[stepIndex];
    if (!step) return false;

    const stepData = onboardingData[step.key];
    if (!stepData) return false;

    // Vérifier les champs obligatoires
    return step.required.every(field => {
      const value = stepData[field];
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value && value.toString().trim() !== '';
    });
  };

  // Aller à l'étape suivante
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
        setError(null);
      } else {
        setError('Veuillez remplir tous les champs obligatoires');
      }
    }
  };

  // Aller à l'étape précédente
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError(null);
    }
  };

  // Aller à une étape spécifique
  const goToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
      setError(null);
    }
  };

  // Finaliser l'onboarding
  const completeOnboarding = async () => {
    setLoading(true);
    setError(null);

    try {
      // Valider toutes les étapes
      const allStepsValid = steps.every((_, index) => validateStep(index));
      
      if (!allStepsValid) {
        throw new Error('Certaines étapes ne sont pas complètement remplies');
      }

      // Préparer les données pour l'API
      const completeProfile = {
        userId: onboardingData.userInfo.userId,
        personalInfo: onboardingData.personalInfo,
        fitnessGoals: onboardingData.fitnessGoals,
        trainingSchedule: onboardingData.trainingSchedule,
        preferences: onboardingData.preferences,
        completedAt: new Date().toISOString()
      };

      // Envoyer au backend
      const response = await onboardingService.completeOnboarding(completeProfile);
      
      setIsCompleted(true);
      
      // Sauvegarder dans le localStorage pour persistance
      localStorage.setItem('onboarding_completed', 'true');
      localStorage.setItem('user_profile', JSON.stringify(completeProfile));
      
      return response;
    } catch (error) {
      setError(error.message || 'Erreur lors de la finalisation du profil');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Calculer le pourcentage de progression
  const getProgressPercentage = () => {
    if (isCompleted) return 100;
    
    let completedSteps = 0;
    steps.forEach((_, index) => {
      if (index < currentStep || validateStep(index)) {
        completedSteps++;
      }
    });
    
    return Math.round((completedSteps / steps.length) * 100);
  };

  // Obtenir les données de progression pour l'affichage
  const getProgressData = () => {
    return {
      currentStep: currentStep + 1,
      totalSteps: steps.length,
      percentage: getProgressPercentage(),
      currentStepInfo: steps[currentStep],
      isLastStep: currentStep === steps.length - 1,
      isFirstStep: currentStep === 0,
      canProceed: validateStep(currentStep)
    };
  };

  // Réinitialiser l'onboarding
  const resetOnboarding = () => {
    setOnboardingData({
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        fullName: '',
        userId: null
      },
      personalInfo: {
        age: '',
        gender: '',
        height: '',
        weight: '',
        activityLevel: ''
      },
      fitnessGoals: {
        primaryGoal: '',
        targetWeight: '',
        targetDate: '',
        experience: '',
        preferredWorkoutTypes: []
      },
      trainingSchedule: {
        workoutDays: [],
        sessionDuration: '',
        preferredTime: '',
        workoutLocation: ''
      },
      preferences: {
        units: 'metric',
        notifications: {
          workout: true,
          progress: true,
          challenges: true,
          social: true
        },
        privacy: {
          profileVisibility: 'friends',
          shareProgress: true,
          allowChallenges: true
        }
      }
    });
    setCurrentStep(0);
    setIsCompleted(false);
    setError(null);
    localStorage.removeItem('onboarding_completed');
    localStorage.removeItem('user_profile');
  };

  // Sauvegarder le progrès localement
  const saveProgress = () => {
    localStorage.setItem('onboarding_progress', JSON.stringify({
      onboardingData,
      currentStep,
      timestamp: new Date().toISOString()
    }));
  };

  // Charger le progrès sauvegardé
  const loadProgress = () => {
    try {
      const saved = localStorage.getItem('onboarding_progress');
      if (saved) {
        const { onboardingData: savedData, currentStep: savedStep } = JSON.parse(saved);
        setOnboardingData(savedData);
        setCurrentStep(savedStep);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du progrès:', error);
    }
  };

  // Vérifier si l'onboarding est déjà complété
  useEffect(() => {
    const completed = localStorage.getItem('onboarding_completed');
    if (completed === 'true') {
      setIsCompleted(true);
    } else {
      loadProgress();
    }
  }, []);

  // Sauvegarder automatiquement le progrès
  useEffect(() => {
    if (!isCompleted) {
      saveProgress();
    }
  }, [onboardingData, currentStep, isCompleted]);

  const value = {
    // État
    onboardingData,
    currentStep,
    isCompleted,
    loading,
    error,
    steps,
    
    // Actions
    initializeOnboarding,
    setUserInfo,
    updateStepData,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    completeOnboarding,
    resetOnboarding,
    validateStep,
    
    // Utilitaires
    getProgressPercentage,
    getProgressData,
    
    // Raccourcis pour les données courantes
    currentStepData: onboardingData[steps[currentStep]?.key] || {},
    progressInfo: getProgressData()
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};