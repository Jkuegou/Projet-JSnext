// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';

// // Import des pages
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/Dashboard/Dashboard';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/workouts" element={<WorkoutsPage />} />
//           <Route path="/exercises" element={<ExercisesPage />} />
//           <Route path="/progress" element={<ProgressPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Import des pages
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// // Import des contexts
// import { AuthProvider } from './context/AuthContext';
// import { WorkoutProvider } from './context/WorkoutContext';

// function App() {
//   return (
//     <AuthProvider>
//       <WorkoutProvider>
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/workouts" element={<WorkoutsPage />} />
//               <Route path="/exercises" element={<ExercisesPage />} />
//               <Route path="/progress" element={<ProgressPage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//           </div>
//         </Router>
//       </WorkoutProvider>
//     </AuthProvider>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// Test import des pages une par une
// Décommentez une ligne à la fois pour identifier le problème
// import HomePage from './pages/HomePage/HomePage';
// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Composants temporaires pour ceux qui ne sont pas encore importés
// const Dashboard = () => <div>Dashboard Page</div>;
// const WorkoutsPage = () => <div>Workouts Page</div>;
// const ExercisesPage = () => <div>Exercises Page</div>;
// const ProgressPage = () => <div>Progress Page</div>;
// const ProfilePage = () => <div>Profile Page</div>;
// const NotFoundPage = () => <div>404 - Page Not Found</div>;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/workouts" element={<WorkoutsPage />} />
//           <Route path="/exercises" element={<ExercisesPage />} />
//           <Route path="/progress" element={<ProgressPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js - Version corrigée avec tous les providers
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { OnboardingProvider } from './context/OnboardingContext';
// import { WorkoutProvider } from './context/WorkoutContext';
// import { ChallengeProvider } from './context/ChallengeContext';
// import { ThemeProvider } from './context/ThemeContext';
// import { NotificationProvider } from './context/NotificationContext';
// import AppRouter from './router/AppRouter';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <NotificationProvider>
//           <AuthProvider>
//             <OnboardingProvider>
//               <WorkoutProvider>
//                 <ChallengeProvider>
//                   <div className="App">
//                     <AppRouter />
//                   </div>
//                 </ChallengeProvider>
//               </WorkoutProvider>
//             </OnboardingProvider>
//           </AuthProvider>
//         </NotificationProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import { AuthProvider } from './context/AuthContext';
// import { OnboardingProvider } from './context/OnboardingContext';
// import { WorkoutProvider } from './context/WorkoutContext';
// import { ChallengeProvider } from './context/ChallengeContext';
// import { ThemeProvider } from './context/ThemeContext';
// import { NotificationProvider } from './context/NotificationContext';

// // Pages publiques
// import HomePage from './pages/HomePage/HomePage';
// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// // Pages protégées
// import Layout from './components/layout/Layout';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ChallengesPage from './pages/ChallengesPage/ChallengesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import Community from './pages/Community/Community';
// import Nutrition from './pages/Nutrition/Nutrition';

// // Composants utilitaires
// import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
// import './App.css';

// // Composant AppRouter intégré
// const AppRouter = () => {
//   const { isAuthenticated, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="app-loading">
//         <div className="spinner"></div>
//         <p>Chargement de l'application...</p>
//       </div>
//     );
//   }

//   return (
//     <Routes>
//       {/* Routes publiques */}
//       <Route path="/" element={<HomePage />} />
//       <Route 
//         path="/login" 
//         element={
//           isAuthenticated ? 
//           <Navigate to="/dashboard" replace /> : 
//           <Login />
//         } 
//       />
//       <Route 
//         path="/register" 
//         element={
//           isAuthenticated ? 
//           <Navigate to="/onboarding" replace /> : 
//           <Register />
//         } 
//       />

