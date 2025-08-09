// const express = require('express'); 
// const router = express.Router(); 
// const Onboarding = require('../models/Onboarding'); 
// const auth = require('../middleware/auth'); // Assuming you have auth middleware 
// const { body, validationResult } = require('express-validator'); 
 
// // Validation middleware 
// const validateOnboardingData = [ 
//   body('weight') 
//     .isFloat({ min: 1, max: 1000 }) 
//     .withMessage('Weight must be a number between 1 and 1000 kg'), 
//   body('trainingType') 
//     .isIn(['Gain Weight', 'Build Muscle', 'Lose Fat']) 
//     .withMessage('Training type must be one of: Gain Weight, Build Muscle, Lose Fat'), 
//   body('trainingSchedule') 
//     .isIn(['Morning', 'Afternoon', 'Evening']) 
//     .withMessage('Training schedule must be one of: Morning, Afternoon, Evening') 
// ]; 
 
// // POST /api/onboarding - Create or update onboarding data 
// router.post('/', auth, validateOnboardingData, async (req, res) => { 
//   try { 
//     // Check for validation errors 
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Validation failed', 
//         errors: errors.array() 
//       }); 
//     } 
 
//     const { weight, trainingType, trainingSchedule } = req.body; 
//     const userId = req.user.id; // From auth middleware 
 
//     // Check if onboarding data already exists for this user 
//     let onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (onboardingData) { 
//       // Update existing onboarding data 
//       onboardingData.weight = weight; 
//       onboardingData.trainingType = trainingType; 
//       onboardingData.trainingSchedule = trainingSchedule; 
//       onboardingData.updatedAt = new Date(); 
 
//       await onboardingData.save(); 
 
//       res.status(200).json({ 
//         success: true, 
//         message: 'Onboarding data updated successfully', 
//         data: onboardingData.getFormattedData() 
//       }); 
//     } else { 
//       // Create new onboarding data 
//       onboardingData = new Onboarding({ 
//         userId, 
//         weight, 
//         trainingType, 
//         trainingSchedule 
//       }); 
 
//       await onboardingData.save(); 
 
//       res.status(201).json({ 
//         success: true, 
//         message: 'Onboarding data saved successfully', 
//         data: onboardingData.getFormattedData() 
//       }); 
//     } 
 
//   } catch (error) { 
//     console.error('Error saving onboarding data:', error); 
 
//     // Handle duplicate key error (in case unique constraint fails) 
//     if (error.code === 11000) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Onboarding data already exists for this user' 
//       }); 
//     } 
 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error', 
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// }); 
 
// // GET /api/onboarding - Get user's onboarding data 
// router.get('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user.id; 
//     const onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Onboarding data not found' 
//       }); 
//     } 
 
//     onboardingData.weight = weight; 
//     onboardingData.trainingType = trainingType; 
//     onboardingData.trainingSchedule = trainingSchedule; 
 
//     await onboardingData.save(); 
 
//     res.status(200).json({ 
//       success: true, 
//       message: 'Onboarding data updated successfully', 
//       data: onboardingData.getFormattedData() 
//     }); 
 
//   } catch (error) { 
//     console.error('Error updating onboarding data:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error' 
//     }); 
//   } 
// }); 
 
// // DELETE /api/onboarding - Delete onboarding data 
// router.delete('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user.id; 
//     const onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Onboarding data not found' 
//       }); 
//     } 
 
//     await Onboarding.deleteOne({ userId }); 
 
//     res.status(200).json({ 
//       success: true, 
//       message: 'Onboarding data deleted successfully' 
//     }); 
 
//   } catch (error) { 
//     console.error('Error deleting onboarding data:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error' 
//     }); 
//   } 
// });
// const express = require('express'); 
// const router = express.Router(); 
// const Onboarding = require('../models/Onboarding'); 
// const auth = require('../middleware/auth'); // Assuming you have auth middleware 
// const { body, validationResult } = require('express-validator'); 

// // Validation middleware 
// const validateOnboardingData = [ 
//   body('weight') 
//     .isFloat({ min: 1, max: 1000 }) 
//     .withMessage('Le poids doit être un nombre entre 1 et 1000 kg'), 
//   body('trainingType') 
//     .isIn(['Gain Weight', 'Build Muscle', 'Lose Fat']) 
//     .withMessage('Le type d\'entraînement doit être: Gain Weight, Build Muscle, ou Lose Fat'), 
//   body('trainingSchedule') 
//     .isIn(['Morning', 'Afternoon', 'Evening']) 
//     .withMessage('L\'horaire d\'entraînement doit être: Morning, Afternoon, ou Evening') 
// ]; 

