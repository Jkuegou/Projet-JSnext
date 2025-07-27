// // services/onboardingService.js
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// class OnboardingService {
//   constructor() {
//     this.api = axios.create({
//       baseURL: API_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Intercepteur pour ajouter le token d'authentification
//     this.api.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );

//     // Intercepteur pour gérer les erreurs de réponse
//     this.api.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response?.status === 401) {
//           localStorage.removeItem('token');
//           window.location.href = '/login';
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   // Calculer l'IMC
//   calculateBMI(height, weight) {
//     if (!height || !weight) return { bmi: 0, category: '' };
    
//     const heightInMeters = height / 100;
//     const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
//     let category = '';
//     if (bmi < 18.5) category = 'Poids insuffisant';
//     else if (bmi < 25) category = 'Poids normal';
//     else if (bmi < 30) category = 'Surpoids';
//     else category = 'Obésité';
    
//     return { bmi: parseFloat(bmi), category };
//   }

//   // Sauvegarder le profil utilisateur complet
//   async saveUserProfile(profileData) {
//     try {
//       const { bmi, category } = this.calculateBMI(profileData.height, profileData.weight);
      
//       const completeProfile = {
//         ...profileData,
//         bmi: bmi,
//         bmiCategory: category,
//         onboardingCompleted: true,
//         createdAt: new Date().toISOString()
//       };

//       const response = await this.api.post('/api/users/profile', completeProfile);
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la sauvegarde du profil'
//       );
//     }
//   }

//   // Sauvegarder les informations personnelles (étape 1)
//   async savePersonalInfo(personalData) {
//     try {
//       const response = await this.api.patch('/api/users/profile/personal', {
//         gender: personalData.gender,
//         age: parseInt(personalData.age),
//         dateOfBirth: this.calculateDateOfBirth(personalData.age)
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la sauvegarde des informations personnelles'
//       );
//     }
//   }

//   // Sauvegarder le planning d'entraînement (étape 2)
//   async saveWorkoutSchedule(scheduleData) {
//     try {
//       const response = await this.api.patch('/api/users/profile/workout-schedule', {
//         workoutDays: scheduleData.workoutDays,
//         workoutTime: scheduleData.workoutTime,
//         sessionsPerWeek: scheduleData.workoutDays.length
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la sauvegarde du planning'
//       );
//     }
//   }

//   // Sauvegarder les mensurations (étape 3)
//   async saveMeasurements(measurementsData) {
//     try {
//       const { bmi, category } = this.calculateBMI(measurementsData.height, measurementsData.weight);
      
//       const response = await this.api.patch('/api/users/profile/measurements', {
//         height: parseFloat(measurementsData.height),
//         weight: parseFloat(measurementsData.weight),
//         bmi: bmi,
//         bmiCategory: category
//       });

//       // Créer une première entrée dans l'historique des poids
//       await this.createWeightEntry(measurementsData.weight);
      
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la sauvegarde des mensurations'
//       );
//     }
//   }

//   // Sauvegarder les objectifs fitness (étape 4)
//   async saveFitnessGoals(goalsData) {
//     try {
//       const response = await this.api.patch('/api/users/profile/fitness-goals', {
//         targetBodyParts: goalsData.bodyParts,
//         fitnessGoals: this.generateFitnessGoals(goalsData.bodyParts)
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la sauvegarde des objectifs'
//       );
//     }
//   }

//   // Marquer l'onboarding comme terminé
//   async completeOnboarding() {
//     try {
//       const response = await this.api.patch('/api/users/profile/complete-onboarding', {
//         onboardingCompleted: true,
//         onboardingCompletedAt: new Date().toISOString()
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la finalisation du profil'
//       );
//     }
//   }

//   // Créer une entrée dans l'historique des poids
//   async createWeightEntry(weight) {
//     try {
//       const response = await this.api.post('/api/users/weight-history', {
//         weight: parseFloat(weight),
//         date: new Date().toISOString()
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la création de l\'entrée de poids:', error);
//       // On ne lance pas d'erreur pour ne pas bloquer l'onboarding
//     }
//   }

//   // Récupérer le profil utilisateur existant
//   async getUserProfile() {
//     try {
//       const response = await this.api.get('/api/users/profile');
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || 
//         'Erreur lors de la récupération du profil'
//       );
//     }
//   }

//   // Générer des recommandations d'exercices basées sur les objectifs
//   async getExerciseRecommendations(bodyParts) {
//     try {
//       const response = await this.api.post('/api/exercises/recommendations', {
//         targetBodyParts: bodyParts
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la récupération des recommandations:', error);
//       return [];
//     }
//   }

