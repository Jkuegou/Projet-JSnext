// // // import React from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './HomePage.css';

// // // const HomePage = () => {
// // //   return (
// // //     <div className="homepage-container">
// // //       {/* Header Navigation */}
// // //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
// // //         <div className="container">
// // //           <a className="navbar-brand fw-bold" href="#">
// // //             <i className="bi bi-activity me-2"></i>
// // //             JuniortFitness
// // //           </a>
// // //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>
// // //           <div className="collapse navbar-collapse" id="navbarNav">
// // //             <ul className="navbar-nav ms-auto">
// // //               <li className="nav-item">
// // //                 <a className="nav-link" href="#">Home</a>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <a className="nav-link" href="#">Service</a>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <a className="nav-link" href="#">Pricing</a>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <a className="nav-link" href="#">Our Work</a>
// // //               </li>
// // //             </ul>
// // //             <button className="btn btn-outline-light ms-3">Join Us</button>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="hero-section bg-dark text-white">
// // //         <div className="container">
// // //           <div className="row align-items-center min-vh-100 py-5">
// // //             <div className="col-lg-6">
// // //               <div className="hero-content">
// // //                 <h1 className="display-2 fw-bold mb-4">
// // //                   Get Fit,<br />
// // //                   Get Strong,<br />
// // //                   Get Healthy!
// // //                 </h1>
// // //                 <p className="lead mb-4 text-light opacity-75">
// // //                   Transform your body with our comprehensive fitness program designed to 
// // //                   help you achieve your fitness goals and transform your body and mind.
// // //                 </p>
// // //                 <div className="d-flex gap-3 flex-wrap">
// // //                   <button className="btn btn-primary btn-lg px-4 py-2">
// // //                     Start Now!
// // //                   </button>
// // //                   <button className="btn btn-outline-light btn-lg px-4 py-2">
// // //                     Download APP
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <div className="col-lg-6">
// // //               <div className="hero-visual position-relative">
// // //                 {/* Workout Cards */}
// // //                 <div className="workout-cards">
// // //                   <div className="workout-card card-1 position-absolute">
// // //                     <div className="card bg-dark text-white border-0 shadow-lg">
// // //                       <div className="card-body p-3">
// // //                         <div className="d-flex align-items-center">
// // //                           <div className="workout-avatar me-3">
// // //                             <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=face" 
// // //                                  alt="Workout" className="rounded-circle" width="50" height="50" />
// // //                           </div>
// // //                           <div>
// // //                             <h6 className="mb-1 text-primary">Repetition Quality</h6>
// // //                             <small className="text-light opacity-75">3x sets</small>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   <div className="workout-card card-2 position-absolute">
// // //                     <div className="card bg-primary text-white border-0 shadow-lg">
// // //                       <div className="card-body p-3">
// // //                         <div className="d-flex align-items-center">
// // //                           <div className="workout-avatar me-3">
// // //                             <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=60&h=60&fit=crop&crop=face" 
// // //                                  alt="Workout" className="rounded-circle" width="50" height="50" />
// // //                           </div>
// // //                           <div>
// // //                             <h6 className="mb-1">25 Workouts</h6>
// // //                             <small className="opacity-75">This month</small>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   <div className="workout-card card-3 position-absolute">
// // //                     <div className="card bg-success text-white border-0 shadow-lg">
// // //                       <div className="card-body p-3">
// // //                         <div className="d-flex align-items-center">
// // //                           <div className="workout-avatar me-3">
// // //                             <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=60&h=60&fit=crop&crop=face" 
// // //                                  alt="Workout" className="rounded-circle" width="50" height="50" />
// // //                           </div>
// // //                           <div>
// // //                             <h6 className="mb-1">Daily Calories</h6>
// // //                             <small className="opacity-75">1,847 kcal</small>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Main Hero Image */}
// // //                 <div className="hero-image-main">
// // //                   <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" 
// // //                        alt="Fitness Hero" className="img-fluid rounded-4 shadow-lg" />
// // //                 </div>

// // //                 {/* Stats Chart */}
// // //                 <div className="stats-chart position-absolute">
// // //                   <div className="card bg-dark text-white border-0 shadow-lg">
// // //                     <div className="card-body p-3">
// // //                       <h6 className="mb-3 text-primary">148 Cal</h6>
// // //                       <div className="chart-bars d-flex align-items-end gap-1">
// // //                         <div className="bar bg-primary" style={{height: '20px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '35px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '25px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '45px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '30px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '40px', width: '6px'}}></div>
// // //                         <div className="bar bg-primary" style={{height: '55px', width: '6px'}}></div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Partners Section */}
// // //       <section className="partners-section py-5 bg-dark">
// // //         <div className="container">
// // //           <div className="row">
// // //             <div className="col-12">
// // //               <p className="text-center text-light opacity-75 mb-4">Collaboration with:</p>
// // //               <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
// // //                 <div className="partner-logo">
// // //                   <img src="https://logoeps.com/wp-content/uploads/2013/03/adidas-vector-logo.png" 
// // //                        alt="Adidas" className="img-fluid opacity-50" style={{height: '40px'}} />
// // //                 </div>
// // //                 <div className="partner-logo">
// // //                   <img src="https://logoeps.com/wp-content/uploads/2014/09/nike-vector-logo.png" 
// // //                        alt="Nike" className="img-fluid opacity-50" style={{height: '40px'}} />
// // //                 </div>
// // //                 <div className="partner-logo">
// // //                   <img src="https://logoeps.com/wp-content/uploads/2013/12/fitbit-vector-logo.png" 
// // //                        alt="Fitbit" className="img-fluid opacity-50" style={{height: '40px'}} />
// // //                 </div>
// // //                 <div className="partner-logo">
// // //                   <img src="https://logoeps.com/wp-content/uploads/2013/03/under-armour-vector-logo.png" 
// // //                        alt="Under Armour" className="img-fluid opacity-50" style={{height: '40px'}} />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;
// // // src/pages/HomePage/HomePage.js
// // // import React from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './HomePage.css';

