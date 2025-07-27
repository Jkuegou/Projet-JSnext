// // src/pages/DashboardPage/DashboardPage.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Dashboard.css';

// // Import des composants
// // import Layout from '../../components/layout/Layout';
// import StatsCard from '../../components/fitness/StatsCard/StatsCard';
// import ProgressChart from '../../components/fitness/ProgressChart/ProgressChart';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     // <Layout>
//       <div className="dashboard-container">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h1 className="h2 text-white">Dashboard</h1>
//         </div>

//         {/* Tab Content */}
//         {activeTab === 'overview' && (
//           <div className="tab-content">
//             {/* Stats Cards */}
//             <div className="row mb-4">
//               <div className="col-xl-3 col-md-6 mb-4">
//                 <StatsCard 
//                   title="Total Workouts" 
//                   value="87" 
//                   icon="bi-lightning-charge" 
//                   variant="primary" 
//                 />
//               </div>
//               {/* Autres stats cards */}
//             </div>

//             {/* Charts */}
//             <div className="row">
//               <div className="col-xl-8 col-lg-7">
//                 <ProgressChart />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     // </Layout>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://via.placeholder.com/50'
//   });

//   const [stats, setStats] = useState({
//     todayCalories: 450,
//     weeklyGoal: 2000,
//     workoutsThisWeek: 4,
//     currentWeight: 75,
//     targetWeight: 70
//   });

//   const [recentWorkouts, setRecentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15' },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14' },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13' }
//   ]);

