// import React, { useContext } from 'react'; 
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
// import { AuthProvider } from '../context/AuthContext'; 
 
// // Components 
// import Layout from '../components/layout/Layout'; 
// import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'; 
 
// // Pages 
// import HomePage from '../pages/HomePage/HomePage'; 
// import Login from '../components/auth/Login/Login'; 
// import Register from '../components/auth/Register/Register'; 
// import FitnessOnboarding from '../components/onboarding/FitnessOnboarding'; 
// import Dashboard from '../pages/DashboardPage/Dashboard'; 
// import WorkoutsPage from '../pages/WorkoutsPage/WorkoutsPage'; 
// import ExercisesPage from '../pages/ExercisesPage/ExercisesPage'; 
// import ProfilePage from '../pages/ProfilePage/ProfilePage'; 
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'; 
 
// import './AppRouter.css'; 
 
// const AppRouter = () => { 
//   const { user, isLoading } = useContext(AuthProvider); 
 
//   if (isLoading) { 
//     return <div className="app-loading">Loading...</div>; 
//   } 
 
//   return ( 
//     <Router> 
//       <div className="app"> 
//         <Routes> 
//           {/* Public Routes */} 
//           <Route path="/" element={<HomePage />} /> 
//           <Route  
//             path="/login"  
//             element={user ? <Navigate to="/dashboard" replace /> : <Login />}  
//           /> 
//           <Route  
//             path="/register"  
//             element={user ? <Navigate to="/onboarding" replace /> : <Register />}  
//           /> 
 
//           {/* Onboarding Route - Only accessible after login */} 
//           <Route 
//             path="/onboarding" 
//             element={ 
//               <ProtectedRoute> 
//                 <FitnessOnboarding /> 
//               </ProtectedRoute> 
//             } 
//           /> 
 
//           {/* Protected Routes with Layout */} 
//           <Route 
//             path="/dashboard" 
//             element={ 
//               <ProtectedRoute> 
//                 <Layout> 
//                   <Dashboard /> 
//                 </Layout> 
//               </ProtectedRoute> 
//             } 
//           /> 
//           <Route 
//             path="/workouts" 
//             element={ 
//               <ProtectedRoute> 
//                 <Layout> 
//                   <WorkoutsPage /> 
//                 </Layout> 
//               </ProtectedRoute> 
//             } 
//           /> 
//           <Route 
//             path="/exercises" 
//             element={ 
//               <ProtectedRoute> 
//                 <Layout> 
//                   <ExercisesPage /> 
//                 </Layout> 
//               </ProtectedRoute> 
//             } 
//           /> 
//           <Route 
//             path="/profile" 
//             element={ 
//               <ProtectedRoute> 
//                 <Layout> 
//                   <ProfilePage /> 
//                 </Layout> 
//               </ProtectedRoute> 
//             } 
//           /> 
 
//           {/* 404 Route */} 
//           <Route path="*" element={<NotFoundPage />} /> 
//         </Routes> 
//       </div> 
//     </Router> 
//   ); 
// }; 
 
// export default AppRouter; 
// // import React, { useContext } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { AuthProvider } from '../context/AuthContext';
// // // import { AuthContext } from '../context/AuthContext';


// // // Components
// // import Layout from '../components/layout/Layout';
// // import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute';
// // import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';

// // // Pages
// // import Login from '../components/auth/Login/Login';
// // import Register from '../components/auth/Register/Register';
// // import FitnessOnboarding from '../pages/OnboardingPage/OnboardingPage';
// // import HomePage from '../pages/HomePage/HomePage';
// // import Dashboard from '../pages/DashboardPage/Dashboard';
// // import ProfilePage from '../pages/ProfilePage/ProfilePage';
// // import WorkoutsPage from '../pages/WorkoutsPage/WorkoutsPage';
// // import ExercisesPage from '../pages/ExercisesPage/ExercisesPage';
// // import ChallengesPage from '../pages/ChallengesPage/ChallengesPage';
// // import ProgressPage from '../pages/ProgressPage/ProgressPage';
// // import Community from '../pages/Community/Community';
// // import Nutrition from '../pages/Nutrition/Nutrition';
// // import SocialPage from '../pages/SocialPage/SocialPage';
// // import CreateWorkoutPage from '../pages/CreateWorkoutPage/CreateWorkoutPage';
// // import WorkoutDetailsPage from '../pages/WorkoutDetailsPage/WorkoutDetailsPage';
// // import AdminPage from '../pages/AdminPage/AdminPage';
// // import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// // import './AppRouter.css';

