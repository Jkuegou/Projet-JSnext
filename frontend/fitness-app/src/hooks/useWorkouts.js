// src/hooks/useWorkouts.js
import { useState, useEffect, useCallback } from 'react';
import { workoutService } from '../services/workoutService';
import { useNotification } from './useNotification';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { showNotification } = useNotification();

  const fetchWorkouts = useCallback(async (filters = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = await workoutService.getWorkouts(filters);
      setWorkouts(data);
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors du chargement des entraînements', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const getWorkout = useCallback(async (workoutId) => {
    try {
      setLoading(true);
      const workout = await workoutService.getWorkout(workoutId);
      setCurrentWorkout(workout);
      return workout;
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors du chargement de l\'entraînement', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const createWorkout = async (workoutData) => {
    try {
      setLoading(true);
      const newWorkout = await workoutService.createWorkout(workoutData);
      setWorkouts(prev => [newWorkout, ...prev]);
      showNotification('Entraînement créé avec succès', 'success');
      return newWorkout;
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors de la création', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateWorkout = async (workoutId, updateData) => {
    try {
      setLoading(true);
      const updatedWorkout = await workoutService.updateWorkout(workoutId, updateData);
      setWorkouts(prev => 
        prev.map(workout => 
          workout._id === workoutId ? updatedWorkout : workout
        )
      );
      if (currentWorkout && currentWorkout._id === workoutId) {
        setCurrentWorkout(updatedWorkout);
      }
      showNotification('Entraînement mis à jour', 'success');
      return updatedWorkout;
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors de la mise à jour', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteWorkout = async (workoutId) => {
    try {
      setLoading(true);
      await workoutService.deleteWorkout(workoutId);
      setWorkouts(prev => prev.filter(workout => workout._id !== workoutId));
      if (currentWorkout && currentWorkout._id === workoutId) {
        setCurrentWorkout(null);
      }
      showNotification('Entraînement supprimé', 'success');
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors de la suppression', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const startWorkout = async (workoutId) => {
    try {
      const session = await workoutService.startWorkoutSession(workoutId);
      showNotification('Entraînement démarré', 'success');
      return session;
    } catch (err) {
      showNotification('Erreur lors du démarrage', 'error');
      throw err;
    }
  };

  const completeWorkout = async (sessionId, sessionData) => {
    try {
      const completedSession = await workoutService.completeWorkoutSession(sessionId, sessionData);
      showNotification('Entraînement terminé !', 'success');
      return completedSession;
    } catch (err) {
      showNotification('Erreur lors de la sauvegarde', 'error');
      throw err;
    }
  };

  const getWorkoutHistory = useCallback(async (limit = 10) => {
    try {
      setLoading(true);
      const history = await workoutService.getWorkoutHistory(limit);
      return history;
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors du chargement de l\'historique', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);

  return {
    workouts,
    currentWorkout,
    loading,
    error,
    fetchWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    startWorkout,
    completeWorkout,
    getWorkoutHistory
  };
};