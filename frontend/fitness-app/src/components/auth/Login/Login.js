// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
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
//     // Logique de connexion ici
//     setMessage({ type: 'success', text: 'Connexion réussie ! Redirection en cours...' });
//     console.log('Login data:', formData);
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     setMessage({ type: 'success', text: 'Un email de récupération a été envoyé à votre adresse.' });
//   };

//    const handleRegister = () => {
//     navigate ("/register");

//   };
  

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="brand-logo">
//           <h1><i className="fas fa-dumbbell"></i> JuniortFitness</h1>
//           <p>Connectez-vous à votre compte</p>
//         </div>

//         {message.text && (
//           <div className={`alert ${message.type === 'success' ? 'success-message' : 'error-message'}`}>
//             <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}`}></i>
//             {message.text}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
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

//           <div className="form-check">
//             <input
//               type="checkbox"
//               name="rememberMe"
//               className="form-check-input"
//               id="rememberMe"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="rememberMe">
//               Se souvenir de moi
//             </label>
//           </div>

//           <button type="submit" className="btn-primary">
//             <i className="fas fa-sign-in-alt"></i> Se connecter
//           </button>

//           <div className="forgot-password">
//             <a href="#" onClick={handleForgotPassword}>Mot de passe oublié ?</a>
//           </div>

//            <div className="forgot-password">
//             <a onClick={handleRegister}>S'enregistrer</a>
//           </div>

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

// export default Login;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';



// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
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
//     setMessage({ type: 'success', text: 'Connexion réussie ! Redirection en cours...' });
//     console.log('Login data:', formData);
//     // Simulate redirect after 2 seconds
//     setTimeout(() => {
//       navigate('/dashboard');
//     }, 2000);
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     setMessage({ type: 'info', text: 'Un email de récupération a été envoyé à votre adresse.' });
//   };

//   const handleRegister = () => {
//     navigate("/register");
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left-panel">
//         <div className="brand-section">
//           <div className="brand-logo">
//             <i className="fas fa-dumbbell"></i>
//             <h1>JuniortFitness</h1>
//           </div>
//           <h2>Get Fit, Get Strong, Get Healthy!</h2>
//           <p>Transform your fitness journey with our comprehensive training program designed to help you achieve your fitness goals and transform your body and mind.</p>
          
//           <div className="features-list">
//             <div className="feature-item">
//               <i className="fas fa-check-circle"></i>
//               <span>Personalized Training</span>
//             </div>
//             <div className="feature-item">
//               <i className="fas fa-check-circle"></i>
//               <span>Progress Tracking</span>
//             </div>
//             <div className="feature-item">
//               <i className="fas fa-check-circle"></i>
//               <span>Community Support</span>
//             </div>
//           </div>

//           <div className="stats-section">
//             <div className="stat-item">
//               <h3>10K+</h3>
//               <p>Active Users</p>
//             </div>
//             <div className="stat-item">
//               <h3>500+</h3>
//               <p>Workouts</p>
//             </div>
//             <div className="stat-item">
//               <h3>50+</h3>
//               <p>Trainers</p>
//             </div>
//           </div>

//           <div className="partners-section">
//             <p>Collaboration with:</p>
//             <div className="partner-logos">
//               <i className="fab fa-nike"></i>
//               <i className="fab fa-adidas"></i>
//               <span>Fitbit</span>
//               <span>UA</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="login-right-panel">
//         <div className="login-form-container">
//           <div className="login-header">
//             <h2>Welcome Back!</h2>
//             <p>Please enter your details to sign in</p>
//           </div>

//           {message.text && (
//             <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'}`}>
//               <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : message.type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'}`}></i>
//               {message.text}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label className="form-label">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Enter your email"
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
//             </div>

//             <div className="form-options">
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   name="rememberMe"
//                   className="form-check-input"
//                   id="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label" htmlFor="rememberMe">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
//                 Forgot password?
//               </a>
//             </div>

//             <button type="submit" className="btn-signin">
//               Sign In
//             </button>

//             <div className="divider">
//               <span>Or continue with</span>
//             </div>

//             <div className="social-login">
//               <button type="button" className="social-btn google-btn">
//                 <i className="fab fa-google"></i>
//                 Google
//               </button>
//               <button type="button" className="social-btn github-btn">
//                 <i className="fab fa-github"></i>
//                 GitHub
//               </button>
//             </div>

//             <div className="signup-link">
//               <p>Don't have an account? <button type="button" onClick={handleRegister} className="link-btn">Sign up</button></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

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

    try {
      // Appel API réel pour la connexion
      const response = await authService.login(formData.email, formData.password);
      
      setMessage({ 
        type: 'success', 
        text: 'Connexion réussie ! Redirection en cours...' 
      });

      console.log('Login successful:', response);
      
      // Redirection vers dashboard après connexion réussie
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Erreur lors de la connexion' 
      });
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setMessage({ type: 'info', text: 'Un email de récupération a été envoyé à votre adresse.' });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="brand-section">
          <div className="brand-logo">
            <i className="fas fa-dumbbell"></i>
            <h1>JuniortFitness</h1>
          </div>
          <h2>Get Fit, Get Strong, Get Healthy!</h2>
          <p>Transform your fitness journey with our comprehensive training program designed to help you achieve your fitness goals and transform your body and mind.</p>
          
          <div className="features-list">
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Personalized Training</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Progress Tracking</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Community Support</span>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Workouts</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Trainers</p>
            </div>
          </div>

          <div className="partners-section">
            <p>Collaboration with:</p>
            <div className="partner-logos">
              <i className="fab fa-nike"></i>
              <i className="fab fa-adidas"></i>
              <span>Fitbit</span>
              <span>UA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right-panel">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Please enter your details to sign in</p>
          </div>

          {message.text && (
            <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'}`}>
              <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : message.type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'}`}></i>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
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
            </div>

            <div className="form-options">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="form-check-input"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Connexion...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="divider">
              <span>Or continue with</span>
            </div>

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

            <div className="signup-link">
              <p>Don't have an account? <button type="button" onClick={handleRegister} className="link-btn">Sign up</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;