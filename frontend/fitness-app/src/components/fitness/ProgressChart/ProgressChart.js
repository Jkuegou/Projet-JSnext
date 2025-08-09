// import React, { useState } from 'react';
// import './ProgressChart.css';

// const ProgressChart = ({ data = [] }) => {
//   const [activeTab, setActiveTab] = useState('weight');

//   // Données par défaut si aucune donnée n'est fournie
//   const defaultData = [
//     { date: '2024-01-10', weight: 77, calories: 400, workouts: 1 },
//     { date: '2024-01-11', weight: 76.8, calories: 450, workouts: 0 },
//     { date: '2024-01-12', weight: 76.5, calories: 380, workouts: 1 },
//     { date: '2024-01-13', weight: 76.2, calories: 500, workouts: 1 },
//     { date: '2024-01-14', weight: 76, calories: 420, workouts: 0 },
//     { date: '2024-01-15', weight: 75.8, calories: 470, workouts: 1 }
//   ];

//   const chartData = data.length > 0 ? data : defaultData;

//   const renderSimpleChart = (dataKey, color, unit) => {
//     const values = chartData.map(item => item[dataKey]);
//     const maxValue = Math.max(...values);
//     const minValue = Math.min(...values);
//     const range = maxValue - minValue || 1;

//     return (
//       <div className="simple-chart">
//         <div className="chart-container">
//           {chartData.map((item, index) => {
//             const height = ((item[dataKey] - minValue) / range) * 100;
//             return (
//               <div key={index} className="chart-bar-container">
//                 <div 
//                   className="chart-bar"
//                   style={{ 
//                     height: `${Math.max(height, 10)}%`,
//                     backgroundColor: color 
//                   }}
//                   title={`${item[dataKey]}${unit} - ${new Date(item.date).toLocaleDateString('fr-FR')}`}
//                 ></div>
//                 <small className="chart-label">
//                   {new Date(item.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
//                 </small>
//               </div>
//             );
//           })}
//         </div>
//         <div className="chart-stats mt-3">
//           <div className="row text-center">
//             <div className="col-4">
//               <div className="stat-item">
//                 <div className="stat-value" style={{ color }}>{minValue}{unit}</div>
//                 <small className="text-muted">Min</small>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="stat-item">
//                 <div className="stat-value" style={{ color }}>
//                   {(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)}{unit}
//                 </div>
//                 <small className="text-muted">Moyenne</small>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="stat-item">
//                 <div className="stat-value" style={{ color }}>{maxValue}{unit}</div>
//                 <small className="text-muted">Max</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="progress-chart">
//       <div className="chart-tabs mb-3">
//         <ul className="nav nav-pills">
//           <li className="nav-item">
//             <button 
//               className={`nav-link ${activeTab === 'weight' ? 'active' : ''}`}
//               onClick={() => setActiveTab('weight')}
//             >
//               <i className="fas fa-weight me-2"></i>Poids
//             </button>
//           </li>
//           <li className="nav-item">
//             <button 
//               className={`nav-link ${activeTab === 'calories' ? 'active' : ''}`}
//               onClick={() => setActiveTab('calories')}
//             >
//               <i className="fas fa-fire me-2"></i>Calories
//             </button>
//           </li>
//           <li className="nav-item">
//             <button 
//               className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`}
//               onClick={() => setActiveTab('workouts')}
//             >
//               <i className="fas fa-dumbbell me-2"></i>Entraînements
//             </button>
//           </li>
//         </ul>
//       </div>

//       <div className="chart-content">
//         {activeTab === 'weight' && renderSimpleChart('weight', '#17a2b8', 'kg')}
//         {activeTab === 'calories' && renderSimpleChart('calories', '#fd7e14', ' cal')}
//         {activeTab === 'workouts' && renderSimpleChart('workouts', '#28a745', '')}
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;
// src/components/fitness/ProgressChart/ProgressChart.js
import React, { useState, useEffect } from 'react';
import './ProgressChart.css';

const ProgressChart = ({ 
  data = [], 
  type = 'line', 
  metric = 'workouts',
  timeframe = '1M',
  height = 300,
  showGrid = true,
  showTooltip = true,
  color = '#007bff',
  className = ''
}) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setChartData(data);
    } else {
      // Générer des données de démonstration
      generateDemoData();
    }
  }, [data, timeframe, metric]);

  const generateDemoData = () => {
    const now = new Date();
    const days = timeframe === '1W' ? 7 : timeframe === '1M' ? 30 : 90;
    const demoData = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      let value;
      switch (metric) {
        case 'workouts':
          value = Math.floor(Math.random() * 3);
          break;
        case 'duration':
          value = Math.floor(Math.random() * 90) + 30;
          break;
        case 'calories':
          value = Math.floor(Math.random() * 400) + 200;
          break;
        case 'weight':
          value = 70 + (Math.random() - 0.5) * 10;
          break;
        default:
          value = Math.random() * 100;
      }

      demoData.push({
        date: date.toISOString().split('T')[0],
        [metric]: value,
        value: value
      });
    }

    setChartData(demoData);
  };

  const getMetricLabel = (metric) => {
    const labels = {
      workouts: 'Entraînements',
      duration: 'Durée (min)',
      calories: 'Calories brûlées',
      weight: 'Poids (kg)',
      distance: 'Distance (km)',
      reps: 'Répétitions'
    };
    return labels[metric] || metric;
  };

  const formatValue = (value, metric) => {
    if (typeof value !== 'number') return value;
    
    switch (metric) {
      case 'weight':
        return `${value.toFixed(1)} kg`;
      case 'duration':
        return `${Math.round(value)} min`;
      case 'calories':
        return `${Math.round(value)} cal`;
      case 'distance':
        return `${value.toFixed(1)} km`;
      default:
        return Math.round(value);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { 
      day: 'numeric', 
      month: 'short' 
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  const getMaxValue = () => {
    if (chartData.length === 0) return 100;
    return Math.max(...chartData.map(d => d.value || d[metric] || 0)) * 1.1;
  };

  const getMinValue = () => {
    if (chartData.length === 0) return 0;
    const min = Math.min(...chartData.map(d => d.value || d[metric] || 0));
    return Math.max(0, min * 0.9);
  };

  const createPath = () => {
    if (chartData.length === 0) return '';

    const maxValue = getMaxValue();
    const minValue = getMinValue();
    const valueRange = maxValue - minValue;
    const width = 100; // Pourcentage
    const stepX = width / (chartData.length - 1);

    let path = '';

    chartData.forEach((point, index) => {
      const x = index * stepX;
      const value = point.value || point[metric] || 0;
      const y = 100 - ((value - minValue) / valueRange) * 100;

      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });

    return path;
  };

  const createBars = () => {
    if (chartData.length === 0) return [];

    const maxValue = getMaxValue();
    const width = 100 / chartData.length;
    const barWidth = Math.max(width * 0.6, 2);

    return chartData.map((point, index) => {
      const x = (index + 0.5) * width - barWidth / 2;
      const value = point.value || point[metric] || 0;
      const height = (value / maxValue) * 100;
      const y = 100 - height;

      return {
        x,
        y,
        width: barWidth,
        height,
        value,
        point
      };
    });
  };

  const handleMouseEnter = (point, index) => {
    if (showTooltip) {
      setHoveredPoint({ point, index });
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  if (chartData.length === 0) {
    return (
      <div className={`progress-chart empty ${className}`} style={{ height }}>
        <div className="chart-empty">
          <div className="empty-icon">📊</div>
          <p>Aucune donnée disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`progress-chart ${className}`} style={{ height }}>
      <div className="chart-header">
        <h3 className="chart-title">{getMetricLabel(metric)}</h3>
        <div className="chart-legend">
          <span className="legend-item" style={{ color }}>
            {getMetricLabel(metric)}
          </span>
        </div>
      </div>

      <div className="chart-container">
        <svg 
          className="chart-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Grille */}
          {showGrid && (
            <g className="chart-grid">
              {/* Lignes horizontales */}
              {[0, 25, 50, 75, 100].map(y => (
                <line
                  key={`h-${y}`}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="#e0e0e0"
                  strokeWidth="0.1"
                />
              ))}
              {/* Lignes verticales */}
              {chartData.map((_, index) => {
                const x = (index / (chartData.length - 1)) * 100;
                return (
                  <line
                    key={`v-${index}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="100"
                    stroke="#e0e0e0"
                    strokeWidth="0.1"
                  />
                );
              })}
            </g>
          )}

          {/* Graphique en ligne */}
          {type === 'line' && (
            <g>
              {/* Zone sous la courbe */}
              <path
                d={`${createPath()} L 100 100 L 0 100 Z`}
                fill={`${color}15`}
              />
              {/* Ligne principale */}
              <path
                d={createPath()}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Points */}
              {chartData.map((point, index) => {
                const x = (index / (chartData.length - 1)) * 100;
                const value = point.value || point[metric] || 0;
                const maxValue = getMaxValue();
                const minValue = getMinValue();
                const y = 100 - ((value - minValue) / (maxValue - minValue)) * 100;

                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="0.8"
                    fill={color}
                    className="chart-point"
                    onMouseEnter={() => handleMouseEnter(point, index)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </g>
          )}

          {/* Graphique en barres */}
          {type === 'bar' && (
            <g>
              {createBars().map((bar, index) => (
                <rect
                  key={index}
                  x={bar.x}
                  y={bar.y}
                  width={bar.width}
                  height={bar.height}
                  fill={color}
                  className="chart-bar"
                  onMouseEnter={() => handleMouseEnter(bar.point, index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </g>
          )}
        </svg>

        {/* Tooltip */}
        {showTooltip && hoveredPoint && (
          <div className="chart-tooltip">
            <div className="tooltip-date">
              {formatDate(hoveredPoint.point.date)}
            </div>
            <div className="tooltip-value">
              {formatValue(hoveredPoint.point.value || hoveredPoint.point[metric], metric)}
            </div>
          </div>
        )}
      </div>

      {/* Axes */}
      <div className="chart-axes">
        <div className="x-axis">
          {chartData.map((point, index) => {
            // Afficher seulement quelques labels pour éviter l'encombrement
            const showLabel = index === 0 || 
                            index === chartData.length - 1 || 
                            index === Math.floor(chartData.length / 2);
            
            if (!showLabel) return null;

            return (
              <span 
                key={index}
                className="x-axis-label"
                style={{ left: `${(index / (chartData.length - 1)) * 100}%` }}
              >
                {formatDate(point.date)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Composant pour afficher plusieurs métriques
export const MultiMetricChart = ({ 
  data, 
  metrics = ['workouts', 'duration'], 
  colors = ['#007bff', '#28a745'],
  height = 300,
  className = ''
}) => {
  return (
    <div className={`multi-metric-chart ${className}`}>
      {metrics.map((metric, index) => (
        <ProgressChart
          key={metric}
          data={data}
          metric={metric}
          color={colors[index] || '#007bff'}
          height={height}
          className="metric-chart"
        />
      ))}
    </div>
  );
};

export default ProgressChart;