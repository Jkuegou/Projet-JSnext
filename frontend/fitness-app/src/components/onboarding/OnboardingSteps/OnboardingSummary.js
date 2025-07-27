import React from 'react'; 
import './onboardingSteps.css'; 
 
const OnboardingSummary = ({ data, onFinish, isLoading }) => { 
  const summaryItems = [ 
    { 
      label: 'Weight', 
      value: `${data.weight} kg`, 
      icon: '⚖' 
    }, 
    { 
      label: 'Training Goal', 
      value: data.trainingType, 
      icon: '🎯' 
    }, 
    { 
      label: 'Preferred Time', 
      value: data.trainingSchedule, 
      icon: '⏰' 
    } 
  ]; 
 
  return ( 
    <div className="onboarding-step"> 
      <div className="step-header"> 
        <h2>Almost done! 
�
�
 </h2> 
        <p>Review your information before we create your personalized plan</p> 
      </div> 
       
      <div className="step-body"> 
        <div className="summary-container"> 
          <h3 className="summary-title">Your Profile Summary</h3> 
           
          <div className="summary-items"> 
            {summaryItems.map((item, index) => ( 
              <div key={index} className="summary-item"> 
                <div className="summary-icon">{item.icon}</div> 
                <div className="summary-content"> 
                  <span className="summary-label">{item.label}</span> 
                  <span className="summary-value">{item.value}</span> 
                </div> 
              </div> 
            ))} 
          </div> 
           
          <div className="summary-message"> 
            <p> 
              Great! Based on your information, we'll create a personalized  
              fitness plan to help you achieve your goals. You can always  
              update these settings in your profile. 
            </p> 
          </div> 
           
          <button  
            className="btn btn-primary btn-large" 
            onClick={onFinish} 
            disabled={isLoading} 
          > 
            {isLoading ? ( 
              <> 
                <span className="spinner"></span> 
                Setting up your profile... 
              </> 
            ) : ( 
              'Complete Setup' 
            )} 
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default OnboardingSummary; 