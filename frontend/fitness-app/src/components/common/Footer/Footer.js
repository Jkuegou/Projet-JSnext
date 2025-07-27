// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-4 mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h5>Fitness App</h5>
//             <p>Votre partenaire pour une vie plus saine</p>
//           </div>
//           <div className="col-md-6">
//             <h5>Liens rapides</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-white-50">Accueil</a></li>
//               <li><a href="/workouts" className="text-white-50">Entraînements</a></li>
//               <li><a href="/exercises" className="text-white-50">Exercices</a></li>
//               <li><a href="/progress" className="text-white-50">Progrès</a></li>
//             </ul>
//           </div>
//         </div>
//         <hr className="my-4" />
//         <div className="row">
//           <div className="col-12 text-center">
//             <p className="mb-0">&copy; 2024 Fitness App. Tous droits réservés.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// src/components/common/Footer/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 mt-5" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="mb-4">
              <h5 className="text-white mb-3 d-flex align-items-center">
                <span className="me-2 text-primary fs-4">⚡</span>
                JuniorFitness
              </h5>
              <p className="text-light opacity-75 mb-3">
                Votre partenaire pour une vie plus saine et plus active. 
                Transformez votre corps et votre esprit avec nos programmes personnalisés.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-light opacity-75 text-decoration-none fs-5"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.color = '#007bff';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.color = '#f8f9fa';
                   }}>
                  📘
                </a>
                <a href="#" className="text-light opacity-75 text-decoration-none fs-5"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.color = '#007bff';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.color = '#f8f9fa';
                   }}>
                  📷
                </a>
                <a href="#" className="text-light opacity-75 text-decoration-none fs-5"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.color = '#007bff';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.color = '#f8f9fa';
                   }}>
                  🐦
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3 fs-6 text-uppercase">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="/service" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Tarifs
                </a>
              </li>
              <li className="mb-2">
                <a href="/work" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Nos Travaux
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white mb-3 fs-6 text-uppercase">Programmes</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/workouts" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Entraînements
                </a>
              </li>
              <li className="mb-2">
                <a href="/exercises" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Exercices
                </a>
              </li>
              <li className="mb-2">
                <a href="/progress" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Progression
                </a>
              </li>
              <li className="mb-2">
                <a href="/nutrition" className="text-light opacity-75 text-decoration-none"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.target.style.opacity = '1';
                     e.target.style.paddingLeft = '5px';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.opacity = '0.75';
                     e.target.style.paddingLeft = '0';
                   }}>
                  Nutrition
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white mb-3 fs-6 text-uppercase">Newsletter</h5>
            <p className="text-light opacity-75 mb-3">
              Restez informé des dernières actualités et conseils fitness.
            </p>
            <div className="d-flex">
              <input 
                type="email" 
                className="form-control bg-transparent border-light text-light me-2" 
                placeholder="Votre email"
                style={{ 
                  borderRadius: '25px',
                  padding: '8px 15px'
                }}
              />
              <button 
                className="btn btn-primary rounded-pill px-3"
                style={{ 
                  minWidth: '50px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}>
                →
              </button>
            </div>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 text-light opacity-50 fs-6">
              &copy; {currentYear} JuniorFitness. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="/privacy" className="text-light opacity-50 text-decoration-none fs-6">
                Confidentialité
              </a>
              <a href="/terms" className="text-light opacity-50 text-decoration-none fs-6">
                Conditions
              </a>
              <a href="/cookies" className="text-light opacity-50 text-decoration-none fs-6">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;