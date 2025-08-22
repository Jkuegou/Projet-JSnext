// src/services/onboardingService.js
import api from '../config/api';

const onboardingService = {
  // Envoyer les données complètes d'onboarding
  completeOnboarding: async (onboardingData) => {
    try {
      const response = await api.post('/api/onboarding/complete', onboardingData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la finalisation de l\'onboarding:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la sauvegarde de votre profil'
      );
    }
  },

  // Sauvegarder le progrès d'onboarding
  saveProgress: async (userId, progressData) => {
    try {
      const response = await api.post('/api/onboarding/progress', {
        userId,
        ...progressData
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du progrès:', error);
      // Ne pas lever d'erreur pour la sauvegarde du progrès
      return null;
    }
  },

  // Récupérer le progrès sauvegardé
  getProgress: async (userId) => {
    try {
      const response = await api.get(`/api/onboarding/progress/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du progrès:', error);
      return null;
    }
  },

  // Vérifier si l'onboarding est complété
  checkOnboardingStatus: async (userId) => {
    try {
      const response = await api.get(`/api/onboarding/status/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la vérification du statut:', error);
      return { completed: false };
    }
  },

  // Mettre à jour les informations personnelles
  updatePersonalInfo: async (userId, personalInfo) => {
    try {
      const response = await api.put(`/api/users/${userId}/personal-info`, personalInfo);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des infos personnelles:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la mise à jour des informations'
      );
    }
  },

  // Mettre à jour les objectifs fitness
  updateFitnessGoals: async (userId, fitnessGoals) => {
    try {
      const response = await api.put(`/api/users/${userId}/fitness-goals`, fitnessGoals);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des objectifs:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la mise à jour des objectifs'
      );
    }
  },

  // Mettre à jour le planning d'entraînement
  updateTrainingSchedule: async (userId, schedule) => {
    try {
      const response = await api.put(`/api/users/${userId}/training-schedule`, schedule);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du planning:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la mise à jour du planning'
      );
    }
  },

  // Mettre à jour les préférences
  updatePreferences: async (userId, preferences) => {
    try {
      const response = await api.put(`/api/users/${userId}/preferences`, preferences);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des préférences:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la mise à jour des préférences'
      );
    }
  },

  // Générer le plan d'entraînement initial
  generateInitialWorkoutPlan: async (userId, userProfile) => {
    try {
      const response = await api.post('/api/workout-plans/generate', {
        userId,
        ...userProfile
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la génération du plan:', error);
      throw new Error(
        error.response?.data?.message || 
        'Erreur lors de la génération du plan d\'entraînement'
      );
    }
  },

  // Calculer les recommandations nutritionnelles
  calculateNutritionRecommendations: async (userProfile) => {
    try {
      const response = await api.post('/api/nutrition/recommendations', userProfile);
      return response.data;
    } catch (error) {
      console.error('Erreur lors du calcul nutritionnel:', error);
      // Les recommandations nutritionnelles sont optionnelles
      return null;
    }
  }
};

export default onboardingService;