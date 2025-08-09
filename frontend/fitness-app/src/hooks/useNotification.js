// src/hooks/useNotification.js
import { toast } from 'react-toastify';

export const useNotification = () => {
  const showNotification = (message, type = 'info', options = {}) => {
    const defaultOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options
    };

    switch (type) {
      case 'success':
        return toast.success(message, defaultOptions);
      case 'error':
        return toast.error(message, defaultOptions);
      case 'warning':
        return toast.warning(message, defaultOptions);
      case 'info':
      default:
        return toast.info(message, defaultOptions);
    }
  };

  const showSuccess = (message, options = {}) => {
    return showNotification(message, 'success', options);
  };

  const showError = (message, options = {}) => {
    return showNotification(message, 'error', options);
  };

  const showWarning = (message, options = {}) => {
    return showNotification(message, 'warning', options);
  };

  const showInfo = (message, options = {}) => {
    return showNotification(message, 'info', options);
  };

  const dismiss = (toastId) => {
    toast.dismiss(toastId);
  };

  const dismissAll = () => {
    toast.dismiss();
  };

  return {
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    dismiss,
    dismissAll
  };
};