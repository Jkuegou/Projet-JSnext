
// import React, { useState, useEffect } from 'react';
// import { Camera, Edit3, Trophy, Target, Calendar, TrendingUp, Heart, Activity, Medal, Star } from 'lucide-react';
// import { useAuth } from '../../../context/AuthContext';
// import { useOnboarding } from '../../../context/OnboardingContext';
// import './Profile.css';

// const Profile = () => {
//   const { user } = useAuth();
//   const { onboardingData, loadOnboardingData, updateOnboardingData, loading } = useOnboarding();
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     if (user && !onboardingData) {
//       loadOnboardingData();
//     }
//   }, [user, onboardingData, loadOnboardingData]);

//   useEffect(() => {
//     if (onboardingData) {
//       // Initialiser formData avec les données d'onboarding
//       setFormData({
//         // Informations personnelles
//         firstName: onboardingData.personalInfo?.firstName || '',
//         lastName: onboardingData.personalInfo?.lastName || '',
//         age: onboardingData.personalInfo?.age || '',
//         gender: onboardingData.personalInfo?.gender || '',
//         weight: onboardingData.personalInfo?.weight || '',
//         height: onboardingData.personalInfo?.height || '',
        
//         // Objectifs fitness
//         primaryGoal: onboardingData.fitnessGoals?.primaryGoal || 'Perte de poids',
//         targetWeight: onboardingData.fitnessGoals?.targetWeight || '',
//         activityLevel: onboardingData.fitnessGoals?.activityLevel || 'Intermédiaire',
//         experience: onboardingData.fitnessGoals?.experience || '',
        
//         // Mensurations
//         chest: onboardingData.measurements?.chest || '',
//         waist: onboardingData.measurements?.waist || '',
//         hips: onboardingData.measurements?.hips || '',
//         arms: onboardingData.measurements?.arms || '',
//         thighs: onboardingData.measurements?.thighs || '',
        
//         // Programme
//         daysPerWeek: onboardingData.workoutSchedule?.daysPerWeek || '',
//         preferredTime: onboardingData.workoutSchedule?.preferredTime || '',
//         sessionDuration: onboardingData.workoutSchedule?.sessionDuration || '',
//         workoutTypes: onboardingData.workoutSchedule?.workoutTypes || []
//       });
//     }
//   }, [onboardingData]);

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <div className="spinner"></div>
//         <p>Chargement du profil...</p>
//       </div>
//     );
//   }

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = async () => {
//     try {
//       // Restructurer les données pour l'onboarding
//       const updatedOnboardingData = {
//         personalInfo: {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           age: formData.age,
//           gender: formData.gender,
//           weight: formData.weight,
//           height: formData.height
//         },
//         fitnessGoals: {
//           primaryGoal: formData.primaryGoal,
//           targetWeight: formData.targetWeight,
//           activityLevel: formData.activityLevel,
//           experience: formData.experience
//         },
//         measurements: {
//           chest: formData.chest,
//           waist: formData.waist,
//           hips: formData.hips,
//           arms: formData.arms,
//           thighs: formData.thighs
//         },
//         workoutSchedule: {
//           daysPerWeek: formData.daysPerWeek,
//           preferredTime: formData.preferredTime,
//           sessionDuration: formData.sessionDuration,
//           workoutTypes: formData.workoutTypes
//         }
//       };

//       await updateOnboardingData(updatedOnboardingData);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde:', error);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const getDisplayName = () => {
//     const personalInfo = onboardingData?.personalInfo || {};
//     if (personalInfo.firstName && personalInfo.lastName) {
//       return `${personalInfo.firstName} ${personalInfo.lastName}`;
//     }
//     return personalInfo.firstName || user?.email || 'Utilisateur';
//   };

//   const getGoalLabel = () => {
//     return onboardingData?.fitnessGoals?.primaryGoal || 'Objectif non défini';
//   };

//   const getLevelLabel = () => {
//     return onboardingData?.fitnessGoals?.activityLevel || 'Niveau non défini';
//   };

//   const renderOverview = () => (
//     <div className="profile-overview">
//       <div className="profile-stats">
//         <div className="stat-card">
//           <div className="stat-header">
//             <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #4ade80, #06b6d4)' }}>
//               <Activity size={20} />
//             </div>
//             <div className="stat-title">Entraînements</div>
//           </div>
//           <div className="stat-value">128</div>
//           <div className="stat-subtitle">Sessions complétées</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-header">
//             <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #ef4444)' }}>
//               <TrendingUp size={20} />
//             </div>
//             <div className="stat-title">Progression</div>
//           </div>
//           <div className="stat-value">+12%</div>
//           <div className="stat-subtitle">Ce mois-ci</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-header">
//             <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}>
//               <Trophy size={20} />
//             </div>
//             <div className="stat-title">Objectifs</div>
//           </div>
//           <div className="stat-value">8/10</div>
//           <div className="stat-subtitle">Objectifs atteints</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-header">
//             <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}>
//               <Calendar size={20} />
//             </div>
//             <div className="stat-title">Série</div>
//           </div>
//           <div className="stat-value">15</div>
//           <div className="stat-subtitle">Jours consécutifs</div>
//         </div>
//       </div>

//       <div className="achievements">
//         <h2 className="achievements-title">
//           <Trophy size={24} style={{ color: '#f59e0b' }} />
//           Réalisations
//         </h2>
//         <div className="achievement-grid">
//           <div className="achievement-item">
//             <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #4ade80, #06b6d4)' }}>
//               <Medal size={24} />
//             </div>
//             <div className="achievement-name">Premier pas</div>
//             <div className="achievement-desc">Premier entraînement complété</div>
//           </div>
          
//           <div className="achievement-item">
//             <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #ef4444)' }}>
//               <Trophy size={24} />
//             </div>
//             <div className="achievement-name">Régularité</div>
//             <div className="achievement-desc">7 jours d'entraînement</div>
//           </div>
          
//           <div className="achievement-item">
//             <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}>
//               <Star size={24} />
//             </div>
//             <div className="achievement-name">Objectif atteint</div>
//             <div className="achievement-desc">Premier objectif réalisé</div>
//           </div>
          
//           <div className="achievement-item">
//             <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}>
//               <Heart size={24} />
//             </div>
//             <div className="achievement-name">Santé cardio</div>
//             <div className="achievement-desc">100 minutes de cardio</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderPersonalInfo = () => (
//     <div className="profile-section">
//       <div className="section-header">
//         <h3>Informations personnelles</h3>
//       </div>
      
//       {isEditing ? (
//         <div className="form-grid">
//           <div className="form-group">
//             <label className="form-label">Prénom</label>
//             <input
//               className="form-input"
//               type="text"
//               value={formData.firstName || ''}
//               onChange={(e) => handleInputChange('firstName', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Nom</label>
//             <input
//               className="form-input"
//               type="text"
//               value={formData.lastName || ''}
//               onChange={(e) => handleInputChange('lastName', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Âge</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.age || ''}
//               onChange={(e) => handleInputChange('age', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Genre</label>
//             <select
//               className="form-select"
//               value={formData.gender || ''}
//               onChange={(e) => handleInputChange('gender', e.target.value)}
//             >
//               <option value="">Sélectionner</option>
//               <option value="Homme">Homme</option>
//               <option value="Femme">Femme</option>
//               <option value="Autre">Autre</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Poids (kg)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.weight || ''}
//               onChange={(e) => handleInputChange('weight', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Taille (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.height || ''}
//               onChange={(e) => handleInputChange('height', e.target.value)}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="info-grid">
//           <div className="info-item">
//             <label>Prénom</label>
//             <p>{onboardingData?.personalInfo?.firstName || 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Nom</label>
//             <p>{onboardingData?.personalInfo?.lastName || 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Âge</label>
//             <p>{onboardingData?.personalInfo?.age ? `${onboardingData.personalInfo.age} ans` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Genre</label>
//             <p>{onboardingData?.personalInfo?.gender || 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Taille</label>
//             <p>{onboardingData?.personalInfo?.height ? `${onboardingData.personalInfo.height} cm` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Poids</label>
//             <p>{onboardingData?.personalInfo?.weight ? `${onboardingData.personalInfo.weight} kg` : 'Non renseigné'}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderFitnessGoals = () => (
//     <div className="profile-section">
//       <div className="section-header">
//         <h3>Objectifs de fitness</h3>
//       </div>
      
//       {isEditing ? (
//         <div className="form-grid">
//           <div className="form-group">
//             <label className="form-label">Objectif principal</label>
//             <select
//               className="form-select"
//               value={formData.primaryGoal || ''}
//               onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
//             >
//               <option value="Perte de poids">Perte de poids</option>
//               <option value="Gain de muscle">Gain de muscle</option>
//               <option value="Maintenance">Maintenance</option>
//               <option value="Endurance">Endurance</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Poids cible (kg)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.targetWeight || ''}
//               onChange={(e) => handleInputChange('targetWeight', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Niveau d'activité</label>
//             <select
//               className="form-select"
//               value={formData.activityLevel || ''}
//               onChange={(e) => handleInputChange('activityLevel', e.target.value)}
//             >
//               <option value="Débutant">Débutant</option>
//               <option value="Intermédiaire">Intermédiaire</option>
//               <option value="Avancé">Avancé</option>
//               <option value="Expert">Expert</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Expérience</label>
//             <input
//               className="form-input"
//               type="text"
//               value={formData.experience || ''}
//               onChange={(e) => handleInputChange('experience', e.target.value)}
//               placeholder="Ex: 2 ans de musculation"
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="info-grid">
//           <div className="info-item">
//             <label>Objectif principal</label>
//             <p>{onboardingData?.fitnessGoals?.primaryGoal || 'Non défini'}</p>
//           </div>
//           <div className="info-item">
//             <label>Poids cible</label>
//             <p>{onboardingData?.fitnessGoals?.targetWeight ? `${onboardingData.fitnessGoals.targetWeight} kg` : 'Non défini'}</p>
//           </div>
//           <div className="info-item">
//             <label>Niveau d'activité</label>
//             <p>{onboardingData?.fitnessGoals?.activityLevel || 'Non défini'}</p>
//           </div>
//           <div className="info-item">
//             <label>Expérience</label>
//             <p>{onboardingData?.fitnessGoals?.experience || 'Non définie'}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderMeasurements = () => (
//     <div className="profile-section">
//       <div className="section-header">
//         <h3>Mensurations</h3>
//       </div>
      
//       {isEditing ? (
//         <div className="form-grid">
//           <div className="form-group">
//             <label className="form-label">Tour de poitrine (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.chest || ''}
//               onChange={(e) => handleInputChange('chest', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Tour de taille (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.waist || ''}
//               onChange={(e) => handleInputChange('waist', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Tour de hanches (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.hips || ''}
//               onChange={(e) => handleInputChange('hips', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Tour de bras (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.arms || ''}
//               onChange={(e) => handleInputChange('arms', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Tour de cuisses (cm)</label>
//             <input
//               className="form-input"
//               type="number"
//               value={formData.thighs || ''}
//               onChange={(e) => handleInputChange('thighs', e.target.value)}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="info-grid">
//           <div className="info-item">
//             <label>Tour de poitrine</label>
//             <p>{onboardingData?.measurements?.chest ? `${onboardingData.measurements.chest} cm` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Tour de taille</label>
//             <p>{onboardingData?.measurements?.waist ? `${onboardingData.measurements.waist} cm` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Tour de hanches</label>
//             <p>{onboardingData?.measurements?.hips ? `${onboardingData.measurements.hips} cm` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Tour de bras</label>
//             <p>{onboardingData?.measurements?.arms ? `${onboardingData.measurements.arms} cm` : 'Non renseigné'}</p>
//           </div>
//           <div className="info-item">
//             <label>Tour de cuisses</label>
//             <p>{onboardingData?.measurements?.thighs ? `${onboardingData.measurements.thighs} cm` : 'Non renseigné'}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderWorkoutSchedule = () => (
//     <div className="profile-section">
//       <div className="section-header">
//         <h3>Programme d'entraînement</h3>
//       </div>
      
//       {isEditing ? (
//         <div className="form-grid">
//           <div className="form-group">
//             <label className="form-label">Jours par semaine</label>
//             <input
//               className="form-input"
//               type="number"
//               min="1"
//               max="7"
//               value={formData.daysPerWeek || ''}
//               onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Heure préférée</label>
//             <select
//               className="form-select"
//               value={formData.preferredTime || ''}
//               onChange={(e) => handleInputChange('preferredTime', e.target.value)}
//             >
//               <option value="">Sélectionner</option>
//               <option value="Matin">Matin</option>
//               <option value="Midi">Midi</option>
//               <option value="Après-midi">Après-midi</option>
//               <option value="Soir">Soir</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Durée des séances</label>
//             <select
//               className="form-select"
//               value={formData.sessionDuration || ''}
//               onChange={(e) => handleInputChange('sessionDuration', e.target.value)}
//             >
//               <option value="">Sélectionner</option>
//               <option value="30 minutes">30 minutes</option>
//               <option value="45 minutes">45 minutes</option>
//               <option value="1 heure">1 heure</option>
//               <option value="1h30">1h30</option>
//               <option value="2 heures">2 heures</option>
//             </select>
//           </div>
//         </div>
//       ) : (
//         <div className="info-grid">
//           <div className="info-item">
//             <label>Jours par semaine</label>
//             <p>{onboardingData?.workoutSchedule?.daysPerWeek ? `${onboardingData.workoutSchedule.daysPerWeek} jours` : 'Non défini'}</p>
//           </div>
//           <div className="info-item">
//             <label>Heure préférée</label>
//             <p>{onboardingData?.workoutSchedule?.preferredTime || 'Non définie'}</p>
//           </div>
//           <div className="info-item">
//             <label>Durée des séances</label>
//             <p>{onboardingData?.workoutSchedule?.sessionDuration || 'Non définie'}</p>
//           </div>
//           <div className="info-item">
//             <label>Types d'entraînement</label>
//             <p>
//               {onboardingData?.workoutSchedule?.workoutTypes && onboardingData.workoutSchedule.workoutTypes.length > 0 
//                 ? onboardingData.workoutSchedule.workoutTypes.join(', ') 
//                 : 'Non définis'
//               }
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <div className="profile-avatar-section">
//           <div className="avatar-container">
//             <div className="profile-avatar">
//               {getDisplayName().split(' ').map(n => n[0]).join('')}
//             </div>
//             <button className="avatar-edit">
//               <Camera size={18} />
//             </button>
//           </div>
          
//           <div className="profile-info">
//             <h1 className="profile-name">{getDisplayName()}</h1>
//             <p className="profile-email">{user?.email}</p>
//             <div className="profile-badges">
//               <div className="badge level">
//                 <Star size={16} />
//                 {getLevelLabel()}
//               </div>
//               <div className="badge goal">
//                 <Target size={16} />
//                 {getGoalLabel()}
//               </div>
//             </div>
//             {onboardingData?.completedAt && (
//               <p className="completion-date">
//                 Profil complété le {new Date(onboardingData.completedAt).toLocaleDateString()}
//               </p>
//             )}
//           </div>
//         </div>

//         <button className="btn btn-primary" onClick={handleEdit}>
//           <Edit3 size={16} />
//           {isEditing ? 'Annuler' : 'Modifier le profil'}
//         </button>
//       </div>

//       <div className="profile-tabs">
//         <button 
//           className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
//           onClick={() => setActiveTab('overview')}
//         >
//           Vue d'ensemble
//         </button>
//         <button 
//           className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
//           onClick={() => setActiveTab('personal')}
//         >
//           Informations personnelles
//         </button>
//         <button 
//           className={`tab ${activeTab === 'fitness' ? 'active' : ''}`}
//           onClick={() => setActiveTab('fitness')}
//         >
//           Objectifs fitness
//         </button>
//         <button 
//           className={`tab ${activeTab === 'measurements' ? 'active' : ''}`}
//           onClick={() => setActiveTab('measurements')}
//         >
//           Mensurations
//         </button>
//         <button 
//           className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
//           onClick={() => setActiveTab('schedule')}
//         >
//           Programme
//         </button>
//       </div>

//       <div className="profile-content">
//         {activeTab === 'overview' && renderOverview()}
//         {activeTab === 'personal' && renderPersonalInfo()}
//         {activeTab === 'fitness' && renderFitnessGoals()}
//         {activeTab === 'measurements' && renderMeasurements()}
//         {activeTab === 'schedule' && renderWorkoutSchedule()}
//       </div>

//       {isEditing && (
//         <div className="form-actions">
//           <button className="btn btn-secondary" onClick={handleEdit}>
//             Annuler
//           </button>
//           <button className="btn btn-primary" onClick={handleSave}>
//             <Heart size={16} />
//             Sauvegarder
//           </button>
//         </div>
//       )}

//       {!onboardingData && (
//         <div className="no-onboarding-data">
//           <h3>Aucune donnée d'onboarding trouvée</h3>
//           <p>Complétez votre profil pour voir vos informations ici.</p>
//           <button className="btn-primary">
//             Compléter mon profil
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import './Profile.css';
import { 
  Camera, Edit3, Trophy, Target, Calendar, TrendingUp, Heart, Activity, 
  Medal, Star, User, Zap, Clock, MapPin, Phone, Mail, Settings,
  BarChart3, Flame, Award, Users, BookOpen, CheckCircle2,
  ArrowUp, ArrowDown, Minus, Plus
} from 'lucide-react';

const Profile = () => {
  // Mock data - remplacez par vos vraies données
  const [user] = useState({
    email: 'john.doe@example.com',
    createdAt: '2024-01-15T10:30:00Z'
  });

  const [onboardingData] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      gender: 'Homme',
      weight: 75,
      height: 180,
      phone: '+33 6 12 34 56 78',
      location: 'Paris, France',
      emergencyContact: 'Marie Doe - +33 6 87 65 43 21'
    },
    fitnessGoals: {
      primaryGoal: 'Gain de muscle',
      targetWeight: 80,
      activityLevel: 'Intermédiaire',
      experience: '2 ans de musculation',
      motivations: ['Améliorer la force', 'Sculpter le corps', 'Être en meilleure santé'],
      targetBodyFat: 12,
      fitnessLevel: 7
    },
    measurements: {
      chest: 100,
      waist: 80,
      hips: 95,
      arms: 35,
      thighs: 58,
      shoulders: 110,
      forearms: 28,
      calves: 38,
      neck: 38,
      lastUpdated: '2024-01-15T10:30:00Z'
    },
    workoutSchedule: {
      daysPerWeek: 5,
      preferredTime: 'Matin',
      sessionDuration: '1 heure',
      workoutTypes: ['Musculation', 'Cardio', 'HIIT'],
      restDays: ['Dimanche', 'Mercredi'],
      preferredIntensity: 'Élevée'
    },
    healthInfo: {
      injuries: ['Ancienne blessure au genou gauche (2022)'],
      medications: [],
      allergies: [],
      medicalConditions: [],
      sleepHours: 7.5,
      stressLevel: 4,
      smokingStatus: 'Non-fumeur',
      drinkingHabits: 'Occasionnel'
    },
    nutrition: {
      dietType: 'Omnivore',
      calorieGoal: 2800,
      proteinGoal: 150,
      carbGoal: 300,
      fatGoal: 90,
      waterGoal: 3.5,
      mealsPerDay: 5,
      supplements: ['Whey Protein', 'Créatine', 'Multivitamines']
    },
    completedAt: '2024-01-15T10:30:00Z'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({});
  const [loading] = useState(false);

  // Mock stats data
  const [stats] = useState({
    totalWorkouts: 156,
    totalHours: 195,
    currentStreak: 12,
    longestStreak: 28,
    caloriesBurned: 45600,
    averageIntensity: 7.8,
    workoutsThisMonth: 22,
    progressPercentage: 78,
    achievementsCount: 15,
    personalRecords: 8
  });

  const [recentWorkouts] = useState([
    { date: '2024-08-10', type: 'Push', duration: 65, intensity: 8 },
    { date: '2024-08-08', type: 'Pull', duration: 70, intensity: 9 },
    { date: '2024-08-06', type: 'Legs', duration: 80, intensity: 8 },
    { date: '2024-08-04', type: 'Cardio', duration: 45, intensity: 7 },
    { date: '2024-08-02', type: 'Full Body', duration: 75, intensity: 8 }
  ]);

  const [achievements] = useState([
    { id: 1, name: 'Premier pas', desc: 'Premier entraînement complété', icon: 'medal', color: '#4ade80', unlocked: true },
    { id: 2, name: 'Régularité', desc: '7 jours consécutifs', icon: 'trophy', color: '#f59e0b', unlocked: true },
    { id: 3, name: 'Force brute', desc: '100kg au développé couché', icon: 'zap', color: '#ef4444', unlocked: true },
    { id: 4, name: 'Cardio warrior', desc: '500 calories en une session', icon: 'heart', color: '#ec4899', unlocked: true },
    { id: 5, name: 'Défi 30 jours', desc: '30 jours d\'entraînement', icon: 'calendar', color: '#8b5cf6', unlocked: true },
    { id: 6, name: 'Social butterfly', desc: '10 amis ajoutés', icon: 'users', color: '#06b6d4', unlocked: false },
    { id: 7, name: 'Marathon', desc: '1000 entraînements', icon: 'award', color: '#10b981', unlocked: false },
    { id: 8, name: 'Perfectionniste', desc: '30 jours parfaits', icon: 'star', color: '#f59e0b', unlocked: false }
  ]);

  useEffect(() => {
    if (onboardingData) {
      setFormData({
        // Informations personnelles
        firstName: onboardingData.personalInfo?.firstName || '',
        lastName: onboardingData.personalInfo?.lastName || '',
        age: onboardingData.personalInfo?.age || '',
        gender: onboardingData.personalInfo?.gender || '',
        weight: onboardingData.personalInfo?.weight || '',
        height: onboardingData.personalInfo?.height || '',
        phone: onboardingData.personalInfo?.phone || '',
        location: onboardingData.personalInfo?.location || '',
        emergencyContact: onboardingData.personalInfo?.emergencyContact || '',
        
        // Objectifs fitness
        primaryGoal: onboardingData.fitnessGoals?.primaryGoal || 'Perte de poids',
        targetWeight: onboardingData.fitnessGoals?.targetWeight || '',
        activityLevel: onboardingData.fitnessGoals?.activityLevel || 'Intermédiaire',
        experience: onboardingData.fitnessGoals?.experience || '',
        targetBodyFat: onboardingData.fitnessGoals?.targetBodyFat || '',
        fitnessLevel: onboardingData.fitnessGoals?.fitnessLevel || 5,
        
        // Mensurations
        chest: onboardingData.measurements?.chest || '',
        waist: onboardingData.measurements?.waist || '',
        hips: onboardingData.measurements?.hips || '',
        arms: onboardingData.measurements?.arms || '',
        thighs: onboardingData.measurements?.thighs || '',
        shoulders: onboardingData.measurements?.shoulders || '',
        forearms: onboardingData.measurements?.forearms || '',
        calves: onboardingData.measurements?.calves || '',
        neck: onboardingData.measurements?.neck || '',
        
        // Programme
        daysPerWeek: onboardingData.workoutSchedule?.daysPerWeek || '',
        preferredTime: onboardingData.workoutSchedule?.preferredTime || '',
        sessionDuration: onboardingData.workoutSchedule?.sessionDuration || '',
        workoutTypes: onboardingData.workoutSchedule?.workoutTypes || [],
        preferredIntensity: onboardingData.workoutSchedule?.preferredIntensity || '',
        
        // Santé
        sleepHours: onboardingData.healthInfo?.sleepHours || 8,
        stressLevel: onboardingData.healthInfo?.stressLevel || 5,
        smokingStatus: onboardingData.healthInfo?.smokingStatus || '',
        drinkingHabits: onboardingData.healthInfo?.drinkingHabits || '',
        
        // Nutrition
        dietType: onboardingData.nutrition?.dietType || '',
        calorieGoal: onboardingData.nutrition?.calorieGoal || '',
        proteinGoal: onboardingData.nutrition?.proteinGoal || '',
        waterGoal: onboardingData.nutrition?.waterGoal || '',
        mealsPerDay: onboardingData.nutrition?.mealsPerDay || 3
      });
    }
  }, [onboardingData]);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ 
          width: '40px', height: '40px', border: '3px solid rgba(74, 222, 128, 0.3)',
          borderTop: '3px solid #4ade80', borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p>Chargement du profil...</p>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsEditing(false);
    // Logique de sauvegarde ici
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getDisplayName = () => {
    const personalInfo = onboardingData?.personalInfo || {};
    if (personalInfo.firstName && personalInfo.lastName) {
      return `${personalInfo.firstName} ${personalInfo.lastName}`;
    }
    return personalInfo.firstName || user?.email || 'Utilisateur';
  };

  const calculateBMI = () => {
    if (onboardingData?.personalInfo?.weight && onboardingData?.personalInfo?.height) {
      const weight = onboardingData.personalInfo.weight;
      const height = onboardingData.personalInfo.height / 100;
      return (weight / (height * height)).toFixed(1);
    }
    return null;
  };

  const getBMICategory = (bmi) => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Sous-poids';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Surpoids';
    return 'Obésité';
  };

  const getProgressColor = (value, target) => {
    if (!target) return '#06b6d4';
    const percentage = (value / target) * 100;
    if (percentage >= 100) return '#10b981';
    if (percentage >= 75) return '#f59e0b';
    return '#ef4444';
  };

  const renderOverview = () => (
    <div className="overview-container">
      {/* Statistiques principales */}
      <div className="stats-grid">
        <div className="stat-card highlight">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #4ade80, #06b6d4)' }}>
              <Activity size={24} />
            </div>
            <div>
              <div className="stat-title">Entraînements</div>
              <div className="stat-subtitle">Total complétés</div>
            </div>
          </div>
          <div className="stat-value">{stats.totalWorkouts}</div>
          <div className="stat-change positive">
            <ArrowUp size={16} />
            +12 ce mois
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #ef4444)' }}>
              <Flame size={20} />
            </div>
            <div>
              <div className="stat-title">Calories</div>
              <div className="stat-subtitle">Total brûlées</div>
            </div>
          </div>
          <div className="stat-value">{stats.caloriesBurned.toLocaleString()}</div>
          <div className="stat-change positive">
            <ArrowUp size={16} />
            +850 cette semaine
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}>
              <Trophy size={20} />
            </div>
            <div>
              <div className="stat-title">Série actuelle</div>
              <div className="stat-subtitle">Jours consécutifs</div>
            </div>
          </div>
          <div className="stat-value">{stats.currentStreak}</div>
          <div className="stat-change neutral">
            <Minus size={16} />
            Record: {stats.longestStreak} jours
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}>
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="stat-title">Progression</div>
              <div className="stat-subtitle">Vers l'objectif</div>
            </div>
          </div>
          <div className="stat-value">{stats.progressPercentage}%</div>
          <div className="stat-change positive">
            <ArrowUp size={16} />
            +5% ce mois
          </div>
        </div>
      </div>

      {/* Graphique de progression et infos rapides */}
      <div className="overview-content">
        <div className="progress-section">
          <h3>Progression récente</h3>
          <div className="recent-workouts">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="workout-item">
                <div className="workout-date">
                  {new Date(workout.date).toLocaleDateString('fr-FR', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="workout-type">{workout.type}</div>
                <div className="workout-stats">
                  <span><Clock size={14} /> {workout.duration}min</span>
                  <span><Zap size={14} /> {workout.intensity}/10</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-info">
          <h3>Informations rapides</h3>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-label">IMC</div>
              <div className="info-value">
                {calculateBMI() || 'N/A'}
                {calculateBMI() && (
                  <span className="info-category">{getBMICategory(parseFloat(calculateBMI()))}</span>
                )}
              </div>
            </div>
            <div className="info-card">
              <div className="info-label">Objectif poids</div>
              <div className="info-value">
                {onboardingData?.fitnessGoals?.targetWeight}kg
                <span className="info-progress">
                  {onboardingData?.personalInfo?.weight && onboardingData?.fitnessGoals?.targetWeight ? 
                    `${Math.abs(onboardingData.personalInfo.weight - onboardingData.fitnessGoals.targetWeight)}kg restants` :
                    'Non défini'
                  }
                </span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-label">Prochaine séance</div>
              <div className="info-value">
                Demain
                <span className="info-progress">{onboardingData?.workoutSchedule?.preferredTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Réalisations */}
      <div className="achievements-section">
        <div className="section-header">
          <h3><Trophy size={24} /> Réalisations</h3>
          <div className="achievement-counter">
            {achievements.filter(a => a.unlocked).length}/{achievements.length}
          </div>
        </div>
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon" style={{ 
                background: achievement.unlocked ? 
                  `linear-gradient(45deg, ${achievement.color}, ${achievement.color}99)` : 
                  'linear-gradient(45deg, #374151, #4b5563)'
              }}>
                {achievement.icon === 'medal' && <Medal size={20} />}
                {achievement.icon === 'trophy' && <Trophy size={20} />}
                {achievement.icon === 'zap' && <Zap size={20} />}
                {achievement.icon === 'heart' && <Heart size={20} />}
                {achievement.icon === 'calendar' && <Calendar size={20} />}
                {achievement.icon === 'users' && <Users size={20} />}
                {achievement.icon === 'award' && <Award size={20} />}
                {achievement.icon === 'star' && <Star size={20} />}
              </div>
              <div className="achievement-info">
                <div className="achievement-name">{achievement.name}</div>
                <div className="achievement-desc">{achievement.desc}</div>
              </div>
              {achievement.unlocked && <CheckCircle2 size={16} className="achievement-check" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3><User size={24} /> Informations personnelles</h3>
        {!isEditing && (
          <button className="edit-btn" onClick={handleEdit}>
            <Edit3 size={16} />
            Modifier
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="form-container">
          <div className="form-section">
            <h4>Informations de base</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Prénom</label>
                <input
                  type="text"
                  value={formData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  value={formData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Âge</label>
                <input
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <select
                  value={formData.gender || ''}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <option value="">Sélectionner</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label>Poids (kg)</label>
                <input
                  type="number"
                  value={formData.weight || ''}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Taille (cm)</label>
                <input
                  type="number"
                  value={formData.height || ''}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>Contact et localisation</h4>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Téléphone</label>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="form-group full-width">
                <label>Localisation</label>
                <input
                  type="text"
                  value={formData.location || ''}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
              <div className="form-group full-width">
                <label>Contact d'urgence</label>
                <input
                  type="text"
                  value={formData.emergencyContact || ''}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="info-container">
          <div className="info-section">
            <h4>Informations de base</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Nom complet</label>
                <p>{getDisplayName()}</p>
              </div>
              <div className="info-item">
                <label>Âge</label>
                <p>{onboardingData?.personalInfo?.age ? `${onboardingData.personalInfo.age} ans` : 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label>Genre</label>
                <p>{onboardingData?.personalInfo?.gender || 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label>Taille</label>
                <p>{onboardingData?.personalInfo?.height ? `${onboardingData.personalInfo.height} cm` : 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label>Poids actuel</label>
                <p>{onboardingData?.personalInfo?.weight ? `${onboardingData.personalInfo.weight} kg` : 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label>IMC</label>
                <p>
                  {calculateBMI() ? (
                    <span>
                      {calculateBMI()} - <span className="bmi-category">{getBMICategory(parseFloat(calculateBMI()))}</span>
                    </span>
                  ) :'Non calculé'}
                </p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>Contact et localisation</h4>
            <div className="info-grid">
              <div className="info-item">
                <label><Phone size={16} /> Téléphone</label>
                <p>{onboardingData?.personalInfo?.phone || 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label><MapPin size={16} /> Localisation</label>
                <p>{onboardingData?.personalInfo?.location || 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label><User size={16} /> Contact d'urgence</label>
                <p>{onboardingData?.personalInfo?.emergencyContact || 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label><Mail size={16} /> Email</label>
                <p>{user?.email || 'Non renseigné'}</p>
              </div>
              <div className="info-item">
                <label><Calendar size={16} /> Membre depuis</label>
                <p>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : 'Non disponible'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {isEditing && (
        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <CheckCircle2 size={16} />
            Enregistrer
          </button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );

  const renderFitnessGoals = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3><Target size={24} /> Objectifs Fitness</h3>
        {!isEditing && (
          <button className="edit-btn" onClick={handleEdit}>
            <Edit3 size={16} />
            Modifier
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="form-container">
          <div className="form-section">
            <h4>Objectifs nutritionnels</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Type de régime</label>
                <select
                  value={formData.dietType || ''}
                  onChange={(e) => handleInputChange('dietType', e.target.value)}
                >
                  <option value="">Sélectionner</option>
                  <option value="Omnivore">Omnivore</option>
                  <option value="Végétarien">Végétarien</option>
                  <option value="Végétalien">Végétalien</option>
                  <option value="Cétogène">Cétogène</option>
                  <option value="Paléo">Paléo</option>
                  <option value="Méditerranéen">Méditerranéen</option>
                </select>
              </div>
              <div className="form-group">
                <label>Objectif calorique (kcal/jour)</label>
                <input
                  type="number"
                  value={formData.calorieGoal || ''}
                  onChange={(e) => handleInputChange('calorieGoal', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Protéines (g/jour)</label>
                <input
                  type="number"
                  value={formData.proteinGoal || ''}
                  onChange={(e) => handleInputChange('proteinGoal', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Glucides (g/jour)</label>
                <input
                  type="number"
                  value={formData.carbGoal || ''}
                  onChange={(e) => handleInputChange('carbGoal', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Lipides (g/jour)</label>
                <input
                  type="number"
                  value={formData.fatGoal || ''}
                  onChange={(e) => handleInputChange('fatGoal', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Objectif hydratation (L/jour)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.waterGoal || ''}
                  onChange={(e) => handleInputChange('waterGoal', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Repas par jour</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={formData.mealsPerDay || ''}
                  onChange={(e) => handleInputChange('mealsPerDay', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>Suppléments</h4>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Suppléments actuels</label>
                <input
                  type="text"
                  placeholder="Ex: Whey Protein, Créatine, Multivitamines (séparés par des virgules)"
                  value={formData.supplements ? formData.supplements.join(', ') : ''}
                  onChange={(e) => {
                    const supplements = e.target.value.split(',').map(s => s.trim()).filter(s => s);
                    handleInputChange('supplements', supplements);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="info-container">
          <div className="nutrition-overview">
            <div className="nutrition-summary">
              <div className="nutrition-card primary">
                <div className="nutrition-icon">
                  <Flame size={24} />
                </div>
                <div className="nutrition-info">
                  <div className="nutrition-value">{onboardingData?.nutrition?.calorieGoal || 0}</div>
                  <div className="nutrition-label">kcal/jour</div>
                </div>
              </div>

              <div className="nutrition-card">
                <div className="nutrition-icon protein">
                  <Zap size={24} />
                </div>
                <div className="nutrition-info">
                  <div className="nutrition-value">{onboardingData?.nutrition?.proteinGoal || 0}g</div>
                  <div className="nutrition-label">Protéines</div>
                </div>
              </div>

              <div className="nutrition-card">
                <div className="nutrition-icon water">
                  <Activity size={24} />
                </div>
                <div className="nutrition-info">
                  <div className="nutrition-value">{onboardingData?.nutrition?.waterGoal || 0}L</div>
                  <div className="nutrition-label">Eau/jour</div>
                </div>
              </div>

              <div className="nutrition-card">
                <div className="nutrition-icon meals">
                  <Clock size={24} />
                </div>
                <div className="nutrition-info">
                  <div className="nutrition-value">{onboardingData?.nutrition?.mealsPerDay || 0}</div>
                  <div className="nutrition-label">repas/jour</div>
                </div>
              </div>
            </div>

            <div className="macros-breakdown">
              <h4>Répartition des macronutriments</h4>
              <div className="macros-grid">
                <div className="macro-item">
                  <div className="macro-label">Protéines</div>
                  <div className="macro-value">{onboardingData?.nutrition?.proteinGoal || 0}g</div>
                  <div className="macro-bar">
                    <div className="macro-fill protein" style={{ 
                      width: `${onboardingData?.nutrition?.proteinGoal ? 
                        (onboardingData.nutrition.proteinGoal * 4) / (onboardingData.nutrition.calorieGoal || 2000) * 100 : 0}%` 
                    }}></div>
                  </div>
                  <div className="macro-percentage">
                    {onboardingData?.nutrition?.proteinGoal && onboardingData?.nutrition?.calorieGoal ? 
                      Math.round((onboardingData.nutrition.proteinGoal * 4) / onboardingData.nutrition.calorieGoal * 100) : 0}%
                  </div>
                </div>
                <div className="macro-item">
                  <div className="macro-label">Glucides</div>
                  <div className="macro-value">{onboardingData?.nutrition?.carbGoal || 0}g</div>
                  <div className="macro-bar">
                    <div className="macro-fill carbs" style={{ 
                      width: `${onboardingData?.nutrition?.carbGoal ? 
                        (onboardingData.nutrition.carbGoal * 4) / (onboardingData.nutrition.calorieGoal || 2000) * 100 : 0}%` 
                    }}></div>
                  </div>
                  <div className="macro-percentage">
                    {onboardingData?.nutrition?.carbGoal && onboardingData?.nutrition?.calorieGoal ? 
                      Math.round((onboardingData.nutrition.carbGoal * 4) / onboardingData.nutrition.calorieGoal * 100) : 0}%
                  </div>
                </div>
                <div className="macro-item">
                  <div className="macro-label">Lipides</div>
                  <div className="macro-value">{onboardingData?.nutrition?.fatGoal || 0}g</div>
                  <div className="macro-bar">
                    <div className="macro-fill fats" style={{ 
                      width: `${onboardingData?.nutrition?.fatGoal ? 
                        (onboardingData.nutrition.fatGoal * 9) / (onboardingData.nutrition.calorieGoal || 2000) * 100 : 0}%` 
                    }}></div>
                  </div>
                  <div className="macro-percentage">
                    {onboardingData?.nutrition?.fatGoal && onboardingData?.nutrition?.calorieGoal ? 
                      Math.round((onboardingData.nutrition.fatGoal * 9) / onboardingData.nutrition.calorieGoal * 100) : 0}%
                  </div>
                </div>
              </div>
            </div>

            <div className="nutrition-details">
              <div className="detail-item">
                <strong>Type de régime:</strong> {onboardingData?.nutrition?.dietType || 'Non défini'}
              </div>
              
              {onboardingData?.nutrition?.supplements && onboardingData.nutrition.supplements.length > 0 && (
                <div className="detail-item">
                  <strong>Suppléments:</strong>
                  <div className="supplements-list">
                    {onboardingData.nutrition.supplements.map((supplement, index) => (
                      <span key={index} className="supplement-badge">{supplement}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="nutrition-goals-progress">
                <h5>Objectifs de consommation</h5>
                <div className="goals-list">
                  <div className="goal-item">
                    <span className="goal-icon">🔥</span>
                    <span>Calories: {onboardingData?.nutrition?.calorieGoal || 0} kcal/jour</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">💧</span>
                    <span>Hydratation: {onboardingData?.nutrition?.waterGoal || 0} L/jour</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">🍽️</span>
                    <span>Fréquence: {onboardingData?.nutrition?.mealsPerDay || 0} repas/jour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <CheckCircle2 size={16} />
            Enregistrer
          </button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );

  // Fonction pour calculer et afficher les statistiques nutritionnelles
  const calculateNutritionalStats = () => {
    if (!onboardingData?.nutrition) return null;
    
    const { proteinGoal, carbGoal, fatGoal, calorieGoal } = onboardingData.nutrition;
    
    const proteinCalories = (proteinGoal || 0) * 4;
    const carbCalories = (carbGoal || 0) * 4;
    const fatCalories = (fatGoal || 0) * 9;
    const totalMacroCalories = proteinCalories + carbCalories + fatCalories;
    
    return {
      proteinPercentage: calorieGoal ? Math.round((proteinCalories / calorieGoal) * 100) : 0,
      carbPercentage: calorieGoal ? Math.round((carbCalories / calorieGoal) * 100) : 0,
      fatPercentage: calorieGoal ? Math.round((fatCalories / calorieGoal) * 100) : 0,
      totalMacroCalories,
      remainingCalories: Math.max(0, (calorieGoal || 0) - totalMacroCalories)
    };
  };

  // Fonction pour rendre la section Mensurations
const renderMeasurements = () => (
  <div className="profile-section">
    <div className="section-header">
      <h3><Activity size={24} /> Mensurations corporelles</h3>
      {!isEditing && (
        <button className="edit-btn" onClick={handleEdit}>
          <Edit3 size={16} />
          Modifier
        </button>
      )}
    </div>

    {isEditing ? (
      <div className="form-container">
        <div className="form-section">
          <h4>Mensurations principales</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Poitrine (cm)</label>
              <input
                type="number"
                value={formData.chest || ''}
                onChange={(e) => handleInputChange('chest', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Taille (cm)</label>
              <input
                type="number"
                value={formData.waist || ''}
                onChange={(e) => handleInputChange('waist', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Hanches (cm)</label>
              <input
                type="number"
                value={formData.hips || ''}
                onChange={(e) => handleInputChange('hips', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Épaules (cm)</label>
              <input
                type="number"
                value={formData.shoulders || ''}
                onChange={(e) => handleInputChange('shoulders', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bras (cm)</label>
              <input
                type="number"
                value={formData.arms || ''}
                onChange={(e) => handleInputChange('arms', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Avant-bras (cm)</label>
              <input
                type="number"
                value={formData.forearms || ''}
                onChange={(e) => handleInputChange('forearms', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cuisses (cm)</label>
              <input
                type="number"
                value={formData.thighs || ''}
                onChange={(e) => handleInputChange('thighs', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mollets (cm)</label>
              <input
                type="number"
                value={formData.calves || ''}
                onChange={(e) => handleInputChange('calves', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cou (cm)</label>
              <input
                type="number"
                value={formData.neck || ''}
                onChange={(e) => handleInputChange('neck', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="measurements-container">
        <div className="measurements-grid">
          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Poitrine</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.chest || 'N/A'} cm
              </div>
            </div>
          </div>
          
          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Taille</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.waist || 'N/A'} cm
              </div>
            </div>
          </div>

          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Hanches</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.hips || 'N/A'} cm
              </div>
            </div>
          </div>

          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Épaules</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.shoulders || 'N/A'} cm
              </div>
            </div>
          </div>

          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Bras</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.arms || 'N/A'} cm
              </div>
            </div>
          </div>

          <div className="measurement-card">
            <div className="measurement-icon">
              <Activity size={24} />
            </div>
            <div className="measurement-info">
              <div className="measurement-label">Cuisses</div>
              <div className="measurement-value">
                {onboardingData?.measurements?.thighs || 'N/A'} cm
              </div>
            </div>
          </div>
        </div>

        {onboardingData?.measurements?.lastUpdated && (
          <div className="last-updated">
            Dernière mise à jour: {new Date(onboardingData.measurements.lastUpdated).toLocaleDateString('fr-FR')}
          </div>
        )}
      </div>
    )}

    {isEditing && (
      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          <CheckCircle2 size={16} />
          Enregistrer
        </button>
        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
          Annuler
        </button>
      </div>
    )}
  </div>
);

// Fonction pour rendre la section Programme d'entraînement
const renderWorkoutSchedule = () => (
  <div className="profile-section">
    <div className="section-header">
      <h3><Calendar size={24} /> Programme d'entraînement</h3>
      {!isEditing && (
        <button className="edit-btn" onClick={handleEdit}>
          <Edit3 size={16} />
          Modifier
        </button>
      )}
    </div>

    {isEditing ? (
      <div className="form-container">
        <div className="form-section">
          <h4>Planning d'entraînement</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Jours par semaine</label>
              <select
                value={formData.daysPerWeek || ''}
                onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="1">1 jour</option>
                <option value="2">2 jours</option>
                <option value="3">3 jours</option>
                <option value="4">4 jours</option>
                <option value="5">5 jours</option>
                <option value="6">6 jours</option>
                <option value="7">7 jours</option>
              </select>
            </div>
            <div className="form-group">
              <label>Moment préféré</label>
              <select
                value={formData.preferredTime || ''}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="Matin">Matin</option>
                <option value="Midi">Midi</option>
                <option value="Après-midi">Après-midi</option>
                <option value="Soir">Soir</option>
              </select>
            </div>
            <div className="form-group">
              <label>Durée par séance</label>
              <select
                value={formData.sessionDuration || ''}
                onChange={(e) => handleInputChange('sessionDuration', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="30 min">30 minutes</option>
                <option value="45 min">45 minutes</option>
                <option value="1 heure">1 heure</option>
                <option value="1h30">1h30</option>
                <option value="2 heures">2 heures</option>
              </select>
            </div>
            <div className="form-group">
              <label>Intensité préférée</label>
              <select
                value={formData.preferredIntensity || ''}
                onChange={(e) => handleInputChange('preferredIntensity', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="Faible">Faible</option>
                <option value="Modérée">Modérée</option>
                <option value="Élevée">Élevée</option>
                <option value="Très élevée">Très élevée</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="schedule-container">
        <div className="schedule-overview">
          <div className="schedule-card primary">
            <div className="schedule-icon">
              <Calendar size={24} />
            </div>
            <div className="schedule-info">
              <div className="schedule-value">{onboardingData?.workoutSchedule?.daysPerWeek || 0}</div>
              <div className="schedule-label">jours/semaine</div>
            </div>
          </div>

          <div className="schedule-card">
            <div className="schedule-icon">
              <Clock size={24} />
            </div>
            <div className="schedule-info">
              <div className="schedule-value">{onboardingData?.workoutSchedule?.sessionDuration || 'N/A'}</div>
              <div className="schedule-label">par séance</div>
            </div>
          </div>

          <div className="schedule-card">
            <div className="schedule-icon">
              <Zap size={24} />
            </div>
            <div className="schedule-info">
              <div className="schedule-value">{onboardingData?.workoutSchedule?.preferredIntensity || 'N/A'}</div>
              <div className="schedule-label">intensité</div>
            </div>
          </div>

          <div className="schedule-card">
            <div className="schedule-icon">
              <Target size={24} />
            </div>
            <div className="schedule-info">
              <div className="schedule-value">{onboardingData?.workoutSchedule?.preferredTime || 'N/A'}</div>
              <div className="schedule-label">moment préféré</div>
            </div>
          </div>
        </div>

        <div className="workout-types">
          <h4>Types d'entraînement</h4>
          <div className="types-list">
            {onboardingData?.workoutSchedule?.workoutTypes?.map((type, index) => (
              <span key={index} className="workout-type-badge">{type}</span>
            )) || <span>Aucun type défini</span>}
          </div>
        </div>

        <div className="rest-days">
          <h4>Jours de repos</h4>
          <div className="rest-list">
            {onboardingData?.workoutSchedule?.restDays?.map((day, index) => (
              <span key={index} className="rest-day-badge">{day}</span>
            )) || <span>Aucun jour de repos défini</span>}
          </div>
        </div>
      </div>
    )}

    {isEditing && (
      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          <CheckCircle2 size={16} />
          Enregistrer
        </button>
        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
          Annuler
        </button>
      </div>
    )}
  </div>
);

// Fonction pour rendre la section Santé
const renderHealthInfo = () => (
  <div className="profile-section">
    <div className="section-header">
      <h3><Heart size={24} /> Informations de santé</h3>
      {!isEditing && (
        <button className="edit-btn" onClick={handleEdit}>
          <Edit3 size={16} />
          Modifier
        </button>
      )}
    </div>

    {isEditing ? (
      <div className="form-container">
        <div className="form-section">
          <h4>Mode de vie</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Heures de sommeil par nuit</label>
              <input
                type="number"
                step="0.5"
                min="4"
                max="12"
                value={formData.sleepHours || ''}
                onChange={(e) => handleInputChange('sleepHours', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Niveau de stress (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.stressLevel || 5}
                onChange={(e) => handleInputChange('stressLevel', e.target.value)}
              />
              <span className="range-value">{formData.stressLevel || 5}/10</span>
            </div>
            <div className="form-group">
              <label>Statut tabac</label>
              <select
                value={formData.smokingStatus || ''}
                onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="Non-fumeur">Non-fumeur</option>
                <option value="Fumeur occasionnel">Fumeur occasionnel</option>
                <option value="Fumeur régulier">Fumeur régulier</option>
                <option value="Ex-fumeur">Ex-fumeur</option>
              </select>
            </div>
            <div className="form-group">
              <label>Consommation d'alcool</label>
              <select
                value={formData.drinkingHabits || ''}
                onChange={(e) => handleInputChange('drinkingHabits', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="Jamais">Jamais</option>
                <option value="Occasionnel">Occasionnel</option>
                <option value="Modéré">Modéré</option>
                <option value="Régulier">Régulier</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Conditions médicales</h4>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Blessures actuelles ou passées</label>
              <textarea
                rows="3"
                value={formData.injuries ? formData.injuries.join(', ') : ''}
                onChange={(e) => {
                  const injuries = e.target.value.split(',').map(i => i.trim()).filter(i => i);
                  handleInputChange('injuries', injuries);
                }}
                placeholder="Ex: Ancienne blessure au genou gauche (2022)"
              />
            </div>
            <div className="form-group full-width">
              <label>Médicaments actuels</label>
              <textarea
                rows="2"
                value={formData.medications ? formData.medications.join(', ') : ''}
                onChange={(e) => {
                  const medications = e.target.value.split(',').map(m => m.trim()).filter(m => m);
                  handleInputChange('medications', medications);
                }}
                placeholder="Ex: Aspirine, Vitamine D"
              />
            </div>
            <div className="form-group full-width">
              <label>Allergies connues</label>
              <textarea
                rows="2"
                value={formData.allergies ? formData.allergies.join(', ') : ''}
                onChange={(e) => {
                  const allergies = e.target.value.split(',').map(a => a.trim()).filter(a => a);
                  handleInputChange('allergies', allergies);
                }}
                placeholder="Ex: Arachides, Lactose"
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="health-container">
        <div className="health-overview">
          <div className="health-card">
            <div className="health-icon">
              <Heart size={24} />
            </div>
            <div className="health-info">
              <div className="health-value">{onboardingData?.healthInfo?.sleepHours || 'N/A'}h</div>
              <div className="health-label">Sommeil/nuit</div>
            </div>
          </div>

          <div className="health-card">
            <div className="health-icon">
              <Zap size={24} />
            </div>
            <div className="health-info">
              <div className="health-value">{onboardingData?.healthInfo?.stressLevel || 'N/A'}/10</div>
              <div className="health-label">Niveau de stress</div>
            </div>
          </div>

          <div className="health-card">
            <div className="health-icon">
              <Activity size={24} />
            </div>
            <div className="health-info">
              <div className="health-value">{onboardingData?.healthInfo?.smokingStatus || 'N/A'}</div>
              <div className="health-label">Statut tabac</div>
            </div>
          </div>

          <div className="health-card">
            <div className="health-icon">
              <Clock size={24} />
            </div>
            <div className="health-info">
              <div className="health-value">{onboardingData?.healthInfo?.drinkingHabits || 'N/A'}</div>
              <div className="health-label">Consommation d'alcool</div>
            </div>
          </div>
        </div>

        <div className="health-details">
          <div className="health-section">
            <h4>Blessures et limitations</h4>
            {onboardingData?.healthInfo?.injuries && onboardingData.healthInfo.injuries.length > 0 ? (
              <div className="health-list">
                {onboardingData.healthInfo.injuries.map((injury, index) => (
                  <div key={index} className="health-item warning">
                    <span className="health-item-icon">⚠️</span>
                    <span>{injury}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data">Aucune blessure signalée</div>
            )}
          </div>

          <div className="health-section">
            <h4>Médicaments actuels</h4>
            {onboardingData?.healthInfo?.medications && onboardingData.healthInfo.medications.length > 0 ? (
              <div className="health-list">
                {onboardingData.healthInfo.medications.map((medication, index) => (
                  <div key={index} className="health-item">
                    <span className="health-item-icon">💊</span>
                    <span>{medication}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data">Aucun médicament signalé</div>
            )}
          </div>

          <div className="health-section">
            <h4>Allergies connues</h4>
            {onboardingData?.healthInfo?.allergies && onboardingData.healthInfo.allergies.length > 0 ? (
              <div className="health-list">
                {onboardingData.healthInfo.allergies.map((allergy, index) => (
                  <div key={index} className="health-item danger">
                    <span className="health-item-icon">🚨</span>
                    <span>{allergy}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data">Aucune allergie signalée</div>
            )}
          </div>
        </div>
      </div>
    )}

    {isEditing && (
      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          <CheckCircle2 size={16} />
          Enregistrer
        </button>
        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
          Annuler
        </button>
      </div>
    )}
  </div>
);

// Fonction pour rendre la section Nutrition (améliorée)
const renderNutrition = () => (
  <div className="profile-section">
    <div className="section-header">
      <h3><BookOpen size={24} /> Nutrition et hydratation</h3>
      {!isEditing && (
        <button className="edit-btn" onClick={handleEdit}>
          <Edit3 size={16} />
          Modifier
        </button>
      )}
    </div>

    {isEditing ? (
      <div className="form-container">
        <div className="form-section">
          <h4>Objectifs nutritionnels</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Type de régime</label>
              <select
                value={formData.dietType || ''}
                onChange={(e) => handleInputChange('dietType', e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="Omnivore">Omnivore</option>
                <option value="Végétarien">Végétarien</option>
                <option value="Végétalien">Végétalien</option>
                <option value="Cétogène">Cétogène</option>
                <option value="Paléo">Paléo</option>
                <option value="Méditerranéen">Méditerranéen</option>
              </select>
            </div>
            <div className="form-group">
              <label>Objectif calorique (kcal/jour)</label>
              <input
                type="number"
                value={formData.calorieGoal || ''}
                onChange={(e) => handleInputChange('calorieGoal', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Protéines (g/jour)</label>
              <input
                type="number"
                value={formData.proteinGoal || ''}
                onChange={(e) => handleInputChange('proteinGoal', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Objectif hydratation (L/jour)</label>
              <input
                type="number"
                step="0.1"
                value={formData.waterGoal || ''}
                onChange={(e) => handleInputChange('waterGoal', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Repas par jour</label>
              <input
                type="number"
                min="1"
                max="8"
                value={formData.mealsPerDay || ''}
                onChange={(e) => handleInputChange('mealsPerDay', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Suppléments</h4>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Suppléments actuels</label>
              <input
                type="text"
                placeholder="Ex: Whey Protein, Créatine, Multivitamines (séparés par des virgules)"
                value={formData.supplements ? formData.supplements.join(', ') : ''}
                onChange={(e) => {
                  const supplements = e.target.value.split(',').map(s => s.trim()).filter(s => s);
                  handleInputChange('supplements', supplements);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="nutrition-container">
        <div className="nutrition-overview">
          <div className="nutrition-summary">
            <div className="nutrition-card primary">
              <div className="nutrition-icon">
                <Flame size={24} />
              </div>
              <div className="nutrition-info">
                <div className="nutrition-value">{onboardingData?.nutrition?.calorieGoal || 0}</div>
                <div className="nutrition-label">kcal/jour</div>
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon protein">
                <Zap size={24} />
              </div>
              <div className="nutrition-info">
                <div className="nutrition-value">{onboardingData?.nutrition?.proteinGoal || 0}g</div>
                <div className="nutrition-label">Protéines</div>
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon water">
                <Activity size={24} />
              </div>
              <div className="nutrition-info">
                <div className="nutrition-value">{onboardingData?.nutrition?.waterGoal || 0}L</div>
                <div className="nutrition-label">Eau/jour</div>
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon meals">
                <Clock size={24} />
              </div>
              <div className="nutrition-info">
                <div className="nutrition-value">{onboardingData?.nutrition?.mealsPerDay || 0}</div>
                <div className="nutrition-label">repas/jour</div>
              </div>
            </div>
          </div>

          <div className="nutrition-details">
            <div className="detail-item">
              <strong>Type de régime:</strong> {onboardingData?.nutrition?.dietType || 'Non défini'}
            </div>
            
            {onboardingData?.nutrition?.supplements && onboardingData.nutrition.supplements.length > 0 && (
              <div className="detail-item">
                <strong>Suppléments:</strong>
                <div className="supplements-list">
                  {onboardingData.nutrition.supplements.map((supplement, index) => (
                    <span key={index} className="supplement-badge">{supplement}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}

    {isEditing && (
      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          <CheckCircle2 size={16} />
          Enregistrer
        </button>
        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
          Annuler
        </button>
      </div>
    )}
  </div>
);

// Fonction pour rendre la section Paramètres
const renderSettings = () => (
  <div className="profile-section">
    <div className="section-header">
      <h3><Settings size={24} /> Paramètres du compte</h3>
    </div>

    <div className="settings-container">
      <div className="settings-section">
        <h4>Notifications</h4>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Rappels d'entraînement</div>
              <div className="setting-desc">Recevoir des rappels pour vos séances</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" defaultChecked />
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Objectifs hebdomadaires</div>
              <div className="setting-desc">Notifications de progression</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" defaultChecked />
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Réalisations débloquées</div>
              <div className="setting-desc">Notifications des nouveaux badges</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h4>Unités de mesure</h4>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Système métrique</div>
              <div className="setting-desc">Utiliser kg, cm, km</div>
            </div>
            <div className="setting-control">
              <input type="radio" name="units" defaultChecked />
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Système impérial</div>
              <div className="setting-desc">Utiliser lbs, ft, miles</div>
            </div>
            <div className="setting-control">
              <input type="radio" name="units" />
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h4>Confidentialité</h4>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Profil public</div>
              <div className="setting-desc">Permettre aux autres de voir votre profil</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" />
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Partager les statistiques</div>
              <div className="setting-desc">Afficher vos stats dans le classement</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" />
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Données d'utilisation</div>
              <div className="setting-desc">Aider à améliorer l'application</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h4>Sécurité</h4>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Changer le mot de passe</div>
              <div className="setting-desc">Modifier votre mot de passe actuel</div>
            </div>
            <div className="setting-control">
              <button className="btn btn-secondary">
                <Edit3 size={16} />
                Modifier
              </button>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Authentification à deux facteurs</div>
              <div className="setting-desc">Sécuriser votre compte</div>
            </div>
            <div className="setting-control">
              <button className="btn btn-primary">
                <Plus size={16} />
                Activer
              </button>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Sessions actives</div>
              <div className="setting-desc">Gérer les appareils connectés</div>
            </div>
            <div className="setting-control">
              <button className="btn btn-secondary">
                <Settings size={16} />
                Gérer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h4>Données</h4>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Exporter les données</div>
              <div className="setting-desc">Télécharger toutes vos données</div>
            </div>
            <div className="setting-control">
              <button className="btn btn-secondary">
                <ArrowDown size={16} />
                Exporter
              </button>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">Synchronisation cloud</div>
              <div className="setting-desc">Sauvegarder automatiquement</div>
            </div>
            <div className="setting-control">
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section danger">
        <h4>Zone de danger</h4>
        <div className="settings-list">
          <div className="setting-item danger">
            <div className="setting-info">
              <div className="setting-name">Supprimer le compte</div>
              <div className="setting-desc">Action irréversible - toutes les données seront perdues</div>
            </div>
            <div className="setting-control">
              <button className="btn btn-danger">
                <Minus size={16} />
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  return (
    <div className="profile-container">
      {/* En-tête du profil */}
      <div className="profile-header">
        <div className="profile-avatar-section">
          <div className="avatar-container">
            <div className="profile-avatar">
              {getDisplayName().charAt(0).toUpperCase()}
              <button className="avatar-edit">
                <Camera size={16} />
              </button>
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{getDisplayName()}</h1>
            <p className="profile-email">{user?.email}</p>
            
            <div className="profile-badges">
              <div className="badge level">
                <Star size={16} />
                Niveau {onboardingData?.fitnessGoals?.fitnessLevel || 5}
              </div>
              <div className="badge goal">
                <Target size={16} />
                {onboardingData?.fitnessGoals?.primaryGoal || 'Objectif non défini'}
              </div>
              <div className="badge streak">
                <Flame size={16} />
                {stats.currentStreak} jours
              </div>
            </div>
            
            {onboardingData?.completedAt && (
              <p className="completion-date">
                Profil complété le {new Date(onboardingData.completedAt).toLocaleDateString('fr-FR')}
              </p>
            )}
          </div>
        </div>

        <div className="header-actions">
          {!isEditing ? (
            <button className="btn btn-primary" onClick={handleEdit}>
              <Edit3 size={16} />
              Modifier le profil
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleSave}>
              <CheckCircle2 size={16} />
              Sauvegarder
            </button>
          )}
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart3 size={16} />
          Vue d'ensemble
        </button>
        <button 
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          <User size={16} />
          Informations personnelles
        </button>
        <button 
          className={`tab ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          <Target size={16} />
          Objectifs fitness
        </button>
        <button 
          className={`tab ${activeTab === 'measurements' ? 'active' : ''}`}
          onClick={() => setActiveTab('measurements')}
        >
          <Activity size={16} />
          Mensurations
        </button>
        <button 
          className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          <Calendar size={16} />
          Programme
        </button>
        <button 
          className={`tab ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => setActiveTab('health')}
        >
          <Heart size={16} />
          Santé
        </button>
        <button 
          className={`tab ${activeTab === 'nutrition' ? 'active' : ''}`}
          onClick={() => setActiveTab('nutrition')}
        >
          <BookOpen size={16} />
          Nutrition
        </button>
        <button 
          className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={16} />
          Paramètres
        </button>
      </div>

      {/* Contenu principal */}
      <div className="profile-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'personal' && renderPersonalInfo()}
        {activeTab === 'goals' && renderFitnessGoals()}
        {activeTab === 'measurements' && renderMeasurements()}
        {activeTab === 'schedule' && renderWorkoutSchedule()}
        {activeTab === 'health' && renderHealthInfo()}
        {activeTab === 'nutrition' && renderNutrition()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};

export default Profile;