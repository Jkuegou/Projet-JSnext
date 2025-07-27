import React from 'react';
import { Link } from 'react-router-dom';
import './QuickActions.css';

const QuickActions = ({ actions = [] }) => {
  const defaultActions = [
    {
      id: 'new-workout',
      title: 'Nouvel entraînement',
      description: 'Commencer une nouvelle session',
      icon: 'bi-play-circle',
      color: 'primary',
      link: '/workouts/new'
    },
    {
      id: 'track-progress',
      title: 'Suivre les progrès',
      description: 'Enregistrer vos mesures',
      icon: 'bi-graph-up',
      color: 'success',
      link: '/progress'
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      description: 'Suivre votre alimentation',
      icon: 'bi-apple',
      color: 'warning',
      link: '/nutrition'
    },
    {
      id: 'challenges',
      title: 'Défis',
      description: 'Relevez de nouveaux défis',
      icon: 'bi-trophy',
      color: 'info',
      link: '/challenges'
    }
  ];

  const actionsToShow = actions.length > 0 ? actions : defaultActions;

  return (
    <div className="quick-actions">
      {actionsToShow.map(action => (
        <Link 
          key={action.id}
          to={action.link}
          className="quick-action-card"
        >
          <div className={`quick-action-icon ${action.color}`}>
            <i className={action.icon}></i>
          </div>
          <h6 className="quick-action-title">{action.title}</h6>
          <p className="quick-action-description">{action.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;