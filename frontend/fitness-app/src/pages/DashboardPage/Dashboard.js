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
//   });u

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
// 
// src/pages/DashboardPage/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// // Imports des pages (selon votre structure)
// import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
// import ProgressPage from '../ProgressPage/ProgressPage';
// import Community from '../Community/Community';
// import Nutrition from '../Nutrition/Nutrition';
// import ChallengesPage from '../ChallengesPage/ChallengesPage';
// import ProfilePage from '../ProfilePage/ProfilePage';

// // Imports des contextes (à adapter selon vos contextes existants)
// import { useAuth } from '../../context/AuthContext';
// import { useOnboarding } from '../../context/OnboardingContext';

// const Dashboard = () => {
//   // États principaux
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Hooks pour navigation et contextes
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const { onboardingData } = useOnboarding();

//   // Données simplifiées (remplacez par vos vraies données)
//   const [dashboardData, setDashboardData] = useState({
//     stats: {
//       workoutsThisWeek: 5,
//       caloriesBurned: 1250,
//       totalMinutes: 180,
//       currentStreak: 7
//     },
//     recentWorkouts: [
//       { id: 1, name: 'Entraînement Cardio', duration: 30, date: 'Aujourd\'hui' },
//       { id: 2, name: 'Musculation', duration: 45, date: 'Hier' },
//       { id: 3, name: 'Yoga', duration: 25, date: 'Il y a 2 jours' }
//     ],
//     quickActions: [
//       { id: 1, name: 'Démarrer un entraînement', icon: 'fa-play', action: 'workouts' },
//       { id: 2, name: 'Voir mes progrès', icon: 'fa-chart-line', action: 'progress' },
//       { id: 3, name: 'Plan nutrition', icon: 'fa-apple-alt', action: 'nutrition' },
//       { id: 4, name: 'Défis', icon: 'fa-trophy', action: 'challenges' }
//     ]
//   });

//   // Effet pour charger les données utilisateur
//   useEffect(() => {
//     const loadUserData = async () => {
//       setLoading(true);
      
//       // Déterminer le nom d'affichage
//       let displayName = 'Utilisateur';
//       if (onboardingData?.personalInfo?.firstName) {
//         displayName = onboardingData.personalInfo.firstName;
//       } else if (user?.firstName) {
//         displayName = user.firstName;
//       } else if (user?.email) {
//         const emailName = user.email.split('@')[0];
//         displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
//       }
      
//       setUserName(displayName);
//       setLoading(false);
//     };

//     loadUserData();
//   }, [user, onboardingData]);

//   // Fonction de déconnexion
//   const handleLogout = () => {
//     if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('user');
//       localStorage.removeItem('onboardingData');
//       navigate('/', { replace: true });
//     }
//   };

//   // Gestionnaires de navigation
//   const handleProfileClick = () => {
//     setActiveTab('profile');
//   };

//   const handleQuickAction = (action) => {
//     setActiveTab(action);
//   };

//   // Message de bienvenue
//   const getWelcomeMessage = () => {
//     const hour = new Date().getHours();
//     let greeting = 'Bonjour';
//     if (hour >= 18) greeting = 'Bonsoir';
//     else if (hour >= 12) greeting = 'Bon après-midi';
    
//     return `${greeting} ${userName} !`;
//   };

//   // Menu de navigation
//   const navigationItems = [
//     { id: 'dashboard', label: 'Tableau de bord', icon: 'fa-home' },
//     { id: 'workouts', label: 'Entraînements', icon: 'fa-dumbbell' },
//     { id: 'progress', label: 'Progrès', icon: 'fa-chart-line' },
//     { id: 'nutrition', label: 'Nutrition', icon: 'fa-apple-alt' },
//     { id: 'challenges', label: 'Défis', icon: 'fa-trophy' },
//     { id: 'community', label: 'Communauté', icon: 'fa-users' }
//   ];

//   // Rendu du contenu principal
//   const renderMainContent = () => {
//     if (loading) {
//       return (
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <p>Chargement...</p>
//         </div>
//       );
//     }

//     switch (activeTab) {
//       case 'workouts':
//         return <WorkoutsPage />;
//       case 'progress':
//         return <ProgressPage />;
//       case 'nutrition':
//         return <Nutrition />;
//       case 'challenges':
//         return <ChallengesPage />;
//       case 'community':
//         return <Community />;
//       case 'profile':
//         return <ProfilePage />;
//       default:
//         return renderDashboardContent();
//     }
//   };

//   // Contenu du tableau de bord
//   const renderDashboardContent = () => (
//     <div className="dashboard-content">
//       {/* En-tête de bienvenue */}
//       <div className="welcome-header">
//         <div className="welcome-text">
//           <h1>{getWelcomeMessage()}</h1>
//           <p>Prêt à continuer votre parcours fitness ?</p>
//         </div>
//         <div className="streak-badge">
//           <i className="fas fa-fire"></i>
//           <span>{dashboardData.stats.currentStreak} jours</span>
//         </div>
//       </div>

//       {/* Statistiques rapides */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-icon primary">
//             <i className="fas fa-dumbbell"></i>
//           </div>
//           <div className="stat-content">
//             <h3>{dashboardData.stats.workoutsThisWeek}</h3>
//             <p>Entraînements cette semaine</p>
//           </div>
//         </div>
        
