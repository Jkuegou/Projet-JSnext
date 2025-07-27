import React, { useState } from 'react';
import './ExercisesPage.css';

const ExercisesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Exercises', icon: 'fas fa-th' },
    { id: 'chest', name: 'Chest', icon: 'fas fa-heart' },
    { id: 'back', name: 'Back', icon: 'fas fa-user' },
    { id: 'shoulders', name: 'Shoulders', icon: 'fas fa-expand-arrows-alt' },
    { id: 'arms', name: 'Arms', icon: 'fas fa-fist-raised' },
    { id: 'legs', name: 'Legs', icon: 'fas fa-running' },
    { id: 'core', name: 'Core', icon: 'fas fa-circle' },
    { id: 'cardio', name: 'Cardio', icon: 'fas fa-heartbeat' }
  ];

  const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      category: 'chest',
      difficulty: 'Beginner',
      duration: '3 sets x 10-15 reps',
      muscles: ['Chest', 'Shoulders', 'Triceps'],
      equipment: 'Bodyweight',
      description: 'Classic upper body exercise targeting chest, shoulders, and triceps.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Squats',
      category: 'legs',
      difficulty: 'Beginner',
      duration: '3 sets x 12-20 reps',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      equipment: 'Bodyweight',
      description: 'Fundamental lower body exercise for building leg strength.',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Deadlifts',
      category: 'back',
      difficulty: 'Intermediate',
      duration: '3 sets x 8-12 reps',
      muscles: ['Back', 'Glutes', 'Hamstrings'],
      equipment: 'Barbell',
      description: 'Compound exercise for overall strength and muscle development.',
      image: 'https://images.unsplash.com/photo-1566241134019-38c6b2c6e8f5?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Planks',
      category: 'core',
      difficulty: 'Beginner',
      duration: '3 sets x 30-60 seconds',
      muscles: ['Core', 'Shoulders', 'Back'],
      equipment: 'Bodyweight',
      description: 'Isometric exercise for core stability and strength.',
      image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9c42?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Burpees',
      category: 'cardio',
      difficulty: 'Advanced',
      duration: '3 sets x 10-15 reps',
      muscles: ['Full Body'],
      equipment: 'Bodyweight',
      description: 'High-intensity full-body exercise for cardio and strength.',
      image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Shoulder Press',
      category: 'shoulders',
      difficulty: 'Intermediate',
      duration: '3 sets x 10-12 reps',
      muscles: ['Shoulders', 'Triceps'],
      equipment: 'Dumbbells',
      description: 'Overhead pressing movement for shoulder development.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="exercises-page">
      {/* Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Exercise Library</h1>
              <p className="lead mb-0">
                Discover a comprehensive collection of exercises to build your perfect workout routine.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end">
                <button className="btn btn-outline-light">
                  <i className="fas fa-plus me-2"></i>Add Exercise
                </button>
                <button className="btn btn-light">
                  <i className="fas fa-bookmark me-2"></i>Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Search and Filter */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="search-bar">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fas fa-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search exercises, muscles, or equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <select
              className="form-select form-select-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="categories-filter mb-5">
          <div className="row g-3">
            {categories.map(category => (
              <div key={category.id} className="col-lg-3 col-md-4 col-6">
                <button
                  className={`btn w-100 h-100 p-3 ${
                    selectedCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <i className={`${category.icon} fa-2x d-block mb-2`}></i>
                  <span className="fw-semibold">{category.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="results-header mb-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="mb-0">
                {filteredExercises.length} Exercise{filteredExercises.length !== 1 ? 's' : ''} Found
              </h4>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="btn-group" role="group">
                <button className="btn btn-outline-secondary active">
                  <i className="fas fa-th-large me-2"></i>Grid
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="fas fa-list me-2"></i>List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exercises Grid */}
        <div className="exercises-grid">
          <div className="row g-4">
            {filteredExercises.map(exercise => (
              <div key={exercise.id} className="col-lg-4 col-md-6">
                <div className="exercise-card h-100 card border-0 shadow-sm">
                  <div className="card-img-container position-relative">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="card-img-top"
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="card-img-overlay d-flex align-items-start justify-content-between p-3">
                      <span className={`badge bg-${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                      <button className="btn btn-sm btn-light rounded-circle">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-2">{exercise.name}</h5>
                    <p className="card-text text-muted mb-3">{exercise.description}</p>
                    
                    <div className="exercise-details mb-3">
                      <div className="row g-2">
                        <div className="col-6">
                          <small className="text-muted d-block">Duration</small>
                          <span className="fw-semibold">{exercise.duration}</span>
                        </div>
                        <div className="col-6">
                          <small className="text-muted d-block">Equipment</small>
                          <span className="fw-semibold">{exercise.equipment}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="muscles-tags mb-3">
                      <small className="text-muted d-block mb-1">Target Muscles</small>
                      <div className="d-flex flex-wrap gap-1">
                        {exercise.muscles.map((muscle, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {muscle}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-footer bg-transparent border-0 pt-0">
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary flex-grow-1">
                        <i className="fas fa-play me-2"></i>Start Exercise
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="fas fa-info-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredExercises.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">No exercises found</h4>
            <p className="text-muted mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisesPage;