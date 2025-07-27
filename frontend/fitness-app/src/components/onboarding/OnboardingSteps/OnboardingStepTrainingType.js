// import React from 'react';
// import { Target } from 'lucide-react';
// import './onboardingSteps.css';

// // const { saveOnboardingData, completeOnboarding } = useOnboarding();
// const FitnessGoals = ({ formData, handleArrayToggle }) => {
//   const bodyPartOptions = [
//     { name: 'Bras', icon: '💪', description: 'Biceps, Triceps' },
//     { name: 'Poitrine', icon: '🦵', description: 'Pectoraux' },
//     { name: 'Dos', icon: '🏋️', description: 'Dorsaux, Trapèzes' },
//     { name: 'Épaules', icon: '🤸', description: 'Deltoïdes' },
//     { name: 'Abdominaux', icon: '🎯', description: 'Core, Obliques' },
//     { name: 'Jambes', icon: '🦵', description: 'Quadriceps, Ischio' },
//     { name: 'Fessiers', icon: '🍑', description: 'Muscles fessiers' },
//     { name: 'Cardio', icon: '❤️', description: 'Endurance' }
//   ];

//   return (
//     <div className="form-section">
//       <h2 className="step-title">
//         <Target className="inline mr-2" size={24} />
//         Objectifs d'entraînement
//       </h2>
//       <p className="step-description">
//         Sélectionnez les parties du corps que vous souhaitez développer en priorité
//       </p>
      
//       <div className="form-section">
//         <label className="form-label">
//           Zones à travailler 
//           <span className="selection-count">({formData.bodyParts.length} sélectionnées)</span>
//         </label>
//         <div className="selection-grid four-cols">
//           {bodyPartOptions.map(part => (
//             <button
//               key={part.name}
//               onClick={() => handleArrayToggle('bodyParts', part.name)}
//               className={`selection-button ${formData.bodyParts.includes(part.name) ? 'selected' : ''}`}
//             >
//               <div>
//                 <div style={{ fontSize: '24px', marginBottom: '8px' }}>{part.icon}</div>
//                 <div style={{ fontWeight: '600' }}>{part.name}</div>
//                 <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
//                   {part.description}
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoals;

import React from 'react'; 
import './onboardingSteps.css'; 
 
const OnboardingStepTrainingType = ({ trainingType, onTrainingTypeChange }) => { 
  const trainingOptions = [ 
    { 
      value: 'Gain Weight', 
      label: 'Gain Weight', 
      description: 'Build mass and increase overall body weight', 
      icon: '📈'
    }, 
    { 
      value: 'Build Muscle', 
      label: 'Build Muscle', 
      description: 'Focus on muscle growth and strength', 
      icon: '💪'
    }, 
    { 
      value: 'Lose Fat', 
      label: 'Lose Fat', 
      description: 'Burn fat and improve body composition', 
      icon: '🔥'
    } 
  ]; 
 
  return ( 
    <div className="onboarding-step"> 
      <div className="step-header"> 
        <h2>What's your primary training goal?</h2> 
        <p>We'll customize your workout plan based on your goal</p> 
      </div> 
       
      <div className="step-body"> 
        <div className="options-container"> 
          {trainingOptions.map((option) => ( 
            <div 
              key={option.value} 
              className={`option-card ${trainingType === option.value ? 'selected' : ''}`} 
              onClick={() => onTrainingTypeChange(option.value)} 
            > 
              <div className="option-icon">{option.icon}</div> 
              <div className="option-content"> 
                <h3 className="option-title">{option.label}</h3> 
                <p className="option-description">{option.description}</p> 
              </div> 
              <div className="option-check"> 
                {trainingType === option.value && '✓'} 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default OnboardingStepTrainingType;