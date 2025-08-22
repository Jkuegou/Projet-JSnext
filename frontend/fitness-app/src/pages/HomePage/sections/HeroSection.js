// import React, { useState, useEffect } from 'react';

// // Button Component
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

//       {/* Styles CSS intégrés spécifiques au Hero */}
//       <style>{`
//         .hero-content h1 {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
//         }

//         .hero-content p {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
//         }

//         .hero-content .d-flex {
//           animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
//         }

//         /* Responsive spécifique au Hero */
//         @media (max-width: 768px) {
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
//           .hero-visual {
//             margin-top: 2rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;
// import React, { useState, useEffect, useRef } from 'react';

// // Button Component
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

// // Composant Canvas pour l'animation de particules 3D
// const ParticleCanvas = () => {
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);
//   const particlesRef = useRef([]);
//   const mouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
    
//     // Configuration des particules
//     const config = {
//       particleCount: 70,
//       maxDistance: 120,
//       mouseRadius: 150,
//       colors: [
//         'rgba(255, 107, 53, 0.8)',   // Orange principal (#FF6B35)
//         'rgba(244, 67, 54, 0.8)',    // Rouge (#F44336)
//         'rgba(255, 255, 255, 0.6)',  // Blanc
//         'rgba(255, 152, 0, 0.7)',    // Orange clair
//         'rgba(30, 60, 114, 0.5)'     // Bleu foncé du gradient original
//       ]
//     };

//     // Classe Particle
//     class Particle {
//       constructor() {
//         this.reset();
//         this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
//         this.size = Math.random() * 2.5 + 1;
//         this.life = Math.random() * 100;
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.z = Math.random() * 1000;
//         this.vx = (Math.random() - 0.5) * 1.8;
//         this.vy = (Math.random() - 0.5) * 1.8;
//         this.vz = (Math.random() - 0.5) * 2.5;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         this.z += this.vz;
//         this.life += 0.4;

//         // Effet de respiration
//         const breathe = Math.sin(this.life * 0.025) * 0.4;
//         this.currentSize = this.size + breathe;

//         // Interaction avec la souris (douce pour le hero)
//         const dx = mouseRef.current.x - this.x;
//         const dy = mouseRef.current.y - this.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < config.mouseRadius) {
//           const force = (config.mouseRadius - distance) / config.mouseRadius * 0.6;
//           const angle = Math.atan2(dy, dx);
//           this.x -= Math.cos(angle) * force * 2.5;
//           this.y -= Math.sin(angle) * force * 2.5;
//         }

//         // Rebonds avec amortissement
//         if (this.x < 0 || this.x > canvas.width) {
//           this.vx *= -0.7;
//           this.x = Math.max(0, Math.min(canvas.width, this.x));
//         }
//         if (this.y < 0 || this.y > canvas.height) {
//           this.vy *= -0.7;
//           this.y = Math.max(0, Math.min(canvas.height, this.y));
//         }
//         if (this.z < 0 || this.z > 1000) {
//           this.vz *= -1;
//         }

//         // Calcul de la perspective 3D
//         this.scale = 800 / (800 + this.z);
//         this.projectedX = this.x * this.scale + canvas.width / 2 * (1 - this.scale);
//         this.projectedY = this.y * this.scale + canvas.height / 2 * (1 - this.scale);
//       }

//       draw() {
//         const alpha = this.scale * 0.8;
//         const radius = this.currentSize * this.scale;

//         // Gradient radial pour effet lumineux
//         const gradient = ctx.createRadialGradient(
//           this.projectedX, this.projectedY, 0,
//           this.projectedX, this.projectedY, radius * 2.5
//         );
        
//         gradient.addColorStop(0, this.color.replace(/[\d\.]+\)$/g, `${alpha})`));
//         gradient.addColorStop(0.4, this.color.replace(/[\d\.]+\)$/g, `${alpha * 0.6})`));
//         gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