// // // // Import des sections
// // // import HeroSection from './sections/HeroSection';
// // // import PartnersSection from './sections/PartnersSection';

// // // // Import des composants communs
// // // import Header from '../../components/common/Header/Header';
// // // import Footer from '../../components/common/Footer/Footer';

// // // const HomePage = () => {
// // //   return (
// // //     <div className="homepage-container">
// // //       <Header />
// // //       <HeroSection />
// // //       <PartnersSection />
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;
// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './HomePage.css';

// // // Test des imports un par un - décommentez une ligne à la fois
// // import HeroSection from './sections/HeroSection';
// // import PartnersSection from './sections/PartnersSection';
// // import Header from '../../components/common/Header/Header';
// // import Footer from '../../components/common/Footer/Footer';
// // // Composants temporaires pour le test
// // // const HeroSection = () => <div>Hero Section temporaire</div>;
// // // const PartnersSection = () => <div>Partners Section temporaire</div>;
// // // const Header = () => <div>Header temporaire</div>;
// // // const Footer = () => <div>Footer temporaire</div>;

// // const HomePage = () => {
// //   return (
// //     <div className="homepage-container">
// //       <Header />
// //       <HeroSection />
// //       <PartnersSection />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default HomePage;
// // 
// import React, { useState, useEffect } from 'react';

// // Button Component amélioré
// const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
//   const baseClasses = 'btn fw-semibold text-decoration-none border-0 position-relative overflow-hidden';
//   const variantClasses = {
//     primary: 'bg-gradient text-white shadow-lg',
//     'outline-light': 'border-2 border-light text-light bg-transparent backdrop-blur',
//     'outline-primary': 'border-2 border-primary text-primary bg-transparent'
//   };
//   const sizeClasses = {
//     sm: 'px-3 py-2 fs-6 rounded-pill',
//     md: 'px-4 py-2 fs-6 rounded-pill',
//     lg: 'px-5 py-3 fs-5 rounded-pill'
//   };
  
//   return (
//     <button 
//       className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
//       style={{ 
//         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//         background: variant === 'primary' ? 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)' : undefined
//       }}
//       {...props}
//     >
//       <span className="position-relative z-1">{children}</span>
//       {variant === 'primary' && (
//         <div 
//           className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
//           style={{
//             background: 'linear-gradient(135deg, #E55A2B 0%, #D32F2F 100%)',
//             transition: 'opacity 0.3s ease'
//           }}
//           onMouseEnter={(e) => e.target.style.opacity = '1'}
//           onMouseLeave={(e) => e.target.style.opacity = '0'}
//         />
//       )}
//     </button>
//   );
// };

// // Header Component amélioré avec glassmorphism
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav 
//       className="navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0" 
//       style={{ 
//         background: scrolled 
//           ? 'rgba(30, 60, 114, 0.9)' 
//           : 'rgba(30, 60, 114, 0.1)',
//         backdropFilter: 'blur(20px)',
//         borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
//         zIndex: 1000,
//         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
//       }}
//     >
//       <div className="container">
//         <a className="navbar-brand fw-bold fs-3 d-flex align-items-center" href="/">
//           <div 
//             className="me-2 d-flex align-items-center justify-content-center rounded-circle"
//             style={{
//               width: '40px',
//               height: '40px',
//               background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//               boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
//             }}
//           >
//             <span className="text-white">⚡</span>
//           </div>
//           <span className="text-white">JuniorFitness</span>
//         </a>
        
//         <button 
//           className="navbar-toggler border-0" 
//           type="button" 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           style={{ boxShadow: 'none' }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav ms-auto me-4">
//             {['Home', 'Service', 'Pricing', 'Our Work'].map((item, index) => (
//               <li key={index} className="nav-item">
//                 <a 
//                   className="nav-link px-3 fw-medium position-relative"
//                   href={`/${item.toLowerCase().replace(' ', '')}`}
//                   style={{
//                     transition: 'all 0.3s ease',
//                     color: 'rgba(255, 255, 255, 0.9)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.color = '#FF6B35';
//                     e.target.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.color = 'rgba(255, 255, 255, 0.9)';
//                     e.target.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <Button variant="outline-light" size="sm">
//             Login
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Hero Section avec animations améliorées
// const HeroSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section 
//       className="position-relative overflow-hidden"
//       style={{ 
//         background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
//         minHeight: '100vh',
//         paddingTop: '80px'
//       }}
//     >
//       {/* Particles d'arrière-plan */}
//       <div className="position-absolute w-100 h-100 top-0 start-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="position-absolute rounded-circle opacity-10"
//             style={{
//               width: Math.random() * 6 + 2 + 'px',
//               height: Math.random() * 6 + 2 + 'px',
//               background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//               animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container">
//         <div className="row align-items-center min-vh-100 py-5">
//           <div className="col-lg-6">
//             <div 
//               className="hero-content"
//               style={{
//                 transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
//                 transition: 'transform 0.1s ease-out'
//               }}
//             >
//               <div className="mb-4">
//                 <span 
//                   className="badge text-white px-3 py-2 mb-3"
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     backdropFilter: 'blur(10px)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '20px'
//                   }}
//                 >
//                   🏆 #1 Fitness App in Cameroon
//                 </span>
//               </div>
              