//         <div className="stat-card">
//           <div className="stat-icon success">
//             <i className="fas fa-fire"></i>
//           </div>
//           <div className="stat-content">
//             <h3>{dashboardData.stats.caloriesBurned}</h3>
//             <p>Calories brûlées</p>
//           </div>
//         </div>
        
//         <div className="stat-card">
//           <div className="stat-icon warning">
//             <i className="fas fa-clock"></i>
//           </div>
//           <div className="stat-content">
//             <h3>{dashboardData.stats.totalMinutes}m</h3>
//             <p>Minutes d'exercice</p>
//           </div>
//         </div>
//       </div>

//       {/* Actions rapides */}
//       <div className="quick-actions">
//         <h2>Actions rapides</h2>
//         <div className="actions-grid">
//           {dashboardData.quickActions.map(action => (
//             <button 
//               key={action.id}
//               className="action-card"
//               onClick={() => handleQuickAction(action.action)}
//             >
//               <i className={`fas ${action.icon}`}></i>
//               <span>{action.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Entraînements récents */}
//       <div className="recent-section">
//         <h2>Entraînements récents</h2>
//         <div className="recent-list">
//           {dashboardData.recentWorkouts.map(workout => (
//             <div key={workout.id} className="recent-item">
//               <div className="workout-icon">
//                 <i className="fas fa-play"></i>
//               </div>
//               <div className="workout-info">
//                 <h4>{workout.name}</h4>
//                 <p>{workout.duration} min • {workout.date}</p>
//               </div>
//               <button className="btn-secondary">Recommencer</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {/* Barre de navigation supérieure */}
//       <nav className="top-nav">
//         <div className="nav-left">
//           <button 
//             className="menu-toggle"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//           <div className="logo">
//             <i className="fas fa-dumbbell"></i>
//             <span>JuniorFitness</span>
//           </div>
//         </div>
        
//         <div className="nav-right">
//           <button className="nav-btn">
//             <i className="fas fa-bell"></i>
//           </button>
//           <div className="user-menu">
//             <button className="user-btn" onClick={handleProfileClick}>
//               <img src="/api/placeholder/32/32" alt="Avatar" />
//               <span>{userName}</span>
//               <i className="fas fa-chevron-down"></i>
//             </button>
//             <div className="user-dropdown">
//               <button onClick={handleProfileClick}>
//                 <i className="fas fa-user"></i>
//                 Profil
//               </button>
//               <button>
//                 <i className="fas fa-cog"></i>
//                 Paramètres
//               </button>
//               <hr />
//               <button onClick={handleLogout} className="logout-btn">
//                 <i className="fas fa-sign-out-alt"></i>
//                 Déconnexion
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="main-layout">
//         {/* Sidebar */}
//         <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//           <nav className="sidebar-nav">
//             {navigationItems.map(item => (
//               <button
//                 key={item.id}
//                 className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
//                 onClick={() => {
//                   setActiveTab(item.id);
//                   setSidebarOpen(false);
//                 }}
//               >
//                 <i className={`fas ${item.icon}`}></i>
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* Contenu principal */}
//         <main className="main-content">
//           {renderMainContent()}
//         </main>
//       </div>

//       {/* Overlay mobile */}
//       {sidebarOpen && (
//         <div 
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


//   import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);
  
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
//   });

//   const weeklyProgress = [
//     { day: 'Mon', workout: 90, calories: 45, steps: 80 },
//     { day: 'Tue', workout: 60, calories: 30, steps: 85 },
//     { day: 'Wed', workout: 100, calories: 65, steps: 60 },
//     { day: 'Thu', workout: 80, calories: 85, steps: 45 },
//     { day: 'Fri', workout: 40, calories: 25, steps: 70 },
//     { day: 'Sat', workout: 70, calories: 55, steps: 90 },
//     { day: 'Sun', workout: 85, calories: 70, steps: 75 }
//   ];

//   const [recentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15' },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14' },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13' }
//   ]);

//   const [schedule] = useState([
//     { id: 1, exercise: 'Stretch', time: '08:00', duration: '20 Pieces', icon: '🧘‍♀️' },
//     { id: 2, exercise: 'Back Stretch', time: '08:00', duration: '10 Round', icon: '💪' },
//     { id: 3, exercise: 'Yoga', time: '08:00', duration: '20 min', icon: '🧘‍♀️' }
//   ]);

//   const [goals] = useState([
//     { id: 1, title: 'Running on Track', target: '10k Rounds', progress: 85, date: 'Saturday, April 16 | 08:00 AM' },
//     { id: 2, title: 'Push Up', target: '50 Pieces', progress: 60, date: 'Sunday, April 15 | 08:00 AM' }
//   ]);

//   const [meals] = useState([
//     { id: 1, food: '🌯 Burrito', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
//     { id: 2, food: '🍔 Burger', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', carbs: '20 gm' }
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

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   // Styles en ligne pour forcer l'affichage
//   const containerStyle = {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
//       : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     minHeight: '100vh',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: '#ffffff',
//     overflow: 'hidden'
//   };

//   const navbarStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(20px)',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000
//   };

//   const sidebarStyle = {
//     width: '250px',
//     background: 'rgba(255, 255, 255, 0.1)',
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
//     background: 'rgba(255, 255, 255, 0.1)',
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
//       {/* Hero Section */}
//       <div style={{
//         background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
//         borderRadius: '20px',
//         padding: '2rem',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden',
//         boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
//       }}>
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
//             Track Your Daily Activities
//           </h2>
//           <p style={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//         <div style={{
//           position: 'absolute',
//           right: '-50px',
//           top: '-50px',
//           width: '200px',
//           height: '200px',
//           background: 'rgba(255, 255, 255, 0.1)',
//           borderRadius: '50%'
//         }}></div>
//       </div>