//       {/* Routes protégées avec layout */}
//       <Route 
//         path="/*" 
//         element={
//           <ProtectedRoute>
//             <Layout>
//               <Routes>
//                 {/* Onboarding - accessible même si non complété */}
//                 <Route 
//                   path="/onboarding" 
//                   element={
//                     <ProtectedRoute>
//                       <OnboardingPage />
//                     </ProtectedRoute>
//                   } 
//                 />

//                 {/* Routes nécessitant l'onboarding complété */}
//                 <Route 
//                   path="/dashboard" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <Dashboard />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/profile" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <ProfilePage />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/workouts" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <WorkoutsPage />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/exercises" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <ExercisesPage />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/challenges" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <ChallengesPage />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/progress" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <ProgressPage />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/community" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <Community />
//                     </ProtectedRoute>
//                   } 
//                 />
                
//                 <Route 
//                   path="/nutrition" 
//                   element={
//                     <ProtectedRoute requireOnboarding={true}>
//                       <Nutrition />
//                     </ProtectedRoute>
//                   } 
//                 />

//                 {/* Redirection par défaut */}
//                 <Route path="/" element={<Navigate to="/dashboard" replace />} />
                
//                 {/* Page 404 */}
//                 <Route path="*" element={<NotFoundPage />} />
//               </Routes>
//             </Layout>
//           </ProtectedRoute>
//         } 
//       />
//     </Routes>
//   );
// };

// // Composant principal App
// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <NotificationProvider>
//           <AuthProvider>
//             <OnboardingProvider>
//               <WorkoutProvider>
//                 <ChallengeProvider>
//                   <div className="App">
//                     <AppRouter />
//                   </div>
//                 </ChallengeProvider>
//               </WorkoutProvider>
//             </OnboardingProvider>
//           </AuthProvider>
//         </NotificationProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import { AuthProvider } from './context/AuthContext';
// import { OnboardingProvider } from './context/OnboardingContext';
// import { WorkoutProvider } from './context/WorkoutContext';
// import { ChallengeProvider } from './context/ChallengeContext';
// import { ThemeProvider } from './context/ThemeContext';
// import { NotificationProvider } from './context/NotificationContext';

// // Pages et composants
// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import FitnessOnboarding from './pages/OnboardingPage/OnboardingPage';
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ChallengesPage from './pages/ChallengesPage/ChallengesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import Community from './pages/Community/Community';
// import Nutrition from './pages/Nutrition/Nutrition';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import './App.css';

// // Composants de protection des routes
// const ProtectedRoute = ({ children, requireOnboarding = false }) => {
//   const { user, isAuthenticated, loading } = useAuth();
  
//   if (loading) {
//     return (
//       <div className="app-loading">
//         <div className="spinner"></div>
//         <p>Chargement...</p>
//       </div>
//     );
//   }
  
//   if (!isAuthenticated || !user) {
//     return <Navigate to="/Login" />;
//   }
  
//   // Vérifier si l'onboarding est requis et non complété
//   if (requireOnboarding && !user.onboardingCompleted) {
//     return <Navigate to="/onboarding" />;
//   }
  
//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useAuth();
  
//   if (loading) {
//     return (
//       <div className="app-loading">
//         <div className="spinner"></div>
//         <p>Chargement...</p>
//       </div>
//     );
//   }
  
//   return !isAuthenticated ? children : <Navigate to="/dashboard" />;
// };

// // Composant App principal avec routing
// const AppContent = () => {
//   return (
//     <div className="App">
//       <Routes>
//         {/* Routes publiques */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//         <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        
//         {/* Onboarding - accessible aux utilisateurs connectés */}
//         <Route path="/onboarding" element={<ProtectedRoute><FitnessOnboarding /></ProtectedRoute>} />
        
