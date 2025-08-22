// src/components/onboarding/OnboardingSteps/OnboardingSummary.js
import React, { useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const OnboardingSummary = ({ onComplete }) => {
  const { onboardingData, loading } = useOnboarding();
  const [isAnimated, setIsAnimated] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsAnimated(true), 500);
  }, []);

  const { userInfo, personalInfo, fitnessGoals, trainingSchedule, preferences } = onboardingData;

  // Calculer quelques statistiques
  const calculateBMI = () => {
    if (personalInfo.height && personalInfo.weight) {
      const height = personalInfo.height / 100; // Convert cm to meters
      const bmi = personalInfo.weight / (height * height);
      return bmi.toFixed(1);
    }
    return null;
  };

  const getGoalEmoji = (goal) => {
    const emojiMap = {
      'weight_loss': '🔥',
      'muscle_gain': '💪',
      'endurance': '🏃',
      'strength': '🏋️',
      'general_fitness': '⚡',
      'flexibility': '🧘'
    };
    return emojiMap[goal] || '🎯';
  };

  const getExperienceLevel = (level) => {
    const levels = {
      'beginner': { label: 'Beginner', color: '#10b981', icon: '🌱' },
      'intermediate': { label: 'Intermediate', color: '#f59e0b', icon: '🔥' },
      'advanced': { label: 'Advanced', color: '#ef4444', icon: '⚡' }
    };
    return levels[level] || levels['beginner'];
  };

  return (
    <div className="onboarding-summary">
      <div className="summary-container">
        {/* Header de félicitations */}
        <div className={`congratulations-section ${isAnimated ? 'animate-slide-up' : ''}`}>
          <div className="congrats-icon">
            <i className="bi bi-trophy-fill"></i>
          </div>
          <h2>Congratulations, {userInfo.firstName}!</h2>
          <p className="congrats-subtitle">
            Your personalized fitness profile is ready. Let's review what we've set up for you.
          </p>
        </div>

        {/* Profil personnel */}
        <div className={`summary-section ${isAnimated ? 'animate-slide-up delay-1' : ''}`}>
          <div className="section-header">
            <i className="bi bi-person-badge"></i>
            <h3>Your Profile</h3>
          </div>
          <div className="profile-cards">
            <div className="profile-card">
              <div className="profile-stat">
                <span className="stat-value">{personalInfo.age}</span>
                <span className="stat-label">years old</span>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-stat">
                <span className="stat-value">{personalInfo.height}</span>
                <span className="stat-label">cm</span>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-stat">
                <span className="stat-value">{personalInfo.weight}</span>
                <span className="stat-label">kg</span>
              </div>
            </div>
            {calculateBMI() && (
              <div className="profile-card">
                <div className="profile-stat">
                  <span className="stat-value">{calculateBMI()}</span>
                  <span className="stat-label">BMI</span>
                </div>
              </div>
            )}
          </div>
          <div className="profile-details">
            <div className="detail-item">
              <i className="bi bi-person"></i>
              <span>{personalInfo.gender?.charAt(0).toUpperCase() + personalInfo.gender?.slice(1)}</span>
            </div>
            <div className="detail-item">
              <i className="bi bi-activity"></i>
              <span>{personalInfo.activityLevel?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
          </div>
        </div>

        {/* Objectifs fitness */}
        <div className={`summary-section ${isAnimated ? 'animate-slide-up delay-2' : ''}`}>
          <div className="section-header">
            <i className="bi bi-bullseye"></i>
            <h3>Your Fitness Goals</h3>
          </div>
          <div className="goals-summary">
            <div className="primary-goal">
              <div className="goal-icon">
                <span className="goal-emoji">{getGoalEmoji(fitnessGoals.primaryGoal)}</span>
              </div>
              <div className="goal-content">
                <h4>{fitnessGoals.primaryGoal?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                {fitnessGoals.targetWeight && (
                  <p>Target weight: {fitnessGoals.targetWeight} kg</p>
                )}
                {fitnessGoals.targetDate && (
                  <p>Target date: {new Date(fitnessGoals.targetDate).toLocaleDateString()}</p>
                )}
              </div>
            </div>
            
            <div className="experience-level">
              <div className="level-badge" style={{ backgroundColor: getExperienceLevel(fitnessGoals.experience).color }}>
                <span className="level-emoji">{getExperienceLevel(fitnessGoals.experience).icon}</span>
                <span className="level-text">{getExperienceLevel(fitnessGoals.experience).label}</span>
              </div>
            </div>

            {fitnessGoals.preferredWorkoutTypes?.length > 0 && (
              <div className="workout-preferences">
                <h5>Preferred Workouts:</h5>
                <div className="workout-tags">
                  {fitnessGoals.preferredWorkoutTypes.map(type => (
                    <span key={type} className="workout-tag">
                      {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Programme d'entraînement */}
        <div className={`summary-section ${isAnimated ? 'animate-slide-up delay-3' : ''}`}>
          <div className="section-header">
            <i className="bi bi-calendar-week"></i>
            <h3>Your Training Schedule</h3>
          </div>
          <div className="schedule-summary">
            <div className="schedule-stats">
              <div className="schedule-stat">
                <div className="stat-icon">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{trainingSchedule.workoutDays?.length || 0}</span>
                  <span className="stat-text">days per week</span>
                </div>
              </div>
              <div className="schedule-stat">
                <div className="stat-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{trainingSchedule.sessionDuration || 0}</span>
                  <span className="stat-text">minutes per session</span>
                </div>
              </div>
              <div className="schedule-stat">
                <div className="stat-icon">
                  <i className="bi bi-stopwatch"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">
                    {trainingSchedule.workoutDays?.length && trainingSchedule.sessionDuration ? 
                      `${Math.floor((trainingSchedule.workoutDays.length * trainingSchedule.sessionDuration) / 60)}h ${(trainingSchedule.workoutDays.length * trainingSchedule.sessionDuration) % 60}m` : 
                      '0h 0m'}
                  </span>
                  <span className="stat-text">total per week</span>
                </div>
              </div>
            </div>

            {trainingSchedule.workoutDays?.length > 0 && (
              <div className="weekly-overview">
                <h5>Your Workout Days:</h5>
                <div className="days-list">
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                    <div
                      key={day}
                      className={`day-indicator ${trainingSchedule.workoutDays.includes(day) ? 'workout-day' : 'rest-day'}`}
                    >
                      <span className="day-name">{day.charAt(0).toUpperCase()}</span>
                      {trainingSchedule.workoutDays.includes(day) ? (
                        <i className="bi bi-lightning-charge"></i>
                      ) : (
                        <i className="bi bi-moon"></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="schedule-details">
              {trainingSchedule.preferredTime && (
                <div className="detail-item">
                  <i className="bi bi-clock"></i>
                  <span>Preferred time: {trainingSchedule.preferredTime.charAt(0).toUpperCase() + trainingSchedule.preferredTime.slice(1)}</span>
                </div>
              )}
              {trainingSchedule.workoutLocation && (
                <div className="detail-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>Location: {trainingSchedule.workoutLocation.charAt(0).toUpperCase() + trainingSchedule.workoutLocation.slice(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Préférences */}
        <div className={`summary-section ${isAnimated ? 'animate-slide-up delay-4' : ''}`}>
          <div className="section-header">
            <i className="bi bi-gear"></i>
            <h3>Your Preferences</h3>
          </div>
          <div className="preferences-grid">
            <div className="preference-item">
              <div className="preference-icon">
                <i className="bi bi-rulers"></i>
              </div>
              <div className="preference-content">
                <h5>Units</h5>
                <p>{preferences.units === 'metric' ? 'Metric (kg, cm, km)' : 'Imperial (lbs, ft/in, miles)'}</p>
              </div>
            </div>
            <div className="preference-item">
              <div className="preference-icon">
                <i className="bi bi-bell"></i>
              </div>
              <div className="preference-content">
                <h5>Notifications</h5>
                <p>{Object.values(preferences.notifications || {}).filter(Boolean).length} types enabled</p>
              </div>
            </div>
            <div className="preference-item">
              <div className="preference-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="preference-content">
                <h5>Privacy</h5>
                <p>{preferences.privacy?.profileVisibility || 'Friends'} profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prochaines étapes */}
        <div className={`summary-section ${isAnimated ? 'animate-slide-up delay-5' : ''}`}>
          <div className="section-header">
            <i className="bi bi-rocket-takeoff"></i>
            <h3>What Happens Next?</h3>
          </div>
          <div className="next-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h5>Personalized Dashboard</h5>
                <p>Access your custom dashboard with workout plans tailored to your goals</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h5>First Workout Plan</h5>
                <p>Get your first week of workouts designed specifically for your schedule</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h5>Progress Tracking</h5>
                <p>Start logging workouts and watch your progress unfold</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h5>Community Features</h5>
                <p>Connect with other fitness enthusiasts and join challenges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation finale */}
        <div className={`summary-section motivation-final ${isAnimated ? 'animate-slide-up delay-6' : ''}`}>
          <div className="motivation-card">
            <div className="motivation-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>
            <div className="motivation-content">
              <h4>Ready to Transform Your Life?</h4>
              <p>
                You've completed all the setup steps. Now it's time to turn your goals into reality. 
                Remember, every expert was once a beginner, and every journey starts with a single step.
              </p>
              <div className="motivation-stats">
                <div className="stat-highlight">
                  <span className="highlight-number">✨</span>
                  <span className="highlight-text">Your personalized plan is ready</span>
                </div>
                <div className="stat-highlight">
                  <span className="highlight-number">🎯</span>
                  <span className="highlight-text">Goals clearly defined</span>
                </div>
                <div className="stat-highlight">
                  <span className="highlight-number">📅</span>
                  <span className="highlight-text">Schedule perfectly planned</span>
                </div>
                <div className="stat-highlight">
                  <span className="highlight-number">💪</span>
                  <span className="highlight-text">Success tools in place</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de finalisation */}
        <div className={`completion-section ${isAnimated ? 'animate-slide-up delay-7' : ''}`}>
          <div className="completion-content">
            <h3>All Set! Let's Begin Your Journey</h3>
            <p>Click below to complete your setup and access your personalized fitness experience.</p>
            
            <button 
              onClick={onComplete}
              className="btn-complete-onboarding"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner-border spinner-border-sm me-2"></div>
                  Setting up your account...
                </>
              ) : (
                <>
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Complete Setup & Start Training
                </>
              )}
            </button>
            
            <div className="completion-note">
              <i className="bi bi-shield-check me-2"></i>
              Your data is secure and you can modify these settings anytime in your profile.
            </div>
          </div>
        </div>

        {/* Témoignages de motivation */}
        <div className={`testimonials-section ${isAnimated ? 'animate-fade-in delay-8' : ''}`}>
          <h4>Join thousands of success stories</h4>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Lost 15kg in 4 months following my personalized plan!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👩</div>
                  <div className="author-info">
                    <strong>Sarah M.</strong>
                    <span>Weight Loss Goal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Finally found a routine that fits my busy schedule!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👨</div>
                  <div className="author-info">
                    <strong>Mike R.</strong>
                    <span>Strength Training</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The community support kept me motivated every day!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👩</div>
                  <div className="author-info">
                    <strong>Emma L.</strong>
                    <span>General Fitness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer avec support */}
        <div className="summary-footer">
          <div className="support-info">
            <div className="support-item">
              <i className="bi bi-question-circle"></i>
              <span>Need help? Check our <a href="/help">Help Center</a></span>
            </div>
            <div className="support-item">
              <i className="bi bi-chat-dots"></i>
              <span>Have questions? <a href="/contact">Contact Support</a></span>
            </div>
            <div className="support-item">
              <i className="bi bi-gear"></i>
              <span>Settings can be changed anytime in your <a href="/profile">Profile</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSummary;