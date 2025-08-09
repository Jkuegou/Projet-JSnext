// import api from '../utils/api';

// const fitnessService = {
//   // Statistiques utilisateur
//   async getUserStats(userId) {
//     const response = await api.get(`/fitness/users/${userId}/stats`);
//     return response.data;
//   },

//   // Entraînements
//   async getWorkouts(userId, params = {}) {
//     const response = await api.get(`/fitness/users/${userId}/workouts`, { params });
//     return response.data;
//   },

//   async getWorkout(workoutId) {
//     const response = await api.get(`/fitness/workouts/${workoutId}`);
//     return response.data;
//   },

//   async createWorkout(workoutData) {
//     const response = await api.post('/fitness/workouts', workoutData);
//     return response.data;
//   },

//   async updateWorkout(workoutId, workoutData) {
//     const response = await api.put(`/fitness/workouts/${workoutId}`, workoutData);
//     return response.data;
//   },

//   async deleteWorkout(workoutId) {
//     const response = await api.delete(`/fitness/workouts/${workoutId}`);
//     return response.data;
//   },

//   // Progression
//   async getUserProgress(userId, period = '30days') {
//     const response = await api.get(`/fitness/users/${userId}/progress`, {
//       params: { period }
//     });
//     return response.data;
//   },

//   async addProgressEntry(progressData) {
//     const response = await api.post('/fitness/progress', progressData);
//     return response.data;
//   },

//   // Exercices
//   async getExercises(params = {}) {
//     const response = await api.get('/fitness/exercises', { params });
//     return response.data;
//   },

//   async getExercise(exerciseId) {
//     const response = await api.get(`/fitness/exercises/${exerciseId}`);
//     return response.data;
//   },

//   // Défis
//   async getChallenges(userId) {
//     const response = await api.get(`/fitness/users/${userId}/challenges`);
//     return response.data;
//   },

//   async joinChallenge(challengeId) {
//     const response = await api.post(`/fitness/challenges/${challengeId}/join`);
//     return response.data;
//   },

//   async leaveChallenge(challengeId) {
//     const response = await api.delete(`/fitness/challenges/${challengeId}/leave`);
//     return response.data;
//   }
// };

// export default fitnessService;
// src/services/fitnessService.js
import api from '../utils/api';

class FitnessService {
  // Statistiques utilisateur
  async getUserStats() {
    try {
      const response = await api.get('/fitness/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching user stats:', error);
      // Retourner des données par défaut en cas d'erreur
      return {
        totalWorkouts: 0,
        thisWeek: 0,
        thisMonth: 0,
        totalMinutes: 0,
        caloriesBurned: 0,
        avgWorkoutDuration: 0,
        currentStreak: 0,
        longestStreak: 0,
        goalWeekly: 3,
        goalMonthly: 12
      };
    }
  }