//         {/* Routes protégées nécessitant l'onboarding */}
//         <Route path="/dashboard" element={<ProtectedRoute requireOnboarding={true}><Dashboard /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute requireOnboarding={true}><ProfilePage /></ProtectedRoute>} />
//         <Route path="/workouts" element={<ProtectedRoute requireOnboarding={true}><WorkoutsPage /></ProtectedRoute>} />
//         <Route path="/exercises" element={<ProtectedRoute requireOnboarding={true}><ExercisesPage /></ProtectedRoute>} />
//         <Route path="/challenges" element={<ProtectedRoute requireOnboarding={true}><ChallengesPage /></ProtectedRoute>} />
//         <Route path="/progress" element={<ProtectedRoute requireOnboarding={true}><ProgressPage /></ProtectedRoute>} />
//         <Route path="/community" element={<ProtectedRoute requireOnboarding={true}><Community /></ProtectedRoute>} />
//         <Route path="/nutrition" element={<ProtectedRoute requireOnboarding={true}><Nutrition /></ProtectedRoute>} />
        
//         {/* Page 404 */}
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </div>
//   );
// };

// // Composant App avec tous les providers
// function App() {
//   return (
    
    
//       <ThemeProvider>
//         <NotificationProvider>
//           <AuthProvider>
//             <OnboardingProvider>
//               <WorkoutProvider>
//                 <ChallengeProvider>
//                   <AppContent />
//                 </ChallengeProvider>
//               </WorkoutProvider>
//             </OnboardingProvider>
//           </AuthProvider>
//         </NotificationProvider>
//       </ThemeProvider>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';

// // import { OnboardingProvider } from './context/OnboardingContext';
// // import { WorkoutProvider } from './context/WorkoutContext';
// // import { ChallengeProvider } from './context/ChallengeContext';
// // import { ThemeProvider } from './context/ThemeContext';
// // import { NotificationProvider } from './context/NotificationContext';

// // Pages et composants
// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import FitnessOnboarding from './pages/OnboardingPage/OnboardingPage';
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ChallengesPage from './pages/ChallengesPage/ChallengesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import Community from './pages/Community/Community';
// import Nutrition from './pages/Nutrition/Nutrition';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// // Import minimal pour éviter les conflits
// import { useAuth } from './context/AuthContext';

// // Composants temporaires pour tester (remplacez progressivement par vos vrais composants)
// // const HomePage = () => <div><h1>🏠 Page d'accueil</h1><p>Bienvenue sur JuniorFitness!</p></div>;
// // const Login = () => <div><h1>🔐 Connexion</h1><p>Page de connexion</p></div>;
// // const Register = () => <div><h1>📝 Inscription</h1><p>Page d'inscription</p></div>;
// // const FitnessOnboarding = () => <div><h1>🚀 Onboarding</h1><p>Configuration de votre profil fitness</p></div>;
// // const Dashboard = () => <div><h1>📊 Dashboard</h1><p>Votre tableau de bord fitness</p></div>;
// // const Profile = () => <div><h1>👤 Profil</h1><p>Votre profil utilisateur</p></div>;
// // const Workouts = () => <div><h1>💪 Entraînements</h1><p>Vos séances d'entraînement</p></div>;
// // const Exercises = () => <div><h1>🏋️ Exercices</h1><p>Bibliothèque d'exercices</p></div>;
// // const Challenges = () => <div><h1>🏆 Défis</h1><p>Vos défis fitness</p></div>;
// // const Progress = () => <div><h1>📈 Progression</h1><p>Suivi de vos progrès</p></div>;
// // const Community = () => <div><h1>👥 Communauté</h1><p>Connectez avec d'autres</p></div>;
// // const Nutrition = () => <div><h1>🥗 Nutrition</h1><p>Plan nutritionnel</p></div>;
// // const NotFound = () => <div><h1>❌ 404</h1><p>Page non trouvée</p></div>;

// // Composant de protection simple
// const ProtectedRoute = ({ children, requireOnboarding = false }) => {
//   const authContext = useAuth();
  
//   // Gestion sécurisée du contexte
//   if (!authContext) {
//     console.error('useAuth doit être utilisé dans un AuthProvider');
//     return <Navigate to="/login" replace />;
//   }
  
//   const { user, isAuthenticated, loading } = authContext;
  
