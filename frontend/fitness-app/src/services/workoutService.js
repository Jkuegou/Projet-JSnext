// src/services/workoutService.js
import api  from '../utils/api';

class WorkoutService {
  // Obtenir tous les entraînements
  async getWorkouts(filters = {}) {
    try {
      const params = new URLSearchParams(filters);
      const response = await api.get(`/workouts?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching workouts:', error);
      // Retourner des entraînements de démonstration
      return [
        {
          _id: '1',
          name: 'Entraînement Full Body',
          description: 'Un entraînement complet pour tous les muscles',
          duration: 45,
          difficulty: 'intermediate',
          category: 'strength',
          exercises: [
            { name: 'Squats', sets: 3, reps: 15, rest: 60 },
            { name: 'Push-ups', sets: 3, reps: 12, rest: 60 },
            { name: 'Planches', sets: 3, duration: 30, rest: 60 }
          ],
          equipment: ['bodyweight'],
          calories: 300,
          createdAt: new Date().toISOString()
        },
        {
          _id: '2',
          name: 'Cardio HIIT',
          description: 'Entraînement cardio haute intensité',
          duration: 30,
          difficulty: 'advanced',
          category: 'cardio',
          exercises: [
            { name: 'Burpees', sets: 4, reps: 10, rest: 30 },
            { name: 'Mountain Climbers', sets: 4, duration: 30, rest: 30 },
            { name: 'Jumping Jacks', sets: 4, duration: 45, rest: 30 }
          ],
          equipment: ['bodyweight'],
          calories: 400,
          createdAt: new Date().toISOString()
        }
      ];
    }
  }

  // Obtenir un entraînement spécifique
  async getWorkout(workoutId) {
    try {
      const response = await api.get(`/workouts/${workoutId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching workout:', error);
      throw new Error('Entraînement non trouvé');
    }
  }

  // Créer un nouvel entraînement
  async createWorkout(workoutData) {
    try {
      const response = await api.post('/workouts', workoutData);
      return response.data;
    } catch (error) {
      console.error('Error creating workout:', error);
      throw new Error('Impossible de créer l\'entraînement');
    }
  }

  // Mettre à jour un entraînement
  async updateWorkout(workoutId, updateData) {
    try {
      const response = await api.put(`/workouts/${workoutId}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Error updating workout:', error);
      throw new Error('Impossible de mettre à jour l\'entraînement');
    }
  }

  // Supprimer un entraînement
  async deleteWorkout(workoutId) {
    try {
      await api.delete(`/workouts/${workoutId}`);
    } catch (error) {
      console.error('Error deleting workout:', error);
      throw new Error('Impossible de supprimer l\'entraînement');
    }
  }

  // Démarrer une session d'entraînement
  async startWorkoutSession(workoutId) {
    try {
      const response = await api.post(`/workouts/${workoutId}/start`);
      return response.data;
    } catch (error) {
      console.error('Error starting workout session:', error);
      // Retourner une session simulée
      return {
        _id: Date.now().toString(),
        workoutId,
        startTime: new Date().toISOString(),
        status: 'active',
        currentExercise: 0,
        completedExercises: []
      };
    }
  }

  // Terminer une session d'entraînement
  async completeWorkoutSession(sessionId, sessionData) {
    try {
      const response = await api.post(`/workout-sessions/${sessionId}/complete`, sessionData);
      return response.data;
    } catch (error) {
      console.error('Error completing workout session:', error);
      // Simulation de completion
      return {
        _id: sessionId,
        ...sessionData,
        endTime: new Date().toISOString(),
        status: 'completed',
        totalDuration: sessionData.duration || 0,
        caloriesBurned: sessionData.calories || 0
      };
    }
  }

  // Obtenir l'historique des entraînements
  async getWorkoutHistory(limit = 10) {
    try {
      const response = await api.get(`/workout-sessions/history?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching workout history:', error);
      // Retourner un historique de démonstration
      const history = [];
      const now = new Date();
      
      for (let i = 0; i < Math.min(limit, 5); i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i * 2);
        
        history.push({
          _id: `history-${i}`,
          workoutName: i % 2 === 0 ? 'Full Body' : 'Cardio HIIT',
          date: date.toISOString(),
          duration: 30 + Math.random() * 30,
          caloriesBurned: 200 + Math.random() * 200,
          exercisesCompleted: 8 + Math.floor(Math.random() * 4),
          rating: 3 + Math.random() * 2
        });
      }
      
      return history;
    }
  }

  // Obtenir les entraînements populaires
  async getPopularWorkouts() {
    try {
      const response = await api.get('/workouts/popular');
      return response.data;
    } catch (error) {
      console.error('Error fetching popular workouts:', error);
      return [];
    }
  }

  // Obtenir les entraînements recommandés
  async getRecommendedWorkouts() {
    try {
      const response = await api.get('/workouts/recommended');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommended workouts:', error);
      return [];
    }
  }

  // Rechercher des entraînements
  async searchWorkouts(query, filters = {}) {
    try {
      const params = new URLSearchParams({ query, ...filters });
      const response = await api.get(`/workouts/search?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error searching workouts:', error);
      return [];
    }
  }

  // Obtenir les exercices disponibles
  async getExercises(category = null) {
    try {
      const params = category ? `?category=${category}` : '';
      const response = await api.get(`/exercises${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      // Retourner des exercices de démonstration
      return [
        {
          _id: '1',
          name: 'Squats',
          category: 'legs',
          muscleGroups: ['quadriceps', 'glutes'],
          equipment: 'bodyweight',
          difficulty: 'beginner',
          instructions: 'Tenez-vous debout, pieds écartés à la largeur des épaules...',
          videoUrl: null,
          imageUrl: null
        },
        {
          _id: '2',
          name: 'Push-ups',
          category: 'chest',
          muscleGroups: ['chest', 'triceps', 'shoulders'],
          equipment: 'bodyweight',
          difficulty: 'beginner',
          instructions: 'Placez-vous en position de planche...',
          videoUrl: null,
          imageUrl: null
        },
        {
          _id: '3',
          name: 'Burpees',
          category: 'cardio',
          muscleGroups: ['full-body'],
          equipment: 'bodyweight',
          difficulty: 'advanced',
          instructions: 'Commencez debout, descendez en squat...',
          videoUrl: null,
          imageUrl: null
        }
      ];
    }
  }

  // Calculer la difficulté estimée d'un entraînement
  calculateWorkoutDifficulty(workout) {
    if (!workout.exercises || workout.exercises.length === 0) return 'beginner';
    
    let totalScore = 0;
    let exerciseCount = 0;
    
    workout.exercises.forEach(exercise => {
      let score = 1; // Base score
      
      // Facteurs qui augmentent la difficulté
      if (exercise.sets > 3) score += 0.5;
      if (exercise.reps > 15) score += 0.5;
      if (exercise.duration > 45) score += 0.5;
      if (exercise.rest < 30) score += 0.5;
      
      totalScore += score;
      exerciseCount++;
    });
    
    const avgScore = totalScore / exerciseCount;
    const duration = workout.duration || 30;
    const finalScore = avgScore + (duration > 45 ? 0.5 : 0);
    
    if (finalScore >= 2.5) return 'advanced';
    if (finalScore >= 1.8) return 'intermediate';
    return 'beginner';
  }

  // Estimer les calories brûlées
  estimateCalories(workout, userWeight = 70) {
    const baseMET = {
      'strength': 6,
      'cardio': 8,
      'flexibility': 3,
      'hiit': 12
    };
    
    const met = baseMET[workout.category] || 5;
    const duration = workout.duration || 30;
    const durationInHours = duration / 60;
    
    return Math.round(met * userWeight * durationInHours);
  }

  // Dupliquer un entraînement
  async duplicateWorkout(workoutId) {
    try {
      const response = await api.post(`/workouts/${workoutId}/duplicate`);
      return response.data;
    } catch (error) {
      console.error('Error duplicating workout:', error);
      throw new Error('Impossible de dupliquer l\'entraînement');
    }
  }

  // Partager un entraînement
  async shareWorkout(workoutId, shareData) {
    try {
      const response = await api.post(`/workouts/${workoutId}/share`, shareData);
      return response.data;
    } catch (error) {
      console.error('Error sharing workout:', error);
      throw new Error('Impossible de partager l\'entraînement');
    }
  }
}

export const workoutService = new WorkoutService();