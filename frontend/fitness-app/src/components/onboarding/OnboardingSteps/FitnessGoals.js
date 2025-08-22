// src/components/onboarding/OnboardingSteps/FitnessGoals.js
import React, { useState, useEffect } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const FitnessGoals = () => {
  const { onboardingData, updateStepData } = useOnboarding();
  const [formData, setFormData] = useState({
    primaryGoal: '',
    targetWeight: '',
    targetDate: '',
    experience: '',
    preferredWorkoutTypes: [],
    ...onboardingData.fitnessGoals
  });

  // Mettre à jour les données du contexte
  useEffect(() => {
    updateStepData('fitnessGoals', formData);
  }, [formData, updateStepData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWorkoutTypeToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      preferredWorkoutTypes: prev.preferredWorkoutTypes.includes(type)
        ? prev.preferredWorkoutTypes.filter(t => t !== type)
        : [...prev.preferredWorkoutTypes, type]
    }));
  };

  const fitnessGoals = [
    {
      value: 'weight_loss',
      title: 'Weight Loss',
      description: 'Burn fat and lose weight',
      icon: 'bi-arrow-down-circle',
      color: '#ef4444',
      benefits: ['Burn calories', 'Reduce body fat', 'Improve health markers']
    },
    {
      value: 'muscle_gain',
      title: 'Muscle Gain',
      description: 'Build lean muscle mass',
      icon: 'bi-arrow-up-circle',
      color: '#10b981',
      benefits: ['Increase strength', 'Build muscle', 'Boost metabolism']
    },
    {
      value: 'endurance',
      title: 'Endurance',
      description: 'Improve cardiovascular fitness',
      icon: 'bi-heart-pulse',
      color: '#3b82f6',
      benefits: ['Better stamina', 'Heart health', 'Energy boost']
    },
    {
      value: 'strength',
      title: 'Strength',
      description: 'Get stronger and more powerful',
      icon: 'bi-lightning-charge',
      color: '#f59e0b',
      benefits: ['Increase power', 'Functional strength', 'Bone density']
    },
    {
      value: 'general_fitness',
      title: 'General Fitness',
      description: 'Overall health and wellness',
      icon: 'bi-heart',
      color: '#8b5cf6',
      benefits: ['Overall health', 'Balanced fitness', 'Lifestyle improvement']
    },
    {
      value: 'flexibility',
      title: 'Flexibility',
      description: 'Improve mobility and flexibility',
      icon: 'bi-person-arms-up',
      color: '#06b6d4',
      benefits: ['Better mobility', 'Injury prevention', 'Stress relief']
    }
  ];

  const experienceLevels = [
    {
      value: 'beginner',
      title: 'Beginner',
      description: 'New to fitness or returning after a long break',
      icon: 'bi-1-circle',
      timeline: '0-6 months experience',
      workouts: '2-3 times per week'
    },
    {
      value: 'intermediate',
      title: 'Intermediate',
      description: 'Regular exercise routine for several months',
      icon: 'bi-2-circle',
      timeline: '6 months - 2 years experience',
      workouts: '3-4 times per week'
    },
    {
      value: 'advanced',
      title: 'Advanced',
      description: 'Consistent training with good technique',
      icon: 'bi-3-circle',
      timeline: '2+ years experience',
      workouts: '4-6 times per week'
    }
  ];

  const workoutTypes = [
    {
      value: 'cardio',
      title: 'Cardio',
      description: 'Running, cycling, swimming',
      icon: 'bi-heart-pulse',
      color: '#ef4444'
    },
    {
      value: 'strength',
      title: 'Strength Training',
      description: 'Weight lifting, resistance',
      icon: 'bi-lightning-charge',
      color: '#f59e0b'
    },
    {
      value: 'hiit',
      title: 'HIIT',
      description: 'High-intensity intervals',
      icon: 'bi-stopwatch',
      color: '#10b981'
    },
    {
      value: 'yoga',
      title: 'Yoga',
      description: 'Flexibility and mindfulness',
      icon: 'bi-person-arms-up',
      color: '#8b5cf6'
    },
    {
      value: 'pilates',
      title: 'Pilates',
      description: 'Core strength and stability',
      icon: 'bi-circle',
      color: '#06b6d4'
    },
    {
      value: 'sports',
      title: 'Sports',
      description: 'Team sports and activities',
      icon: 'bi-trophy',
      color: '#3b82f6'
    }
  ];

  // Calculer la date minimale (aujourd'hui + 4 semaines)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 28);
  const minDateString = minDate.toISOString().split('T')[0];

  // Calculer la date maximale (1 an)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="fitness-goals-step">
      <div className="step-form">
        {/* Objectif principal */}
        <div className="form-section">
          <h3>What's your primary fitness goal?</h3>
          <p className="section-description">
            Choose your main focus. You can always adjust this later as you progress.
          </p>
          
          <div className="goals-grid">
            {fitnessGoals.map(goal => (
              <div
                key={goal.value}
                className={`goal-card ${formData.primaryGoal === goal.value ? 'selected' : ''}`}
                onClick={() => handleChange('primaryGoal', goal.value)}
                style={{ '--goal-color': goal.color }}
              >
                <div className="goal-icon">
                  <i className={`bi ${goal.icon}`} style={{ color: goal.color }}></i>
                </div>
                <div className="goal-content">
                  <h4>{goal.title}</h4>
                  <p>{goal.description}</p>
                  <ul className="goal-benefits">
                    {goal.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="bi bi-check2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="goal-radio">
                  <input
                    type="radio"
                    name="primaryGoal"
                    value={goal.value}
                    checked={formData.primaryGoal === goal.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objectifs spécifiques (si weight_loss ou muscle_gain) */}
        {(formData.primaryGoal === 'weight_loss' || formData.primaryGoal === 'muscle_gain') && (
          <div className="form-section">
            <h3>Set your target</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-bullseye me-2"></i>
                  Target Weight
                  {formData.primaryGoal === 'weight_loss' && (
                    <span className="text-muted"> (optional)</span>
                  )}
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control fitness-input"
                    value={formData.targetWeight}
                    onChange={(e) => handleChange('targetWeight', parseFloat(e.target.value) || '')}
                    placeholder={formData.primaryGoal === 'weight_loss' ? 'Goal weight' : 'Target weight'}
                    step="0.1"
                  />
                  <span className="input-group-text">kg</span>
                </div>
              </div>
              
              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-calendar-event me-2"></i>
                  Target Date
                  <span className="text-muted"> (optional)</span>
                </label>
                <input
                  type="date"
                  className="form-control fitness-input"
                  value={formData.targetDate}
                  onChange={(e) => handleChange('targetDate', e.target.value)}
                  min={minDateString}
                  max={maxDateString}
                />
                <div className="form-text">
                  Recommended: 4-52 weeks for sustainable results
                </div>
              </div>
            </div>

            {/* Calculateur de timeline */}
            {formData.targetWeight && onboardingData.personalInfo.weight && (
              <div className="timeline-calculator">
                <h4>
                  <i className="bi bi-calculator me-2"></i>
                  Estimated Timeline
                </h4>
                {(() => {
                  const currentWeight = onboardingData.personalInfo.weight;
                  const targetWeight = formData.targetWeight;
                  const weightDiff = Math.abs(currentWeight - targetWeight);
                  
                  let weeklyRate, timelineWeeks, recommendation;
                  
                  if (formData.primaryGoal === 'weight_loss') {
                    weeklyRate = 0.5; // 0.5kg per week
                    timelineWeeks = Math.ceil(weightDiff / weeklyRate);
                    recommendation = 'Safe weight loss rate: 0.5-1kg per week';
                  } else {
                    weeklyRate = 0.25; // 0.25kg muscle per week
                    timelineWeeks = Math.ceil(weightDiff / weeklyRate);
                    recommendation = 'Realistic muscle gain: 0.25-0.5kg per week';
                  }
                  
                  return (
                    <div className="timeline-result">
                      <div className="timeline-info">
                        <div className="timeline-stat">
                          <span className="stat-value">{timelineWeeks}</span>
                          <span className="stat-label">weeks</span>
                        </div>
                        <div className="timeline-stat">
                          <span className="stat-value">{weightDiff.toFixed(1)}</span>
                          <span className="stat-label">kg to {formData.primaryGoal === 'weight_loss' ? 'lose' : 'gain'}</span>
                        </div>
                      </div>
                      <p className="timeline-note">
                        <i className="bi bi-info-circle me-1"></i>
                        {recommendation}
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* Niveau d'expérience */}
        <div className="form-section">
          <h3>What's your fitness experience?</h3>
          <p className="section-description">
            This helps us recommend appropriate workout intensity and complexity.
          </p>
          
          <div className="experience-grid">
            {experienceLevels.map(level => (
              <div
                key={level.value}
                className={`experience-card ${formData.experience === level.value ? 'selected' : ''}`}
                onClick={() => handleChange('experience', level.value)}
              >
                <div className="experience-icon">
                  <i className={`bi ${level.icon}`}></i>
                </div>
                <div className="experience-content">
                  <h4>{level.title}</h4>
                  <p>{level.description}</p>
                  <div className="experience-details">
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>{level.timeline}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-calendar-week"></i>
                      <span>{level.workouts}</span>
                    </div>
                  </div>
                </div>
                <div className="experience-radio">
                  <input
                    type="radio"
                    name="experience"
                    value={level.value}
                    checked={formData.experience === level.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types d'entraînement préférés */}
        <div className="form-section">
          <h3>What types of workouts do you enjoy?</h3>
          <p className="section-description">
            Select all that interest you. We'll use this to personalize your workout plans.
          </p>
          
          <div className="workout-types-grid">
            {workoutTypes.map(type => (
              <div
                key={type.value}
                className={`workout-type-card ${formData.preferredWorkoutTypes.includes(type.value) ? 'selected' : ''}`}
                onClick={() => handleWorkoutTypeToggle(type.value)}
                style={{ '--type-color': type.color }}
              >
                <div className="type-icon">
                  <i className={`bi ${type.icon}`} style={{ color: type.color }}></i>
                </div>
                <div className="type-content">
                  <h4>{type.title}</h4>
                  <p>{type.description}</p>
                </div>
                <div className="type-checkbox">
                  <input
                    type="checkbox"
                    value={type.value}
                    checked={formData.preferredWorkoutTypes.includes(type.value)}
                    onChange={() => {}}
                  />
                  <i className="bi bi-check-lg"></i>
                </div>
              </div>
            ))}
          </div>
          
          <div className="selection-counter">
            <i className="bi bi-check-circle me-2"></i>
            {formData.preferredWorkoutTypes.length} workout type{formData.preferredWorkoutTypes.length !== 1 ? 's' : ''} selected
          </div>
        </div>

        {/* Motivation et conseils */}
        <div className="form-section">
          <div className="motivation-section">
            <div className="motivation-card">
              <div className="motivation-icon">
                <i className="bi bi-lightbulb-fill"></i>
              </div>
              <div className="motivation-content">
                <h4>Goal Setting Tips</h4>
                <ul className="tips-list">
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <strong>Be specific:</strong> Clear goals are easier to achieve
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <strong>Start realistic:</strong> Build momentum with achievable targets
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <strong>Track progress:</strong> Small improvements add up over time
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <strong>Stay flexible:</strong> Adjust goals as you learn and grow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoals;