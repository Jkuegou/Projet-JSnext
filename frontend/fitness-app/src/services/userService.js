// src/services/userService.js
import api from '../utils/api'; // ✅ Import par défaut au lieu de destructuring

class UserService {
  // Obtenir le profil utilisateur
  async getProfile() {
    try {
      const response = await api.get('/user/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      // Retourner un profil par défaut
      return {
        _id: 'user-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        age: 30,
        gender: 'male',
        height: 175,
        weight: 70,
        fitnessLevel: 'intermediate',
        goals: ['lose_weight', 'build_muscle'],
        preferences: {
          workoutDuration: 45,
          workoutFrequency: 3,
          preferredTime: 'morning',
          equipment: ['bodyweight', 'dumbbells']
        },
        joinedAt: new Date().toISOString(),
        avatar: null
      };
    }
  }

  // Mettre à jour le profil
  async updateProfile(profileData) {
    try {
      const response = await api.put('/user/profile', profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw new Error('Impossible de mettre à jour le profil');
    }
  }

  // Obtenir les préférences utilisateur
  async getPreferences() {
    try {
      const response = await api.get('/user/preferences');
      return response.data;
    } catch (error) {
      console.error('Error fetching preferences:', error);
      return {
        notifications: {
          workout: true,
          achievements: true,
          social: false,
          email: true,
          push: false
        },
        privacy: {
          profileVisible: true,
          workoutsVisible: false,
          progressVisible: false
        },
        units: {
          weight: 'kg',
          distance: 'km',
          temperature: 'celsius'
        },
        theme: 'light',
        language: 'fr'
      };
    }
  }

  // Mettre à jour les préférences
  async updatePreferences(preferences) {
    try {
      const response = await api.put('/user/preferences', preferences);
      return response.data;
    } catch (error) {
      console.error('Error updating preferences:', error);
      throw new Error('Impossible de mettre à jour les préférences');
    }
  }

  // Uploader un avatar
  async uploadAvatar(file) {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      
      const response = await api.post('/user/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading avatar:', error);
      throw new Error('Impossible de télécharger l\'avatar');
    }
  }

  // Obtenir les statistiques utilisateur
  async getUserStats() {
    try {
      const response = await api.get('/user/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching user stats:', error);
      return {
        totalWorkouts: 0,
        totalMinutes: 0,
        totalCalories: 0,
        currentStreak: 0,
        longestStreak: 0,
        level: 1,
        xp: 0,
        nextLevelXp: 100,
        badges: [],
        achievements: []
      };
    }
  }

  // Obtenir l'historique d'activité
  async getActivityHistory(limit = 20) {
    try {
      const response = await api.get(`/user/activity?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching activity history:', error);
      // Retourner un historique de démonstration
      const activities = [];
      const now = new Date();
      
      for (let i = 0; i < Math.min(limit, 10); i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        
        activities.push({
          _id: `activity-${i}`,
          type: i % 3 === 0 ? 'workout' : i % 3 === 1 ? 'goal' : 'achievement',
          title: i % 3 === 0 ? 'Entraînement terminé' : i % 3 === 1 ? 'Objectif atteint' : 'Badge obtenu',
          description: 'Description de l\'activité',
          date: date.toISOString(),
          metadata: {}
        });
      }
      
      return activities;
    }
  }

  // Obtenir les amis/suivis
  async getFriends() {
    try {
      const response = await api.get('/user/friends');
      return response.data;
    } catch (error) {
      console.error('Error fetching friends:', error);
      return [];
    }
  }

  // Ajouter un ami
  async addFriend(userId) {
    try {
      const response = await api.post(`/user/friends/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error adding friend:', error);
      throw new Error('Impossible d\'ajouter cet ami');
    }
  }

  // Supprimer un ami
  async removeFriend(userId) {
    try {
      await api.delete(`/user/friends/${userId}`);
    } catch (error) {
      console.error('Error removing friend:', error);
      throw new Error('Impossible de supprimer cet ami');
    }
  }

  // Rechercher des utilisateurs
  async searchUsers(query) {
    try {
      const response = await api.get(`/user/search?q=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching users:', error);
      return [];
    }
  }

  // Obtenir le classement
  async getLeaderboard(type = 'weekly', limit = 10) {
    try {
      const response = await api.get(`/user/leaderboard?type=${type}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }
  }

  // Calculer le niveau utilisateur
  calculateLevel(xp) {
    // Formule simple : chaque niveau nécessite 100 XP de plus que le précédent
    let level = 1;
    let requiredXp = 100;
    let totalXp = 0;
    
    while (totalXp + requiredXp <= xp) {
      totalXp += requiredXp;
      level++;
      requiredXp += 50; // Augmente la difficulté progressivement
    }
    
    return {
      level,
      currentXp: xp - totalXp,
      nextLevelXp: requiredXp,
      totalXp: xp
    };
  }

  // Obtenir les récompenses disponibles
  async getRewards() {
    try {
      const response = await api.get('/user/rewards');
      return response.data;
    } catch (error) {
      console.error('Error fetching rewards:', error);
      return [
        {
          _id: '1',
          name: 'Badge Débutant',
          description: 'Complétez votre premier entraînement',
          icon: '🏅',
          type: 'badge',
          requirement: 'complete_first_workout',
          earned: false
        },
        {
          _id: '2',
          name: 'Guerrier du Week-end',
          description: 'Entraînez-vous 5 jours consécutifs',
          icon: '⚔️',
          type: 'badge',
          requirement: 'workout_streak_5',
          earned: false
        }
      ];
    }
  }

  // Réclamer une récompense
  async claimReward(rewardId) {
    try {
      const response = await api.post(`/user/rewards/${rewardId}/claim`);
      return response.data;
    } catch (error) {
      console.error('Error claiming reward:', error);
      throw new Error('Impossible de réclamer cette récompense');
    }
  }

  // Supprimer le compte
  async deleteAccount() {
    try {
      await api.delete('/user/account');
    } catch (error) {
      console.error('Error deleting account:', error);
      throw new Error('Impossible de supprimer le compte');
    }
  }

  // Exporter les données
  async exportData() {
    try {
      const response = await api.get('/user/export');
      return response.data;
    } catch (error) {
      console.error('Error exporting data:', error);
      throw new Error('Impossible d\'exporter les données');
    }
  }

  // Changer le mot de passe
  async changePassword(currentPassword, newPassword) {
    try {
      const response = await api.post('/user/change-password', {
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      console.error('Error changing password:', error);
      throw new Error('Impossible de changer le mot de passe');
    }
  }
}

// Export par défaut pour être cohérent avec les autres services
export default new UserService();