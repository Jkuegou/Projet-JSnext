import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Utiliser le hook personnalisé
import ExerciseSessionPage from "../pages/ExerciseSessionPage/ExerciseSessionPage";

// Components
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import FitnessOnboarding from "../components/onboarding/FitnessOnboarding";
import Dashboard from "../pages/DashboardPage/Dashboard";
import WorkoutsPage from "../pages/WorkoutsPage/WorkoutsPage";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";
import Profile from "../components/user/Profile/Profile";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import "./AppRouter.css";

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
            element={
              user ? <Navigate to="/onboarding" replace /> : <Register />
            }
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
            path="/workout-session/:workoutId?"
            element={
              <ProtectedRoute>
                <Layout>
                  <ExerciseSessionPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
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