//   // Créer un plan d'entraînement personnalisé
//   async createPersonalizedWorkoutPlan(profileData) {
//     try {
//       const response = await this.api.post('/api/workout-plans/personalized', {
//         userProfile: profileData,
//         difficulty: this.calculateDifficultyLevel(profileData),
//         duration: this.calculateWorkoutDuration(profileData.workoutDays.length)
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la création du plan d\'entraînement:', error);
//       return null;
//     }
//   }

//   // Utilitaires privées
//   calculateDateOfBirth(age) {
//     const currentYear = new Date().getFullYear();
//     return `${currentYear - age}-01-01`;
//   }

//   generateFitnessGoals(bodyParts) {
//     const goals = [];
    
//     const goalMapping = {
//       'Bras': ['Développer la force des bras', 'Tonifier les muscles des bras'],
//       'Poitrine': ['Renforcer les pectoraux', 'Développer la masse musculaire du torse'],
//       'Dos': ['Améliorer la posture', 'Renforcer les muscles dorsaux'],
//       'Épaules': ['Élargir les épaules', 'Renforcer la ceinture scapulaire'],
//       'Abdominaux': ['Obtenir des abdos visibles', 'Renforcer le core'],
//       'Jambes': ['Développer la puissance des jambes', 'Tonifier les cuisses et mollets'],
//       'Fessiers': ['Tonifier et galber les fessiers', 'Améliorer la force des hanches'],
//       'Cardio': ['Améliorer l\'endurance cardiovasculaire', 'Brûler les graisses']
//     };

//     bodyParts.forEach(part => {
//       if (goalMapping[part]) {
//         goals.push(...goalMapping[part]);
//       }
//     });

//     return goals;
//   }

//   calculateDifficultyLevel(profileData) {
//     // Simple algorithme pour déterminer le niveau de difficulté
//     let difficultyScore = 0;
    
//     // Basé sur l'âge
//     if (profileData.age < 25) difficultyScore += 2;
//     else if (profileData.age < 40) difficultyScore += 1;
    
//     // Basé sur la fréquence d'entraînement
//     difficultyScore += Math.min(profileData.workoutDays?.length || 0, 3);
    
//     // Basé sur l'IMC
//     if (profileData.bmi && profileData.bmi >= 18.5 && profileData.bmi < 25) {
//       difficultyScore += 1;
//     }

//     if (difficultyScore <= 2) return 'Débutant';
//     else if (difficultyScore <= 4) return 'Intermédiaire';
//     else return 'Avancé';
//   }

//   calculateWorkoutDuration(sessionsPerWeek) {
//     // Durée recommandée basée sur la fréquence
//     if (sessionsPerWeek <= 2) return 60; // 60 minutes
//     else if (sessionsPerWeek <= 4) return 45; // 45 minutes
//     else return 30; // 30 minutes pour les programmes intensifs
//   }

//   // Vérifier si l'utilisateur a terminé l'onboarding
//   async checkOnboardingStatus() {
//     try {
//       const profile = await this.getUserProfile();
//       return profile.onboardingCompleted || false;
//     } catch (error) {
//       return false;
//     }
//   }

//   // Sauvegarder les données temporairement (local storage)
//   saveTemporaryData(step, data) {
//     const existingData = JSON.parse(localStorage.getItem('onboarding_temp') || '{}');
//     existingData[step] = data;
//     localStorage.setItem('onboarding_temp', JSON.stringify(existingData));
//   }

//   // Récupérer les données temporaires
//   getTemporaryData() {
//     return JSON.parse(localStorage.getItem('onboarding_temp') || '{}');
//   }

//   // Nettoyer les données temporaires
//   clearTemporaryData() {
//     localStorage.removeItem('onboarding_temp');
//   }

//   // Validation des données d'étape
//   validateStepData(step, data) {
//     switch (step) {
//       case 0: // Informations personnelles
//         return data.gender && data.age && parseInt(data.age) >= 13 && parseInt(data.age) <= 100;
      
//       case 1: // Planning d'entraînement
//         return data.workoutDays && data.workoutDays.length > 0 && data.workoutTime;
      
//       case 2: // Mensurations
//         return data.height && data.weight && 
//                parseFloat(data.height) >= 100 && parseFloat(data.height) <= 250 &&
//                parseFloat(data.weight) >= 30 && parseFloat(data.weight) <= 300;
      
//       case 3: // Objectifs
//         return data.bodyParts && data.bodyParts.length > 0;
      
//       default:
//         return false;
//     }
//   }

