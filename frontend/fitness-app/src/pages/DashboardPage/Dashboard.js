
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
// import './Dashboard.css';
// // HOOKS (../../ pour remonter de DashboardPage → pages → src)
// import { useAuth } from '../../hooks/useAuth';
// import { useWorkouts } from '../../hooks/useWorkouts';
// import { useFitnessData } from '../../hooks/useFitnessData';
// import { useNotification } from '../../hooks/useNotification';

// // SERVICES
// import { fitnessService } from '../../services/fitnessService';
// import { workoutService } from '../../services/workoutService';
// import  userService  from '../../services/userService';
// import { challengeService } from '../../services/challengeService';

// // COMPONENTS
// import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
// import StatsCard from '../../components/fitness/StatsCard/StatsCard';
// import WorkoutsPage from "../WorkoutsPage/WorkoutsPage";
// import ProgressPage from "../ProgressPage/ProgressPage";
// import ChallengesPage from '../ChallengesPage/ChallengesPage';
// import { getRandomQuote } from "../../utils/motivationalQuotes";



// const Dashboard = () => {
//     const quote = getRandomQuote();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user, logout, isAuthenticated } = useAuth();
//   const { showNotification } = useNotification();

//   // États locaux
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true' || false;
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   // États pour les données avec valeurs par défaut
//   const [dashboardData, setDashboardData] = useState({
//     stats: {
//       todayWorkout: 0,
//       caloriesBurned: 0,
//       dailySteps: 0,
//       waterIntake: 0
//     },
//     weeklyProgress: [],
//     recentWorkouts: [],
//     schedule: [],
//     goals: [],
//     challenges: [],
//     nutritionData: []
//   });

//   // Vérification de l'authentification
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   // Chargement des données au montage et à chaque changement d'utilisateur
//   useEffect(() => {
//     if (isAuthenticated && user?.id) {
//       loadDashboardData();
//     }
//   }, [isAuthenticated, user?.id]);

