import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext';

const OnboardingContext = createContext();

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [onboardingData, setOnboardingData] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      height: '',
      weight: '',
      dateOfBirth: '',
    },
    fitnessGoals: {
      primaryGoal: '',
      targetWeight: '',
      activityLevel: '',
      experience: '',
      motivations: [],
    },
    healthInfo: {
      medicalConditions: [],
      injuries: [],
      medications: [],
      allergies: [],
      notes: '',
    },
    measurements: {
      chest: '',
      waist: '',
      hips: '',
      arms: '',
      thighs: '',
      neck: '',
      bodyFat: '',
    },
    workoutSchedule: {
      daysPerWeek: 3,
      preferredTime: '',
      sessionDuration: '',
      workoutTypes: [],
      preferredLocation: '',
    },
    preferences: {
      notifications: true,
      emailUpdates: true,
      shareProgress: false,
      language: 'fr',
      units: 'metric',
    }
  });

  const steps = [
    { id: 'personalInfo', title: 'Informations personnelles', icon: 'bi-person' },
    { id: 'fitnessGoals', title: 'Objectifs fitness', icon: 'bi-target' },
    { id: 'healthInfo', title: 'Informations santé', icon: 'bi-heart-pulse' },
    { id: 'measurements', title: 'Mensurations', icon: 'bi-rulers' },
    { id: 'workoutSchedule', title: 'Planning d\'entraînement', icon: 'bi-calendar-week' },
    { id: 'preferences', title: 'Préférences', icon: 'bi-gear' }
  ];

  const loadOnboardingData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await api.get(`/onboarding/${user.id}`);
      const data = response.data;
      if (data) {
        setOnboardingData(data);
        setFormData(prev => ({ ...prev, ...data }));
        setIsCompleted(data.completed || false);
        setCurrentStep(data.currentStep || 0);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des données d'onboarding:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user && isAuthenticated) {
      loadOnboardingData();
    }
  }, [user, isAuthenticated, loadOnboardingData]);

  const saveOnboardingData = async (stepData, stepName) => {
    if (!user) return;
    try {
      setLoading(true);
      const updatedData = {
        ...formData,
        [stepName]: { ...formData[stepName], ...stepData },
        userId: user.id,
        currentStep,
        lastUpdated: new Date().toISOString()
      };
      setFormData(updatedData);
      const response = await api.put(`/onboarding/${user.id}`, updatedData);
      const savedData = response.data;
      setOnboardingData(savedData);
      return savedData;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      setErrors({ ...errors, save: error.response?.data?.message || 'Erreur de sauvegarde' });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const completeOnboarding = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const completedData = {
        ...formData,
        completed: true,
        completedAt: new Date().toISOString(),
        userId: user.id
      };
      const response = await api.post(`/onboarding/${user.id}/complete`, completedData);
      const data = response.data;
      setIsCompleted(true);
      setOnboardingData(data);
      setFormData(data);
      return data;
    } catch (error) {
      console.error("Erreur lors de la finalisation de l'onboarding:", error);
      setErrors({ ...errors, complete: error.response?.data?.message || 'Erreur de finalisation' });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const nextStep = async () => {
    const currentStepData = steps[currentStep];
    if (currentStepData) {
      try {
        await saveOnboardingData(formData[currentStepData.id], currentStepData.id);
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        }
      } catch (error) {
        console.error("Erreur lors du passage à l'étape suivante:", error);
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const updateFormData = (stepName, data) => {
    setFormData(prev => ({
      ...prev,
      [stepName]: { ...prev[stepName], ...data }
    }));
  };

  const validateStep = (stepName) => {
    const stepErrors = {};
    const stepData = formData[stepName];
    switch (stepName) {
      case 'personalInfo':
        if (!stepData.firstName?.trim()) stepErrors.firstName = 'Prénom requis';
        if (!stepData.lastName?.trim()) stepErrors.lastName = 'Nom requis';
        if (!stepData.age || stepData.age < 13 || stepData.age > 100) {
          stepErrors.age = 'Âge entre 13 et 100 ans requis';
        }
        if (!stepData.gender) stepErrors.gender = 'Genre requis';
        if (!stepData.height || stepData.height < 100 || stepData.height > 250) {
          stepErrors.height = 'Taille entre 100 et 250 cm requise';
        }
        if (!stepData.weight || stepData.weight < 30 || stepData.weight > 300) {
          stepErrors.weight = 'Poids entre 30 et 300 kg requis';
        }
        break;
      case 'fitnessGoals':
        if (!stepData.primaryGoal) stepErrors.primaryGoal = 'Objectif principal requis';
        if (!stepData.activityLevel) stepErrors.activityLevel = 'Niveau d\'activité requis';
        if (!stepData.experience) stepErrors.experience = 'Niveau d\'expérience requis';
        break;
      case 'workoutSchedule':
        if (!stepData.daysPerWeek || stepData.daysPerWeek < 1 || stepData.daysPerWeek > 7) {
          stepErrors.daysPerWeek = 'Nombre de jours entre 1 et 7 requis';
        }
        if (!stepData.preferredTime) stepErrors.preferredTime = 'Heure préférée requise';
        if (!stepData.sessionDuration) stepErrors.sessionDuration = 'Durée de session requise';
        if (!stepData.workoutTypes?.length) stepErrors.workoutTypes = 'Au moins un type requis';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [stepName]: stepErrors });
    return Object.keys(stepErrors).length === 0;
  };

  const resetOnboarding = async () => {
    try {
      if (user) {
        await api.delete(`/onboarding/${user.id}`);
      }
      setCurrentStep(0);
      setFormData({
        personalInfo: {
          firstName: '',
          lastName: '',
          age: '',
          gender: '',
          height: '',
          weight: '',
          dateOfBirth: '',
        },
        fitnessGoals: {
          primaryGoal: '',
          targetWeight: '',
          activityLevel: '',
          experience: '',
          motivations: [],
        },
        healthInfo: {
          medicalConditions: [],
          injuries: [],
          medications: [],
          allergies: [],
          notes: '',
        },
        measurements: {
          chest: '',
          waist: '',
          hips: '',
          arms: '',
          thighs: '',
          neck: '',
          bodyFat: '',
        },
        workoutSchedule: {
          daysPerWeek: 3,
          preferredTime: '',
          sessionDuration: '',
          workoutTypes: [],
          preferredLocation: '',
        },
        preferences: {
          notifications: true,
          emailUpdates: true,
          shareProgress: false,
          language: 'fr',
          units: 'metric',
        }
      });
      setIsCompleted(false);
      setOnboardingData(null);
      setErrors({});
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error);
    }
  };

  const getProgressPercentage = () => {
    return Math.round(((currentStep + 1) / steps.length) * 100);
  };

  const canProceedToNext = () => {
    const currentStepData = steps[currentStep];
    return currentStepData ? validateStep(currentStepData.id) : false;
  };

  const value = {
    onboardingData,
    formData,
    isCompleted,
    loading,
    errors,
    currentStep,
    steps,
    saveOnboardingData,
    completeOnboarding,
    loadOnboardingData,
    updateStep,
    nextStep,
    prevStep,
    updateFormData,
    validateStep,
    resetOnboarding,
    getProgressPercentage,
    canProceedToNext,
    setFormData: updateFormData // Legacy
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import api from '../utils/api';
// import { useAuth } from './AuthContext';

// const OnboardingContext = createContext();

// export const useOnboarding = () => {
  
//   const context = useContext(OnboardingContext);
//   if (!context) {
//     throw new Error('useOnboarding must be used within an OnboardingProvider');
//   }
//   return context;
// };

// export const OnboardingProvider = ({ children }) => {
//   const { user, isAuthenticated } = useAuth();
//   const [onboardingData, setOnboardingData] = useState(null);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [errors, setErrors] = useState({});

//   // Structure des données d'onboarding
//   const [formData, setFormData] = useState({
//     personalInfo: {
//       firstName: '',
//       lastName: '',
//       age: '',
//       gender: '',
//       height: '',
//       weight: '',
//       dateOfBirth: '',
//     },
//     fitnessGoals: {
//       primaryGoal: '', // lose_weight, gain_muscle, maintain_weight, improve_endurance
//       targetWeight: '',
//       activityLevel: '', // sedentary, lightly_active, moderately_active, very_active, extremely_active
//       experience: '', // beginner, intermediate, advanced
//       motivations: [],
//     },
//     healthInfo: {
//       medicalConditions: [],
//       injuries: [],
//       medications: [],
//       allergies: [],
//       notes: '',
//     },
//     measurements: {
//       chest: '',
//       waist: '',
//       hips: '',
//       arms: '',
//       thighs: '',
//       neck: '',
//       bodyFat: '',
//     },
//     workoutSchedule: {
//       daysPerWeek: 3,
//       preferredTime: '', // morning, afternoon, evening
//       sessionDuration: '', // 30, 45, 60, 90
//       workoutTypes: [], // cardio, strength, flexibility, sports
//       preferredLocation: '', // home, gym, outdoor
//     },
//     preferences: {
//       notifications: true,
//       emailUpdates: true,
//       shareProgress: false,
//       language: 'fr',
//       units: 'metric', // metric, imperial
//     }
//   });

//   // Étapes de l'onboarding
//   const steps = [
//     { id: 'personalInfo', title: 'Informations personnelles', icon: 'bi-person' },
//     { id: 'fitnessGoals', title: 'Objectifs fitness', icon: 'bi-target' },
//     { id: 'healthInfo', title: 'Informations santé', icon: 'bi-heart-pulse' },
//     { id: 'measurements', title: 'Mensurations', icon: 'bi-rulers' },
//     { id: 'workoutSchedule', title: 'Planning d\'entraînement', icon: 'bi-calendar-week' },
//     { id: 'preferences', title: 'Préférences', icon: 'bi-gear' }
//   ];

//   // Charger les données d'onboarding au chargement
//   useEffect(() => {
//     if (user && isAuthenticated) {
//       loadOnboardingData();
//     }
//   }, [user, isAuthenticated]);

//   const loadOnboardingData = async () => {
//     if (!user) return;
    
//     setLoading(true);
//     try {
//       const response = await api.get(`/onboarding/${user.id}`);
//       const data = response.data;
      
//       if (data) {
//         setOnboardingData(data);
//         setFormData({ ...formData, ...data });
//         setIsCompleted(data.completed || false);
//         setCurrentStep(data.currentStep || 0);
//       }
//     } catch (error) {
//       console.error('Erreur lors du chargement des données d\'onboarding:', error);
//       // Si pas de données, on garde les valeurs par défaut
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveOnboardingData = async (stepData, stepName) => {
//     if (!user) return;

//     try {
//       setLoading(true);
//       const updatedData = {
//         ...formData,
//         [stepName]: { ...formData[stepName], ...stepData },
//         userId: user.id,
//         currentStep,
//         lastUpdated: new Date().toISOString()
//       };

//       setFormData(updatedData);
      
//       const response = await api.put(`/onboarding/${user.id}`, updatedData);
//       const savedData = response.data;
//       setOnboardingData(savedData);
      
//       return savedData;
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde:', error);
//       setErrors({ ...errors, save: error.response?.data?.message || 'Erreur de sauvegarde' });
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const completeOnboarding = async () => {
//     if (!user) return;

//     try {
//       setLoading(true);
//       const completedData = {
//         ...formData,
//         completed: true,
//         completedAt: new Date().toISOString(),
//         userId: user.id
//       };

//       const response = await api.post(`/onboarding/${user.id}/complete`, completedData);
//       const data = response.data;
      
//       setIsCompleted(true);
//       setOnboardingData(data);
//       setFormData(data);
      
//       return data;
//     } catch (error) {
//       console.error('Erreur lors de la finalisation de l\'onboarding:', error);
//       setErrors({ ...errors, complete: error.response?.data?.message || 'Erreur de finalisation' });
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStep = (stepIndex) => {
//     if (stepIndex >= 0 && stepIndex < steps.length) {
//       setCurrentStep(stepIndex);
//     }
//   };

//   const nextStep = async () => {
//     const currentStepData = steps[currentStep];
//     if (currentStepData) {
//       try {
//         await saveOnboardingData(formData[currentStepData.id], currentStepData.id);
//         if (currentStep < steps.length - 1) {
//           setCurrentStep(prev => prev + 1);
//         }
//       } catch (error) {
//         console.error('Erreur lors du passage à l\'étape suivante:', error);
//       }
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep(prev => Math.max(0, prev - 1));
//   };

//   const updateFormData = (stepName, data) => {
//     setFormData(prev => ({
//       ...prev,
//       [stepName]: { ...prev[stepName], ...data }
//     }));
//   };

//   const validateStep = (stepName) => {
//     const stepErrors = {};
//     const stepData = formData[stepName];

//     switch (stepName) {
//       case 'personalInfo':
//         if (!stepData.firstName?.trim()) stepErrors.firstName = 'Prénom requis';
//         if (!stepData.lastName?.trim()) stepErrors.lastName = 'Nom requis';
//         if (!stepData.age || stepData.age < 13 || stepData.age > 100) {
//           stepErrors.age = 'Âge entre 13 et 100 ans requis';
//         }
//         if (!stepData.gender) stepErrors.gender = 'Genre requis';
//         if (!stepData.height || stepData.height < 100 || stepData.height > 250) {
//           stepErrors.height = 'Taille entre 100 et 250 cm requise';
//         }
//         if (!stepData.weight || stepData.weight < 30 || stepData.weight > 300) {
//           stepErrors.weight = 'Poids entre 30 et 300 kg requis';
//         }
//         break;

//       case 'fitnessGoals':
//         if (!stepData.primaryGoal) stepErrors.primaryGoal = 'Objectif principal requis';
//         if (!stepData.activityLevel) stepErrors.activityLevel = 'Niveau d\'activité requis';
//         if (!stepData.experience) stepErrors.experience = 'Niveau d\'expérience requis';
//         break;

//       case 'workoutSchedule':
//         if (!stepData.daysPerWeek || stepData.daysPerWeek < 1 || stepData.daysPerWeek > 7) {
//           stepErrors.daysPerWeek = 'Nombre de jours par semaine entre 1 et 7';
//         }
//         if (!stepData.preferredTime) stepErrors.preferredTime = 'Heure préférée requise';
//         if (!stepData.sessionDuration) stepErrors.sessionDuration = 'Durée de session requise';
//         if (!stepData.workoutTypes?.length) stepErrors.workoutTypes = 'Au moins un type d\'entraînement requis';
//         break;

//       default:
//         break;
//     }

//     setErrors({ ...errors, [stepName]: stepErrors });
//     return Object.keys(stepErrors).length === 0;
//   };

//   const resetOnboarding = async () => {
//     try {
//       if (user) {
//         await api.delete(`/onboarding/${user.id}`);
//       }
      
//       setCurrentStep(0);
//       setFormData({
//         personalInfo: {
//           firstName: '',
//           lastName: '',
//           age: '',
//           gender: '',
//           height: '',
//           weight: '',
//           dateOfBirth: '',
//         },
//         fitnessGoals: {
//           primaryGoal: '',
//           targetWeight: '',
//           activityLevel: '',
//           experience: '',
//           motivations: [],
//         },
//         healthInfo: {
//           medicalConditions: [],
//           injuries: [],
//           medications: [],
//           allergies: [],
//           notes: '',
//         },
//         measurements: {
//           chest: '',
//           waist: '',
//           hips: '',
//           arms: '',
//           thighs: '',
//           neck: '',
//           bodyFat: '',
//         },
//         workoutSchedule: {
//           daysPerWeek: 3,
//           preferredTime: '',
//           sessionDuration: '',
//           workoutTypes: [],
//           preferredLocation: '',
//         },
//         preferences: {
//           notifications: true,
//           emailUpdates: true,
//           shareProgress: false,
//           language: 'fr',
//           units: 'metric',
//         }
//       });
//       setIsCompleted(false);
//       setOnboardingData(null);
//       setErrors({});
//     } catch (error) {
//       console.error('Erreur lors de la réinitialisation:', error);
//     }
//   };

//   const getProgressPercentage = () => {
//     return Math.round(((currentStep + 1) / steps.length) * 100);
//   };

//   const canProceedToNext = () => {
//     const currentStepData = steps[currentStep];
//     return currentStepData ? validateStep(currentStepData.id) : false;
//   };

//   const value = {
//     // Data
//     onboardingData,
//     formData,
//     isCompleted,
//     loading,
//     errors,
    
//     // Navigation
//     currentStep,
//     steps,
    
//     // Actions
//     saveOnboardingData,
//     completeOnboarding,
//     loadOnboardingData,
//     updateStep,
//     nextStep,
//     prevStep,
//     updateFormData,
//     validateStep,
//     resetOnboarding,
    
//     // Helpers
//     getProgressPercentage,
//     canProceedToNext,
    
//     // Legacy compatibility
//     setFormData: updateFormData
//   };

//   return (
//     <OnboardingContext.Provider value={value}>
//       {children}
//     </OnboardingContext.Provider>
//   );
// };