//   // Obtenir des conseils personnalisés basés sur l'IMC
//   getBMIAdvice(bmi, category) {
//     const advice = {
//       'Poids insuffisant': {
//         message: 'Votre poids est légèrement en dessous de la normale.',
//         recommendations: [
//           'Concentrez-vous sur la prise de masse musculaire',
//           'Adoptez une alimentation riche et équilibrée',
//           'Privilégiez les exercices de renforcement musculaire'
//         ]
//       },
//       'Poids normal': {
//         message: 'Félicitations ! Votre poids est dans la norme.',
//         recommendations: [
//           'Maintenez votre poids actuel',
//           'Variez vos exercices pour un développement harmonieux',
//           'Continuez avec une alimentation équilibrée'
//         ]
//       },
//       'Surpoids': {
//         message: 'Votre poids est légèrement au-dessus de la normale.',
//         recommendations: [
//           'Intégrez plus d\'exercices cardiovasculaires',
//           'Surveillez votre alimentation',
//           'Fixez-vous un objectif de perte de poids progressif'
//         ]
//       },
//       'Obésité': {
//         message: 'Il est recommandé de consulter un professionnel de santé.',
//         recommendations: [
//           'Commencez par des exercices doux et progressifs',
//           'Consultez un nutritionniste',
//           'Faites un bilan de santé avant de commencer'
//         ]
//       }
//     };

//     return advice[category] || {
//       message: 'Données insuffisantes pour une évaluation.',
//       recommendations: ['Renseignez vos mensurations complètes']
//     };
//   }
// }

// const onboardingService = new OnboardingService();
// export default onboardingService;
// import axios from 'axios';
// import api from './api';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// class OnboardingService {
//    async saveOnboardingData(onboardingData) {
//     try {
//       const response = await api.post('/onboarding', onboardingData);
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde des données d\'onboarding:', error);
//       throw error;
//     }
//   }

//   // Récupérer les données d'onboarding d'un utilisateur
//   async getUserOnboardingData(userId) {
//     try {
//       const response = await api.get(`/onboarding/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la récupération des données d\'onboarding:', error);
//       throw error;
//     }
//   }

//   // Mettre à jour les données d'onboarding
//   async updateOnboardingData(userId, updateData) {
//     try {
//       const response = await api.put(`/onboarding/${userId}`, updateData);
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour des données d\'onboarding:', error);
//       throw error;
//     }
//   }

//   // Marquer l'onboarding comme terminé
//   async completeOnboarding(userId) {
//     try {
//       const response = await api.post(`/onboarding/${userId}/complete`);
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la finalisation de l\'onboarding:', error);
//       throw error;
//     }
//   }