//       {/* Stats Cards */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
//         {[
//           { title: 'Workout', value: '4 Hrs', icon: '💪', bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' },
//           { title: 'Calories', value: '1800 kcal', icon: '🔥', bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' },
//           { title: 'Steps', value: '2200 steps', icon: '👟', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
//         ].map((stat, index) => (
//           <div key={index} style={{
//             background: stat.bg,
//             borderRadius: '16px',
//             padding: '1.5rem',
//             color: 'white',
//             boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
//             transition: 'transform 0.3s ease',
//             cursor: 'pointer'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//           >
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div style={{
//                 background: 'rgba(255, 255, 255, 0.2)',
//                 padding: '12px',
//                 borderRadius: '12px',
//                 marginRight: '1rem',
//                 fontSize: '1.5rem'
//               }}>
//                 {stat.icon}
//               </div>
//               <div>
//                 <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>{stat.title}</p>
//                 <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{stat.value}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Progress Chart and Food Table */}
//       <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
//         <div style={{
//           ...cardStyle,
//           padding: '1.5rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
//             <h5 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Goal Progress</h5>
//             <select style={{
//               background: 'rgba(0, 0, 0, 0.05)',
//               border: '1px solid rgba(0, 0, 0, 0.1)',
//               borderRadius: '8px',
//               padding: '0.5rem',
//               fontSize: '0.9rem'
//             }}>
//               <option>Weekly</option>
//               <option>Monthly</option>
//             </select>
//           </div>
//           <div style={{ height: '250px' }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={weeklyProgress}>
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Bar dataKey="workout" fill="#06b6d4" radius={[4, 4, 0, 0]} />
//                 <Bar dataKey="calories" fill="#f97316" radius={[4, 4, 0, 0]} />
//                 <Bar dataKey="steps" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
//             {[
//               { color: '#06b6d4', label: 'Workout' },
//               { color: '#f97316', label: 'Calories' },
//               { color: '#8b5cf6', label: 'Steps' }
//             ].map((legend, index) => (
//               <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: legend.color }}></div>
//                 <span style={{ fontSize: '0.9rem', color: '#666' }}>{legend.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
//             <h6 style={{ margin: 0, fontWeight: 600 }}>Food</h6>
//           </div>
//           <div style={{ padding: '1.5rem' }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {meals.map(meal => (
//                 <div key={meal.id} style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   padding: '0.75rem',
//                   background: 'rgba(0, 0, 0, 0.02)',
//                   borderRadius: '8px'
//                 }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                     <span style={{ fontSize: '1.5rem' }}>{meal.food.split(' ')[0]}</span>
//                     <div>
//                       <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem' }}>{meal.meal}</p>
//                       <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{meal.carbs}</p>
//                     </div>
//                   </div>
//                   <span style={{
//                     fontSize: '0.7rem',
//                     padding: '0.25rem 0.5rem',
//                     background: '#dcfce7',
//                     color: '#166534',
//                     borderRadius: '12px'
//                   }}>
//                     {meal.status}
//                   </span>
//                 </div>
//               ))}
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
//                 <span style={{ color: '#ff6b35' }}>Fitness</span>
//               </span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//               <div style={{ position: 'relative' }}>
//                 <input 
//                   type="text" 
//                   placeholder="Search..." 
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '20px',
//                     padding: '8px 16px 8px 35px',
//                     color: 'white',
//                     outline: 'none',
//                     width: '200px'
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
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: 'none',
//                 color: 'white',
//                 cursor: 'pointer',
//                 fontSize: '1rem'
//               }}>🔔</button>
//               <button style={{
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
//                 overflow: 'hidden'
//               }}>
//                 <img src={user.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
//               { id: 'dashboard', icon: '📊', label: 'Overview' },
//               { id: 'workouts', icon: '💪', label: 'Workout' },
//               { id: 'diet', icon: '🍽️', label: 'Diet Plan' },
//               { id: 'goals', icon: '🎯', label: 'Goals' },
//               { id: 'schedule', icon: '📅', label: 'My Schedule' },
//               { id: 'progress', icon: '📈', label: 'Progress' }
//             ].map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
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
//                   if (activeTab !== item.id) {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
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
//               marginBottom: '0.5rem'
//             }}>
//               <span>❓</span>
//               <span>Help</span>
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
//               cursor: 'pointer'
//             }}>
//               <span>🚪</span>
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={mainContentStyle}>
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div>
//                 <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>Good Morning</h2>
//                 <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>Welcome Back!</p>
//               </div>
//               <div style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '20px',
//                 fontSize: '0.9rem'
//               }}>
//                 <span style={{ color: '#fbbf24' }}>🔥</span>
//                 <span style={{ marginLeft: '0.5rem' }}>{user.streak} day streak</span>
//               </div>
//             </div>
//           </div>

//           {activeTab === 'dashboard' && renderDashboard()}
//           {activeTab === 'workouts' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Workout Section</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Workout features coming soon...</p>
//             </div>
//           )}
//           {['diet', 'goals', 'schedule', 'progress'].includes(activeTab) && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
//                 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//               </h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
//                 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} features coming soon...
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Right Panel */}
//         <div style={rightPanelStyle}>
//           {/* Schedule */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>My Schedule</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}>
//                 View All →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//               {schedule.map(item => (
//                 <div key={item.id} style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.75rem',
//                   padding: '1rem',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '12px'
//                 }}>
//                   <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{item.exercise}</div>
//                     <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>At {item.time}</div>
//                   </div>
//                   <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>{item.duration}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Goals */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>Goals</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}>
//                 View All →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {goals.map(goal => (
//                 <div key={goal.id} style={{
//                   padding: '1rem',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '12px'
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
//                     <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{goal.title}</span>
//                     <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>{goal.target}</span>
//                   </div>
//                   <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.75rem' }}>
//                     {goal.date}
//                   </div>
//                   <div style={{ 
//                     width: '100%', 
//                     height: '6px', 
//                     background: 'rgba(255, 255, 255, 0.2)', 
//                     borderRadius: '3px',
//                     overflow: 'hidden'
//                   }}>
//                     <div style={{
//                       width: `${goal.progress}%`,
//                       height: '100%',
//                       background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 100%)',
//                       borderRadius: '3px',
//                       transition: 'width 0.5s ease'
//                     }}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Premium */}
//           <div style={{
//             background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
//             padding: '1.5rem',
//             borderRadius: '16px',
//             color: 'white'
//           }}>
//             <h6 style={{ fontWeight: 700, marginBottom: '0.75rem', margin: '0 0 0.75rem 0' }}>
//               50% off on Premium Membership
//             </h6>
//             <p style={{ 
//               fontSize: '0.85rem', 
//               opacity: 0.9, 
//               marginBottom: '1rem', 
//               lineHeight: 1.4,
//               margin: '0 0 1rem 0'
//             }}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//             </p>
//             <button style={{
//               background: '#fbbf24',
//               color: '#92400e',
//               border: 'none',
//               padding: '0.5rem 1rem',
//               borderRadius: '8px',
//               fontWeight: 600,
//               cursor: 'pointer'
//             }}>
//               Upgrade
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isWorkoutActive, setIsWorkoutActive] = useState(false);
//   const [workoutTime, setWorkoutTime] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);
  
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     level: 'Intermediate',
//     streak: 7,
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
//   });

