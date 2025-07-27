import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

export const useFitnessData = () => {
  const { user } = useAuth();
  const [data, setData] = useState({
    stats: null,
    recentWorkouts: [],
    challenges: [],
    progress: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchFitnessData();
    }
  }, [user]);

  const fetchFitnessData = async () => {
    try {
      setLoading(true);
      const [statsRes, workoutsRes, challengesRes, progressRes] = await Promise.all([
        api.get('/fitness/stats'),
        api.get('/fitness/workouts/recent'),
        api.get('/fitness/challenges'),
        api.get('/fitness/progress')
      ]);

      setData({
        stats: statsRes.data,
        recentWorkouts: workoutsRes.data,
        challenges: challengesRes.data,
        progress: progressRes.data
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des données');
      console.error('Error fetching fitness data:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    fetchFitnessData();
  };

  return { data, loading, error, refreshData };
};