//               <h1 
//                 className="display-1 fw-bold mb-4 text-white"
//                 style={{ 
//                   lineHeight: '1.1',
//                   textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
//                 }}
//               >
//                 Get Fit,<br />
//                 <span 
//                   className="position-relative"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text'
//                   }}
//                 >
//                   Get Strong,
//                 </span><br />
//                 Get Healthy!
//               </h1>
              
//               <p 
//                 className="lead mb-5 fs-5"
//                 style={{ 
//                   color: 'rgba(255, 255, 255, 0.85)',
//                   lineHeight: '1.6'
//                 }}
//               >
//                 Transform your body with our comprehensive fitness program designed to 
//                 help you achieve your fitness goals and transform your body and mind.
//               </p>
              
//               <div className="d-flex gap-3 flex-wrap align-items-center">
//                 <Button variant="primary" size="lg">
//                   Start Your Journey
//                 </Button>
//                 <Button variant="outline-light" size="lg">
//                   Watch Demo
//                 </Button>
//                 <div className="ms-3 d-flex align-items-center">
//                   <div className="d-flex">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className="text-warning me-1">⭐</span>
//                     ))}
//                   </div>
//                   <small className="text-white-50 ms-2">4.9/5 (2.3k reviews)</small>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-lg-6">
//             <div className="hero-visual position-relative h-100 d-flex align-items-center justify-content-center">
//               <div 
//                 className="workout-cards position-relative"
//                 style={{ 
//                   width: '450px', 
//                   height: '500px',
//                   transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
//                   transition: 'transform 0.1s ease-out'
//                 }}
//               >
                
//                 {/* Card 1 - Repetition Quality */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     top: '50px', 
//                     left: '20px',
//                     animation: 'float 3s ease-in-out infinite'
//                   }}
//                 >
//                   <div 
//                     className="card text-white border-0 shadow-lg"
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       backdropFilter: 'blur(20px)',
//                       border: '1px solid rgba(255, 255, 255, 0.2)',
//                       borderRadius: '20px',
//                       width: '240px'
//                     }}
//                   >
//                     <div className="card-body p-4">
//                       <div className="d-flex align-items-center">
//                         <div className="workout-avatar me-3">
//                           <div 
//                             className="rounded-circle d-flex align-items-center justify-content-center" 
//                             style={{ 
//                               width: '55px', 
//                               height: '55px',
//                               background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                               boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
//                             }}
//                           >
//                             <span className="text-white fw-bold fs-4">💪</span>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="mb-1 fw-bold" style={{ color: '#FF6B35' }}>
//                             Repetition Quality
//                           </h6>
//                           <small className="text-white-50">3x sets completed</small>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card 2 - 25 Workouts */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     top: '150px', 
//                     right: '30px',
//                     animation: 'float 3s ease-in-out infinite 1s'
//                   }}
//                 >
//                   <div 
//                     className="card text-white border-0 shadow-lg"
//                     style={{ 
//                       background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                       borderRadius: '20px',
//                       width: '220px',
//                       boxShadow: '0 8px 30px rgba(255, 107, 53, 0.3)'
//                     }}
//                   >
//                     <div className="card-body p-4">
//                       <div className="d-flex align-items-center">
//                         <div className="workout-avatar me-3">
//                           <div 
//                             className="rounded-circle bg-white d-flex align-items-center justify-content-center" 
//                             style={{ width: '55px', height: '55px' }}
//                           >
//                             <span className="fw-bold fs-4" style={{ color: '#FF6B35' }}>25</span>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="mb-1 fw-bold">25 Workouts</h6>
//                           <small className="opacity-75">This month</small>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card 3 - Daily Calories */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     bottom: '120px', 
//                     left: '40px',
//                     animation: 'float 3s ease-in-out infinite 2s'
//                   }}
//                 >
//                   <div 
//                     className="card text-white border-0 shadow-lg"
//                     style={{ 
//                       background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
//                       borderRadius: '20px',
//                       width: '200px',
//                       boxShadow: '0 8px 30px rgba(76, 175, 80, 0.3)'
//                     }}
//                   >
//                     <div className="card-body p-4">
//                       <div className="d-flex align-items-center">
//                         <div className="workout-avatar me-3">
//                           <div 
//                             className="rounded-circle bg-white d-flex align-items-center justify-content-center" 
//                             style={{ width: '55px', height: '55px' }}
//                           >
//                             <span className="fw-bold fs-4" style={{ color: '#4CAF50' }}>🔥</span>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="mb-1 fw-bold">Daily Calories</h6>
//                           <small className="opacity-75">1,847 kcal</small>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats Chart amélioré */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     bottom: '50px', 
//                     right: '20px',
//                     animation: 'float 3s ease-in-out infinite 0.5s'
//                   }}
//                 >
//                   <div 
//                     className="card text-white border-0 shadow-lg"
//                     style={{ 
//                       background: 'rgba(0, 0, 0, 0.4)', 
//                       backdropFilter: 'blur(20px)',
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       borderRadius: '20px',
//                       width: '170px'
//                     }}
//                   >
//                     <div className="card-body p-4">
//                       <h6 className="mb-3 fw-bold" style={{ color: '#FF6B35' }}>148 Cal</h6>
//                       <div className="chart-bars d-flex align-items-end justify-content-between">
//                         {[20, 35, 25, 45, 30, 40, 55].map((height, index) => (
//                           <div 
//                             key={index}
//                             className="bar rounded-top position-relative" 
//                             style={{
//                               height: `${height}px`, 
//                               width: '10px',
//                               background: index === 3 
//                                 ? 'linear-gradient(to top, #FF6B35, #F44336)' 
//                                 : 'linear-gradient(to top, rgba(255, 107, 53, 0.3), rgba(255, 107, 53, 0.6))',
//                               animation: `growBar 2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s forwards`,
//                               transform: 'scaleY(0)',
//                               transformOrigin: 'bottom'
//                             }}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Cercles décoratifs améliorés */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     top: '50%', 
//                     left: '50%', 
//                     transform: 'translate(-50%, -50%)',
//                     width: '400px',
//                     height: '400px',
//                     background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
//                     borderRadius: '50%',
//                     animation: 'pulse 4s ease-in-out infinite'
//                   }} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Styles CSS intégrés */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(2deg); }
//         }
        
