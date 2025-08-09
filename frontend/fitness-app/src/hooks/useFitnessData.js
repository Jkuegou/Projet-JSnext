// src/hooks/useFitnessData.js
import { useState, useEffect, useCallback } from 'react';
import { fitnessService } from '../services/fitnessService';
import { useNotification } from './useNotification';

export const useFitnessData = () => {
  const [stats, setStats] = useState(null);
  const [progress, setProgress] = useState([]);
  const [goals, setGoals] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { showNotification } = useNotification();

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fitnessService.getUserStats();
      setStats(data);
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors du chargement des statistiques', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const fetchProgress = useCallback(async (timeframe = '1M') => {
    try {
      setLoading(true);
      const data = await fitnessService.getProgressData(timeframe);
      setProgress(data);
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors du chargement des progrès', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const fetchGoals = useCallback(async () => {
    try {
      const data = await fitnessService.getUserGoals();
      setGoals(data);
    } catch (err) {
      showNotification('Erreur lors du chargement des objectifs', 'error');
    }
  }, [showNotification]);

  const fetchAchievements = useCallback(async () => {
    try {
      const data = await fitnessService.getUserAchievements();
      setAchievements(data);
    } catch (err) {
      showNotification('Erreur lors du chargement des réalisations', 'error');
    }
  }, [showNotification]);

  const recordProgress = async (progressData) => {
    try {
      setLoading(true);
      const newProgress = await fitnessService.recordProgress(progressData);
      setProgress(prev => [newProgress, ...prev]);
      showNotification('Progrès enregistré', 'success');
      
      // Recharger les stats pour mettre à jour les données
      await fetchStats();
      return newProgress;
    } catch (err) {
      setError(err.message);
      showNotification('Erreur lors de l\'enregistrement', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateGoal = async (goalId, goalData) => {
    try {
      const updatedGoal = await fitnessService.updateGoal(goalId, goalData);
      setGoals(prev => 
        prev.map(goal => goal._id === goalId ? updatedGoal : goal)
      );
      showNotification('Objectif mis à jour', 'success');
      return updatedGoal;
    } catch (err) {
      showNotification('Erreur lors de la mise à jour de l\'objectif', 'error');
      throw err;
    }
  };

  const createGoal = async (goalData) => {
    try {
      const newGoal = await fitnessService.createGoal(goalData);
      setGoals(prev => [...prev, newGoal]);
      showNotification('Objectif créé', 'success');
      return newGoal;
    } catch (err) {
      showNotification('Erreur lors de la création de l\'objectif', 'error');
      throw err;
    }
  };

  const deleteGoal = async (goalId) => {
    try {
      await fitnessService.deleteGoal(goalId);
      setGoals(prev => prev.filter(goal => goal._id !== goalId));
      showNotification('Objectif supprimé', 'success');
    } catch (err) {
      showNotification('Erreur lors de la suppression', 'error');
      throw err;
    }
  };

  const getBodyMetrics = useCallback(async () => {
    try {
      const metrics = await fitnessService.getBodyMetrics();
      return metrics;
    } catch (err) {
      showNotification('Erreur lors du chargement des métriques', 'error');
      return [];
    }
  }, [showNotification]);

  const recordBodyMetric = async (metricData) => {
    try {
      const newMetric = await fitnessService.recordBodyMetric(metricData);
      showNotification('Métrique enregistrée', 'success');
      return newMetric;
    } catch (err) {
      showNotification('Erreur lors de l\'enregistrement', 'error');
      throw err;
    }
  };

  // Calculer les statistiques dérivées
  const calculateWeeklyProgress = useCallback(() => {
    if (!stats) return 0;
    return ((stats.thisWeek || 0) / (stats.goalWeekly || 1)) * 100;
  }, [stats]);

  const calculateMonthlyProgress = useCallback(() => {
    if (!stats) return 0;
    return ((stats.thisMonth || 0) / (stats.goalMonthly || 1)) * 100;
  }, [stats]);

  const getActiveGoalsCount = useCallback(() => {
    return goals.filter(goal => goal.status === 'active').length;
  }, [goals]);

  const getCompletedGoalsCount = useCallback(() => {
    return goals.filter(goal => goal.status === 'completed').length;
  }, [goals]);

  // Initialiser les données au montage
  useEffect(() => {
    const initializeData = async () => {
      await Promise.all([
        fetchStats(),
        fetchProgress(),
        fetchGoals(),
        fetchAchievements()
      ]);
    };
    
    initializeData();
  }, [fetchStats, fetchProgress, fetchGoals, fetchAchievements]);

  return {
    stats,
    progress,
    goals,
    achievements,
    loading,
    error,
    // Actions
    fetchStats,
    fetchProgress,
    fetchGoals,
    fetchAchievements,
    recordProgress,
    updateGoal,
    createGoal,
    deleteGoal,
    getBodyMetrics,
    recordBodyMetric,
    // Computed values
    calculateWeeklyProgress,
    calculateMonthlyProgress,
    getActiveGoalsCount,
    getCompletedGoalsCount
  };
};