// // POST /api/onboarding - Créer ou mettre à jour les données d'onboarding 
// router.post('/', auth, validateOnboardingData, async (req, res) => { 
//   try { 
//     // Vérifier les erreurs de validation 
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Échec de la validation', 
//         errors: errors.array() 
//       }); 
//     } 

//     const { weight, trainingType, trainingSchedule } = req.body; 
//     const userId = req.user._id || req.user.id; // Support des deux formats

//     // Vérifier si les données d'onboarding existent déjà pour cet utilisateur 
//     let onboardingData = await Onboarding.findOne({ user: userId }); 

//     if (onboardingData) { 
//       // Mettre à jour les données existantes 
//       onboardingData.weight = weight; 
//       onboardingData.trainingType = trainingType; 
//       onboardingData.trainingSchedule = trainingSchedule; 
//       onboardingData.updatedAt = new Date(); 

//       await onboardingData.save(); 

//       res.status(200).json({ 
//         success: true, 
//         message: 'Données d\'onboarding mises à jour avec succès', 
//         data: onboardingData 
//       }); 
//     } else { 
//       // Créer de nouvelles données d'onboarding 
//       onboardingData = new Onboarding({ 
//         user: userId, 
//         weight, 
//         trainingType, 
//         trainingSchedule,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }); 

//       await onboardingData.save(); 

//       res.status(201).json({ 
//         success: true, 
//         message: 'Données d\'onboarding sauvegardées avec succès', 
//         data: onboardingData 
//       }); 
//     } 

//   } catch (error) { 
//     console.error('Erreur lors de la sauvegarde des données d\'onboarding:', error); 

//     // Gérer l'erreur de clé dupliquée 
//     if (error.code === 11000) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Les données d\'onboarding existent déjà pour cet utilisateur' 
//       }); 
//     } 

//     res.status(500).json({ 
//       success: false, 
//       message: 'Erreur interne du serveur', 
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// }); 

// // GET /api/onboarding - Récupérer les données d'onboarding de l'utilisateur 
// router.get('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user._id || req.user.id; 
//     const onboardingData = await Onboarding.findOne({ user: userId }); 

//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Données d\'onboarding non trouvées' 
//       }); 
//     } 

//     res.status(200).json({ 
//       success: true, 
//       message: 'Données récupérées avec succès', 
//       data: onboardingData 
//     }); 

//   } catch (error) { 
//     console.error('Erreur lors de la récupération des données d\'onboarding:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Erreur interne du serveur',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// }); 

// // PUT /api/onboarding - Mettre à jour les données d'onboarding 
// router.put('/', auth, validateOnboardingData, async (req, res) => { 
//   try { 
//     // Vérifier les erreurs de validation 
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Échec de la validation', 
//         errors: errors.array() 
//       }); 
//     } 

//     const { weight, trainingType, trainingSchedule } = req.body; 
//     const userId = req.user._id || req.user.id; 

//     const onboardingData = await Onboarding.findOneAndUpdate(
//       { user: userId },
//       { 
//         weight, 
//         trainingType, 
//         trainingSchedule,
//         updatedAt: new Date()
//       },
//       { new: true, runValidators: true }
//     );

//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Données d\'onboarding non trouvées' 
//       }); 
//     } 

//     res.status(200).json({ 
//       success: true, 
//       message: 'Données d\'onboarding mises à jour avec succès', 
//       data: onboardingData 
//     }); 

//   } catch (error) { 
//     console.error('Erreur lors de la mise à jour des données d\'onboarding:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Erreur interne du serveur',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// }); 

// // DELETE /api/onboarding - Supprimer les données d'onboarding 
// router.delete('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user._id || req.user.id; 
//     const result = await Onboarding.deleteOne({ user: userId }); 

//     if (result.deletedCount === 0) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Données d\'onboarding non trouvées' 
//       }); 
//     } 

//     res.status(200).json({ 
//       success: true, 
//       message: 'Données d\'onboarding supprimées avec succès' 
//     }); 

//   } catch (error) { 
//     console.error('Erreur lors de la suppression des données d\'onboarding:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Erreur interne du serveur',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// });

