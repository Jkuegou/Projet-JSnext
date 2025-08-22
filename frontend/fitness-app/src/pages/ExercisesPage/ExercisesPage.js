// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ExercisesPage.css';

// const ExercisesPage = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     { id: 'all', name: 'All Exercises', icon: 'fas fa-th' },
//     { id: 'chest', name: 'Chest', icon: 'fas fa-heart' },
//     { id: 'back', name: 'Back', icon: 'fas fa-user' },
//     { id: 'shoulders', name: 'Shoulders', icon: 'fas fa-expand-arrows-alt' },
//     { id: 'arms', name: 'Arms', icon: 'fas fa-fist-raised' },
//     { id: 'legs', name: 'Legs', icon: 'fas fa-running' },
//     { id: 'core', name: 'Core', icon: 'fas fa-circle' },
//     { id: 'cardio', name: 'Cardio', icon: 'fas fa-heartbeat' }
//   ];

//   const exercises = [
//     {
//       id: 1,
//       name: 'Push-ups',
//       category: 'chest',
//       difficulty: 'Beginner',
//       duration: '3 sets x 10-15 reps',
//       muscles: ['Chest', 'Shoulders', 'Triceps'],
//       equipment: 'Bodyweight',
//       description: 'Classic upper body exercise targeting chest, shoulders, and triceps.',
//       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
//     },
//     {
//       id: 2,
//       name: 'Squats',
//       category: 'legs',
//       difficulty: 'Beginner',
//       duration: '3 sets x 12-20 reps',
//       muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
//       equipment: 'Bodyweight',
//       description: 'Fundamental lower body exercise for building leg strength.',
//       image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=300&fit=crop'
//     },
//     {
//       id: 3,
//       name: 'Deadlifts',
//       category: 'back',
//       difficulty: 'Intermediate',
//       duration: '3 sets x 8-12 reps',
//       muscles: ['Back', 'Glutes', 'Hamstrings'],
//       equipment: 'Barbell',
//       description: 'Compound exercise for overall strength and muscle development.',
//       image: 'https://images.unsplash.com/photo-1566241134019-38c6b2c6e8f5?w=400&h=300&fit=crop'
//     },
//     {
//       id: 4,
//       name: 'Planks',
//       category: 'core',
//       difficulty: 'Beginner',
//       duration: '3 sets x 30-60 seconds',
//       muscles: ['Core', 'Shoulders', 'Back'],
//       equipment: 'Bodyweight',
//       description: 'Isometric exercise for core stability and strength.',
//       image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9c42?w=400&h=300&fit=crop'
//     },
//     {
//       id: 5,
//       name: 'Burpees',
//       category: 'cardio',
//       difficulty: 'Advanced',
//       duration: '3 sets x 10-15 reps',
//       muscles: ['Full Body'],
//       equipment: 'Bodyweight',
//       description: 'High-intensity full-body exercise for cardio and strength.',
//       image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&h=300&fit=crop'
//     },
//     {
//       id: 6,
//       name: 'Shoulder Press',
//       category: 'shoulders',
//       difficulty: 'Intermediate',
//       duration: '3 sets x 10-12 reps',
//       muscles: ['Shoulders', 'Triceps'],
//       equipment: 'Dumbbells',
//       description: 'Overhead pressing movement for shoulder development.',
//       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
//     }
//   ];

//   const filteredExercises = exercises.filter(exercise => {
//     const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
//     const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Beginner': return 'success';
//       case 'Intermediate': return 'warning';
//       case 'Advanced': return 'danger';
//       default: return 'secondary';
//     }
//   };

//   const handleStartExercise = (exerciseId) => {
//     // Navigate to workout session with a default workout that includes this exercise
//     // You might want to create a workout on-the-fly or use a default one
//     navigate(`/workout-session/${exerciseId}`);
//   };