// // const AppRouter = () => {
// //   const { user, isLoading, hasCompletedOnboarding } = useContext(AuthProvider);
// //   // const { user, isLoading, hasCompletedOnboarding } = useContext(AuthContext);

// //   // Affichage du loading pendant la vérification de l'authentification
// //   if (isLoading) {
// //     return <LoadingSpinner />;
// //   }

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Routes publiques */}
// //         <Route path="/" element={<HomePage />} />
        
// //         {/* Routes d'authentification - redirection si déjà connecté */}
// //         <Route 
// //           path="/login" 
// //           element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
// //         />
// //         <Route 
// //           path="/register" 
// //           element={user ? <Navigate to="/dashboard" replace /> : <Register />} 
// //         />

// //         {/* Route d'onboarding - accessible seulement si connecté mais onboarding pas terminé */}
// //         <Route 
// //           path="/onboarding" 
// //           element={
// //             !user ? (
// //               <Navigate to="/login" replace />
// //             ) : hasCompletedOnboarding ? (
// //               <Navigate to="/dashboard" replace />
// //             ) : (
// //               <FitnessOnboarding />
// //             )
// //           } 
// //         />

// //         {/* Routes protégées avec Layout - nécessitent authentification et onboarding */}
// //         <Route 
// //           path="/dashboard" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <Dashboard />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/profile" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <ProfilePage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/workouts" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <WorkoutsPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/workouts/create" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <CreateWorkoutPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/workouts/:id" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <WorkoutDetailsPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/exercises" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <ExercisesPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/challenges" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <ChallengesPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/progress" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <ProgressPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/community" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <Community />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/social" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <SocialPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/nutrition" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <Nutrition />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />
// //         <Route 
// //           path="/admin" 
// //           element={
// //             <Layout>
// //               <ProtectedRoute requireOnboarding={true}>
// //                 <AdminPage />
// //               </ProtectedRoute>
// //             </Layout>
// //           } 
// //         />

// //         {/* 404 - pas de Layout pour cette page */}
// //         <Route path="*" element={<NotFoundPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter;

import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext'; // Utiliser le hook personnalisé
 
// Components 
import Layout from '../components/layout/Layout'; 
import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute'; 
 
// Pages 
import HomePage from '../pages/HomePage/HomePage'; 
import Login from '../components/auth/Login/Login'; 
import Register from '../components/auth/Register/Register'; 
import FitnessOnboarding from '../components/onboarding/FitnessOnboarding'; 
import Dashboard from '../pages/DashboardPage/Dashboard'; 
import WorkoutsPage from '../pages/WorkoutsPage/WorkoutsPage'; 
import ExercisesPage from '../pages/ExercisesPage/ExercisesPage'; 
import ProfilePage from '../pages/ProfilePage/ProfilePage'; 
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'; 
 
import './AppRouter.css'; 
 
const AppRouter = () => { 
  // CORRECTION: Utiliser useAuth() au lieu de useContext(AuthProvider)
  const { user, loading } = useAuth(); 
 
  if (loading) { 
    return <div className="app-loading">Loading...</div>; 
  } 
 
  return ( 
    <Router> 
      <div className="app"> 
        <Routes> 
          {/* Public Routes */} 
          <Route path="/" element={<HomePage />} /> 
          <Route  
            path="/login"  
            element={user ? <Navigate to="/dashboard" replace /> : <Login />}  
          /> 
          <Route  
            path="/register"  
            element={user ? <Navigate to="/onboarding" replace /> : <Register />}  
          /> 
 
          {/* Onboarding Route - Only accessible after login */} 
          <Route 
            path="/onboarding" 
            element={ 
              <ProtectedRoute> 
                <FitnessOnboarding /> 
              </ProtectedRoute> 
            } 
          /> 
 
          {/* Protected Routes with Layout */} 
          <Route 
            path="/dashboard" 
            element={ 
              <ProtectedRoute> 
                <Layout> 
                  <Dashboard /> 
                </Layout> 
              </ProtectedRoute> 
            } 
          /> 
          <Route 
            path="/workouts" 
            element={ 
              <ProtectedRoute> 
                <Layout> 
                  <WorkoutsPage /> 
                </Layout> 
              </ProtectedRoute> 
            } 
          /> 
          <Route 
            path="/exercises" 
            element={ 
              <ProtectedRoute> 
                <Layout> 
                  <ExercisesPage /> 
                </Layout> 
              </ProtectedRoute> 
            } 
          /> 
          <Route 
            path="/profile" 
            element={ 
              <ProtectedRoute> 
                <Layout> 
                  <ProfilePage /> 
                </Layout> 
              </ProtectedRoute> 
            } 
          /> 
 
          {/* 404 Route */} 
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
}; 
 
export default AppRouter;