// // PATCH /api/onboarding/complete - Marquer l'onboarding comme terminé
// router.patch('/complete', auth, async (req, res) => {
//   try {
//     const userId = req.user._id || req.user.id;
    
//     const onboardingData = await Onboarding.findOneAndUpdate(
//       { user: userId },
//       { 
//         isCompleted: true,
//         completedAt: new Date(),
//         updatedAt: new Date()
//       },
//       { new: true }
//     );

//     if (!onboardingData) {
//       return res.status(404).json({
//         success: false,
//         message: 'Données d\'onboarding non trouvées'
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Onboarding marqué comme terminé',
//       data: onboardingData
//     });

//   } catch (error) {
//     console.error('Erreur lors de la finalisation de l\'onboarding:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Erreur interne du serveur',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Onboarding = require('../models/Onboarding');
const { protect } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateOnboardingData = [
  body('weight')
    .isFloat({ min: 1, max: 1000 })
    .withMessage('Le poids doit être un nombre entre 1 et 1000 kg'),
  body('trainingType')
    .isIn(['Gain Weight', 'Build Muscle', 'Lose Fat'])
    .withMessage('Le type d\'entraînement doit être: Gain Weight, Build Muscle, ou Lose Fat'),
  body('trainingSchedule')
    .isIn(['Morning', 'Afternoon', 'Evening'])
    .withMessage('L\'horaire d\'entraînement doit être: Morning, Afternoon, ou Evening')
];

