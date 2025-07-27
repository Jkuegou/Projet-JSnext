// import React, { useState } from 'react';
// import { Camera, Edit3, Trophy, Target, Calendar, TrendingUp, Heart, Activity, Medal, Star } from 'lucide-react';
// import './Profile.css';


// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 28,
//     weight: 75,
//     height: 180,
//     goal: 'Perte de poids',
//     level: 'Intermédiaire',
//     joinDate: '2024-01-15'
//   });

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Logique de sauvegarde ici
//   };

//   const handleInputChange = (field, value) => {
//     setProfileData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <div className="profile-avatar-section">
//           <div className="avatar-container">
//             <div className="profile-avatar">
//               {profileData.name.split(' ').map(n => n[0]).join('')}
//             </div>
//             <button className="avatar-edit">
//               <Camera size={18} />
//             </button>
//           </div>
          
//           <div className="profile-info">
//             <h1 className="profile-name">{profileData.name}</h1>
//             <p className="profile-email">{profileData.email}</p>
//             <div className="profile-badges">
//               <div className="badge level">
//                 <Star size={16} />
//                 {profileData.level}
//               </div>
//               <div className="badge goal">
//                 <Target size={16} />
//                 {profileData.goal}
//               </div>
//             </div>
//           </div>
//         </div>

//         <button className="btn btn-primary" onClick={handleEdit}>
//           <Edit3 size={16} />
//           {isEditing ? 'Annuler' : 'Modifier le profil'}
//         </button>
//       </div>

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

//       {isEditing && (
//         <div className="profile-form">
//           <div className="form-grid">
//             <div className="form-group">
//               <label className="form-label">Nom complet</label>
//               <input
//                 className="form-input"
//                 type="text"
//                 value={profileData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Email</label>
//               <input
//                 className="form-input"
//                 type="email"
//                 value={profileData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Âge</label>
//               <input
//                 className="form-input"
//                 type="number"
//                 value={profileData.age}
//                 onChange={(e) => handleInputChange('age', e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Poids (kg)</label>
//               <input
//                 className="form-input"
//                 type="number"
//                 value={profileData.weight}
//                 onChange={(e) => handleInputChange('weight', e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Taille (cm)</label>
//               <input
//                 className="form-input"
//                 type="number"
//                 value={profileData.height}
//                 onChange={(e) => handleInputChange('height', e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Objectif</label>
//               <select
//                 className="form-select"
//                 value={profileData.goal}
//                 onChange={(e) => handleInputChange('goal', e.target.value)}
//               >
//                 <option>Perte de poids</option>
//                 <option>Gain de muscle</option>
//                 <option>Maintenance</option>
//                 <option>Endurance</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Niveau</label>
//               <select
//                 className="form-select"
//                 value={profileData.level}
//                 onChange={(e) => handleInputChange('level', e.target.value)}
//               >
//                 <option>Débutant</option>
//                 <option>Intermédiaire</option>
//                 <option>Avancé</option>
//                 <option>Expert</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-actions">
//             <button className="btn btn-secondary" onClick={handleEdit}>
//               Annuler
//             </button>
//             <button className="btn btn-primary" onClick={handleSave}>
//               <Heart size={16} />
//               Sauvegarder
//             </button>
//           </div>
//         </div>
//       )}

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
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import { Camera, Edit3, Trophy, Target, Calendar, TrendingUp, Heart, Activity, Medal, Star } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useOnboarding } from '../../../context/OnboardingContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { onboardingData, loadOnboardingData, updateOnboardingData, loading } = useOnboarding();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user && !onboardingData) {
      loadOnboardingData();
    }
  }, [user, onboardingData, loadOnboardingData]);

  useEffect(() => {
    if (onboardingData) {
      // Initialiser formData avec les données d'onboarding
      setFormData({
        // Informations personnelles
        firstName: onboardingData.personalInfo?.firstName || '',
        lastName: onboardingData.personalInfo?.lastName || '',
        age: onboardingData.personalInfo?.age || '',
        gender: onboardingData.personalInfo?.gender || '',
        weight: onboardingData.personalInfo?.weight || '',
        height: onboardingData.personalInfo?.height || '',
        
        // Objectifs fitness
        primaryGoal: onboardingData.fitnessGoals?.primaryGoal || 'Perte de poids',
        targetWeight: onboardingData.fitnessGoals?.targetWeight || '',
        activityLevel: onboardingData.fitnessGoals?.activityLevel || 'Intermédiaire',
        experience: onboardingData.fitnessGoals?.experience || '',
        
        // Mensurations
        chest: onboardingData.measurements?.chest || '',
        waist: onboardingData.measurements?.waist || '',
        hips: onboardingData.measurements?.hips || '',
        arms: onboardingData.measurements?.arms || '',
        thighs: onboardingData.measurements?.thighs || '',
        
        // Programme
        daysPerWeek: onboardingData.workoutSchedule?.daysPerWeek || '',
        preferredTime: onboardingData.workoutSchedule?.preferredTime || '',
        sessionDuration: onboardingData.workoutSchedule?.sessionDuration || '',
        workoutTypes: onboardingData.workoutSchedule?.workoutTypes || []
      });
    }
  }, [onboardingData]);

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
        <p>Chargement du profil...</p>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      // Restructurer les données pour l'onboarding
      const updatedOnboardingData = {
        personalInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          gender: formData.gender,
          weight: formData.weight,
          height: formData.height
        },
        fitnessGoals: {
          primaryGoal: formData.primaryGoal,
          targetWeight: formData.targetWeight,
          activityLevel: formData.activityLevel,
          experience: formData.experience
        },
        measurements: {
          chest: formData.chest,
          waist: formData.waist,
          hips: formData.hips,
          arms: formData.arms,
          thighs: formData.thighs
        },
        workoutSchedule: {
          daysPerWeek: formData.daysPerWeek,
          preferredTime: formData.preferredTime,
          sessionDuration: formData.sessionDuration,
          workoutTypes: formData.workoutTypes
        }
      };

      await updateOnboardingData(updatedOnboardingData);
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
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

  const getGoalLabel = () => {
    return onboardingData?.fitnessGoals?.primaryGoal || 'Objectif non défini';
  };

  const getLevelLabel = () => {
    return onboardingData?.fitnessGoals?.activityLevel || 'Niveau non défini';
  };

  const renderOverview = () => (
    <div className="profile-overview">
      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #4ade80, #06b6d4)' }}>
              <Activity size={20} />
            </div>
            <div className="stat-title">Entraînements</div>
          </div>
          <div className="stat-value">128</div>
          <div className="stat-subtitle">Sessions complétées</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #ef4444)' }}>
              <TrendingUp size={20} />
            </div>
            <div className="stat-title">Progression</div>
          </div>
          <div className="stat-value">+12%</div>
          <div className="stat-subtitle">Ce mois-ci</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}>
              <Trophy size={20} />
            </div>
            <div className="stat-title">Objectifs</div>
          </div>
          <div className="stat-value">8/10</div>
          <div className="stat-subtitle">Objectifs atteints</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}>
              <Calendar size={20} />
            </div>
            <div className="stat-title">Série</div>
          </div>
          <div className="stat-value">15</div>
          <div className="stat-subtitle">Jours consécutifs</div>
        </div>
      </div>

      <div className="achievements">
        <h2 className="achievements-title">
          <Trophy size={24} style={{ color: '#f59e0b' }} />
          Réalisations
        </h2>
        <div className="achievement-grid">
          <div className="achievement-item">
            <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #4ade80, #06b6d4)' }}>
              <Medal size={24} />
            </div>
            <div className="achievement-name">Premier pas</div>
            <div className="achievement-desc">Premier entraînement complété</div>
          </div>
          
          <div className="achievement-item">
            <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #f59e0b, #ef4444)' }}>
              <Trophy size={24} />
            </div>
            <div className="achievement-name">Régularité</div>
            <div className="achievement-desc">7 jours d'entraînement</div>
          </div>
          
          <div className="achievement-item">
            <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}>
              <Star size={24} />
            </div>
            <div className="achievement-name">Objectif atteint</div>
            <div className="achievement-desc">Premier objectif réalisé</div>
          </div>
          
          <div className="achievement-item">
            <div className="achievement-icon" style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}>
              <Heart size={24} />
            </div>
            <div className="achievement-name">Santé cardio</div>
            <div className="achievement-desc">100 minutes de cardio</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>Informations personnelles</h3>
      </div>
      
      {isEditing ? (
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Prénom</label>
            <input
              className="form-input"
              type="text"
              value={formData.firstName || ''}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Nom</label>
            <input
              className="form-input"
              type="text"
              value={formData.lastName || ''}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Âge</label>
            <input
              className="form-input"
              type="number"
              value={formData.age || ''}
              onChange={(e) => handleInputChange('age', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Genre</label>
            <select
              className="form-select"
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
            <label className="form-label">Poids (kg)</label>
            <input
              className="form-input"
              type="number"
              value={formData.weight || ''}
              onChange={(e) => handleInputChange('weight', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Taille (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.height || ''}
              onChange={(e) => handleInputChange('height', e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="info-grid">
          <div className="info-item">
            <label>Prénom</label>
            <p>{onboardingData?.personalInfo?.firstName || 'Non renseigné'}</p>
          </div>
          <div className="info-item">
            <label>Nom</label>
            <p>{onboardingData?.personalInfo?.lastName || 'Non renseigné'}</p>
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
            <label>Poids</label>
            <p>{onboardingData?.personalInfo?.weight ? `${onboardingData.personalInfo.weight} kg` : 'Non renseigné'}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderFitnessGoals = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>Objectifs de fitness</h3>
      </div>
      
      {isEditing ? (
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Objectif principal</label>
            <select
              className="form-select"
              value={formData.primaryGoal || ''}
              onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
            >
              <option value="Perte de poids">Perte de poids</option>
              <option value="Gain de muscle">Gain de muscle</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Endurance">Endurance</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Poids cible (kg)</label>
            <input
              className="form-input"
              type="number"
              value={formData.targetWeight || ''}
              onChange={(e) => handleInputChange('targetWeight', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Niveau d'activité</label>
            <select
              className="form-select"
              value={formData.activityLevel || ''}
              onChange={(e) => handleInputChange('activityLevel', e.target.value)}
            >
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Expérience</label>
            <input
              className="form-input"
              type="text"
              value={formData.experience || ''}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              placeholder="Ex: 2 ans de musculation"
            />
          </div>
        </div>
      ) : (
        <div className="info-grid">
          <div className="info-item">
            <label>Objectif principal</label>
            <p>{onboardingData?.fitnessGoals?.primaryGoal || 'Non défini'}</p>
          </div>
          <div className="info-item">
            <label>Poids cible</label>
            <p>{onboardingData?.fitnessGoals?.targetWeight ? `${onboardingData.fitnessGoals.targetWeight} kg` : 'Non défini'}</p>
          </div>
          <div className="info-item">
            <label>Niveau d'activité</label>
            <p>{onboardingData?.fitnessGoals?.activityLevel || 'Non défini'}</p>
          </div>
          <div className="info-item">
            <label>Expérience</label>
            <p>{onboardingData?.fitnessGoals?.experience || 'Non définie'}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderMeasurements = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>Mensurations</h3>
      </div>
      
      {isEditing ? (
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Tour de poitrine (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.chest || ''}
              onChange={(e) => handleInputChange('chest', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tour de taille (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.waist || ''}
              onChange={(e) => handleInputChange('waist', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tour de hanches (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.hips || ''}
              onChange={(e) => handleInputChange('hips', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tour de bras (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.arms || ''}
              onChange={(e) => handleInputChange('arms', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tour de cuisses (cm)</label>
            <input
              className="form-input"
              type="number"
              value={formData.thighs || ''}
              onChange={(e) => handleInputChange('thighs', e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="info-grid">
          <div className="info-item">
            <label>Tour de poitrine</label>
            <p>{onboardingData?.measurements?.chest ? `${onboardingData.measurements.chest} cm` : 'Non renseigné'}</p>
          </div>
          <div className="info-item">
            <label>Tour de taille</label>
            <p>{onboardingData?.measurements?.waist ? `${onboardingData.measurements.waist} cm` : 'Non renseigné'}</p>
          </div>
          <div className="info-item">
            <label>Tour de hanches</label>
            <p>{onboardingData?.measurements?.hips ? `${onboardingData.measurements.hips} cm` : 'Non renseigné'}</p>
          </div>
          <div className="info-item">
            <label>Tour de bras</label>
            <p>{onboardingData?.measurements?.arms ? `${onboardingData.measurements.arms} cm` : 'Non renseigné'}</p>
          </div>
          <div className="info-item">
            <label>Tour de cuisses</label>
            <p>{onboardingData?.measurements?.thighs ? `${onboardingData.measurements.thighs} cm` : 'Non renseigné'}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderWorkoutSchedule = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>Programme d'entraînement</h3>
      </div>
      
      {isEditing ? (
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Jours par semaine</label>
            <input
              className="form-input"
              type="number"
              min="1"
              max="7"
              value={formData.daysPerWeek || ''}
              onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Heure préférée</label>
            <select
              className="form-select"
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
            <label className="form-label">Durée des séances</label>
            <select
              className="form-select"
              value={formData.sessionDuration || ''}
              onChange={(e) => handleInputChange('sessionDuration', e.target.value)}
            >
              <option value="">Sélectionner</option>
              <option value="30 minutes">30 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 heure">1 heure</option>
              <option value="1h30">1h30</option>
              <option value="2 heures">2 heures</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="info-grid">
          <div className="info-item">
            <label>Jours par semaine</label>
            <p>{onboardingData?.workoutSchedule?.daysPerWeek ? `${onboardingData.workoutSchedule.daysPerWeek} jours` : 'Non défini'}</p>
          </div>
          <div className="info-item">
            <label>Heure préférée</label>
            <p>{onboardingData?.workoutSchedule?.preferredTime || 'Non définie'}</p>
          </div>
          <div className="info-item">
            <label>Durée des séances</label>
            <p>{onboardingData?.workoutSchedule?.sessionDuration || 'Non définie'}</p>
          </div>
          <div className="info-item">
            <label>Types d'entraînement</label>
            <p>
              {onboardingData?.workoutSchedule?.workoutTypes && onboardingData.workoutSchedule.workoutTypes.length > 0 
                ? onboardingData.workoutSchedule.workoutTypes.join(', ') 
                : 'Non définis'
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar-section">
          <div className="avatar-container">
            <div className="profile-avatar">
              {getDisplayName().split(' ').map(n => n[0]).join('')}
            </div>
            <button className="avatar-edit">
              <Camera size={18} />
            </button>
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{getDisplayName()}</h1>
            <p className="profile-email">{user?.email}</p>
            <div className="profile-badges">
              <div className="badge level">
                <Star size={16} />
                {getLevelLabel()}
              </div>
              <div className="badge goal">
                <Target size={16} />
                {getGoalLabel()}
              </div>
            </div>
            {onboardingData?.completedAt && (
              <p className="completion-date">
                Profil complété le {new Date(onboardingData.completedAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleEdit}>
          <Edit3 size={16} />
          {isEditing ? 'Annuler' : 'Modifier le profil'}
        </button>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Vue d'ensemble
        </button>
        <button 
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Informations personnelles
        </button>
        <button 
          className={`tab ${activeTab === 'fitness' ? 'active' : ''}`}
          onClick={() => setActiveTab('fitness')}
        >
          Objectifs fitness
        </button>
        <button 
          className={`tab ${activeTab === 'measurements' ? 'active' : ''}`}
          onClick={() => setActiveTab('measurements')}
        >
          Mensurations
        </button>
        <button 
          className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          Programme
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'personal' && renderPersonalInfo()}
        {activeTab === 'fitness' && renderFitnessGoals()}
        {activeTab === 'measurements' && renderMeasurements()}
        {activeTab === 'schedule' && renderWorkoutSchedule()}
      </div>

      {isEditing && (
        <div className="form-actions">
          <button className="btn btn-secondary" onClick={handleEdit}>
            Annuler
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <Heart size={16} />
            Sauvegarder
          </button>
        </div>
      )}

      {!onboardingData && (
        <div className="no-onboarding-data">
          <h3>Aucune donnée d'onboarding trouvée</h3>
          <p>Complétez votre profil pour voir vos informations ici.</p>
          <button className="btn-primary">
            Compléter mon profil
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;