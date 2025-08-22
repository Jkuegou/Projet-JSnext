import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <button 
        className="navbar-toggler border-0" 
        type="button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ boxShadow: 'none' }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto me-4">
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium position-relative" href="/">
              {t('navigation.home')}
              <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                    style={{ width: '4px', height: '4px', borderRadius: '50%' }}></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/service">
              {t('navigation.service')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/pricing">
              {t('navigation.pricing')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/work">
              {t('navigation.ourWork')}
            </a>
          </li>
        </ul>
        
        {/* Sélecteur de langue */}
        <div className="me-3">
          <LanguageSwitcher variant="dropdown" />
        </div>
        
        {user ? (
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => navigate(user.role === 'admin' ? '/admin' : '/dashboard')}
          >
            {t('navigation.dashboard')}
          </Button>
        ) : (
          <Button 
            className="text-black"
            variant="outline-light"
            size="sm"
            onClick={() => navigate('/login')}
          >
            {t('common.login')}
          </Button>
        )}
      </div>
    </>
  );
};

export default Navigation;