// src/hooks/useAuth.js
import { useState } from 'react';
import { useAuth as useAuthContext } from '../context/AuthContext';
import { useNotification } from './useNotification';

// Hook personnalisé qui ajoute les notifications à votre AuthContext existant
export const useAuth = () => {
  const authContext = useAuthContext();
  const { showSuccess, showError, showInfo } = useNotification();
  const [loading, setLoading] = useState(false);

  // Vérification que le contexte existe
  if (!authContext) {
    throw new Error('useAuthWithNotifications must be used within an AuthProvider');
  }

  const { 
    user, 
    isAuthenticated,
    loading: contextLoading,
    login: contextLogin, 
    logout: contextLogout,
    register: contextRegister,
    updateProfile: contextUpdateProfile,
    changePassword: contextChangePassword,
    resetPassword: contextResetPassword,
    refreshToken,
    isTokenExpired,
    setUser,
    fetchUserProfile
  } = authContext;

  // Wrapper pour login avec notifications
  const login = async (email, password) => {
    try {
      setLoading(true);
      const result = await contextLogin(email, password);
      
      if (result.success) {
        showSuccess('Connexion réussie !');
        return result;
      } else {
        showError(result.message || 'Erreur de connexion');
        return result;
      }
    } catch (error) {
      showError(error.message || 'Erreur de connexion');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Wrapper pour register avec notifications
  const register = async (userData) => {
    try {
      setLoading(true);
      const result = await contextRegister(userData);
      
      if (result.success) {
        showSuccess('Inscription réussie !');
        return result;
      } else {
        showError(result.message || 'Erreur d\'inscription');
        return result;
      }
    } catch (error) {
      showError(error.message || 'Erreur d\'inscription');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Wrapper pour logout avec notifications
  const logout = () => {
    try {
      contextLogout();
      showInfo('Déconnexion réussie');
    } catch (error) {
      console.error('Logout error:', error);
      contextLogout(); // Force logout même en cas d'erreur
    }
  };

  // Wrapper pour updateProfile avec notifications
  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      const result = await contextUpdateProfile(profileData);
      
      if (result.success) {
        showSuccess('Profil mis à jour avec succès !');
        return result;
      } else {
        showError(result.message || 'Erreur de mise à jour du profil');
        return result;
      }
    } catch (error) {
      showError(error.message || 'Erreur de mise à jour du profil');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Wrapper pour changePassword avec notifications
  const changePassword = async (currentPassword, newPassword) => {
    try {
      setLoading(true);
      const result = await contextChangePassword(currentPassword, newPassword);
      
      if (result.success) {
        showSuccess('Mot de passe modifié avec succès !');
        return result;
      } else {
        showError(result.message || 'Erreur lors du changement de mot de passe');
        return result;
      }
    } catch (error) {
      showError(error.message || 'Erreur lors du changement de mot de passe');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Wrapper pour resetPassword avec notifications
  const resetPassword = async (email) => {
    try {
      setLoading(true);
      const result = await contextResetPassword(email);
      
      if (result.success) {
        showSuccess('Email de réinitialisation envoyé !');
        return result;
      } else {
        showError(result.message || 'Erreur lors de l\'envoi de l\'email');
        return result;
      }
    } catch (error) {
      showError(error.message || 'Erreur lors de l\'envoi de l\'email');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    // États
    user,
    isAuthenticated,
    loading: contextLoading || loading,
    
    // Méthodes avec notifications
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    resetPassword,
    
    // Méthodes sans modifications
    refreshToken,
    isTokenExpired,
    setUser,
    fetchUserProfile
  };
};