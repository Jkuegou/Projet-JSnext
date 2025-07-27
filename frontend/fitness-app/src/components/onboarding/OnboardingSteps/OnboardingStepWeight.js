import React, { useState } from 'react'; 
import './onboardingSteps.css'; 
 
const OnboardingStepWeight = ({ weight, onWeightChange }) => { 
  const [error, setError] = useState(''); 
 
  const handleWeightChange = (e) => { 
    const value = e.target.value; 
     
    // Basic validation 
    if (value && (isNaN(value) || parseFloat(value) <= 0)) { 
      setError('Please enter a valid weight greater than 0'); 
    } else { 
      setError(''); 
    } 
     
    onWeightChange(value); 
  }; 
 
  return ( 
    <div className="onboarding-step"> 
      <div className="step-header"> 
        <h2>What's your current weight?</h2> 
        <p>This helps us personalize your fitness journey</p> 
      </div> 
       
      <div className="step-body"> 
        <div className="input-group"> 
          <label htmlFor="weight" className="input-label"> 
            Weight (kg) 
          </label> 
          <input 
            type="number" 
            id="weight" 
            className={`form-input ${error ? 'error' : ''}`} 
            value={weight} 
            onChange={handleWeightChange} 
            placeholder="Enter your weight" 
            min="1" 
            step="0.1" 
          /> 
          {error && <span className="error-message">{error}</span>} 
        </div> 
         
        <div className="helpful-text"> 
          <p>
 💡
 Don't worry, you can update this later in your profile</p> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default OnboardingStepWeight; 