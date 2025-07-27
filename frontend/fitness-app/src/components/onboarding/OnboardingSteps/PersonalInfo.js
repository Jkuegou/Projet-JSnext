import React from 'react';
import { User } from 'lucide-react';
import './onboardingSteps.css';
const PersonalInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="step-title">
        <User className="inline mr-2" size={24} />
        Informations personnelles
      </h2>
      <p className="step-description">
        Ces informations nous aident à personnaliser votre expérience fitness
      </p>
      
      <div className="form-section">
        <label className="form-label">Sexe</label>
        <div className="selection-grid three-cols">
          {['Homme', 'Femme', 'Autre'].map(gender => (
            <button
              key={gender}
              onClick={() => handleInputChange('gender', gender)}
              className={`selection-button ${formData.gender === gender ? 'selected' : ''}`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>
      
      <div className="form-section">
        <label className="form-label">Âge</label>
        <input
          type="number"
          min="13"
          max="100"
          value={formData.age}
          onChange={(e) => handleInputChange('age', e.target.value)}
          className="form-input"
          placeholder="Entrez votre âge"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;