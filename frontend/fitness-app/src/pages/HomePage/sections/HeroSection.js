import React, { useState, useEffect } from 'react';

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
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        minHeight: '100vh',
        paddingTop: '80px'
      }}
    >
      {/* Particles d'arrière-plan */}
      <div className="position-absolute w-100 h-100 top-0 start-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle opacity-10"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F44336 100%)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container">
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