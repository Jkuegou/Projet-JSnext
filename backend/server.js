// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
// const adminRoutes = require('./routes/admin'); 
// const onboardingRoutes = require('./routes/onboarding');
// app.use('/api/onboarding', onboardingRoutes);


// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// const connectDB = require('./config/db');
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes); 


// // Basic route
// app.get('/', (req, res) => {
//   res.json({ message: 'Authentication API is running' });
// });

// const PORT = process.env.PORT || 5000;
// //port message
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// const authRoutes = require('./routes/auth');
// const adminRoutes = require('./routes/admin'); 
// const onboardingRoutes = require('./routes/onboarding'); // ← OK ici

// dotenv.config();

// const app = express(); // ← Maintenant on peut utiliser app

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// const connectDB = require('./config/db');
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes); 
// app.use('/api/onboarding', onboardingRoutes); // ← déplacé ici après `app` défini

// // Basic route
// app.get('/', (req, res) => {
//   res.json({ message: 'Authentication API is running' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// // Import routes
// const authRoutes = require('./routes/auth');
// const adminRoutes = require('./routes/admin'); 
// const onboardingRoutes = require('./routes/onboarding');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Logging middleware (development)
// if (process.env.NODE_ENV === 'development') {
//   app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
//     next();
//   });
// }

// // Database connection
// const connectDB = require('./config/db');
// connectDB();

// // Basic route
// app.get('/', (req, res) => {
//   res.json({ 
//     message: 'Fitness API is running',
//     version: '1.0.0',
//     status: 'healthy'
//   });
// });

// // Health check route
// app.get('/health', (req, res) => {
//   res.status(200).json({
//     status: 'OK',
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString(),
//     mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
//   });
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/onboarding', onboardingRoutes);

// // Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error details:', {
//     message: err.message,
//     stack: err.stack,
//     url: req.originalUrl,
//     method: req.method,
//     timestamp: new Date().toISOString()
//   });

//   // Mongoose validation error
//   if (err.name === 'ValidationError') {
//     const errors = Object.values(err.errors).map(e => e.message);
//     return res.status(400).json({
//       success: false,
//       message: 'Validation Error',
//       errors
//     });
//   }

//   // Mongoose duplicate key error
//   if (err.code === 11000) {
//     const field = Object.keys(err.keyValue)[0];
//     return res.status(400).json({
//       success: false,
//       message: `${field} already exists`
//     });
//   }

//   // JWT errors
//   if (err.name === 'JsonWebTokenError') {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid token'
//     });
//   }

//   if (err.name === 'TokenExpiredError') {
//     return res.status(401).json({
//       success: false,
//       message: 'Token expired'
//     });
//   }

//   // Default error
//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error'
//   });
// });

// // 404 handler - must be last
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route ${req.originalUrl} not found`
//   });
// });

// // Graceful shutdown
// process.on('SIGTERM', () => {
//   console.log('SIGTERM received. Shutting down gracefully...');
//   mongoose.connection.close(() => {
//     console.log('MongoDB connection closed.');
//     process.exit(0);
//   });
// });

// process.on('SIGINT', () => {
//   console.log('SIGINT received. Shutting down gracefully...');
//   mongoose.connection.close(() => {
//     console.log('MongoDB connection closed.');
//     process.exit(0);
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
//   console.log(`🔗 API Base URL: http://localhost:${PORT}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log('Unhandled Promise Rejection:', err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });

// module.exports = app;
// 3. VÉRIFICATIONS SUPPLÉMENTAIRES
console.log('🔍 === VÉRIFICATIONS SUPPLÉMENTAIRES ===');

// Chercher dans TOUS tes fichiers de routes
const fs = require('fs');
const path = require('path');

function checkRouteFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    if (file.endsWith('.js')) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Rechercher les patterns problématiques
      const problematicPatterns = [
        /router\.(get|post|put|patch|delete)\(['"]\S*\/:['"]/, // /:' sans nom
        /router\.(get|post|put|patch|delete)\(['"]\S*\/:\s*[,)]/, // /: suivi d'espace et virgule/parenthèse
        /app\.use\(['"]\S*\/:['"]/, // app.use avec /:
      ];
      
      problematicPatterns.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          console.error(`❌ Pattern problématique trouvé dans ${file}:`);
          console.error(`   Pattern ${index + 1}: ${matches[0]}`);
        }
      });
    }
  });
}

// Vérifier le dossier routes
if (fs.existsSync('./routes')) {
  console.log('🔍 Vérification du dossier routes...');
  checkRouteFiles('./routes');
}

// Vérifier le dossier controllers aussi
if (fs.existsSync('./controllers')) {
  console.log('🔍 Vérification du dossier controllers...');
  checkRouteFiles('./controllers');
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); 

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware (development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
    next();
  });
}

// Database connection
const connectDB = require('./config/db');
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Fitness API is running',
    version: '1.0.0',
    status: 'healthy'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Routes - Activez une par une pour identifier le problème
try {
  console.log('🔄 Chargement des routes auth...');
  const authRoutes = require('./routes/auth');
  app.use('/api/auth', authRoutes);
  console.log('✅ Routes auth chargées');
} catch (error) {
  console.error('❌ Erreur lors du chargement des routes auth:', error.message);
}

try {
  console.log('🔄 Chargement des routes onboarding...');
  const onboardingRoutes = require('./routes/onboarding');
  app.use('/api/onboarding', onboardingRoutes);
  console.log('✅ Routes onboarding chargées');
} catch (error) {
  console.error('❌ Erreur lors du chargement des routes onboarding:', error.message);
}

try {
  console.log('🔄 Chargement des routes admin...');
  const adminRoutes = require('./routes/admin');
  app.use('/api/admin', adminRoutes);
  console.log('✅ Routes admin chargées');
} catch (error) {
  console.error('❌ Erreur lors du chargement des routes admin:', error.message);
}

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `${field} already exists`
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Token expired'
    });
  }

  // Default error
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// 404 handler - must be last
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;
// 🔍 DIAGNOSTIC - Ajoute ça juste AVANT app.listen() dans server.js
console.log('🔍 === DIAGNOSTIC DES ROUTES ENREGISTRÉES ===');

// Afficher toutes les routes enregistrées
app._router.stack.forEach((middleware, index) => {
  if (middleware.route) {
    const route = middleware.route;
    const method = Object.keys(route.methods)[0].toUpperCase();
    console.log(`Route ${index}: ${method} ${route.path}`);
  } else if (middleware.name === 'router') {
    console.log(`Middleware ${index}: Router - ${middleware.regexp}`);
    // Vérifier s'il y a des routes problématiques dans le sous-router
    if (middleware.handle && middleware.handle.stack) {
      middleware.handle.stack.forEach((subroute, subindex) => {
        if (subroute.route) {
          const route = subroute.route;
          const method = Object.keys(route.methods)[0].toUpperCase();
          console.log(`  Sous-route ${subindex}: ${method} ${route.path}`);
        }
      });
    }
  }
});

console.log('🔍 === FIN DIAGNOSTIC ===');

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Unhandled Promise Rejection:', err.message);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;