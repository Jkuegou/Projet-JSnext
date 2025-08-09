// const express = require('express'); 
// const { 
// getAllUsers, 
// getUserById, 
// updateUser, 
// deleteUser, 
// getDashboardStats 
// } = require('../controllers/adminController'); 
// const { protect } = require('../middleware/auth'); 
// const { adminOnly, adminOrSelf } = require('../middleware/admin'); 
// const router = express.Router(); 
// // All routes are protected and require admin role 
// router.use(protect); 
// router.use(adminOnly); 
// router.get('/dashboard-stats', getDashboardStats); 
// router.get('/users', getAllUsers); 
// router.get('/users/:id', getUserById); 
// router.put('/users/:id', updateUser); 
// router.delete('/users/:id', deleteUser); 
// module.exports = router;
// const express = require('express');
// const { 
//   getAllUsers, 
//   getUserById, 
//   updateUser, 
//   deleteUser, 
//   getDashboardStats 
// } = require('../controllers/adminController');
// const { protect } = require('../middleware/auth');
// const { adminOnly, adminOrSelf } = require('../middleware/admin');

// const router = express.Router();

// // All routes are protected and require admin role
// router.use(protect);
// router.use(adminOnly);

// // Dashboard stats route
// router.get('/dashboard-stats', getDashboardStats);

// // User management routes
// router.get('/users', getAllUsers);
// router.get('/users/:id', getUserById);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { adminOnly } = require('../middleware/admin');

// Test simple d'abord
router.get('/test', (req, res) => {
  res.json({ message: 'Routes admin fonctionnent!' });
});

// Appliquer les middlewares
router.use(protect);
router.use(adminOnly);

// Import des contrôleurs - avec gestion d'erreur
let adminController;
try {
  adminController = require('../controllers/adminController');
  console.log('📦 Contrôleurs importés:', Object.keys(adminController));
} catch (error) {
  console.error('❌ Erreur import controller:', error.message);
  // Contrôleurs de secours
  adminController = {
    getAllUsers: (req, res) => res.json({ message: 'getAllUsers - en cours de développement' }),
    getUserById: (req, res) => res.json({ message: 'getUserById - en cours de développement' }),
    updateUser: (req, res) => res.json({ message: 'updateUser - en cours de développement' }),
    deleteUser: (req, res) => res.json({ message: 'deleteUser - en cours de développement' }),
    getDashboardStats: (req, res) => res.json({ message: 'getDashboardStats - en cours de développement' })
  };
}

// Vérifier que les fonctions existent avant de les utiliser
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getDashboardStats,
} = adminController;

// Routes
if (typeof getDashboardStats === 'function') {
  router.get('/dashboard-stats', getDashboardStats);
} else {
  console.error('❌ getDashboardStats n\'est pas une fonction');
}

if (typeof getAllUsers === 'function') {
  router.get('/users', getAllUsers);
} else {
  console.error('❌ getAllUsers n\'est pas une fonction');
}

if (typeof getUserById === 'function') {
  router.get('/users/:id', getUserById);
} else {
  console.error('❌ getUserById n\'est pas une fonction');
}

if (typeof updateUser === 'function') {
  router.put('/users/:id', updateUser);
} else {
  console.error('❌ updateUser n\'est pas une fonction');
}

if (typeof deleteUser === 'function') {
  router.delete('/users/:id', deleteUser);
} else {
  console.error('❌ deleteUser n\'est pas une fonction');
}

module.exports = router;