// POST /api/onboarding - Créer ou mettre à jour les données d'onboarding
router.post('/', protect, validateOnboardingData, async (req, res) => {
  try {
    // Vérifier les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Échec de la validation',
        errors: errors.array()
      });
    }

    const { weight, trainingType, trainingSchedule } = req.body;
    const userId = req.user._id || req.user.id;

    // Vérifier si les données d'onboarding existent déjà pour cet utilisateur
    let onboardingData = await Onboarding.findOne({ user: userId });

    if (onboardingData) {
      // Mettre à jour les données existantes
      onboardingData.weight = weight;
      onboardingData.trainingType = trainingType;
      onboardingData.trainingSchedule = trainingSchedule;
      onboardingData.updatedAt = new Date();

      await onboardingData.save();

      res.status(200).json({
        success: true,
        message: 'Données d\'onboarding mises à jour avec succès',
        data: onboardingData
      });
    } else {
      // Créer de nouvelles données d'onboarding
      onboardingData = new Onboarding({
        user: userId,
        weight,
        trainingType,
        trainingSchedule,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      await onboardingData.save();

      res.status(201).json({
        success: true,
        message: 'Données d\'onboarding sauvegardées avec succès',
        data: onboardingData
      });
    }

  } catch (error) {
    console.error('Erreur lors de la sauvegarde des données d\'onboarding:', error);

    // Gérer l'erreur de clé dupliquée
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Les données d\'onboarding existent déjà pour cet utilisateur'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/onboarding - Récupérer les données d'onboarding de l'utilisateur
router.get('/', protect, async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const onboardingData = await Onboarding.findOne({ user: userId });

    if (!onboardingData) {
      return res.status(404).json({
        success: false,
        message: 'Données d\'onboarding non trouvées'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Données récupérées avec succès',
      data: onboardingData
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des données d\'onboarding:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// PUT /api/onboarding - Mettre à jour les données d'onboarding
router.put('/', protect, validateOnboardingData, async (req, res) => {
  try {
    // Vérifier les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Échec de la validation',
        errors: errors.array()
      });
    }

    const { weight, trainingType, trainingSchedule } = req.body;
    const userId = req.user._id || req.user.id;

    const onboardingData = await Onboarding.findOneAndUpdate(
      { user: userId },
      {
        weight,
        trainingType,
        trainingSchedule,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!onboardingData) {
      return res.status(404).json({
        success: false,
        message: 'Données d\'onboarding non trouvées'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Données d\'onboarding mises à jour avec succès',
      data: onboardingData
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour des données d\'onboarding:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// DELETE /api/onboarding - Supprimer les données d'onboarding
router.delete('/', protect, async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const result = await Onboarding.deleteOne({ user: userId });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Données d\'onboarding non trouvées'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Données d\'onboarding supprimées avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la suppression des données d\'onboarding:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// PATCH /api/onboarding/complete - Marquer l'onboarding comme terminé
router.patch('/complete', protect, async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    const onboardingData = await Onboarding.findOneAndUpdate(
      { user: userId },
      {
        isCompleted: true,
        completedAt: new Date(),
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!onboardingData) {
      return res.status(404).json({
        success: false,
        message: 'Données d\'onboarding non trouvées'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Onboarding marqué comme terminé',
      data: onboardingData
    });

  } catch (error) {
    console.error('Erreur lors de la finalisation de l\'onboarding:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;

// const express = require('express'); 
// const router = express.Router(); 
// const Onboarding = require('../models/Onboarding'); 
// const auth = require('../middleware/auth'); // Assuming you have auth middleware 
// const { body, validationResult } = require('express-validator'); 
 
// // Validation middleware 
// const validateOnboardingData = [ 
//   body('weight') 
//     .isFloat({ min: 1, max: 1000 }) 
//     .withMessage('Weight must be a number between 1 and 1000 kg'), 
//   body('trainingType') 
//     .isIn(['Gain Weight', 'Build Muscle', 'Lose Fat']) 
//     .withMessage('Training type must be one of: Gain Weight, Build Muscle, Lose Fat'), 
//   body('trainingSchedule') 
//     .isIn(['Morning', 'Afternoon', 'Evening']) 
//     .withMessage('Training schedule must be one of: Morning, Afternoon, Evening') 
// ]; 
 
// // POST /api/onboarding - Create or update onboarding data 
// router.post('/', auth, validateOnboardingData, async (req, res) => { 
//   try { 
//     // Check for validation errors 
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Validation failed', 
//         errors: errors.array() 
//       }); 
//     } 
 
//     const { weight, trainingType, trainingSchedule } = req.body; 
//     const userId = req.user.id; // From auth middleware 
 
//     // Check if onboarding data already exists for this user 
//     let onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (onboardingData) { 
//       // Update existing onboarding data 
//       onboardingData.weight = weight; 
//       onboardingData.trainingType = trainingType; 
//       onboardingData.trainingSchedule = trainingSchedule; 
//       onboardingData.updatedAt = new Date(); 
 
//       await onboardingData.save(); 
 
//       res.status(200).json({ 
//         success: true, 
//         message: 'Onboarding data updated successfully', 
//         data: onboardingData.getFormattedData() 
//       }); 
//     } else { 
//       // Create new onboarding data 
//       onboardingData = new Onboarding({ 
//         userId, 
//         weight, 
//         trainingType, 
//         trainingSchedule 
//       }); 
 
//       await onboardingData.save(); 
 
//       res.status(201).json({ 
//         success: true, 
//         message: 'Onboarding data saved successfully', 
//         data: onboardingData.getFormattedData() 
//       }); 
//     } 
 
//   } catch (error) { 
//     console.error('Error saving onboarding data:', error); 
 
//     // Handle duplicate key error (in case unique constraint fails) 
//     if (error.code === 11000) { 
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Onboarding data already exists for this user' 
//       }); 
//     } 
 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error', 
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//     }); 
//   } 
// }); 
 
// // GET /api/onboarding - Get user's onboarding data 
// router.get('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user.id; 
//     const onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Onboarding data not found' 
//       }); 
//     } 
 
//     onboardingData.weight = weight; 
//     onboardingData.trainingType = trainingType; 
//     onboardingData.trainingSchedule = trainingSchedule; 
 
//     await onboardingData.save(); 
 
//     res.status(200).json({ 
//       success: true, 
//       message: 'Onboarding data updated successfully', 
//       data: onboardingData.getFormattedData() 
//     }); 
 
//   } catch (error) { 
//     console.error('Error updating onboarding data:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error' 
//     }); 
//   } 
// }); 
 
// // DELETE /api/onboarding - Delete onboarding data 
// router.delete('/', auth, async (req, res) => { 
//   try { 
//     const userId = req.user.id; 
//     const onboardingData = await Onboarding.findByUserId(userId); 
 
//     if (!onboardingData) { 
//       return res.status(404).json({ 
//         success: false, 
//         message: 'Onboarding data not found' 
//       }); 
//     } 
 
//     await Onboarding.deleteOne({ userId }); 
 
//     res.status(200).json({ 
//       success: true, 
//       message: 'Onboarding data deleted successfully' 
//     }); 
 
//   } catch (error) { 
//     console.error('Error deleting onboarding data:', error); 
//     res.status(500).json({ 
//       success: false, 
//       message: 'Internal server error' 
//     }); 
//   } 
// });