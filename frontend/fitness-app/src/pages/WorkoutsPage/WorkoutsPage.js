// src/pages/WorkoutsPage/WorkoutsPage.js
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Clock, 
  Flame, 
  Target, 
  Filter,
  Search,
  Plus,
  Dumbbell,
  Heart,
  Zap,
  Calendar,
  Star,
  Users,
  ChevronRight,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import './WorkoutsPage.css';

const WorkoutsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isStarting, setIsStarting] = useState(false);

  // Données mockées des entraînements
  const [workouts] = useState([
    {
      id: 1,
      title: 'HIIT Cardio Blast',
      description: 'Entraînement intense pour brûler un maximum de calories',
      duration: 25,
      difficulty: 'Difficile',
      calories: 350,
      exercises: 8,
      category: 'cardio',
      image: '🔥',
      color: 'from-red-500 to-orange-500',
      equipment: 'Aucun',
      rating: 4.8,
      participants: 156
    },
    {
      id: 2,
      title: 'Musculation Full Body',
      description: 'Entraînement complet pour tout le corps',
      duration: 45,
      difficulty: 'Intermédiaire',
      calories: 280,
      exercises: 12,
      category: 'strength',
      image: '💪',
      color: 'from-blue-500 to-cyan-500',
      equipment: 'Haltères',
      rating: 4.6,
      participants: 203
    },
    {
      id: 3,
      title: 'Yoga Flow Matinal',
      description: 'Séance de yoga relaxante pour bien commencer la journée',
      duration: 30,
      difficulty: 'Débutant',
      calories: 120,
      exercises: 15,
      category: 'yoga',
      image: '🧘‍♀️',
      color: 'from-green-500 to-emerald-500',
      equipment: 'Tapis',
      rating: 4.9,
      participants: 89
    },
    {
      id: 4,
      title: 'Abs Destroyer',
      description: 'Séance intensive pour sculpter vos abdominaux',
      duration: 20,
      difficulty: 'Difficile',
      calories: 180,
      exercises: 10,
      category: 'abs',
      image: '🏋️‍♂️',
      color: 'from-purple-500 to-pink-500',
      equipment: 'Aucun',
      rating: 4.7,
      participants: 142
    },
    {
      id: 5,
      title: 'Stretching Recovery',
      description: 'Étirements pour la récupération après l\'effort',
      duration: 15,
      difficulty: 'Débutant',
      calories: 80,
      exercises: 12,
      category: 'flexibility',
      image: '🤸‍♀️',
      color: 'from-indigo-500 to-purple-500',
      equipment: 'Aucun',
      rating: 4.5,
      participants: 78
    },
    {
      id: 6,
      title: 'Boxing Fitness',
      description: 'Entraînement de boxe pour la condition physique',
      duration: 35,
      difficulty: 'Intermédiaire',
      calories: 320,
      exercises: 8,
      category: 'boxing',
      image: '🥊',
      color: 'from-gray-700 to-gray-900',
      equipment: 'Gants',
      rating: 4.8,
      participants: 167
    }
  ]);

  // Filtres disponibles
  const filters = [
    { id: 'all', label: 'Tous', icon: BookOpen },
    { id: 'cardio', label: 'Cardio', icon: Heart },
    { id: 'strength', label: 'Force', icon: Dumbbell },
    { id: 'yoga', label: 'Yoga', icon: Users },
    { id: 'abs', label: 'Abdos', icon: Target },
    { id: 'flexibility', label: 'Flexibilité', icon: Zap }
  ];

  // Entraînements recommandés
  const [recommendedWorkouts] = useState([
    {
      id: 'rec1',
      title: 'Programme Débutant',
      description: '4 semaines pour débuter en douceur',
      duration: '4 semaines',
      workouts: 12,
      image: '🌟',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'rec2',
      title: 'Perte de Poids Express',
      description: 'Programme intensif 6 semaines',
      duration: '6 semaines',
      workouts: 24,
      image: '⚡',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'rec3',
      title: 'Muscle Building',
      description: 'Construire du muscle efficacement',
      duration: '8 semaines',
      workouts: 32,
      image: '🏗️',
      color: 'from-blue-500 to-indigo-500'
    }
  ]);

  // Statistiques utilisateur
  const [userStats] = useState({
    completedWorkouts: 23,
    totalMinutes: 890,
    streak: 5,
    favorite: 'HIIT Cardio'
  });

  // Filtrer les entraînements
  const filteredWorkouts = workouts.filter(workout => {
    const matchesFilter = activeFilter === 'all' || workout.category === activeFilter;
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Démarrer un entraînement
  const handleStartWorkout = async (workout) => {
    setIsStarting(true);
    setSelectedWorkout(workout);
    
    // Simulation du démarrage
    setTimeout(() => {
      setIsStarting(false);
      console.log(`Démarrage de l'entraînement: ${workout.title}`);
      // Ici vous pouvez naviguer vers la page d'entraînement
    }, 2000);
  };

  // Obtenir l'icône de difficulté
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'text-green-500';
      case 'Intermédiaire': return 'text-yellow-500';
      case 'Difficile': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="workouts-page">
      {/* Header Section */}
      <div className="workouts-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="page-title">Mes Entraînements</h1>
            <p className="page-subtitle">
              Choisissez votre entraînement et dépassez vos limites !
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <div className="stat-number">{userStats.completedWorkouts}</div>
              <div className="stat-label">Terminés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{userStats.totalMinutes}m</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{userStats.streak}</div>
              <div className="stat-label">Série</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-section">
        <button className="quick-action-btn primary">
          <Plus className="w-5 h-5" />
          <span>Créer un entraînement</span>
        </button>
        <button className="quick-action-btn secondary">
          <Calendar className="w-5 h-5" />
          <span>Programmer</span>
        </button>
        <button className="quick-action-btn secondary">
          <TrendingUp className="w-5 h-5" />
          <span>Mes progrès</span>
        </button>
      </div>

      {/* Recommended Programs */}
      <section className="recommended-section">
        <h2 className="section-title">Programmes Recommandés</h2>
        <div className="recommended-grid">
          {recommendedWorkouts.map(program => (
            <div key={program.id} className="program-card">
              <div className={`program-bg bg-gradient-to-br ${program.color}`}>
                <div className="program-icon">{program.image}</div>
              </div>
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-meta">
                  <span className="program-duration">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <span className="program-workouts">
                    {program.workouts} séances
                  </span>
                </div>
                <button className="program-cta">
                  Commencer
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters and Search */}
      <div className="controls-section">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un entraînement..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              <filter.icon className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Workouts Grid */}
      <section className="workouts-section">
        <div className="workouts-grid">
          {filteredWorkouts.map(workout => (
            <div key={workout.id} className="workout-card">
              <div className={`workout-header bg-gradient-to-br ${workout.color}`}>
                <div className="workout-emoji">{workout.image}</div>
                <div className="workout-rating">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{workout.rating}</span>
                </div>
              </div>
              
              <div className="workout-content">
                <h3 className="workout-title">{workout.title}</h3>
                <p className="workout-description">{workout.description}</p>
                
                <div className="workout-details">
                  <div className="detail-item">
                    <Clock className="w-4 h-4" />
                    <span>{workout.duration} min</span>
                  </div>
                  <div className="detail-item">
                    <Flame className="w-4 h-4" />
                    <span>{workout.calories} cal</span>
                  </div>
                  <div className="detail-item">
                    <Target className="w-4 h-4" />
                    <span>{workout.exercises} exercices</span>
                  </div>
                </div>
                
                <div className="workout-meta">
                  <span className={`difficulty-badge ${getDifficultyColor(workout.difficulty)}`}>
                    {workout.difficulty}
                  </span>
                  <span className="participants">
                    <Users className="w-4 h-4" />
                    {workout.participants}
                  </span>
                </div>
                
                <div className="workout-footer">
                  <div className="equipment-info">
                    <span className="equipment-label">Équipement:</span>
                    <span className="equipment-value">{workout.equipment}</span>
                  </div>
                  <button 
                    onClick={() => handleStartWorkout(workout)}
                    disabled={isStarting && selectedWorkout?.id === workout.id}
                    className="start-btn"
                  >
                    {isStarting && selectedWorkout?.id === workout.id ? (
                      <>
                        <div className="spinner"></div>
                        <span>Démarrage...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Commencer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredWorkouts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">Aucun entraînement trouvé</h3>
            <p className="empty-description">
              Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default WorkoutsPage;