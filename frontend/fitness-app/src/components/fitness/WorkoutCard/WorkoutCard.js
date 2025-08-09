// import React from 'react';
// import './WorkoutCard.css';

// const WorkoutCard = ({ workout, onStart, showActions = true }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('fr-FR', {
//       day: '2-digit',
//       month: 'short'
//     });
//   };

//   const getStatusBadge = (completed) => {
//     return completed ? (
//       <span className="badge bg-success">
//         <i className="fas fa-check me-1"></i>Terminé
//       </span>
//     ) : (
//       <span className="badge bg-warning">
//         <i className="fas fa-clock me-1"></i>En cours
//       </span>
//     );
//   };

//   return (
//     <div className="workout-card">
//       <div className="workout-card-content">
//         <div className="d-flex justify-content-between align-items-start">
//           <div className="workout-info">
//             <div className="workout-icon">
//               <i className="fas fa-dumbbell"></i>
//             </div>
//             <div className="workout-details">
//               <h6 className="workout-name mb-1">{workout.name}</h6>
//               <small className="text-muted">{formatDate(workout.date)}</small>
//             </div>
//           </div>
          
//           <div className="workout-stats text-end">
//             <div className="workout-duration text-primary fw-bold">
//               {workout.duration}
//             </div>
//             {workout.calories && (
//               <small className="text-muted">{workout.calories} cal</small>
//             )}
//             <div className="mt-2">
//               {getStatusBadge(workout.completed)}
//             </div>
//           </div>
//         </div>
        
//         {showActions && (
//           <div className="workout-actions mt-3">
//             <button 
//               className="btn btn-sm btn-outline-primary me-2"
//               onClick={() => console.log('View details', workout.id)}
//             >
//               <i className="fas fa-eye me-1"></i>Détails
//             </button>
//             {!workout.completed && (
//               <button 
//                 className="btn btn-sm btn-primary"
//                 onClick={() => onStart && onStart(workout.id)}
//               >
//                 <i className="fas fa-play me-1"></i>Reprendre
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WorkoutCard;
// src/components/fitness/WorkoutCard/WorkoutCard.js
import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({ 
  workout,
  onStart = null,
  onEdit = null,
  onDelete = null,
  onView = null,
  showActions = true,
  compact = false,
  className = ''
}) => {
  if (!workout) return null;

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: '#28a745',
      intermediate: '#ffc107',
      advanced: '#dc3545'
    };
    return colors[difficulty] || '#6c757d';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      strength: '💪',
      cardio: '🏃‍♂️',
      flexibility: '🧘‍♀️',
      hiit: '🔥',
      yoga: '🕉️',
      pilates: '🤸‍♀️',
      dance: '💃',
      martial_arts: '🥋',
      sports: '⚽',
      other: '🏋️‍♂️'
    };
    return icons[category] || '🏋️‍♂️';
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) {
      return `${minutes}min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}min` : ''}`;
  };

  const handleStart = (e) => {
    e.stopPropagation();
    onStart?.(workout);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit?.(workout);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete?.(workout);
  };

  const handleView = () => {
    onView?.(workout);
  };

  if (compact) {
    return (
      <div 
        className={`workout-card compact ${className}`}
        onClick={handleView}
      >
        <div className="workout-card-header">
          <div className="workout-category">{getCategoryIcon(workout.category)}</div>
          <div className="workout-info">
            <h4 className="workout-name">{workout.name}</h4>
            <div className="workout-meta">
              <span className="duration">{formatDuration(workout.duration || 30)}</span>
              <span className="difficulty" style={{ color: getDifficultyColor(workout.difficulty) }}>
                {workout.difficulty}
              </span>
            </div>
          </div>
        </div>
        {showActions && onStart && (
          <button className="start-btn-compact" onClick={handleStart}>
            ▶
          </button>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`workout-card ${className}`}
      onClick={handleView}
    >
      <div className="workout-card-header">
        <div className="workout-category-badge">
          <span className="category-icon">{getCategoryIcon(workout.category)}</span>
          <span className="category-name">{workout.category}</span>
        </div>
        <div 
          className="difficulty-badge"
          style={{ backgroundColor: getDifficultyColor(workout.difficulty) }}
        >
          {workout.difficulty}
        </div>
      </div>

      <div className="workout-card-content">
        <h3 className="workout-title">{workout.name}</h3>
        <p className="workout-description">
          {workout.description || 'Aucune description disponible'}
        </p>

        <div className="workout-stats">
          <div className="stat">
            <span className="stat-icon">⏱️</span>
            <span className="stat-value">{formatDuration(workout.duration || 30)}</span>
          </div>
          <div className="stat">
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{workout.calories || 'N/A'} cal</span>
          </div>
          <div className="stat">
            <span className="stat-icon">💪</span>
            <span className="stat-value">
              {workout.exercises?.length || 0} exercices
            </span>
          </div>
        </div>

        {workout.equipment && workout.equipment.length > 0 && (
          <div className="workout-equipment">
            <span className="equipment-label">Équipement :</span>
            <div className="equipment-tags">
              {workout.equipment.map((item, index) => (
                <span key={index} className="equipment-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {workout.muscleGroups && workout.muscleGroups.length > 0 && (
          <div className="workout-muscles">
            <span className="muscles-label">Muscles ciblés :</span>
            <div className="muscle-tags">
              {workout.muscleGroups.map((muscle, index) => (
                <span key={index} className="muscle-tag">
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {showActions && (
        <div className="workout-card-actions">
          {onStart && (
            <button 
              className="btn btn-primary start-btn"
              onClick={handleStart}
            >
              <span className="btn-icon">▶</span>
              Commencer
            </button>
          )}
          {onEdit && (
            <button 
              className="btn btn-secondary edit-btn"
              onClick={handleEdit}
            >
              <span className="btn-icon">✏️</span>
              Modifier
            </button>
          )}
          {onDelete && (
            <button 
              className="btn btn-danger delete-btn"
              onClick={handleDelete}
            >
              <span className="btn-icon">🗑️</span>
              Supprimer
            </button>
          )}
        </div>
      )}

      {workout.lastCompleted && (
        <div className="workout-card-footer">
          <span className="last-completed">
            Dernière fois : {new Date(workout.lastCompleted).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
};

// Composant pour afficher une grille de workouts
export const WorkoutGrid = ({ 
  workouts, 
  onStart, 
  onEdit, 
  onDelete, 
  onView,
  loading = false,
  emptyMessage = "Aucun entraînement trouvé",
  className = ''
}) => {
  if (loading) {
    return (
      <div className={`workout-grid ${className}`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="workout-card skeleton">
            <div className="skeleton-header"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-stats"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!workouts || workouts.length === 0) {
    return (
      <div className="workout-grid-empty">
        <div className="empty-icon">🏋️‍♂️</div>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`workout-grid ${className}`}>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout._id || workout.id}
          workout={workout}
          onStart={onStart}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};

// Composant pour une liste compacte de workouts
export const WorkoutList = ({ 
  workouts, 
  onStart, 
  onEdit, 
  onDelete, 
  onView,
  className = ''
}) => {
  return (
    <div className={`workout-list ${className}`}>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout._id || workout.id}
          workout={workout}
          onStart={onStart}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
          compact={true}
        />
      ))}
    </div>
  );
};

export default WorkoutCard;