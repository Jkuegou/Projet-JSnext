// import React from 'react';

// const PartnersSection = () => {
//   const partners = [
//     { id: 1, name: 'Nike', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Nike' },
//     { id: 2, name: 'Adidas', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Adidas' },
//     { id: 3, name: 'Under Armour', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Under+Armour' },
//     { id: 4, name: 'Puma', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Puma' },
//   ];

//   return (
//     <section className="partners-section py-5 bg-light">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center mb-5">
//             <h2>Nos Partenaires</h2>
//             <p className="lead">Nous travaillons avec les meilleures marques du fitness</p>
//           </div>
//         </div>
//         <div className="row align-items-center justify-content-center">
//           {partners.map(partner => (
//             <div key={partner.id} className="col-6 col-md-3 text-center mb-4">
//               <img 
//                 src={partner.logo} 
//                 alt={partner.name}
//                 className="img-fluid"
//                 style={{ maxHeight: '60px', filter: 'grayscale(100%)', opacity: 0.7 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;
// src/pages/HomePage/sections/PartnersSection.js
// import React from 'react';
// import './HomePage.css';
// const PartnersSection = () => {
//   const partners = [
//     { 
//       id: 1, 
//       name: 'Adidas', 
//       logo: '👟',
//       description: 'Performance sportswear'
//     },
//     { 
//       id: 2, 
//       name: 'Nike', 
//       logo: '✓',
//       description: 'Just Do It'
//     },
//     { 
//       id: 3, 
//       name: 'Fitbit', 
//       logo: '⌚',
//       description: 'Fitness tracking'
//     },
//     { 
//       id: 4, 
//       name: 'Under Armour', 
//       logo: '🏃',
//       description: 'Athletic gear'
//     },
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center mb-5">
//             <p className="text-light opacity-75 mb-4 fs-6 text-uppercase letter-spacing-1">
//               Collaboration with:
//             </p>
//             <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
//               {partners.map((partner, index) => (
//                 <div 
//                   key={partner.id} 
//                   className="partner-logo text-center"
//                   style={{
//                     animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
//                     opacity: 0,
//                     transform: 'translateY(20px)'
//                   }}
//                 >
//                   <div className="d-flex flex-column align-items-center p-3 rounded-3 transition-all"
//                        style={{
//                          transition: 'all 0.3s ease',
//                          cursor: 'pointer'
//                        }}
//                        onMouseEnter={(e) => {
//                          e.currentTarget.style.transform = 'translateY(-5px)';
//                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
//                        }}
//                        onMouseLeave={(e) => {
//                          e.currentTarget.style.transform = 'translateY(0)';
//                          e.currentTarget.style.backgroundColor = 'transparent';
//                        }}>
//                     <div className="mb-2" style={{ fontSize: '2.5rem', opacity: 0.7 }}>
//                       {partner.logo}
//                     </div>
//                     <span className="text-light opacity-60 fw-medium fs-6">
//                       {partner.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* <style jsx>{`
//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .letter-spacing-1 {
//           letter-spacing: 1px;
//         }
//       `}</style> */}
//     </section>
//   );
// };

// export default PartnersSection;
import React from 'react';

// Fonction utilitaire pour convertir hex en rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255, 255, 255';
};

// Partners Section améliorée
const PartnersSection = () => {
  const partners = [
    { name: 'Adidas', logo: '👟', color: '#FF6B35' },
    { name: 'Nike', logo: '✓', color: '#4CAF50' },
    { name: 'Fitbit', logo: '⌚', color: '#2196F3' },
    { name: 'Under Armour', logo: '🏃', color: '#9C27B0' },
    { name: 'Puma', logo: '🐆', color: '#FF9800' },
    { name: 'Reebok', logo: '⚡', color: '#F44336' }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span 
              className="badge px-3 py-2 mb-3"
              style={{
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                color: '#FF6B35',
                borderRadius: '20px'
              }}
            >
              🤝 Trusted Partners
            </span>
            <p className="text-light opacity-75 mb-5 fs-5">
              Collaboration with industry leaders
            </p>
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name} 
                  className="partner-logo text-center"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  <div 
                    className="d-flex flex-column align-items-center p-4 rounded-4 position-relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      minWidth: '120px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                      e.currentTarget.style.background = `rgba(${hexToRgb(partner.color)}, 0.1)`;
                      e.currentTarget.style.borderColor = `${partner.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <div 
                      className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{ 
                        fontSize: '2rem', 
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}40)`
                      }}
                    >
                      {partner.logo}
                    </div>
                    <span 
                      className="fw-medium"
                      style={{ color: '#e2e8f0' }}
                    >
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Style pour l'animation fadeInUp */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;