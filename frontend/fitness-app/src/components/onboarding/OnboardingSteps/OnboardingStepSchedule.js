// import React from 'react';
// import { Calendar,  } from 'lucide-react';
// import './onboardingSteps.css';
// const WorkoutSchedule = ({ formData, handleInputChange, handleArrayToggle }) => {
//   const daysOfWeek = [
//     'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
//   ];

//   const timeSlots = [
//     { label: 'Matin', value: 'Matin (6h-12h)', icon: '🌅' },
//     { label: 'Après-midi', value: 'Après-midi (12h-18h)', icon: '☀️' },
//     { label: 'Soir', value: 'Soir (18h-22h)', icon: '🌙' }
//   ];

//   return (
//     <div className="form-section">
//       <h2 className="step-title">
//         <Calendar className="inline mr-2" size={24} />
//         Planning d'entraînement
//       </h2>
//       <p className="step-description">
//         Définissez vos disponibilités pour optimiser votre programme
//       </p>
      
//       <div className="form-section">
//         <label className="form-label">
//           Jours d'entraînement 
//           <span className="selection-count">({formData.workoutDays.length}/7 sélectionnés)</span>
//         </label>
//         <div className="selection-grid four-cols">
//           {daysOfWeek.map(day => (
//             <button
//               key={day}
//               onClick={() => handleArrayToggle('workoutDays', day)}
//               className={`selection-button ${formData.workoutDays.includes(day) ? 'selected' : ''}`}
//             >
//               {day.substring(0, 3)}
//             </button>
//           ))}
//         </div>
//       </div>
      
//       <div className="form-section">
//         <label className="form-label">Moment préféré</label>
//         <div className="selection-grid three-cols">
//           {timeSlots.map(time => (
//             <button
//               key={time.value}
//               onClick={() => handleInputChange('workoutTime', time.value)}
//               className={`selection-button ${formData.workoutTime === time.value ? 'selected' : ''}`}
//             >
//               <div>
//                 <div>{time.icon}</div>
//                 <div>{time.label}</div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkoutSchedule;
import React from 'react'; 
import './onboardingSteps.css'; 
 
const OnboardingStepSchedule = ({ trainingSchedule, onScheduleChange }) => { 
  const scheduleOptions = [ 
    { 
      value: 'Morning', 
      label: 'Morning', 
      description: '6:00 AM - 10:00 AM', 
      icon: '🌅' 
    }, 
    { 
      value: 'Afternoon', 
      label: 'Afternoon', 
      description: '12:00 PM - 4:00 PM', 
      icon: '☀' 
    }, 
    { 
      value: 'Evening', 
      label: 'Evening', 
      description: '6:00 PM - 10:00 PM', 
      icon: '🌆' 
    } 
  ]; 
 
  return ( 
    <div className="onboarding-step"> 
      <div className="step-header"> 
        <h2>When do you prefer to train?</h2> 
        <p>Choose the time that works best for your schedule</p> 
      </div> 
       
      <div className="step-body"> 
        <div className="options-container"> 
          {scheduleOptions.map((option) => ( 
            <div 
              key={option.value} 
              className={`option-card ${trainingSchedule === option.value ? 'selected' : ''}`} 
              onClick={() => onScheduleChange(option.value)} 
            > 
              <div className="option-icon">{option.icon}</div> 
              <div className="option-content"> 
                <h3 className="option-title">{option.label}</h3> 
                <p className="option-description">{option.description}</p> 
              </div> 
              <div className="option-check"> 
                {trainingSchedule === option.value && '✓'} 
              </div> 
            </div> 
          ))} 
        </div> 
         
        <div className="helpful-text"> 
          <p>
 💡
 You can always change your preferred training time later</p> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default OnboardingStepSchedule; 