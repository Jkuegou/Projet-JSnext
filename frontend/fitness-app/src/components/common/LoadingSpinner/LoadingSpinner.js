import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = 'Chargement...',
  showText = true 
}) => {
  const getSizeClass = (size) => {
    const sizes = {
      small: 'spinner-sm',
      medium: 'spinner-md',
      large: 'spinner-lg'
    };
    return sizes[size] || sizes.medium;
  };

  const getColorClass = (color) => {
    return `text-${color}`;
  };

  return (
    <div className="loading-spinner-container">
      <div className={`spinner-border ${getSizeClass(size)} ${getColorClass(color)}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {showText && (
        <div className="loading-text mt-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