//   return (
//     <div className="exercises-page">
//       {/* Header */}
//       <div className="page-header bg-primary text-white py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-8">
//               <h1 className="display-4 fw-bold mb-3">Exercise Library</h1>
//               <p className="lead mb-0">
//                 Discover a comprehensive collection of exercises to build your perfect workout routine.
//               </p>
//             </div>
//             <div className="col-lg-4 text-lg-end">
//               <div className="d-flex gap-3 justify-content-lg-end">
//                 <button className="btn btn-outline-light">
//                   <i className="fas fa-plus me-2"></i>Add Exercise
//                 </button>
//                 <button className="btn btn-light">
//                   <i className="fas fa-bookmark me-2"></i>Favorites
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container py-5">
//         {/* Search and Filter */}
//         <div className="row mb-5">
//           <div className="col-lg-8">
//             <div className="search-bar">
//               <div className="input-group input-group-lg">
//                 <span className="input-group-text bg-white border-end-0">
//                   <i className="fas fa-search text-muted"></i>
//                 </span>
//                 <input
//                   type="text"
//                   className="form-control border-start-0"
//                   placeholder="Search exercises, muscles, or equipment..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <select
//               className="form-select form-select-lg"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Categories Filter */}
//         <div className="categories-filter mb-5">
//           <div className="row g-3">
//             {categories.map(category => (
//               <div key={category.id} className="col-lg-3 col-md-4 col-6">
//                 <button
//                   className={`btn w-100 h-100 p-3 ${
//                     selectedCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'
//                   }`}
//                   onClick={() => setSelectedCategory(category.id)}
//                 >
//                   <i className={`${category.icon} fa-2x d-block mb-2`}></i>
//                   <span className="fw-semibold">{category.name}</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Results Header */}
//         <div className="results-header mb-4">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <h4 className="mb-0">
//                 {filteredExercises.length} Exercise{filteredExercises.length !== 1 ? 's' : ''} Found
//               </h4>
//             </div>
//             <div className="col-lg-6 text-lg-end">
//               <div className="btn-group" role="group">
//                 <button className="btn btn-outline-secondary active">
//                   <i className="fas fa-th-large me-2"></i>Grid
//                 </button>
//                 <button className="btn btn-outline-secondary">
//                   <i className="fas fa-list me-2"></i>List
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Exercises Grid */}
//         <div className="exercises-grid">
//           <div className="row g-4">
//             {filteredExercises.map(exercise => (
//               <div key={exercise.id} className="col-lg-4 col-md-6">
//                 <div className="exercise-card h-100 card border-0 shadow-sm">
//                   <div className="card-img-container position-relative">
//                     <img
//                       src={exercise.image}
//                       alt={exercise.name}
//                       className="card-img-top"
//                       style={{height: '200px', objectFit: 'cover'}}
//                     />
//                     <div className="card-img-overlay d-flex align-items-start justify-content-between p-3">
//                       <span className={`badge bg-${getDifficultyColor(exercise.difficulty)}`}>
//                         {exercise.difficulty}
//                       </span>
//                       <button className="btn btn-sm btn-light rounded-circle">
//                         <i className="fas fa-heart"></i>
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold mb-2">{exercise.name}</h5>
//                     <p className="card-text text-muted mb-3">{exercise.description}</p>
                    
//                     <div className="exercise-details mb-3">
//                       <div className="row g-2">
//                         <div className="col-6">
//                           <small className="text-muted d-block">Duration</small>
//                           <span className="fw-semibold">{exercise.duration}</span>
//                         </div>
//                         <div className="col-6">
//                           <small className="text-muted d-block">Equipment</small>
//                           <span className="fw-semibold">{exercise.equipment}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="muscles-tags mb-3">
//                       <small className="text-muted d-block mb-1">Target Muscles</small>
//                       <div className="d-flex flex-wrap gap-1">
//                         {exercise.muscles.map((muscle, index) => (
//                           <span key={index} className="badge bg-light text-dark">
//                             {muscle}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="card-footer bg-transparent border-0 pt-0">
//                     <div className="d-flex gap-2">
//                       <button 
//                         className="btn btn-primary flex-grow-1"
//                         onClick={() => handleStartExercise(exercise.id)}
//                       >
//                         <i className="fas fa-play me-2"></i>Start Exercise
//                       </button>
//                       <button className="btn btn-outline-secondary">
//                         <i className="fas fa-info-circle"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* No Results */}
//         {filteredExercises.length === 0 && (
//           <div className="text-center py-5">
//             <i className="fas fa-search fa-3x text-muted mb-3"></i>
//             <h4 className="text-muted">No exercises found</h4>
//             <p className="text-muted mb-4">
//               Try adjusting your search terms or category filter.
//             </p>
//             <button 
//               className="btn btn-primary"
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedCategory('all');
//               }}
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExercisesPage;
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './ExercisesPage.css'; // Le fichier CSS futuriste

// // const ExercisesPage = () => {
// //   const navigate = useNavigate();
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'
// //   const [favorites, setFavorites] = useState(new Set());
// //   const [showToast, setShowToast] = useState(false);
// //   const [toastMessage, setToastMessage] = useState('');
// //   const [toastType, setToastType] = useState('success');

// //   const categories = [
// //     { id: 'all', name: 'All Exercises', icon: 'fas fa-th' },
// //     { id: 'chest', name: 'Chest', icon: 'fas fa-heart' },
// //     { id: 'back', name: 'Back', icon: 'fas fa-user-ninja' },
// //     { id: 'shoulders', name: 'Shoulders', icon: 'fas fa-expand-arrows-alt' },
// //     { id: 'arms', name: 'Arms', icon: 'fas fa-fist-raised' },
// //     { id: 'legs', name: 'Legs', icon: 'fas fa-running' },
// //     { id: 'core', name: 'Core', icon: 'fas fa-circle' },
// //     { id: 'cardio', name: 'Cardio', icon: 'fas fa-heartbeat' }
// //   ];

