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
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import authService from '../../../services/authService';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [loading, setLoading] = useState(false);

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

//     try {
//       // Appel API réel pour la connexion
//       const response = await authService.login(formData.email, formData.password);
      
//       setMessage({ 
//         type: 'success', 
//         text: 'Connexion réussie ! Redirection en cours...' 
//       });

//       console.log('Login successful:', response);
      
//       // Redirection vers dashboard après connexion réussie
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 1500);
      
//     } catch (error) {
//       setMessage({ 
//         type: 'error', 
//         text: error.message || 'Erreur lors de la connexion' 
//       });
//       console.error('Login error:', error);
//     } finally {
//       setLoading(false);
//     }
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
//                   disabled={loading}
//                 />
//                 <label className="form-check-label" htmlFor="rememberMe">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
//                 Forgot password?
//               </a>
//             </div>

//             <button type="submit" className="btn-signin" disabled={loading}>
//               {loading ? (
//                 <>
//                   <i className="fas fa-spinner fa-spin"></i>
//                   Connexion...
//                 </>
//               ) : (
//                 'Sign In'
//               )}
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
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../context/AuthContext'; // ✅ AJOUT du hook d'authentification

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const navigate = useNavigate();
//   const { login } = useAuth(); // ✅ AJOUT: utiliser le hook d'authentification

//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [loading, setLoading] = useState(false);

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

//     try {
//       // ✅ MODIFICATION: Utiliser le login du contexte au lieu d'authService
//       const result = await login(formData.email, formData.password);
      
//       if (result.success) {
//         setMessage({ 
//           type: 'success', 
//           text: 'Connexion réussie ! Redirection en cours...' 
//         });

//         console.log('Login successful:', result.user);
        
//         // Redirection vers dashboard après connexion réussie
//         setTimeout(() => {
//           navigate('/dashboard');
//         }, 1500);
//       } else {
//         setMessage({ 
//           type: 'error', 
//           text: result.message || 'Erreur lors de la connexion' 
//         });
//       }
      
//     } catch (error) {
//       setMessage({ 
//         type: 'error', 
//         text: error.message || 'Erreur lors de la connexion' 
//       });
//       console.error('Login error:', error);
//     } finally {
//       setLoading(false);
//     }
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
//                   disabled={loading}
//                 />
//                 <label className="form-check-label" htmlFor="rememberMe">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
//                 Forgot password?
//               </a>
//             </div>

//             <button type="submit" className="btn-signin" disabled={loading}>
//               {loading ? (
//                 <>
//                   <i className="fas fa-spinner fa-spin"></i>
//                   Connexion...
//                 </>
//               ) : (
//                 'Sign In'
//               )}
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
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../context/AuthContext';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [loading, setLoading] = useState(false);

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

//     try {
//       const result = await login(formData.email, formData.password);
      
//       if (result.success) {
//         setMessage({ 
//           type: 'success', 
//           text: 'Connexion réussie ! Redirection en cours...' 
//         });

//         console.log('Login successful:', result.user);
        
//         // ✅ MODIFICATION: Redirection basée sur le rôle
//         setTimeout(() => {
//           // Vérifier le rôle de l'utilisateur pour la redirection
//           if (result.user && result.user.role === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
//           }
//         }, 1500);
//       } else {
//         setMessage({ 
//           type: 'error', 
//           text: result.message || 'Erreur lors de la connexion' 
//         });
//       }
      
//     } catch (error) {
//       setMessage({ 
//         type: 'error', 
//         text: error.message || 'Erreur lors de la connexion' 
//       });
//       console.error('Login error:', error);
//     } finally {
//       setLoading(false);
//     }
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
//                   disabled={loading}
//                 />
//                 <label className="form-check-label" htmlFor="rememberMe">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
//                 Forgot password?
//               </a>
//             </div>

//             <button type="submit" className="btn-signin" disabled={loading}>
//               {loading ? (
//                 <>
//                   <i className="fas fa-spinner fa-spin"></i>
//                   Connexion...
//                 </>
//               ) : (
//                 'Sign In'
//               )}
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
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