//         @keyframes growBar {
//           to { transform: scaleY(1); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
//           50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.1; }
//         }

//         .hero-content h1 {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
//         }

//         .hero-content p {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
//         }

//         .hero-content .d-flex {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
//         }

//         .card:hover {
//           transform: translateY(-5px) scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// };

// // Features Section modernisée
// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: '📊',
//       title: 'Smart Analytics',
//       description: 'Advanced AI-powered insights to track your progress and optimize your workouts.',
//       gradient: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)'
//     },
//     {
//       icon: '🎯',
//       title: 'Personalized Goals',
//       description: 'Set and achieve custom fitness goals tailored to your lifestyle and preferences.',
//       gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)'
//     },
//     {
//       icon: '🤝',
//       title: 'Community Support',
//       description: 'Join a vibrant community of fitness enthusiasts and share your journey.',
//       gradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)'
//     },
//     {
//       icon: '📱',
//       title: 'Mobile First',
//       description: 'Seamless experience across all devices with our responsive design.',
//       gradient: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)'
//     },
//     {
//       icon: '⚡',
//       title: 'Real-time Sync',
//       description: 'Instant synchronization across all your devices and wearables.',
//       gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
//     },
//     {
//       icon: '🏆',
//       title: 'Achievements',
//       description: 'Unlock badges and achievements as you reach your fitness milestones.',
//       gradient: 'linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)'
//     }
//   ];

//   return (
//     <section className="py-5" style={{ background: '#f8fafc' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center mb-5">
//             <span 
//               className="badge px-3 py-2 mb-3"
//               style={{
//                 background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                 color: 'white',
//                 borderRadius: '20px'
//               }}
//             >
//               ✨ Features
//             </span>
//             <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e293b' }}>
//               Everything You Need to Succeed
//             </h2>
//             <p className="lead" style={{ color: '#64748b' }}>
//               Powerful features designed to make your fitness journey enjoyable and effective.
//             </p>
//           </div>
//         </div>
        
//         <div className="row g-4">
//           {features.map((feature, index) => (
//             <div key={index} className="col-lg-4 col-md-6">
//               <div 
//                 className="h-100 p-4 bg-white rounded-4 shadow-sm border-0 position-relative overflow-hidden"
//                 style={{
//                   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                   cursor: 'pointer'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-10px)';
//                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
//                 }}
//               >
//                 <div className="text-center">
//                   <div 
//                     className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
//                     style={{
//                       width: '80px',
//                       height: '80px',
//                       background: feature.gradient,
//                       fontSize: '2rem'
//                     }}
//                   >
//                     {feature.icon}
//                   </div>
//                   <h5 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
//                     {feature.title}
//                   </h5>
//                   <p className="mb-0" style={{ color: '#64748b' }}>
//                     {feature.description}
//                   </p>
//                 </div>
                
//                 {/* Effet de brillance au survol */}
//                 <div 
//                   className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
//                   style={{
//                     background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
//                     transform: 'translateX(-100%)',
//                     transition: 'all 0.6s ease'
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Stats Section améliorée
// const StatsSection = () => {
//   const stats = [
//     {
//       number: '50K+',
//       label: 'Active Users',
//       icon: '👥',
//       description: 'Growing community'
//     },
//     {
//       number: '1M+',
//       label: 'Workouts Completed',
//       icon: '💪',
//       description: 'And counting'
//     },
//     {
//       number: '95%',
//       label: 'Success Rate',
//       icon: '🎯',
//       description: 'Goal achievement'
//     },
//     {
//       number: '24/7',
//       label: 'Support Available',
//       icon: '🛟',
//       description: 'Always here for you'
//     }
//   ];

//   return (
//     <section 
//       className="py-5 text-white position-relative overflow-hidden"
//       style={{ 
//         background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
//       }}
//     >
//       {/* Éléments décoratifs */}
//       <div className="position-absolute top-0 start-0 w-100 h-100">
//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             className="position-absolute rounded-circle"
//             style={{
//               width: Math.random() * 100 + 50 + 'px',
//               height: Math.random() * 100 + 50 + 'px',
//               background: 'rgba(255, 107, 53, 0.1)',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//               animation: `float ${5 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container position-relative">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center mb-5">
//             <span 
//               className="badge px-3 py-2 mb-3"
//               style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '20px'
//               }}
//             >
//               📈 Our Impact
//             </span>
//             <h2 className="display-5 fw-bold mb-4">Trusted by Thousands Worldwide</h2>
//             <p className="lead opacity-75">
//               Join our growing community of fitness enthusiasts who are transforming their lives every day.
//             </p>
//           </div>
//         </div>
        
