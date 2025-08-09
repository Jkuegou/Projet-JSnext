// import React from 'react';
// import './LoadingSpinner.css';

// const LoadingSpinner = ({ 
//   size = 'medium', 
//   color = 'primary', 
//   text = 'Chargement...',
//   showText = true 
// }) => {
//   const getSizeClass = (size) => {
//     const sizes = {
//       small: 'spinner-sm',
//       medium: 'spinner-md',
//       large: 'spinner-lg'
//     };
//     return sizes[size] || sizes.medium;
//   };

//   const getColorClass = (color) => {
//     return `text-${color}`;
//   };

//   return (
//     <div className="loading-spinner-container">
//       <div className={`spinner-border ${getSizeClass(size)} ${getColorClass(color)}`} role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//       {showText && (
//         <div className="loading-text mt-2">
//           {text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoadingSpinner;
// src/components/common/LoadingSpinner/LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = null,
  overlay = false,
  className = '' 
}) => {
  const spinnerSizes = {
    small: 20,
    medium: 40,
    large: 60
  };

  const spinnerColors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40'
  };

  const spinnerSize = spinnerSizes[size] || spinnerSizes.medium;
  const spinnerColor = spinnerColors[color] || spinnerColors.primary;

  const SpinnerComponent = () => (
    <div className={`loading-spinner ${className}`}>
      <div 
        className="spinner"
        style={{
          width: `${spinnerSize}px`,
          height: `${spinnerSize}px`,
          borderColor: `${spinnerColor}25`,
          borderTopColor: spinnerColor
        }}
      />
      {text && <div className="spinner-text">{text}</div>}
    </div>
  );

  if (overlay) {
    return (
      <div className="spinner-overlay">
        <SpinnerComponent />
      </div>
    );
  }

  return <SpinnerComponent />;
};

// Composant pour les états de chargement en ligne
export const InlineSpinner = ({ size = 16, color = '#007bff' }) => (
  <div 
    className="inline-spinner"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderColor: `${color}25`,
      borderTopColor: color
    }}
  />
);

// Composant pour skeleton loading
export const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '' 
}) => (
  <div 
    className={`skeleton-loader ${className}`}
    style={{
      width,
      height,
      borderRadius
    }}
  />
);

// Composant pour les cartes de chargement
export const CardSkeleton = ({ rows = 3 }) => (
  <div className="card-skeleton">
    <SkeletonLoader height="200px" className="skeleton-image" />
    <div className="skeleton-content">
      <SkeletonLoader height="24px" width="80%" className="skeleton-title" />
      {Array.from({ length: rows }).map((_, index) => (
        <SkeletonLoader 
          key={index}
          height="16px" 
          width={`${Math.random() * 40 + 60}%`}
          className="skeleton-line"
        />
      ))}
    </div>
  </div>
);

export default LoadingSpinner;