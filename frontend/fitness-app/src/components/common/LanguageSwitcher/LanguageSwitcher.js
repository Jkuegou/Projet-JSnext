import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ variant = 'dropdown' }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (variant === 'buttons') {
    return (
      <div className="language-switcher language-switcher-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
          >
            <span className="flag">{lang.flag}</span>
            <span className="lang-code">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="language-switcher language-switcher-dropdown">
      <button 
        className="current-lang-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="lang-name">{currentLanguage.name}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
