import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ workout, onStart, showActions = true }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short'
    });
  };

  const getStatusBadge = (completed) => {
    return completed ? (
      <span className="badge bg-success">
        <i className="fas fa-check me-1"></i>Terminé
      </span>
    ) : (
      <span className="badge bg-warning">
        <i className="fas fa-clock me-1"></i>En cours
      </span>
    );
  };

  return (
    <div className="workout-card">
      <div className="workout-card-content">
        <div className="d-flex justify-content-between align-items-start">
          <div className="workout-info">
            <div className="workout-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="workout-details">
              <h6 className="workout-name mb-1">{workout.name}</h6>
              <small className="text-muted">{formatDate(workout.date)}</small>
            </div>
          </div>
          
          <div className="workout-stats text-end">
            <div className="workout-duration text-primary fw-bold">
              {workout.duration}
            </div>
            {workout.calories && (
              <small className="text-muted">{workout.calories} cal</small>
            )}
            <div className="mt-2">
              {getStatusBadge(workout.completed)}
            </div>
          </div>
        </div>
        
        {showActions && (
          <div className="workout-actions mt-3">
            <button 
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => console.log('View details', workout.id)}
            >
              <i className="fas fa-eye me-1"></i>Détails
            </button>
            {!workout.completed && (
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => onStart && onStart(workout.id)}
              >
                <i className="fas fa-play me-1"></i>Reprendre
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;