// const express = require('express');
// const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
// const { protect } = require('../middleware/auth');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

// const {
//   updatePersonalInfo,
//   updateWorkoutSchedule,
//   updateMeasurements,
//   updateFitnessGoals,
//   completeOnboarding
// } = require('../controllers/userController');

// router.patch('/profile/personal', protect, updatePersonalInfo);
// router.patch('/profile/workout-schedule', protect, updateWorkoutSchedule);
// router.patch('/profile/measurements', protect, updateMeasurements);
// router.patch('/profile/fitness-goals', protect, updateFitnessGoals);
// router.patch('/profile/complete-onboarding', protect, completeOnboarding);

// const User = require('../models/User');

// // PUT /api/users/settings
// router.put('/settings', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);

//     if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

//     user.preferences = {
//       ...user.preferences,
//       ...req.body,
//     };

//     await user.save();

//     res.status(200).json({ message: 'Paramètres mis à jour avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });
// // GET /api/users/settings
// router.get('/settings', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('preferences');

//     if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

//     res.status(200).json(user.preferences);
//   } catch (error) {
//     console.error('Erreur lors de la récupération des préférences :', error.message);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// // DELETE /api/users/delete
// router.delete('/delete', protect, async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.user.id);
//     res.status(200).json({ message: 'Compte supprimé avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la suppression du compte' });
//   }
// });



// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/auth');

// const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
// const {
//   updatePersonalInfo,
//   updateWorkoutSchedule,
//   updateMeasurements,
//   updateFitnessGoals,
//   completeOnboarding
// } = require('../controllers/userController'); // Garde un seul import correct ici
// const User = require('../models/User');

// // Routes d'authentification
// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

// // Routes profil et onboarding
// router.patch('/profile/personal', protect, updatePersonalInfo);
// router.patch('/profile/workout-schedule', protect, updateWorkoutSchedule);
// router.patch('/profile/measurements', protect, updateMeasurements);
// router.patch('/profile/fitness-goals', protect, updateFitnessGoals);
// router.patch('/profile/complete-onboarding', protect, completeOnboarding);

// // Routes paramètres utilisateur
// router.put('/settings', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

//     user.preferences = {
//       ...user.preferences,
//       ...req.body,
//     };
//     await user.save();

//     res.status(200).json({ message: 'Paramètres mis à jour avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// router.get('/settings', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('preferences');
//     if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

//     res.status(200).json(user.preferences);
//   } catch (error) {
//     console.error('Erreur lors de la récupération des préférences :', error.message);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// // Suppression du compte
// router.delete('/delete', protect, async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.user.id);
//     res.status(200).json({ message: 'Compte supprimé avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la suppression du compte' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// Import des contrôleurs d'authentification
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');

// Import des contrôleurs utilisateur pour l'onboarding
const {
  updatePersonalInfo,
  updateWorkoutSchedule,
  updateMeasurements,
  updateFitnessGoals,
  completeOnboarding
} = require('../controllers/userController');

const User = require('../models/User');

// ============= ROUTES D'AUTHENTIFICATION =============
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

// ============= ROUTES D'ONBOARDING =============
router.patch('/profile/personal', protect, updatePersonalInfo);
router.patch('/profile/workout-schedule', protect, updateWorkoutSchedule);
router.patch('/profile/measurements', protect, updateMeasurements);
router.patch('/profile/fitness-goals', protect, updateFitnessGoals);
router.patch('/profile/complete-onboarding', protect, completeOnboarding);

// ============= ROUTES PARAMÈTRES UTILISATEUR =============
router.put('/settings', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    user.preferences = {
      ...user.preferences,
      ...req.body,
    };
    await user.save();

    res.status(200).json({ message: 'Paramètres mis à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des paramètres:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/settings', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('preferences');
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.status(200).json(user.preferences);
  } catch (error) {
    console.error('Erreur lors de la récupération des préférences:', error.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// ============= SUPPRESSION DU COMPTE =============
router.delete('/delete', protect, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: 'Compte supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du compte:', error);
    res.status(500).json({ message: 'Erreur lors de la suppression du compte' });
  }
});

module.exports = router;

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middleware de base
// app.use(cors());
// app.use(express.json());

// // ===== TEST 1: Route simple =====
// app.get('/test', (req, res) => {
//   res.json({ message: 'Serveur fonctionne!' });
// });

// // ===== TEST 2: Connexion DB seulement =====
// const connectDB = require('./config/db');
// connectDB();

// // ===== TEST 3: Import des routes une par une =====
// console.log('🔍 Test d\'import des routes...');

// try {
//   const authRoutes = require('./routes/auth');
//   app.use('/api/auth', authRoutes);
//   console.log('✅ routes/auth importées avec succès');
// } catch (error) {
//   console.log('❌ Erreur dans routes/auth:', error.message);
// }

// try {
//   const workoutRoutes = require('./routes/workout');
//   app.use('/api/workouts', workoutRoutes);
//   console.log('✅ routes/workout importées avec succès');
// } catch (error) {
//   console.log('❌ Erreur dans routes/workout:', error.message);
// }

// try {
//   const adminRoutes = require('./routes/admin');
//   app.use('/api/admin', adminRoutes);
//   console.log('✅ routes/admin importées avec succès');
// } catch (error) {
//   console.log('❌ Erreur dans routes/admin:', error.message);
// }

// // Middleware d'erreur global
// app.use((err, req, res, next) => {
//   console.error('🚨 Erreur attrapée:', err.message);
//   console.error('Stack:', err.stack);
//   res.status(500).json({ message: 'Erreur serveur', error: err.message });
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`🚀 Serveur de diagnostic démarré sur le port ${PORT}`);
// });

// module.exports = app;