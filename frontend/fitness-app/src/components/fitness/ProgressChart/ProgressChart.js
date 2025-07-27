import React, { useState } from 'react';
import './ProgressChart.css';

const ProgressChart = ({ data = [] }) => {
  const [activeTab, setActiveTab] = useState('weight');

  // Données par défaut si aucune donnée n'est fournie
  const defaultData = [
    { date: '2024-01-10', weight: 77, calories: 400, workouts: 1 },
    { date: '2024-01-11', weight: 76.8, calories: 450, workouts: 0 },
    { date: '2024-01-12', weight: 76.5, calories: 380, workouts: 1 },
    { date: '2024-01-13', weight: 76.2, calories: 500, workouts: 1 },
    { date: '2024-01-14', weight: 76, calories: 420, workouts: 0 },
    { date: '2024-01-15', weight: 75.8, calories: 470, workouts: 1 }
  ];

  const chartData = data.length > 0 ? data : defaultData;

  const renderSimpleChart = (dataKey, color, unit) => {
    const values = chartData.map(item => item[dataKey]);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue || 1;

    return (
      <div className="simple-chart">
        <div className="chart-container">
          {chartData.map((item, index) => {
            const height = ((item[dataKey] - minValue) / range) * 100;
            return (
              <div key={index} className="chart-bar-container">
                <div 
                  className="chart-bar"
                  style={{ 
                    height: `${Math.max(height, 10)}%`,
                    backgroundColor: color 
                  }}
                  title={`${item[dataKey]}${unit} - ${new Date(item.date).toLocaleDateString('fr-FR')}`}
                ></div>
                <small className="chart-label">
                  {new Date(item.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                </small>
              </div>
            );
          })}
        </div>
        <div className="chart-stats mt-3">
          <div className="row text-center">
            <div className="col-4">
              <div className="stat-item">
                <div className="stat-value" style={{ color }}>{minValue}{unit}</div>
                <small className="text-muted">Min</small>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item">
                <div className="stat-value" style={{ color }}>
                  {(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)}{unit}
                </div>
                <small className="text-muted">Moyenne</small>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item">
                <div className="stat-value" style={{ color }}>{maxValue}{unit}</div>
                <small className="text-muted">Max</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="progress-chart">
      <div className="chart-tabs mb-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'weight' ? 'active' : ''}`}
              onClick={() => setActiveTab('weight')}
            >
              <i className="fas fa-weight me-2"></i>Poids
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'calories' ? 'active' : ''}`}
              onClick={() => setActiveTab('calories')}
            >
              <i className="fas fa-fire me-2"></i>Calories
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`}
              onClick={() => setActiveTab('workouts')}
            >
              <i className="fas fa-dumbbell me-2"></i>Entraînements
            </button>
          </li>
        </ul>
      </div>

      <div className="chart-content">
        {activeTab === 'weight' && renderSimpleChart('weight', '#17a2b8', 'kg')}
        {activeTab === 'calories' && renderSimpleChart('calories', '#fd7e14', ' cal')}
        {activeTab === 'workouts' && renderSimpleChart('workouts', '#28a745', '')}
      </div>
    </div>
  );
};

export default ProgressChart;