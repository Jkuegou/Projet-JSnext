import React from 'react';
import './StatsCard.css';

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  variant = 'primary',
  unit,
  trend,
  description,
  onClick,
  loading = false 
}) => {
  const getTrendColor = (trend) => {
    if (!trend) return '';
    if (trend.startsWith('+')) return 'text-success';
    if (trend.startsWith('-')) return 'text-danger';
    return 'text-muted';
  };

  const getTrendIcon = (trend) => {
    if (!trend) return '';
    if (trend.startsWith('+')) return 'bi-arrow-up';
    if (trend.startsWith('-')) return 'bi-arrow-down';
    return 'bi-dash';
  };

  const getVariantClass = (variant) => {
    const variants = {
      primary: 'stats-card-primary',
      success: 'stats-card-success',
      warning: 'stats-card-warning',
      danger: 'stats-card-danger',
      info: 'stats-card-info',
      light: 'stats-card-light',
      dark: 'stats-card-dark'
    };
    return variants[variant] || variants.primary;
  };

  if (loading) {
    return (
      <div className="stats-card stats-card-loading">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="placeholder-title mb-2"></div>
              <div className="placeholder-value"></div>
            </div>
            <div className="col-auto">
              <div className="placeholder-icon"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`stats-card ${getVariantClass(variant)} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="stats-title">
              {title}
            </div>
            <div className="stats-value-container">
              <div className="stats-value">
                {value}
                {unit && <span className="stats-unit">{unit}</span>}
              </div>
            </div>
            
            {trend && (
              <div className={`stats-trend ${getTrendColor(trend)}`}>
                <i className={`bi ${getTrendIcon(trend)} me-1`}></i>
                <span>{trend}</span>
              </div>
            )}
            
            {description && (
              <div className="stats-description">
                {description}
              </div>
            )}
          </div>
          <div className="col-auto">
            <div className="stats-icon">
              <i className={`bi ${icon}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

/* StatsCard.css */