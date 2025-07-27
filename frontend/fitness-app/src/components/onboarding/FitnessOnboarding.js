import React, { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { AuthProvider } from '../../context/AuthContext'; 
import { NotificationContext } from '../../context/NotificationContext'; 
import OnboardingStepWeight from './OnboardingSteps/OnboardingStepWeight'; 
import OnboardingStepTrainingType from './OnboardingSteps/OnboardingStepTrainingType'; 
import OnboardingStepSchedule from './OnboardingSteps/OnboardingStepSchedule'; 
import OnboardingSummary from './OnboardingSteps/OnboardingSummary'; 
import './Onboarding.css'; 
const FitnessOnboarding = () => { 
const navigate = useNavigate(); 
const { user } = useContext(AuthProvider); 
const { showNotification } = useContext(NotificationContext); 
// State to manage current step and onboarding data 
const [currentStep, setCurrentStep] = useState(1); 
const [isLoading, setIsLoading] = useState(false); 
const [onboardingData, setOnboardingData] = useState({
  weight: '', 
  trainingType: '',
  trainingSchedule: '',
});
const totalSteps = 4; 
// Handle moving to next step 
const handleNextStep = () => { 
    if (currentStep < totalSteps) { 
      setCurrentStep(currentStep + 1); 
    } 
  }; 
 
  // Handle moving to previous step 
  const handlePrevStep = () => { 
    if (currentStep > 1) { 
      setCurrentStep(currentStep - 1); 
    } 
  }; 
 
  // Update onboarding data 
  const updateOnboardingData = (field, value) => { 
    setOnboardingData(prev => ({ 
      ...prev, 
      [field]: value 
    })); 
  }; 
 
  // Validate current step data 
  const validateCurrentStep = () => { 
    switch (currentStep) { 
      case 1: 
        return onboardingData.weight && parseFloat(onboardingData.weight) > 0; 
      case 2: 
        return onboardingData.trainingType !== ''; 
      case 3: 
        return onboardingData.trainingSchedule !== ''; 
      default: 
        return true; 
    } 
  }; 
 
  // Submit onboarding data to backend 
  const handleFinishOnboarding = async () => { 
    try { 
      setIsLoading(true); 
       
      const response = await fetch('/api/onboarding', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }, 
        body: JSON.stringify({ 
          weight: parseFloat(onboardingData.weight), 
          trainingType: onboardingData.trainingType, 
          trainingSchedule: onboardingData.trainingSchedule 
        }) 
      }); 
 
      if (!response.ok) { 
        throw new Error('Failed to save onboarding data'); 
      } 
 
      const result = await response.json(); 
       
      showNotification('Onboarding completed successfully!', 'success'); 
       
      // Navigate to dashboard after successful onboarding 
      navigate('/dashboard'); 
       
    } catch (error) { 
      console.error('Error completing onboarding:', error); 
      showNotification('Failed to complete onboarding. Please try again.', 'error'); 
    } finally { 
      setIsLoading(false); 
    } 
  }; 
 
  // Render current step component 
  const renderCurrentStep = () => { 
    switch (currentStep) { 
      case 1: 
        return ( 
          <OnboardingStepWeight 
            weight={onboardingData.weight} 
            onWeightChange={(value) => updateOnboardingData('weight', value)} 
          /> 
        ); 
      case 2: 
        return ( 
          <OnboardingStepTrainingType 
            trainingType={onboardingData.trainingType} 
            onTrainingTypeChange={(value) => updateOnboardingData('trainingType', value)} 
          /> 
        ); 
      case 3: 
        return ( 
          <OnboardingStepSchedule 
            trainingSchedule={onboardingData.trainingSchedule} 
            onScheduleChange={(value) => updateOnboardingData('trainingSchedule', value)} 
          /> 
        ); 
      case 4: 
        return ( 
          <OnboardingSummary 
            data={onboardingData} 
            onFinish={handleFinishOnboarding} 
            isLoading={isLoading} 
          /> 
        ); 
      default: 
        return null; 
    } 
  }; 
 
  return ( 
    <div className="onboarding-container"> 
      <div className="onboarding-wrapper"> 
        {/* Progress Bar */} 
        <div className="progress-container"> 
          <div className="progress-bar"> 
            <div  
              className="progress-fill"  
              style={{ width: `${(currentStep / totalSteps) * 100}%` }} 
            ></div> 
          </div> 
          <span className="progress-text"> 
            Step {currentStep} of {totalSteps} 
          </span> 
        </div> 
 
        {/* Step Content */} 
        <div className="step-content"> 
          {renderCurrentStep()} 
        </div> 
 
        {/* Navigation Buttons */} 
        {currentStep < 4 && ( 
          <div className="navigation-buttons"> 
            <button  
              className="btn btn-secondary" 
              onClick={handlePrevStep} 
              disabled={currentStep === 1} 
            > 
              Previous 
            </button> 
            <button  
              className="btn btn-primary" 
              onClick={handleNextStep} 
              disabled={!validateCurrentStep()} 
            > 
              Next 
            </button> 
          </div> 
        )} 
      </div> 
    </div> 
  ); 
}; 
 
export default FitnessOnboarding;