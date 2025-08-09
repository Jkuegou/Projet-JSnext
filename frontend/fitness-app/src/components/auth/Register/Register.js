// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validation des mots de passe
//     if (formData.password !== formData.confirmPassword) {
//       setMessage({ type: 'error', text: 'Les mots de passe ne correspondent pas.' });
//       return;
//     }

//     if (!formData.acceptTerms) {
//       setMessage({ type: 'error', text: 'Vous devez accepter les conditions d\'utilisation.' });
//       return;
//     }

//     // Logique d'inscription ici
//     setMessage({ type: 'success', text: 'Compte créé avec succès ! Bienvenue chez JuniortFitness !' });
//     console.log('Register data:', formData);
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="brand-logo">
//           <h1><i className="fas fa-dumbbell"></i> JuniortFitness</h1>
//           <p>Créez votre compte fitness</p>
//         </div>

//         {message.text && (
//           <div className={`alert ${message.type === 'success' ? 'success-message' : 'error-message'}`}>
//             <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}`}></i>
//             {message.text}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Nom complet</label>
//             <input
//               type="text"
//               name="fullName"
//               className="form-control"
//               placeholder="Votre nom complet"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="votre@email.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Mot de passe</label>
//             <div className="input-group">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 className="form-control"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="input-group-text" onClick={togglePassword}>
//                 <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//               </span>
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Confirmer le mot de passe</label>
//             <div className="input-group">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 className="form-control"
//                 placeholder="••••••••"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="input-group-text" onClick={toggleConfirmPassword}>
//                 <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//               </span>
//             </div>
//           </div>

//           <div className="form-check">
//             <input
//               type="checkbox"
//               name="acceptTerms"
//               className="form-check-input"
//               id="acceptTerms"
//               checked={formData.acceptTerms}
//               onChange={handleChange}
//               required
//             />
//             <label className="form-check-label" htmlFor="acceptTerms">
//               J'accepte les <a href="#" style={{color: '#ff6b35'}}>conditions d'utilisation</a>
//             </label>
//           </div>

//           <button type="submit" className="btn-primary">
//             <i className="fas fa-user-plus"></i> Créer un compte
//           </button>

//           <div className="divider">
//             <span>ou</span>
//           </div>

//           <div className="social-login">
//             <a href="#" className="social-btn">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="#" className="social-btn">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="social-btn">
//               <i className="fab fa-apple"></i>
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [currentStep, setCurrentStep] = useState(1);
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Password validation
//     if (formData.password !== formData.confirmPassword) {
//       setMessage({ type: 'error', text: 'Passwords do not match.' });
//       return;
//     }

//     if (formData.password.length < 8) {
//       setMessage({ type: 'error', text: 'Password must be at least 8 characters long.' });
//       return;
//     }

//     if (!formData.acceptTerms) {
//       setMessage({ type: 'error', text: 'You must accept the terms and conditions.' });
//       return;
//     }

//     // Success message
//     setMessage({ type: 'success', text: 'Account created successfully! Welcome to JuniortFitness!' });
//     console.log('Register data:', formData);
    