//   const weeklyProgress = [
//     { day: 'Mon', workout: 90, calories: 450, steps: 8000 },
//     { day: 'Tue', workout: 60, calories: 320, steps: 8500 },
//     { day: 'Wed', workout: 100, calories: 650, steps: 6000 },
//     { day: 'Thu', workout: 80, calories: 580, steps: 4500 },
//     { day: 'Fri', workout: 40, calories: 250, steps: 7000 },
//     { day: 'Sat', workout: 70, calories: 550, steps: 9000 },
//     { day: 'Sun', workout: 85, calories: 620, steps: 7500 }
//   ];

//   const [recentWorkouts] = useState([
//     { id: 1, name: 'Push Day', duration: '45 min', calories: 320, date: '2024-01-15', exercises: 8 },
//     { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: '2024-01-14', exercises: 6 },
//     { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2024-01-13', exercises: 10 }
//   ]);

//   const [schedule] = useState([
//     { id: 1, exercise: 'Morning Stretch', time: '08:00', duration: '20 min', icon: '🧘‍♀️', type: 'flexibility' },
//     { id: 2, exercise: 'Strength Training', time: '10:00', duration: '45 min', icon: '💪', type: 'strength' },
//     { id: 3, exercise: 'Evening Yoga', time: '19:00', duration: '30 min', icon: '🧘‍♀️', type: 'flexibility' }
//   ]);

//   const [goals] = useState([
//     { id: 1, title: 'Weight Loss', target: '10 kg', progress: 85, current: '8.5 kg', date: 'Target: March 2024' },
//     { id: 2, title: 'Muscle Gain', target: '5 kg', progress: 60, current: '3 kg', date: 'Target: April 2024' },
//     { id: 3, title: 'Daily Steps', target: '10k steps', progress: 75, current: '7.5k', date: 'Daily Goal' }
//   ]);

//   const [challenges] = useState([
//     { id: 1, name: '30-Day Push-up Challenge', participants: 1247, daysLeft: 15, progress: 50 },
//     { id: 2, name: 'Marathon Prep', participants: 856, daysLeft: 45, progress: 25 },
//     { id: 3, name: 'Flexibility Journey', participants: 632, daysLeft: 8, progress: 80 }
//   ]);

//   const [nutritionData] = useState([
//     { meal: 'Breakfast', calories: 350, protein: 25, carbs: 45, fats: 12, time: '08:00' },
//     { meal: 'Lunch', calories: 520, protein: 35, carbs: 60, fats: 18, time: '13:00' },
//     { meal: 'Dinner', calories: 480, protein: 40, carbs: 35, fats: 22, time: '19:00' },
//     { meal: 'Snacks', calories: 200, protein: 8, carbs: 25, fats: 8, time: 'Various' }
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

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Styles en ligne pour forcer l'affichage
//   const containerStyle = {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
//       : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     minHeight: '100vh',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: '#ffffff',
//     overflow: 'hidden'
//   };

//   const navbarStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(20px)',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000
//   };

