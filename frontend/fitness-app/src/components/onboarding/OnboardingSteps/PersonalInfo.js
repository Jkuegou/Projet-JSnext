// src/components/onboarding/OnboardingSteps/PersonalInfo.js
import React, { useState, useEffect } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const PersonalInfo = () => {
  const { onboardingData, updateStepData } = useOnboarding();
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    ...onboardingData.personalInfo
  });

  const [errors, setErrors] = useState({});
  const [isMetric, setIsMetric] = useState(true);

  // Mettre à jour les données du contexte quand le formulaire change
  useEffect(() => {
    updateStepData('personalInfo', formData);
  }, [formData, updateStepData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Effacer l'erreur pour ce champ
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'age':
        return value >= 13 && value <= 100 ? '' : 'Age must be between 13 and 100';
      case 'height':
        const minHeight = isMetric ? 120 : 47; // 120cm or 47 inches
        const maxHeight = isMetric ? 220 : 87; // 220cm or 87 inches
        return value >= minHeight && value <= maxHeight ? '' : 
          `Height must be between ${minHeight}-${maxHeight} ${isMetric ? 'cm' : 'inches'}`;
      case 'weight':
        const minWeight = isMetric ? 35 : 77; // 35kg or 77 lbs
        const maxWeight = isMetric ? 200 : 440; // 200kg or 440 lbs
        return value >= minWeight && value <= maxWeight ? '' : 
          `Weight must be between ${minWeight}-${maxWeight} ${isMetric ? 'kg' : 'lbs'}`;
      default:
        return '';
    }
  };

  // Fonction pour calculer l'IMC et retourner les informations
  const calculateBMI = () => {
    if (!formData.height || !formData.weight) return null;
    
    const height = isMetric ? formData.height / 100 : formData.height * 0.0254;
    const weight = isMetric ? formData.weight : formData.weight * 0.453592;
    const bmi = weight / (height * height);
    
    let category = '';
    let color = '';
    let encouragement = '';
    let icon = '';
    
    if (bmi < 18.5) {
      category = 'Insuffisance pondérale';
      color = '#3b82f6';
      icon = 'bi-arrow-up-circle';
      encouragement = '💪 Parfait ! Nous allons vous aider à prendre du poids sainement avec des exercices de renforcement et une nutrition adaptée. Votre parcours fitness commence maintenant !';
    } else if (bmi < 25) {
      category = 'Poids normal';
      color = '#10b981';
      icon = 'bi-check-circle';
      encouragement = '🎉 Excellente nouvelle ! Vous avez un poids idéal. Maintenons cette forme avec des exercices variés et amusants pour vous tonifier davantage !';
    } else if (bmi < 30) {
      category = 'Surpoids';
      color = '#f59e0b';
      icon = 'bi-target';
      encouragement = '🔥 C\'est le moment parfait pour commencer ! Avec nos programmes personnalisés, vous allez retrouver votre forme idéale. Chaque petit pas compte, et nous sommes là pour vous accompagner !';
    } else {
      category = 'Obésité';
      color = '#ef4444';
      icon = 'bi-heart';
      encouragement = '❤️ Bravo pour avoir pris cette décision ! Votre santé est précieuse et nous allons vous accompagner pas à pas. Avec de la patience et nos programmes adaptés, vous verrez des résultats incroyables !';
    }
    
    return {
      value: bmi.toFixed(1),
      category,
      color,
      encouragement,
      icon
    };
  };

  const activityLevels = [
    {
      value: 'sedentary',
      label: 'Sédentaire',
      description: 'Peu ou pas d\'exercice',
      icon: 'bi-house'
    },
    {
      value: 'lightly_active',
      label: 'Légèrement actif',
      description: 'Exercice léger 1-3 jours/semaine',
      icon: 'bi-walk'
    },
    {
      value: 'moderately_active',
      label: 'Modérément actif',
      description: 'Exercice modéré 3-5 jours/semaine',
      icon: 'bi-bicycle'
    },
    {
      value: 'very_active',
      label: 'Très actif',
      description: 'Exercice intense 6-7 jours/semaine',
      icon: 'bi-lightning'
    },
    {
      value: 'extremely_active',
      label: 'Extrêmement actif',
      description: 'Exercice très intense, travail physique',
      icon: 'bi-fire'
    }
  ];

  const bmiData = calculateBMI();

  return (
    <div className="personal-info-step">
      <div className="step-form">
        {/* Informations de base */}
        <div className="form-section">
          <h3>Informations de base</h3>
          <div className="row g-4">
            {/* Age */}
            <div className="col-md-6">
              <label className="form-label">
                <i className="bi bi-calendar me-2"></i>
                Âge *
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className={`form-control fitness-input ${errors.age ? 'is-invalid' : ''}`}
                  value={formData.age}
                  onChange={(e) => handleChange('age', parseInt(e.target.value) || '')}
                  onBlur={(e) => {
                    const error = validateField('age', parseInt(e.target.value));
                    setErrors(prev => ({ ...prev, age: error }));
                  }}
                  placeholder="Entrez votre âge"
                  min="13"
                  max="100"
                />
                <span className="input-group-text">ans</span>
              </div>
              {errors.age && <div className="invalid-feedback d-block">{errors.age}</div>}
            </div>

            {/* Genre */}
            <div className="col-md-6">
              <label className="form-label">
                <i className="bi bi-person me-2"></i>
                Genre *
              </label>
              <div className="gender-selection text-black">
                {[
                  { value: 'male', label: 'Homme', icon: 'bi-person' },
                  { value: 'female', label: 'Femme', icon: 'bi-person-dress' },
                  { value: 'other', label: 'Autre', icon: 'bi-person-badge' }
                ].map(gender => (
                  <div key={gender.value} className="form-check-custom text-black">
                    <input
                      type="radio"
                      className="form-check-input"
                      id={`gender-${gender.value}`}
                      name="gender"
                      value={gender.value}
                      checked={formData.gender === gender.value}
                      onChange={(e) => handleChange('gender', e.target.value)}
                    />
                    <label className="form-check-label text-black" htmlFor={`gender-${gender.value}`}>
                      <i className={`bi ${gender.icon} me-2`}></i>
                      {gender.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mensurations */}
        <div className="form-section">
          <div className="section-header">
            <h3>Mensurations physiques</h3>
            <div className="unit-toggle">
              <button
                type="button"
                className={`unit-btn ${isMetric ? 'active' : ''}`}
                onClick={() => setIsMetric(true)}
              >
                Métrique
              </button>
              <button
                type="button"
                className={`unit-btn ${!isMetric ? 'active' : ''}`}
                onClick={() => setIsMetric(false)}
              >
                Impérial
              </button>
            </div>
          </div>

          <div className="row g-4">
            {/* Taille */}
            <div className="col-md-6">
              <label className="form-label">
                <i className="bi bi-rulers me-2"></i>
                Taille * {isMetric ? '(cm)' : '(pouces)'}
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className={`form-control fitness-input ${errors.height ? 'is-invalid' : ''}`}
                  value={formData.height}
                  onChange={(e) => handleChange('height', parseFloat(e.target.value) || '')}
                  onBlur={(e) => {
                    const error = validateField('height', parseFloat(e.target.value));
                    setErrors(prev => ({ ...prev, height: error }));
                  }}
                  placeholder={isMetric ? "170" : "67"}
                  step={isMetric ? "1" : "0.1"}
                />
                <span className="input-group-text">{isMetric ? 'cm' : 'po'}</span>
              </div>
              {errors.height && <div className="invalid-feedback d-block">{errors.height}</div>}
            </div>

            {/* Poids */}
            <div className="col-md-6">
              <label className="form-label">
                <i className="bi bi-speedometer me-2"></i>
                Poids actuel * {isMetric ? '(kg)' : '(lbs)'}
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className={`form-control fitness-input ${errors.weight ? 'is-invalid' : ''}`}
                  value={formData.weight}
                  onChange={(e) => handleChange('weight', parseFloat(e.target.value) || '')}
                  onBlur={(e) => {
                    const error = validateField('weight', parseFloat(e.target.value));
                    setErrors(prev => ({ ...prev, weight: error }));
                  }}
                  placeholder={isMetric ? "70" : "154"}
                  step={isMetric ? "0.1" : "0.1"}
                />
                <span className="input-group-text">{isMetric ? 'kg' : 'lbs'}</span>
              </div>
              {errors.weight && <div className="invalid-feedback d-block">{errors.weight}</div>}
            </div>
          </div>
        </div>

        {/* Calculateur d'IMC avec encouragements */}
        {bmiData && (
          <div className="form-section">
            <div className="bmi-calculator">
              <div className="bmi-header">
                <h4>
                  <i className="bi bi-calculator me-2"></i>
                  Votre IMC (Indice de Masse Corporelle)
                </h4>
              </div>
              
              <div className="bmi-result-card">
                <div className="bmi-main-result">
                  <div className="bmi-value" style={{ color: bmiData.color }}>
                    <i className={`bi ${bmiData.icon} me-2`}></i>
                    {bmiData.value}
                  </div>
                  <div className="bmi-category" style={{ color: bmiData.color }}>
                    {bmiData.category}
                  </div>
                </div>
                
                <div className="bmi-encouragement">
                  <div className="encouragement-text">
                    {bmiData.encouragement}
                  </div>
                </div>
              </div>
              
              <div className="bmi-scale">
                <div className="scale-item">
                  <div className="scale-color" style={{ backgroundColor: '#3b82f6' }}></div>
                  <span>{"< 18.5"}</span>
                </div>
                <div className="scale-item">
                  <div className="scale-color" style={{ backgroundColor: '#10b981' }}></div>
                  <span>18.5 - 24.9</span>
                </div>
                <div className="scale-item">
                  <div className="scale-color" style={{ backgroundColor: '#f59e0b' }}></div>
                  <span>25 - 29.9</span>
                </div>
                <div className="scale-item">
                  <div className="scale-color" style={{ backgroundColor: '#ef4444' }}></div>
                  <span>≥ 30</span>
                </div>
              </div>
              
              <p className="bmi-note">
                <i className="bi bi-info-circle me-1"></i>
                L'IMC est un indicateur général qui ne reflète pas la composition corporelle (muscles vs graisse)
              </p>
            </div>
          </div>
        )}

        {/* Niveau d'activité */}
        <div className="form-section">
          <h3>Niveau d'activité</h3>
          <p className="section-description">
            Cela nous aide à estimer vos besoins caloriques quotidiens et à recommander une intensité d'entraînement appropriée.
          </p>
          
          <div className="activity-grid">
            {activityLevels.map(level => (
              <div
                key={level.value}
                className={`activity-card ${formData.activityLevel === level.value ? 'selected' : ''}`}
                onClick={() => handleChange('activityLevel', level.value)}
              >
                <div className="activity-icon">
                  <i className={`bi ${level.icon}`}></i>
                </div>
                <div className="activity-content">
                  <h4>{level.label}</h4>
                  <p>{level.description}</p>
                </div>
                <div className="activity-radio">
                  <input
                    type="radio"
                    name="activityLevel"
                    value={level.value}
                    checked={formData.activityLevel === level.value}
                    onChange={() => {}} // Handled by onClick
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conseils motivants */}
        <div className="form-section ">
          <div className="tips-card">
            <div className="tips-header">
              <i className="bi bi-lightbulb"></i>
              <h4>Pourquoi ces informations nous aident</h4>
            </div>
            <ul className="tips-list ">
              <li>
                <i className="bi bi-check-circle"></i>
                <strong>Entraînements personnalisés :</strong> Intensité adaptée à votre niveau
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <strong>Suivi précis :</strong> Meilleure mesure des progrès et définition des objectifs
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <strong>Conseils nutrition :</strong> Recommandations de calories et macronutriments
              </li>
              <li>
                <i className="bi "></i>
                <strong>Sécurité d'abord :</strong> Exercices recommandés dans des limites sûres
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bmi-calculator {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .bmi-header h4 {
          margin: 0;
          color: #1e293b;
          font-weight: 600;
        }

        .bmi-result-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .bmi-main-result {
          text-align: center;
          margin-bottom: 20px;
        }

        .bmi-value {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .bmi-category {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .bmi-encouragement {
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }

        .encouragement-text {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-left: 4px solid #f59e0b;
          padding: 16px;
          border-radius: 8px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #92400e;
        }

        .bmi-scale {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 16px;
          background: white;
          border-radius: 8px;
        }

        .scale-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scale-color {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .bmi-note {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          margin: 16px 0 0 0;
        }
      `}</style>
    </div>
  );
};

export default PersonalInfo;