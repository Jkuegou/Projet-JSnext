import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // ← Utilisez AuthContext
import { useOnboarding } from '../../../context/OnboardingContext';
import LanguageSwitcher from '../../common/LanguageSwitcher/LanguageSwitcher';

// Hook pour les animations
const useFitnessAnimations = () => {
  useEffect(() => {
    // Animation des compteurs de progression
    const animateProgress = () => {
      const progressBars = document.querySelectorAll('.progress-fill');
      
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.getAttribute('data-width');
        }, index * 200);
      });
    };

    // Effet de parallaxe pour les particules
    const handleParallax = () => {
      if (window.innerWidth > 768) {
        const handleMouseMove = (e) => {
          const particles = document.querySelectorAll('.particle');
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          
          particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.4;
            const xPos = (x - 0.5) * speed * 15;
            const yPos = (y - 0.5) * speed * 15;
            
            particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
          });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    };

    const cleanup = handleParallax();
    setTimeout(animateProgress, 1000);
    
    return cleanup;
  }, []);
};

const Register = () => {
  const { t } = useTranslation();
  const { register: authRegister } = useAuth(); // ← Utilisez le contexte Auth
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const navigate = useNavigate();
  const { initializeOnboarding, setUserInfo } = useOnboarding();

  // Utiliser les animations
  useFitnessAnimations();

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculer la force du mot de passe
  useEffect(() => {
    const calculateStrength = (password) => {
      let score = 0;
      if (password.length >= 8) score += 25;
      if (/[a-z]/.test(password)) score += 25;
      if (/[A-Z]/.test(password)) score += 25;
      if (/[0-9]/.test(password)) score += 25;
      return score;
    };
    
    setPasswordStrength(calculateStrength(formData.password));
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ✅ FONCTION handleSubmit CORRIGÉE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    console.log('📋 Form data:', formData);
    
    // Validations côté client
    if (formData.password !== formData.confirmPassword) {
      console.log('❌ Password mismatch');
      setMessage({ type: 'error', text: t('JF.passwordMismatch') });
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      console.log('❌ Password too short');
      setMessage({ type: 'error', text: t('JF.passwordTooShort') });
      setLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      console.log('❌ Terms not accepted');
      setMessage({ type: 'error', text: t('JF.mustAcceptTerms') });
      setLoading(false);
      return;
    }

    console.log('✅ All validations passed');

    try {
      // ✅ Utilisez le contexte AuthContext
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName
      };
      
      console.log('🚀 Calling authRegister with:', userData);
      const result = await authRegister(userData);
      
      console.log('📝 Registration result:', result);
      
      if (result.success) {
        console.log('✅ Registration successful');
        
        // Initialiser le contexte d'onboarding avec les informations utilisateur
        console.log('🔄 Initializing onboarding...');
        initializeOnboarding();
        
        const userInfo = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          fullName: `${formData.firstName} ${formData.lastName}`,
          userId: result.user?.id || result.user?.userId
        };
        
        setUserInfo(userInfo);
        console.log('✅ User info set:', userInfo);
        
        setMessage({ 
          type: 'success', 
          text: t('JF.registrationSuccess')
        });
        
        console.log('➡️ Starting redirect timer...');
        
        // Redirection vers l'onboarding après un délai pour montrer le message de succès
        setTimeout(() => {
          console.log('🎯 Navigating to /onboarding...');
          navigate('/onboarding', { 
            state: { 
              fromRegistration: true,
              userInfo: userInfo
            }
          });
        }, 1500);
      } else {
        console.log('❌ Registration failed:', result.message);
        setMessage({ 
          type: 'error', 
          text: result.message || t('JF.registrationError')
        });
      }
    } catch (error) {
      console.error('❌ Registration error:', error);
      setMessage({ 
        type: 'error', 
        text: error.message || t('JF.registrationError')
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordStrengthInfo = () => {
    if (passwordStrength === 0) return { text: t('JF.enterPassword'), color: 'var(--fitness-gray)' };
    if (passwordStrength < 50) return { text: t('JF.weakPassword'), color: '#ef4444' };
    if (passwordStrength < 75) return { text: t('JF.mediumPassword'), color: '#f59e0b' };
    return { text: t('JF.strongPassword'), color: '#10b981' };
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="fitness-register-container">
      {/* Sélecteur de langue en position fixe */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <LanguageSwitcher variant="buttons" />
      </div>

      {/* Particules d'arrière-plan animées */}
      <div className="fitness-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <i className={`bi ${['bi-heart-pulse', 'bi-lightning-charge', 'bi-trophy', 'bi-star-fill'][i % 4]}`}></i>
          </div>
        ))}
      </div>

      <div className="container-fluid h-100">
        <div className="row h-100 g-0">
          {/* Panneau gauche - Onboarding Preview */}
          <div className="col-lg-6 col-md-5 fitness-onboarding-section">
            <div className="onboarding-content">
              <div className={`brand-header ${isVisible ? 'animate-slide-up' : ''}`}>
                <div className="brand-logo-fitness">
                  <div className="logo-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <div className="brand-text">
                    <h1>JuniorFitness</h1>
                    <span className="tagline">{t('JF.beginTransformation')}</span>
                  </div>
                </div>
              </div>

              <div className={`onboarding-main ${isVisible ? 'animate-slide-up delay-1' : ''}`}>
                <h2 className="onboarding-title">
                  {t('JF.joinRevolution')} <span className="gradient-text">{t('JF.fitnessRevolution')}</span>
                </h2>
                <p className="onboarding-description">
                  {t('JF.registerDescription')}
                </p>
              </div>

              {/* Étapes d'onboarding mises à jour */}
              <div className={`steps-journey ${isVisible ? 'animate-slide-up delay-2' : ''}`}>
                <div className="journey-step active">
                  <div className="step-icon">
                    <i className="bi bi-person-plus-fill"></i>
                  </div>
                  <div className="step-info">
                    <h4>{t('JF.step1Title')}</h4>
                    <p>{t('JF.step1Description')}</p>
                  </div>
                  <div className="step-progress">
                    <div className="progress-circle active">1</div>
                  </div>
                </div>
                
                <div className="journey-step next">
                  <div className="step-icon">
                    <i className="bi bi-person-badge"></i>
                  </div>
                  <div className="step-info">
                    <h4>{t('JF.step2Title')}</h4>
                    <p>{t('JF.step2Description')}</p>
                  </div>
                  <div className="step-progress">
                    <div className="progress-circle">2</div>
                  </div>
                </div>
                
                <div className="journey-step">
                  <div className="step-icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <div className="step-info">
                    <h4>{t('JF.step3Title')}</h4>
                    <p>{t('JF.step3Description')}</p>
                  </div>
                  <div className="step-progress">
                    <div className="progress-circle">3</div>
                  </div>
                </div>

                <div className="journey-step">
                  <div className="step-icon">
                    <i className="bi bi-calendar-week"></i>
                  </div>
                  <div className="step-info">
                    <h4>{t('JF.step4Title')}</h4>
                    <p>{t('JF.step4Description')}</p>
                  </div>
                  <div className="step-progress">
                    <div className="progress-circle">4</div>
                  </div>
                </div>
                
                <div className="journey-step">
                  <div className="step-icon">
                    <i className="bi bi-rocket-takeoff-fill"></i>
                  </div>
                  <div className="step-info">
                    <h4>{t('JF.step5Title')}</h4>
                    <p>{t('JF.step5Description')}</p>
                  </div>
                  <div className="step-progress">
                    <div className="progress-circle">5</div>
                  </div>
                </div>
              </div>

              {/* Avantages du processus d'onboarding */}
              <div className={`benefits-grid ${isVisible ? 'animate-slide-up delay-3' : ''}`}>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>{t('JF.benefitPersonalized')}</h5>
                    <p>{t('JF.benefitPersonalizedDesc')}</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-stopwatch"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>{t('JF.benefitScheduling')}</h5>
                    <p>{t('JF.benefitSchedulingDesc')}</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>{t('JF.benefitGoalTracking')}</h5>
                    <p>{t('JF.benefitGoalTrackingDesc')}</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>{t('JF.benefitCommunity')}</h5>
                    <p>{t('JF.benefitCommunityDesc')}</p>
                  </div>
                </div>
              </div>

              {/* Préview des prochaines étapes */}
              <div className={`next-steps-preview ${isVisible ? 'animate-fade-in delay-4' : ''}`}>
                <h4>{t('JF.whatsNext')}</h4>
                <div className="preview-steps">
                  <div className="preview-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{t('JF.nextStep1')}</span>
                  </div>
                  <div className="preview-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{t('JF.nextStep2')}</span>
                  </div>
                  <div className="preview-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{t('JF.nextStep3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau droit - Formulaire d'inscription */}
          <div className="col-lg-6 col-md-7 fitness-form-section">
            <div className={`register-form-container ${isVisible ? 'animate-slide-right' : ''}`}>
              <div className="form-header">
                <h3>{t('JF.createYourAccount')}</h3>
                <p>{t('JF.joinThousands')}</p>
                <div className="progress-indicator">
                  <div className="progress-step active">
                    <span>{t('JF.progressAccount')}</span>
                  </div>
                  <div className="progress-connector"></div>
                  <div className="progress-step">
                    <span>{t('JF.progressProfileSetup')}</span>
                  </div>
                </div>
              </div>

              {message.text && (
                <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'} fitness-alert`}>
                  <i className={`bi ${message.type === 'success' ? 'bi-check-circle' : message.type === 'info' ? 'bi-info-circle' : 'bi-exclamation-triangle'}`}></i>
                  {message.text}
                </div>
              )}

              {/* Login social */}
              <div className="social-login-fitness">
                <button type="button" className="social-btn-register google">
                  <i className="bi bi-google"></i>
                  <span>{t('JF.continueWithGoogle')}</span>
                </button>
                <button type="button" className="social-btn-register apple">
                  <i className="bi bi-apple"></i>
                  <span>{t('JF.continueWithApple')}</span>
                </button>
              </div>

              <div className="divider-fitness">
                <span>{t('JF.orCreateWithEmail')}</span>
              </div>

              <form onSubmit={handleSubmit} className="fitness-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control fitness-input"
                        id="floatingFirstName"
                        placeholder={t('JF.firstNamePlaceholder')}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                      <label htmlFor="floatingFirstName">
                        <i className="bi bi-person me-2"></i>{t('JF.firstName')}
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control fitness-input"
                        id="floatingLastName"
                        placeholder={t('JF.lastNamePlaceholder')}
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                      <label htmlFor="floatingLastName">
                        <i className="bi bi-person me-2"></i>{t('JF.lastName')}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control fitness-input"
                    id="floatingEmail"
                    placeholder={t('JF.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingEmail">
                    <i className="bi bi-envelope me-2"></i>{t('JF.emailAddress')}
                  </label>
                </div>
                
                <div className="form-floating mb-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="form-control fitness-input"
                    id="floatingPassword"
                    placeholder={t('JF.passwordPlaceholder')}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingPassword">
                    <i className="bi bi-lock me-2"></i>{t('JF.password')}
                  </label>
                  <button 
                    type="button" 
                    className="password-toggle-btn" 
                    onClick={togglePassword}
                    disabled={loading}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>

                {/* Indicateur de force du mot de passe */}
                {formData.password && (
                  <div className="password-strength-indicator">
                    <div className="strength-bar">
                      <div 
                        className={`strength-fill ${passwordStrength < 50 ? 'weak' : passwordStrength < 75 ? 'medium' : 'strong'}`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <span className="strength-text" style={{ color: strengthInfo.color }}>
                      {strengthInfo.text}
                    </span>
                  </div>
                )}

                <div className="form-floating mb-3">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    className="form-control fitness-input"
                    id="floatingConfirmPassword"
                    placeholder={t('JF.confirmPasswordPlaceholder')}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingConfirmPassword">
                    <i className="bi bi-lock-fill me-2"></i>{t('JF.confirmPassword')}
                  </label>
                  <button 
                    type="button" 
                    className="password-toggle-btn" 
                    onClick={toggleConfirmPassword}
                    disabled={loading}
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>

                {/* Validation du mot de passe confirmé */}
                {formData.confirmPassword && (
                  <div className="password-match-indicator">
                    {formData.password === formData.confirmPassword ? (
                      <span className="match-success">
                        <i className="bi bi-check-circle-fill"></i>
                        {t('JF.passwordsMatch')}
                      </span>
                    ) : (
                      <span className="match-error">
                        <i className="bi bi-x-circle-fill"></i>
                        {t('JF.passwordsDontMatch')}
                      </span>
                    )}
                  </div>
                )}

                <div className="form-check-custom">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    className="form-check-input"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    {t('JF.agreeToTerms')} <a href="#" className="terms-link">{t('JF.termsOfService')}</a> {t('JF.and')} <a href="#" className="terms-link">{t('JF.privacyPolicy')}</a>
                  </label>
                </div>

                <button type="submit" className="btn-fitness-primary" disabled={loading || !formData.acceptTerms}>
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">{t('common.loading')}</span>
                      </div>
                      {t('JF.creatingAccount')}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-arrow-right-circle me-2"></i>
                      {t('JF.continueToProfileSetup')}
                    </>
                  )}
                </button>

                <div className="login-section">
                  <p>{t('JF.alreadyCrushing')}</p>
                  <button 
                    type="button" 
                    onClick={handleLogin} 
                    className="btn-outline-fitness"
                    disabled={loading}
                  >
                    <i className="bi bi-arrow-left-circle me-2"></i>
                    {t('JF.backToLogin')}
                  </button>
                </div>
              </form>

              {/* Badges de sécurité */}
              <div className="security-badges">
                <div className="security-item">
                  <i className="bi bi-shield-check"></i>
                  <span>{t('JF.secureEncrypted')}</span>
                </div>
                <div className="security-item">
                  <i className="bi bi-lock-fill"></i>
                  <span>{t('JF.privacyProtected')}</span>
                </div>
                <div className="security-item">
                  <i className="bi bi-check-circle"></i>
                  <span>{t('JF.verifiedPlatform')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;