//   const sidebarStyle = {
//     width: '250px',
//     background: 'rgba(255, 255, 255, 0.1)',
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
//     background: 'rgba(255, 255, 255, 0.1)',
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
//         background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
//         borderRadius: '20px',
//         padding: '2rem',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden',
//         boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
//       }}>
//         <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div>
//             <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
//               Track Your Fitness Journey
//             </h2>
//             <p style={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
//               Monitor your workouts, nutrition, and progress all in one place. Stay motivated and achieve your fitness goals.
//             </p>
//           </div>
//           <div style={{ textAlign: 'center' }}>
//             <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
//               {formatTime(workoutTime)}
//             </div>
//             <button
//               onClick={() => setIsWorkoutActive(!isWorkoutActive)}
//               style={{
//                 background: isWorkoutActive ? '#ef4444' : '#22c55e',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontWeight: 600
//               }}
//             >
//               {isWorkoutActive ? 'Stop Workout' : 'Start Workout'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
//         {[
//           { title: 'Today\'s Workout', value: '45 min', subtitle: '+15min vs yesterday', icon: '💪', bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' },
//           { title: 'Calories Burned', value: '1,850', subtitle: '320 kcal today', icon: '🔥', bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' },
//           { title: 'Daily Steps', value: '8,450', subtitle: '1,550 to goal', icon: '👟', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
//           { title: 'Water Intake', value: '2.1L', subtitle: '0.9L remaining', icon: '💧', bg: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)' }
//         ].map((stat, index) => (
//           <div key={index} style={{
//             background: stat.bg,
//             borderRadius: '16px',
//             padding: '1.5rem',
//             color: 'white',
//             boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
//             transition: 'transform 0.3s ease',
//             cursor: 'pointer'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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

//       {/* Charts Section */}
//       <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
//         <div style={{
//           ...cardStyle,
//           padding: '1.5rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
//             <h5 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Weekly Progress</h5>
//             <select style={{
//               background: 'rgba(0, 0, 0, 0.05)',
//               border: '1px solid rgba(0, 0, 0, 0.1)',
//               borderRadius: '8px',
//               padding: '0.5rem',
//               fontSize: '0.9rem'
//             }}>
//               <option>This Week</option>
//               <option>Last Week</option>
//               <option>This Month</option>
//             </select>
//           </div>
//           <div style={{ height: '300px' }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={weeklyProgress}>
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Bar dataKey="workout" fill="#06b6d4" radius={[4, 4, 0, 0]} />
//                 <Bar dataKey="calories" fill="#f97316" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
//             <h6 style={{ margin: 0, fontWeight: 600 }}>Recent Workouts</h6>
//           </div>
//           <div style={{ padding: '1.5rem' }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {recentWorkouts.map(workout => (
//                 <div key={workout.id} style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   padding: '0.75rem',
//                   background: 'rgba(0, 0, 0, 0.02)',
//                   borderRadius: '8px',
//                   cursor: 'pointer'
//                 }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                     <div style={{
//                       width: '40px',
//                       height: '40px',
//                       background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                       borderRadius: '8px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       fontSize: '1.2rem'
//                     }}>
//                       💪
//                     </div>
//                     <div>
//                       <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem' }}>{workout.name}</p>
//                       <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{workout.duration} • {workout.exercises} exercises</p>
//                     </div>
//                   </div>
//                   <span style={{
//                     fontSize: '0.8rem',
//                     fontWeight: 600,
//                     color: '#f97316'
//                   }}>
//                     {workout.calories} cal
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderWorkouts = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>My Workouts</h3>
//         <button style={{
//           background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//           color: 'white',
//           border: 'none',
//           padding: '0.75rem 1.5rem',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           fontWeight: 600
//         }}>
//           + Create Workout
//         </button>
//       </div>
      
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
//         {recentWorkouts.map(workout => (
//           <div key={workout.id} style={{
//             ...cardStyle,
//             padding: '1.5rem',
//             cursor: 'pointer',
//             transition: 'transform 0.3s ease'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//           >
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
//               <div style={{
//                 width: '50px',
//                 height: '50px',
//                 background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
//                 borderRadius: '12px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontSize: '1.5rem'
//               }}>
//                 💪
//               </div>
//               <div>
//                 <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{workout.name}</h4>
//                 <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{workout.date}</p>
//               </div>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//               <span style={{ color: '#666' }}>Duration: <strong>{workout.duration}</strong></span>
//               <span style={{ color: '#666' }}>Exercises: <strong>{workout.exercises}</strong></span>
//             </div>
//             <div style={{
//               background: 'linear-gradient(135deg, #f97316, #ea580c)',
//               color: 'white',
//               padding: '0.5rem',
//               borderRadius: '8px',
//               textAlign: 'center',
//               fontWeight: 600
//             }}>
//               {workout.calories} calories burned
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderNutrition = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Nutrition Tracking</h3>
//         <button style={{
//           background: 'linear-gradient(135deg, #22c55e, #16a34a)',
//           color: 'white',
//           border: 'none',
//           padding: '0.75rem 1.5rem',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           fontWeight: 600
//         }}>
//           + Log Meal
//         </button>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
//         {nutritionData.map((meal, index) => (
//           <div key={index} style={{
//             ...cardStyle,
//             padding: '1.5rem'
//           }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{meal.meal}</h4>
//               <span style={{ color: '#666', fontSize: '0.9rem' }}>{meal.time}</span>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//               <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f97316' }}>{meal.calories} cal</span>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
//               <span>Protein: <strong>{meal.protein}g</strong></span>
//               <span>Carbs: <strong>{meal.carbs}g</strong></span>
//               <span>Fats: <strong>{meal.fats}g</strong></span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderProgress = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//       <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Progress Tracking</h3>
      
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
//         {goals.map(goal => (
//           <div key={goal.id} style={{
//             ...cardStyle,
//             padding: '1.5rem'
//           }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{goal.title}</h4>
//               <span style={{ fontSize: '0.9rem', color: '#666' }}>{goal.progress}%</span>
//             </div>
//             <div style={{ marginBottom: '1rem' }}>
//               <div style={{ 
//                 width: '100%', 
//                 height: '8px', 
//                 background: '#f3f4f6', 
//                 borderRadius: '4px',
//                 overflow: 'hidden'
//               }}>
//                 <div style={{
//                   width: `${goal.progress}%`,
//                   height: '100%',
//                   background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
//                   borderRadius: '4px',
//                   transition: 'width 0.5s ease'
//                 }}></div>
//               </div>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
//               <span>Current: <strong>{goal.current}</strong></span>
//               <span>Target: <strong>{goal.target}</strong></span>
//             </div>
//             <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666' }}>{goal.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderChallenges = () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Community Challenges</h3>
//         <button style={{
//           background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//           color: 'white',
//           border: 'none',
//           padding: '0.75rem 1.5rem',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           fontWeight: 600
//         }}>
//           Join Challenge
//         </button>
//       </div>
      
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
//         {challenges.map(challenge => (
//           <div key={challenge.id} style={{
//             ...cardStyle,
//             padding: '1.5rem',
//             cursor: 'pointer',
//             transition: 'transform 0.3s ease'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//           >
//             <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600 }}>{challenge.name}</h4>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
//               <span>{challenge.participants} participants</span>
//               <span>{challenge.daysLeft} days left</span>
//             </div>
//             <div style={{ marginBottom: '1rem' }}>
//               <div style={{ 
//                 width: '100%', 
//                 height: '6px', 
//                 background: '#f3f4f6', 
//                 borderRadius: '3px',
//                 overflow: 'hidden'
//               }}>
//                 <div style={{
//                   width: `${challenge.progress}%`,
//                   height: '100%',
//                   background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
//                   borderRadius: '3px',
//                   transition: 'width 0.5s ease'
//                 }}></div>
//               </div>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#8b5cf6' }}>
//                 {challenge.progress}% Complete
//               </span>
//             </div>
//           </div>
//         ))}
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
//                 <span style={{ color: '#ff6b35' }}>FitTracker</span>
//               </span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//               <div style={{ position: 'relative' }}>
//                 <input 
//                   type="text" 
//                   placeholder="Search exercises, meals..." 
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '20px',
//                     padding: '8px 16px 8px 35px',
//                     color: 'white',
//                     outline: 'none',
//                     width: '250px'
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
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: 'none',
//                 color: 'white',
//                 cursor: 'pointer',
//                 fontSize: '1rem'
//               }}>🔔</button>
//               <button style={{
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
//                 overflow: 'hidden'
//               }}>
//                 <img src={user.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
//               { id: 'exercises', icon: '🏋️‍♀️', label: 'Exercises' },
//               { id: 'nutrition', icon: '🍽️', label: 'Nutrition' },
//               { id: 'progress', icon: '📈', label: 'Progress' },
//               { id: 'challenges', icon: '🎯', label: 'Challenges' },
//               { id: 'community', icon: '👥', label: 'Community' },
//               { id: 'profile', icon: '👤', label: 'Profile' }
//             ].map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
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
//                   if (activeTab !== item.id) {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
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
//               marginBottom: '0.5rem'
//             }}>
//               <span>❓</span>
//               <span>Help & Support</span>
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
//               cursor: 'pointer'
//             }}>
//               <span>🚪</span>
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={mainContentStyle}>
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div>
//                 <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
//                   Good Morning, {user.name}
//                 </h2>
//                 <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
//                   Ready to crush your fitness goals today?
//                 </p>
//               </div>
//               <div style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '20px',
//                 fontSize: '0.9rem'
//               }}>
//                 <span style={{ color: '#fbbf24' }}>🔥</span>
//                 <span style={{ marginLeft: '0.5rem' }}>{user.streak} day streak</span>
//               </div>
//             </div>
//           </div>