// //   const exercises = [
// //     {
// //       id: 1,
// //       name: 'Push-ups',
// //       category: 'chest',
// //       difficulty: 'Beginner',
// //       duration: '3 sets x 10-15 reps',
// //       muscles: ['Chest', 'Shoulders', 'Triceps'],
// //       equipment: 'Bodyweight',
// //       description: 'Classic upper body exercise targeting chest, shoulders, and triceps with perfect form.',
// //       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
// //       rating: 4.4,
// //       calories: 180
// //     },
// //      {
// //       id: 2,
// //       name: 'Squats',
// //       category: 'legs',
// //       difficulty: 'Beginner',
// //       duration: '3 sets x 12-20 reps',
// //       muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
// //       equipment: 'Bodyweight',
// //       description: 'Fundamental lower body exercise for building explosive leg strength and power.',
// //       image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=300&fit=crop',
// //       rating: 4.8,
// //       calories: 200
// //     },
// //     {
// //       id: 3,
// //       name: 'Deadlifts',
// //       category: 'back',
// //       difficulty: 'Intermediate',
// //       duration: '3 sets x 8-12 reps',
// //       muscles: ['Back', 'Glutes', 'Hamstrings'],
// //       equipment: 'Barbell',
// //       description: 'Compound exercise for overall strength and muscle development. King of all exercises.',
// //       image: 'https://images.unsplash.com/photo-1566241134019-38c6b2c6e8f5?w=400&h=300&fit=crop',
// //       rating: 4.9,
// //       calories: 300
// //     },
// //     {
// //       id: 4,
// //       name: 'Planks',
// //       category: 'core',
// //       difficulty: 'Beginner',
// //       duration: '3 sets x 30-60 seconds',
// //       muscles: ['Core', 'Shoulders', 'Back'],
// //       equipment: 'Bodyweight',
// //       description: 'Isometric exercise for core stability and unbreakable mental strength.',
// //       image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9c42?w=400&h=300&fit=crop',
// //       rating: 4.3,
// //       calories: 120
// //     },
// //     {
// //       id: 5,
// //       name: 'Burpees',
// //       category: 'cardio',
// //       difficulty: 'Advanced',
// //       duration: '3 sets x 10-15 reps',
// //       muscles: ['Full Body'],
// //       equipment: 'Bodyweight',
// //       description: 'High-intensity full-body exercise for ultimate cardio and strength conditioning.',
// //       image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&h=300&fit=crop',
// //       rating: 4.6,
// //       calories: 400
// //     },
// //     {
// //       id: 6,
// //       name: 'Shoulder Press',
// //       category: 'shoulders',
// //       difficulty: 'Intermediate',
// //       duration: '3 sets x 10-12 reps',
// //       muscles: ['Shoulders', 'Triceps'],
// //       equipment: 'Dumbbells',
// //       description: 'Overhead pressing movement for massive shoulder development and stability.',
// //       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
// //        rating: 4.5,
// //       calories: 150
// //     },
     
// //     {
// //       id: 7,
// //       name: 'Pull-ups',
// //       category: 'back',
// //       difficulty: 'Advanced',
// //       duration: '3 sets x 5-12 reps',
// //       muscles: ['Lats', 'Biceps', 'Rhomboids'],
// //       equipment: 'Pull-up Bar',
// //       description: 'Ultimate upper body pulling exercise for a powerful V-shaped torso.',
// //       image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=300&fit=crop',
// //       rating: 4.7,
// //       calories: 250
// //     },
// //     {
// //       id: 8,
// //       name: 'Bicep Curls',
// //       category: 'arms',
// //       difficulty: 'Beginner',
// //       duration: '3 sets x 12-15 reps',
// //       muscles: ['Biceps', 'Forearms'],
// //       equipment: 'Dumbbells',
// //       description: 'Isolation exercise for building impressive bicep peaks and arm definition.',
// //       image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
// //       rating: 4.2,
// //       calories: 140
// //     }
// //   ];

// //   const filteredExercises = exercises.filter(exercise => {
// //     const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
// //     const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //                          exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase())) ||
// //                          exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase());
// //     return matchesCategory && matchesSearch;
// //   });

// //   const getDifficultyColor = (difficulty) => {
// //     switch (difficulty) {
// //       case 'Beginner': return 'success';
// //       case 'Intermediate': return 'warning';
// //       case 'Advanced': return 'danger';
// //       default: return 'primary';
// //     }
// //   };

// //   const toggleFavorite = (exerciseId) => {
// //     const newFavorites = new Set(favorites);
// //     if (newFavorites.has(exerciseId)) {
// //       newFavorites.delete(exerciseId);
// //       showToastMessage('Removed from favorites', 'error');
// //     } else {
// //       newFavorites.add(exerciseId);
// //       showToastMessage('Added to favorites!', 'success');
// //     }
// //     setFavorites(newFavorites);
// //   };

// //   const showToastMessage = (message, type) => {
// //     setToastMessage(message);
// //     setToastType(type);
// //     setShowToast(true);
// //     setTimeout(() => setShowToast(false), 3000);
// //   };

// //   const handleStartExercise = (exerciseId) => {
// //     showToastMessage('Starting exercise session...', 'success');
// //     setTimeout(() => {
// //       navigate(`/workout-session/${exerciseId}`);
// //     }, 1000);
// //   };

// //   const getTotalStats = () => {
// //     return {
// //       total: exercises.length,
// //       beginner: exercises.filter(ex => ex.difficulty === 'Beginner').length,
// //       intermediate: exercises.filter(ex => ex.difficulty === 'Intermediate').length,
// //       advanced: exercises.filter(ex => ex.difficulty === 'Advanced').length,
// //       avgCalories: Math.round(exercises.reduce((acc, ex) => acc + ex.calories, 0) / exercises.length)
// //     };
// //   };