//     // Simulate redirect after 2 seconds
//     setTimeout(() => {
//       navigate('/login');
//     }, 2000);
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const steps = [
//     { number: 1, title: 'Sign up your account', active: true },
//     { number: 2, title: 'Set up your workspace', active: false },
//     { number: 3, title: 'Set up your profile', active: false }
//   ];

//   return (
//     <div className="register-container">
//       <div className="register-left-panel">
//         <div className="brand-section">
//           <div className="brand-logo">
//             <div className="logo-circle">
//               <i className="fas fa-dumbbell"></i>
//             </div>
//             <h1>JuniortFitness</h1>
//           </div>
          
//           <div className="onboarding-content">
//             <h2>Get Started with Us</h2>
//             <p>Complete these easy steps to register your account.</p>
            
//             <div className="steps-container">
//               {steps.map((step, index) => (
//                 <div key={step.number} className={`step-item ${step.active ? 'active' : ''}`}>
//                   <div className="step-number">
//                     {step.number}
//                   </div>
//                   <div className="step-content">
//                     <h4>{step.title}</h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="register-right-panel">
//         <div className="register-form-container">
//           <div className="register-header">
//             <h2>Sign Up Account</h2>
//             <p>Enter your personal data to create your account.</p>
//           </div>

//           {message.text && (
//             <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'}`}>
//               <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : message.type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'}`}></i>
//               {message.text}
//             </div>
//           )}

//           <div className="social-login">
//             <button type="button" className="social-btn google-btn">
//               <i className="fab fa-google"></i>
//               Google
//             </button>
//             <button type="button" className="social-btn github-btn">
//               <i className="fab fa-github"></i>
//               GitHub
//             </button>
//           </div>

//           <div className="divider">
//             <span>Or</span>
//           </div>

//           <form onSubmit={handleSubmit} className="register-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label className="form-label">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control"
//                   placeholder="eg. John"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control"
//                   placeholder="eg. Francisco"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="eg. johnfrans@gmail.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Password</label>
//               <div className="password-input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   className="form-control"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button type="button" className="password-toggle" onClick={togglePassword}>
//                   <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//                 </button>
//               </div>
//               <div className="password-hint">
//                 Must be at least 8 characters.
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Confirm Password</label>
//               <div className="password-input-group">
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   name="confirmPassword"
//                   className="form-control"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button type="button" className="password-toggle" onClick={toggleConfirmPassword}>
//                   <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//                 </button>
//               </div>
//             </div>

//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="acceptTerms"
//                 className="form-check-input"
//                 id="acceptTerms"
//                 checked={formData.acceptTerms}
//                 onChange={handleChange}
//                 required
//               />
//               <label className="form-check-label" htmlFor="acceptTerms">
//                 I accept the <a href="#" className="terms-link">terms and conditions</a>
//               </label>
//             </div>

//             <button type="submit" className="btn-signup">
//               Sign Up
//             </button>

//             <div className="login-link">
//               <p>Already have an account? <button type="button" onClick={handleLogin} className="link-btn">Log in</button></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';
// import authService from '../../../services/authService';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [loading, setLoading] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });
    
//     // Validations côté client
//     if (formData.password !== formData.confirmPassword) {
//       setMessage({ type: 'error', text: 'Les mots de passe ne correspondent pas.' });
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setMessage({ type: 'error', text: 'Le mot de passe doit contenir au moins 6 caractères.' });
//       setLoading(false);
//       return;
//     }

//     if (!formData.acceptTerms) {
//       setMessage({ type: 'error', text: 'Vous devez accepter les conditions d\'utilisation.' });
//       setLoading(false);
//       return;
//     }

//     try {
//       // Appel API réel pour l'inscription
//       const fullName = `${formData.firstName} ${formData.lastName}`;
//       const response = await authService.register(fullName, formData.email, formData.password);
      
//       setMessage({ 
//         type: 'success', 
//         text: 'Compte créé avec succès ! Bienvenue dans JuniortFitness !' 
//       });
      
//       console.log('Registration successful:', response);
      
//       // Redirection vers login après inscription réussie
//       // setTimeout(() => {
//       //   navigate('/login');
//       // }, 2000);
//       setTimeout(() => {
//   navigate('/onboarding'); // Au lieu de '/login'
// }, 2000);
//     } catch (error) {
//       setMessage({ 
//         type: 'error', 
//         text: error.message || 'Erreur lors de l\'inscription' 
//       });
//       console.error('Registration error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const steps = [
//     { number: 1, title: 'Sign up your account', active: true },
//     { number: 2, title: 'Set up your workspace', active: false },
//     { number: 3, title: 'Set up your profile', active: false }
//   ];

//   return (
//     <div className="register-container">
//       <div className="register-left-panel">
//         <div className="brand-section">
//           <div className="brand-logo">
//             <div className="logo-circle">
//               <i className="fas fa-dumbbell"></i>
//             </div>
//             <h1>JuniortFitness</h1>
//           </div>
          
//           <div className="onboarding-content">
//             <h2>Get Started with Us</h2>
//             <p>Complete these easy steps to register your account.</p>
            
//             <div className="steps-container">
//               {steps.map((step, index) => (
//                 <div key={step.number} className={`step-item ${step.active ? 'active' : ''}`}>
//                   <div className="step-number">
//                     {step.number}
//                   </div>
//                   <div className="step-content">
//                     <h4>{step.title}</h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="register-right-panel">
//         <div className="register-form-container">
//           <div className="register-header">
//             <h2>Sign Up Account</h2>
//             <p>Enter your personal data to create your account.</p>
//           </div>

//           {message.text && (
//             <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'}`}>
//               <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : message.type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'}`}></i>
//               {message.text}
//             </div>
//           )}

//           <div className="social-login">
//             <button type="button" className="social-btn google-btn">
//               <i className="fab fa-google"></i>
//               Google
//             </button>
//             <button type="button" className="social-btn github-btn">
//               <i className="fab fa-github"></i>
//               GitHub
//             </button>
//           </div>

//           <div className="divider">
//             <span>Or</span>
//           </div>

//           <form onSubmit={handleSubmit} className="register-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label className="form-label">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control"
//                   placeholder="eg. John"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control"
//                   placeholder="eg. Francisco"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="eg. johnfrans@gmail.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Password</label>
//               <div className="password-input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   className="form-control"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//                 <button type="button" className="password-toggle" onClick={togglePassword}>
//                   <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//                 </button>
//               </div>
//               <div className="password-hint">
//                 Must be at least 6 characters.
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Confirm Password</label>
//               <div className="password-input-group">
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   name="confirmPassword"
//                   className="form-control"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//                 <button type="button" className="password-toggle" onClick={toggleConfirmPassword}>
//                   <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
//                 </button>
//               </div>
//             </div>

//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="acceptTerms"
//                 className="form-check-input"
//                 id="acceptTerms"
//                 checked={formData.acceptTerms}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//               <label className="form-check-label" htmlFor="acceptTerms">
//                 I accept the <a href="#" className="terms-link">terms and conditions</a>
//               </label>
//             </div>

//             <button type="submit" className="btn-signup" disabled={loading}>
//               {loading ? (
//                 <>
//                   <i className="fas fa-spinner fa-spin"></i>
//                   Inscription...
//                 </>
//               ) : (
//                 'Sign Up'
//               )}
//             </button>

//             <div className="login-link">
//               <p>Already have an account? <button type="button" onClick={handleLogin} className="link-btn">Log in</button></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    // Validations côté client
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Les mots de passe ne correspondent pas.' });
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ type: 'error', text: 'Le mot de passe doit contenir au moins 6 caractères.' });
      setLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      setMessage({ type: 'error', text: 'Vous devez accepter les conditions d\'utilisation.' });
      setLoading(false);
      return;
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const response = await authService.register(fullName, formData.email, formData.password);
      
      setMessage({ 
        type: 'success', 
        text: 'Compte créé avec succès ! Bienvenue dans FitTracker Pro !' 
      });
      
      console.log('Registration successful:', response);
      
      setTimeout(() => {
        navigate('/onboarding');
      }, 2000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Erreur lors de l\'inscription' 
      });
      console.error('Registration error:', error);
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
    if (passwordStrength === 0) return { text: 'Entrez un mot de passe', color: 'var(--fitness-gray)' };
    if (passwordStrength < 50) return { text: 'Mot de passe faible', color: '#ef4444' };
    if (passwordStrength < 75) return { text: 'Mot de passe moyen', color: '#f59e0b' };
    return { text: 'Mot de passe fort', color: '#10b981' };
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="fitness-register-container">
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
          {/* Panneau gauche - Onboarding Steps */}
          <div className="col-lg-6 col-md-5 fitness-onboarding-section">
            <div className="onboarding-content">
              <div className={`brand-header ${isVisible ? 'animate-slide-up' : ''}`}>
                <div className="brand-logo-fitness">
                  <div className="logo-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <div className="brand-text">
                    <h1>FitTracker Pro</h1>
                    <span className="tagline">Begin Your Transformation</span>
                  </div>
                </div>
              </div>

              <div className={`onboarding-main ${isVisible ? 'animate-slide-up delay-1' : ''}`}>
                <h2 className="onboarding-title">
                  Join the <span className="gradient-text">Fitness Revolution</span>
                </h2>
                <p className="onboarding-description">
                  Create your account and unlock a world of personalized workouts, 
                  progress tracking, and community support. Your fitness journey starts here!
                </p>
              </div>

              {/* Étapes d'onboarding */}
              <div className={`steps-journey ${isVisible ? 'animate-slide-up delay-2' : ''}`}>
                <div className="journey-step active">
                  <div className="step-icon">
                    <i className="bi bi-person-plus-fill"></i>
                  </div>
                  <div className="step-info">
                    <h4>Create Account</h4>
                    <p>Quick and secure registration</p>
                  </div>
                </div>
                
                <div className="journey-step">
                  <div className="step-icon">
                    <i className="bi bi-gear-fill"></i>
                  </div>
                  <div className="step-info">
                    <h4>Fitness Profile</h4>
                    <p>Tell us about your goals</p>
                  </div>
                </div>
                
                <div className="journey-step">
                  <div className="step-icon">
                    <i className="bi bi-rocket-takeoff-fill"></i>
                  </div>
                  <div className="step-info">
                    <h4>Start Training</h4>
                    <p>Begin your transformation</p>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className={`benefits-grid ${isVisible ? 'animate-slide-up delay-3' : ''}`}>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>Track Progress</h5>
                    <p>Monitor your improvements</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>Community</h5>
                    <p>Connect with athletes</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>Achievements</h5>
                    <p>Unlock your potential</p>
                  </div>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <div className="benefit-content">
                    <h5>Custom Plans</h5>
                    <p>Personalized workouts</p>
                  </div>
                </div>
              </div>

              {/* Témoignage */}
              <div className={`testimonial-card ${isVisible ? 'animate-fade-in delay-4' : ''}`}>
                <div className="testimonial-content">
                  <i className="bi bi-quote"></i>
                  <p>"FitTracker Pro changed my life! Lost 20kg in 6 months and gained so much confidence."</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="author-info">
                      <strong>Sarah M.</strong>
                      <span>Marathon Runner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau droit - Formulaire d'inscription */}
          <div className="col-lg-6 col-md-7 fitness-form-section">
            <div className={`register-form-container ${isVisible ? 'animate-slide-right' : ''}`}>
              <div className="form-header">
                <h3>Create Your Account</h3>
                <p>Join thousands of fitness enthusiasts today</p>
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
                  <span>Continue with Google</span>
                </button>
                <button type="button" className="social-btn-register apple">
                  <i className="bi bi-apple"></i>
                  <span>Continue with Apple</span>
                </button>
              </div>

              <div className="divider-fitness">
                <span>Or create account with email</span>
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
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                      <label htmlFor="floatingFirstName">
                        <i className="bi bi-person me-2"></i>First Name
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
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                      <label htmlFor="floatingLastName">
                        <i className="bi bi-person me-2"></i>Last Name
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
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingEmail">
                    <i className="bi bi-envelope me-2"></i>Email Address
                  </label>
                </div>
                
                <div className="form-floating mb-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="form-control fitness-input"
                    id="floatingPassword"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingPassword">
                    <i className="bi bi-lock me-2"></i>Password
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
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="floatingConfirmPassword">
                    <i className="bi bi-lock-fill me-2"></i>Confirm Password
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
                        Les mots de passe correspondent
                      </span>
                    ) : (
                      <span className="match-error">
                        <i className="bi bi-x-circle-fill"></i>
                        Les mots de passe ne correspondent pas
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
                    I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" className="btn-fitness-primary" disabled={loading || !formData.acceptTerms}>
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      Start My Fitness Journey
                    </>
                  )}
                </button>

                <div className="login-section">
                  <p>Already crushing your goals with us?</p>
                  <button 
                    type="button" 
                    onClick={handleLogin} 
                    className="btn-outline-fitness"
                    disabled={loading}
                  >
                    <i className="bi bi-arrow-left-circle me-2"></i>
                    Back to Login
                  </button>
                </div>
              </form>

              {/* Badges de sécurité */}
              <div className="security-badges">
                <div className="security-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Secure & Encrypted</span>
                </div>
                <div className="security-item">
                  <i className="bi bi-lock-fill"></i>
                  <span>Privacy Protected</span>
                </div>
                <div className="security-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Verified Platform</span>
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