//           {activeTab === 'dashboard' && renderDashboard()}
//           {activeTab === 'workouts' && renderWorkouts()}
//           {activeTab === 'exercises' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏋️‍♀️</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Exercise Library</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Browse through our comprehensive exercise library with detailed instructions, 
//                 target muscles, and difficulty levels.
//               </p>
//             </div>
//           )}
//           {activeTab === 'nutrition' && renderNutrition()}
//           {activeTab === 'progress' && renderProgress()}
//           {activeTab === 'challenges' && renderChallenges()}
//           {activeTab === 'community' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Fitness Community</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Connect with fellow fitness enthusiasts, share your progress, and get motivated 
//                 by the community.
//               </p>
//             </div>
//           )}
//           {activeTab === 'profile' && (
//             <div style={{ textAlign: 'center', padding: '4rem 0' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Profile</h3>
//               <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
//                 Manage your personal information, fitness preferences, and account settings.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Right Panel */}
//         <div style={rightPanelStyle}>
//           {/* Today's Schedule */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>Today's Schedule</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}>
//                 View All →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//               {schedule.map(item => (
//                 <div key={item.id} style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.75rem',
//                   padding: '1rem',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '12px',
//                   cursor: 'pointer',
//                   transition: 'background 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
//                 onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
//                 >
//                   <div style={{
//                     width: '40px',
//                     height: '40px',
//                     background: item.type === 'strength' ? 'linear-gradient(135deg, #ff6b35, #f7931e)' : 'linear-gradient(135deg, #22c55e, #16a34a)',
//                     borderRadius: '8px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '1.2rem'
//                   }}>
//                     {item.icon}
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{item.exercise}</div>
//                     <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>At {item.time}</div>
//                   </div>
//                   <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>{item.duration}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Fitness Goals */}
//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//               <h6 style={{ margin: 0, fontWeight: 600 }}>Fitness Goals</h6>
//               <button style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 color: '#ff6b35', 
//                 cursor: 'pointer', 
//                 fontSize: '0.85rem' 
//               }}>
//                 Manage →
//               </button>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {goals.slice(0, 2).map(goal => (
//                 <div key={goal.id} style={{
//                   padding: '1rem',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '12px'
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
//                     <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{goal.title}</span>
//                     <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ff6b35' }}>{goal.progress}%</span>
//                   </div>
//                   <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.75rem' }}>
//                     Current: {goal.current} / Target: {goal.target}
//                   </div>
//                   <div style={{ 
//                     width: '100%', 
//                     height: '6px', 
//                     background: 'rgba(255, 255, 255, 0.2)', 
//                     borderRadius: '3px',
//                     overflow: 'hidden'
//                   }}>
//                     <div style={{
//                       width: `${goal.progress}%`,
//                       height: '100%',
//                       background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 100%)',
//                       borderRadius: '3px',
//                       transition: 'width 0.5s ease'
//                     }}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div style={{ marginBottom: '2rem' }}>
//             <h6 style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Quick Stats</h6>
//             <div style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '12px',
//               padding: '1rem'
//             }}>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Workouts This Week</span>
//                   <span style={{ fontWeight: 600, color: '#ff6b35' }}>5/7</span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Active Challenges</span>
//                   <span style={{ fontWeight: 600, color: '#8b5cf6' }}>3</span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Total Workouts</span>
//                   <span style={{ fontWeight: 600, color: '#06b6d4' }}>127</span>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: '0.9rem' }}>Calories This Month</span>
//                   <span style={{ fontWeight: 600, color: '#f97316' }}>12.5k</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Premium Upgrade */}
//           <div style={{
//             background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
//             padding: '1.5rem',
//             borderRadius: '16px',
//             color: 'white'
//           }}>
//             <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
//               <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
//               <h6 style={{ fontWeight: 700, marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
//                 Upgrade to Premium
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
//               Get personalized workout plans, advanced analytics, and priority support
//             </p>
//             <button style={{
//               background: '#fbbf24',
//               color: '#92400e',
//               border: 'none',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '8px',
//               fontWeight: 600,
//               cursor: 'pointer',
//               width: '100%'
//             }}>
//               Upgrade Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// HOOKS (../../ pour remonter de DashboardPage → pages → src)
import { useAuth } from '../../hooks/useAuth';
import { useWorkouts } from '../../hooks/useWorkouts';
import { useFitnessData } from '../../hooks/useFitnessData';
import { useNotification } from '../../hooks/useNotification';

// SERVICES
import { fitnessService } from '../../services/fitnessService';
import { workoutService } from '../../services/workoutService';
import  userService  from '../../services/userService';
import { challengeService } from '../../services/challengeService';

