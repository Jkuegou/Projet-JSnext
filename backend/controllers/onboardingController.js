// const Onboarding = require('../models/Onboarding');

// exports.saveOnboardingData = async (req, res) => {
//   const userId = req.user._id;
//   const data = req.body;

//   try {
//     let onboarding = await Onboarding.findOne({ user: userId });

//     if (onboarding) {
//       onboarding = await Onboarding.findOneAndUpdate({ user: userId }, data, { new: true });
//     } else {
//       onboarding = await Onboarding.create({ ...data, user: userId });
//     }

//     res.status(200).json(onboarding);
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur de sauvegarde', error });
//   }
// };

// exports.getOnboardingData = async (req, res) => {
//   try {
//     const onboarding = await Onboarding.findOne({ user: req.user._id });

//     if (!onboarding) return res.status(404).json({ message: 'Aucune donnée trouvée' });

//     res.json(onboarding);
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur', error });
//   }
// };

// exports.completeOnboarding = async (req, res) => {
//   try {
//     const onboarding = await Onboarding.findOneAndUpdate(
//       { user: req.user._id },
//       { isCompleted: true },
//       { new: true }
//     );

//     if (!onboarding) return res.status(404).json({ message: 'Onboarding non trouvé' });

//     res.json({ message: 'Onboarding terminé', onboarding });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur serveur', error });
//   }
// };

const Onboarding = require('../models/Onboarding');

exports.saveOnboardingData = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;

  // Validation des données d'entrée
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ 
      message: 'Données requises pour la sauvegarde' 
    });
  }

  try {
    let onboarding = await Onboarding.findOne({ user: userId });

    if (onboarding) {
      // Mise à jour des données existantes
      onboarding = await Onboarding.findOneAndUpdate(
        { user: userId }, 
        { ...data, updatedAt: new Date() }, 
        { new: true, runValidators: true }
      );
    } else {
      // Création d'un nouveau record d'onboarding
      onboarding = await Onboarding.create({ 
        ...data, 
        user: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    res.status(200).json({
      success: true,
      data: onboarding,
      message: 'Données sauvegardées avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur de sauvegarde', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erreur interne du serveur'
    });
  }
};

exports.getOnboardingData = async (req, res) => {
  try {
    const onboarding = await Onboarding.findOne({ user: req.user._id });

    if (!onboarding) {
      return res.status(404).json({ 
        success: false,
        message: 'Aucune donnée d\'onboarding trouvée' 
      });
    }

    res.status(200).json({
      success: true,
      data: onboarding
    });
  } catch (error) {
    console.error('Erreur lors de la récupération:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erreur interne du serveur'
    });
  }
};

exports.completeOnboarding = async (req, res) => {
  try {
    const onboarding = await Onboarding.findOneAndUpdate(
      { user: req.user._id },
      { 
        isCompleted: true, 
        completedAt: new Date(),
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!onboarding) {
      return res.status(404).json({ 
        success: false,
        message: 'Onboarding non trouvé' 
      });
    }

    res.status(200).json({ 
      success: true,
      message: 'Onboarding terminé avec succès', 
      data: onboarding 
    });
  } catch (error) {
    console.error('Erreur lors de la finalisation:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erreur interne du serveur'
    });
  }
}