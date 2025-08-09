// const adminOnly = (req, res, next) => { 
//   if (req.user && req.user.role === 'admin') { 
//     next(); 
//   } else { 
//     res.status(403).json({ message: 'Access denied. Admin only.' }); 
//   } 
// }; 
 
// const adminOrSelf = (req, res, next) => { 
//   if (req.user && (req.user.role === 'admin' || req.user._id.toString() === req.params.id)) { 
//     next(); 
//   } else { 
//     res.status(403).json({ message: 'Access denied. Admin or self only.' }); 
//   } 
// }; 
 
// module.exports = { adminOnly, adminOrSelf }; 
// middleware/admin.js
const adminOnly = (req, res, next) => {
  try {
    // Vérifier si l'utilisateur est authentifié
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Accès non autorisé - utilisateur non authentifié'
      });
    }

    // Vérifier si l'utilisateur a le rôle admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Accès interdit - droits administrateur requis'
      });
    }

    // L'utilisateur est admin, continuer
    next();
  } catch (error) {
    console.error('Erreur middleware admin:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur'
    });
  }
};

module.exports = {
  adminOnly
};