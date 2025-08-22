import React, { useState, useEffect } from 'react';
import './ProgressPage.css';
import { getUnlockedBadges } from "../../utils/badges";

const ProgressPage = () => {
   const userStats = {
    workouts: 5,  // nombre total d'entraînements
    streak: 4,    // jours consécutifs
    distance: 120 // en km
  };

  const unlocked = getUnlockedBadges(userStats);
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [weightData, setWeightData] = useState([
    { date: '2024-01-01', weight: 78 },
    { date: '2024-01-08', weight: 77.5 },
    { date: '2024-01-15', weight: 76.8 },
    { date: '2024-01-22', weight: 76.2 },
    { date: '2024-01-29', weight: 75.8 },
    { date: '2024-02-05', weight: 75.3 },
    { date: '2024-02-12', weight: 75.0 }
  ]);

  const [workoutStats, setWorkoutStats] = useState({
    totalWorkouts: 28,
    totalMinutes: 1260,
    caloriesBurned: 8400,
    averageIntensity: 7.2,
    favoriteWorkout: 'HIIT Cardio'
  });

  const [achievements, setAchievements] = useState([
    { id: 1, title: '7-Day Streak', description: 'Complete workouts for 7 consecutive days', earned: true, date: '2024-02-10' },
    { id: 2, title: 'Calorie Crusher', description: 'Burn 500+ calories in a single workout', earned: true, date: '2024-02-08' },
    { id: 3, title: 'Weight Goal', description: 'Reach your target weight', earned: false, progress: 85 },
    { id: 4, title: 'Consistency King', description: 'Complete 30 workouts in a month', earned: false, progress: 93 },
    { id: 5, title: 'Endurance Master', description: 'Complete a 60+ minute workout', earned: true, date: '2024-02-05' }
  ]);

  const [bodyMeasurements, setBodyMeasurements] = useState({
    chest: { current: 98, previous: 100, unit: 'cm' },
    waist: { current: 82, previous: 85, unit: 'cm' },
    arms: { current: 35, previous: 34, unit: 'cm' },
    thighs: { current: 58, previous: 60, unit: 'cm' }
  });

  const [weeklyProgress, setWeeklyProgress] = useState([
    { day: 'Mon', workouts: 1, calories: 320 },
    { day: 'Tue', workouts: 1, calories: 280 },
    { day: 'Wed', workouts: 0, calories: 0 },
    { day: 'Thu', workouts: 1, calories: 450 },
    { day: 'Fri', workouts: 1, calories: 380 },
    { day: 'Sat', workouts: 2, calories: 620 },
    { day: 'Sun', workouts: 1, calories: 300 }
  ]);

  const calculateWeightLoss = () => {
    const startWeight = weightData[0]?.weight || 0;
    const currentWeight = weightData[weightData.length - 1]?.weight || 0;
    return (startWeight - currentWeight).toFixed(1);
  };

  const getWeightTrend = () => {
    if (weightData.length < 2) return 'stable';
    const recent = weightData.slice(-3);
    const trend = recent[recent.length - 1].weight - recent[0].weight;
    return trend < -0.5 ? 'down' : trend > 0.5 ? 'up' : 'stable';
  };

  const getMeasurementChange = (current, previous) => {
    const change = current - previous;
    return {
      value: Math.abs(change).toFixed(1),
      type: change < 0 ? 'decrease' : change > 0 ? 'increase' : 'stable'
    };
  };

  return (
    <div className="progress-page">
      <div className="progress-header">
        <div className="header-content">
          <h1>Your Progress Journey</h1>
          <p>Track your fitness transformation and celebrate your achievements</p>
            <div className="badges-list">
        {unlocked.length > 0 ? (
          unlocked.map((badge) => (
            <div key={badge.id} className="badge-card">
              🏅 {badge.name}
            </div>
          ))
        ) : (
          <p>Aucun badge débloqué pour l'instant.</p>
        )}
      </div>
        </div>
        <div className="period-selector">
          <button 
            className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('week')}
          >
            Week
          </button>
          <button 
            className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('month')}
          >
            Month
          </button>
          <button 
            className={`period-btn ${selectedPeriod === 'year' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('year')}
          >
            Year
          </button>
        </div>
      </div>

      <div className="progress-content">
        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-card highlight">
            <div className="stat-icon">
              <i className="fas fa-weight"></i>
            </div>
            <div className="stat-info">
              <h3>{calculateWeightLoss()} kg</h3>
              <p>Weight Lost</p>
              <span className={`trend ${getWeightTrend()}`}>
                <i className={`fas fa-arrow-${getWeightTrend() === 'down' ? 'down' : getWeightTrend() === 'up' ? 'up' : 'right'}`}></i>
                {getWeightTrend() === 'down' ? 'Decreasing' : getWeightTrend() === 'up' ? 'Increasing' : 'Stable'}
              </span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="stat-info">
              <h3>{workoutStats.totalWorkouts}</h3>
              <p>Total Workouts</p>
              <span className="trend up">+12 this month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-fire"></i>
            </div>
            <div className="stat-info">
              <h3>{workoutStats.caloriesBurned.toLocaleString()}</h3>
              <p>Calories Burned</p>
              <span className="trend up">+1,200 this month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="stat-info">
              <h3>{Math.floor(workoutStats.totalMinutes / 60)}h {workoutStats.totalMinutes % 60}m</h3>
              <p>Time Exercised</p>
              <span className="trend up">+5h this month</span>
            </div>
          </div>
        </div>

        <div className="progress-charts">
          {/* Weight Progress Chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Weight Progress</h3>
              <div className="chart-controls">
                <button className="chart-btn active">Line</button>
                <button className="chart-btn">Bar</button>
              </div>
            </div>
            <div className="weight-chart">
              <div className="chart-grid">
                {weightData.map((data, index) => (
                  <div key={index} className="weight-point" style={{
                    left: `${(index / (weightData.length - 1)) * 100}%`,
                    bottom: `${((data.weight - 74) / (79 - 74)) * 100}%`
                  }}>
                    <div className="weight-dot"></div>
                    <div className="weight-label">{data.weight}kg</div>
                  </div>
                ))}
                <svg className="chart-line">
                  <polyline
                    points={weightData.map((data, index) => 
                      `${(index / (weightData.length - 1)) * 100},${100 - ((data.weight - 74) / (79 - 74)) * 100}`
                    ).join(' ')}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>This Week's Activity</h3>
            </div>
            <div className="weekly-chart">
              {weeklyProgress.map((day, index) => (
                <div key={index} className="day-column">
                  <div className="day-bar">
                    <div 
                      className="workout-bar" 
                      style={{height: `${(day.workouts / 2) * 100}%`}}
                    ></div>
                    <div 
                      className="calorie-bar" 
                      style={{height: `${(day.calories / 700) * 100}%`}}
                    ></div>
                  </div>
                  <div className="day-label">{day.day}</div>
                  <div className="day-stats">
                    <small>{day.workouts} workouts</small>
                    <small>{day.calories} cal</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color workout"></span>
                <span>Workouts</span>
              </div>
              <div className="legend-item">
                <span className="legend-color calorie"></span>
                <span>Calories</span>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-details">
          {/* Body Measurements */}
          <div className="measurements-card">
            <div className="card-header">
              <h3>Body Measurements</h3>
              <button className="add-measurement-btn">
                <i className="fas fa-plus"></i>
                Add Measurement
              </button>
            </div>
            <div className="measurements-grid">
              {Object.entries(bodyMeasurements).map(([key, data]) => {
                const change = getMeasurementChange(data.current, data.previous);
                return (
                  <div key={key} className="measurement-item">
                    <div className="measurement-icon">
                      <i className={`fas fa-${key === 'chest' ? 'expand-arrows-alt' : key === 'waist' ? 'circle' : key === 'arms' ? 'hand-paper' : 'running'}`}></i>
                    </div>
                    <div className="measurement-info">
                      <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                      <div className="measurement-values">
                        <span className="current">{data.current} {data.unit}</span>
                        <span className={`change ${change.type}`}>
                          <i className={`fas fa-arrow-${change.type === 'decrease' ? 'down' : change.type === 'increase' ? 'up' : 'right'}`}></i>
                          {change.value} {data.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="achievements-card">
            <div className="card-header">
              <h3>Achievements</h3>
              <span className="achievement-count">
                {achievements.filter(a => a.earned).length}/{achievements.length} Unlocked
              </span>
            </div>
            <div className="achievements-grid">
              {achievements.map(achievement => (
                <div key={achievement.id} className={`achievement-item ${achievement.earned ? 'earned' : 'locked'}`}>
                  <div className="achievement-icon">
                    <i className={`fas ${achievement.earned ? 'fa-trophy' : 'fa-lock'}`}></i>
                  </div>
                  <div className="achievement-info">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    {achievement.earned ? (
                      <span className="earned-date">Earned on {achievement.date}</span>
                    ) : (
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: `${achievement.progress}%`}}
                        ></div>
                        <span className="progress-text">{achievement.progress}%</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Records */}
        <div className="records-section">
          <h3>Personal Records</h3>
          <div className="records-grid">
            <div className="record-card">
              <div className="record-icon">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="record-info">
                <h4>Longest Workout</h4>
                <span className="record-value">1h 45m</span>
                <small>Strength Training - Feb 5</small>
              </div>
            </div>
            <div className="record-card">
              <div className="record-icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="record-info">
                <h4>Most Calories Burned</h4>
                <span className="record-value">680 cal</span>
                <small>HIIT Cardio - Feb 8</small>
              </div>
            </div>
            <div className="record-card">
              <div className="record-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="record-info">
                <h4>Longest Streak</h4>
                <span className="record-value">12 days</span>
                <small>Jan 28 - Feb 8</small>
              </div>
            </div>
            <div className="record-card">
              <div className="record-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="record-info">
                <h4>Best Week</h4>
                <span className="record-value">7 workouts</span>
                <small>Week of Feb 5</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;