//   // Timer pour l'horloge et le workout
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       if (isWorkoutActive) {
//         setWorkoutTime(prev => prev + 1);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isWorkoutActive]);

//   // Sauvegarde du mode sombre
//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode.toString());
//   }, [darkMode]);

//   // Fonction pour charger toutes les données du dashboard
//   const loadDashboardData = useCallback(async () => {
//     if (!user?.id) return;
    
//     setIsLoading(true);
//     setRefreshing(true);
    
//     try {
//       // Appels API parallèles pour optimiser les performances
//       const requests = [
//         fitnessService.getUserStats?.(user.id),
//         fitnessService.getWeeklyProgress?.(user.id),
//         workoutService.getRecentWorkouts?.(user.id),
//         userService.getUserGoals?.(user.id),
//         challengeService.getUserChallenges?.(user.id),
//         fitnessService.getNutritionData?.(user.id),
//         userService.getUserSchedule?.(user.id)
//       ];

//       const results = await Promise.allSettled(requests.filter(Boolean));
      
//       // Traitement des résultats avec gestion d'erreur
//       const [
//         userStatsResult,
//         weeklyDataResult,
//         recentWorkoutsResult,
//         userGoalsResult,
//         userChallengesResult,
//         nutritionDataResult,
//         scheduleDataResult
//       ] = results;

//       setDashboardData(prevData => ({
//         stats: userStatsResult?.status === 'fulfilled' ? userStatsResult.value?.data || prevData.stats : prevData.stats,
//         weeklyProgress: weeklyDataResult?.status === 'fulfilled' ? weeklyDataResult.value?.data || [] : [],
//         recentWorkouts: recentWorkoutsResult?.status === 'fulfilled' ? recentWorkoutsResult.value?.data || [] : [],
//         goals: userGoalsResult?.status === 'fulfilled' ? userGoalsResult.value?.data || [] : [],
//         challenges: userChallengesResult?.status === 'fulfilled' ? userChallengesResult.value?.data || [] : [],
//         nutritionData: nutritionDataResult?.status === 'fulfilled' ? nutritionDataResult.value?.data || [] : [],
//         schedule: scheduleDataResult?.status === 'fulfilled' ? scheduleDataResult.value?.data || [] : []
//       }));

//     } catch (error) {
//       console.error('Erreur lors du chargement des données:', error);
//       showNotification?.('Erreur lors du chargement des données', 'error');
//     } finally {
//       setIsLoading(false);
//       setRefreshing(false);
//     }
//   }, [user?.id, showNotification]);

//   // Fonction de refresh manuel
//   const handleRefresh = useCallback(() => {
//     loadDashboardData();
//     showNotification?.('Données actualisées', 'success');
//   }, [loadDashboardData, showNotification]);

//   // Gestion du workout timer
//   const handleWorkoutToggle = async () => {
//     try {
//       if (!isWorkoutActive) {
//         // Démarrer un workout
//         const response = await workoutService.startWorkout?.(user.id);
//         setIsWorkoutActive(true);
//         setWorkoutTime(0);
//         showNotification?.('Workout commencé !', 'success');
//       } else {
//         // Arrêter le workout
//         const workoutData = {
//           userId: user.id,
//           duration: workoutTime,
//           caloriesBurned: Math.floor(workoutTime * 0.1),
//           completedAt: new Date()
//         };
        
//         await workoutService.endWorkout?.(workoutData);
//         setIsWorkoutActive(false);
//         showNotification?.(`Workout terminé ! ${formatTime(workoutTime)}`, 'success');
        
//         // Recharger les données après la fin du workout
//         setTimeout(() => loadDashboardData(), 1000);
//       }
//     } catch (error) {
//       console.error('Erreur workout:', error);
//       showNotification?.('Erreur lors de la gestion du workout', 'error');
//     }
//   };

//   // Gestion de la déconnexion
//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/');
//     } catch (error) {
//       console.error('Erreur lors de la déconnexion:', error);
//       showNotification?.('Erreur lors de la déconnexion', 'error');
//     }
//   };

//   // Navigation vers les différentes pages
//   const navigateToPage = (page) => {
//     const routes = {
//       'dashboard': '/dashboard',
//       'workouts': '/workouts',
//       'exercises': '/exercises',
//       'nutrition': '/nutrition',
//       'progress': '/progresspage',
//       'challenges': '/challenges',
//       'community': '/community',
//       'profile': '/profile'
//     };
    
//     if (routes[page]) {
//       navigate(routes[page]);
//     } else {
//       setActiveTab(page);
//     }
//   };

//   // Utilitaires
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const getGreeting = () => {
//     const hour = currentTime.getHours();
//     if (hour < 12) return 'Bonjour';
//     if (hour < 17) return 'Bon après-midi';
//     return 'Bonsoir';
//   };

//   // Affichage du loading initial
//   if (isLoading && !dashboardData.stats) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '100vh',
//         background: darkMode ? '#1a1a2e' : '#f8fafc'
//       }}>
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   // Styles responsives
//   const containerStyle = {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #03035aff 0%, #13024aff 100%)' 
//       : 'linear-gradient(135deg, #3f3fb9ff 0%, #240457ff 100%)',
//     minHeight: '100vh',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: '#fefdfdff',
//     overflow: 'hidden'
//   };

//   const navbarStyle = {
//     background: 'rgba(197, 216, 248, 0.93)',
//     backdropFilter: 'blur(20px)',
//     color: 'black',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000
//   };

//   const sidebarStyle = {
//     width: '250px',
//     background: 'rgba(3, 2, 63, 0.79)',
//     backdropFilter: 'blur(20px)',
//     borderRight: '1px solid rgba(255, 255, 255, 0.1)',
//     padding: '2rem 1rem',
//     minHeight: 'calc(100vh - 80px)',
//     overflowY: 'auto'
//   };

//   const mainContentStyle = {
//     flex: 1,
//     padding: '2rem',
//     overflowY: 'auto',
//     maxHeight: 'calc(100vh - 80px)'
//   };

//   const rightPanelStyle = {
//     width: '320px',
//     background: 'rgba(255, 255, 255, 0.09)',
//     backdropFilter: 'blur(20px)',
//     borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
//     padding: '2rem',
//     overflowY: 'auto',
//     maxHeight: 'calc(100vh - 80px)'
//   };

//   const cardStyle = {
//     background: 'rgba(255, 255, 255, 0.95)',
//     backdropFilter: 'blur(20px)',
//     borderRadius: '16px',
//     border: 'none',
//     color: '#333',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
//   };

//   const renderDashboard = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//       {/* Hero Section avec Workout Timer */}
//       <div style={{
//         background: 'linear-gradient(135deg, #fb7a4bff 0%, #f89c33ff 100%)',
//         borderRadius: '20px',
//         padding: '2rem',
//         color: '#ffffffff',
//         position: 'relative',
//         overflow: 'hidden',
//         boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
//       }}>
//         <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div>
//             <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
//               Suivez votre Parcours Fitness
//             </h2>
//             <p style={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
//               Surveillez vos entraînements, votre nutrition et vos progrès en un seul endroit. 
//               Restez motivé et atteignez vos objectifs fitness.
//             </p>
//             {refreshing && (
//               <div style={{ marginTop: '1rem', opacity: 0.8 }}>
//                 <span>🔄 Actualisation des données...</span>
//               </div>
//             )}
//           </div>
//           <div style={{ textAlign: 'center' }}>
//             <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
//               {formatTime(workoutTime)}
//             </div>
//             <button
//               onClick={handleWorkoutToggle}
//               disabled={refreshing}
//               style={{
//                 background: isWorkoutActive ? '#ef4444' : '#22c55e',
//                 color: '#ffffffff',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '8px',
//                 cursor: refreshing ? 'not-allowed' : 'pointer',
//                 fontWeight: 600,
//                 opacity: refreshing ? 0.6 : 1
//               }}
//             >
//               {isWorkoutActive ? 'Arrêter' : 'Démarrer'} Workout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards avec données réelles */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
//         {[
//           { 
//             title: "Workout d'aujourd'hui", 
//             value: `${dashboardData.stats.todayWorkout || 0} min`, 
//             subtitle: `${workoutTime > 0 ? `+${formatTime(workoutTime)} en cours` : 'Minutes d\'entraînement'}`, 
//             icon: '💪', 
//             bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' 
//           },
//           { 
//             title: 'Calories Brûlées', 
//             value: (dashboardData.stats.caloriesBurned || 0).toLocaleString(), 
//             subtitle: `${Math.floor(workoutTime * 0.1)} cal en cours`, 
//             icon: '🔥', 
//             bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' 
//           },
//           { 
//             title: 'Pas Quotidiens', 
//             value: (dashboardData.stats.dailySteps || 0).toLocaleString(), 
//             subtitle: `${Math.max(0, 10000 - (dashboardData.stats.dailySteps || 0))} vers l'objectif`, 
//             icon: '👟', 
//             bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' 
//           },
//           { 
//             title: 'Hydratation', 
//             value: `${dashboardData.stats.waterIntake || 0}L`, 
//             subtitle: `${Math.max(0, 3 - (dashboardData.stats.waterIntake || 0)).toFixed(1)}L restant`, 
//             icon: '💧', 
//             bg: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)' 
//           }
//         ].map((stat, index) => (
//           <div key={index} style={{
//             background: stat.bg,
//             borderRadius: '16px',
//             padding: '1.5rem',
//             color: '#fdfcfcff',
//             boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
//             transition: 'transform 0.3s ease',
//             cursor: 'pointer'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//           onClick={() => {
//             if (index === 0) navigateToPage('workouts');
//             if (index === 1) navigateToPage('progresspages');
//             // if (index === 2) navigateToPage('progress');
//             if (index === 3) navigateToPage('nutrition');
//           }}
//           >
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div>
//                 <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>{stat.title}</p>
//                 <p style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.5rem 0' }}>{stat.value}</p>
//                 <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>{stat.subtitle}</p>
//               </div>
//               <div style={{
//                 background: 'rgba(255, 255, 255, 0.2)',
//                 padding: '12px',
//                 borderRadius: '12px',
//                 fontSize: '2rem'
//               }}>
//                 {stat.icon}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section avec données réelles */}
//       <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
//         <div style={{
//           ...cardStyle,
//           padding: '1.5rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
//             <h5 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Progrès Hebdomadaire</h5>
//             <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//               <select style={{
//                 background: 'rgba(0, 0, 0, 0.05)',
//                 border: '1px solid rgba(0, 0, 0, 0.1)',
//                 borderRadius: '8px',
//                 padding: '0.5rem',
//                 fontSize: '0.9rem'
//               }}>
//                 <option>Cette semaine</option>
//                 <option>Semaine dernière</option>
//                 <option>Ce mois</option>
//               </select>
//               <button 
//                 onClick={handleRefresh}
//                 disabled={refreshing}
//                 style={{
//                   background: 'rgba(0, 0, 0, 0.05)',
//                   border: 'none',
//                   borderRadius: '8px',
//                   padding: '0.5rem',
//                   cursor: refreshing ? 'not-allowed' : 'pointer',
//                   opacity: refreshing ? 0.6 : 1
//                 }}
//               >
//                 🔄
//               </button>
//             </div>
//           </div>
//           <div style={{ height: '300px' }}>
//             {dashboardData.weeklyProgress.length > 0 ? (
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={dashboardData.weeklyProgress}>
//                   <XAxis dataKey="day" />
//                   <YAxis />
//                   <Bar dataKey="workout" fill="#06b6d4" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="calories" fill="#f97316" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             ) : (
//               <div style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 height: '100%',
//                 color: '#666',
//                 flexDirection: 'column'
//               }}>
//                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
//                 <p>Aucune donnée disponible</p>
//                 <p style={{ fontSize: '0.9rem' }}>Commencez votre premier workout pour voir vos progrès</p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
//             <h6 style={{ margin: 0, fontWeight: 600 }}>Workouts Récents</h6>
//           </div>
//           <div style={{ padding: '1.5rem' }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {dashboardData.recentWorkouts.length > 0 ? (
//                 dashboardData.recentWorkouts.slice(0, 3).map((workout, index) => (
//                   <div key={workout._id || index} style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     padding: '0.75rem',
//                     background: 'rgba(0, 0, 0, 0.02)',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     transition: 'background 0.3s ease'
//                   }}
//                   onClick={() => navigate(`/workout/${workout._id}`)}
//                   onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'}
//                   onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.02)'}
//                   >
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                       <div style={{
//                         width: '40px',
//                         height: '40px',
//                         background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#666',
//                         fontSize: '1.2rem'
//                       }}>
//                         💪
//                       </div>
//                       <div>
//                         <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem' }}>
//                           {workout.name || 'Workout'}
//                         </p>
//                         <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
//                           {workout.duration || 0}min • {workout.exercises?.length || 0} exercices
//                         </p>
//                       </div>
//                     </div>
//                     <span style={{
//                       fontSize: '0.8rem',
//                       fontWeight: 600,
//                       color: '#f97316'
//                     }}>
//                       {workout.caloriesBurned || 0} cal
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ 
//                   textAlign: 'center', 
//                   color: '#666', 
//                   padding: '2rem 0'
//                 }}>
//                   <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💪</div>
//                   <p>Aucun workout récent</p>
//                   <button
//                     onClick={() => navigateToPage('workouts')}
//                     style={{
//                       background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                       color: 'white',
//                       border: 'none',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '0.9rem',
//                       marginTop: '0.5rem'
//                     }}
//                   >
//                     Commencer un workout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div style={containerStyle}>
//       {/* Navigation */}
//       <nav style={navbarStyle}>
//         <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 1.5rem' }}>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>💪</span>
//               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 <span style={{ color: '#ff6b35' }}>JuniorFitness</span>
//               </span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//               <div style={{ position: 'relative' }}>
//                 <input 
//                   type="text" 
//                   placeholder="Rechercher exercices, repas..." 
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '20px',
//                     padding: '8px 16px 8px 35px',
//                     color: 'white',
//                     outline: 'none',
//                     width: '250px'
//                   }}
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter') {
//                       // Implémentation de la recherche
//                       console.log('Recherche:', e.target.value);
//                     }
//                   }}
//                 />
//                 <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.7)' }}>
//                   🔍
//                 </span>
//               </div>
//               <button onClick={toggleDarkMode} style={{
//                 padding: '8px',
//                 borderRadius: '50%',
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: 'none',
//                 color: 'white',
//                 cursor: 'pointer',
//                 fontSize: '1rem'
//               }}>
//                 {darkMode ? '☀️' : '🌙'}
//               </button>
//               <button style={{
//                 padding: '8px',
//                 borderRadius: '50%',
//                 background: 'rgba(8, 0, 0, 0.1)',
//                 border: 'none',
//                 color: 'white',
//                 cursor: 'pointer',
//                 fontSize: '1rem'
//               }}>🔔</button>
//               <button onClick={() => navigate('/profile')} style={{
//                 padding: '8px',
//                 borderRadius: '50%',
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: 'none',
//                 color: 'white',
//                 cursor: 'pointer',
//                 fontSize: '1rem'
//               }}>⚙️</button>
//               <div style={{ 
//                 width: '35px', 
//                 height: '35px', 
//                 borderRadius: '50%', 
//                 border: '2px solid #ff6b35', 
//                 overflow: 'hidden',
//                 cursor: 'pointer'
//               }}
//               onClick={() => navigate('/profile')}
//               >
//                 <img 
//                   src={user?.avatar || user?.profilePicture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'} 
//                   alt="Avatar" 
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face';
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div style={{ display: 'flex' }}>
//         {/* Sidebar */}
//         <div style={sidebarStyle}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//             {[
//               { id: 'dashboard', icon: '📊', label: 'Dashboard' },
//               { id: 'workouts', icon: '💪', label: 'Workouts' },
//               { id: 'exercises', icon: '🏋️‍♀️', label: 'Exercices' },
//               { id: 'nutrition', icon: '🍽️', label: 'Nutrition' },
//               { id: 'progress', icon: '📈', label: 'Progress' },
//               { id: 'challenges', icon: '🎯', label: 'Défis' },
//               { id: 'community', icon: '👥', label: 'Communauté' },
//               { id: 'profile', icon: '👤', label: 'Profil' }
//             ].map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => navigateToPage(item.id)}
//                 style={{
//                   width: '100%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.75rem',
//                   padding: '0.8rem 1rem',
//                   borderRadius: '12px',
//                   border: 'none',
//                   background: activeTab === item.id 
//                     ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' 
//                     : 'transparent',
//                   color: 'white',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   fontSize: '0.95rem'
//                 }}
//                 onMouseEnter={(e) => {
//                   // Suite du dashboard connecté à partir de la ligne interrompue

//                   if (activeTab !== item.id) {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (activeTab !== item.id) {
//                     e.currentTarget.style.background = 'transparent';
//                   }
//                 }}
//               >
//                 <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </div>
          
//           <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
//             <button style={{
//               width: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.75rem',
//               padding: '0.8rem 1rem',
//               borderRadius: '12px',
//               border: 'none',
//               background: 'transparent',
//               color: 'white',
//               cursor: 'pointer',
//               marginBottom: '0.5rem',
//               fontSize: '0.95rem'
//             }}
//             onClick={() => navigate('/help')}
//             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
//             onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
//             >
//               <span>❓</span>
//               <span>Aide & Support</span>
//             </button>
//             <button style={{
//               width: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.75rem',
//               padding: '0.8rem 1rem',
//               borderRadius: '12px',
//               border: 'none',
//               background: 'transparent',
//               color: 'white',
//               cursor: 'pointer',
//               fontSize: '0.95rem'
//             }}
//             onClick={handleLogout}
//             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
//             onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
//             >
//               <span>🚪</span>
//               <span>Déconnexion</span>
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={mainContentStyle}>
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div>
//                 <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
//                   {getGreeting()}, {user?.firstName || user?.name || 'Utilisateur'}
//                 </h2>
//                 <p style={{ margin: 0, color: 'rgba(12, 12, 12, 0.7)' }}>
//                   Prêt à atteindre vos objectifs fitness aujourd'hui ?
//                 </p>
//                 <div className="quote-card">
//               <p>{quote}</p>
//               </div>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//                 <div style={{
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   padding: '0.5rem 1rem',
//                   borderRadius: '20px',
//                   fontSize: '0.9rem'
//                 }}>
//                   <span style={{ color: '#fbbf24' }}>🔥</span>
//                   <span style={{ marginLeft: '0.5rem' }}>
//                     {user?.streak || 0} jour{(user?.streak || 0) > 1 ? 's' : ''} de suite
//                   </span>
//                 </div>
//                 <div style={{
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   padding: '0.5rem 1rem',
//                   borderRadius: '20px',
//                   fontSize: '0.9rem'
//                 }}>
//                   <span style={{ color: '#06b6d4' }}>⏰</span>
//                   <span style={{ marginLeft: '0.5rem' }}>
//                     {currentTime.toLocaleTimeString('fr-FR', { 
//                       hour: '2-digit', 
//                       minute: '2-digit' 
//                     })}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contenu dynamique basé sur l'onglet actif */}
//           {activeTab === 'dashboard' && renderDashboard()}
          
//           {activeTab === 'workoutsPages' && (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Mes Workouts</h3>
//                 <button style={{
//                   background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600
//                 }}
//                 onClick={() => navigate('/create-workout')}
//                 >
//                   + Créer Workout
//                 </button>
//               </div>
              
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
//                 {dashboardData.recentWorkouts.length > 0 ? (
//                   dashboardData.recentWorkouts.map(workout => (
//                     <div key={workout._id} style={{
//                       ...cardStyle,
//                       padding: '1.5rem',
//                       cursor: 'pointer',
//                       transition: 'transform 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//                     onClick={() => navigate(`/workoutsPage/${workout._id}`)}
//                     >
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                           borderRadius: '12px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: 'white',
//                           fontSize: '1.5rem'
//                         }}>
//                           💪
//                         </div>
//                         <div>
//                           <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
//                             {workout.name || 'Workout'}
//                           </h4>
//                           <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
//                             {new Date(workout.createdAt || workout.date).toLocaleDateString('fr-FR')}
//                           </p>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//                         <span style={{ color: '#666' }}>
//                           Durée: <strong>{workout.duration || 0} min</strong>
//                         </span>
//                         <span style={{ color: '#666' }}>
//                           Exercices: <strong>{workout.exercises?.length || 0}</strong>
//                         </span>
//                       </div>
//                       <div style={{
//                         background: 'linear-gradient(135deg, #f97316, #ea580c)',
//                         color: 'white',
//                         padding: '0.5rem',
//                         borderRadius: '8px',
//                         textAlign: 'center',
//                         fontWeight: 600
//                       }}>
//                         {workout.caloriesBurned || 0} calories brûlées
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div style={{ 
//                     gridColumn: '1 / -1',
//                     textAlign: 'center', 
//                     padding: '4rem 0',
//                     ...cardStyle
//                   }}>
//                     <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💪</div>
//                     <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun workout trouvé</h3>
//                     <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
//                       Commencez votre parcours fitness en créant votre premier workout personnalisé.
//                     </p>
//                     <button
//                       onClick={() => navigate('/create-workout')}
//                       style={{
//                         background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                         color: 'white',
//                         border: 'none',
//                         padding: '0.75rem 1.5rem',
//                         borderRadius: '8px',
//                         cursor: 'pointer',
//                         fontWeight: 600
//                       }}
//                     >
//                       Créer mon premier workout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === 'exercises' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏋️‍♀️</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bibliothèque d'Exercices</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Parcourez notre bibliothèque complète d'exercices avec des instructions détaillées, 
//                 muscles ciblés et niveaux de difficulté.
//               </p>
//               <button
//                 onClick={() => navigate('/exercises')}
//                 style={{
//                   background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600,
//                   marginTop: '2rem'
//                 }}
//               >
//                 Explorer les exercices
//               </button>
//             </div>
//           )}

//           {activeTab === 'nutrition' && (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Suivi Nutritionnel</h3>
//                 <button style={{
//                   background: 'linear-gradient(135deg, #22c55e, #16a34a)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600
//                 }}
//                 onClick={() => navigate('/nutrition/log-meal')}
//                 >
//                   + Ajouter Repas
//                 </button>
//               </div>

//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
//                 {dashboardData.nutritionData.length > 0 ? (
//                   dashboardData.nutritionData.map((meal, index) => (
//                     <div key={meal._id || index} style={{
//                       ...cardStyle,
//                       padding: '1.5rem'
//                     }}>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//                         <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
//                           {meal.meal || meal.name || 'Repas'}
//                         </h4>
//                         <span style={{ color: '#666', fontSize: '0.9rem' }}>
//                           {meal.time || new Date(meal.consumedAt).toLocaleTimeString('fr-FR', { 
//                             hour: '2-digit', 
//                             minute: '2-digit' 
//                           })}
//                         </span>
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//                         <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f97316' }}>
//                           {meal.calories || 0} cal
//                         </span>
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
//                         <span>Protéines: <strong>{meal.protein || 0}g</strong></span>
//                         <span>Glucides: <strong>{meal.carbs || 0}g</strong></span>
//                         <span>Lipides: <strong>{meal.fats || 0}g</strong></span>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div style={{ 
//                     gridColumn: '1 / -1',
//                     textAlign: 'center', 
//                     padding: '4rem 0',
//                     ...cardStyle
//                   }}>
//                     <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
//                     <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun repas enregistré</h3>
//                     <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
//                       Commencez à suivre votre nutrition en enregistrant vos repas quotidiens.
//                     </p>
//                     <button
//                       onClick={() => navigate('/nutrition/log-meal')}
//                       style={{
//                         background: 'linear-gradient(135deg, #22c55e, #16a34a)',
//                         color: 'white',
//                         border: 'none',
//                         padding: '0.75rem 1.5rem',
//                         borderRadius: '8px',
//                         cursor: 'pointer',
//                         fontWeight: 600
//                       }}
//                     >
//                       Ajouter mon premier repas
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === 'progress' && (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//               <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Suivi des Progrès</h3>
              
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
//                 {dashboardData.goals.length > 0 ? (
//                   dashboardData.goals.map(goal => (
//                     <div key={goal._id || goal.id} style={{
//                       ...cardStyle,
//                       padding: '1.5rem'
//                     }}>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//                         <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
//                           {goal.title || goal.name}
//                         </h4>
//                         <span style={{ fontSize: '0.9rem', color: '#666' }}>
//                           {goal.progress || 0}%
//                         </span>
//                       </div>
//                       <div style={{ marginBottom: '1rem' }}>
//                         <div style={{ 
//                           width: '100%', 
//                           height: '8px', 
//                           background: '#f3f4f6', 
//                           borderRadius: '4px',
//                           overflow: 'hidden'
//                         }}>
//                           <div style={{
//                             width: `${goal.progress || 0}%`,
//                             height: '100%',
//                             background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
//                             borderRadius: '4px',
//                             transition: 'width 0.5s ease'
//                           }}></div>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
//                         <span>Actuel: <strong>{goal.current || '0'}</strong></span>
//                         <span>Objectif: <strong>{goal.target || '0'}</strong></span>
//                       </div>
//                       <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666' }}>
//                         {goal.date || goal.deadline || 'Pas de date limite'}
//                       </p>
//                     </div>
//                   ))
//                 ) : (
//                   <div style={{ 
//                     gridColumn: '1 / -1',
//                     textAlign: 'center', 
//                     padding: '4rem 0',
//                     ...cardStyle
//                   }}>
//                     <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📈</div>
//                     <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun objectif défini</h3>
//                     <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
//                       Définissez vos objectifs fitness pour suivre vos progrès et rester motivé.
//                     </p>
//                     <button
//                       onClick={() => navigate('/goals')}
//                       style={{
//                         background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
//                         color: 'white',
//                         border: 'none',
//                         padding: '0.75rem 1.5rem',
//                         borderRadius: '8px',
//                         cursor: 'pointer',
//                         fontWeight: 600
//                       }}
//                     >
//                       Définir mes objectifs
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === 'challenges' && (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Défis Communautaires</h3>
//                 <button style={{
//                   background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600
//                 }}
//                 onClick={() => navigate('/challenges/join')}
//                 >
//                   Rejoindre un Défi
//                 </button>
//               </div>
              
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
//                 {dashboardData.challenges.length > 0 ? (
//                   dashboardData.challenges.map(challenge => (
//                     <div key={challenge._id || challenge.id} style={{
//                       ...cardStyle,
//                       padding: '1.5rem',
//                       cursor: 'pointer',
//                       transition: 'transform 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//                     onClick={() => navigate(`/challenge/${challenge._id}`)}
//                     >
//                       <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600 }}>
//                         {challenge.name || challenge.title}
//                       </h4>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
//                         <span>{challenge.participants || 0} participants</span>
//                         <span>{challenge.daysLeft || challenge.duration || 0} jours restants</span>
//                       </div>
//                       <div style={{ marginBottom: '1rem' }}>
//                         <div style={{ 
//                           width: '100%', 
//                           height: '6px', 
//                           background: '#f3f4f6', 
//                           borderRadius: '3px',
//                           overflow: 'hidden'
//                         }}>
//                           <div style={{
//                             width: `${challenge.progress || 0}%`,
//                             height: '100%',
//                             background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
//                             borderRadius: '3px',
//                             transition: 'width 0.5s ease'
//                           }}></div>
//                         </div>
//                       </div>
//                       <div style={{ textAlign: 'center' }}>
//                         <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#8b5cf6' }}>
//                           {challenge.progress || 0}% Terminé
//                         </span>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div style={{ 
//                     gridColumn: '1 / -1',
//                     textAlign: 'center', 
//                     padding: '4rem 0',
//                     ...cardStyle
//                   }}>
//                     <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
//                     <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun défi en cours</h3>
//                     <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
//                       Rejoignez la communauté et participez à des défis fitness motivants !
//                     </p>
//                     <button
//                       onClick={() => navigate('/challenges')}
//                       style={{
//                         background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//                         color: 'white',
//                         border: 'none',
//                         padding: '0.75rem 1.5rem',
//                         borderRadius: '8px',
//                         cursor: 'pointer',
//                         fontWeight: 600
//                       }}
//                     >
//                       Découvrir les défis
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === 'community' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Communauté Fitness</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Connectez-vous avec d'autres passionnés de fitness, partagez vos progrès et 
//                 trouvez la motivation dans la communauté.
//               </p>
//               <button
//                 onClick={() => navigate('/community')}
//                 style={{
//                   background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600,
//                   marginTop: '2rem'
//                 }}
//               >
//                 Rejoindre la communauté
//               </button>
//             </div>
//           )}

//           {activeTab === 'profile' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mon Profil</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Gérez vos informations personnelles, vos préférences fitness et les paramètres de votre compte.
//               </p>
//               <button
//                 onClick={() => navigate('/profile')}
//                 style={{
//                   background: 'linear-gradient(135deg, #f97316, #ea580c)',
//                   color: 'white',
//                   border: 'none',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontWeight: 600,
//                   marginTop: '2rem'
//                 }}
//               >
//                 Modifier mon profil
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Panel - Panneau de droite avec informations contextuelles */}
//         <div style={rightPanelStyle}>
//           {/* Programme du jour */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>Programme du Jour</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}
//               onClick={() => navigate('/schedule')}
//               >
//                 Tout voir →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//               {dashboardData.schedule.length > 0 ? (
//                 dashboardData.schedule.slice(0, 3).map(item => (
//                   <div key={item._id || item.id} style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.75rem',
//                     padding: '1rem',
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     borderRadius: '12px',
//                     cursor: 'pointer',
//                     transition: 'background 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
//                   onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
//                   onClick={() => navigate(`/workout/${item.workoutId || item.id}`)}
//                   >
//                     <div style={{
//                       width: '40px',
//                       height: '40px',
//                       background: item.type === 'strength' ? 
//                         'linear-gradient(135deg, #ff6b35, #f7931e)' : 
//                         'linear-gradient(135deg, #22c55e, #16a34a)',
//                       borderRadius: '8px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '1.2rem'
//                     }}>
//                       {item.icon || (item.type === 'strength' ? '💪' : '🧘‍♀️')}
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>
//                         {item.exercise || item.name || 'Exercice'}
//                       </div>
//                       <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
//                         À {item.time || item.scheduledTime || '08:00'}
//                       </div>
//                     </div>
//                     <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>
//                       {item.duration || '30 min'}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ 
//                   textAlign: 'center', 
//                   color: 'rgba(255, 255, 255, 0.7)', 
//                   padding: '2rem 0',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   borderRadius: '12px'
//                 }}>
//                   <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
//                   <p style={{ margin: 0, fontSize: '0.9rem',color: '#fcf9f9ff' }}>Aucun programme prévu</p>
//                   <button
//                     onClick={() => navigate('/schedule')}
//                     style={{
//                       background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                       color: 'white',
//                       border: 'none',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '0.8rem',
//                       marginTop: '1rem'
//                     }}
//                   >
//                     Planifier
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Objectifs Fitness */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>Objectifs Fitness</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}
//               onClick={() => navigate('/goals')}
//               >
//                 Gérer →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {dashboardData.goals.length > 0 ? (
//                 dashboardData.goals.slice(0, 2).map(goal => (
//                   <div key={goal._id || goal.id} style={{
//                     padding: '1rem',
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     borderRadius: '12px'
//                   }}>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
//                       <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>
//                         {goal.title || goal.name}
//                       </span>
//                       <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>
//                         {goal.progress || 0}%
//                       </span>
//                     </div>
//                     <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.75rem' }}>
//                       Actuel: {goal.current || '0'} / Objectif: {goal.target || '0'}
//                     </div>
//                     <div style={{ 
//                       width: '100%', 
//                       height: '6px', 
//                       background: 'rgba(255, 255, 255, 0.2)', 
//                       borderRadius: '3px',
//                       overflow: 'hidden'
//                     }}>
//                       <div style={{
//                         width: `${goal.progress || 0}%`,
//                         height: '100%',
//                         background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 100%)',
//                         borderRadius: '3px',
//                         transition: 'width 0.5s ease'
//                       }}></div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ 
//                   textAlign: 'center', 
//                   color: 'rgba(255, 255, 255, 0.7)', 
//                   padding: '2rem 0',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   borderRadius: '12px'
//                 }}>
//                   <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
//                   <p style={{ margin: 0, fontSize: '0.9rem',color: '#fcfcfcff' }}>Aucun objectif défini</p>
//                   <button
//                     onClick={() => navigate('/goals')}
//                     style={{
//                       background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                       color: 'white',
//                       border: 'none',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '0.8rem',
//                       marginTop: '1rem'
//                     }}
//                   >
//                     Définir objectifs
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Statistiques Rapides */}
//           <div style={{ marginBottom: '2rem' }}>
//             <h6 style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Statistiques Rapides</h6>
//             <div style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '12px',
//               padding: '1rem'
//             }}>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Workouts cette semaine</span>
//                   <span style={{ fontWeight: 600, color: '#ff6b35' }}>
//                     {dashboardData.recentWorkouts.filter(w => {
//                       const weekAgo = new Date();
//                       weekAgo.setDate(weekAgo.getDate() - 7);
//                       return new Date(w.createdAt || w.date) >= weekAgo;
//                     }).length}/7
//                   </span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Défis actifs</span>
//                   <span style={{ fontWeight: 600, color: '#8b5cf6' }}>
//                     {dashboardData.challenges.filter(c => c.status === 'active' || !c.status).length}
//                   </span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Total workouts</span>
//                   <span style={{ fontWeight: 600, color: '#06b6d4' }}>
//                     {dashboardData.recentWorkouts.length}
//                   </span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Calories ce mois</span>
//                   <span style={{ fontWeight: 600, color: '#f97316' }}>
//                     {dashboardData.recentWorkouts.reduce((total, workout) => 
//                       total + (workout.caloriesBurned || 0), 0
//                     ).toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Motivation & Conseils */}
//           <div style={{ marginBottom: '2rem' }}>
//             <h6 style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Conseil du Jour</h6>
//             <div style={{
//               background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
//               borderRadius: '12px',
//               padding: '1rem',
//               color: 'white'
//             }}>
//               <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>💡</div>
//               <p style={{ 
//                 fontSize: '0.9rem', 
//                 lineHeight: 1.4, 
//                 margin: 0,
//                 textAlign: 'center'
//               }}>
//                 {[
//                   "L'hydratation est clé pour de meilleures performances !",
//                   "30 minutes d'exercice valent mieux qu'aucun exercice.",
//                   "La régularité bat l'intensité sur le long terme.",
//                   "Écoutez votre corps et respectez vos temps de repos.",
//                   "Chaque petit progrès compte vers votre objectif final."
//                 ][Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % 5]}
//               </p>
//             </div>
//           </div>

//           {/* Upgrade Premium */}
//           <div style={{
//             background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
//             padding: '1.5rem',
//             borderRadius: '16px',
//             color: 'white'
//           }}>
//             <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
//               <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
//               <h6 style={{ fontWeight: 700, marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
//                 Passer à Premium
//               </h6>
//             </div>
//             <p style={{ 
//               fontSize: '0.85rem', 
//               opacity: 0.9, 
//               marginBottom: '1rem', 
//               lineHeight: 1.4,
//               margin: '0 0 1rem 0',
//               textAlign: 'center'
//             }}>
//               Débloquez des programmes personnalisés, des analyses avancées et un support prioritaire
//             </p>
//             <button style={{
//               background: '#fbbf24',
//               color: '#92400e',
//               border: 'none',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '8px',
//               fontWeight: 600,
//               cursor: 'pointer',
//               width: '100%',
//               transition: 'background 0.3s ease'
//             }}
//             onClick={() => navigate('/premium')}
//             onMouseEnter={(e) => e.currentTarget.style.background = '#f59e0b'}
//             onMouseLeave={(e) => e.currentTarget.style.background = '#fbbf24'}
//             >
//               Découvrir Premium
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Loading Overlay pendant le refresh */}
//       {refreshing && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'rgba(0, 0, 0, 0.5)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           zIndex: 9999
//         }}>
//           <div style={{
//             background: 'white',
//             padding: '2rem',
//             borderRadius: '12px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem'
//           }}>
//             <LoadingSpinner size="small" />
//             <span style={{ color: '#333' }}>Actualisation des données...</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

// HOOKS
import { useAuth } from '../../hooks/useAuth';
import { useWorkouts } from '../../hooks/useWorkouts';
import { useFitnessData } from '../../hooks/useFitnessData';
import { useNotification } from '../../hooks/useNotification';

// SERVICES
import { fitnessService } from '../../services/fitnessService';
import { workoutService } from '../../services/workoutService';
import userService from '../../services/userService';
import { challengeService } from '../../services/challengeService';

// COMPONENTS
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import StatsCard from '../../components/fitness/StatsCard/StatsCard';
import WorkoutsPage from "../WorkoutsPage/WorkoutsPage";
import Nutrition from "../Nutrition/Nutrition";

import ProgressPage from "../ProgressPage/ProgressPage";
import ChallengesPage from '../ChallengesPage/ChallengesPage';
import { getRandomQuote } from "../../utils/motivationalQuotes";

const Dashboard = () => {
  const quote = getRandomQuote();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { workouts, loading: workoutsLoading } = useWorkouts();
  const { fitnessData, loading: fitnessLoading } = useFitnessData();
  const { showNotification } = useNotification();

  // États locaux
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // États pour les données avec valeurs par défaut
  const [dashboardData, setDashboardData] = useState({
    stats: {
      todayWorkout: 0,
      caloriesBurned: 0,
      dailySteps: 0,
      waterIntake: 0
    },
    weeklyProgress: [],
    recentWorkouts: [],
    schedule: [],
    goals: [],
    challenges: [],
    nutritionData: []
  });

  // Vérification de l'authentification
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Fonction pour charger toutes les données du dashboard
  const loadDashboardData = useCallback(async () => {
    if (!user?.id) return;
    
    setIsLoading(true);
    setRefreshing(true);
    
    try {
      // Appels API parallèles pour optimiser les performances
      const requests = [
        fitnessService.getUserStats?.(user.id),
        fitnessService.getWeeklyProgress?.(user.id),
        workoutService.getRecentWorkouts?.(user.id),
        userService.getUserGoals?.(user.id),
        challengeService.getUserChallenges?.(user.id),
        fitnessService.getNutritionData?.(user.id),
        userService.getUserSchedule?.(user.id)
      ];

      const results = await Promise.allSettled(requests.filter(Boolean));
      
      // Traitement des résultats avec gestion d'erreur
      const [
        userStatsResult,
        weeklyDataResult,
        recentWorkoutsResult,
        userGoalsResult,
        userChallengesResult,
        nutritionDataResult,
        scheduleDataResult
      ] = results;

      setDashboardData(prevData => ({
        stats: userStatsResult?.status === 'fulfilled' ? userStatsResult.value?.data || prevData.stats : prevData.stats,
        weeklyProgress: weeklyDataResult?.status === 'fulfilled' ? weeklyDataResult.value?.data || [] : [],
        recentWorkouts: recentWorkoutsResult?.status === 'fulfilled' ? recentWorkoutsResult.value?.data || [] : [],
        goals: userGoalsResult?.status === 'fulfilled' ? userGoalsResult.value?.data || [] : [],
        challenges: userChallengesResult?.status === 'fulfilled' ? userChallengesResult.value?.data || [] : [],
        nutritionData: nutritionDataResult?.status === 'fulfilled' ? nutritionDataResult.value?.data || [] : [],
        schedule: scheduleDataResult?.status === 'fulfilled' ? scheduleDataResult.value?.data || [] : []
      }));

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
      showNotification?.('Erreur lors du chargement des données', 'error');
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [user?.id, showNotification]);

  // Chargement des données au montage et à chaque changement d'utilisateur
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      loadDashboardData();
    }
  }, [isAuthenticated, user?.id, loadDashboardData]);

  // Timer pour l'horloge et le workout
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (isWorkoutActive) {
        setWorkoutTime(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorkoutActive]);

  // Sauvegarde du mode sombre
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Fonction de refresh manuel
  const handleRefresh = useCallback(() => {
    loadDashboardData();
    showNotification?.('Données actualisées', 'success');
  }, [loadDashboardData, showNotification]);

  // Gestion du workout timer
  const handleWorkoutToggle = async () => {
    try {
      if (!isWorkoutActive) {
        // Démarrer un workout
        await workoutService.startWorkout?.(user.id);
        setIsWorkoutActive(true);
        setWorkoutTime(0);
        showNotification?.('Workout commencé !', 'success');
      } else {
        // Arrêter le workout
        const workoutData = {
          userId: user.id,
          duration: workoutTime,
          caloriesBurned: Math.floor(workoutTime * 0.1),
          completedAt: new Date()
        };
        
        await workoutService.endWorkout?.(workoutData);
        setIsWorkoutActive(false);
        showNotification?.(`Workout terminé ! ${formatTime(workoutTime)}`, 'success');
        
        // Recharger les données après la fin du workout
        setTimeout(() => loadDashboardData(), 1000);
      }
    } catch (error) {
      console.error('Erreur workout:', error);
      showNotification?.('Erreur lors de la gestion du workout', 'error');
    }
  };

  // Gestion de la déconnexion
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      showNotification?.('Erreur lors de la déconnexion', 'error');
    }
  };

  // Navigation vers les différentes pages - CORRIGÉ
  const navigateToPage = (page) => {
    const routes = {
      'dashboard': () => setActiveTab('dashboard'),
      'workouts': () => setActiveTab('workouts'),
      'exercises': '/exercises',
      // 'nutrition': '/nutrition',
      'nutrition': () => setActiveTab('nutrition'),
      'progress': () => setActiveTab('progress'),
      'challenges': () => setActiveTab('challenges'),
      'community': '/community',
      'profile': '/profile'
    };
    
    if (typeof routes[page] === 'function') {
      routes[page]();
    } else if (routes[page]) {
      navigate(routes[page]);
    }
  };

  // Utilitaires
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 17) return 'Bon après-midi';
    return 'Bonsoir';
  };

  // Affichage du loading initial
  if (isLoading && !dashboardData.stats) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: darkMode ? '#1a1a2e' : '#f8fafc'
      }}>
        <LoadingSpinner />
      </div>
    );
  }

  // Styles responsives
  const containerStyle = {
    background: darkMode 
      ? 'linear-gradient(135deg, #090941ff 0%, #10023bff 100%)' 
      : 'linear-gradient(135deg, #0f0fb1ff 0%, #240457ff 100%)',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#fefdfdff',
    overflow: 'hidden'
  };

  const navbarStyle = {
    background: 'rgba(65, 39, 141, 0.93)',
    backdropFilter: 'blur(20px)',
    color: 'black',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const sidebarStyle = {
    width: '250px',
    background: 'rgba(3, 2, 63, 0.79)',
    backdropFilter: 'blur(20px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem 1rem',
    minHeight: 'calc(100vh - 80px)',
    overflowY: 'auto'
  };

  const mainContentStyle = {
    flex: 1,
    padding: '2rem',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 80px)'
  };

  const rightPanelStyle = {
    width: '320px',
    background: 'rgba(255, 255, 255, 0.09)',
    backdropFilter: 'blur(20px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 80px)'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: 'none',
    color: '#333',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  const renderDashboard = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Hero Section avec Workout Timer */}
      <div style={{
        background: 'linear-gradient(135deg, #fb7a4bff 0%, #f89c33ff 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: '#ffffffff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
      }}>
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
              Suivez votre Parcours Fitness
            </h2>
            <p style={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
              Surveillez vos entraînements, votre nutrition et vos progrès en un seul endroit. 
              Restez motivé et atteignez vos objectifs fitness.
            </p>
            {refreshing && (
              <div style={{ marginTop: '1rem', opacity: 0.8 }}>
                <span>🔄 Actualisation des données...</span>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {formatTime(workoutTime)}
            </div>
            <button
              onClick={handleWorkoutToggle}
              disabled={refreshing}
              style={{
                background: isWorkoutActive ? '#ef4444' : '#22c55e',
                color: '#ffffffff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: refreshing ? 'not-allowed' : 'pointer',
                fontWeight: 600,
                opacity: refreshing ? 0.6 : 1
              }}
            >
              {isWorkoutActive ? 'Arrêter' : 'Démarrer'} Workout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards utilisant le composant StatsCard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <StatsCard
          title="Workout d'aujourd'hui"
          value={`${dashboardData.stats.todayWorkout || 0} min`}
          subtitle={`${workoutTime > 0 ? `+${formatTime(workoutTime)} en cours` : 'Minutes d\'entraînement'}`}
          icon="💪"
          color="primary"
          onClick={() => navigateToPage('workouts')}
        />
        <StatsCard
          title="Calories Brûlées"
          value={(dashboardData.stats.caloriesBurned || 0).toLocaleString()}
          subtitle={`${Math.floor(workoutTime * 0.1)} cal en cours`}
          icon="🔥"
          color="warning"
          onClick={() => navigateToPage('progress')}
        />
        <StatsCard
          title="Pas Quotidiens"
          value={(dashboardData.stats.dailySteps || 0).toLocaleString()}
          subtitle={`${Math.max(0, 10000 - (dashboardData.stats.dailySteps || 0))} vers l'objectif`}
          icon="👟"
          color="info"
          onClick={() => navigateToPage('progress')}
        />
        <StatsCard
          title="Hydratation"
          value={`${dashboardData.stats.waterIntake || 0}L`}
          subtitle={`${Math.max(0, 3 - (dashboardData.stats.waterIntake || 0)).toFixed(1)}L restant`}
          icon="💧"
          color="success"
          onClick={() => navigateToPage('/nutrition')}
        />
      </div>

      {/* Charts Section avec données réelles */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{
          ...cardStyle,
          padding: '1.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h5 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Progrès Hebdomadaire</h5>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <select style={{
                background: 'rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <option>Cette semaine</option>
                <option>Semaine dernière</option>
                <option>Ce mois</option>
              </select>
              <button 
                onClick={handleRefresh}
                disabled={refreshing}
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: refreshing ? 'not-allowed' : 'pointer',
                  opacity: refreshing ? 0.6 : 1
                }}
              >
                🔄
              </button>
            </div>
          </div>
          <div style={{ height: '300px' }}>
            {dashboardData.weeklyProgress.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.weeklyProgress}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Bar dataKey="workout" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="calories" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                color: '#666',
                flexDirection: 'column'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                <p>Aucune donnée disponible</p>
                <p style={{ fontSize: '0.9rem' }}>Commencez votre premier workout pour voir vos progrès</p>
              </div>
            )}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <h6 style={{ margin: 0, fontWeight: 600 }}>Workouts Récents</h6>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dashboardData.recentWorkouts.length > 0 ? (
                dashboardData.recentWorkouts.slice(0, 3).map((workout, index) => (
                  <div key={workout._id || index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem',
                    background: 'rgba(0, 0, 0, 0.02)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onClick={() => navigate(`/workout/${workout._id}`)}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.02)'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '1.2rem'
                      }}>
                        💪
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem' }}>
                          {workout.name || 'Workout'}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
                          {workout.duration || 0}min • {workout.exercises?.length || 0} exercices
                        </p>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#f97316'
                    }}>
                      {workout.caloriesBurned || 0} cal
                    </span>
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  color: '#666', 
                  padding: '2rem 0'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💪</div>
                  <p>Aucun workout récent</p>
                  <button
                    onClick={() => navigateToPage('workouts')}
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    Commencer un workout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navbarStyle}>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>💪</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span style={{ color: '#ff6b35' }}>JuniorFitness</span>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="Rechercher exercices, repas..." 
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '8px 16px 8px 35px',
                    color: 'white',
                    outline: 'none',
                    width: '250px'
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Recherche:', e.target.value);
                    }
                  }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.7)' }}>
                  🔍
                </span>
              </div>
              <button onClick={toggleDarkMode} style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'rgba(8, 0, 0, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>🔔</button>
              <button onClick={() => navigate('/profile')} style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>⚙️</button>
              <div style={{ 
                width: '35px', 
                height: '35px', 
                borderRadius: '50%', 
                border: '2px solid #ff6b35', 
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/profile')}
              >
                <img 
                  src={user?.avatar || user?.profilePicture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'} 
                  alt="Avatar" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { id: 'dashboard', icon: '📊', label: 'Dashboard' },
              { id: 'workouts', icon: '💪', label: 'Workouts' },
              { id: 'exercises', icon: '🏋️‍♀️', label: 'Exercices' },
              { id: 'nutrition', icon: '🍽️', label: 'Nutrition' },
              { id: 'progress', icon: '📈', label: 'Progress' },
              { id: 'challenges', icon: '🎯', label: 'Défis' },
              { id: 'community', icon: '👥', label: 'Communauté' },
              { id: 'profile', icon: '👤', label: 'Profil' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeTab === item.id 
                    ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' 
                    : 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.8rem 1rem',
              borderRadius: '12px',
              border: 'none',
              background: 'transparent',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
            onClick={handleLogout}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span>🚪</span>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={mainContentStyle}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                  {getGreeting()}, {user?.firstName || user?.name || 'Utilisateur'}
                </h2>
                <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
                  Prêt à atteindre vos objectifs fitness aujourd'hui ?
                </p>
                {/* <div className="quote-card">
                  <p >{quote}</p>
                </div> */}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#fbbf24' }}>🔥</span>
                  <span style={{ marginLeft: '0.5rem' }}>
                    {user?.streak || 0} jour{(user?.streak || 0) > 1 ? 's' : ''} de suite
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#06b6d4' }}>⏰</span>
                  <span style={{ marginLeft: '0.5rem' }}>
                    {currentTime.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu dynamique basé sur l'onglet actif */}
          {activeTab === 'dashboard' && renderDashboard()}
          
          {/* Utilisation du composant WorkoutsPage */}
          {activeTab === 'workouts' && (
            <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', minHeight: '500px' }}>
              <WorkoutsPage />
            </div>
          )}

          {/* Utilisation du composant ProgressPage */}
          {activeTab === 'progress' && (
            <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', minHeight: '500px' }}>
              <ProgressPage />
            </div>
          )}

          {/* Utilisation du composant ChallengesPage */}
          {activeTab === 'challenges' && (
            <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', minHeight: '500px' }}>
              <ChallengesPage />
            </div>
          )}

          {activeTab === 'exercises' && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏋️‍♀️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bibliothèque d'Exercices</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
                Parcourez notre bibliothèque complète d'exercices avec des instructions détaillées, 
                muscles ciblés et niveaux de difficulté.
              </p>
              <button
                onClick={() => navigate('/exercises')}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  marginTop: '2rem'
                }}
              >
                Explorer les exercices
              </button>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Suivi Nutritionnel</h3>
                <button style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                onClick={() => navigate('/nutrition/log-meal')}
                >
                  + Ajouter Repas
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {dashboardData.nutritionData.length > 0 ? (
                  dashboardData.nutritionData.map((meal, index) => (
                    <div key={meal._id || index} style={{
                      ...cardStyle,
                      padding: '1.5rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                          {meal.meal || meal.name || 'Repas'}
                        </h4>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>
                          {meal.time || new Date(meal.consumedAt).toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f97316' }}>
                          {meal.calories || 0} cal
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                        <span>Protéines: <strong>{meal.protein || 0}g</strong></span>
                        <span>Glucides: <strong>{meal.carbs || 0}g</strong></span>
                        <span>Lipides: <strong>{meal.fats || 0}g</strong></span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ 
                    gridColumn: '1 / -1',
                    textAlign: 'center', 
                    padding: '4rem 0',
                    ...cardStyle
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun repas enregistré</h3>
                    <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                      Commencez à suivre votre nutrition en enregistrant vos repas quotidiens.
                    </p>
                    <button
                      onClick={() => navigate('/nutrition/log-meal')}
                      style={{
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Ajouter mon premier repas
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Communauté Fitness</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
                Connectez-vous avec d'autres passionnés de fitness, partagez vos progrès et 
                trouvez la motivation dans la communauté.
              </p>
              <button
                onClick={() => navigate('/community')}
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  marginTop: '2rem'
                }}
              >
                Rejoindre la communauté
              </button>
            </div>
          )}

          {activeTab === 'profile' && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mon Profil</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
                Gérez vos informations personnelles, vos préférences fitness et les paramètres de votre compte.
              </p>
              <button
                onClick={() => navigate('/profile')}
                style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  marginTop: '2rem'
                }}
              >
                Modifier mon profil
              </button>
            </div>
          )}
        </div>

        {/* Right Panel - Panneau de droite avec informations contextuelles */}
        <div style={rightPanelStyle}>
          {/* Programme du jour */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h6 style={{ margin: 0, fontWeight: 600 }}>Programme du Jour</h6>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                color: '#ff6b35', 
                cursor: 'pointer', 
                fontSize: '0.85rem' 
              }}
              onClick={() => navigate('/schedule')}
              >
                Tout voir →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {dashboardData.schedule.length > 0 ? (
                dashboardData.schedule.slice(0, 3).map(item => (
                  <div key={item._id || item.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                  onClick={() => navigate(`/workout/${item.workoutId || item.id}`)}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: item.type === 'strength' ? 
                        'linear-gradient(135deg, #ff6b35, #f7931e)' : 
                        'linear-gradient(135deg, #22c55e, #16a34a)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem'
                    }}>
                      {item.icon || (item.type === 'strength' ? '💪' : '🧘‍♀️')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                        {item.exercise || item.name || 'Exercice'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                        À {item.time || item.scheduledTime || '08:00'}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>
                      {item.duration || '30 min'}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  padding: '2rem 0',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#fcf9f9ff' }}>Aucun programme prévu</p>
                  <button
                    onClick={() => navigate('/schedule')}
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      marginTop: '1rem'
                    }}
                  >
                    Planifier
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Objectifs Fitness */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h6 style={{ margin: 0, fontWeight: 600 }}>Objectifs Fitness</h6>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                color: '#ff6b35', 
                cursor: 'pointer', 
                fontSize: '0.85rem' 
              }}
              onClick={() => navigate('/goals')}
              >
                Gérer →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dashboardData.goals.length > 0 ? (
                dashboardData.goals.slice(0, 2).map(goal => (
                  <div key={goal._id || goal.id} style={{
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                        {goal.title || goal.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>
                        {goal.progress || 0}%
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.75rem' }}>
                      Actuel: {goal.current || '0'} / Objectif: {goal.target || '0'}
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '6px', 
                      background: 'rgba(255, 255, 255, 0.2)', 
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${goal.progress || 0}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 100%)',
                        borderRadius: '3px',
                        transition: 'width 0.5s ease'
                      }}></div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  padding: '2rem 0',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#fcfcfcff' }}>Aucun objectif défini</p>
                  <button
                    onClick={() => navigate('/goals')}
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      marginTop: '1rem'
                    }}
                  >
                    Définir objectifs
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Statistiques Rapides */}
          <div style={{ marginBottom: '2rem' }}>
            <h6 style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Statistiques Rapides</h6>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Workouts cette semaine</span>
                  <span style={{ fontWeight: 600, color: '#ff6b35' }}>
                    {dashboardData.recentWorkouts.filter(w => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(w.createdAt || w.date) >= weekAgo;
                    }).length}/7
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Défis actifs</span>
                  <span style={{ fontWeight: 600, color: '#8b5cf6' }}>
                    {dashboardData.challenges.filter(c => c.status === 'active' || !c.status).length}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Total workouts</span>
                  <span style={{ fontWeight: 600, color: '#06b6d4' }}>
                    {dashboardData.recentWorkouts.length}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Calories ce mois</span>
                  <span style={{ fontWeight: 600, color: '#f97316' }}>
                    {dashboardData.recentWorkouts.reduce((total, workout) => 
                      total + (workout.caloriesBurned || 0), 0
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Motivation & Conseils */}
          <div style={{ marginBottom: '2rem' }}>
            <h6 style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Conseil du Jour</h6>
            <div style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              borderRadius: '12px',
              padding: '1rem',
              color: 'white'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>💡</div>
              <p style={{ 
                fontSize: '0.9rem', 
                lineHeight: 1.4, 
                margin: 0,
                textAlign: 'center'
              }}>
                {[
                  "L'hydratation est clé pour de meilleures performances !",
                  "30 minutes d'exercice valent mieux qu'aucun exercice.",
                  "La régularité bat l'intensité sur le long terme.",
                  "Écoutez votre corps et respectez vos temps de repos.",
                  "Chaque petit progrès compte vers votre objectif final."
                ][Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % 5]}
              </p>
            </div>
          </div>

          {/* Upgrade Premium */}
          <div style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            padding: '1.5rem',
            borderRadius: '16px',
            color: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
              <h6 style={{ fontWeight: 700, marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                Passer à Premium
              </h6>
            </div>
            <p style={{ 
              fontSize: '0.85rem', 
              opacity: 0.9, 
              marginBottom: '1rem', 
              lineHeight: 1.4,
              margin: '0 0 1rem 0',
              textAlign: 'center'
            }}>
              Débloquez des programmes personnalisés, des analyses avancées et un support prioritaire
            </p>
            <button style={{
              background: '#fbbf24',
              color: '#92400e',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              transition: 'background 0.3s ease'
            }}
            onClick={() => navigate('/premium')}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f59e0b'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fbbf24'}
            >
              Découvrir Premium
            </button>
          </div>
        </div>
      </div>

      {/* Loading Overlay pendant le refresh */}
      {refreshing && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <LoadingSpinner size="small" />
            <span style={{ color: '#333' }}>Actualisation des données...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;