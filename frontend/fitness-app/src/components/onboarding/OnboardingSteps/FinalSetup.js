// src/components/onboarding/OnboardingSteps/FinalSetup.js
import React, { useState, useEffect } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const FinalSetup = () => {
  const { onboardingData, updateStepData } = useOnboarding();
  const [formData, setFormData] = useState({
    units: 'metric',
    notifications: {
      workout: true,
      progress: true,
      challenges: true,
      social: true
    },
    privacy: {
      profileVisibility: 'friends',
      shareProgress: true,
      allowChallenges: true
    },
    ...onboardingData.preferences
  });

  // Mettre à jour les données du contexte
  useEffect(() => {
    updateStepData('preferences', formData);
  }, [formData, updateStepData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const unitOptions = [
    {
      value: 'metric',
      label: 'Metric',
      description: 'Kilometers, kilograms, centimeters',
      examples: ['Weight: kg', 'Distance: km', 'Height: cm'],
      icon: 'bi-globe'
    },
    {
      value: 'imperial',
      label: 'Imperial',
      description: 'Miles, pounds, feet and inches',
      examples: ['Weight: lbs', 'Distance: miles', 'Height: ft/in'],
      icon: 'bi-globe-americas'
    }
  ];

  const notificationTypes = [
    {
      key: 'workout',
      title: 'Workout Reminders',
      description: 'Get notified when it\'s time to exercise',
      icon: 'bi-bell',
      examples: ['Workout scheduled in 30 minutes', 'Don\'t forget your evening session']
    },
    {
      key: 'progress',
      title: 'Progress Updates',
      description: 'Weekly summaries and achievement notifications',
      icon: 'bi-graph-up',
      examples: ['You hit a new personal record!', 'Weekly progress summary']
    },
    {
      key: 'challenges',
      title: 'Challenges & Goals',
      description: 'New challenges and goal deadline reminders',
      icon: 'bi-trophy',
      examples: ['New monthly challenge available', 'Goal deadline approaching']
    },
    {
      key: 'social',
      title: 'Social Activity',
      description: 'Friend requests, likes, and community updates',
      icon: 'bi-people',
      examples: ['John liked your workout', 'New friend request']
    }
  ];

  const privacyOptions = [
    {
      key: 'profileVisibility',
      title: 'Profile Visibility',
      description: 'Who can see your profile information',
      options: [
        { value: 'public', label: 'Public', description: 'Anyone can see your profile' },
        { value: 'friends', label: 'Friends Only', description: 'Only your friends can see your profile' },
        { value: 'private', label: 'Private', description: 'Only you can see your profile' }
      ]
    },
    {
      key: 'shareProgress',
      title: 'Share Progress',
      description: 'Allow others to see your workout progress and achievements',
      type: 'toggle'
    },
    {
      key: 'allowChallenges',
      title: 'Challenge Invites',
      description: 'Allow friends to invite you to fitness challenges',
      type: 'toggle'
    }
  ];

  return (
    <div className="final-setup-step">
      <div className="step-form">
        {/* Unités de mesure */}
        <div className="form-section">
          <h3>Measurement Units</h3>
          <p className="section-description">
            Choose your preferred units for tracking progress and displaying metrics.
          </p>
          
          <div className="units-grid">
            {unitOptions.map(unit => (
              <div
                key={unit.value}
                className={`unit-card ${formData.units === unit.value ? 'selected' : ''}`}
                onClick={() => handleChange('units', unit.value)}
              >
                <div className="unit-header">
                  <div className="unit-icon">
                    <i className={`bi ${unit.icon}`}></i>
                  </div>
                  <div className="unit-info">
                    <h4>{unit.label}</h4>
                    <p>{unit.description}</p>
                  </div>
                </div>
                <div className="unit-examples">
                  <ul>
                    {unit.examples.map((example, index) => (
                      <li key={index}>
                        <i className="bi bi-check2"></i>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="unit-radio">
                  <input
                    type="radio"
                    name="units"
                    value={unit.value}
                    checked={formData.units === unit.value}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="form-section">
          <h3>Notification Preferences</h3>
          <p className="section-description">
            Stay motivated with personalized reminders and updates. You can change these anytime.
          </p>
          
          <div className="notifications-list">
            {notificationTypes.map(notification => (
              <div key={notification.key} className="notification-card">
                <div className="notification-main">
                  <div className="notification-icon">
                    <i className={`bi ${notification.icon}`}></i>
                  </div>
                  <div className="notification-content">
                    <h4>{notification.title}</h4>
                    <p>{notification.description}</p>
                    <div className="notification-examples">
                      {notification.examples.map((example, index) => (
                        <span key={index} className="example-tag">
                          "{example}"
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="notification-toggle">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications[notification.key]}
                        onChange={(e) => handleNestedChange('notifications', notification.key, e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paramètres de confidentialité */}
        <div className="form-section">
          <h3>Privacy Settings</h3>
          <p className="section-description">
            Control what others can see and how you interact with the community.
          </p>
          
          <div className="privacy-settings">
            {privacyOptions.map(setting => (
              <div key={setting.key} className="privacy-card">
                <div className="privacy-header">
                  <h4>{setting.title}</h4>
                  <p>{setting.description}</p>
                </div>
                
                {setting.options ? (
                  // Options de sélection (radio)
                  <div className="privacy-options">
                    {setting.options.map(option => (
                      <div
                        key={option.value}
                        className={`privacy-option ${formData.privacy[setting.key] === option.value ? 'selected' : ''}`}
                        onClick={() => handleNestedChange('privacy', setting.key, option.value)}
                      >
                        <div className="option-main">
                          <div className="option-radio">
                            <input
                              type="radio"
                              name={setting.key}
                              value={option.value}
                              checked={formData.privacy[setting.key] === option.value}
                              onChange={() => {}}
                            />
                          </div>
                          <div className="option-content">
                            <strong>{option.label}</strong>
                            <p>{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Toggle switch
                  <div className="privacy-toggle">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.privacy[setting.key]}
                        onChange={(e) => handleNestedChange('privacy', setting.key, e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Résumé des préférences */}
        <div className="form-section">
          <div className="preferences-summary">
            <h4>
              <i className="bi bi-gear me-2"></i>
              Your Preferences Summary
            </h4>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-label">
                  <i className="bi bi-rulers"></i>
                  Units
                </div>
                <div className="summary-value">
                  {unitOptions.find(u => u.value === formData.units)?.label}
                </div>
              </div>
              
              <div className="summary-item">
                <div className="summary-label">
                  <i className="bi bi-bell"></i>
                  Notifications
                </div>
                <div className="summary-value">
                  {Object.values(formData.notifications).filter(Boolean).length} of {Object.keys(formData.notifications).length} enabled
                </div>
              </div>
              
              <div className="summary-item">
                <div className="summary-label">
                  <i className="bi bi-shield-check"></i>
                  Privacy
                </div>
                <div className="summary-value">
                  {formData.privacy.profileVisibility.charAt(0).toUpperCase() + formData.privacy.profileVisibility.slice(1)} profile
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aperçu de l'expérience */}
        <div className="form-section">
          <div className="experience-preview">
            <h4>
              <i className="bi bi-eye me-2"></i>
              What to Expect Next
            </h4>
            <div className="preview-grid">
              <div className="preview-card">
                <div className="preview-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <div className="preview-content">
                  <h5>Personalized Dashboard</h5>
                  <p>View your progress, upcoming workouts, and achievements all in one place</p>
                </div>
              </div>
              
              <div className="preview-card">
                <div className="preview-icon">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <div className="preview-content">
                  <h5>Custom Workout Plans</h5>
                  <p>Get workout routines designed specifically for your goals and schedule</p>
                </div>
              </div>
              
              <div className="preview-card">
                <div className="preview-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="preview-content">
                  <h5>Progress Tracking</h5>
                  <p>See detailed analytics of your fitness journey with charts and insights</p>
                </div>
              </div>
              
              <div className="preview-card">
                <div className="preview-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="preview-content">
                  <h5>Community Features</h5>
                  <p>Connect with others, join challenges, and share your achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message d'encouragement */}
        <div className="form-section">
          <div className="encouragement-card">
            <div className="encouragement-content">
              <div className="encouragement-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <div className="encouragement-text">
                <h4>You're almost ready to start!</h4>
                <p>
                  Great job completing your profile setup. You've taken the most important step 
                  toward achieving your fitness goals. Let's make it happen!
                </p>
                <div className="encouragement-stats">
                  <div className="stat-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Profile Complete</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-target"></i>
                    <span>Goals Defined</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-calendar-check"></i>
                    <span>Schedule Set</span>
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

export default FinalSetup;