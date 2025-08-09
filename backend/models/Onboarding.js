// const mongoose = require('mongoose'); 
 
// const onboardingSchema = new mongoose.Schema({ 
//   userId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User', 
//     required: true, 
//     unique: true // Ensure one onboarding record per user 
//   }, 
//   weight: { 
//     type: Number, 
//     required: true, 
//     min: [1, 'Weight must be greater than 0'], 
//     max: [1000, 'Weight must be less than 1000 kg'] 
//   }, 
//   trainingType: { 
//     type: String, 
//     required: true, 
//     enum: ['Gain Weight', 'Build Muscle', 'Lose Fat'], 
//     trim: true 
//   }, 
//   trainingSchedule: { 
//     type: String, 
//     required: true, 
//     enum: ['Morning', 'Afternoon', 'Evening'], 
//     trim: true 
//   }, 
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   }, 
//   updatedAt: { 
//     type: Date, 
//     default: Date.now 
//   } 
// }, { 
//   timestamps: true // Automatically manage createdAt and updatedAt 
// }); 
 
// // Pre-save middleware to update the updatedAt field 
// onboardingSchema.pre('save', function(next) { 
//   this.updatedAt = Date.now(); 
//   next(); 
// }); 
 
// // Instance method to get formatted data 
// onboardingSchema.methods.getFormattedData = function() { 
//   return { 
//     id: this._id, 
//     userId: this.userId, 
//     weight: this.weight, 
//     trainingType: this.trainingType, 
//     trainingSchedule: this.trainingSchedule, 
//     createdAt: this.createdAt, 
//     updatedAt: this.updatedAt 
//   }; 
// }; 
 
// // Static method to find by userId 
// onboardingSchema.statics.findByUserId = function(userId) { 
//   return this.findOne({ userId }); 
// }; 
 
// const Onboarding = mongoose.model('Onboarding', onboardingSchema); 
 
// module.exports = Onboarding;
const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
  user: { // Changé de 'userId' à 'user' pour correspondre au code des contrôleurs
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // S'assurer qu'il n'y a qu'un seul enregistrement d'onboarding par utilisateur
  },
  weight: {
    type: Number,
    required: true,
    min: [1, 'Le poids doit être supérieur à 0'],
    max: [1000, 'Le poids doit être inférieur à 1000 kg']
  },
  trainingType: {
    type: String,
    required: true,
    enum: ['Gain Weight', 'Build Muscle', 'Lose Fat'],
    trim: true
  },
  trainingSchedule: {
    type: String,
    required: true,
    enum: ['Morning', 'Afternoon', 'Evening'],
    trim: true
  },
  isCompleted: { // Ajouté pour correspondre aux routes
    type: Boolean,
    default: false
  },
  completedAt: { // Ajouté pour correspondre aux routes
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Gère automatiquement createdAt et updatedAt
});

// Middleware pre-save pour mettre à jour le champ updatedAt
onboardingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Méthode d'instance pour obtenir des données formatées
onboardingSchema.methods.getFormattedData = function() {
  return {
    id: this._id,
    user: this.user,
    weight: this.weight,
    trainingType: this.trainingType,
    trainingSchedule: this.trainingSchedule,
    isCompleted: this.isCompleted,
    completedAt: this.completedAt,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

// Méthode statique pour trouver par ID utilisateur
onboardingSchema.statics.findByUserId = function(userId) {
  return this.findOne({ user: userId });
};

const Onboarding = mongoose.model('Onboarding', onboardingSchema);

module.exports = Onboarding;