// //   const stats = getTotalStats();

// //   const renderStars = (rating) => {
// //     const stars = [];
// //     const fullStars = Math.floor(rating);
// //     const hasHalfStar = rating % 1 !== 0;

// //     for (let i = 0; i < fullStars; i++) {
// //       stars.push(<i key={i} className="fas fa-star ep-star"></i>);
// //     }
    
// //     if (hasHalfStar) {
// //       stars.push(<i key="half" className="fas fa-star-half-alt ep-star"></i>);
// //     }
    
// //     const emptyStars = 5 - Math.ceil(rating);
// //     for (let i = 0; i < emptyStars; i++) {
// //       stars.push(<i key={`empty-${i}`} className="far fa-star ep-star" style={{opacity: 0.3}}></i>);
// //     }

// //     return stars;
// //   };

// //   // Générer des particules flottantes
// //   const generateParticles = () => {
// //     const particles = [];
// //     for (let i = 0; i < 15; i++) {
// //       particles.push(
// //         <div
// //           key={i}
// //           className="ep-particle"
// //           style={{
// //             left: `${Math.random() * 100}%`,
// //             top: `${Math.random() * 100}%`,
// //             animationDelay: `${Math.random() * 8}s`,
// //             animationDuration: `${6 + Math.random() * 8}s`
// //           }}
// //         />
// //       );
// //     }
// //     return particles;
// //   };

// //   return (
// //     <div className="exercise-page-container ep-smooth-rendering">
// //       {/* Particules flottantes */}
// //       <div className="ep-floating-particles">
// //         {generateParticles()}
// //       </div>

// //       {/* Particules spécifiques à la page */}
// //       <div className="ep-page-particles"></div>

// //       {/* Toast Notifications */}
// //       <div className={`ep-toast ep-toast-${toastType} ${showToast ? 'show' : ''}`}>
// //         <div className="d-flex align-items-center ep-gap-md">
// //           <i className={`fas ${toastType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} ep-text-${toastType === 'success' ? 'neon' : 'primary'}`}></i>
// //           <span className="ep-font-semibold">{toastMessage}</span>
// //         </div>
// //       </div>

// //       {/* Header Épique */}
// //       <div className="ep-header">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-8">
// //               <h1 className="ep-header-title">Exercices</h1>
// //               <p className="ep-header-subtitle">
// //                 Découvrez la collection ultime d'exercices pour transformer votre parcours de remise en forme en une aventure épique.
// //               </p>
// //             </div>
// //             <div className="col-lg-4 text-lg-end">
// //               <div className="ep-header-actions">
// //                 <button className="ep-btn ep-btn-outline ep-glow-effect">
// //                   <i className="fas fa-plus"></i>Add Exercise
// //                 </button>
// //                 <button className="ep-btn ep-btn-gradient ep-hover-morph">
// //                   <i className="fas fa-bookmark"></i>Favorites ({favorites.size})
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container ep-py-xl">
// //         {/* Barre de recherche futuriste */}
// //         <div className="ep-search-container">
// //           <div className="ep-search-wrapper">
// //             <i className="fas fa-search ep-search-icon"></i>
// //             <input
// //               type="text"
// //               className="ep-search-input"
// //               placeholder="Search exercises, muscles, equipment, or difficulty..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* Filtres sophistiqués */}
// //         <div className="ep-filters-section">
// //           <div className="row ep-gap-lg align-items-center">
// //             <div className="col-lg-8">
// //               <label className="form-label ep-text-white ep-font-semibold ep-mb-sm">
// //                 <i className="fas fa-filter ep-meta-icon ep-mr-xs"></i>
// //                 Filter by Category
// //               </label>
// //               <select
// //                 className="ep-filter-select w-100"
// //                 value={selectedCategory}
// //                 onChange={(e) => setSelectedCategory(e.target.value)}
// //               >
// //                 {categories.map(category => (
// //                   <option key={category.id} value={category.id}>
// //                     {category.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div className="col-lg-4">
// //               <label className="form-label ep-text-white ep-font-semibold ep-mb-sm">
// //                 <i className="fas fa-eye ep-meta-icon ep-mr-xs"></i>
// //                 View Mode
// //               </label>
// //               <div className="ep-view-toggle">
// //                 <button
// //                   className={`ep-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
// //                   onClick={() => setViewMode('grid')}
// //                 >
// //                   <i className="fas fa-th-large"></i>Grid
// //                 </button>
// //                 <button
// //                   className={`ep-view-btn ${viewMode === 'list' ? 'active' : ''}`}
// //                   onClick={() => setViewMode('list')}
// //                 >
// //                   <i className="fas fa-list"></i>List
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Grille de catégories */}
// //         <div className="ep-categories-grid">
// //           {categories.map(category => (
// //             <button
// //               key={category.id}
// //               className={`ep-category-btn ep-interactive-element ${
// //                 selectedCategory === category.id ? 'active' : ''
// //               }`}
// //               onClick={() => setSelectedCategory(category.id)}
// //             >
// //               <i className={`${category.icon} ep-category-icon`}></i>
// //               <span className="ep-category-name">{category.name}</span>
// //             </button>
// //           ))}
// //         </div>