//         <div className="row g-4">
//           {stats.map((stat, index) => (
//             <div key={index} className="col-lg-3 col-md-6 col-sm-6">
//               <div 
//                 className="text-center p-4 rounded-4"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(20px)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0) scale(1)';
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
//                 }}
//               >
//                 <div className="mb-3" style={{ fontSize: '3rem' }}>{stat.icon}</div>
//                 <div className="display-4 fw-bold mb-2">{stat.number}</div>
//                 <div className="h6 mb-1">{stat.label}</div>
//                 <small className="opacity-75">{stat.description}</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Partners Section améliorée
// const PartnersSection = () => {
//   const partners = [
//     { name: 'Adidas', logo: '👟', color: '#FF6B35' },
//     { name: 'Nike', logo: '✓', color: '#4CAF50' },
//     { name: 'Fitbit', logo: '⌚', color: '#2196F3' },
//     { name: 'Under Armour', logo: '🏃', color: '#9C27B0' },
//     { name: 'Puma', logo: '🐆', color: '#FF9800' },
//     { name: 'Reebok', logo: '⚡', color: '#F44336' }
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center mb-5">
//             <span 
//               className="badge px-3 py-2 mb-3"
//               style={{
//                 background: 'rgba(255, 107, 53, 0.1)',
//                 border: '1px solid rgba(255, 107, 53, 0.3)',
//                 color: '#FF6B35',
//                 borderRadius: '20px'
//               }}
//             >
//               🤝 Trusted Partners
//             </span>
//             <p className="text-light opacity-75 mb-5 fs-5">
//               Collaboration with industry leaders
//             </p>
//             <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
//               {partners.map((partner, index) => (
//                 <div 
//                   key={partner.name} 
//                   className="partner-logo text-center"
//                   style={{
//                     animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
//                     opacity: 0,
//                     transform: 'translateY(20px)'
//                   }}
//                 >
//                   <div 
//                     className="d-flex flex-column align-items-center p-4 rounded-4 position-relative overflow-hidden"
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.05)',
//                       backdropFilter: 'blur(10px)',
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                       cursor: 'pointer',
//                       minWidth: '120px'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
//                       e.currentTarget.style.background = `rgba(${hexToRgb(partner.color)}, 0.1)`;
//                       e.currentTarget.style.borderColor = `${partner.color}40`;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
//                       e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
//                       e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     }}
//                   >
//                     <div 
//                       className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
//                       style={{ 
//                         fontSize: '2rem', 
//                         width: '60px',
//                         height: '60px',
//                         background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}40)`
//                       }}
//                     >
//                       {partner.logo}
//                     </div>
//                     <span 
//                       className="fw-medium"
//                       style={{ color: '#e2e8f0' }}
//                     >
//                       {partner.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Fonction utilitaire pour convertir hex en rgb
// const hexToRgb = (hex) => {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result 
//     ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
//     : '255, 255, 255';
// };

// // Testimonials Section (nouvelle)
// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Fitness Enthusiast",
//       image: "👩‍💼",
//       rating: 5,
//       text: "JuniorFitness transformed my workout routine completely. The personalized plans and progress tracking keep me motivated every day!",
//       achievement: "Lost 15kg in 6 months"
//     },
//     {
//       name: "Mike Chen",
//       role: "Professional Athlete",
//       image: "👨‍💻",
//       rating: 5,
//       text: "As a professional athlete, I need precise tracking and analytics. This app delivers exactly what I need to optimize my performance.",
//       achievement: "Improved performance by 23%"
//     },
//     {
//       name: "Emma Williams",
//       role: "Busy Mom",
//       image: "👩‍🍳",
//       rating: 5,
//       text: "Perfect for my busy lifestyle! The quick workouts and flexible scheduling help me stay fit even with my hectic schedule.",
//       achievement: "Consistent workouts for 1 year"
//     }
//   ];

//   return (
//     <section className="py-5" style={{ background: '#f8fafc' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center mb-5">
//             <span 
//               className="badge px-3 py-2 mb-3"
//               style={{
//                 background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                 color: 'white',
//                 borderRadius: '20px'
//               }}
//             >
//               💬 Testimonials
//             </span>
//             <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e293b' }}>
//               What Our Users Say
//             </h2>
//             <p className="lead" style={{ color: '#64748b' }}>
//               Real stories from real people who transformed their lives with JuniorFitness.
//             </p>
//           </div>
//         </div>
        
//         <div className="row g-4">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="col-lg-4 col-md-6">
//               <div 
//                 className="h-100 p-4 bg-white rounded-4 shadow-sm border-0 position-relative"
//                 style={{
//                   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
//                 }}
//               >
//                 {/* Rating */}
//                 <div className="d-flex mb-3">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-warning me-1">⭐</span>
//                   ))}
//                 </div>
                
//                 {/* Quote */}
//                 <p className="mb-4" style={{ color: '#64748b', fontStyle: 'italic' }}>
//                   "{testimonial.text}"
//                 </p>
                
//                 {/* Achievement badge */}
//                 <div className="mb-3">
//                   <span 
//                     className="badge px-3 py-1"
//                     style={{
//                       background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
//                       color: 'white',
//                       borderRadius: '15px',
//                       fontSize: '0.75rem'
//                     }}
//                   >
//                     🏆 {testimonial.achievement}
//                   </span>
//                 </div>
                