// COMPONENTS
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import StatsCard from '../../components/fitness/StatsCard/StatsCard';
import WorkoutCard from '../../components/fitness/WorkoutCard/WorkoutCard';
import ProgressChart from '../../components/fitness/ProgressChart/ProgressChart';
import ChallengeCard from '../../components/fitness/ChallengeCard/ChallengeCard';


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
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

  // Chargement des données au montage et à chaque changement d'utilisateur
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      loadDashboardData();
    }
  }, [isAuthenticated, user?.id]);

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
        const response = await workoutService.startWorkout?.(user.id);
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

  // Navigation vers les différentes pages
  const navigateToPage = (page) => {
    const routes = {
      'dashboard': '/dashboard',
      'workouts': '/workouts',
      'exercises': '/exercises',
      'nutrition': '/nutrition',
      'progress': '/progress',
      'challenges': '/challenges',
      'community': '/community',
      'profile': '/profile'
    };
    
    if (routes[page]) {
      navigate(routes[page]);
    } else {
      setActiveTab(page);
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
      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#373636ff',
    overflow: 'hidden'
  };

  const navbarStyle = {
    background: 'rgba(197, 216, 248, 0.93)',
    backdropFilter: 'blur(20px)',
    color: 'black',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const sidebarStyle = {
    width: '250px',
    background: 'rgba(58, 56, 184, 0.9)',
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
        color: 'white',
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
                color: 'white',
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

      {/* Stats Cards avec données réelles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {[
          { 
            title: "Workout d'aujourd'hui", 
            value: `${dashboardData.stats.todayWorkout || 0} min`, 
            subtitle: `${workoutTime > 0 ? `+${formatTime(workoutTime)} en cours` : 'Minutes d\'entraînement'}`, 
            icon: '💪', 
            bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' 
          },
          { 
            title: 'Calories Brûlées', 
            value: (dashboardData.stats.caloriesBurned || 0).toLocaleString(), 
            subtitle: `${Math.floor(workoutTime * 0.1)} cal en cours`, 
            icon: '🔥', 
            bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' 
          },
          { 
            title: 'Pas Quotidiens', 
            value: (dashboardData.stats.dailySteps || 0).toLocaleString(), 
            subtitle: `${Math.max(0, 10000 - (dashboardData.stats.dailySteps || 0))} vers l'objectif`, 
            icon: '👟', 
            bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' 
          },
          { 
            title: 'Hydratation', 
            value: `${dashboardData.stats.waterIntake || 0}L`, 
            subtitle: `${Math.max(0, 3 - (dashboardData.stats.waterIntake || 0)).toFixed(1)}L restant`, 
            icon: '💧', 
            bg: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)' 
          }
        ].map((stat, index) => (
          <div key={index} style={{
            background: stat.bg,
            borderRadius: '16px',
            padding: '1.5rem',
            color: 'white',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          onClick={() => {
            if (index === 0) navigateToPage('workouts');
            if (index === 1) navigateToPage('progress');
            if (index === 2) navigateToPage('progress');
            if (index === 3) navigateToPage('nutrition');
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>{stat.title}</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.5rem 0' }}>{stat.value}</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0 }}>{stat.subtitle}</p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '2rem'
              }}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
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
                        color: 'white',
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
                <span style={{ color: '#ff6b35' }}>FitTracker</span>
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
                      // Implémentation de la recherche
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
                background: 'rgba(255, 255, 255, 0.1)',
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
              { id: 'progress', icon: '📈', label: 'Progrès' },
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
                  // Suite du dashboard connecté à partir de la ligne interrompue

                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
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
              marginBottom: '0.5rem',
              fontSize: '0.95rem'
            }}
            onClick={() => navigate('/help')}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span>❓</span>
              <span>Aide & Support</span>
            </button>
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
          
          {activeTab === 'workouts' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Mes Workouts</h3>
                <button style={{
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                onClick={() => navigate('/create-workout')}
                >
                  + Créer Workout
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {dashboardData.recentWorkouts.length > 0 ? (
                  dashboardData.recentWorkouts.map(workout => (
                    <div key={workout._id} style={{
                      ...cardStyle,
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    onClick={() => navigate(`/workout/${workout._id}`)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.5rem'
                        }}>
                          💪
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                            {workout.name || 'Workout'}
                          </h4>
                          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                            {new Date(workout.createdAt || workout.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ color: '#666' }}>
                          Durée: <strong>{workout.duration || 0} min</strong>
                        </span>
                        <span style={{ color: '#666' }}>
                          Exercices: <strong>{workout.exercises?.length || 0}</strong>
                        </span>
                      </div>
                      <div style={{
                        background: 'linear-gradient(135deg, #f97316, #ea580c)',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: 600
                      }}>
                        {workout.caloriesBurned || 0} calories brûlées
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
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💪</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun workout trouvé</h3>
                    <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                      Commencez votre parcours fitness en créant votre premier workout personnalisé.
                    </p>
                    <button
                      onClick={() => navigate('/create-workout')}
                      style={{
                        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Créer mon premier workout
                    </button>
                  </div>
                )}
              </div>
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

          {activeTab === 'progress' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Suivi des Progrès</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {dashboardData.goals.length > 0 ? (
                  dashboardData.goals.map(goal => (
                    <div key={goal._id || goal.id} style={{
                      ...cardStyle,
                      padding: '1.5rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                          {goal.title || goal.name}
                        </h4>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>
                          {goal.progress || 0}%
                        </span>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ 
                          width: '100%', 
                          height: '8px', 
                          background: '#f3f4f6', 
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${goal.progress || 0}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
                            borderRadius: '4px',
                            transition: 'width 0.5s ease'
                          }}></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                        <span>Actuel: <strong>{goal.current || '0'}</strong></span>
                        <span>Objectif: <strong>{goal.target || '0'}</strong></span>
                      </div>
                      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666' }}>
                        {goal.date || goal.deadline || 'Pas de date limite'}
                      </p>
                    </div>
                  ))
                ) : (
                  <div style={{ 
                    gridColumn: '1 / -1',
                    textAlign: 'center', 
                    padding: '4rem 0',
                    ...cardStyle
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📈</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun objectif défini</h3>
                    <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                      Définissez vos objectifs fitness pour suivre vos progrès et rester motivé.
                    </p>
                    <button
                      onClick={() => navigate('/goals')}
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Définir mes objectifs
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Défis Communautaires</h3>
                <button style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                onClick={() => navigate('/challenges/join')}
                >
                  Rejoindre un Défi
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {dashboardData.challenges.length > 0 ? (
                  dashboardData.challenges.map(challenge => (
                    <div key={challenge._id || challenge.id} style={{
                      ...cardStyle,
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    onClick={() => navigate(`/challenge/${challenge._id}`)}
                    >
                      <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600 }}>
                        {challenge.name || challenge.title}
                      </h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        <span>{challenge.participants || 0} participants</span>
                        <span>{challenge.daysLeft || challenge.duration || 0} jours restants</span>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ 
                          width: '100%', 
                          height: '6px', 
                          background: '#f3f4f6', 
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${challenge.progress || 0}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
                            borderRadius: '3px',
                            transition: 'width 0.5s ease'
                          }}></div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#8b5cf6' }}>
                          {challenge.progress || 0}% Terminé
                        </span>
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
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aucun défi en cours</h3>
                    <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                      Rejoignez la communauté et participez à des défis fitness motivants !
                    </p>
                    <button
                      onClick={() => navigate('/challenges')}
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Découvrir les défis
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
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Aucun programme prévu</p>
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
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Aucun objectif défini</p>
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