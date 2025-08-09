// src/services/challengeService.js
import api from '../utils/api';

class ChallengeService {
  // Obtenir tous les défis disponibles
  async getChallenges(filters = {}) {
    try {
      const params = new URLSearchParams(filters);
      const response = await api.get(`/challenges?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching challenges:', error);
      // Retourner des défis de démonstration
      return [
        {
          _id: '1',
          title: 'Défi 30 jours - Squats',
          description: 'Faites des squats pendant 30 jours consécutifs',
          type: 'daily',
          category: 'strength',
          duration: 30,
          difficulty: 'beginner',
          participants: 1250,
          goal: {
            type: 'consecutive_days',
            target: 30,
            exercise: 'squats'
          },
          rewards: {
            xp: 500,
            badge: 'Maître des Squats'
          },
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active',
          isJoined: false,
          progress: 0
        },
        {
          _id: '2',
          title: 'Marathon du Mois',
          description: 'Parcourez 42 km au total ce mois-ci',
          type: 'monthly',
          category: 'cardio',
          duration: 30,
          difficulty: 'intermediate',
          participants: 890,
          goal: {
            type: 'total_distance',
            target: 42,
            unit: 'km'
          },
          rewards: {
            xp: 750,
            badge: 'Coureur Marathonien'
          },
          startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString(),
          endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString(),
          status: 'active',
          isJoined: true,
          progress: 15.5
        },
        {
          _id: '3',
          title: 'Semaine Intensive HIIT',
          description: 'Complétez 5 séances HIIT en une semaine',
          type: 'weekly',
          category: 'hiit',
          duration: 7,
          difficulty: 'advanced',
          participants: 456,
          goal: {
            type: 'workout_count',
            target: 5,
            workoutType: 'hiit'
          },
          rewards: {
            xp: 300,
            badge: 'Guerrier HIIT'
          },
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active',
          isJoined: false,
          progress: 0
        }
      ];
    }
  }

  // Obtenir les défis auxquels l'utilisateur participe
  async getMyActiveChallenges() {
    try {
      const response = await api.get('/challenges/my-active');
      return response.data;
    } catch (error) {
      console.error('Error fetching my active challenges:', error);
      return [];
    }
  }

  // Obtenir les détails d'un défi
  async getChallenge(challengeId) {
    try {
      const response = await api.get(`/challenges/${challengeId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge:', error);
      throw new Error('Défi non trouvé');
    }
  }

  // Rejoindre un défi
  async joinChallenge(challengeId) {
    try {
      const response = await api.post(`/challenges/${challengeId}/join`);
      return response.data;
    } catch (error) {
      console.error('Error joining challenge:', error);
      throw new Error('Impossible de rejoindre ce défi');
    }
  }

  // Quitter un défi
  async leaveChallenge(challengeId) {
    try {
      await api.post(`/challenges/${challengeId}/leave`);
    } catch (error) {
      console.error('Error leaving challenge:', error);
      throw new Error('Impossible de quitter ce défi');
    }
  }

  // Mettre à jour le progrès d'un défi
  async updateChallengeProgress(challengeId, progressData) {
    try {
      const response = await api.post(`/challenges/${challengeId}/progress`, progressData);
      return response.data;
    } catch (error) {
      console.error('Error updating challenge progress:', error);
      throw new Error('Impossible de mettre à jour le progrès');
    }
  }

  // Obtenir le classement d'un défi
  async getChallengeLeaderboard(challengeId) {
    try {
      const response = await api.get(`/challenges/${challengeId}/leaderboard`);
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge leaderboard:', error);
      return [];
    }
  }

  // Créer un défi personnalisé
  async createChallenge(challengeData) {
    try {
      const response = await api.post('/challenges', challengeData);
      return response.data;
    } catch (error) {
      console.error('Error creating challenge:', error);
      throw new Error('Impossible de créer le défi');
    }
  }

  // Obtenir l'historique des défis complétés
  async getCompletedChallenges() {
    try {
      const response = await api.get('/challenges/completed');
      return response.data;
    } catch (error) {
      console.error('Error fetching completed challenges:', error);
      return [];
    }
  }

  // Obtenir les défis recommandés
  async getRecommendedChallenges() {
    try {
      const response = await api.get('/challenges/recommended');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommended challenges:', error);
      return [];
    }
  }

  // Obtenir les défis populaires
  async getPopularChallenges() {
    try {
      const response = await api.get('/challenges/popular');
      return response.data;
    } catch (error) {
      console.error('Error fetching popular challenges:', error);
      return [];
    }
  }

  // Partager un défi
  async shareChallenge(challengeId, shareData) {
    try {
      const response = await api.post(`/challenges/${challengeId}/share`, shareData);
      return response.data;
    } catch (error) {
      console.error('Error sharing challenge:', error);
      throw new Error('Impossible de partager ce défi');
    }
  }

  // Signaler un défi inapproprié
  async reportChallenge(challengeId, reason) {
    try {
      await api.post(`/challenges/${challengeId}/report`, { reason });
    } catch (error) {
      console.error('Error reporting challenge:', error);
      throw new Error('Impossible de signaler ce défi');
    }
  }

  // Calculer le progrès d'un défi
  calculateProgress(challenge, userStats) {
    if (!challenge || !challenge.goal) return 0;

    const { goal } = challenge;
    let current = 0;

    switch (goal.type) {
      case 'consecutive_days':
        current = userStats.currentStreak || 0;
        break;
      case 'total_distance':
        current = userStats.totalDistance || 0;
        break;
      case 'workout_count':
        current = userStats.workoutCount || 0;
        break;
      case 'calories_burned':
        current = userStats.totalCalories || 0;
        break;
      case 'total_time':
        current = userStats.totalMinutes || 0;
        break;
      default:
        current = 0;
    }

    const progress = Math.min((current / goal.target) * 100, 100);
    return Math.round(progress);
  }

  // Vérifier si un défi est terminé
  isChallengeCompleted(challenge, userProgress) {
    return userProgress >= 100;
  }

  // Obtenir le temps restant pour un défi
  getTimeRemaining(challenge) {
    if (!challenge.endDate) return null;

    const now = new Date();
    const endDate = new Date(challenge.endDate);
    const timeLeft = endDate.getTime() - now.getTime();

    if (timeLeft <= 0) return null;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }

  // Formater le temps restant
  formatTimeRemaining(timeRemaining) {
    if (!timeRemaining) return 'Terminé';

    const { days, hours, minutes } = timeRemaining;

    if (days > 0) {
      return `${days} jour${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}min`;
    } else {
      return `${minutes} min`;
    }
  }

  // Obtenir les statistiques des défis
  async getChallengeStats() {
    try {
      const response = await api.get('/challenges/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge stats:', error);
      return {
        totalJoined: 0,
        totalCompleted: 0,
        currentActive: 0,
        totalXpEarned: 0,
        badgesEarned: 0
      };
    }
  }
}

export const challengeService = new ChallengeService();