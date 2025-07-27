import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-info';
  };

  const getDaysLeftText = (daysLeft) => {
    if (daysLeft === 1) return '1 jour restant';
    if (daysLeft > 1) return `${daysLeft} jours restants`;
    return 'Dernière chance !';
  };

  return (
    <div className="card challenge-card h-100">
      <div className="card-body">
        <div className="challenge-header mb-3">
          <h6 className="challenge-name mb-1">{challenge.name}</h6>
          <small className="text-muted">{getDaysLeftText(challenge.daysLeft)}</small>
        </div>
        
        <div className="challenge-progress mb-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="progress-label">Progression</span>
            <span className="progress-percentage">{challenge.progress}%</span>
          </div>
          <div className="progress">
            <div 
              className={`progress-bar ${getProgressColor(challenge.progress)}`}
              style={{ width: `${challenge.progress}%` }}
              role="progressbar"
            ></div>
          </div>
        </div>
        
        <div className="challenge-actions">
          <button className="btn btn-sm btn-outline-primary w-100">
            <i className="fas fa-eye me-1"></i>
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;