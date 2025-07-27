// import React from 'react';
// import './HomePage.css';
// const StatsSection = () => {
//   const stats = [
//     {
//       number: '50K+',
//       label: 'Active Users',
//       icon: 'fas fa-users'
//     },
//     {
//       number: '1M+',
//       label: 'Workouts Completed',
//       icon: 'fas fa-dumbbell'
//     },
//     {
//       number: '95%',
//       label: 'Success Rate',
//       icon: 'fas fa-trophy'
//     },
//     {
//       number: '24/7',
//       label: 'Support Available',
//       icon: 'fas fa-headset'
//     }
//   ];

//   return (
//     <section className="stats-section py-5 bg-primary text-white">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center mb-5">
//             <h2 className="display-5 fw-bold mb-4">Trusted by Thousands</h2>
//             <p className="lead opacity-75">
//               Join our growing community of fitness enthusiasts who are 
//               transforming their lives every day.
//             </p>
//           </div>
//         </div>
        
//         <div className="row g-4">
//           {stats.map((stat, index) => (
//             <div key={index} className="col-lg-3 col-md-6 col-sm-6">
//               <div className="stat-card text-center p-4">
//                 <div className="stat-icon mb-3">
//                   <i className={`${stat.icon} fa-3x opacity-75`}></i>
//                 </div>
//                 <div className="stat-number display-4 fw-bold mb-2">{stat.number}</div>
//                 <div className="stat-label h6 opacity-75 mb-0">{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import React from 'react';

// Stats Section améliorée
const StatsSection = () => {
  const stats = [
    {
      number: '50K+',
      label: 'Active Users',
      icon: '👥',
      description: 'Growing community'
    },
    {
      number: '1M+',
      label: 'Workouts Completed',
      icon: '💪',
      description: 'And counting'
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: '🎯',
      description: 'Goal achievement'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: '🛟',
      description: 'Always here for you'
    }
  ];

  return (
    <section 
      className="py-5 text-white position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
      }}
    >
      {/* Éléments décoratifs */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: 'rgba(255, 107, 53, 0.1)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <span 
              className="badge px-3 py-2 mb-3"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px'
              }}
            >
              📈 Our Impact
            </span>
            <h2 className="display-5 fw-bold mb-4">Trusted by Thousands Worldwide</h2>
            <p className="lead opacity-75">
              Join our growing community of fitness enthusiasts who are transforming their lives every day.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="text-center p-4 rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="mb-3" style={{ fontSize: '3rem' }}>{stat.icon}</div>
                <div className="display-4 fw-bold mb-2">{stat.number}</div>
                <div className="h6 mb-1">{stat.label}</div>
                <small className="opacity-75">{stat.description}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Style pour l'animation float */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;