//         ctx.beginPath();
//         ctx.arc(this.projectedX, this.projectedY, radius, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();

//         // Point central plus lumineux
//         ctx.beginPath();
//         ctx.arc(this.projectedX, this.projectedY, radius * 0.4, 0, Math.PI * 2);
//         ctx.fillStyle = this.color.replace(/[\d\.]+\)$/g, '1)');
//         ctx.fill();
//       }
//     }

//     // Fonction de redimensionnement
//     const resizeCanvas = () => {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width;
//       canvas.height = rect.height;
//     };

//     // Initialiser les particules
//     const initParticles = () => {
//       particlesRef.current = [];
//       for (let i = 0; i < config.particleCount; i++) {
//         particlesRef.current.push(new Particle());
//       }
//     };

//     // Dessiner les connexions entre particules
//     const drawConnections = () => {
//       const particles = particlesRef.current;
      
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].projectedX - particles[j].projectedX;
//           const dy = particles[i].projectedY - particles[j].projectedY;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < config.maxDistance) {
//             const opacity = (config.maxDistance - distance) / config.maxDistance * 0.25;
//             const avgZ = (particles[i].z + particles[j].z) / 2;
//             const depthAlpha = (1000 - avgZ) / 1000;

//             // Gradient pour les connexions
//             const gradient = ctx.createLinearGradient(
//               particles[i].projectedX, particles[i].projectedY,
//               particles[j].projectedX, particles[j].projectedY
//             );
            
//             gradient.addColorStop(0, `rgba(255, 107, 53, ${opacity * depthAlpha})`);
//             gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * depthAlpha * 0.6})`);
//             gradient.addColorStop(1, `rgba(244, 67, 54, ${opacity * depthAlpha})`);

//             ctx.beginPath();
//             ctx.moveTo(particles[i].projectedX, particles[i].projectedY);
//             ctx.lineTo(particles[j].projectedX, particles[j].projectedY);
//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = opacity * 1.8;
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     // Animation principale
//     const animate = () => {
//       // Fond avec effet de fade subtil
//       ctx.fillStyle = 'rgba(30, 60, 114, 0.06)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Dessiner connexions d'abord
//       drawConnections();

//       // Animer et dessiner particules
//       particlesRef.current.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     // Event listeners
//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
//       mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
//     };

//     const handleResize = () => {
//       resizeCanvas();
//     };

//     // Initialisation
//     resizeCanvas();
//     initParticles();
//     animate();

//     // Ajouter les event listeners
//     canvas.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="position-absolute top-0 start-0 w-100 h-100"
//       style={{ zIndex: 1 }}
//     />
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
//         background: 'radial-gradient(ellipse at center, #1e3c72 0%, #0a0a23 100%)',
//         minHeight: '100vh',
//         paddingTop: '80px'
//       }}
//     >
//       {/* Animation de particules 3D Canvas - remplace les particules CSS */}
//       <ParticleCanvas />

