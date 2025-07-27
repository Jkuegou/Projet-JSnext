import api from '../utils/api';

const fitnessService = {
  // Statistiques utilisateur
  async getUserStats(userId) {
    const response = await api.get(`/fitness/users/${userId}/stats`);
    return response.data;
  },

  // Entraînements
  async getWorkouts(userId, params = {}) {
    const response = await api.get(`/fitness/users/${userId}/workouts`, { params });
    return response.data;
  },

  async getWorkout(workoutId) {
    const response = await api.get(`/fitness/workouts/${workoutId}`);
    return response.data;
  },

  async createWorkout(workoutData) {
    const response = await api.post('/fitness/workouts', workoutData);
    return response.data;
  },

  async updateWorkout(workoutId, workoutData) {
    const response = await api.put(`/fitness/workouts/${workoutId}`, workoutData);
    return response.data;
  },

  async deleteWorkout(workoutId) {
    const response = await api.delete(`/fitness/workouts/${workoutId}`);
    return response.data;
  },

  // Progression
  async getUserProgress(userId, period = '30days') {
    const response = await api.get(`/fitness/users/${userId}/progress`, {
      params: { period }
    });
    return response.data;
  },

  async addProgressEntry(progressData) {
    const response = await api.post('/fitness/progress', progressData);
    return response.data;
  },

  // Exercices
  async getExercises(params = {}) {
    const response = await api.get('/fitness/exercises', { params });
    return response.data;
  },

  async getExercise(exerciseId) {
    const response = await api.get(`/fitness/exercises/${exerciseId}`);
    return response.data;
  },

  // Défis
  async getChallenges(userId) {
    const response = await api.get(`/fitness/users/${userId}/challenges`);
    return response.data;
  },

  async joinChallenge(challengeId) {
    const response = await api.post(`/fitness/challenges/${challengeId}/join`);
    return response.data;
  },

  async leaveChallenge(challengeId) {
    const response = await api.delete(`/fitness/challenges/${challengeId}/leave`);
    return response.data;
  }
};

export default fitnessService;