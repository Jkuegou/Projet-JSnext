// import React from 'react';
// import './StatsCard.css';

// const StatsCard = ({ 
//   title, 
//   value, 
//   icon, 
//   variant = 'primary',
//   unit,
//   trend,
//   description,
//   onClick,
//   loading = false 
// }) => {
//   const getTrendColor = (trend) => {
//     if (!trend) return '';
//     if (trend.startsWith('+')) return 'text-success';
//     if (trend.startsWith('-')) return 'text-danger';
//     return 'text-muted';
//   };

//   const getTrendIcon = (trend) => {
//     if (!trend) return '';
//     if (trend.startsWith('+')) return 'bi-arrow-up';
//     if (trend.startsWith('-')) return 'bi-arrow-down';
//     return 'bi-dash';
//   };

//   const getVariantClass = (variant) => {
//     const variants = {
//       primary: 'stats-card-primary',
//       success: 'stats-card-success',
//       warning: 'stats-card-warning',
//       danger: 'stats-card-danger',
//       info: 'stats-card-info',
//       light: 'stats-card-light',
//       dark: 'stats-card-dark'
//     };
//     return variants[variant] || variants.primary;
//   };

//   if (loading) {
//     return (
//       <div className="stats-card stats-card-loading">
//         <div className="card-body">
//           <div className="row no-gutters align-items-center">
//             <div className="col mr-2">
//               <div className="placeholder-title mb-2"></div>
//               <div className="placeholder-value"></div>
//             </div>
//             <div className="col-auto">
//               <div className="placeholder-icon"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className={`stats-card ${getVariantClass(variant)} ${onClick ? 'clickable' : ''}`}
//       onClick={onClick}
//     >
//       <div className="card-body">
//         <div className="row no-gutters align-items-center">
//           <div className="col mr-2">
//             <div className="stats-title">
//               {title}
//             </div>
//             <div className="stats-value-container">
//               <div className="stats-value">
//                 {value}
//                 {unit && <span className="stats-unit">{unit}</span>}
//               </div>
//             </div>
            
//             {trend && (
//               <div className={`stats-trend ${getTrendColor(trend)}`}>
//                 <i className={`bi ${getTrendIcon(trend)} me-1`}></i>
//                 <span>{trend}</span>
//               </div>
//             )}
            
//             {description && (
//               <div className="stats-description">
//                 {description}
//               </div>
//             )}
//           </div>
//           <div className="col-auto">
//             <div className="stats-icon">
//               <i className={`bi ${icon}`}></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;

// /* StatsCard.css */
// src/components/fitness/StatsCard/StatsCard.js
import React from 'react';
import './StatsCard.css';

const StatsCard = ({ 
  title, 
  value, 
  unit = '', 
  icon, 
  trend = null,
  trendDirection = null,
  color = 'primary',
  size = 'medium',
  onClick = null,
  loading = false,
  className = ''
}) => {
  const formatValue = (val) => {
    if (loading) return '---';
    if (typeof val === 'number') {
      if (val >= 1000000) {
        return (val / 1000000).toFixed(1) + 'M';
      } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
      }
      return val.toLocaleString();
    }
    return val || '0';
  };

  const getTrendIcon = () => {
    if (!trend || !trendDirection) return null;
    
    switch (trendDirection) {
      case 'up':
        return <span className="trend-icon trend-up">↗</span>;
      case 'down':
        return <span className="trend-icon trend-down">↘</span>;
      case 'stable':
        return <span className="trend-icon trend-stable">→</span>;
      default:
        return null;
    }
  };

  const getTrendClass = () => {
    if (!trendDirection) return '';
    return `trend-${trendDirection}`;
  };

  return (
    <div 
      className={`stats-card ${color} ${size} ${onClick ? 'clickable' : ''} ${className} ${loading ? 'loading' : ''}`}
      onClick={onClick}
    >
      <div className="stats-card-header">
        {icon && <div className="stats-icon">{icon}</div>}
        <h3 className="stats-title">{title}</h3>
      </div>
      
      <div className="stats-content">
        <div className="stats-value">
          <span className="value">{formatValue(value)}</span>
          {unit && <span className="unit">{unit}</span>}
        </div>
        
        {trend !== null && (
          <div className={`stats-trend ${getTrendClass()}`}>
            {getTrendIcon()}
            <span className="trend-value">
              {typeof trend === 'number' ? `${trend > 0 ? '+' : ''}${trend}%` : trend}
            </span>
          </div>
        )}
      </div>
      
      {loading && (
        <div className="stats-loading">
          <div className="loading-bar"></div>
        </div>
      )}
    </div>
  );
};

// Composant pour afficher plusieurs stats en grille
export const StatsGrid = ({ stats, columns = 4, className = '' }) => {
  return (
    <div className={`stats-grid cols-${columns} ${className}`}>
      {stats.map((stat, index) => (
        <StatsCard key={stat.id || index} {...stat} />
      ))}
    </div>
  );
};

// Composant pour une stat compacte
export const CompactStatsCard = ({ 
  label, 
  value, 
  icon, 
  color = 'primary',
  className = ''
}) => {
  return (
    <div className={`compact-stats-card ${color} ${className}`}>
      {icon && <div className="compact-icon">{icon}</div>}
      <div className="compact-content">
        <div className="compact-value">{value}</div>
        <div className="compact-label">{label}</div>
      </div>
    </div>
  );
};

// Composant pour une stat avec progression circulaire
export const CircularStatsCard = ({ 
  title, 
  value, 
  maxValue, 
  unit = '', 
  color = '#007bff',
  size = 120,
  strokeWidth = 8,
  className = ''
}) => {
  const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`circular-stats-card ${className}`}>
      <div className="circular-progress" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="progress-ring">
          <circle
            className="progress-ring-background"
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="progress-ring-progress"
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
        </svg>
        <div className="progress-content">
          <div className="progress-value">{value}{unit}</div>
          <div className="progress-percentage">{Math.round(percentage)}%</div>
        </div>
      </div>
      <div className="circular-title">{title}</div>
    </div>
  );
};

export default StatsCard;