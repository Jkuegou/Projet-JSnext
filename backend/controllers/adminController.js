// const User = require('../models/User'); 
 
// // Get all users 
// const getAllUsers = async (req, res) => { 
//   try { 
//     const users = await User.find({}).select('-password').sort({ createdAt: -1 }); 
//     res.json({ 
//       success: true, 
//       count: users.length, 
//       data: users 
//     }); 
//   } catch (error) { 
//     res.status(500).json({ message: error.message }); 
//   } 
// }; 
 
// // Get user by ID 
// const getUserById = async (req, res) => { 
//   try { 
//     const user = await User.findById(req.params.id).select('-password'); 
     
//     if (!user) { 
//       return res.status(404).json({ message: 'User not found' }); 
//     } 
     
//     res.json(user); 
//   } catch (error) { 
//     res.status(500).json({ message: error.message }); 
//   } 
// }; 
 
// // Update user 
// const updateUser = async (req, res) => { 
//   try { 
//     const { name, email, role, isActive } = req.body; 
     
//     const user = await User.findById(req.params.id); 
     
//     if (!user) { 
//       return res.status(404).json({ message: 'User not found' }); 
//     } 
     
//     // Prevent admins from deactivating themselves 
//     if (req.user._id.toString() === req.params.id && isActive === false) { 
//       return res.status(400).json({ message: 'Cannot deactivate your own account' }); 
//     } 
     
//     user.name = name || user.name; 
//     user.email = email || user.email; 
//     user.role = role || user.role; 
//     user.isActive = isActive !== undefined ? isActive : user.isActive; 
     
//     const updatedUser = await user.save(); 
     
//     res.json({ 
//       _id: updatedUser._id, 
//       name: updatedUser.name, 
//       email: updatedUser.email, 
//       role: updatedUser.role, 
//       isActive: updatedUser.isActive, 
//       createdAt: updatedUser.createdAt, 
//       lastLogin: updatedUser.lastLogin 
//     }); 
//   } catch (error) { 
//     res.status(500).json({ message: error.message }); 
//   } 
// }; 
 
// // Delete user 
// const deleteUser = async (req, res) => { 
//   try { 
//     const user = await User.findById(req.params.id); 
     
//     if (!user) { 
//       return res.status(404).json({ message: 'User not found' }); 
//     } 
     
//     // Prevent admins from deleting themselves 
//     if (req.user._id.toString() === req.params.id) { 
//       return res.status(400).json({ message: 'Cannot delete your own account' }); 
//     } 
     
//     await User.findByIdAndDelete(req.params.id); 
     
//     res.json({ message: 'User deleted successfully' }); 
//   } catch (error) { 
//     res.status(500).json({ message: error.message }); 
//   } 
// }; 
 
// // Get dashboard stats 
// const getDashboardStats = async (req, res) => { 
//   try { 
//     const totalUsers = await User.countDocuments(); 
//     const totalAdmins = await User.countDocuments({ role: 'admin' }); 
//     const activeUsers = await User.countDocuments({ isActive: true }); 
//     const recentUsers = await User.find({}) 
//       .select('name email role createdAt') 
//       .sort({ createdAt: -1 }) 
//       .limit(5); 
     
//     res.json({ 
//       totalUsers, 
//       totalAdmins, 
//       activeUsers, 
//       inactiveUsers: totalUsers - activeUsers, 
// recentUsers 
// }); 
// } catch (error) { 
// res.status(500).json({ message: error.message }); 
// } 
// }; 
// module.exports = { 
// getAllUsers, 
// getUserById, 
// updateUser, 
// deleteUser, 
// getDashboardStats 
// };
// const User = require('../models/User');

// // Get all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}).select('-password').sort({ createdAt: -1 });
//     return res.json({
//       success: true,
//       count: users.length,
//       data: users,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // Get user by ID
// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     return res.json(user);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // Update user
// const updateUser = async (req, res) => {
//   try {
//     const { name, email, role, isActive } = req.body;

//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     // Prevent self-deactivation
//     if (req.user._id.toString() === req.params.id && isActive === false) {
//       return res.status(400).json({ message: 'Cannot deactivate your own account' });
//     }

//     user.name = name ?? user.name;
//     user.email = email ?? user.email;
//     user.role = role ?? user.role;
//     if (isActive !== undefined) user.isActive = isActive;

//     const updatedUser = await user.save();

//     return res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       role: updatedUser.role,
//       isActive: updatedUser.isActive,
//       createdAt: updatedUser.createdAt,
//       lastLogin: updatedUser.lastLogin,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // Delete user
// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     if (req.user._id.toString() === req.params.id) {
//       return res.status(400).json({ message: 'Cannot delete your own account' });
//     }

//     await user.remove();

//     return res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // Get dashboard stats
// const getDashboardStats = async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalAdmins = await User.countDocuments({ role: 'admin' });
//     const activeUsers = await User.countDocuments({ isActive: true });
//     const recentUsers = await User.find()
//       .select('name email role createdAt')
//       .sort({ createdAt: -1 })
//       .limit(5);

//     return res.json({
//       totalUsers,
//       totalAdmins,
//       activeUsers,
//       inactiveUsers: totalUsers - activeUsers,
//       recentUsers,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
//   getDashboardStats,
// };
const User = require('../models/User');

// Obtenir tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error('Erreur getAllUsers:', error);
    return res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// Obtenir un utilisateur par ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'Utilisateur non trouvé' 
      });
    }

    return res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Erreur getUserById:', error);
    return res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// Mettre à jour un utilisateur
const updateUser = async (req, res) => {
  try {
    const { name, email, role, isActive } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'Utilisateur non trouvé' 
      });
    }

    // Empêcher l'auto-désactivation
    if (req.user._id.toString() === req.params.id && isActive === false) {
      return res.status(400).json({ 
        success: false,
        message: 'Vous ne pouvez pas désactiver votre propre compte' 
      });
    }

    // Mise à jour des champs
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.role = role ?? user.role;
    if (isActive !== undefined) user.isActive = isActive;

    const updatedUser = await user.save();

    return res.json({
      success: true,
      message: 'Utilisateur mis à jour avec succès',
      data: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        isActive: updatedUser.isActive,
        createdAt: updatedUser.createdAt,
        lastLogin: updatedUser.lastLogin,
      }
    });
  } catch (error) {
    console.error('Erreur updateUser:', error);
    return res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// Supprimer un utilisateur
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'Utilisateur non trouvé' 
      });
    }

    // Empêcher l'auto-suppression
    if (req.user._id.toString() === req.params.id) {
      return res.status(400).json({ 
        success: false,
        message: 'Vous ne pouvez pas supprimer votre propre compte' 
      });
    }

    await User.findByIdAndDelete(req.params.id);

    return res.json({ 
      success: true,
      message: 'Utilisateur supprimé avec succès' 
    });
  } catch (error) {
    console.error('Erreur deleteUser:', error);
    return res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// Obtenir les statistiques du tableau de bord
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdmins = await User.countDocuments({ role: 'admin' });
    const activeUsers = await User.countDocuments({ isActive: true });
    const recentUsers = await User.find()
      .select('name email role createdAt')
      .sort({ createdAt: -1 })
      .limit(5);

    return res.json({
      success: true,
      data: {
        totalUsers,
        totalAdmins,
        activeUsers,
        inactiveUsers: totalUsers - activeUsers,
        recentUsers,
      }
    });
  } catch (error) {
    console.error('Erreur getDashboardStats:', error);
    return res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getDashboardStats,
};