//                 {/* User info */}
//                 <div className="d-flex align-items-center">
//                   <div 
//                     className="rounded-circle me-3 d-flex align-items-center justify-content-center"
//                     style={{
//                       width: '50px',
//                       height: '50px',
//                       background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                       fontSize: '1.5rem'
//                     }}
//                   >
//                     {testimonial.image}
//                   </div>
//                   <div>
//                     <h6 className="mb-0 fw-bold" style={{ color: '#1e293b' }}>
//                       {testimonial.name}
//                     </h6>
//                     <small style={{ color: '#64748b' }}>
//                       {testimonial.role}
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // CTA Section (Call to Action)
// const CTASection = () => {
//   return (
//     <section 
//       className="py-5 text-white position-relative overflow-hidden"
//       style={{ 
//         background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
//         minHeight: '60vh'
//       }}
//     >
//       {/* Éléments décoratifs */}
//       <div className="position-absolute top-0 start-0 w-100 h-100">
//         <div 
//           className="position-absolute"
//           style={{
//             top: '20%',
//             right: '10%',
//             width: '200px',
//             height: '200px',
//             background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
//             borderRadius: '50%',
//             animation: 'pulse 3s ease-in-out infinite'
//           }}
//         />
//         <div 
//           className="position-absolute"
//           style={{
//             bottom: '20%',
//             left: '10%',
//             width: '150px',
//             height: '150px',
//             background: 'radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%)',
//             borderRadius: '50%',
//             animation: 'pulse 3s ease-in-out infinite 1s'
//           }}
//         />
//       </div>

//       <div className="container position-relative">
//         <div className="row">
//           <div className="col-lg-8 mx-auto text-center">
//             <div 
//               className="mb-4"
//               style={{
//                 animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both'
//               }}
//             >
//               <span 
//                 className="badge px-4 py-2 mb-4"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(255, 255, 255, 0.2)',
//                   borderRadius: '25px',
//                   fontSize: '1rem'
//                 }}
//               >
//                 🚀 Ready to Start?
//               </span>
//             </div>
            
//             <h2 
//               className="display-4 fw-bold mb-4"
//               style={{
//                 animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both'
//               }}
//             >
//               Transform Your Body,<br />
//               <span 
//                 style={{ 
//                   background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}
//               >
//                 Transform Your Life
//               </span>
//             </h2>
            
//             <p 
//               className="lead mb-5 opacity-85"
//               style={{
//                 animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both',
//                 maxWidth: '600px',
//                 margin: '0 auto 2rem'
//               }}
//             >
//               Join thousands of users who have already started their fitness journey. 
//               Download the app now and get your first month free!
//             </p>
            
//             <div 
//               className="d-flex gap-3 justify-content-center flex-wrap align-items-center"
//               style={{
//                 animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s both'
//               }}
//             >
//               <Button variant="primary" size="lg" className="px-5">
//                 🚀 Start Free Trial
//               </Button>
//               <Button variant="outline-light" size="lg" className="px-5">
//                 📱 Download App
//               </Button>
//             </div>
            
//             {/* Stats en bas */}
//             <div 
//               className="mt-5 d-flex justify-content-center gap-5 flex-wrap"
//               style={{
//                 animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 1s both'
//               }}
//             >
//               <div className="text-center">
//                 <div className="h5 fw-bold mb-1">🆓</div>
//                 <small className="opacity-75">30-Day Free Trial</small>
//               </div>
//               <div className="text-center">
//                 <div className="h5 fw-bold mb-1">❌</div>
//                 <small className="opacity-75">No Credit Card Required</small>
//               </div>
//               <div className="text-center">
//                 <div className="h5 fw-bold mb-1">📱</div>
//                 <small className="opacity-75">Available on All Devices</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer amélioré
// const Footer = () => {
//   const footerLinks = {
//     'Product': ['Features', 'Pricing', 'Download', 'Updates'],
//     'Company': ['About Us', 'Careers', 'Press', 'Contact'],
//     'Resources': ['Blog', 'Help Center', 'Community', 'API'],
//     'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
//   };

//   const socialLinks = [
//     { icon: '📘', name: 'Facebook', color: '#1877F2' },
//     { icon: '🐦', name: 'Twitter', color: '#1DA1F2' },
//     { icon: '📷', name: 'Instagram', color: '#E4405F' },
//     { icon: '💼', name: 'LinkedIn', color: '#0A66C2' }
//   ];

//   return (
//     <footer className="py-5" style={{ backgroundColor: '#0f172a' }}>
//       <div className="container">
//         {/* Main footer content */}
//         <div className="row g-4 mb-5">
//           {/* Brand section */}
//           <div className="col-lg-4 mb-4">
//             <div className="d-flex align-items-center mb-3">
//               <div 
//                 className="me-3 d-flex align-items-center justify-content-center rounded-circle"
//                 style={{
//                   width: '50px',
//                   height: '50px',
//                   background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)'
//                 }}
//               >
//                 <span className="text-white fs-4">⚡</span>
//               </div>
//               <h5 className="text-white mb-0 fw-bold fs-3">JuniorFitness</h5>
//             </div>
//             <p className="text-light opacity-75 mb-4">
//               Your ultimate fitness companion. Transform your body, mind, and lifestyle 
//               with our comprehensive fitness tracking platform.
//             </p>
//             <div className="d-flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
//                   style={{
//                     width: '45px',
//                     height: '45px',
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     color: social.color,
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = `${social.color}20`;
//                     e.target.style.transform = 'translateY(-3px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* Links sections */}
//           {Object.entries(footerLinks).map(([category, links], index) => (
//             <div key={index} className="col-lg-2 col-md-6 mb-4">
//               <h6 className="text-white mb-3 fw-bold">{category}</h6>
//               <ul className="list-unstyled">
//                 {links.map((link, linkIndex) => (
//                   <li key={linkIndex} className="mb-2">
//                     <a 
//                       href="#" 
//                       className="text-light opacity-75 text-decoration-none"
//                       style={{ transition: 'all 0.3s ease' }}
//                       onMouseEnter={(e) => {
//                         e.target.style.color = '#FF6B35';
//                         e.target.style.opacity = '1';
//                         e.target.style.paddingLeft = '5px';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.color = '';
//                         e.target.style.opacity = '0.75';
//                         e.target.style.paddingLeft = '0';
//                       }}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
        
