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
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

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
  const [currentStep, setCurrentStep] = useState(1);
  
  const navigate = useNavigate();

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
      // Appel API réel pour l'inscription
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const response = await authService.register(fullName, formData.email, formData.password);
      
      setMessage({ 
        type: 'success', 
        text: 'Compte créé avec succès ! Bienvenue dans JuniortFitness !' 
      });
      
      console.log('Registration successful:', response);
      
      // Redirection vers login après inscription réussie
      // setTimeout(() => {
      //   navigate('/login');
      // }, 2000);
      setTimeout(() => {
  navigate('/onboarding'); // Au lieu de '/login'
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

  const steps = [
    { number: 1, title: 'Sign up your account', active: true },
    { number: 2, title: 'Set up your workspace', active: false },
    { number: 3, title: 'Set up your profile', active: false }
  ];

  return (
    <div className="register-container">
      <div className="register-left-panel">
        <div className="brand-section">
          <div className="brand-logo">
            <div className="logo-circle">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h1>JuniortFitness</h1>
          </div>
          
          <div className="onboarding-content">
            <h2>Get Started with Us</h2>
            <p>Complete these easy steps to register your account.</p>
            
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={step.number} className={`step-item ${step.active ? 'active' : ''}`}>
                  <div className="step-number">
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="register-right-panel">
        <div className="register-form-container">
          <div className="register-header">
            <h2>Sign Up Account</h2>
            <p>Enter your personal data to create your account.</p>
          </div>

          {message.text && (
            <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'}`}>
              <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : message.type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'}`}></i>
              {message.text}
            </div>
          )}

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <i className="fab fa-google"></i>
              Google
            </button>
            <button type="button" className="social-btn github-btn">
              <i className="fab fa-github"></i>
              GitHub
            </button>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="eg. John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="eg. Francisco"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="eg. johnfrans@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <button type="button" className="password-toggle" onClick={togglePassword}>
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              <div className="password-hint">
                Must be at least 6 characters.
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="password-input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <button type="button" className="password-toggle" onClick={toggleConfirmPassword}>
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            <div className="form-check">
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
                I accept the <a href="#" className="terms-link">terms and conditions</a>
              </label>
            </div>

            <button type="submit" className="btn-signup" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Inscription...
                </>
              ) : (
                'Sign Up'
              )}
            </button>

            <div className="login-link">
              <p>Already have an account? <button type="button" onClick={handleLogin} className="link-btn">Log in</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;