//   const [quickWorkouts, setQuickWorkouts] = useState([
//     { id: 1, name: 'Morning Stretch', duration: '10 min', difficulty: 'Easy' },
//     { id: 2, name: 'HIIT Cardio', duration: '20 min', difficulty: 'Hard' },
//     { id: 3, name: 'Strength Training', duration: '45 min', difficulty: 'Medium' },
//     { id: 4, name: 'Yoga Flow', duration: '30 min', difficulty: 'Easy' }
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       if (isWorkoutActive) {
//         setWorkoutTime(prev => prev + 1);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isWorkoutActive]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const toggleWorkout = () => {
//     setIsWorkoutActive(!isWorkoutActive);
//     if (!isWorkoutActive) {
//       setWorkoutTime(0);
//     }
//   };

//   const renderDashboard = () => (
//     <div className="dashboard-content">
//       {/* Stats Cards */}
//       <div className="row mb-4">
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Calories Today</h6>
//                   <h3 className="text-primary">{stats.todayCalories}</h3>
//                   <small className="text-muted">Goal: {stats.weeklyGoal}/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-fire"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Workouts This Week</h6>
//                   <h3 className="text-success">{stats.workoutsThisWeek}</h3>
//                   <small className="text-muted">Goal: 5/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-dumbbell"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Current Weight</h6>
//                   <h3 className="text-info">{stats.currentWeight} kg</h3>
//                   <small className="text-muted">Target: {stats.targetWeight} kg</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-weight"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Streak</h6>
//                   <h3 className="text-warning">{user.streak}</h3>
//                   <small className="text-muted">days</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-trophy"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Workout Timer */}
//       <div className="row mb-4">
//         <div className="col-md-6 mb-3">
//           <div className="card workout-timer-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Quick Workout Timer</h5>
//               <div className="timer-display">
//                 <span className="timer-time">{formatTime(workoutTime)}</span>
//               </div>
//               <button 
//                 className={`btn ${isWorkoutActive ? 'btn-danger' : 'btn-primary'} btn-lg mt-3`}
//                 onClick={toggleWorkout}
//               >
//                 <i className={`fas ${isWorkoutActive ? 'fa-pause' : 'fa-play'} me-2`}></i>
//                 {isWorkoutActive ? 'Pause' : 'Start'} Workout
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-3">
//           <div className="card progress-card">
//             <div className="card-body">
//               <h5 className="card-title">Weekly Progress</h5>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Calories Burned</small>
//                   <small>{stats.todayCalories * 7}/2000</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-primary" style={{width: `${(stats.todayCalories * 7 / 2000) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Workouts Completed</small>
//                   <small>{stats.workoutsThisWeek}/5</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-success" style={{width: `${(stats.workoutsThisWeek / 5) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Weight Goal</small>
//                   <small>{((stats.currentWeight - stats.targetWeight) / stats.currentWeight * 100).toFixed(1)}%</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-info" style={{width: `${((stats.currentWeight - stats.targetWeight) / stats.currentWeight) * 100}%`}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Workouts and Quick Start */}
//       <div className="row">
//         <div className="col-md-8 mb-3">
//           <div className="card">
//             <div className="card-header d-flex justify-content-between align-items-center">
//               <h5 className="mb-0">Recent Workouts</h5>
//               <button className="btn btn-sm btn-outline-primary">View All</button>
//             </div>
//             <div className="card-body">
//               {recentWorkouts.map(workout => (
//                 <div key={workout.id} className="workout-item d-flex justify-content-between align-items-center mb-3">
//                   <div className="d-flex align-items-center">
//                     <div className="workout-icon me-3">
//                       <i className="fas fa-dumbbell"></i>
//                     </div>
//                     <div>
//                       <h6 className="mb-0">{workout.name}</h6>
//                       <small className="text-muted">{workout.date}</small>
//                     </div>
//                   </div>
//                   <div className="text-end">
//                     <div className="text-primary">{workout.calories} cal</div>
//                     <small className="text-muted">{workout.duration}</small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Quick Start</h5>
//             </div>
//             <div className="card-body">
//               {quickWorkouts.map(workout => (
//                 <div key={workout.id} className="quick-workout-item mb-3">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0">{workout.name}</h6>
//                     <span className={`badge ${workout.difficulty === 'Easy' ? 'bg-success' : workout.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>
//                       {workout.difficulty}
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{workout.duration}</small>
//                     <button className="btn btn-sm btn-primary">
//                       <i className="fas fa-play me-1"></i>Start
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderWorkouts = () => (
//     <div className="workouts-content">
//       <div className="row mb-4">
//         <div className="col-md-8">
//           <h3>Workout Library</h3>
//           <p className="text-muted">Choose from our collection of workouts</p>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary">
//             <i className="fas fa-plus me-2"></i>Create Custom Workout
//           </button>
//         </div>
//       </div>
      
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Full Body Strength</h5>
//               <p className="card-text">Complete strength training for all muscle groups</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">60 min</span>
//                 <span className="badge bg-warning">Hard</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Cardio HIIT</h5>
//               <p className="card-text">High-intensity interval training for fat burn</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">25 min</span>
//                 <span className="badge bg-danger">Very Hard</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Yoga & Flexibility</h5>
//               <p className="card-text">Improve flexibility and mindfulness</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">45 min</span>
//                 <span className="badge bg-success">Easy</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderProgress = () => (
//     <div className="progress-content">
//       <div className="row mb-4">
//         <div className="col-md-12">
//           <h3>Progress Analytics</h3>
//           <p className="text-muted">Track your fitness journey over time</p>
//         </div>
//       </div>
      
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Weight Progress</h5>
//             </div>
//             <div className="card-body">
//               <div className="chart-placeholder">
//                 <i className="fas fa-chart-line fa-3x text-muted"></i>
//                 <p className="text-muted mt-2">Weight tracking chart will be displayed here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Workout Frequency</h5>
//             </div>
//             <div className="card-body">
//               <div className="chart-placeholder">
//                 <i className="fas fa-chart-bar fa-3x text-muted"></i>
//                 <p className="text-muted mt-2">Workout frequency chart will be displayed here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {/* Navigation */}
//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <i className="fas fa-dumbbell me-2"></i>
//             JuniorFitness
//           </a>
//           <div className="navbar-nav ms-auto">
//             <div className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
//                 <img src={user.avatar} alt="Avatar" className="rounded-circle me-2" width="30" height="30" />
//                 {user.name}
//               </a>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
//                 <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-3 col-lg-2 sidebar">
//             <div className="sidebar-content">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={() => setActiveTab('dashboard')}
//                   >
//                     <i className="fas fa-tachometer-alt me-2"></i>
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={() => setActiveTab('workouts')}
//                   >
//                     <i className="fas fa-dumbbell me-2"></i>
//                     Workouts
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={() => setActiveTab('progress')}
//                   >
//                     <i className="fas fa-chart-line me-2"></i>
//                     Progress
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="fas fa-users me-2"></i>
//                     Community
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="fas fa-utensils me-2"></i>
//                     Nutrition
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9 col-lg-10 main-content">
//             <div className="content-header">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h2>Welcome back, {user.name}!</h2>
//                   <p className="text-muted">
//                     {currentTime.toLocaleDateString('fr-FR', { 
//                       weekday: 'long', 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     })}
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <div className="streak-badge me-3">
//                     <i className="fas fa-fire text-warning me-1"></i>
//                     <span>{user.streak} day streak</span>
//                   </div>
//                   <button className="btn btn-outline-light">
//                     <i className="fas fa-bell"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Dynamic Content */}
//             {activeTab === 'dashboard' && renderDashboard()}
//             {activeTab === 'workouts' && renderWorkouts()}
//             {activeTab === 'progress' && renderProgress()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://via.placeholder.com/50'
//   });

//   const [stats, setStats] = useState({
//     todayCalories: 450,
//     weeklyGoal: 2000,
//     workoutsThisWeek: 4,
//     currentWeight: 75,
//     targetWeight: 70
//   });

//   const [recentWorkouts, setRecentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15' },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14' },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13' }
//   ]);

//   const [quickWorkouts, setQuickWorkouts] = useState([
//     { id: 1, name: 'Morning Stretch', duration: '10 min', difficulty: 'Easy' },
//     { id: 2, name: 'HIIT Cardio', duration: '20 min', difficulty: 'Hard' },
//     { id: 3, name: 'Strength Training', duration: '45 min', difficulty: 'Medium' },
//     { id: 4, name: 'Yoga Flow', duration: '30 min', difficulty: 'Easy' }
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       if (isWorkoutActive) {
//         setWorkoutTime(prev => prev + 1);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isWorkoutActive]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const toggleWorkout = () => {
//     setIsWorkoutActive(!isWorkoutActive);
//     if (!isWorkoutActive) {
//       setWorkoutTime(0);
//     }
//   };

//   // Handlers pour les actions du dropdown
//   const handleProfile = () => {
//     console.log('Navigating to Profile...');
//     // Ici vous pouvez ajouter la logique pour naviguer vers le profil
//   };

//   const handleSettings = () => {
//     console.log('Navigating to Settings...');
//     // Ici vous pouvez ajouter la logique pour naviguer vers les paramètres
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     // Ici vous pouvez ajouter la logique de déconnexion
//     if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
//       // Logique de déconnexion
//     }
//   };

//   const renderDashboard = () => (
//     <div className="dashboard-content">
//       {/* Stats Cards */}
//       <div className="row mb-4">
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Calories Today</h6>
//                   <h3 className="text-primary">{stats.todayCalories}</h3>
//                   <small className="text-muted">Goal: {stats.weeklyGoal}/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-fire"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Workouts This Week</h6>
//                   <h3 className="text-success">{stats.workoutsThisWeek}</h3>
//                   <small className="text-muted">Goal: 5/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-dumbbell"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Current Weight</h6>
//                   <h3 className="text-info">{stats.currentWeight} kg</h3>
//                   <small className="text-muted">Target: {stats.targetWeight} kg</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-weight"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Streak</h6>
//                   <h3 className="text-warning">{user.streak}</h3>
//                   <small className="text-muted">days</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-trophy"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Workout Timer */}
//       <div className="row mb-4">
//         <div className="col-md-6 mb-3">
//           <div className="card workout-timer-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Quick Workout Timer</h5>
//               <div className="timer-display">
//                 <span className="timer-time">{formatTime(workoutTime)}</span>
//               </div>
//               <button 
//                 className={`btn ${isWorkoutActive ? 'btn-danger' : 'btn-primary'} btn-lg mt-3`}
//                 onClick={toggleWorkout}
//               >
//                 <i className={`fas ${isWorkoutActive ? 'fa-pause' : 'fa-play'} me-2`}></i>
//                 {isWorkoutActive ? 'Pause' : 'Start'} Workout
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-3">
//           <div className="card progress-card">
//             <div className="card-body">
//               <h5 className="card-title">Weekly Progress</h5>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Calories Burned</small>
//                   <small>{stats.todayCalories * 7}/2000</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-primary" style={{width: `${(stats.todayCalories * 7 / 2000) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Workouts Completed</small>
//                   <small>{stats.workoutsThisWeek}/5</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-success" style={{width: `${(stats.workoutsThisWeek / 5) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Weight Goal</small>
//                   <small>{((stats.currentWeight - stats.targetWeight) / stats.currentWeight * 100).toFixed(1)}%</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-info" style={{width: `${((stats.currentWeight - stats.targetWeight) / stats.currentWeight) * 100}%`}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Workouts and Quick Start */}
//       <div className="row">
//         <div className="col-md-8 mb-3">
//           <div className="card">
//             <div className="card-header d-flex justify-content-between align-items-center">
//               <h5 className="mb-0">Recent Workouts</h5>
//               <button className="btn btn-sm btn-outline-primary">View All</button>
//             </div>
//             <div className="card-body">
//               {recentWorkouts.map(workout => (
//                 <div key={workout.id} className="workout-item d-flex justify-content-between align-items-center mb-3">
//                   <div className="d-flex align-items-center">
//                     <div className="workout-icon me-3">
//                       <i className="fas fa-dumbbell"></i>
//                     </div>
//                     <div>
//                       <h6 className="mb-0">{workout.name}</h6>
//                       <small className="text-muted">{workout.date}</small>
//                     </div>
//                   </div>
//                   <div className="text-end">
//                     <div className="text-primary">{workout.calories} cal</div>
//                     <small className="text-muted">{workout.duration}</small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Quick Start</h5>
//             </div>
//             <div className="card-body">
//               {quickWorkouts.map(workout => (
//                 <div key={workout.id} className="quick-workout-item mb-3">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0">{workout.name}</h6>
//                     <span className={`badge ${workout.difficulty === 'Easy' ? 'bg-success' : workout.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>
//                       {workout.difficulty}
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{workout.duration}</small>
//                     <button className="btn btn-sm btn-primary">
//                       <i className="fas fa-play me-1"></i>Start
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderWorkouts = () => (
//     <div className="workouts-content">
//       <div className="row mb-4">
//         <div className="col-md-8">
//           <h3>Workout Library</h3>
//           <p className="text-muted">Choose from our collection of workouts</p>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary">
//             <i className="fas fa-plus me-2"></i>Create Custom Workout
//           </button>
//         </div>
//       </div>
      
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Full Body Strength</h5>
//               <p className="card-text">Complete strength training for all muscle groups</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">60 min</span>
//                 <span className="badge bg-warning">Hard</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Cardio HIIT</h5>
//               <p className="card-text">High-intensity interval training for fat burn</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">25 min</span>
//                 <span className="badge bg-danger">Very Hard</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card workout-card">
//             <div className="card-body">
//               <h5 className="card-title">Yoga & Flexibility</h5>
//               <p className="card-text">Improve flexibility and mindfulness</p>
//               <div className="workout-meta mb-3">
//                 <span className="badge bg-primary me-2">45 min</span>
//                 <span className="badge bg-success">Easy</span>
//               </div>
//               <button className="btn btn-primary w-100">Start Workout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderProgress = () => (
//     <div className="progress-content">
//       <div className="row mb-4">
//         <div className="col-md-12">
//           <h3>Progress Analytics</h3>
//           <p className="text-muted">Track your fitness journey over time</p>
//         </div>
//       </div>
      
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Weight Progress</h5>
//             </div>
//             <div className="card-body">
//               <div className="chart-placeholder">
//                 <i className="fas fa-chart-line fa-3x text-muted"></i>
//                 <p className="text-muted mt-2">Weight tracking chart will be displayed here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-4">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Workout Frequency</h5>
//             </div>
//             <div className="card-body">
//               <div className="chart-placeholder">
//                 <i className="fas fa-chart-bar fa-3x text-muted"></i>
//                 <p className="text-muted mt-2">Workout frequency chart will be displayed here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {/* Navigation avec React Bootstrap */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
//         <div className="container-fluid">
//           <Navbar.Brand href="#" className="navbar-brand">
//             <i className="fas fa-dumbbell me-2"></i>
//             JuniorFitness
//           </Navbar.Brand>
//           <Nav className="ms-auto">
//             <NavDropdown
//               title={
//                 <span className="d-flex align-items-center">
//                   <img 
//                     src={user.avatar} 
//                     alt="Avatar" 
//                     className="rounded-circle me-2" 
//                     width="30" 
//                     height="30" 
//                   />
//                   {user.name}
//                 </span>
//               }
//               id="user-dropdown"
//               align="end"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item onClick={handleProfile}>
//                 <i className="fas fa-user me-2"></i>Profile
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={handleSettings}>
//                 <i className="fas fa-cog me-2"></i>Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item onClick={handleLogout}>
//                 <i className="fas fa-sign-out-alt me-2"></i>Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </div>
//       </Navbar>

//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-3 col-lg-2 sidebar">
//             <div className="sidebar-content">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('dashboard');
//                     }}
//                   >
//                     <i className="fas fa-tachometer-alt me-2"></i>
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('workouts');
//                     }}
//                   >
//                     <i className="fas fa-dumbbell me-2"></i>
//                     Workouts
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('progress');
//                     }}
//                   >
//                     <i className="fas fa-chart-line me-2"></i>
//                     Progress
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                    <a 
//                     className={`nav-link ${activeTab === 'community' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('community');
//                     }}
//                   >
//                     <i className="fas fa-comments me-2"></i> Community
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   {/* <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
//                     <i className="fas fa-utensils me-2"></i>
//                     Nutrition
//                   </a> */}
//                    <a 
//                     className={`nav-link ${activeTab === 'nutrition' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('nutrition');
//                     }}
//                   >
//                    <i className="fas fa-utensils me-2"></i> Nutrition
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9 col-lg-10 main-content">
//             <div className="content-header">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h2>Welcome back, {user.name}!</h2>
//                   <p className="text-muted">
//                     {currentTime.toLocaleDateString('fr-FR', { 
//                       weekday: 'long', 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     })}
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <div className="streak-badge me-3">
//                     <i className="fas fa-fire text-warning me-1"></i>
//                     <span>{user.streak} day streak</span>
//                   </div>
//                   <button className="btn btn-outline-light">
//                     <i className="fas fa-bell"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Dynamic Content */}
//             {activeTab === 'dashboard' && renderDashboard()}
//             {activeTab === 'workouts' && renderWorkouts()}
//             {activeTab === 'progress' && renderProgress()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// // Imports des pages externes
// import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
// import ProgressPage from '../ProgressPage/ProgressPage';
// import Community from '../Community/Community';
// import Nutrition from '../Nutrition/Nutrition';
// import { useNavigate } from 'react-router-dom';


// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://via.placeholder.com/50'
//   });

//   const [stats, setStats] = useState({
//     todayCalories: 450,
//     weeklyGoal: 2000,
//     workoutsThisWeek: 4,
//     currentWeight: 75,
//     targetWeight: 70
//   });

//   const [recentWorkouts, setRecentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15' },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14' },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13' }
//   ]);

//   const [quickWorkouts, setQuickWorkouts] = useState([
//     { id: 1, name: 'Morning Stretch', duration: '10 min', difficulty: 'Easy' },
//     { id: 2, name: 'HIIT Cardio', duration: '20 min', difficulty: 'Hard' },
//     { id: 3, name: 'Strength Training', duration: '45 min', difficulty: 'Medium' },
//     { id: 4, name: 'Yoga Flow', duration: '30 min', difficulty: 'Easy' }
//   ]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       if (isWorkoutActive) {
//         setWorkoutTime(prev => prev + 1);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isWorkoutActive]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const toggleWorkout = () => {
//     setIsWorkoutActive(!isWorkoutActive);
//     if (!isWorkoutActive) {
//       setWorkoutTime(0);
//     }
//   };

//   // Dans votre composant
// const navigate = useNavigate();

// // Handlers pour les actions du dropdown
// const handleProfile = () => {
//   console.log('Navigating to Profile...');
//   navigate('/profile'); // minuscule, correspond à la route définie
// };

// const handleSettings = () => {
//   console.log('Navigating to Settings...');
//   navigate('/settings'); // même chose ici
// };

// // const handleLogout = () => {
// //   console.log('Logging out...');
// //   if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
// //     localStorage.removeItem('authToken');
// //     localStorage.removeItem('user');
// //     navigate('/');
// //   }
// // };

// const handleLogout = () => {
//   console.log('Logging out...');
//   if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
    
//     // Try these alternatives:
//     navigate('/', { replace: true }); // Replace current history entry
//     // OR
//     window.location.href = '/'; // Force a full page reload
//     // OR
//     // window.location.replace('/'); // Replace without adding to history
//   }
// };


//   const renderDashboard = () => (
//     <div className="dashboard-content">
//       {/* Stats Cards */}
//       <div className="row mb-4">
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Calories Today</h6>
//                   <h3 className="text-primary">{stats.todayCalories}</h3>
//                   <small className="text-muted">Goal: {stats.weeklyGoal}/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-fire"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Workouts This Week</h6>
//                   <h3 className="text-success">{stats.workoutsThisWeek}</h3>
//                   <small className="text-muted">Goal: 5/week</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-dumbbell"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Current Weight</h6>
//                   <h3 className="text-info">{stats.currentWeight} kg</h3>
//                   <small className="text-muted">Target: {stats.targetWeight} kg</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-weight"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card stat-card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 className="card-subtitle mb-2">Streak</h6>
//                   <h3 className="text-warning">{user.streak}</h3>
//                   <small className="text-muted">days</small>
//                 </div>
//                 <div className="stat-icon">
//                   <i className="fas fa-trophy"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Workout Timer */}
//       <div className="row mb-4">
//         <div className="col-md-6 mb-3">
//           <div className="card workout-timer-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Quick Workout Timer</h5>
//               <div className="timer-display">
//                 <span className="timer-time">{formatTime(workoutTime)}</span>
//               </div>
//               <button 
//                 className={`btn ${isWorkoutActive ? 'btn-danger' : 'btn-primary'} btn-lg mt-3`}
//                 onClick={toggleWorkout}
//               >
//                 <i className={`fas ${isWorkoutActive ? 'fa-pause' : 'fa-play'} me-2`}></i>
//                 {isWorkoutActive ? 'Pause' : 'Start'} Workout
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-3">
//           <div className="card progress-card">
//             <div className="card-body">
//               <h5 className="card-title">Weekly Progress</h5>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Calories Burned</small>
//                   <small>{stats.todayCalories * 7}/2000</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-primary" style={{width: `${(stats.todayCalories * 7 / 2000) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Workouts Completed</small>
//                   <small>{stats.workoutsThisWeek}/5</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-success" style={{width: `${(stats.workoutsThisWeek / 5) * 100}%`}}></div>
//                 </div>
//               </div>
//               <div className="progress-item">
//                 <div className="d-flex justify-content-between mb-1">
//                   <small>Weight Goal</small>
//                   <small>{((stats.currentWeight - stats.targetWeight) / stats.currentWeight * 100).toFixed(1)}%</small>
//                 </div>
//                 <div className="progress">
//                   <div className="progress-bar bg-info" style={{width: `${((stats.currentWeight - stats.targetWeight) / stats.currentWeight) * 100}%`}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Workouts and Quick Start */}
//       <div className="row">
//         <div className="col-md-8 mb-3">
//           <div className="card">
//             <div className="card-header d-flex justify-content-between align-items-center">
//               <h5 className="mb-0">Recent Workouts</h5>
//               <button className="btn btn-sm btn-outline-primary">View All</button>
//             </div>
//             <div className="card-body">
//               {recentWorkouts.map(workout => (
//                 <div key={workout.id} className="workout-item d-flex justify-content-between align-items-center mb-3">
//                   <div className="d-flex align-items-center">
//                     <div className="workout-icon me-3">
//                       <i className="fas fa-dumbbell"></i>
//                     </div>
//                     <div>
//                       <h6 className="mb-0">{workout.name}</h6>
//                       <small className="text-muted">{workout.date}</small>
//                     </div>
//                   </div>
//                   <div className="text-end">
//                     <div className="text-primary">{workout.calories} cal</div>
//                     <small className="text-muted">{workout.duration}</small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Quick Start</h5>
//             </div>
//             <div className="card-body">
//               {quickWorkouts.map(workout => (
//                 <div key={workout.id} className="quick-workout-item mb-3">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0">{workout.name}</h6>
//                     <span className={`badge ${workout.difficulty === 'Easy' ? 'bg-success' : workout.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>
//                       {workout.difficulty}
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{workout.duration}</small>
//                     <button className="btn btn-sm btn-primary">
//                       <i className="fas fa-play me-1"></i>Start
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Fonction pour rendre le contenu basé sur l'onglet actif
//   const renderContent = () => {
//     switch(activeTab) {
//       case 'dashboard':
//         return renderDashboard();
//       case 'workouts':
//         return <WorkoutsPage />;
//       case 'progress':
//         return <ProgressPage />;
//       case 'community':
//         return <Community />;
//       case 'nutrition':
//         return <Nutrition />;
//       default:
//         return renderDashboard();
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Navigation avec React Bootstrap */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
//         <div className="container-fluid">
//           <Navbar.Brand href="#" className="navbar-brand">
//             <i className="fas fa-dumbbell me-2"></i>
//             JuniorFitness
//           </Navbar.Brand>
//           <Nav className="ms-auto">
//             <NavDropdown
//               title={
//                 <span className="d-flex align-items-center">
//                   <img 
//                     src={user.avatar} 
//                     alt="Avatar" 
//                     className="rounded-circle me-2" 
//                     width="30" 
//                     height="30" 
//                   />
//                   {user.name}
//                 </span>
//               }
//               id="user-dropdown"
//               align="end"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item onClick={handleProfile}>
//                 <i className="fas fa-user me-2"></i>Profile
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={handleSettings}>
//                 <i className="fas fa-cog me-2"></i>Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item onClick={handleLogout}>
//                 <i className="fas fa-sign-out-alt me-2"></i>Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </div>
//       </Navbar>

//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-3 col-lg-2 sidebar">
//             <div className="sidebar-content">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('dashboard');
//                     }}
//                   >
//                     <i className="fas fa-tachometer-alt me-2"></i>
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('workouts');
//                     }}
//                   >
//                     <i className="fas fa-dumbbell me-2"></i>
//                     Workouts
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('progress');
//                     }}
//                   >
//                     <i className="fas fa-chart-line me-2"></i>
//                     Progress
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                    <a 
//                     className={`nav-link ${activeTab === 'community' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('community');
//                     }}
//                   >
//                     <i className="fas fa-comments me-2"></i> Community
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                    <a 
//                     className={`nav-link ${activeTab === 'nutrition' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('nutrition');
//                     }}
//                   >
//                    <i className="fas fa-utensils me-2"></i> Nutrition
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9 col-lg-10 main-content">
//             <div className="content-header">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h2>Welcome back, {user.name}!</h2>
//                   <p className="text-muted">
//                     {currentTime.toLocaleDateString('fr-FR', { 
//                       weekday: 'long', 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     })}
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <div className="streak-badge me-3">
//                     <i className="fas fa-fire text-warning me-1"></i>
//                     <span>{user.streak} day streak</span>
//                   </div>
//                   <button className="btn btn-outline-light">
//                     <i className="fas fa-bell"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Dynamic Content - Utilise maintenant renderContent() */}
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// // Imports des pages externes
// import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
// import ProgressPage from '../ProgressPage/ProgressPage';
// import Community from '../Community/Community';
// import Nutrition from '../Nutrition/Nutrition';
// import { useNavigate } from 'react-router-dom';

// // Imports des contextes et hooks (à créer)
// import { useAuth } from '../../context/AuthContext';
// import { useOnboarding } from '../../context/OnboardingContext';

// // Imports des composants réutilisables (à créer)
// import StatsCard from '../../components/fitness/StatsCard/StatsCard';
// import ProgressChart from '../../components/fitness/ProgressChart/ProgressChart';
// import WorkoutCard from '../../components/fitness/WorkoutCard/WorkoutCard';
// import ChallengeCard from '../../components/fitness/ChallengeCard/ChallengeCard';

// const Dashboard = () => {
//   // États existants
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);

//   // Nouveaux états pour la gestion des données
//   const [showWelcome, setShowWelcome] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Hooks pour les contextes
//   const { user } = useAuth();
//   const { onboardingData, loadOnboardingData } = useOnboarding();
//   const navigate = useNavigate();

//   // États pour les données dynamiques
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     firstName: '',
//     email: '',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://via.placeholder.com/50'
//   });

//   const [stats, setStats] = useState({
//     todayCalories: 450,
//     weeklyGoal: 2000,
//     workoutsThisWeek: 4,
//     currentWeight: 75,
//     targetWeight: 70,
//     weeklyWorkoutGoal: 5,
//     totalTrainingTime: '4h 30min',
//     caloriesTrend: '+15%',
//     workoutsTrend: '+20%',
//     weightTrend: '-2kg'
//   });

//   const [recentWorkouts, setRecentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15', completed: true },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14', completed: true },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13', completed: true }
//   ]);

//   const [quickWorkouts, setQuickWorkouts] = useState([
//     { id: 1, name: 'Morning Stretch', duration: '10 min', difficulty: 'Easy' },
//     { id: 2, name: 'HIIT Cardio', duration: '20 min', difficulty: 'Hard' },
//     { id: 3, name: 'Strength Training', duration: '45 min', difficulty: 'Medium' },
//     { id: 4, name: 'Yoga Flow', duration: '30 min', difficulty: 'Easy' }
//   ]);

//   // Nouveaux états pour les défis et progression
//   const [activeChallenges, setActiveChallenges] = useState([
//     { id: 1, name: '30 jours de fitness', progress: 65, daysLeft: 12 },
//     { id: 2, name: '10K steps par jour', progress: 80, daysLeft: 5 }
//   ]);

//   const [progressData, setProgressData] = useState([
//     { date: '2024-01-10', weight: 77, calories: 400 },
//     { date: '2024-01-11', weight: 76.8, calories: 450 },
//     { date: '2024-01-12', weight: 76.5, calories: 380 },
//     { date: '2024-01-13', weight: 76.2, calories: 500 },
//     { date: '2024-01-14', weight: 76, calories: 420 },
//     { date: '2024-01-15', weight: 75.8, calories: 470 }
//   ]);

//   // Effet pour vérifier si l'utilisateur vient de l'onboarding
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const fromOnboarding = urlParams.get('from') === 'onboarding';
//     const justCompleted = urlParams.get('completed') === 'true';
    
//     if (fromOnboarding && justCompleted && user) {
//       setShowWelcome(true);
//       setTimeout(() => setShowWelcome(false), 5000);
//     }
//   }, [user]);

//   // Effet pour charger les données d'onboarding
//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         setLoading(true);
        
//         // Charger les données d'onboarding si disponibles
//         if (user && !onboardingData) {
//           await loadOnboardingData();
//         }

//         // Charger les données utilisateur depuis l'API ou le localStorage
//         await loadUserStats();
//         await loadRecentWorkouts();
//         await loadActiveChallenges();
        
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     loadUserData();
//   }, [user, onboardingData, loadOnboardingData]);

//   // Déterminer le nom à afficher
//   useEffect(() => {
//     let displayName = '';
    
//     if (onboardingData?.personalInfo?.firstName) {
//       displayName = onboardingData.personalInfo.firstName;
//     } else if (user?.firstName) {
//       displayName = user.firstName;
//     } else if (user?.email) {
//       const emailName = user.email.split('@')[0];
//       displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
//     } else {
//       displayName = 'Utilisateur';
//     }
    
//     setUserName(displayName);
    
//     // Mettre à jour l'objet user
//     setUser(prev => ({
//       ...prev,
//       name: displayName
//     }));
//   }, [user, onboardingData]);

//   // Timer pour l'entraînement et l'heure
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       if (isWorkoutActive) {
//         setWorkoutTime(prev => prev + 1);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isWorkoutActive]);

//   // Fonctions utilitaires
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const getWelcomeMessage = () => {
//     const currentHour = new Date().getHours();
//     let greeting = '';

//     if (currentHour < 12) {
//       greeting = 'Bonjour';
//     } else if (currentHour < 18) {
//       greeting = 'Bon après-midi';
//     } else {
//       greeting = 'Bonsoir';
//     }

//     return `${greeting} ${userName} !`;
//   };

//   const getMotivationalMessage = () => {
//     const messages = [
//       "Prêt à atteindre vos objectifs aujourd'hui ?",
//       "Votre transformation commence maintenant !",
//       "Chaque entraînement vous rapproche de votre objectif !",
//       "Donnez le meilleur de vous-même aujourd'hui !",
//       "Votre parcours fitness vous attend !"
//     ];
//     return messages[Math.floor(Math.random() * messages.length)];
//   };

//   // Fonctions de chargement des données
//   const loadUserStats = async () => {
//     try {
//       // Simuler un appel API
//       // const response = await fetch('/api/user/stats');
//       // const data = await response.json();
      
//       // Pour la démo, on utilise des données mockées
//       const mockStats = {
//         todayCalories: Math.floor(Math.random() * 500) + 300,
//         weeklyGoal: 2000,
//         workoutsThisWeek: Math.floor(Math.random() * 6) + 1,
//         currentWeight: 75 + Math.random() * 10,
//         targetWeight: 70,
//         weeklyWorkoutGoal: 5,
//         totalTrainingTime: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}min`,
//         caloriesTrend: Math.random() > 0.5 ? '+15%' : '-5%',
//         workoutsTrend: '+20%',
//         weightTrend: '-2kg'
//       };
      
//       setStats(mockStats);
//     } catch (error) {
//       console.error('Erreur lors du chargement des statistiques:', error);
//     }
//   };

//   const loadRecentWorkouts = async () => {
//     try {
//       // Simuler un appel API
//       // const response = await fetch('/api/user/recent-workouts');
//       // const data = await response.json();
      
//       // Données mockées avec plus de variété
//       const mockWorkouts = [
//         { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15', completed: true },
//         { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14', completed: true },
//         { id: 3, name: 'Pull Day', duration: '50 min', calories: 450, date: '2024-01-13', completed: true },
//         { id: 4, name: 'Leg Day', duration: '60 min', calories: 520, date: '2024-01-12', completed: false }
//       ];
      
//       setRecentWorkouts(mockWorkouts);
//     } catch (error) {
//       console.error('Erreur lors du chargement des entraînements:', error);
//     }
//   };

//   const loadActiveChallenges = async () => {
//     try {
//       // Simuler un appel API
//       // const response = await fetch('/api/user/challenges');
//       // const data = await response.json();
      
//       const mockChallenges = [
//         { id: 1, name: '30 jours de fitness', progress: Math.floor(Math.random() * 100), daysLeft: Math.floor(Math.random() * 20) + 1 },
//         { id: 2, name: '10K steps par jour', progress: Math.floor(Math.random() * 100), daysLeft: Math.floor(Math.random() * 10) + 1 },
//         { id: 3, name: 'Perte de poids', progress: Math.floor(Math.random() * 80) + 20, daysLeft: Math.floor(Math.random() * 30) + 10 }
//       ];
      
//       setActiveChallenges(mockChallenges);
//     } catch (error) {
//       console.error('Erreur lors du chargement des défis:', error);
//     }
//   };

//   // Fonctions d'action
//   const toggleWorkout = () => {
//     setIsWorkoutActive(!isWorkoutActive);
//     if (!isWorkoutActive) {
//       setWorkoutTime(0);
//     }
//   };

//   const startQuickWorkout = (workoutId) => {
//     const workout = quickWorkouts.find(w => w.id === workoutId);
//     if (workout) {
//       console.log(`Démarrage de ${workout.name}`);
//       // Logique pour démarrer l'entraînement
//       toggleWorkout();
//     }
//   };

//   // Gestionnaires de navigation
//   const handleProfile = () => {
//     console.log('Navigating to Profile...');
//     navigate('/profile');
//   };

//   const handleSettings = () => {
//     console.log('Navigating to Settings...');
//     navigate('/settings');
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('user');
//       localStorage.removeItem('onboardingData');
//       navigate('/', { replace: true });
//     }
//   };

//   // Préparer les données pour les composants
//   const statsData = [
//     { 
//       title: 'Séances cette semaine', 
//       value: stats.workoutsThisWeek.toString(), 
//       unit: `sur ${stats.weeklyWorkoutGoal}`, 
//       trend: stats.workoutsTrend,
//       icon: 'fas fa-dumbbell'
//     },
//     { 
//       title: 'Calories brûlées', 
//       value: stats.todayCalories.toString(), 
//       unit: 'kcal', 
//       trend: stats.caloriesTrend,
//       icon: 'fas fa-fire'
//     },
//     { 
//       title: 'Temps d\'entraînement', 
//       value: stats.totalTrainingTime.split(' ')[0], 
//       unit: stats.totalTrainingTime.split(' ')[1], 
//       trend: '+10%',
//       icon: 'fas fa-clock'
//     },
//     { 
//       title: 'Poids actuel', 
//       value: Math.round(stats.currentWeight).toString(), 
//       unit: 'kg', 
//       trend: stats.weightTrend,
//       icon: 'fas fa-weight'
//     }
//   ];

//   const renderDashboard = () => (
//     <div className="dashboard-content">
//       {/* Message de bienvenue après onboarding */}
//       {showWelcome && (
//         <div className="welcome-banner alert alert-success">
//           <div className="welcome-content">
//             <h4>🎉 Bon retour {userName} !</h4>
//             <p>Félicitations ! Vous avez terminé votre configuration.</p>
//             <p>Votre parcours fitness personnalisé vous attend !</p>
//             <button 
//               className="btn-close"
//               onClick={() => setShowWelcome(false)}
//             ></button>
//           </div>
//         </div>
//       )}

//       {/* Stats Cards avec composants réutilisables */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <h3>Vos statistiques</h3>
//         </div>
//         {statsData.map((stat, index) => (
//           <div key={index} className="col-md-3 mb-3">
//             <StatsCard {...stat} />
//           </div>
//         ))}
//       </div>

//       {/* Graphique de progression */}
//       <div className="row mb-4">
//         <div className="col-md-8 mb-3">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Votre progression</h5>
//             </div>
//             <div className="card-body">
//               <ProgressChart data={progressData} />
//             </div>
//           </div>
//         </div>
        
//         {/* Quick Workout Timer */}
//         <div className="col-md-4 mb-3">
//           <div className="card workout-timer-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Quick Workout Timer</h5>
//               <div className="timer-display">
//                 <span className="timer-time">{formatTime(workoutTime)}</span>
//               </div>
//               <button 
//                 className={`btn ${isWorkoutActive ? 'btn-danger' : 'btn-primary'} btn-lg mt-3`}
//                 onClick={toggleWorkout}
//               >
//                 <i className={`fas ${isWorkoutActive ? 'fa-pause' : 'fa-play'} me-2`}></i>
//                 {isWorkoutActive ? 'Pause' : 'Start'} Workout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Défis actifs */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <h3>Vos défis en cours</h3>
//         </div>
//         {activeChallenges.map(challenge => (
//           <div key={challenge.id} className="col-md-4 mb-3">
//             <ChallengeCard challenge={challenge} />
//           </div>
//         ))}
//       </div>

//       {/* Recent Workouts et Quick Start */}
//       <div className="row">
//         <div className="col-md-8 mb-3">
//           <div className="card">
//             <div className="card-header d-flex justify-content-between align-items-center">
//               <h5 className="mb-0">Entraînements récents</h5>
//               <button className="btn btn-sm btn-outline-primary">Voir tout</button>
//             </div>
//             <div className="card-body">
//               {recentWorkouts.map(workout => (
//                 <WorkoutCard key={workout.id} workout={workout} />
//               ))}
//             </div>
//           </div>
//         </div>
        
//         <div className="col-md-4 mb-3">
//           <div className="card">
//             <div className="card-header">
//               <h5 className="mb-0">Démarrage rapide</h5>
//             </div>
//             <div className="card-body">
//               {quickWorkouts.map(workout => (
//                 <div key={workout.id} className="quick-workout-item mb-3">
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h6 className="mb-0">{workout.name}</h6>
//                     <span className={`badge ${workout.difficulty === 'Easy' ? 'bg-success' : workout.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>
//                       {workout.difficulty}
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{workout.duration}</small>
//                     <button 
//                       className="btn btn-sm btn-primary"
//                       onClick={() => startQuickWorkout(workout.id)}
//                     >
//                       <i className="fas fa-play me-1"></i>Start
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Actions rapides */}
//       <div className="row mt-4">
//         <div className="col-12">
//           <h3>Actions rapides</h3>
//         </div>
//         <div className="col-md-3 mb-3">
//           <button className="btn btn-primary w-100" onClick={() => setActiveTab('workouts')}>
//             <i className="fas fa-dumbbell me-2"></i>
//             Nouveau workout
//           </button>
//         </div>
//         <div className="col-md-3 mb-3">
//           <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('progress')}>
//             <i className="fas fa-chart-line me-2"></i>
//             Voir mes progrès
//           </button>
//         </div>
//         <div className="col-md-3 mb-3">
//           <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('nutrition')}>
//             <i className="fas fa-utensils me-2"></i>
//             Plan nutrition
//           </button>
//         </div>
//         <div className="col-md-3 mb-3">
//           <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('community')}>
//             <i className="fas fa-users me-2"></i>
//             Communauté
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Afficher les objectifs si disponibles
//   const renderGoalReminder = () => {
//     if (onboardingData?.fitnessGoals?.primaryGoal) {
//       return (
//         <div className="goal-reminder alert alert-info">
//           <div className="d-flex align-items-center">
//             <span className="goal-icon me-2">🎯</span>
//             <div>
//               <p className="mb-0 fw-bold">Votre objectif :</p>
//               <p className="mb-0">{onboardingData.fitnessGoals.primaryGoal}</p>
//             </div>
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   // Fonction pour rendre le contenu basé sur l'onglet actif
//   const renderContent = () => {
//     if (loading) {
//       return (
//         <div className="text-center p-5">
//           <div className="spinner-border" role="status">
//             <span className="visually-hidden">Chargement...</span>
//           </div>
//         </div>
//       );
//     }

//     if (error) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           <h4 className="alert-heading">Erreur</h4>
//           <p>{error}</p>
//           <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
//             Réessayer
//           </button>
//         </div>
//       );
//     }

//     switch(activeTab) {
//       case 'dashboard':
//         return renderDashboard();
//       case 'workouts':
//         return <WorkoutsPage />;
//       case 'progress':
//         return <ProgressPage />;
//       case 'community':
//         return <Community />;
//       case 'nutrition':
//         return <Nutrition />;
//       default:
//         return renderDashboard();
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Navigation avec React Bootstrap */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
//         <div className="container-fluid">
//           <Navbar.Brand href="#" className="navbar-brand">
//             <i className="fas fa-dumbbell me-2"></i>
//             JuniorFitness
//           </Navbar.Brand>
//           <Nav className="ms-auto">
//             <NavDropdown
//               title={
//                 <span className="d-flex align-items-center">
//                   <img 
//                     src={user.avatar} 
//                     alt="Avatar" 
//                     className="rounded-circle me-2" 
//                     width="30" 
//                     height="30" 
//                   />
//                   {userName || user.name}
//                 </span>
//               }
//               id="user-dropdown"
//               align="end"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item onClick={handleProfile}>
//                 <i className="fas fa-user me-2"></i>Profile
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={handleSettings}>
//                 <i className="fas fa-cog me-2"></i>Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item onClick={handleLogout}>
//                 <i className="fas fa-sign-out-alt me-2"></i>Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </div>
//       </Navbar>

//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-3 col-lg-2 sidebar">
//             <div className="sidebar-content">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('dashboard');
//                     }}
//                   >
//                     <i className="fas fa-tachometer-alt me-2"></i>
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('workouts');
//                     }}
//                   >
//                     <i className="fas fa-dumbbell me-2"></i>
//                     Workouts
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a 
//                     className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('progress');
//                     }}
//                   >
//                     <i className="fas fa-chart-line me-2"></i>
//                     Progress
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                    <a 
//                     className={`nav-link ${activeTab === 'community' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('community');
//                     }}
//                   >
//                     <i className="fas fa-comments me-2"></i> Community
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                    <a 
//                     className={`nav-link ${activeTab === 'nutrition' ? 'active' : ''}`} 
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveTab('nutrition');
//                     }}
//                   >
//                    <i className="fas fa-utensils me-2"></i> Nutrition
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9 col-lg-10 main-content">
//             <div className="content-header">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h2>{getWelcomeMessage()}</h2>
//                   <p className="text-muted">
//                     {currentTime.toLocaleDateString('fr-FR', { 
//                       weekday: 'long', 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     })}
//                   </p>
//                   <p className="motivational-message text-primary">
//                     {getMotivationalMessage()}
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <div className="streak-badge me-3">
//                     <i className="fas fa-fire text-warning me-1"></i>
//                     <span>{user.streak} day streak</span>
//                   </div>
//                   <button className="btn btn-outline-light">
//                     <i className="fas fa-bell"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Rappel des objectifs */}
//             {renderGoalReminder()}

//             {/* Dynamic Content */}
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// Imports des pages externes
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
import ProgressPage from '../ProgressPage/ProgressPage';
import Community from '../Community/Community';
import Nutrition from '../Nutrition/Nutrition';
import { useNavigate } from 'react-router-dom';

// Imports des contextes et hooks (à créer)
import { useAuth } from '../../context/AuthContext';
import { useOnboarding } from '../../context/OnboardingContext';

// Imports des composants réutilisables (à créer)
import StatsCard from '../../components/fitness/StatsCard/StatsCard';
import ProgressChart from '../../components/fitness/ProgressChart/ProgressChart';
import WorkoutCard from '../../components/fitness/WorkoutCard/WorkoutCard';
import ChallengeCard from '../../components/fitness/ChallengeCard/ChallengeCard';

const Dashboard = () => {
  // États existants
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);

  // Nouveaux états pour la gestion des données
  const [showWelcome, setShowWelcome] = useState(false);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hooks pour les contextes
  const { user } = useAuth();
  const { onboardingData, loadOnboardingData } = useOnboarding();
  const navigate = useNavigate();

  // États pour les données dynamiques - VARIABLE RENOMMÉE
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    firstName: '',
    email: '',
    level: 'Intermediate',
    streak: 7,
    avatar: 'https://via.placeholder.com/50'
  });

  const [stats, setStats] = useState({
    todayCalories: 450,
    weeklyGoal: 2000,
    workoutsThisWeek: 4,
    currentWeight: 75,
    targetWeight: 70,
    weeklyWorkoutGoal: 5,
    totalTrainingTime: '4h 30min',
    caloriesTrend: '+15%',
    workoutsTrend: '+20%',
    weightTrend: '-2kg'
  });

  const [recentWorkouts, setRecentWorkouts] = useState([
    { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15', completed: true },
    { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14', completed: true },
    { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13', completed: true }
  ]);

  const [quickWorkouts, setQuickWorkouts] = useState([
    { id: 1, name: 'Morning Stretch', duration: '10 min', difficulty: 'Easy' },
    { id: 2, name: 'HIIT Cardio', duration: '20 min', difficulty: 'Hard' },
    { id: 3, name: 'Strength Training', duration: '45 min', difficulty: 'Medium' },
    { id: 4, name: 'Yoga Flow', duration: '30 min', difficulty: 'Easy' }
  ]);

  // Nouveaux états pour les défis et progression
  const [activeChallenges, setActiveChallenges] = useState([
    { id: 1, name: '30 jours de fitness', progress: 65, daysLeft: 12 },
    { id: 2, name: '10K steps par jour', progress: 80, daysLeft: 5 }
  ]);

  const [progressData, setProgressData] = useState([
    { date: '2024-01-10', weight: 77, calories: 400 },
    { date: '2024-01-11', weight: 76.8, calories: 450 },
    { date: '2024-01-12', weight: 76.5, calories: 380 },
    { date: '2024-01-13', weight: 76.2, calories: 500 },
    { date: '2024-01-14', weight: 76, calories: 420 },
    { date: '2024-01-15', weight: 75.8, calories: 470 }
  ]);

  // Effet pour vérifier si l'utilisateur vient de l'onboarding
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromOnboarding = urlParams.get('from') === 'onboarding';
    const justCompleted = urlParams.get('completed') === 'true';
    
    if (fromOnboarding && justCompleted && user) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 5000);
    }
  }, [user]);

  // Effet pour charger les données d'onboarding
  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        
        // Charger les données d'onboarding si disponibles
        if (user && !onboardingData) {
          await loadOnboardingData();
        }

        // Charger les données utilisateur depuis l'API ou le localStorage
        await loadUserStats();
        await loadRecentWorkouts();
        await loadActiveChallenges();
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadUserData();
  }, [user, onboardingData, loadOnboardingData]);

  // Déterminer le nom à afficher
  useEffect(() => {
    let displayName = '';
    
    if (onboardingData?.personalInfo?.firstName) {
      displayName = onboardingData.personalInfo.firstName;
    } else if (user?.firstName) {
      displayName = user.firstName;
    } else if (user?.email) {
      const emailName = user.email.split('@')[0];
      displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
    } else {
      displayName = 'Utilisateur';
    }
    
    setUserName(displayName);
    
    // Mettre à jour l'objet userProfile
    setUserProfile(prev => ({
      ...prev,
      name: displayName
    }));
  }, [user, onboardingData]);

  // Timer pour l'entraînement et l'heure
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (isWorkoutActive) {
        setWorkoutTime(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorkoutActive]);

  // Fonctions utilitaires
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getWelcomeMessage = () => {
    const currentHour = new Date().getHours();
    let greeting = '';

    if (currentHour < 12) {
      greeting = 'Bonjour';
    } else if (currentHour < 18) {
      greeting = 'Bon après-midi';
    } else {
      greeting = 'Bonsoir';
    }

    return `${greeting} ${userName} !`;
  };

  const getMotivationalMessage = () => {
    const messages = [
      "Prêt à atteindre vos objectifs aujourd'hui ?",
      "Votre transformation commence maintenant !",
      "Chaque entraînement vous rapproche de votre objectif !",
      "Donnez le meilleur de vous-même aujourd'hui !",
      "Votre parcours fitness vous attend !"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Fonctions de chargement des données
  const loadUserStats = async () => {
    try {
      // Simuler un appel API
      // const response = await fetch('/api/user/stats');
      // const data = await response.json();
      
      // Pour la démo, on utilise des données mockées
      const mockStats = {
        todayCalories: Math.floor(Math.random() * 500) + 300,
        weeklyGoal: 2000,
        workoutsThisWeek: Math.floor(Math.random() * 6) + 1,
        currentWeight: 75 + Math.random() * 10,
        targetWeight: 70,
        weeklyWorkoutGoal: 5,
        totalTrainingTime: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}min`,
        caloriesTrend: Math.random() > 0.5 ? '+15%' : '-5%',
        workoutsTrend: '+20%',
        weightTrend: '-2kg'
      };
      
      setStats(mockStats);
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    }
  };

  const loadRecentWorkouts = async () => {
    try {
      // Simuler un appel API
      // const response = await fetch('/api/user/recent-workouts');
      // const data = await response.json();
      
      // Données mockées avec plus de variété
      const mockWorkouts = [
        { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15', completed: true },
        { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14', completed: true },
        { id: 3, name: 'Pull Day', duration: '50 min', calories: 450, date: '2024-01-13', completed: true },
        { id: 4, name: 'Leg Day', duration: '60 min', calories: 520, date: '2024-01-12', completed: false }
      ];
      
      setRecentWorkouts(mockWorkouts);
    } catch (error) {
      console.error('Erreur lors du chargement des entraînements:', error);
    }
  };

  const loadActiveChallenges = async () => {
    try {
      // Simuler un appel API
      // const response = await fetch('/api/user/challenges');
      // const data = await response.json();
      
      const mockChallenges = [
        { id: 1, name: '30 jours de fitness', progress: Math.floor(Math.random() * 100), daysLeft: Math.floor(Math.random() * 20) + 1 },
        { id: 2, name: '10K steps par jour', progress: Math.floor(Math.random() * 100), daysLeft: Math.floor(Math.random() * 10) + 1 },
        { id: 3, name: 'Perte de poids', progress: Math.floor(Math.random() * 80) + 20, daysLeft: Math.floor(Math.random() * 30) + 10 }
      ];
      
      setActiveChallenges(mockChallenges);
    } catch (error) {
      console.error('Erreur lors du chargement des défis:', error);
    }
  };

  // Fonctions d'action
  const toggleWorkout = () => {
    setIsWorkoutActive(!isWorkoutActive);
    if (!isWorkoutActive) {
      setWorkoutTime(0);
    }
  };

  const startQuickWorkout = (workoutId) => {
    const workout = quickWorkouts.find(w => w.id === workoutId);
    if (workout) {
      console.log(`Démarrage de ${workout.name}`);
      // Logique pour démarrer l'entraînement
      toggleWorkout();
    }
  };

  // Gestionnaires de navigation
  const handleProfile = () => {
    console.log('Navigating to Profile...');
    navigate('/profile');
  };

  const handleSettings = () => {
    console.log('Navigating to Settings...');
    navigate('/settings');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      localStorage.removeItem('onboardingData');
      navigate('/', { replace: true });
    }
  };

  // Préparer les données pour les composants
  const statsData = [
    { 
      title: 'Séances cette semaine', 
      value: stats.workoutsThisWeek.toString(), 
      unit: `sur ${stats.weeklyWorkoutGoal}`, 
      trend: stats.workoutsTrend,
      icon: 'fas fa-dumbbell'
    },
    { 
      title: 'Calories brûlées', 
      value: stats.todayCalories.toString(), 
      unit: 'kcal', 
      trend: stats.caloriesTrend,
      icon: 'fas fa-fire'
    },
    { 
      title: 'Temps d\'entraînement', 
      value: stats.totalTrainingTime.split(' ')[0], 
      unit: stats.totalTrainingTime.split(' ')[1], 
      trend: '+10%',
      icon: 'fas fa-clock'
    },
    { 
      title: 'Poids actuel', 
      value: Math.round(stats.currentWeight).toString(), 
      unit: 'kg', 
      trend: stats.weightTrend,
      icon: 'fas fa-weight'
    }
  ];

  const renderDashboard = () => (
    <div className="dashboard-content">
      {/* Message de bienvenue après onboarding */}
      {showWelcome && (
        <div className="welcome-banner alert alert-success">
          <div className="welcome-content">
            <h4>🎉 Bon retour {userName} !</h4>
            <p>Félicitations ! Vous avez terminé votre configuration.</p>
            <p>Votre parcours fitness personnalisé vous attend !</p>
            <button 
              className="btn-close"
              onClick={() => setShowWelcome(false)}
            ></button>
          </div>
        </div>
      )}

      {/* Stats Cards avec composants réutilisables */}
      <div className="row mb-4">
        <div className="col-12">
          <h3>Vos statistiques</h3>
        </div>
        {statsData.map((stat, index) => (
          <div key={index} className="col-md-3 mb-3">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Graphique de progression */}
      <div className="row mb-4">
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Votre progression</h5>
            </div>
            <div className="card-body">
              <ProgressChart data={progressData} />
            </div>
          </div>
        </div>
        
        {/* Quick Workout Timer */}
        <div className="col-md-4 mb-3">
          <div className="card workout-timer-card">
            <div className="card-body text-center">
              <h5 className="card-title">Quick Workout Timer</h5>
              <div className="timer-display">
                <span className="timer-time">{formatTime(workoutTime)}</span>
              </div>
              <button 
                className={`btn ${isWorkoutActive ? 'btn-danger' : 'btn-primary'} btn-lg mt-3`}
                onClick={toggleWorkout}
              >
                <i className={`fas ${isWorkoutActive ? 'fa-pause' : 'fa-play'} me-2`}></i>
                {isWorkoutActive ? 'Pause' : 'Start'} Workout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Défis actifs */}
      <div className="row mb-4">
        <div className="col-12">
          <h3>Vos défis en cours</h3>
        </div>
        {activeChallenges.map(challenge => (
          <div key={challenge.id} className="col-md-4 mb-3">
            <ChallengeCard challenge={challenge} />
          </div>
        ))}
      </div>

      {/* Recent Workouts et Quick Start */}
      <div className="row">
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Entraînements récents</h5>
              <button className="btn btn-sm btn-outline-primary">Voir tout</button>
            </div>
            <div className="card-body">
              {recentWorkouts.map(workout => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Démarrage rapide</h5>
            </div>
            <div className="card-body">
              {quickWorkouts.map(workout => (
                <div key={workout.id} className="quick-workout-item mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{workout.name}</h6>
                    <span className={`badge ${workout.difficulty === 'Easy' ? 'bg-success' : workout.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>
                      {workout.difficulty}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{workout.duration}</small>
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => startQuickWorkout(workout.id)}
                    >
                      <i className="fas fa-play me-1"></i>Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="row mt-4">
        <div className="col-12">
          <h3>Actions rapides</h3>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-primary w-100" onClick={() => setActiveTab('workouts')}>
            <i className="fas fa-dumbbell me-2"></i>
            Nouveau workout
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('progress')}>
            <i className="fas fa-chart-line me-2"></i>
            Voir mes progrès
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('nutrition')}>
            <i className="fas fa-utensils me-2"></i>
            Plan nutrition
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('community')}>
            <i className="fas fa-users me-2"></i>
            Communauté
          </button>
        </div>
      </div>
    </div>
  );

  // Afficher les objectifs si disponibles
  const renderGoalReminder = () => {
    if (onboardingData?.fitnessGoals?.primaryGoal) {
      return (
        <div className="goal-reminder alert alert-info">
          <div className="d-flex align-items-center">
            <span className="goal-icon me-2">🎯</span>
            <div>
              <p className="mb-0 fw-bold">Votre objectif :</p>
              <p className="mb-0">{onboardingData.fitnessGoals.primaryGoal}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Fonction pour rendre le contenu basé sur l'onglet actif
  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center p-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Erreur</h4>
          <p>{error}</p>
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      );
    }

    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'workouts':
        return <WorkoutsPage />;
      case 'progress':
        return <ProgressPage />;
      case 'community':
        return <Community />;
      case 'nutrition':
        return <Nutrition />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navigation avec React Bootstrap */}
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <div className="container-fluid">
          <Navbar.Brand href="#" className="navbar-brand">
            <i className="fas fa-dumbbell me-2"></i>
            JuniorFitness
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  <img 
                    src={userProfile.avatar} 
                    alt="Avatar" 
                    className="rounded-circle me-2" 
                    width="30" 
                    height="30" 
                  />
                  {userName || userProfile.name}
                </span>
              }
              id="user-dropdown"
              align="end"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={handleProfile}>
                <i className="fas fa-user me-2"></i>Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleSettings}>
                <i className="fas fa-cog me-2"></i>Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                <i className="fas fa-sign-out-alt me-2"></i>Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 sidebar">
            <div className="sidebar-content">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('dashboard');
                    }}
                  >
                    <i className="fas fa-tachometer-alt me-2"></i>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('workouts');
                    }}
                  >
                    <i className="fas fa-dumbbell me-2"></i>
                    Workouts
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('progress');
                    }}
                  >
                    <i className="fas fa-chart-line me-2"></i>
                    Progress
                  </a>
                </li>
                <li className="nav-item">
                   <a 
                    className={`nav-link ${activeTab === 'community' ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('community');
                    }}
                  >
                    <i className="fas fa-comments me-2"></i> Community
                  </a>
                </li>
                <li className="nav-item">
                   <a 
                    className={`nav-link ${activeTab === 'nutrition' ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('nutrition');
                    }}
                  >
                   <i className="fas fa-utensils me-2"></i> Nutrition
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 main-content">
            <div className="content-header">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{getWelcomeMessage()}</h2>
                  <p className="text-muted">
                    {currentTime.toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="motivational-message text-primary">
                    {getMotivationalMessage()}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="streak-badge me-3">
                    <i className="fas fa-fire text-warning me-1"></i>
                    <span>{userProfile.streak} day streak</span>
                  </div>
                  <button className="btn btn-outline-light">
                    <i className="fas fa-bell"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Rappel des objectifs */}
            {renderGoalReminder()}

            {/* Dynamic Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;