//         {/* Newsletter subscription */}
//         <div className="row mb-5">
//           <div className="col-lg-6 mx-auto">
//             <div 
//               className="text-center p-4 rounded-4"
//               style={{
//                 background: 'rgba(255, 255, 255, 0.05)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(255, 255, 255, 0.1)'
//               }}
//             >
//               <h6 className="text-white mb-3 fw-bold">Stay Updated</h6>
//               <p className="text-light opacity-75 mb-3">
//                 Get the latest fitness tips and app updates directly in your inbox.
//               </p>
//               <div className="d-flex gap-2">
//                 <input
//                   type="email"
//                   className="form-control rounded-pill px-4"
//                   placeholder="Enter your email"
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     color: 'white'
//                   }}
//                 />
//                 <Button variant="primary" className="rounded-pill px-4">
//                   Subscribe
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom section */}
//         <div className="row">
//           <div className="col-12">
//             <hr style={{ 
//               border: 'none',
//               height: '1px',
//               background: 'rgba(255, 255, 255, 0.1)',
//               margin: '2rem 0'
//             }} />
//             <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
//               <p className="mb-0 text-light opacity-50">
//                 &copy; 2024 JuniorFitness. All rights reserved. Made with ❤️ in Cameroon.
//               </p>
//               <div className="d-flex gap-4">
//                 <span className="text-light opacity-50">🇨🇲 Yaoundé, Cameroon</span>
//                 <span className="text-light opacity-50">📧 hello@juniorfitness.cm</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Main HomePage Component
// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <Header />
//       <HeroSection />
//       <FeaturesSection />
//       <StatsSection />
//       <TestimonialsSection />
//       <PartnersSection />
//       <CTASection />
//       <Footer />
      
//       {/* Styles CSS globaux */}
//       <style>{`
//         * {
//           box-sizing: border-box;
//         }
        
//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//         }
        
//         .homepage-container {
//           width: 100%;
//           min-height: 100vh;
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         /* Scrollbar personnalisée */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(135deg, #FF6B35 0%, #F44336 100%);
//           border-radius: 10px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(135deg, #E55A2B 0%, #D32F2F 100%);
//         }
        
//         /* Responsive design */
//         @media (max-width: 768px) {
//           .display-1 {
//             font-size: 2.5rem !important;
//           }
          
//           .display-4 {
//             font-size: 2rem !important;
//           }
          
//           .display-5 {
//             font-size: 1.8rem !important;
//           }
          
//           .hero-visual .workout-cards {
//             width: 350px !important;
//             height: 400px !important;
//           }
          
//           .hero-visual .card {
//             width: auto !important;
//             min-width: 160px !important;
//           }
//         }
        
//         @media (max-width: 576px) {
//           .container {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }
          
//           .btn-lg {
//             padding: 0.75rem 1.5rem;
//             font-size: 1rem;
//           }
          
//           .hero-visual {
//             margin-top: 2rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import StatsSection from './sections/StatsSection';
import PartnersSection from './sections/PartnersSection';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

// const isAuthenticated = !!localStorage.getItem('token');
// const role = localStorage.getItem('role');


// Button Component amélioré
const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'btn fw-semibold text-decoration-none border-0 position-relative overflow-hidden';
  const variantClasses = {
    primary: 'bg-gradient text-white shadow-lg',
    'outline-light': 'border-2 border-light text-light bg-transparent backdrop-blur',
    'outline-primary': 'border-2 border-primary text-primary bg-transparent'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 fs-6 rounded-pill',
    md: 'px-4 py-2 fs-6 rounded-pill',
    lg: 'px-5 py-3 fs-5 rounded-pill'
  };
  

  return (
    
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{ 
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: variant === 'primary' ? 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)' : undefined
      }}
      {...props}
    >
      <span className="position-relative z-1">{children}</span>
      {variant === 'primary' && (
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
          style={{
            background: 'linear-gradient(135deg, #E55A2B 0%, #D32F2F 100%)',
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0'}
        />
      )}
    </button>
  );
};

// Header Component amélioré avec glassmorphism
const Header = () => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0" 
      style={{ 
        background: scrolled 
          ? 'rgba(30, 60, 114, 0.9)' 
          : 'rgba(30, 60, 114, 0.1)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 d-flex align-items-center" href="/">
          <div 
            className="me-2 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
            }}
          >
            <span className="text-white">⚡</span>
          </div>
          <span className="text-dark">JuniorFitness</span>
        </a>
        
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
            {['Home', 'Service', 'Pricing', 'Our Work'].map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  className="nav-link px-3 fw-medium position-relative"
                  href={`/${item.toLowerCase().replace(' ', '')}`}
                  style={{
                    transition: 'all 0.3s ease',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FF6B35';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button 
          className="text-dark"
  variant="outline-light"
  size="sm"
  onClick={() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // tu dois stocker le rôle au login
    if (token) {
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/login');
        // navigate('/dashboard');
      }
    } else {
      navigate('/login');
    }
  }}
>
  Login
</Button>

        </div>
      </div>
    </nav>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "👩‍💼",
      rating: 5,
      text: "JuniorFitness transformed my workout routine completely. The personalized plans and progress tracking keep me motivated every day!",
      achievement: "Lost 15kg in 6 months"
    },
    {
      name: "Mike Chen",
      role: "Professional Athlete",
      image: "👨‍💻",
      rating: 5,
      text: "As a professional athlete, I need precise tracking and analytics. This app delivers exactly what I need to optimize my performance.",
      achievement: "Improved performance by 23%"
    },
    {
      name: "Emma Williams",
      role: "Busy Mom",
      image: "👩‍🍳",
      rating: 5,
      text: "Perfect for my busy lifestyle! The quick workouts and flexible scheduling help me stay fit even with my hectic schedule.",
      achievement: "Consistent workouts for 1 year"
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
              💬 Testimonials
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e293b' }}>
              What Our Users Say
            </h2>
            <p className="lead" style={{ color: '#64748b' }}>
              Real stories from real people who transformed their lives with JuniorFitness.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="h-100 p-4 bg-white rounded-4 shadow-sm border-0 position-relative"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Rating */}
                <div className="d-flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning me-1">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="mb-4" style={{ color: '#64748b', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
                
                {/* Achievement badge */}
                <div className="mb-3">
                  <span 
                    className="badge px-3 py-1"
                    style={{
                      background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                      color: 'white',
                      borderRadius: '15px',
                      fontSize: '0.75rem'
                    }}
                  >
                    🏆 {testimonial.achievement}
                  </span>
                </div>
                
                {/* User info */}
                <div className="d-flex align-items-center">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                      fontSize: '1.5rem'
                    }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ color: '#1e293b' }}>
                      {testimonial.name}
                    </h6>
                    <small style={{ color: '#64748b' }}>
                      {testimonial.role}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section (Call to Action)