// //         {/* Header des résultats */}
// //         <div className="ep-results-header">
// //           <div>
// //             <h2 className="ep-results-title">
// //               {filteredExercises.length} Exercise{filteredExercises.length !== 1 ? 's' : ''} Found
// //             </h2>
// //             <div className="ep-results-meta">
// //               <span>
// //                 <i className="fas fa-dumbbell ep-meta-icon"></i>
// //                 {selectedCategory === 'all' ? 'All Categories' : categories.find(c => c.id === selectedCategory)?.name}
// //               </span>
// //               {searchTerm && (
// //                 <span>
// //                   <i className="fas fa-search ep-meta-icon"></i>
// //                   "{searchTerm}"
// //                 </span>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Grille/Liste d'exercices */}
// //         {filteredExercises.length > 0 ? (
// //           <div className={`exercises-grid ${viewMode === 'list' ? 'ep-list-view' : ''}`}>
// //             <div className="row g-4">
// //               {filteredExercises.map(exercise => (
// //                 <div key={exercise.id} className={viewMode === 'list' ? 'col-12' : 'col-lg-4 col-md-6'}>
// //                   <div className="ep-exercise-card ep-glow-effect ep-gpu-accelerated">
// //                     <div className="ep-card-img-container ep-image-wrapper">
// //                       <img
// //                         src={exercise.image}
// //                         alt={exercise.name}
// //                         className="ep-card-img"
// //                       />
// //                       <div className="ep-card-overlay">
// //                         <span className={`ep-badge ep-badge-${getDifficultyColor(exercise.difficulty)}`}>
// //                           {exercise.difficulty}
// //                         </span>
// //                         <button 
// //                           className={`ep-favorite-btn ${favorites.has(exercise.id) ? 'active' : ''}`}
// //                           onClick={() => toggleFavorite(exercise.id)}
// //                         >
// //                           <i className={`${favorites.has(exercise.id) ? 'fas' : 'far'} fa-heart`}></i>
// //                         </button>
// //                       </div>
// //                       <div className="ep-play-overlay" onClick={() => handleStartExercise(exercise.id)}>
// //                         <i className="fas fa-play"></i>
// //                       </div>
// //                     </div>
                    
// //                     <div className="ep-card-body">
// //                       <h5 className="ep-card-title">{exercise.name}</h5>
// //                       <p className="ep-card-description">{exercise.description}</p>
                      
// //                       {/* Rating */}
// //                       <div className="ep-rating">
// //                         <div className="ep-rating-stars">
// //                           {renderStars(exercise.rating)}
// //                         </div>
// //                         <span className="ep-rating-value">({exercise.rating})</span>
// //                       </div>
                      
// //                       {/* Meta informations */}
// //                       <div className="ep-exercise-meta">
// //                         <div className="ep-meta-item">
// //                           <i className="fas fa-clock ep-meta-icon"></i>
// //                           <span>{exercise.duration}</span>
// //                         </div>
// //                         <div className="ep-meta-item">
// //                           <i className="fas fa-tools ep-meta-icon"></i>
// //                           <span>{exercise.equipment}</span>
// //                         </div>
// //                         <div className="ep-meta-item">
// //                           <i className="fas fa-fire ep-meta-icon"></i>
// //                           <span>{exercise.calories} cal</span>
// //                         </div>
// //                       </div>
                      
// //                       {/* Tags des muscles */}
// //                       <div className="ep-muscle-tags">
// //                         {exercise.muscles.map((muscle, index) => (
// //                           <span key={index} className="ep-muscle-tag ep-micro-bounce">
// //                             {muscle}
// //                           </span>
// //                         ))}
// //                       </div>
                      