  // Données de progression
  async getProgressData(timeframe = '1M') {
    try {
      const response = await api.get(`/fitness/progress?timeframe=${timeframe}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching progress data:', error);
      // Générer des données de démonstration
      const now = new Date();
      const daysBack = timeframe === '1W' ? 7 : timeframe === '1M' ? 30 : 90;
      
      return Array.from({ length: daysBack }, (_, i) => {
        const date = new Date(now);
        date.setDate(date.getDate() - (daysBack - i - 1));
        return {
          date: date.toISOString().split('T')[0],
          workouts: Math.floor(Math.random() * 2),
          duration: Math.floor(Math.random() * 90) + 30,
          calories: Math.floor(Math.random() * 400) + 200,
          weight: 70 + Math.random() * 5 - 2.5
        };
      });
    }
  }

  // Objectifs utilisateur
  async getUserGoals() {
    try {
      const response = await api.get('/fitness/goals');
      return response.data;
    } catch (error) {
      console.error('Error fetching user goals:', error);
      return [
        {
          _id: '1',
          title: 'Perdre 5kg',
          type: 'weight_loss',
          target: 5,
          current: 2,
          unit: 'kg',
          deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active'
        },
        {
          _id: '2',
          title: '3 entraînements par semaine',
          type: 'workout_frequency',
          target: 3,
          current: 2,
          unit: 'séances/semaine',
          deadline: null,
          status: 'active'
        }
      ];
    }
  }

  // Créer un objectif
  async createGoal(goalData) {
    try {
      const response = await api.post('/fitness/goals', goalData);
      return response.data;
    } catch (error) {
      console.error('Error creating goal:', error);
      throw new Error('Impossible de créer l\'objectif');
    }
  }

  // Mettre à jour un objectif
  async updateGoal(goalId, goalData) {
    try {
      const response = await api.put(`/fitness/goals/${goalId}`, goalData);
      return response.data;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw new Error('Impossible de mettre à jour l\'objectif');
    }
  }

  // Supprimer un objectif
  async deleteGoal(goalId) {
    try {
      await api.delete(`/fitness/goals/${goalId}`);
    } catch (error) {
      console.error('Error deleting goal:', error);
      throw new Error('Impossible de supprimer l\'objectif');
    }
  }

  // Réalisations utilisateur
  async getUserAchievements() {
    try {
      const response = await api.get('/fitness/achievements');
      return response.data;
    } catch (error) {
      console.error('Error fetching achievements:', error);
      return [
        {
          _id: '1',
          title: 'Premier entraînement',
          description: 'Complétez votre premier entraînement',
          icon: '🏃‍♂️',
          earnedAt: new Date().toISOString(),
          rarity: 'common'
        },
        {
          _id: '2',
          title: 'Série de 7 jours',
          description: 'Entraînez-vous 7 jours consécutifs',
          icon: '🔥',
          earnedAt: null,
          rarity: 'rare'
        }
      ];
    }
  }

  // Enregistrer des progrès
  async recordProgress(progressData) {
    try {
      const response = await api.post('/fitness/progress', progressData);
      return response.data;
    } catch (error) {
      console.error('Error recording progress:', error);
      throw new Error('Impossible d\'enregistrer les progrès');
    }
  }

  // Métriques corporelles
  async getBodyMetrics() {
    try {
      const response = await api.get('/fitness/body-metrics');
      return response.data;
    } catch (error) {
      console.error('Error fetching body metrics:', error);
      return [];
    }
  }

  // Enregistrer une métrique corporelle
  async recordBodyMetric(metricData) {
    try {
      const response = await api.post('/fitness/body-metrics', metricData);
      return response.data;
    } catch (error) {
      console.error('Error recording body metric:', error);
      throw new Error('Impossible d\'enregistrer la métrique');
    }
  }

  // Calculer les calories brûlées
  calculateCalories(exercise, duration, weight = 70) {
    const MET_VALUES = {
      'running': 10,
      'cycling': 8,
      'swimming': 11,
      'walking': 3.5,
      'weightlifting': 6,
      'yoga': 3,
      'pilates': 4,
      'hiit': 12,
      'cardio': 7
    };

    const met = MET_VALUES[exercise.toLowerCase()] || 5;
    const durationInHours = duration / 60;
    return Math.round(met * weight * durationInHours);
  }

  // Analyser les tendances
  async getProgressTrends(metric = 'weight', period = '3M') {
    try {
      const response = await api.get(`/fitness/trends?metric=${metric}&period=${period}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching trends:', error);
      return {
        trend: 'stable',
        change: 0,
        changePercent: 0,
        prediction: null
      };
    }
  }

  // Recommandations personnalisées
  async getPersonalizedRecommendations() {
    try {
      const response = await api.get('/fitness/recommendations');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return [
        {
          type: 'workout',
          title: 'Essayez un entraînement HIIT',
          description: 'Basé sur votre historique, un HIIT pourrait vous aider à atteindre vos objectifs',
          priority: 'high'
        },
        {
          type: 'goal',
          title: 'Augmentez votre fréquence d\'entraînement',
          description: 'Passez à 4 séances par semaine pour de meilleurs résultats',
          priority: 'medium'
        }
      ];
    }
  }
}

export const fitnessService = new FitnessService();