const CTASection = () => {
  return (
    <section 
      className="py-5 text-white position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        minHeight: '60vh'
      }}
    >
      {/* Éléments décoratifs */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div 
          className="position-absolute"
          style={{
            top: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute"
          style={{
            bottom: '20%',
            left: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite 1s'
          }}
        />
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div 
              className="mb-4"
              style={{
                animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both'
              }}
            >
              <span 
                className="badge px-4 py-2 mb-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  fontSize: '1rem'
                }}
              >
                🚀 Ready to Start?
              </span>
            </div>
            
            <h2 
              className="display-4 fw-bold mb-4"
              style={{
                animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both'
              }}
            >
              Transform Your Body,<br />
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Transform Your Life
              </span>
            </h2>
            
            <p 
              className="lead mb-5 opacity-85"
              style={{
                animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}
            >
              Join thousands of users who have already started their fitness journey. 
              Download the app now and get your first month free!
            </p>
            
            <div 
              className="d-flex gap-3 justify-content-center flex-wrap align-items-center"
              style={{
                animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s both'
              }}
            >
              <Button variant="primary" size="lg" className="px-5">
                🚀 Start Free Trial
              </Button>
              <Button variant="outline-light" size="lg" className="px-5">
                📱 Download App
              </Button>
            </div>
            
            {/* Stats en bas */}
            <div 
              className="mt-5 d-flex justify-content-center gap-5 flex-wrap"
              style={{
                animation: 'slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 1s both'
              }}
            >
              <div className="text-center">
                <div className="h5 fw-bold mb-1">🆓</div>
                <small className="opacity-75">30-Day Free Trial</small>
              </div>
              <div className="text-center">
                <div className="h5 fw-bold mb-1">❌</div>
                <small className="opacity-75">No Credit Card Required</small>
              </div>
              <div className="text-center">
                <div className="h5 fw-bold mb-1">📱</div>
                <small className="opacity-75">Available on All Devices</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer amélioré
const Footer = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Download', 'Updates'],
    'Company': ['About Us', 'Careers', 'Press', 'Contact'],
    'Resources': ['Blog', 'Help Center', 'Community', 'API'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  const socialLinks = [
    { icon: '📘', name: 'Facebook', color: '#1877F2' },
    { icon: '🐦', name: 'Twitter', color: '#1DA1F2' },
    { icon: '📷', name: 'Instagram', color: '#E4405F' },
    { icon: '💼', name: 'LinkedIn', color: '#0A66C2' }
  ];

  return (
    <footer className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container">
        {/* Main footer content */}
        <div className="row g-4 mb-5">
          {/* Brand section */}
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div 
                className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)'
                }}
              >
                <span className="text-white fs-4">⚡</span>
              </div>
              <h5 className="text-white mb-0 fw-bold fs-3">JuniorFitness</h5>
            </div>
            <p className="text-light opacity-75 mb-4">
              Your ultimate fitness companion. Transform your body, mind, and lifestyle 
              with our comprehensive fitness tracking platform.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: social.color,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${social.color}20`;
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index} className="col-lg-2 col-md-6 mb-4">
              <h6 className="text-white mb-3 fw-bold">{category}</h6>
              <ul className="list-unstyled">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a 
                      href="#" 
                      className="text-light opacity-75 text-decoration-none"
                      style={{ transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#FF6B35';
                        e.target.style.opacity = '1';
                        e.target.style.paddingLeft = '5px';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '';
                        e.target.style.opacity = '0.75';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter subscription */}
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto">
            <div 
              className="text-center p-4 rounded-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h6 className="text-white mb-3 fw-bold">Stay Updated</h6>
              <p className="text-light opacity-75 mb-3">
                Get the latest fitness tips and app updates directly in your inbox.
              </p>
              <div className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control rounded-pill px-4"
                  placeholder="Enter your email"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white'
                  }}
                />
                <Button variant="primary" className="rounded-pill px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="row">
          <div className="col-12">
            <hr style={{ 
              border: 'none',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              margin: '2rem 0'
            }} />
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <p className="mb-0 text-light opacity-50">
                &copy; 2024 JuniorFitness. All rights reserved. Made with ❤️ in Cameroon.
              </p>
              <div className="d-flex gap-4">
                <span className="text-light opacity-50">🇨🇲 Yaoundé, Cameroon</span>
                <span className="text-light opacity-50">📧 hello@juniorfitness.cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;