// Hook pour les animations
const useFitnessAnimations = () => {
  useEffect(() => {
    // Animation des compteurs de statistiques
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        
        setTimeout(() => {
          updateCounter();
        }, 1500);
      });
    };

    // Effet de parallaxe léger
    const handleParallax = () => {
      if (window.innerWidth > 768) {
        const handleMouseMove = (e) => {
          const particles = document.querySelectorAll('.particle');
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          
          particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3;
            const xPos = (x - 0.5) * speed * 10;
            const yPos = (y - 0.5) * speed * 10;
            
            particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
          });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    };

    const cleanup = handleParallax();
    animateCounters();
    
    return cleanup;
  }, []);
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Utiliser les animations
  useFitnessAnimations();

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: 'Connexion réussie ! Redirection en cours...' 
        });

        console.log('Login successful:', result.user);
        
        setTimeout(() => {
          if (result.user && result.user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/dashboard');
          }
        }, 1500);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.message || 'Erreur lors de la connexion' 
        });
      }
      
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
    <div className="fitness-login-container">
      {/* Particules d'arrière-plan animées */}
      <div className="fitness-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <i className="bi bi-lightning-charge"></i>
          </div>
        ))}
      </div>

      <div className="container-fluid h-100">
        <div className="row h-100 g-0">
          {/* Panneau gauche - Hero Section */}
          <div className="col-lg-7 col-md-6 fitness-hero-section">
            <div className="hero-content">
              <div className={`brand-header ${isVisible ? 'animate-slide-up' : ''}`}>
                <div className="brand-logo-fitness">
                  <div className="logo-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <div className="brand-text">
                    <h1>FitTracker Pro</h1>
                    <span className="tagline">Your Fitness Journey Starts Here</span>
                  </div>
                </div>
              </div>

              <div className={`hero-main ${isVisible ? 'animate-slide-up delay-1' : ''}`}>
                <h2 className="hero-title">
                  Transform Your Body, <br />
                  <span className="gradient-text">Elevate Your Mind</span>
                </h2>
                <p className="hero-description">
                  Join thousands of fitness enthusiasts who are crushing their goals 
                  with our comprehensive training platform. Track workouts, monitor progress, 
                  and connect with a community that motivates you every step of the way.
                </p>
              </div>

              {/* Statistiques animées */}
              <div className={`stats-grid ${isVisible ? 'animate-slide-up delay-2' : ''}`}>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-target="15000">0</h3>
                    <p>Active Members</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-target="850">0</h3>
                    <p>Workouts Completed</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number" data-target="95">0</h3>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className={`features-showcase ${isVisible ? 'animate-slide-up delay-3' : ''}`}>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Personalized Training Plans</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Real-time Progress Tracking</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Community Challenges</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Expert Nutrition Guidance</span>
                </div>
              </div>

              {/* Image de sport */}
              <div className={`fitness-illustration ${isVisible ? 'animate-fade-in delay-4' : ''}`}>
                <div className="illustration-container">
                  <div className="workout-person">
                    <i className="bi bi-person-arms-up"></i>
                  </div>
                  <div className="floating-elements">
                    <div className="floating-icon icon-1">
                      <i className="bi bi-heart-pulse"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="bi bi-lightning-charge"></i>
                    </div>
                    <div className="floating-icon icon-3">
                      <i className="bi bi-trophy"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau droit - Formulaire de connexion */}
          <div className="col-lg-5 col-md-6 fitness-form-section">
            <div className={`login-form-container ${isVisible ? 'animate-slide-right' : ''}`}>
              <div className="form-header">
                <h3>Welcome Back, Athlete!</h3>
                <p>Ready to continue your fitness journey?</p>
              </div>

              {message.text && (
                <div className={`alert alert-${message.type === 'success' ? 'success' : message.type === 'info' ? 'info' : 'danger'} fitness-alert`}>
                  <i className={`bi ${message.type === 'success' ? 'bi-check-circle' : message.type === 'info' ? 'bi-info-circle' : 'bi-exclamation-triangle'}`}></i>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="fitness-form">
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
                
                <div className="form-floating mb-3">
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
                      Keep me logged in
                    </label>
                  </div>
                  <a href="#" onClick={handleForgotPassword} className="forgot-link">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn-fitness-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-arrow-right-circle me-2"></i>
                      Start Training
                    </>
                  )}
                </button>

                <div className="divider-fitness">
                  <span>Or connect with</span>
                </div>

                <div className="social-login-fitness">
                  <button type="button" className="social-btn google">
                    <i className="bi bi-google"></i>
                  </button>
                  <button type="button" className="social-btn apple">
                    <i className="bi bi-apple"></i>
                  </button>
                  <button type="button" className="social-btn facebook">
                    <i className="bi bi-facebook"></i>
                  </button>
                </div>

                <div className="signup-section">
                  <p>New to fitness tracking?</p>
                  <button 
                    type="button" 
                    onClick={handleRegister} 
                    className="btn-outline-fitness"
                    disabled={loading}
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;