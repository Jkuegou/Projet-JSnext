import React, { useState } from 'react';
import './WorkoutsPage.css';

const WorkoutsPage = () => {
  const [activeTab, setActiveTab] = useState('my-workouts');
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const myWorkouts = [
    {
      id: 1,
      name: 'Upper Body Strength',
      duration: '45 min',
      difficulty: 'Intermediate',
      exercises: 8,
      lastPerformed: '2 days ago',
      calories: 320,
      type: 'Strength',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      duration: '30 min',
      difficulty: 'Advanced',
      exercises: 6,
      lastPerformed: '1 day ago',
      calories: 450,
      type: 'Cardio',
      progress: 90,
      image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Full Body Workout',
      duration: '60 min',
      difficulty: 'Intermediate',
      exercises: 12,
      lastPerformed: '3 days ago',
      calories: 380,
      type: 'Mixed',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=300&fit=crop'
    }
  ];

  const recommendedWorkouts = [
    {
      id: 4,
      name: 'Morning Yoga Flow',
      duration: '25 min',
      difficulty: 'Beginner',
      exercises: 10,
      calories: 150,
      type: 'Flexibility',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1506629905607-c26f4ba5ecf5?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Power Lifting Basics',
      duration: '50 min',
      difficulty: 'Advanced',
      exercises: 5,
      calories: 400,
      type: 'Strength',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1566241134019-38c6b2c6e8f5?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Core Crusher',
      duration: '20 min',
      difficulty: 'Intermediate',
      exercises: 8,
      calories: 200,
      type: 'Core',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9c42?w=400&h=300&fit=crop'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Strength': return 'primary';
      case 'Cardio': return 'danger';
      case 'Flexibility': return 'success';
      case 'Core': return 'warning';
      case 'Mixed': return 'info';
      default: return 'secondary';
    }
  };

  const WorkoutCard = ({ workout, isRecommended = false }) => (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="workout-card h-100 card border-0 shadow-sm">
        <div className="card-img-container position-relative">
          <img
            src={workout.image}
            alt={workout.name}
            className="card-img-top"
            style={{height: '200px', objectFit: 'cover'}}
          />
          <div className="card-img-overlay d-flex align-items-start justify-content-between p-3">
            <span className={`badge bg-${getDifficultyColor(workout.difficulty)}`}>
              {workout.difficulty}
            </span>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-light rounded-circle">
                <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-sm btn-light rounded-circle">
                <i className="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title fw-bold mb-0">{workout.name}</h5>
            <span className={`badge bg-${getTypeColor(workout.type)}`}>
              {workout.type}
            </span>
          </div>
          
          <div className="workout-stats mb-3">
            <div className="row g-2 text-center">
              <div className="col-4">
                <div className="stat-item">
                  <i className="fas fa-clock text-muted"></i>
                  <div className="fw-semibold">{workout.duration}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-item">
                  <i className="fas fa-dumbbell text-muted"></i>
                  <div className="fw-semibold">{workout.exercises}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-item">
                  <i className="fas fa-fire text-muted"></i>
                  <div className="fw-semibold">{workout.calories}</div>
                </div>
              </div>
            </div>
          </div>
          
          {!isRecommended && (
            <div className="progress-section mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Progress</small>
                <small className="text-muted">{workout.progress}%</small>
              </div>
              <div className="progress" style={{height: '6px'}}>
                <div 
                  className="progress-bar bg-primary" 
                  style={{width: `${workout.progress}%`}}
                ></div>
              </div>
              <small className="text-muted">Last: {workout.lastPerformed}</small>
            </div>
          )}
          
          {isRecommended && (
            <div className="rating-section mb-3">
              <div className="d-flex align-items-center">
                <div className="stars me-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i}
                      className={`fas fa-star ${i < Math.floor(workout.rating) ? 'text-warning' : 'text-muted'}`}
                    ></i>
                  ))}
                </div>
                <span className="fw-semibold">{workout.rating}</span>
                <span className="text-muted ms-2">({workout.reviews} reviews)</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="card-footer bg-transparent border-0 pt-0">
          <div className="d-flex gap-2">
            <button className="btn btn-primary flex-grow-1">
              <i className="fas fa-play me-2"></i>
              {isRecommended ? 'Try Now' : 'Continue'}
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="workouts-page">
      {/* Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">My Workouts</h1>
              <p className="lead mb-0">
                Track your fitness journey with personalized workout plans and routines.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end">
                <button className="btn btn-outline-light">
                  <i className="fas fa-plus me-2"></i>Create Workout
                </button>
                <button className="btn btn-light">
                  <i className="fas fa-calendar me-2"></i>Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Quick Stats */}
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="stat-icon mb-3">
                  <i className="fas fa-calendar-week fa-2x text-primary"></i>
                </div>
                <h4 className="fw-bold mb-1">12</h4>
                <p className="text-muted mb-0">Workouts This Week</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="stat-icon mb-3">
                  <i className="fas fa-fire fa-2x text-danger"></i>
                </div>
                <h4 className="fw-bold mb-1">2,850</h4>
                <p className="text-muted mb-0">Calories Burned</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="stat-icon mb-3">
                  <i className="fas fa-clock fa-2x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-1">8.5</h4>
                <p className="text-muted mb-0">Hours Trained</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="stat-icon mb-3">
                  <i className="fas fa-trophy fa-2x text-success"></i>
                </div>
                <h4 className="fw-bold mb-1">7</h4>
                <p className="text-muted mb-0">Goals Achieved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="workout-tabs mb-4">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'my-workouts' ? 'active' : ''}`}
                onClick={() => setActiveTab('my-workouts')}
              >
                <i className="fas fa-dumbbell me-2"></i>My Workouts
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'recommended' ? 'active' : ''}`}
                onClick={() => setActiveTab('recommended')}
              >
                <i className="fas fa-star me-2"></i>Recommended
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                <i className="fas fa-history me-2"></i>History
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'my-workouts' && (
            <div className="row">
              {myWorkouts.map(workout => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
          
          {activeTab === 'recommended' && (
            <div className="row">
              {recommendedWorkouts.map(workout => (
                <WorkoutCard key={workout.id} workout={workout} isRecommended={true} />
              ))}
            </div>
          )}
          
          {activeTab === 'history' && (
            <div className="text-center py-5">
              <i className="fas fa-history fa-3x text-muted mb-3"></i>
              <h4 className="text-muted">Workout History</h4>
              <p className="text-muted mb-4">
                Your completed workouts will appear here.
              </p>
              <button className="btn btn-primary">Start Your First Workout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;