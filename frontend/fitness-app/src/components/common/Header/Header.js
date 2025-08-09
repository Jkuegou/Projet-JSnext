// import React from 'react';
// import Navigation from './Navigation';
// import './Header.css';

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="/">
//           <i className="bi bi-activity me-2"></i>
//           JuniortFitness
//         </a>
//         <Navigation />
//       </div>
//     </nav>
//   );
// };

// export default Header;
// src/components/common/Header/Header.js
import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0" style={{ 
      backgroundColor: '#afacacff', 
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="/">
          <span className="me-2 text-primary">⚡</span>
          JuniorFitness
        </a>
        <Navigation />
      </div>
    </nav>
  );
};

export default Header;