//   if (loading) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center', 
//         height: '100vh',
//         fontFamily: 'Arial, sans-serif'
//       }}>
//         <div style={{
//           border: '4px solid #f3f3f3',
//           borderTop: '4px solid #3498db',
//           borderRadius: '50%',
//           width: '40px',
//           height: '40px',
//           animation: 'spin 2s linear infinite',
//           marginBottom: '20px'
//         }}></div>
//         <p>⏳ Chargement...</p>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }
  
//   if (!isAuthenticated || !user) {
//     return <Navigate to="/login" replace />;
//   }
  
//   if (requireOnboarding && !user.onboardingCompleted) {
//     return <Navigate to="/onboarding" replace />;
//   }
  
//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const authContext = useAuth();
  
//   if (!authContext) {
//     return children; // Si pas de contexte, on laisse passer
//   }
  
//   const { isAuthenticated, loading } = authContext;
  
//   if (loading) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center', 
//         height: '100vh',
//         fontFamily: 'Arial, sans-serif'
//       }}>
//         <div style={{
//           border: '4px solid #f3f3f3',
//           borderTop: '4px solid #3498db',
//           borderRadius: '50%',
//           width: '40px',
//           height: '40px',
//           animation: 'spin 2s linear infinite',
//           marginBottom: '20px'
//         }}></div>
//         <p>⏳ Chargement...</p>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }
  
//   return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
// };

// // Composant App principal - SANS BrowserRouter (il est dans index.js)
// function App() {
//   return (
//     <div className="App" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       <Routes>
//         {/* Routes publiques */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//         <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        
//         {/* Onboarding */}
//         <Route path="/onboarding" element={<ProtectedRoute><FitnessOnboarding /></ProtectedRoute>} />
        
//         {/* Routes protégées */}
//         <Route path="/dashboard" element={<ProtectedRoute requireOnboarding={true}><Dashboard /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute requireOnboarding={true}><ProfilePage /></ProtectedRoute>} />
//         <Route path="/workouts" element={<ProtectedRoute requireOnboarding={true}><WorkoutsPage /></ProtectedRoute>} />
//         <Route path="/exercises" element={<ProtectedRoute requireOnboarding={true}><ExercisesPage /></ProtectedRoute>} />
//         <Route path="/challenges" element={<ProtectedRoute requireOnboarding={true}><ChallengesPage /></ProtectedRoute>} />
//         <Route path="/progress" element={<ProtectedRoute requireOnboarding={true}><ProgressPage /></ProtectedRoute>} />
//         <Route path="/community" element={<ProtectedRoute requireOnboarding={true}><Community /></ProtectedRoute>} />
//         <Route path="/nutrition" element={<ProtectedRoute requireOnboarding={true}><Nutrition /></ProtectedRoute>} />
        
//         {/* 404 */}
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';

// import { OnboardingProvider } from './context/OnboardingContext';
// // Décommente les autres providers si nécessaires
// // import { WorkoutProvider } from './context/WorkoutContext';
// // import { ChallengeProvider } from './context/ChallengeContext';
// // import { ThemeProvider } from './context/ThemeContext';
// // import { NotificationProvider } from './context/NotificationContext';

// // Pages et composants
// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import FitnessOnboarding from './pages/OnboardingPage/OnboardingPage';
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import ChallengesPage from './pages/ChallengesPage/ChallengesPage';
// import ProgressPage from './pages/ProgressPage/ProgressPage';
// import Community from './pages/Community/Community';
// import Nutrition from './pages/Nutrition/Nutrition';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// import { useAuth } from './context/AuthContext';

// const ProtectedRoute = ({ children, requireOnboarding = false }) => {
//   const authContext = useAuth();

//   if (!authContext) {
//     console.error('useAuth doit être utilisé dans un AuthProvider');
//     return <Navigate to="/login" replace />;
//   }

//   const { user, isAuthenticated, loading } = authContext;

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//         <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 2s linear infinite', marginBottom: '20px' }}></div>
//         <p>⏳ Chargement...</p>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   if (!isAuthenticated || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (requireOnboarding && !user.onboardingCompleted) {
//     return <Navigate to="/onboarding" replace />;
//   }

