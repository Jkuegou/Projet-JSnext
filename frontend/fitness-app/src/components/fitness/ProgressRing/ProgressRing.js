import React from 'react';
import './ProgressRing.css';

const ProgressRing = ({ 
  progress = 0, 
  size = 120, 
  strokeWidth = 8, 
  color = '#007bff',
  backgroundColor = '#e9ecef',
  showPercentage = true,
  label = '',
  children 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="progress-ring-svg">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="progress-ring-circle"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
            transition: 'stroke-dashoffset 0.6s ease-in-out'
          }}
        />
      </svg>
      <div className="progress-ring-content">
        {children || (
          <>
            {showPercentage && (
              <div className="progress-ring-percentage" style={{ color }}>
                {Math.round(progress)}%
              </div>
            )}
            {label && (
              <div className="progress-ring-label">
                {label}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressRing;
