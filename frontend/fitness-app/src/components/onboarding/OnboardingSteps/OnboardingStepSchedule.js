// src/components/onboarding/OnboardingSteps/TrainingSchedule.js
import React, { useState, useEffect } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const TrainingSchedule = () => {
  const { onboardingData, updateStepData } = useOnboarding();
  const [formData, setFormData] = useState({
    workoutDays: [],
    sessionDuration: '',
    preferredTime: '',
    workoutLocation: '',
    ...onboardingData.trainingSchedule
  });

  // Mettre à jour les données du contexte
  useEffect(() => {
    updateStepData('trainingSchedule', formData);
  }, [formData, updateStepData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      workoutDays: prev.workoutDays.includes(day)
        ? prev.workoutDays.filter(d => d !== day)
        : [...prev.workoutDays, day]
    }));
  };

  const weekDays = [
    { value: 'monday', label: 'Mon', fullName: 'Monday', icon: 'bi-1-circle' },
    { value: 'tuesday', label: 'Tue', fullName: 'Tuesday', icon: 'bi-2-circle' },
    { value: 'wednesday', label: 'Wed', fullName: 'Wednesday', icon: 'bi-3-circle' },
    { value: 'thursday', label: 'Thu', fullName: 'Thursday', icon: 'bi-4-circle' },
    { value: 'friday', label: 'Fri', fullName: 'Friday', icon: 'bi-5-circle' },
    { value: 'saturday', label: 'Sat', fullName: 'Saturday', icon: 'bi-6-circle' },
    { value: 'sunday', label: 'Sun', fullName: 'Sunday', icon: 'bi-7-circle' }
  ];

  const sessionDurations = [
    {
      value: '30',
      label: '30 minutes',
      description: 'Quick and efficient',
      icon: 'bi-clock',
      ideal: 'Busy schedules, beginners',
      calories: '150-250 cal'
    },
    {
      value: '45',
      label: '45 minutes',
      description: 'Balanced workout',
      icon: 'bi-clock',
      ideal: 'Most popular choice',
      calories: '200-400 cal'
    },
    {
      value: '60',
      label: '60 minutes',
      description: 'Comprehensive training',
      icon: 'bi-clock',
      ideal: 'Detailed workouts',
      calories: '300-500 cal'
    },
    {
      value: '90',
      label: '90 minutes',
      description: 'Extended sessions',
      icon: 'bi-clock',
      ideal: 'Advanced training',
      calories: '400-700 cal'
    }
  ];

  const preferredTimes = [
    {
      value: 'morning',
      label: 'Morning',
      time: '6:00 - 10:00 AM',
      icon: 'bi-sunrise',
      benefits: ['Boost energy', 'Better consistency', 'Faster metabolism'],
      description: 'Start your day strong'
    },
    {
      value: 'afternoon',
      label: 'Afternoon',
      time: '12:00 - 5:00 PM',
      icon: 'bi-sun',
      benefits: ['Peak performance', 'Stress relief', 'Better flexibility'],
      description: 'Midday energy boost'
    },
    {
      value: 'evening',
      label: 'Evening',
      time: '5:00 - 9:00 PM',
      icon: 'bi-moon',
      benefits: ['Wind down', 'Social workouts', 'Better sleep'],
      description: 'End the day right'
    }
  ];

  const workoutLocations = [
    {
      value: 'home',
      label: 'Home',
      description: 'Workout from the comfort of your home',
      icon: 'bi-house',
      equipment: 'Minimal equipment needed',
      benefits: ['Convenience', 'Privacy', 'No commute', 'Flexible timing']
    },
    {
      value: 'gym',
      label: 'Gym',
      description: 'Full access to equipment and facilities',
      icon: 'bi-building',
      equipment: 'Full equipment access',
      benefits: ['Variety', 'Heavy weights', 'Social environment', 'Professional equipment']
    },
    {
      value: 'outdoor',
      label: 'Outdoor',
      description: 'Fresh air and nature-based workouts',
      icon: 'bi-tree',
      equipment: 'Bodyweight & portable',
      benefits: ['Fresh air', 'Vitamin D', 'Varied terrain', 'Mental boost']
    },
    {
      value: 'mixed',
      label: 'Mixed',
      description: 'Combination of different locations',
      icon: 'bi-shuffle',
      equipment: 'Adaptable routines',
      benefits: ['Flexibility', 'Variety', 'Weather backup', 'Best of all worlds']
    }
  ];

  // Obtenir des recommandations basées sur l'expérience
  const getRecommendations = () => {
    const experience = onboardingData.fitnessGoals?.experience;
    const primaryGoal = onboardingData.fitnessGoals?.primaryGoal;

    let recommendations = {
      days: 3,
      duration: '45',
      frequency: 'Every other day is perfect for beginners'
    };

    if (experience === 'intermediate') {
      recommendations = {
        days: 4,
        duration: '45',
        frequency: '4 days allows for good progress'
      };
    } else if (experience === 'advanced') {
      recommendations = {
        days: 5,
        duration: '60',
        frequency: '5+ days for serious training'
      };
    }

    if (primaryGoal === 'weight_loss') {
      recommendations.days = Math.max(recommendations.days, 4);
      recommendations.note = 'More frequent sessions help with weight loss';
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  // Calculer le temps total d'entraînement par semaine
  const calculateWeeklyTime = () => {
    if (formData.workoutDays.length && formData.sessionDuration) {
      const totalMinutes = formData.workoutDays.length * parseInt(formData.sessionDuration);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }
    return '0m';
  };

  return (
    <div className="training-schedule-step">
      <div className="step-form">
        {/* Recommandations basées sur le profil */}
        <div className="recommendations-section">
          <div className="recommendation-card">
            <div className="rec-header">
              <i className="bi bi-lightbulb-fill"></i>
              <h4>Recommended for you</h4>
            </div>
            <div className="rec-content">
              <div className="rec-item">
                <span className="rec-label">Workout Days:</span>
                <span className="rec-value">{recommendations.days} days/week</span>
              </div>
              <div className="rec-item">
                <span className="rec-label">Session Duration:</span>
                <span className="rec-value">{recommendations.duration} minutes</span>
              </div>
              <p className="rec-note">
                <i className="bi bi-info-circle me-1"></i>
                {recommendations.frequency}
                {recommendations.note && ` - ${recommendations.note}`}
              </p>
            </div>
          </div>
        </div>

        {/* Sélection des jours */}
        <div className="form-section">
          <h3>Which days work best for you?</h3>
          <p className="section-description">
            Select the days when you can consistently commit to working out.
          </p>
          
          <div className="days-selector">
            <div className="days-grid">
              {weekDays.map(day => (
                <div
                  key={day.value}
                  className={`day-card ${formData.workoutDays.includes(day.value) ? 'selected' : ''}`}
                  onClick={() => handleDayToggle(day.value)}
                >
                  <div className="day-icon">
                    <i className={`bi ${day.icon}`}></i>
                  </div>
                  <div className="day-label">{day.label}</div>
                  <div className="day-name">{day.fullName}</div>
                  <div className="day-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.workoutDays.includes(day.value)}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="days-summary">
              <div className="summary-item">
                <i className="bi bi-calendar-check me-2"></i>
                <span>{formData.workoutDays.length} days selected</span>
              </div>
              <div className="summary-item">
                <i className="bi bi-clock me-2"></i>
                <span>{calculateWeeklyTime()} total per week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Durée des séances */}
        <div className="form-section">
          <h3>How long should each workout be?</h3>
          <p className="section-description">
            Choose a duration that fits your schedule and energy levels.
          </p>
          
          <div className="duration-grid">
            {sessionDurations.map(duration => (
              <div
                key={duration.value}
                className={`duration-card ${formData.sessionDuration === duration.value ? 'selected' : ''}`}
                onClick={() => handleChange('sessionDuration', duration.value)}
              >
                <div className="duration-header">
                  <div className="duration-icon">
                    <i className={`bi ${duration.icon}`}></i>
                  </div>
                  <div className="duration-time">
                    <h4>{duration.label}</h4>
                    <p>{duration.description}</p>
                  </div>
                </div>
                <div className="duration-details">
                  <div className="detail-row">
                    <i className="bi bi-person-check"></i>
                    <span>{duration.ideal}</span>
                  </div>
                  <div className="detail-row">
                    <i className="bi bi-fire"></i>
                    <span>{duration.calories}</span>
                  </div>
                </div>
                <div className="duration-radio">
                  <input
                    type="radio"
                    name="sessionDuration"
                    value={duration.value}
                    checked={formData.sessionDuration === duration.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heure préférée */}
        <div className="form-section">
          <h3>When do you prefer to work out?</h3>
          <p className="section-description">
            Your workout timing can impact your energy, performance, and consistency.
          </p>
          
          <div className="time-grid">
            {preferredTimes.map(time => (
              <div
                key={time.value}
                className={`time-card ${formData.preferredTime === time.value ? 'selected' : ''}`}
                onClick={() => handleChange('preferredTime', time.value)}
              >
                <div className="time-header">
                  <div className="time-icon">
                    <i className={`bi ${time.icon}`}></i>
                  </div>
                  <div className="time-info">
                    <h4>{time.label}</h4>
                    <p>{time.time}</p>
                    <span className="time-description">{time.description}</span>
                  </div>
                </div>
                <div className="time-benefits">
                  <ul>
                    {time.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="bi bi-check2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="time-radio">
                  <input
                    type="radio"
                    name="preferredTime"
                    value={time.value}
                    checked={formData.preferredTime === time.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lieu d'entraînement */}
        <div className="form-section">
          <h3>Where will you be working out?</h3>
          <p className="section-description">
            This helps us recommend appropriate exercises and equipment.
          </p>
          
          <div className="location-grid">
            {workoutLocations.map(location => (
              <div
                key={location.value}
                className={`location-card ${formData.workoutLocation === location.value ? 'selected' : ''}`}
                onClick={() => handleChange('workoutLocation', location.value)}
              >
                <div className="location-header">
                  <div className="location-icon">
                    <i className={`bi ${location.icon}`}></i>
                  </div>
                  <div className="location-info">
                    <h4>{location.label}</h4>
                    <p>{location.description}</p>
                  </div>
                </div>
                <div className="location-equipment">
                  <i className="bi bi-tools"></i>
                  <span>{location.equipment}</span>
                </div>
                <div className="location-benefits">
                  <ul>
                    {location.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="bi bi-check2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="location-radio">
                  <input
                    type="radio"
                    name="workoutLocation"
                    value={location.value}
                    checked={formData.workoutLocation === location.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Résumé du planning */}
        {formData.workoutDays.length > 0 && formData.sessionDuration && (
          <div className="form-section">
            <div className="schedule-summary">
              <h4>
                <i className="bi bi-calendar-check me-2"></i>
                Your Training Schedule
              </h4>
              <div className="summary-grid">
                <div className="summary-card">
                  <div className="summary-icon">
                    <i className="bi bi-calendar-week"></i>
                  </div>
                  <div className="summary-info">
                    <span className="summary-value">{formData.workoutDays.length}</span>
                    <span className="summary-label">days per week</span>
                  </div>
                </div>
                <div className="summary-card">
                  <div className="summary-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div className="summary-info">
                    <span className="summary-value">{formData.sessionDuration}</span>
                    <span className="summary-label">minutes per session</span>
                  </div>
                </div>
                <div className="summary-card">
                  <div className="summary-icon">
                    <i className="bi bi-stopwatch"></i>
                  </div>
                  <div className="summary-info">
                    <span className="summary-value">{calculateWeeklyTime()}</span>
                    <span className="summary-label">total per week</span>
                  </div>
                </div>
                {formData.preferredTime && (
                  <div className="summary-card">
                    <div className="summary-icon">
                      <i className={`bi ${preferredTimes.find(t => t.value === formData.preferredTime)?.icon}`}></i>
                    </div>
                    <div className="summary-info">
                      <span className="summary-value">{preferredTimes.find(t => t.value === formData.preferredTime)?.label}</span>
                      <span className="summary-label">preferred time</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="weekly-calendar">
                <h5>Your Weekly Plan</h5>
                <div className="calendar-week">
                  {weekDays.map(day => (
                    <div
                      key={day.value}
                      className={`calendar-day ${formData.workoutDays.includes(day.value) ? 'workout-day' : 'rest-day'}`}
                    >
                      <div className="calendar-day-label">{day.label}</div>
                      <div className="calendar-day-status">
                        {formData.workoutDays.includes(day.value) ? (
                          <>
                            <i className="bi bi-lightning-charge"></i>
                            <span>Workout</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-moon"></i>
                            <span>Rest</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conseils pour la planification */}
        <div className="form-section">
          <div className="tips-section">
            <div className="tips-card">
              <div className="tips-header">
                <i className="bi bi-lightbulb"></i>
                <h4>Scheduling Tips for Success</h4>
              </div>
              <div className="tips-grid">
                <div className="tip-item">
                  <i className="bi bi-check-circle"></i>
                  <div className="tip-content">
                    <strong>Consistency beats intensity:</strong>
                    <p>3 consistent workouts are better than 1 intense session</p>
                  </div>
                </div>
                <div className="tip-item">
                  <i className="bi bi-check-circle"></i>
                  <div className="tip-content">
                    <strong>Plan for rest days:</strong>
                    <p>Recovery is when your body actually gets stronger</p>
                  </div>
                </div>
                <div className="tip-item">
                  <i className="bi bi-check-circle"></i>
                  <div className="tip-content">
                    <strong>Be realistic:</strong>
                    <p>Start with a schedule you can maintain long-term</p>
                  </div>
                </div>
                <div className="tip-item">
                  <i className="bi bi-check-circle"></i>
                  <div className="tip-content">
                    <strong>Build a routine:</strong>
                    <p>Same days and times help create lasting habits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;