//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const authContext = useAuth();

//   if (!authContext) return children;

//   const { isAuthenticated, loading } = authContext;

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//         <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 2s linear infinite', marginBottom: '20px' }}></div>
//         <p>⏳ Chargement...</p>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
// };

// function App() {
//   return (
//     <div className="App" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       <OnboardingProvider>
//         <Routes>
//           {/* Routes publiques */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//           <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

//           {/* Onboarding */}
//           <Route path="/onboarding" element={<ProtectedRoute><FitnessOnboarding /></ProtectedRoute>} />

//           {/* Routes protégées */}
//           <Route path="/dashboard" element={<ProtectedRoute requireOnboarding={true}><Dashboard /></ProtectedRoute>} />
//           <Route path="/profile" element={<ProtectedRoute requireOnboarding={true}><ProfilePage /></ProtectedRoute>} />
//           <Route path="/workouts" element={<ProtectedRoute requireOnboarding={true}><WorkoutsPage /></ProtectedRoute>} />
//           <Route path="/exercises" element={<ProtectedRoute requireOnboarding={true}><ExercisesPage /></ProtectedRoute>} />
//           <Route path="/challenges" element={<ProtectedRoute requireOnboarding={true}><ChallengesPage /></ProtectedRoute>} />
//           <Route path="/progress" element={<ProtectedRoute requireOnboarding={true}><ProgressPage /></ProtectedRoute>} />
//           <Route path="/community" element={<ProtectedRoute requireOnboarding={true}><Community /></ProtectedRoute>} />
//           <Route path="/nutrition" element={<ProtectedRoute requireOnboarding={true}><Nutrition /></ProtectedRoute>} />

//           {/* 404 */}
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </OnboardingProvider>
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import { AppProviders } from './providers/AppProviders';
import AppRouter from './router/AppRouter';
import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner';
import './i18n'; // Import de la configuration i18n
import './App.css';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AppProviders>
        <div className="App" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
          <AppRouter />
        </div>
      </AppProviders>
    </Suspense>
  );
}

export default App;

// import React from 'react';
// import { AppProviders } from './providers/AppProviders';
// import AppRouter from './router/AppRouter';
// import Layout from './components/layout/Layout';
// import './App.css';

// function App() {
//   return (
//     <AppProviders>
//       <div className="App" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//         <Layout>
//           <AppRouter />
//         </Layout>
//       </div>
//     </AppProviders>
//   );
// }

// export default App;
// App.js - Version temporaire sans les composants manquants
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// // import { NotificationProvider } from './context/NotificationContext';
// import AppRouter from './router/AppRouter';
// import Layout from './components/layout/Layout';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         {/* <NotificationProvider> */}
//           <div className="App" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//             <Layout>
//               <AppRouter />
//             </Layout>
//           </div>
//         {/* </NotificationProvider> */}
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';

// import Login from './components/auth/Login/Login';
// import Register from './components/auth/Register/Register';
// import FitnessOnboarding from './components/onboarding/FitnessOnboarding';
// import HomePage from './pages/HomePage/HomePage';
// import Dashboard from './pages/DashboardPage/Dashboard';
// import Profile from './components/user/Profile/Profile';
// import Settings from './components/user/Settings/Settings';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


// const ProtectedRoute = ({ children, adminOnly = false }) => {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/login" />;
//   if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" />;
//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();
//   return !user ? children : <Navigate to="/dashboard" />;
// };

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//         <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
//         <Route path="/onboarding" element={<FitnessOnboarding />} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
//         <Route path="/workouts" element={<ProtectedRoute><div>Workouts Page</div></ProtectedRoute>} />
//         <Route path="/exercises" element={<ProtectedRoute><div>Exercises Page</div></ProtectedRoute>} />
//         <Route path="/progress" element={<ProtectedRoute><div>Progress Page</div></ProtectedRoute>} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
