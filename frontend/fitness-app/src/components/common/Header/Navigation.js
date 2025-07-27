// import React from 'react';
// import Button from '../Button/Button';

// // import Login from './components/auth/Login/Login';
// // import Register from './components/auth/Register/Register';
// const Navigation = () => {
//   return (
//     <>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/service">Service</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/pricing">Pricing</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/work">Our Work</a>
//           </li>
//         </ul>
//         <Button variant="outline-light" className="ms-3">
//           <a className="nav-link" href="/login">Login</a>
//           </Button>
//       </div>
//     </>
//   );
// };

// export default Navigation;

// src/components/common/Header/Navigation.js
// import React, { useState } from 'react';
// import Button from '../Button/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';


// import Login from './components/auth/Login/Login';
// // import Register from './components/auth/Register/Register';
// const { user } = useAuth();
// const navigate = useNavigate();

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <button 
//         className="navbar-toggler border-0" 
//         type="button" 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         style={{ boxShadow: 'none' }}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
      
//       <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
//         <ul className="navbar-nav ms-auto me-4">
//           <li className="nav-item">
//             <a className="nav-link px-3 fw-medium position-relative" href="/">
//               Home
//               <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
//                     style={{ width: '4px', height: '4px', borderRadius: '50%' }}></span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-3 fw-medium" href="/service">Service</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-3 fw-medium" href="/pricing">Pricing</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-3 fw-medium" href="/work">Our Work</a>
//           </li>
//         </ul>
//         {user ? (
//   <Button
//     variant="outline-light"
//     size="sm"
//     onClick={() => navigate(user.role === 'admin' ? '/admin' : '/dashboard')}
//   >
//     Dashboard
//   </Button>
// ) : (
//   <Button
//     variant="outline-light"
//     size="sm"
//     onClick={() => navigate('/login')}
//   >
//     Login
//   </Button>
// )}

//       </div>
//     </>
//   );
// };

// export default Navigation;
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth(); // ✅ déplacer ici
  const navigate = useNavigate(); // ✅ déplacer ici

  return (
    <>
      <button 
        className="navbar-toggler border-0" 
        type="button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ boxShadow: 'none' }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto me-4">
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium position-relative" href="/">
              Home
              <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
                    style={{ width: '4px', height: '4px', borderRadius: '50%' }}></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/service">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3 fw-medium" href="/work">Our Work</a>
          </li>
        </ul>
        
        {user ? (
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => navigate(user.role === 'admin' ? '/admin' : '/dashboard')}
          >
            Dashboard
          </Button>
        ) : (
          <Button className="text-black"
            variant="outline-light"
            size="sm"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </div>
    </>
  );
};

export default Navigation;