// //                       {/* Actions */}
// //                       <div className="ep-card-actions">
// //                         <button 
// //                           className="ep-action-btn ep-action-btn-start"
// //                           onClick={() => handleStartExercise(exercise.id)}
// //                         >
// //                           <i className="fas fa-play"></i>Start Exercise
// //                         </button>
// //                         <button className="ep-action-btn ep-action-btn-info ep-micro-glow">
// //                           <i className="fas fa-info-circle"></i>
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ) : (
// //           /* État vide artistique */
// //           <div className="ep-empty-state">
// //             <div className="ep-empty-icon">
// //               <i className="fas fa-search ep-holographic"></i>
// //             </div>
// //             <h3 className="ep-empty-title ep-text-gradient">No Exercises Found</h3>
// //             <p className="ep-empty-description">
// //               Your search didn't match any exercises in our galaxy. Try adjusting your search terms or category filter to discover new workout possibilities.
// //             </p>
// //             <button 
// //               className="ep-btn ep-btn-primary ep-hover-glow"
// //               onClick={() => {
// //                 setSearchTerm('');
// //                 setSelectedCategory('all');
// //                 showToastMessage('Filters cleared!', 'success');
// //               }}
// //             >
// //               <i className="fas fa-refresh"></i>
// //               Clear All Filters
// //             </button>
// //           </div>
// //         )}

// //         {/* Section statistiques impressionnante */}
// //         <div className="ep-stats-section">
// //           <div className="row ep-gap-lg justify-content-center">
// //             <div className="col-lg-2 col-md-4 col-6">
// //               <div className="ep-stat-card ep-hover-glow">
// //                 <div className="ep-stat-number">{stats.total}</div>
// //                 <div className="ep-stat-label">Total Exercises</div>
// //               </div>
// //             </div>
// //             <div className="col-lg-2 col-md-4 col-6">
// //               <div className="ep-stat-card ep-hover-glow">
// //                 <div className="ep-stat-number">{stats.beginner}</div>
// //                 <div className="ep-stat-label">Beginner</div>
// //               </div>
// //             </div>
// //             <div className="col-lg-2 col-md-4 col-6">
// //               <div className="ep-stat-card ep-hover-glow">
// //                 <div className="ep-stat-number">{stats.intermediate}</div>
// //                 <div className="ep-stat-label">Intermediate</div>
// //               </div>
// //             </div>
// //             <div className="col-lg-2 col-md-4 col-6">
// //               <div className="ep-stat-card ep-hover-glow">
// //                 <div className="ep-stat-number">{stats.advanced}</div>
// //                 <div className="ep-stat-label">Advanced</div>
// //               </div>
// //             </div>
// //             <div className="col-lg-2 col-md-4 col-6">
// //               <div className="ep-stat-card ep-hover-glow">
// //                 <div className="ep-stat-number">{stats.avgCalories}</div>
// //                 <div className="ep-stat-label">Avg Calories</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Section de fonctionnalités supplémentaires */}
// //         <div className="ep-mt-3xl">
// //           <div className="row ep-gap-xl">
// //             <div className="col-lg-4">
// //               <div className="ep-stat-card ep-text-center ep-hover-lift">
// //                 <i className="fas fa-chart-line ep-text-neon ep-mb-lg" style={{fontSize: '3rem'}}></i>
// //                 <h4 className="ep-text-white ep-font-bold ep-mb-md">Track Progress</h4>
// //                 <p className="ep-text-muted">Monitor your fitness journey with advanced analytics and insights.</p>
// //                 <button className="ep-btn ep-btn-outline ep-mt-md">
// //                   <i className="fas fa-analytics"></i>View Analytics
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="col-lg-4">
// //               <div className="ep-stat-card ep-text-center ep-hover-lift">
// //                 <i className="fas fa-users ep-text-primary ep-mb-lg" style={{fontSize: '3rem'}}></i>
// //                 <h4 className="ep-text-white ep-font-bold ep-mb-md">Join Community</h4>
// //                 <p className="ep-text-muted">Connect with fitness enthusiasts and share your achievements.</p>
// //                 <button className="ep-btn ep-btn-primary ep-mt-md">
// //                   <i className="fas fa-user-plus"></i>Join Now
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="col-lg-4">
// //               <div className="ep-stat-card ep-text-center ep-hover-lift">
// //                 <i className="fas fa-robot ep-aurora-pink ep-mb-lg" style={{fontSize: '3rem', color: 'var(--ep-aurora-pink)'}}></i>
// //                 <h4 className="ep-text-white ep-font-bold ep-mb-md">AI Trainer</h4>
// //                 <p className="ep-text-muted">Get personalized workout recommendations powered by AI.</p>
// //                 <button className="ep-btn ep-btn-gradient ep-mt-md">
// //                   <i className="fas fa-brain"></i>Get AI Help
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Actions Panel */}
// //         <div className="ep-mt-2xl">
// //           <div className="ep-results-header">
// //             <div>
// //               <h3 className="ep-text-white ep-font-bold ep-mb-sm">Quick Actions</h3>
// //               <p className="ep-text-muted ep-mb-0">Accelerate your fitness journey</p>
// //             </div>
// //             <div className="ep-header-actions">
// //               <button className="ep-btn ep-btn-outline ep-micro-bounce">
// //                 <i className="fas fa-random"></i>Random Workout
// //               </button>
// //               <button className="ep-btn ep-btn-primary ep-hover-glow">
// //                 <i className="fas fa-calendar-plus"></i>Schedule Workout
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Progress Bar Example */}
// //         {filteredExercises.length > 0 && (
// //           <div className="ep-mt-xl">
// //             <div className="d-flex justify-content-between align-items-center ep-mb-sm">
// //               <span className="ep-text-white ep-font-semibold">Weekly Goal Progress</span>
// //               <span className="ep-text-primary ep-font-bold">75%</span>
// //             </div>
// //             <div className="ep-progress-bar">
// //               <div className="ep-progress-fill" style={{width: '75%'}}></div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };


   
// //   export default ExercisesPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExercisesPage.css';

const ExercisesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const categories = [
    { id: 'all', name: 'All Exercises', icon: 'fas fa-th' },
    { id: 'chest', name: 'Chest', icon: 'fas fa-heart' },
    { id: 'back', name: 'Back', icon: 'fas fa-user-ninja' },
    { id: 'shoulders', name: 'Shoulders', icon: 'fas fa-expand-arrows-alt' },
    { id: 'arms', name: 'Arms', icon: 'fas fa-fist-raised' },
    { id: 'legs', name: 'Legs', icon: 'fas fa-running' },
    { id: 'core', name: 'Core', icon: 'fas fa-circle' },
    { id: 'cardio', name: 'Cardio', icon: 'fas fa-heartbeat' }
  ];

  const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      category: 'chest',
      difficulty: 'Beginner',
      duration: '3 sets x 10-15 reps',
      muscles: ['Chest', 'Shoulders', 'Triceps'],
      equipment: 'Bodyweight',
      description: 'Classic upper body exercise targeting chest, shoulders, and triceps with perfect form.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.4,
      calories: 180
    },
    {
      id: 2,
      name: 'Squats',
      category: 'legs',
      difficulty: 'Beginner',
      duration: '3 sets x 12-20 reps',
      muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
      equipment: 'Bodyweight',
      description: 'Fundamental lower body exercise for building explosive leg strength and power.',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=300&fit=crop',
      rating: 4.8,
      calories: 200
    },
    {
      id: 3,
      name: 'Deadlifts',
      category: 'back',
      difficulty: 'Intermediate',
      duration: '3 sets x 8-12 reps',
      muscles: ['Back', 'Glutes', 'Hamstrings'],
      equipment: 'Barbell',
      description: 'Compound exercise for overall strength and muscle development. King of all exercises.',
      image: 'https://images.unsplash.com/photo-1566241134019-38c6b2c6e8f5?w=400&h=300&fit=crop',
      rating: 4.9,
      calories: 300
    },
    {
      id: 4,
      name: 'Planks',
      category: 'core',
      difficulty: 'Beginner',
      duration: '3 sets x 30-60 seconds',
      muscles: ['Core', 'Shoulders', 'Back'],
      equipment: 'Bodyweight',
      description: 'Isometric exercise for core stability and unbreakable mental strength.',
      image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9c42?w=400&h=300&fit=crop',
      rating: 4.3,
      calories: 120
    },
    {
      id: 5,
      name: 'Burpees',
      category: 'cardio',
      difficulty: 'Advanced',
      duration: '3 sets x 10-15 reps',
      muscles: ['Full Body'],
      equipment: 'Bodyweight',
      description: 'High-intensity full-body exercise for ultimate cardio and strength conditioning.',
      image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&h=300&fit=crop',
      rating: 4.6,
      calories: 400
    },
    {
      id: 6,
      name: 'Shoulder Press',
      category: 'shoulders',
      difficulty: 'Intermediate',
      duration: '3 sets x 10-12 reps',
      muscles: ['Shoulders', 'Triceps'],
      equipment: 'Dumbbells',
      description: 'Overhead pressing movement for massive shoulder development and stability.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.5,
      calories: 150
    },
    {
      id: 7,
      name: 'Pull-ups',
      category: 'back',
      difficulty: 'Advanced',
      duration: '3 sets x 5-12 reps',
      muscles: ['Lats', 'Biceps', 'Rhomboids'],
      equipment: 'Pull-up Bar',
      description: 'Ultimate upper body pulling exercise for a powerful V-shaped torso.',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=300&fit=crop',
      rating: 4.7,
      calories: 250
    },
    {
      id: 8,
      name: 'Bicep Curls',
      category: 'arms',
      difficulty: 'Beginner',
      duration: '3 sets x 12-15 reps',
      muscles: ['Biceps', 'Forearms'],
      equipment: 'Dumbbells',
      description: 'Isolation exercise for building impressive bicep peaks and arm definition.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
      rating: 4.2,
      calories: 140
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'ep-success';
      case 'Intermediate': return 'ep-warning';
      case 'Advanced': return 'ep-danger';
      default: return 'ep-primary';
    }
  };

  const toggleFavorite = (exerciseId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(exerciseId)) {
      newFavorites.delete(exerciseId);
      showToastMessage('Removed from favorites', 'error');
    } else {
      newFavorites.add(exerciseId);
      showToastMessage('Added to favorites!', 'success');
    }
    setFavorites(newFavorites);
  };

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleStartExercise = (exerciseId) => {
    showToastMessage('Starting exercise session...', 'success');
    setTimeout(() => {
      navigate(`/workout-session/${exerciseId}`);
    }, 1000);
  };

  const getTotalStats = () => {
    return {
      total: exercises.length,
      beginner: exercises.filter(ex => ex.difficulty === 'Beginner').length,
      intermediate: exercises.filter(ex => ex.difficulty === 'Intermediate').length,
      advanced: exercises.filter(ex => ex.difficulty === 'Advanced').length,
      avgCalories: Math.round(exercises.reduce((acc, ex) => acc + ex.calories, 0) / exercises.length)
    };
  };

  const stats = getTotalStats();

  // Générer des éléments flottants 3D
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 4; i++) {
      elements.push(
        <div key={i} className="ep-floating-shape"></div>
      );
    }
    return elements;
  };

  return (
    <div className="exercises-page ep-gpu-accelerated">
      {/* Éléments flottants 3D */}
      <div className="ep-floating-elements">
        {generateFloatingElements()}
      </div>

      {/* Toast Notifications */}
      <div className={`ep-toast ep-${toastType} ${showToast ? 'ep-show' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className={`fas ${toastType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
          <span style={{ fontWeight: '600' }}>{toastMessage}</span>
        </div>
      </div>

      {/* Header avec effet 3D */}
      <div className="ep-page-header">
        <div className="ep-header-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h1 className="ep-header-title">Exercices</h1>
              <p className="ep-header-subtitle">
                Découvrez la collection ultime d'exercices pour transformer votre parcours de remise en forme en une aventure épique.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="ep-btn-secondary-3d ep-glass-effect">
                <i className="fas fa-plus"></i>
              </button>
              <button className="ep-btn-primary-3d">
                <i className="fas fa-bookmark" style={{ marginRight: '0.5rem' }}></i>
                Favorites ({favorites.size})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ep-container">
        {/* Section de recherche */}
        <div className="ep-search-section">
          <div className="ep-search-container">
            <div className="ep-search-wrapper">
              <i className="fas fa-search ep-search-icon"></i>
              <input
                type="text"
                className="ep-search-input"
                placeholder="Search exercises, muscles, equipment, or difficulty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Catégories avec effet 3D */}
        <div className="ep-categories-section">
          <div className="ep-categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`ep-category-btn ep-interactive ${
                  selectedCategory === category.id ? 'ep-active' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={`${category.icon} ep-category-icon`}></i>
                <span className="ep-category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Header des résultats */}
        <div className="ep-results-header">
          <div>
            <h2 className="ep-results-title">
              {filteredExercises.length} Exercise{filteredExercises.length !== 1 ? 's' : ''} Found
            </h2>
          </div>
          <div className="ep-view-toggle">
            <button
              className={viewMode === 'grid' ? 'ep-active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <i className="fas fa-th-large" style={{ marginRight: '0.5rem' }}></i>Grid
            </button>
            <button
              className={viewMode === 'list' ? 'ep-active' : ''}
              onClick={() => setViewMode('list')}
            >
              <i className="fas fa-list" style={{ marginRight: '0.5rem' }}></i>List
            </button>
          </div>
        </div>

        {/* Grille d'exercices */}
        {filteredExercises.length > 0 ? (
          <div className="ep-exercises-grid">
            <div className="ep-exercises-row">
              {filteredExercises.map(exercise => (
                <div key={exercise.id} className="ep-exercise-card">
                  <div className="ep-card-image-container">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="ep-card-image"
                    />
                    <div className="ep-card-overlay">
                      <span className={`ep-difficulty-badge ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                      <button 
                        className={`ep-favorite-btn ${favorites.has(exercise.id) ? 'ep-active' : ''}`}
                        onClick={() => toggleFavorite(exercise.id)}
                      >
                        <i className={`${favorites.has(exercise.id) ? 'fas' : 'far'} fa-heart`}></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="ep-card-body">
                    <h5 className="ep-card-title">{exercise.name}</h5>
                    <p className="ep-card-description">{exercise.description}</p>
                    
                    <div className="ep-exercise-details">
                      <div className="ep-details-grid">
                        <div className="ep-detail-item">
                          <div className="ep-detail-label">Duration</div>
                          <div className="ep-detail-value">{exercise.duration}</div>
                        </div>
                        <div className="ep-detail-item">
                          <div className="ep-detail-label">Equipment</div>
                          <div className="ep-detail-value">{exercise.equipment}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ep-muscles-section">
                      <span className="ep-muscles-label">Target Muscles</span>
                      <div className="ep-muscles-container">
                        {exercise.muscles.map((muscle, index) => (
                          <span key={index} className="ep-muscle-tag">
                            {muscle}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="ep-card-footer">
                    <div className="ep-card-actions">
                      <button 
                        className="ep-btn-primary-3d"
                        onClick={() => handleStartExercise(exercise.id)}
                      >
                        <i className="fas fa-play" style={{ marginRight: '0.5rem' }}></i>
                        Start Exercise
                      </button>
                      <button className="ep-btn-secondary-3d">
                        <i className="fas fa-info-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Section "Aucun résultat" */
          <div className="ep-no-results">
            <div className="ep-no-results-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="ep-no-results-title">No Exercises Found</h3>
            <p className="ep-no-results-description">
              Your search didn't match any exercises in our galaxy. Try adjusting your search terms or category filter to discover new workout possibilities.
            </p>
            <button 
              className="ep-clear-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                showToastMessage('Filters cleared!', 'success');
              }}
            >
              <i className="fas fa-refresh" style={{ marginRight: '0.5rem' }}></i>
              Clear All Filters
            </button>
          </div>
        )}

        {/* Section statistiques */}
        <div className="ep-stats-section">
          <div className="ep-stats-grid">
            <div className="ep-stat-card">
              <div className="ep-stat-number">{stats.total}</div>
              <div className="ep-stat-label">Total Exercises</div>
            </div>
            <div className="ep-stat-card">
              <div className="ep-stat-number">{stats.beginner}</div>
              <div className="ep-stat-label">Beginner</div>
            </div>
            <div className="ep-stat-card">
              <div className="ep-stat-number">{stats.intermediate}</div>
              <div className="ep-stat-label">Intermediate</div>
            </div>
            <div className="ep-stat-card">
              <div className="ep-stat-number">{stats.advanced}</div>
              <div className="ep-stat-label">Advanced</div>
            </div>
            <div className="ep-stat-card">
              <div className="ep-stat-number">{stats.avgCalories}</div>
              <div className="ep-stat-label">Avg Calories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;