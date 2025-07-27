// import React from 'react';
// import './Button.css';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'md', 
//   onClick, 
//   disabled = false,
//   className = '',
//   ...props 
// }) => {
//   const baseClass = 'btn';
//   const variantClass = `btn-${variant}`;
//   const sizeClass = size !== 'md' ? `btn-${size}` : '';
  
//   const buttonClass = [
//     baseClass,
//     variantClass,
//     sizeClass,
//     className
//   ].filter(Boolean).join(' ');

//   return (
//     <button
//       className={buttonClass}
//       onClick={onClick}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
// src/components/common/Button/Button.js
import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'btn rounded-pill px-4 py-2 fw-semibold text-decoration-none border-0 transition-all position-relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-primary text-white shadow-sm',
    'outline-light': 'border border-light text-light bg-transparent',
    'outline-primary': 'border border-primary text-primary bg-transparent'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 fs-6',
    md: 'px-4 py-2 fs-6',
    lg: 'px-5 py-3 fs-5'
  };
  
  const hoverStyles = {
    primary: {
      onMouseEnter: (e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.3)';
      },
      onMouseLeave: (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 10px rgba(0, 123, 255, 0.1)';
      }
    },
    'outline-light': {
      onMouseEnter: (e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        e.target.style.transform = 'translateY(-1px)';
      },
      onMouseLeave: (e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.transform = 'translateY(0)';
      }
    }
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{ 
        transition: 'all 0.3s ease',
        boxShadow: variant === 'primary' ? '0 2px 10px rgba(0, 123, 255, 0.1)' : 'none'
      }}
      {...hoverStyles[variant]}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;