//       {/* Overlay gradient pour améliorer la lisibilité */}
//       <div 
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{
//           background: 'linear-gradient(135deg, rgba(9, 3, 86, 0.9) 0%, rgba(6, 4, 146, 0.42) 100%)',
//           zIndex: 2
//         }}
//       />

//       <div className="container position-relative" style={{ zIndex: 3 }}>
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
//                     background: 'rgba(255, 255, 255, 0.15)',
//                     backdropFilter: 'blur(15px)',
//                     border: '1px solid rgba(255, 255, 255, 0.25)',
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
//                   textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
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
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   lineHeight: '1.6',
//                   textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)'
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
//                       background: 'rgba(255, 255, 255, 0.12)',
//                       backdropFilter: 'blur(25px)',
//                       border: '1px solid rgba(255, 255, 255, 0.25)',
//                       borderRadius: '20px',
//                       width: '240px',
//                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
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
//                       boxShadow: '0 8px 40px rgba(255, 107, 53, 0.4)'
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
//                       boxShadow: '0 8px 40px rgba(76, 175, 80, 0.4)'
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
//                       background: 'rgba(0, 0, 0, 0.5)', 
//                       backdropFilter: 'blur(25px)',
//                       border: '1px solid rgba(255, 255, 255, 0.15)',
//                       borderRadius: '20px',
//                       width: '170px',
//                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
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

//                 {/* Cercle décoratif amélioré */}
//                 <div 
//                   className="position-absolute"
//                   style={{ 
//                     top: '50%', 
//                     left: '50%', 
//                     transform: 'translate(-50%, -50%)',
//                     width: '400px',
//                     height: '400px',
//                     background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
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
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes growBar {
//           to { transform: scaleY(1); }
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

//         @keyframes pulse {
//           0%, 100% { 
//             transform: translate(-50%, -50%) scale(1);
//             opacity: 0.8;
//           }
//           50% { 
//             transform: translate(-50%, -50%) scale(1.05);
//             opacity: 0.6;
//           }
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

//         /* Responsive spécifique au Hero */
//         @media (max-width: 768px) {
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
//           .hero-visual {
//             margin-top: 2rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useRef } from 'react';

// Button Component
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

// Composant Canvas pour l'animation de particules 3D (exactement comme dans le premier exemple)
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Configuration exacte du premier exemple
    const config = {
      particleCount: 50,
      maxDistance: 100,
      mouseRadius: 150,
      mouseInteraction: true,
      showConnections: true,
      speed: 1,
      colors: [
        'rgba(100, 200, 255, 0.8)',
        'rgba(255, 100, 150, 0.8)',
        'rgba(150, 255, 100, 0.8)',
        'rgba(255, 200, 100, 0.8)',
        'rgba(200, 100, 255, 0.8)'
      ]
    };

    // Classe Particle exacte du premier exemple
    class Particle {
      constructor() {
        this.reset();
        this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
        this.originalVx = this.vx;
        this.originalVy = this.vy;
        this.originalVz = this.vz;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100;
      }

      update() {
        // Mouvement de base
        this.x += this.vx * config.speed;
        this.y += this.vy * config.speed;
        this.z += this.vz * config.speed;
        this.life += 0.5;

        // Effet de respiration
        const breathe = Math.sin(this.life * 0.02) * 0.5;
        this.currentSize = this.size + breathe;

        // Interaction avec la souris
        if (config.mouseInteraction) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.mouseRadius) {
            const force = (config.mouseRadius - distance) / config.mouseRadius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }

        // Limites et rebonds
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        if (this.z < 0 || this.z > 1000) {
          this.vz *= -1;
        }

        // Effet 3D
        this.scale = 800 / (800 + this.z);
        this.projectedX = this.x * this.scale + canvas.width / 2 * (1 - this.scale);
        this.projectedY = this.y * this.scale + canvas.height / 2 * (1 - this.scale);
      }

      draw() {
        const alpha = this.scale * 0.8;
        const radius = this.currentSize * this.scale;

        // Particule principale
        ctx.beginPath();
        ctx.arc(this.projectedX, this.projectedY, radius, 0, Math.PI * 2);
        
        // Gradient radial pour un effet lumineux
        const gradient = ctx.createRadialGradient(
          this.projectedX, this.projectedY, 0,
          this.projectedX, this.projectedY, radius * 2
        );
        
        gradient.addColorStop(0, this.color.replace('0.8)', `${alpha})`));
        gradient.addColorStop(0.5, this.color.replace('0.8)', `${alpha * 0.5})`));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Point central plus lumineux
        ctx.beginPath();
        ctx.arc(this.projectedX, this.projectedY, radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('0.8)', '1)');
        ctx.fill();
      }
    }

    // Fonction de redimensionnement
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // Initialiser les particules
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < config.particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Dessiner les connexions (exactement comme dans le premier exemple)
    const drawConnections = () => {
      if (!config.showConnections) return;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].projectedX - particlesRef.current[j].projectedX;
          const dy = particlesRef.current[i].projectedY - particlesRef.current[j].projectedY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = (config.maxDistance - distance) / config.maxDistance * 0.3;
            const avgZ = (particlesRef.current[i].z + particlesRef.current[j].z) / 2;
            const depthAlpha = (1000 - avgZ) / 1000;

            // Ligne avec gradient
            const gradient = ctx.createLinearGradient(
              particlesRef.current[i].projectedX, particlesRef.current[i].projectedY,
              particlesRef.current[j].projectedX, particlesRef.current[j].projectedY
            );
            
            gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity * depthAlpha})`);
            gradient.addColorStop(0.5, `rgba(150, 150, 255, ${opacity * depthAlpha * 0.5})`);
            gradient.addColorStop(1, `rgba(200, 100, 255, ${opacity * depthAlpha})`);

            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].projectedX, particlesRef.current[i].projectedY);
            ctx.lineTo(particlesRef.current[j].projectedX, particlesRef.current[j].projectedY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
            ctx.stroke();
          }
        }
      }
    };

    // Animation principale
    const animate = (currentTime) => {
      // Clear canvas avec effet de fade
      ctx.fillStyle = 'rgba(10, 10, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dessiner connexions d'abord (arrière-plan)
      drawConnections();

      // Animer et dessiner particules
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    };

    const handleClick = (e) => {
      // Ajouter une explosion de particules au clic
      const rect = canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
      const clickY = (e.clientY - rect.top) * (canvas.height / rect.height);
      
      for (let i = 0; i < 5; i++) {
        const particle = new Particle();
        particle.x = clickX + (Math.random() - 0.5) * 50;
        particle.y = clickY + (Math.random() - 0.5) * 50;
        particle.vx = (Math.random() - 0.5) * 10;
        particle.vy = (Math.random() - 0.5) * 10;
        particle.size = Math.random() * 5 + 2;
        particlesRef.current.push(particle);
      }
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialisation
    resizeCanvas();
    initParticles();
    animate(0);

    // Ajouter les event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ zIndex: 1 }}
    />
  );
};

// Hero Section avec animations améliorées
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="position-relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a23 0%, #000000 100%)',
        minHeight: '100vh',
        paddingTop: '80px'
      }}
    >
      {/* Animation de particules 3D Canvas - exactement comme dans le premier exemple */}
      <ParticleCanvas />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6">
            <div 
              className="hero-content"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="mb-4">
                <span 
                  className="badge text-white px-3 py-2 mb-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px'
                  }}
                >
                  🏆 #1 Fitness App in Cameroon
                </span>
              </div>
              
              <h1 
                className="display-1 fw-bold mb-4 text-white"
                style={{ 
                  lineHeight: '1.1',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                Get Fit,<br />
                <span 
                  className="position-relative"
                  style={{ 
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Get Strong,
                </span><br />
                Get Healthy!
              </h1>
              
              <p 
                className="lead mb-5 fs-5"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6'
                }}
              >
                Transform your body with our comprehensive fitness program designed to 
                help you achieve your fitness goals and transform your body and mind.
              </p>
              
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <Button variant="primary" size="lg">
                  Start Your Journey
                </Button>
                <Button variant="outline-light" size="lg">
                  Watch Demo
                </Button>
                <div className="ms-3 d-flex align-items-center">
                  <div className="d-flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning me-1">⭐</span>
                    ))}
                  </div>
                  <small className="text-white-50 ms-2">4.9/5 (2.3k reviews)</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-visual position-relative h-100 d-flex align-items-center justify-content-center">
              <div 
                className="workout-cards position-relative"
                style={{ 
                  width: '450px', 
                  height: '500px',
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                
                {/* Card 1 - Repetition Quality */}
                <div 
                  className="position-absolute"
                  style={{ 
                    top: '50px', 
                    left: '20px',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  <div 
                    className="card text-white border-0 shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '20px',
                      width: '240px'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="workout-avatar me-3">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center" 
                            style={{ 
                              width: '55px', 
                              height: '55px',
                              background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
                            }}
                          >
                            <span className="text-white fw-bold fs-4">💪</span>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: '#FF6B35' }}>
                            Repetition Quality
                          </h6>
                          <small className="text-white-50">3x sets completed</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - 25 Workouts */}
                <div 
                  className="position-absolute"
                  style={{ 
                    top: '150px', 
                    right: '30px',
                    animation: 'float 3s ease-in-out infinite 1s'
                  }}
                >
                  <div 
                    className="card text-white border-0 shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
                      borderRadius: '20px',
                      width: '220px',
                      boxShadow: '0 8px 30px rgba(255, 107, 53, 0.3)'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="workout-avatar me-3">
                          <div 
                            className="rounded-circle bg-white d-flex align-items-center justify-content-center" 
                            style={{ width: '55px', height: '55px' }}
                          >
                            <span className="fw-bold fs-4" style={{ color: '#FF6B35' }}>25</span>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">25 Workouts</h6>
                          <small className="opacity-75">This month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Daily Calories */}
                <div 
                  className="position-absolute"
                  style={{ 
                    bottom: '120px', 
                    left: '40px',
                    animation: 'float 3s ease-in-out infinite 2s'
                  }}
                >
                  <div 
                    className="card text-white border-0 shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                      borderRadius: '20px',
                      width: '200px',
                      boxShadow: '0 8px 30px rgba(76, 175, 80, 0.3)'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="workout-avatar me-3">
                          <div 
                            className="rounded-circle bg-white d-flex align-items-center justify-content-center" 
                            style={{ width: '55px', height: '55px' }}
                          >
                            <span className="fw-bold fs-4" style={{ color: '#4CAF50' }}>🔥</span>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Daily Calories</h6>
                          <small className="opacity-75">1,847 kcal</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Chart amélioré */}
                <div 
                  className="position-absolute"
                  style={{ 
                    bottom: '50px', 
                    right: '20px',
                    animation: 'float 3s ease-in-out infinite 0.5s'
                  }}
                >
                  <div 
                    className="card text-white border-0 shadow-lg"
                    style={{ 
                      background: 'rgba(0, 0, 0, 0.4)', 
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      width: '170px'
                    }}
                  >
                    <div className="card-body p-4">
                      <h6 className="mb-3 fw-bold" style={{ color: '#FF6B35' }}>148 Cal</h6>
                      <div className="chart-bars d-flex align-items-end justify-content-between">
                        {[20, 35, 25, 45, 30, 40, 55].map((height, index) => (
                          <div 
                            key={index}
                            className="bar rounded-top position-relative" 
                            style={{
                              height: `${height}px`, 
                              width: '10px',
                              background: index === 3 
                                ? 'linear-gradient(to top, #FF6B35, #F44336)' 
                                : 'linear-gradient(to top, rgba(255, 107, 53, 0.3), rgba(255, 107, 53, 0.6))',
                              animation: `growBar 2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s forwards`,
                              transform: 'scaleY(0)',
                              transformOrigin: 'bottom'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cercles décoratifs améliorés */}
                <div 
                  className="position-absolute"
                  style={{ 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'pulse 4s ease-in-out infinite'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS intégrés spécifiques au Hero */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes growBar {
          to { transform: scaleY(1); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.6;
          }
        }

        .hero-content h1 {
          animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
        }

        .hero-content p {
          animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
        }

        .hero-content .d-flex {
          animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
        }

        /* Responsive spécifique au Hero */
        @media (max-width: 768px) {
          .hero-visual .workout-cards {
            width: 350px !important;
            height: 400px !important;
          }
          
          .hero-visual .card {
            width: auto !important;
            min-width: 160px !important;
          }
        }

        @media (max-width: 576px) {
          .hero-visual {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;