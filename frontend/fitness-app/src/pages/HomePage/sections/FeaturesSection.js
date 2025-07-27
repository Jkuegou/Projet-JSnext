// import React from 'react';
// import './HomePage.css';
// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: 'fas fa-dumbbell',
//       title: 'Workout Tracking',
//       description: 'Log your exercises, sets, and reps with our intuitive workout tracker.'
//     },
//     {
//       icon: 'fas fa-chart-line',
//       title: 'Progress Analytics',
//       description: 'Visualize your fitness journey with detailed charts and statistics.'
//     },
//     {
//       icon: 'fas fa-calendar-alt',
//       title: 'Training Plans',
//       description: 'Follow personalized training programs designed for your goals.'
//     },
//     {
//       icon: 'fas fa-users',
//       title: 'Community Support',
//       description: 'Connect with other fitness enthusiasts and share your achievements.'
//     },
//     {
//       icon: 'fas fa-trophy',
//       title: 'Goal Setting',
//       description: 'Set realistic fitness goals and track your progress towards them.'
//     },
//     {
//       icon: 'fas fa-mobile-alt',
//       title: 'Mobile App',
//       description: 'Access your fitness data anywhere with our mobile application.'
//     }
//   ];

//   return (
//     <section className="features-section py-5 bg-light">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center mb-5">
//             <h2 className="display-5 fw-bold mb-4">Why Choose Our Fitness App?</h2>
//             <p className="lead text-muted">
//               Our comprehensive fitness tracking platform provides everything you need 
//               to achieve your health and wellness goals.
//             </p>
//           </div>
//         </div>
        
//         <div className="row g-4">
//           {features.map((feature, index) => (
//             <div key={index} className="col-lg-4 col-md-6">
//               <div className="feature-card h-100 p-4 bg-white rounded-3 shadow-sm border-0 text-center">
//                 <div className="feature-icon mb-4">
//                   <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3">
//                     <i className={`${feature.icon} fa-2x text-primary`}></i>
//                   </div>
//                 </div>
//                 <h5 className="fw-bold mb-3">{feature.title}</h5>
//                 <p className="text-muted mb-0">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from 'react';

// Features Section modernisée
const FeaturesSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Advanced AI-powered insights to track your progress and optimize your workouts.',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)'
    },
    {
      icon: '🎯',
      title: 'Personalized Goals',
      description: 'Set and achieve custom fitness goals tailored to your lifestyle and preferences.',
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Join a vibrant community of fitness enthusiasts and share your journey.',
      gradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Seamless experience across all devices with our responsive design.',
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)'
    },
    {
      icon: '⚡',
      title: 'Real-time Sync',
      description: 'Instant synchronization across all your devices and wearables.',
      gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Unlock badges and achievements as you reach your fitness milestones.',
      gradient: 'linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)'
    }
  ];

  return (
    <section className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <span 
              className="badge px-3 py-2 mb-3"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                color: 'white',
                borderRadius: '20px'
              }}
            >
              ✨ Features
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e293b' }}>
              Everything You Need to Succeed
            </h2>
            <p className="lead" style={{ color: '#64748b' }}>
              Powerful features designed to make your fitness journey enjoyable and effective.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="h-100 p-4 bg-white rounded-4 shadow-sm border-0 position-relative overflow-hidden"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div className="text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: feature.gradient,
                      fontSize: '2rem'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
                    {feature.title}
                  </h5>
                  <p className="mb-0" style={{ color: '#64748b' }}>
                    {feature.description}
                  </p>
                </div>
                
                {/* Effet de brillance au survol */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    transform: 'translateX(-100%)',
                    transition: 'all 0.6s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;