//   // Vérifier si l'utilisateur a terminé l'onboarding
//   async checkOnboardingStatus(userId) {
//     try {
//       const response = await api.get(`/onboarding/${userId}/status`);
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la vérification du statut d\'onboarding:', error);
//       return { completed: false };
//     }
//   }
//   constructor() {
//     this.api = axios.create({
//       baseURL: API_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     this.api.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     this.api.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response?.status === 401) {
//           localStorage.removeItem('token');
//           window.location.href = '/login';
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   calculateBMI(height, weight) {
//     if (!height || !weight) return { bmi: 0, category: '' };
//     const heightInMeters = height / 100;
//     const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
//     let category = '';
//     if (bmi < 18.5) category = 'Poids insuffisant';
//     else if (bmi < 25) category = 'Poids normal';
//     else if (bmi < 30) category = 'Surpoids';
//     else category = 'Obésité';
//     return { bmi: parseFloat(bmi), category };
//   }

//   async saveUserProfile(profileData) {
//     try {
//       const { bmi, category } = this.calculateBMI(profileData.height, profileData.weight);
//       const completeProfile = {
//         ...profileData,
//         bmi,
//         bmiCategory: category,
//         onboardingCompleted: true,
//         createdAt: new Date().toISOString(),
//       };
//       const response = await this.api.post('/users/profile', completeProfile);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la sauvegarde du profil');
//     }
//   }

//   async savePersonalInfo(personalData) {
//     try {
//       const response = await this.api.patch('/users/profile/personal', {
//         gender: personalData.gender,
//         age: parseInt(personalData.age),
//         dateOfBirth: this.calculateDateOfBirth(personalData.age),
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la sauvegarde des informations personnelles');
//     }
//   }

//   async saveWorkoutSchedule(scheduleData) {
//     try {
//       const response = await this.api.patch('/users/profile/workout-schedule', {
//         workoutDays: scheduleData.workoutDays,
//         workoutTime: scheduleData.workoutTime,
//         sessionsPerWeek: scheduleData.workoutDays.length,
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la sauvegarde du planning');
//     }
//   }

//   async saveMeasurements(measurementsData) {
//     try {
//       const { bmi, category } = this.calculateBMI(measurementsData.height, measurementsData.weight);
//       const response = await this.api.patch('/users/profile/measurements', {
//         height: parseFloat(measurementsData.height),
//         weight: parseFloat(measurementsData.weight),
//         bmi,
//         bmiCategory: category,
//       });
//       await this.createWeightEntry(measurementsData.weight);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la sauvegarde des mensurations');
//     }
//   }

//   async saveFitnessGoals(goalsData) {
//     try {
//       const response = await this.api.patch('/users/profile/fitness-goals', {
//         targetBodyParts: goalsData.bodyParts,
//         fitnessGoals: this.generateFitnessGoals(goalsData.bodyParts),
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la sauvegarde des objectifs');
//     }
//   }

//   async completeOnboarding() {
//     try {
//       const response = await this.api.patch('/users/profile/complete-onboarding', {
//         onboardingCompleted: true,
//         onboardingCompletedAt: new Date().toISOString(),
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la finalisation du profil');
//     }
//   }

//   async createWeightEntry(weight) {
//     try {
//       const response = await this.api.post('/users/weight-history', {
//         weight: parseFloat(weight),
//         date: new Date().toISOString(),
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Erreur lors de la création de l'entrée de poids:", error);
//     }
//   }

//   async getUserProfile() {
//     try {
//       const response = await this.api.get('/users/profile');
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Erreur lors de la récupération du profil');
//     }
//   }

//   async getExerciseRecommendations(bodyParts) {
//     try {
//       const response = await this.api.post('/exercises/recommendations', {
//         targetBodyParts: bodyParts,
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Erreur lors de la récupération des recommandations:', error);
//       return [];
//     }
//   }

//   async createPersonalizedWorkoutPlan(profileData) {
//     try {
//       const response = await this.api.post('/workout-plans/personalized', {
//         userProfile: profileData,
//         difficulty: this.calculateDifficultyLevel(profileData),
//         duration: this.calculateWorkoutDuration(profileData.workoutDays.length),
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Erreur lors de la création du plan d'entraînement:", error);
//       return null;
//     }
//   }

//   calculateDateOfBirth(age) {
//     const currentYear = new Date().getFullYear();
//     return `${currentYear - age}-01-01`;
//   }

//   generateFitnessGoals(bodyParts) {
//     const goalMapping = {
//       Bras: ['Développer la force des bras', 'Tonifier les muscles des bras'],
//       Poitrine: ['Renforcer les pectoraux', 'Développer la masse musculaire du torse'],
//       Dos: ['Améliorer la posture', 'Renforcer les muscles dorsaux'],
//       Épaules: ['Élargir les épaules', 'Renforcer la ceinture scapulaire'],
//       Abdominaux: ['Obtenir des abdos visibles', 'Renforcer le core'],
//       Jambes: ['Développer la puissance des jambes', 'Tonifier les cuisses et mollets'],
//       Fessiers: ['Tonifier et galber les fessiers', 'Améliorer la force des hanches'],
//       Cardio: ['Améliorer l\'endurance cardiovasculaire', 'Brûler les graisses'],
//     };

//     return bodyParts.flatMap(part => goalMapping[part] || []);
//   }

//   calculateDifficultyLevel(profileData) {
//     let difficultyScore = 0;
//     if (profileData.age < 25) difficultyScore += 2;
//     else if (profileData.age < 40) difficultyScore += 1;
//     difficultyScore += Math.min(profileData.workoutDays?.length || 0, 3);
//     if (profileData.bmi && profileData.bmi >= 18.5 && profileData.bmi < 25) {
//       difficultyScore += 1;
//     }

//     if (difficultyScore <= 2) return 'Débutant';
//     else if (difficultyScore <= 4) return 'Intermédiaire';
//     else return 'Avancé';
//   }

//   calculateWorkoutDuration(sessionsPerWeek) {
//     if (sessionsPerWeek <= 2) return 60;
//     else if (sessionsPerWeek <= 4) return 45;
//     else return 30;
//   }

//   async checkOnboardingStatus() {
//     try {
//       const profile = await this.getUserProfile();
//       return profile.onboardingCompleted || false;
//     } catch (error) {
//       return false;
//     }
//   }

//   saveTemporaryData(step, data) {
//     const existingData = JSON.parse(localStorage.getItem('onboarding_temp') || '{}');
//     existingData[step] = data;
//     localStorage.setItem('onboarding_temp', JSON.stringify(existingData));
//   }

//   getTemporaryData() {
//     return JSON.parse(localStorage.getItem('onboarding_temp') || '{}');
//   }

//   clearTemporaryData() {
//     localStorage.removeItem('onboarding_temp');
//   }

//   validateStepData(step, data) {
//     switch (step) {
//       case 0:
//         return data.gender && data.age && parseInt(data.age) >= 13 && parseInt(data.age) <= 100;
//       case 1:
//         return data.workoutDays && data.workoutDays.length > 0 && data.workoutTime;
//       case 2:
//         return data.height && data.weight &&
//           parseFloat(data.height) >= 100 && parseFloat(data.height) <= 250 &&
//           parseFloat(data.weight) >= 30 && parseFloat(data.weight) <= 300;
//       case 3:
//         return data.bodyParts && data.bodyParts.length > 0;
//       default:
//         return false;
//     }
//   }

//   getBMIAdvice(bmi, category) {
//     const advice = {
//       'Poids insuffisant': {
//         message: 'Votre poids est légèrement en dessous de la normale.',
//         recommendations: [
//           'Concentrez-vous sur la prise de masse musculaire',
//           'Adoptez une alimentation riche et équilibrée',
//           'Privilégiez les exercices de renforcement musculaire'
//         ]
//       },
//       'Poids normal': {
//         message: 'Félicitations ! Votre poids est dans la norme.',
//         recommendations: [
//           'Maintenez votre poids actuel',
//           'Variez vos exercices pour un développement harmonieux',
//           'Continuez avec une alimentation équilibrée'
//         ]
//       },
//       'Surpoids': {
//         message: 'Votre poids est légèrement au-dessus de la normale.',
//         recommendations: [
//           'Intégrez plus d\'exercices cardiovasculaires',
//           'Surveillez votre alimentation',
//           'Fixez-vous un objectif de perte de poids progressif'
//         ]
//       },
//       'Obésité': {
//         message: 'Il est recommandé de consulter un professionnel de santé.',
//         recommendations: [
//           'Commencez par des exercices doux et progressifs',
//           'Consultez un nutritionniste',
//           'Faites un bilan de santé avant de commencer'
//         ]
//       }
//     };

//     return advice[category] || {
//       message: 'Données insuffisantes pour une évaluation.',
//       recommendations: ['Renseignez vos mensurations complètes']
//     };
//   }
// }

// const onboardingService = new OnboardingService();
// export default onboardingService;
import api from './api'; 
 
class OnboardingService { 
  // Submit onboarding data 
  async submitOnboarding(data) { 
    try { 
      const response = await api.post('/onboarding', data); 
      return response.data; 
    } catch (error) { 
      throw new Error(error.response?.data?.message || 'Failed to submit onboarding data'); 
    } 
  } 
 
  // Get user's onboarding data 
  async getOnboardingData() { 
    try { 
      const response = await api.get('/onboarding'); 
      return response.data; 
    } catch (error) { 
      if (error.response?.status === 404) { 
        return null; // No onboarding data found 
      } 
      throw new Error(error.response?.data?.message || 'Failed to fetch onboarding data'); 
    } 
  } 
 
  // Update onboarding data 
  async updateOnboarding(data) { 
    try { 
      const response = await api.put('/onboarding', data); 
      return response.data; 
    } catch (error) { 
      throw new Error(error.response?.data?.message || 'Failed to update onboarding data'); 
    } 
  } 
 
  // Delete onboarding data 
  async deleteOnboarding() { 
    try { 
      const response = await api.delete('/onboarding'); 
      return response.data; 
    } catch (error) { 
      throw new Error(error.response?.data?.message || 'Failed to delete onboarding data'); 
    } 
  } 
 
  // Validate onboarding data 
  static validateOnboardingData(data) { 
    const errors = {}; 
 
    if (!data.weight || isNaN(data.weight) || data.weight <= 0) { 
      errors.weight = 'Weight must be a positive number'; 
    } 
 
    if (!data.trainingType || !['Gain Weight', 'Build Muscle', 'Lose Fat'].includes(data.trainingType)) { 
      errors.trainingType = 'Please select a valid training type'; 
    } 
 
    if (!data.trainingSchedule || !['Morning', 'Afternoon', 
'Evening'].includes(data.trainingSchedule)) { 
      errors.trainingSchedule = 'Please select a valid training schedule'; 
    } 
 
    return { 
      isValid: Object.keys(errors).length === 0, 
      errors 
    }; 
  } 
} 
 
export default new OnboardingService();