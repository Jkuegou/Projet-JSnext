import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export const PublicRoute = ({ children }) => {
  const authContext = useAuth();

  if (!authContext) return children;

  const { isAuthenticated, loading } = authContext;

  if (loading) {
    return <LoadingSpinner message="Chargement..." />;
  }

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};