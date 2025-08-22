// // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import './ExerciseSession.css';
// // import { 
// //   Play, 
// //   Pause, 
// //   ChevronLeft, 
// //   ChevronRight, 
// //   Home, 
// //   RotateCcw,
// //   Volume2,
// //   VolumeX 
// // } from 'lucide-react';
// // import workoutsData, { getWorkoutById } from './exerciseData';

// // function ExerciseSessionPage() {
// //   // ===== ROUTING =====
// //   const navigate = useNavigate();
// //   const { workoutId } = useParams();
  
// //   // ===== REFS =====
// //   const videoRef = useRef(null);
  
// //   // ===== STATE MANAGEMENT =====
// //   const currentWorkout = getWorkoutById(parseInt(workoutId) || 1) || workoutsData[0];
  
// //   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
// //   const [timeLeft, setTimeLeft] = useState(currentWorkout.tasks[0].time);
// //   const [isActive, setIsActive] = useState(false);
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [soundEnabled, setSoundEnabled] = useState(true);
  
// //   // ===== NOUVEAU: États pour la vidéo =====
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const [videoError, setVideoError] = useState(false);

// //   // ===== COMPUTED VALUES =====
// //   const currentTask = currentWorkout.tasks[currentTaskIndex];
// //   const isFirstTask = currentTaskIndex === 0;
// //   const isLastTask = currentTaskIndex === currentWorkout.tasks.length - 1;
// //   const isLowTime = timeLeft <= 10 && timeLeft > 0;

// //   // ===== VIDEO MANAGEMENT =====
// //   const handleVideoPlay = useCallback(() => {
// //     if (videoRef.current) {
// //       if (isVideoPlaying) {
// //         videoRef.current.pause();
// //       } else {
// //         videoRef.current.play().catch(error => {
// //           console.error('Erreur lors de la lecture vidéo:', error);
// //           setVideoError(true);
// //         });
// //       }
// //     }
// //   }, [isVideoPlaying]);

// //   const handleVideoLoadError = useCallback(() => {
// //     setVideoError(true);
// //     console.error('Erreur de chargement vidéo:', currentTask.videoUrl);
// //   }, [currentTask.videoUrl]);

// //   const handleVideoLoadSuccess = useCallback(() => {
// //     setVideoError(false);
// //   }, []);

// //   // ===== SOUND MANAGEMENT =====
// //   const playSound = useCallback((type) => {
// //     if (!soundEnabled) return;
    
// //     try {
// //       const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// //       const oscillator = audioContext.createOscillator();
// //       const gainNode = audioContext.createGain();
      
// //       oscillator.connect(gainNode);
// //       gainNode.connect(audioContext.destination);
      
// //       switch (type) {
// //         case 'start':
// //           oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
// //           break;
// //         case 'pause':
// //           oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
// //           break;
// //         case 'finish':
// //           oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
// //           break;
// //         case 'warning':
// //           oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
// //           break;
// //         default:
// //           return;
// //       }
      
// //       oscillator.start();
// //       oscillator.stop(audioContext.currentTime + 0.2);
// //     } catch (error) {
// //       console.log('Audio not supported:', error);
// //     }
// //   }, [soundEnabled]);

// //   // ===== EFFECTS =====
  
// //   // Timer countdown effect
// //   useEffect(() => {
// //     let interval = null;
    
// //     if (isActive && timeLeft > 0 && !isFinished) {
// //       interval = setInterval(() => {
// //         setTimeLeft(time => {
// //           const newTime = time - 1;
          
// //           if (newTime === 10) {
// //             playSound('warning');
// //           }
          
// //           return newTime;
// //         });
// //       }, 1000);
// //     } else if (timeLeft === 0 && isActive && !isFinished) {
// //       playSound('finish');
      
// //       if (!isLastTask) {
// //         setCurrentTaskIndex(prev => prev + 1);
// //       } else {
// //         setIsFinished(true);
// //         setIsActive(false);
// //       }
// //     }
    
// //     return () => {
// //       if (interval) {
// //         clearInterval(interval);
// //       }
// //     };
// //   }, [isActive, timeLeft, isLastTask, isFinished, playSound]);

// //   // Reset timer when task changes
// //   useEffect(() => {
// //     if (!isFinished && currentTask) {
// //       setTimeLeft(currentTask.time);
// //       setIsActive(false);
      
// //       // Reset video state when changing tasks
// //       setIsVideoPlaying(false);
// //       setVideoError(false);
      
// //       // Pause video if playing
// //       if (videoRef.current) {
// //         videoRef.current.pause();
// //         videoRef.current.currentTime = 0;
// //       }
// //     }
// //   }, [currentTaskIndex, currentTask?.time, isFinished]);

// //   // Video event listeners
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const handlePlay = () => setIsVideoPlaying(true);
// //     const handlePause = () => setIsVideoPlaying(false);
// //     const handleEnded = () => setIsVideoPlaying(false);

// //     video.addEventListener('play', handlePlay);
// //     video.addEventListener('pause', handlePause);
// //     video.addEventListener('ended', handleEnded);
// //     video.addEventListener('loadeddata', handleVideoLoadSuccess);
// //     video.addEventListener('error', handleVideoLoadError);

// //     return () => {
// //       video.removeEventListener('play', handlePlay);
// //       video.removeEventListener('pause', handlePause);
// //       video.removeEventListener('ended', handleEnded);
// //       video.removeEventListener('loadeddata', handleVideoLoadSuccess);
// //       video.removeEventListener('error', handleVideoLoadError);
// //     };
// //   }, [handleVideoLoadError, handleVideoLoadSuccess]);

// //   // ===== EVENT HANDLERS =====
  
// //   const handleNext = useCallback(() => {
// //     if (isLastTask) {
// //       setIsFinished(true);
// //       setIsActive(false);
// //       playSound('finish');
// //     } else {
// //       setCurrentTaskIndex(prev => prev + 1);
// //     }
// //   }, [isLastTask, playSound]);

// //   const handlePrev = useCallback(() => {
// //     if (!isFirstTask) {
// //       setCurrentTaskIndex(prev => prev - 1);
// //     }
// //   }, [isFirstTask]);

// //   const handlePlayPause = useCallback(() => {
// //     const newActiveState = !isActive;
// //     setIsActive(newActiveState);
// //     playSound(newActiveState ? 'start' : 'pause');
// //   }, [isActive, playSound]);

// //   const handleRestart = useCallback(() => {
// //     setTimeLeft(currentTask.time);
// //     setIsActive(false);
// //     playSound('start');
// //   }, [currentTask.time, playSound]);

// //   const handleGoHome = useCallback(() => {
// //     navigate('/dashboard');
// //   }, [navigate]);

// //   const handleContinue = useCallback(() => {
// //     navigate('/exercises');
// //   }, [navigate]);

// //   const handleRestartWorkout = useCallback(() => {
// //     setCurrentTaskIndex(0);
// //     setTimeLeft(currentWorkout.tasks[0].time);
// //     setIsActive(false);
// //     setIsFinished(false);
// //   }, [currentWorkout.tasks]);

// //   const toggleSound = useCallback(() => {
// //     setSoundEnabled(prev => !prev);
// //   }, []);

// //   // ===== UTILITY FUNCTIONS =====
  
// //   const formatTime = useCallback((seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   }, []);

// //   const getProgressPercentage = useCallback(() => {
// //     return ((currentTaskIndex + 1) / currentWorkout.tasks.length) * 100;
// //   }, [currentTaskIndex, currentWorkout.tasks.length]);

// //   const getTimeProgressPercentage = useCallback(() => {
// //     if (!currentTask.time) return 0;
// //     return ((currentTask.time - timeLeft) / currentTask.time) * 100;
// //   }, [currentTask.time, timeLeft]);

// //   const getSessionProgress = useCallback(() => {
// //     const totalTime = currentWorkout.tasks.reduce((sum, task) => sum + task.time, 0);
// //     const completedTime = currentWorkout.tasks
// //       .slice(0, currentTaskIndex)
// //       .reduce((sum, task) => sum + task.time, 0) + (currentTask.time - timeLeft);
// //     return Math.min((completedTime / totalTime) * 100, 100);
// //   }, [currentWorkout.tasks, currentTaskIndex, currentTask.time, timeLeft]);

// //   const getTotalTimeRemaining = useCallback(() => {
// //     const remainingTasks = currentWorkout.tasks.slice(currentTaskIndex + 1);
// //     const remainingTime = remainingTasks.reduce((sum, task) => sum + task.time, 0);
// //     return timeLeft + remainingTime;
// //   }, [currentWorkout.tasks, currentTaskIndex, timeLeft]);

// //   // Vérification de sécurité
// //   if (!currentTask) {
// //     return (
// //       <div className="exercise-session-container">
// //         <div className="error-state">
// //           <h2>❌ Erreur</h2>
// //           <p>Exercice non trouvé</p>
// //           <button onClick={handleGoHome} className="btn-primary-custom">
// //             Retour à l'accueil
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===== RENDER COMPLETION SCREEN =====
// //   if (isFinished) {
// //     return (
// //       <div className="completion-screen">
// //         <div className="completion-card">
// //           <div className="completion-emoji">🎉</div>
          
// //           <h1 className="completion-title">
// //             Session Complete!
// //           </h1>
          
// //           <p className="text-gray-600 mb-2 font-semibold">
// //             {currentWorkout.name}
// //           </p>
          
// //           <p className="text-gray-500 mb-8 leading-relaxed">
// //             Félicitations ! Vous avez terminé tous les {currentWorkout.tasks.length} exercices. 
// //             Continuez comme ça ! 💪
// //           </p>
          
// //           <div className="completion-actions">
// //             <button
// //               onClick={handleGoHome}
// //               className="completion-button bg-blue-600 hover:bg-blue-700 text-white"
// //             >
// //               <Home size={20} />
// //               Accueil
// //             </button>
            
// //             <button
// //               onClick={handleContinue}
// //               className="completion-button bg-green-600 hover:bg-green-700 text-white"
// //             >
// //               Autres Exercices
// //             </button>
            
// //             <button
// //               onClick={handleRestartWorkout}
// //               className="completion-button bg-gray-600 hover:bg-gray-700 text-white"
// //             >
// //               <RotateCcw size={20} />
// //               Refaire la Session
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===== RENDER MAIN INTERFACE =====
// //   return (
// //     <div className="exercise-session-container">
      
// //       {/* ===== HEADER WITH PROGRESS ===== */}
// //       <div className="exercise-header px-4 py-3">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="flex items-center justify-between mb-2">
// //             <h1 className="text-lg font-semibold text-gray-800">
// //               {currentWorkout.name}
// //             </h1>
// //             <div className="flex items-center gap-4">
// //               <div className="text-sm text-gray-500">
// //                 {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
// //               </div>
              
// //               <button
// //                 onClick={toggleSound}
// //                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// //                 title={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
// //               >
// //                 {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className="progress-bar mb-2">
// //             <div 
// //               className="progress-bar-fill"
// //               style={{ width: `${getProgressPercentage()}%` }}
// //             />
// //           </div>
          
// //           <div className="text-xs text-gray-500 mb-1">
// //             Progression globale: {Math.round(getSessionProgress())}%
// //           </div>
// //           <div className="progress-bar session-progress">
// //             <div 
// //               className="progress-bar-fill session-fill"
// //               style={{ width: `${getSessionProgress()}%` }}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-4xl mx-auto p-4">
        
// //         {/* ===== EXERCISE TITLE ===== */}
// //         <div className="exercise-title text-center mb-6">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-2">
// //             {currentTask.name}
// //           </h2>
// //           <p className="text-gray-600">
// //             Exercice {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
// //           </p>
          
// //           <p className="text-sm text-gray-500 mt-2">
// //             Temps total restant: {formatTime(getTotalTimeRemaining())}
// //           </p>
// //         </div>

// //         {/* ===== VIDEO AREA - VERSION CORRIGÉE ===== */}
// //         <div className="video-container mb-6">
// //           {!videoError && currentTask.videoUrl ? (
// //             <div className="relative">
// //               <video
// //                 ref={videoRef}
// //                 className="w-full h-full object-cover"
// //                 poster="/videos/thumbnail-default.jpg" // Image par défaut (optionnel)
// //                 preload="metadata"
// //                 loop
// //               >
// //                 <source src={currentTask.videoUrl} type="video/mp4" />
// //                 <p className="text-white text-center p-4">
// //                   Votre navigateur ne supporte pas la lecture vidéo.
// //                 </p>
// //               </video>
              
// //               {/* Overlay avec bouton play/pause */}
// //               <div 
// //                 className="video-overlay"
// //                 onClick={handleVideoPlay}
// //                 style={{ cursor: 'pointer' }}
// //               >
// //                 <div className="play-button">
// //                   {isVideoPlaying ? (
// //                     <Pause size={48} className="text-white" />
// //                   ) : (
// //                     <Play size={48} className="text-white" />
// //                   )}
// //                 </div>
// //               </div>
              
// //               {/* Indicateur de lecture */}
// //               {isVideoPlaying && (
// //                 <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
// //                   ● EN DIRECT
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             // Fallback si vidéo non disponible
// //             <div className="text-center text-white">
// //               <div className="text-4xl mb-2">
// //                 {videoError ? '❌' : '🎥'}
// //               </div>
// //               <p className="text-sm opacity-75">
// //                 {videoError 
// //                   ? 'Vidéo non disponible' 
// //                   : 'Démonstration de l\'exercice'
// //                 }
// //               </p>
// //               <p className="text-xs opacity-50 mt-1 px-4 break-all">
// //                 {currentTask.videoUrl}
// //               </p>
              
// //               {videoError && (
// //                 <button
// //                   onClick={() => setVideoError(false)}
// //                   className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
// //                 >
// //                   Réessayer
// //                 </button>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         {/* ===== TIMER SECTION ===== */}
// //         <div className={`timer-section mb-6 ${isActive ? 'active' : ''}`}>
// //           <div 
// //             className={`timer-display ${isActive ? 'active' : ''} ${isLowTime ? 'warning' : ''}`}
// //           >
// //             {formatTime(timeLeft)}
// //           </div>
          
// //           <div className="timer-controls">
// //             <button
// //               onClick={handlePlayPause}
// //               className={`control-button ${
// //                 isActive ? 'pause-button-control' : 'play-button-control'
// //               }`}
// //             >
// //               {isActive ? <Pause size={20} /> : <Play size={20} />}
// //               {isActive ? 'Pause' : 'Démarrer'}
// //             </button>
            
// //             <button
// //               onClick={handleRestart}
// //               className="control-button reset-button-control"
// //             >
// //               <RotateCcw size={20} />
// //               Reset
// //             </button>
// //           </div>
          
// //           <div className="time-progress-bar">
// //             <div 
// //               className="time-progress-fill"
// //               style={{ width: `${getTimeProgressPercentage()}%` }}
// //             />
// //           </div>
          
// //           <div className="timer-status mt-4">
// //             <div className={`status-indicator ${isActive ? 'active' : 'paused'}`}>
// //               <span className="status-dot"></span>
// //               {isActive ? 'En cours' : 'En pause'}
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== EXERCISE DESCRIPTION ===== */}
// //         <div className="description-section mb-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //             Comment effectuer l'exercice :
// //           </h3>
// //           <p className="text-gray-600 leading-relaxed">
// //             {currentTask.description}
// //           </p>
          
// //           {isLowTime && (
// //             <div className="warning-message mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
// //               <p className="text-yellow-800">
// //                 ⚠️ Plus que {timeLeft} seconde{timeLeft > 1 ? 's' : ''} !
// //               </p>
// //             </div>
// //           )}
// //         </div>

// //         {/* ===== NAVIGATION CONTROLS ===== */}
// //         <div className="navigation-controls">
// //           <button
// //             onClick={handlePrev}
// //             disabled={isFirstTask}
// //             className={`nav-button prev-button ${
// //               isFirstTask ? 'opacity-50 cursor-not-allowed' : ''
// //             }`}
// //           >
// //             <ChevronLeft size={20} />
// //             Précédent
// //           </button>
          
// //           <button
// //             onClick={handleNext}
// //             className="nav-button next-button"
// //           >
// //             {isLastTask ? 'Terminer' : 'Suivant'}
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         {/* ===== WORKOUT STATS ===== */}
// //         <div className="workout-stats">
// //           <div className="stats-grid">
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.tasks.length}
// //               </div>
// //               <div className="stat-label">Exercices</div>
// //             </div>
            
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.duration}
// //               </div>
// //               <div className="stat-label">Durée</div>
// //             </div>
            
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.difficulty}
// //               </div>
// //               <div className="stat-label">Niveau</div>
// //             </div>
// //           </div>
// //         </div>
        
// //       </div>
// //     </div>
// //   );
// // }

// // export default ExerciseSessionPage;

// // ExerciseSessionPage.js - Version avec vidéos fonctionnelles corrigées
// // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import './ExerciseSession.css';
// // import { 
// //   Play, 
// //   Pause, 
// //   ChevronLeft, 
// //   ChevronRight, 
// //   Home, 
// //   RotateCcw,
// //   Volume2,
// //   VolumeX 
// // } from 'lucide-react';
// // import workoutsData, { getWorkoutById } from './exerciseData';

// // function ExerciseSessionPage() {
// //   // ===== ROUTING =====
// //   const navigate = useNavigate();
// //   const { workoutId } = useParams();
  
// //   // ===== REFS =====
// //   const videoRef = useRef(null);
  
// //   // ===== STATE MANAGEMENT =====
// //   const currentWorkout = getWorkoutById(parseInt(workoutId) || 1) || workoutsData[0];
  
// //   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
// //   const [timeLeft, setTimeLeft] = useState(currentWorkout.tasks[0].time);
// //   const [isActive, setIsActive] = useState(false);
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [soundEnabled, setSoundEnabled] = useState(true);
  
// //   // ===== NOUVEAU: États pour la vidéo =====
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const [videoError, setVideoError] = useState(false);
// //   const [videoLoaded, setVideoLoaded] = useState(false);

// //   // ===== COMPUTED VALUES =====
// //   const currentTask = currentWorkout.tasks[currentTaskIndex];
// //   const isFirstTask = currentTaskIndex === 0;
// //   const isLastTask = currentTaskIndex === currentWorkout.tasks.length - 1;
// //   const isLowTime = timeLeft <= 10 && timeLeft > 0;

// //   // ===== VIDEO MANAGEMENT =====
// //   const resetVideo = useCallback(() => {
// //     setIsVideoPlaying(false);
// //     setVideoError(false);
// //     setVideoLoaded(false);
    
// //     if (videoRef.current) {
// //       videoRef.current.pause();
// //       videoRef.current.currentTime = 0;
// //       // IMPORTANT: Forcer le rechargement de la nouvelle source
// //       videoRef.current.load();
// //     }
// //   }, []);

// //   const handleVideoPlay = useCallback(() => {
// //     if (videoRef.current) {
// //       if (isVideoPlaying) {
// //         videoRef.current.pause();
// //       } else {
// //         videoRef.current.play().catch(error => {
// //           console.error('Erreur lors de la lecture vidéo:', error);
// //           setVideoError(true);
// //         });
// //       }
// //     }
// //   }, [isVideoPlaying]);

// //   const handleVideoLoadError = useCallback(() => {
// //     setVideoError(true);
// //     setVideoLoaded(false);
// //     console.error('Erreur de chargement vidéo:', currentTask.videoUrl);
// //   }, [currentTask.videoUrl]);

// //   const handleVideoLoadSuccess = useCallback(() => {
// //     setVideoError(false);
// //     setVideoLoaded(true);
// //   }, []);

// //   // ===== SOUND MANAGEMENT =====
// //   const playSound = useCallback((type) => {
// //     if (!soundEnabled) return;
    
// //     try {
// //       const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// //       const oscillator = audioContext.createOscillator();
// //       const gainNode = audioContext.createGain();
      
// //       oscillator.connect(gainNode);
// //       gainNode.connect(audioContext.destination);
      
// //       switch (type) {
// //         case 'start':
// //           oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
// //           break;
// //         case 'pause':
// //           oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
// //           break;
// //         case 'finish':
// //           oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
// //           break;
// //         case 'warning':
// //           oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
// //           gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
// //           break;
// //         default:
// //           return;
// //       }
      
// //       oscillator.start();
// //       oscillator.stop(audioContext.currentTime + 0.2);
// //     } catch (error) {
// //       console.log('Audio not supported:', error);
// //     }
// //   }, [soundEnabled]);

// //   // ===== EFFECTS =====
  
// //   // Timer countdown effect
// //   useEffect(() => {
// //     let interval = null;
    
// //     if (isActive && timeLeft > 0 && !isFinished) {
// //       interval = setInterval(() => {
// //         setTimeLeft(time => {
// //           const newTime = time - 1;
          
// //           if (newTime === 10) {
// //             playSound('warning');
// //           }
          
// //           return newTime;
// //         });
// //       }, 1000);
// //     } else if (timeLeft === 0 && isActive && !isFinished) {
// //       playSound('finish');
      
// //       if (!isLastTask) {
// //         setCurrentTaskIndex(prev => prev + 1);
// //       } else {
// //         setIsFinished(true);
// //         setIsActive(false);
// //       }
// //     }
    
// //     return () => {
// //       if (interval) {
// //         clearInterval(interval);
// //       }
// //     };
// //   }, [isActive, timeLeft, isLastTask, isFinished, playSound]);

// //   // ===== CORRECTION PRINCIPALE: Reset timer ET video when task changes =====
// //   useEffect(() => {
// //     if (!isFinished && currentTask) {
// //       setTimeLeft(currentTask.time);
// //       setIsActive(false);
      
// //       // CORRECTION: Reset complet de la vidéo lors du changement d'exercice
// //       resetVideo();
// //     }
// //   }, [currentTaskIndex, currentTask?.time, isFinished, resetVideo]);

// //   // Video event listeners - mise à jour pour gérer le changement d'exercice
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const handlePlay = () => setIsVideoPlaying(true);
// //     const handlePause = () => setIsVideoPlaying(false);
// //     const handleEnded = () => setIsVideoPlaying(false);
// //     const handleLoadStart = () => {
// //       setVideoLoaded(false);
// //       setVideoError(false);
// //     };

// //     video.addEventListener('play', handlePlay);
// //     video.addEventListener('pause', handlePause);
// //     video.addEventListener('ended', handleEnded);
// //     video.addEventListener('loadstart', handleLoadStart);
// //     video.addEventListener('loadeddata', handleVideoLoadSuccess);
// //     video.addEventListener('error', handleVideoLoadError);

// //     return () => {
// //       video.removeEventListener('play', handlePlay);
// //       video.removeEventListener('pause', handlePause);
// //       video.removeEventListener('ended', handleEnded);
// //       video.removeEventListener('loadstart', handleLoadStart);
// //       video.removeEventListener('loadeddata', handleVideoLoadSuccess);
// //       video.removeEventListener('error', handleVideoLoadError);
// //     };
// //   }, [handleVideoLoadError, handleVideoLoadSuccess]);

// //   // ===== EVENT HANDLERS =====
  
// //   const handleNext = useCallback(() => {
// //     if (isLastTask) {
// //       setIsFinished(true);
// //       setIsActive(false);
// //       playSound('finish');
// //     } else {
// //       setCurrentTaskIndex(prev => prev + 1);
// //     }
// //   }, [isLastTask, playSound]);

// //   const handlePrev = useCallback(() => {
// //     if (!isFirstTask) {
// //       setCurrentTaskIndex(prev => prev - 1);
// //     }
// //   }, [isFirstTask]);

// //   const handlePlayPause = useCallback(() => {
// //     const newActiveState = !isActive;
// //     setIsActive(newActiveState);
// //     playSound(newActiveState ? 'start' : 'pause');
// //   }, [isActive, playSound]);

// //   const handleRestart = useCallback(() => {
// //     setTimeLeft(currentTask.time);
// //     setIsActive(false);
// //     playSound('start');
// //   }, [currentTask.time, playSound]);

// //   const handleGoHome = useCallback(() => {
// //     navigate('/dashboard');
// //   }, [navigate]);

// //   const handleContinue = useCallback(() => {
// //     navigate('/exercises');
// //   }, [navigate]);

// //   const handleRestartWorkout = useCallback(() => {
// //     setCurrentTaskIndex(0);
// //     setTimeLeft(currentWorkout.tasks[0].time);
// //     setIsActive(false);
// //     setIsFinished(false);
// //   }, [currentWorkout.tasks]);

// //   const toggleSound = useCallback(() => {
// //     setSoundEnabled(prev => !prev);
// //   }, []);

// //   // ===== UTILITY FUNCTIONS =====
  
// //   const formatTime = useCallback((seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   }, []);

// //   const getProgressPercentage = useCallback(() => {
// //     return ((currentTaskIndex + 1) / currentWorkout.tasks.length) * 100;
// //   }, [currentTaskIndex, currentWorkout.tasks.length]);

// //   const getTimeProgressPercentage = useCallback(() => {
// //     if (!currentTask.time) return 0;
// //     return ((currentTask.time - timeLeft) / currentTask.time) * 100;
// //   }, [currentTask.time, timeLeft]);

// //   const getSessionProgress = useCallback(() => {
// //     const totalTime = currentWorkout.tasks.reduce((sum, task) => sum + task.time, 0);
// //     const completedTime = currentWorkout.tasks
// //       .slice(0, currentTaskIndex)
// //       .reduce((sum, task) => sum + task.time, 0) + (currentTask.time - timeLeft);
// //     return Math.min((completedTime / totalTime) * 100, 100);
// //   }, [currentWorkout.tasks, currentTaskIndex, currentTask.time, timeLeft]);

// //   const getTotalTimeRemaining = useCallback(() => {
// //     const remainingTasks = currentWorkout.tasks.slice(currentTaskIndex + 1);
// //     const remainingTime = remainingTasks.reduce((sum, task) => sum + task.time, 0);
// //     return timeLeft + remainingTime;
// //   }, [currentWorkout.tasks, currentTaskIndex, timeLeft]);

// //   // Vérification de sécurité
// //   if (!currentTask) {
// //     return (
// //       <div className="exercise-session-container">
// //         <div className="error-state">
// //           <h2>❌ Erreur</h2>
// //           <p>Exercice non trouvé</p>
// //           <button onClick={handleGoHome} className="btn-primary-custom">
// //             Retour à l'accueil
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===== RENDER COMPLETION SCREEN =====
// //   if (isFinished) {
// //     return (
// //       <div className="completion-screen">
// //         <div className="completion-card">
// //           <div className="completion-emoji">🎉</div>
          
// //           <h1 className="completion-title">
// //             Session Complete!
// //           </h1>
          
// //           <p className="text-gray-600 mb-2 font-semibold">
// //             {currentWorkout.name}
// //           </p>
          
// //           <p className="text-gray-500 mb-8 leading-relaxed">
// //             Félicitations ! Vous avez terminé tous les {currentWorkout.tasks.length} exercices. 
// //             Continuez comme ça ! 💪
// //           </p>
          
// //           <div className="completion-actions">
// //             <button
// //               onClick={handleGoHome}
// //               className="completion-button bg-blue-600 hover:bg-blue-700 text-white"
// //             >
// //               <Home size={20} />
// //               Accueil
// //             </button>
            
// //             <button
// //               onClick={handleContinue}
// //               className="completion-button bg-green-600 hover:bg-green-700 text-white"
// //             >
// //               Autres Exercices
// //             </button>
            
// //             <button
// //               onClick={handleRestartWorkout}
// //               className="completion-button bg-gray-600 hover:bg-gray-700 text-white"
// //             >
// //               <RotateCcw size={20} />
// //               Refaire la Session
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===== RENDER MAIN INTERFACE =====
// //   return (
// //     <div className="exercise-session-container">
      
// //       {/* ===== HEADER WITH PROGRESS ===== */}
// //       <div className="exercise-header px-4 py-3">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="flex items-center justify-between mb-2">
// //             <h1 className="text-lg font-semibold text-gray-800">
// //               {currentWorkout.name}
// //             </h1>
// //             <div className="flex items-center gap-4">
// //               <div className="text-sm text-gray-500">
// //                 {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
// //               </div>
              
// //               <button
// //                 onClick={toggleSound}
// //                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
// //                 title={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
// //               >
// //                 {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className="progress-bar mb-2">
// //             <div 
// //               className="progress-bar-fill"
// //               style={{ width: `${getProgressPercentage()}%` }}
// //             />
// //           </div>
          
// //           <div className="text-xs text-gray-500 mb-1">
// //             Progression globale: {Math.round(getSessionProgress())}%
// //           </div>
// //           <div className="progress-bar session-progress">
// //             <div 
// //               className="progress-bar-fill session-fill"
// //               style={{ width: `${getSessionProgress()}%` }}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-4xl mx-auto p-4">
        
// //         {/* ===== EXERCISE TITLE ===== */}
// //         <div className="exercise-title text-center mb-6">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-2">
// //             {currentTask.name}
// //           </h2>
// //           <p className="text-gray-600">
// //             Exercice {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
// //           </p>
          
// //           <p className="text-sm text-gray-500 mt-2">
// //             Temps total restant: {formatTime(getTotalTimeRemaining())}
// //           </p>
// //         </div>

// //         {/* ===== VIDEO AREA - VERSION CORRIGÉE ===== */}
// //         <div className="video-container mb-6">
// //           {currentTask.videoUrl ? (
// //             <div className="relative">
// //               {/* CORRECTION: Ajout d'une clé unique pour forcer le re-render */}
// //               <video
// //                 key={`video-${currentTaskIndex}-${currentTask.id}`} // 🔥 CLÉ UNIQUE !
// //                 ref={videoRef}
// //                 className="w-full h-full object-cover"
// //                 poster="/videos/thumbnail-default.jpg"
// //                 preload="metadata"
// //                 loop
// //                 onLoadedData={handleVideoLoadSuccess}
// //                 onError={handleVideoLoadError}
// //                 onPlay={() => setIsVideoPlaying(true)}
// //                 onPause={() => setIsVideoPlaying(false)}
// //                 onEnded={() => setIsVideoPlaying(false)}
// //               >
// //                 <source src={currentTask.videoUrl} type="video/mp4" />
// //                 <p className="text-white text-center p-4">
// //                   Votre navigateur ne supporte pas la lecture vidéo.
// //                 </p>
// //               </video>
              
// //               {/* Overlay avec bouton play/pause */}
// //               <div 
// //                 className="video-overlay"
// //                 onClick={handleVideoPlay}
// //                 style={{ cursor: 'pointer' }}
// //               >
// //                 <div className="play-button">
// //                   {isVideoPlaying ? (
// //                     <Pause size={48} className="text-white" />
// //                   ) : (
// //                     <Play size={48} className="text-white" />
// //                   )}
// //                 </div>
// //               </div>
              
// //               {/* Indicateur de lecture */}
// //               {isVideoPlaying && (
// //                 <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
// //                   ● EN COURS
// //                 </div>
// //               )}
              
// //               {/* Indicateur de chargement */}
// //               {!videoLoaded && !videoError && (
// //                 <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm">
// //                   Chargement...
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             // Fallback si pas de vidéo
// //             <div className="text-center text-white">
// //               <div className="text-4xl mb-2">🎯</div>
// //               <p className="text-sm opacity-75">
// //                 Exercice sans vidéo
// //               </p>
// //               <p className="text-xs opacity-50 mt-1">
// //                 Suivez les instructions ci-dessous
// //               </p>
// //             </div>
// //           )}
          
// //           {/* Message d'erreur vidéo */}
// //           {videoError && (
// //             <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
// //               <div className="text-center text-white p-4">
// //                 <div className="text-4xl mb-2">❌</div>
// //                 <p className="text-sm mb-3">Vidéo non disponible</p>
// //                 <button
// //                   onClick={() => {
// //                     setVideoError(false);
// //                     resetVideo();
// //                   }}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
// //                 >
// //                   Réessayer
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* ===== TIMER SECTION ===== */}
// //         <div className={`timer-section mb-6 ${isActive ? 'active' : ''}`}>
// //           <div 
// //             className={`timer-display ${isActive ? 'active' : ''} ${isLowTime ? 'warning' : ''}`}
// //           >
// //             {formatTime(timeLeft)}
// //           </div>
          
// //           <div className="timer-controls">
// //             <button
// //               onClick={handlePlayPause}
// //               className={`control-button ${
// //                 isActive ? 'pause-button-control' : 'play-button-control'
// //               }`}
// //             >
// //               {isActive ? <Pause size={20} /> : <Play size={20} />}
// //               {isActive ? 'Pause' : 'Démarrer'}
// //             </button>
            
// //             <button
// //               onClick={handleRestart}
// //               className="control-button reset-button-control"
// //             >
// //               <RotateCcw size={20} />
// //               Reset
// //             </button>
// //           </div>
          
// //           <div className="time-progress-bar">
// //             <div 
// //               className="time-progress-fill"
// //               style={{ width: `${getTimeProgressPercentage()}%` }}
// //             />
// //           </div>
          
// //           <div className="timer-status mt-4">
// //             <div className={`status-indicator ${isActive ? 'active' : 'paused'}`}>
// //               <span className="status-dot"></span>
// //               {isActive ? 'En cours' : 'En pause'}
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== EXERCISE DESCRIPTION ===== */}
// //         <div className="description-section mb-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //             Comment effectuer l'exercice :
// //           </h3>
// //           <p className="text-gray-600 leading-relaxed">
// //             {currentTask.description}
// //           </p>
          
// //           {isLowTime && (
// //             <div className="warning-message mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
// //               <p className="text-yellow-800">
// //                 ⚠️ Plus que {timeLeft} seconde{timeLeft > 1 ? 's' : ''} !
// //               </p>
// //             </div>
// //           )}
// //         </div>

// //         {/* ===== NAVIGATION CONTROLS ===== */}
// //         <div className="navigation-controls">
// //           <button
// //             onClick={handlePrev}
// //             disabled={isFirstTask}
// //             className={`nav-button prev-button ${
// //               isFirstTask ? 'opacity-50 cursor-not-allowed' : ''
// //             }`}
// //           >
// //             <ChevronLeft size={20} />
// //             Précédent
// //           </button>
          
// //           <button
// //             onClick={handleNext}
// //             className="nav-button next-button"
// //           >
// //             {isLastTask ? 'Terminer' : 'Suivant'}
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         {/* ===== WORKOUT STATS ===== */}
// //         <div className="workout-stats">
// //           <div className="stats-grid">
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.tasks.length}
// //               </div>
// //               <div className="stat-label">Exercices</div>
// //             </div>
            
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.duration}
// //               </div>
// //               <div className="stat-label">Durée</div>
// //             </div>
            
// //             <div className="stat-item">
// //               <div className="stat-value">
// //                 {currentWorkout.difficulty}
// //               </div>
// //               <div className="stat-label">Niveau</div>
// //             </div>
// //           </div>
// //         </div>
        
// //       </div>
// //     </div>
// //   );
// // }

// // export default ExerciseSessionPage;
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './ExerciseSession.css';
// import { 
//   Play, 
//   Pause, 
//   ChevronLeft, 
//   ChevronRight, 
//   Home, 
//   RotateCcw,
//   Volume2,
//   VolumeX 
// } from 'lucide-react';
// import workoutsData, { getWorkoutById } from './exerciseData';

// function ExerciseSessionPage() {
//   // ===== ROUTING =====
//   const navigate = useNavigate();
//   const { workoutId } = useParams();
  
//   // ===== REFS =====
//   const videoRef = useRef(null);
  
//   // ===== STATE MANAGEMENT =====
//   const currentWorkout = getWorkoutById(parseInt(workoutId) || 1) || workoutsData[0];
  
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(currentWorkout.tasks[0].time);
//   const [isActive, setIsActive] = useState(false);
//   const [isFinished, setIsFinished] = useState(false);
//   const [soundEnabled, setSoundEnabled] = useState(true);
  
//   // ===== ÉTATS POUR LA VIDÉO =====
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [videoError, setVideoError] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   // ===== COMPUTED VALUES =====
//   const currentTask = currentWorkout.tasks[currentTaskIndex];
//   const isFirstTask = currentTaskIndex === 0;
//   const isLastTask = currentTaskIndex === currentWorkout.tasks.length - 1;
//   const isLowTime = timeLeft <= 10 && timeLeft > 0;

//   // ===== VIDEO MANAGEMENT =====
//   const resetVideo = useCallback(() => {
//     setIsVideoPlaying(false);
//     setVideoError(false);
//     setVideoLoaded(false);
    
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//       videoRef.current.load();
//     }
//   }, []);

//   const handleVideoPlay = useCallback(() => {
//     if (videoRef.current) {
//       if (isVideoPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(error => {
//           console.error('Erreur lors de la lecture vidéo:', error);
//           setVideoError(true);
//         });
//       }
//     }
//   }, [isVideoPlaying]);

//   const handleVideoLoadError = useCallback(() => {
//     setVideoError(true);
//     setVideoLoaded(false);
//     console.error('Erreur de chargement vidéo:', currentTask.videoUrl);
//   }, [currentTask.videoUrl]);

//   const handleVideoLoadSuccess = useCallback(() => {
//     setVideoError(false);
//     setVideoLoaded(true);
//   }, []);

//   // ===== SOUND MANAGEMENT =====
//   const playSound = useCallback((type) => {
//     if (!soundEnabled) return;
    
//     try {
//       const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//       const oscillator = audioContext.createOscillator();
//       const gainNode = audioContext.createGain();
      
//       oscillator.connect(gainNode);
//       gainNode.connect(audioContext.destination);
      
//       switch (type) {
//         case 'start':
//           oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
//           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
//           break;
//         case 'pause':
//           oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
//           gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
//           break;
//         case 'finish':
//           oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
//           gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
//           break;
//         case 'warning':
//           oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
//           gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
//           break;
//         default:
//           return;
//       }
      
//       oscillator.start();
//       oscillator.stop(audioContext.currentTime + 0.2);
//     } catch (error) {
//       console.log('Audio not supported:', error);
//     }
//   }, [soundEnabled]);

//   // ===== EFFECTS =====
  
//   // Timer countdown effect
//   useEffect(() => {
//     let interval = null;
    
//     if (isActive && timeLeft > 0 && !isFinished) {
//       interval = setInterval(() => {
//         setTimeLeft(time => {
//           const newTime = time - 1;
          
//           if (newTime === 10) {
//             playSound('warning');
//           }
          
//           return newTime;
//         });
//       }, 1000);
//     } else if (timeLeft === 0 && isActive && !isFinished) {
//       playSound('finish');
      
//       if (!isLastTask) {
//         setCurrentTaskIndex(prev => prev + 1);
//       } else {
//         setIsFinished(true);
//         setIsActive(false);
//       }
//     }
    
//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, [isActive, timeLeft, isLastTask, isFinished, playSound]);

//   // Reset timer ET video when task changes
//   useEffect(() => {
//     if (!isFinished && currentTask) {
//       setTimeLeft(currentTask.time);
//       setIsActive(false);
//       resetVideo();
//     }
//   }, [currentTaskIndex, currentTask?.time, isFinished, resetVideo]);

//   // Video event listeners
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handlePlay = () => setIsVideoPlaying(true);
//     const handlePause = () => setIsVideoPlaying(false);
//     const handleEnded = () => setIsVideoPlaying(false);
//     const handleLoadStart = () => {
//       setVideoLoaded(false);
//       setVideoError(false);
//     };

//     video.addEventListener('play', handlePlay);
//     video.addEventListener('pause', handlePause);
//     video.addEventListener('ended', handleEnded);
//     video.addEventListener('loadstart', handleLoadStart);
//     video.addEventListener('loadeddata', handleVideoLoadSuccess);
//     video.addEventListener('error', handleVideoLoadError);

//     return () => {
//       video.removeEventListener('play', handlePlay);
//       video.removeEventListener('pause', handlePause);
//       video.removeEventListener('ended', handleEnded);
//       video.removeEventListener('loadstart', handleLoadStart);
//       video.removeEventListener('loadeddata', handleVideoLoadSuccess);
//       video.removeEventListener('error', handleVideoLoadError);
//     };
//   }, [handleVideoLoadError, handleVideoLoadSuccess]);

//   // ===== EVENT HANDLERS =====
  
//   const handleNext = useCallback(() => {
//     if (isLastTask) {
//       setIsFinished(true);
//       setIsActive(false);
//       playSound('finish');
//     } else {
//       setCurrentTaskIndex(prev => prev + 1);
//     }
//   }, [isLastTask, playSound]);

//   const handlePrev = useCallback(() => {
//     if (!isFirstTask) {
//       setCurrentTaskIndex(prev => prev - 1);
//     }
//   }, [isFirstTask]);

//   const handlePlayPause = useCallback(() => {
//     const newActiveState = !isActive;
//     setIsActive(newActiveState);
//     playSound(newActiveState ? 'start' : 'pause');
//   }, [isActive, playSound]);

//   const handleRestart = useCallback(() => {
//     setTimeLeft(currentTask.time);
//     setIsActive(false);
//     playSound('start');
//   }, [currentTask.time, playSound]);

//   const handleGoHome = useCallback(() => {
//     navigate('/dashboard');
//   }, [navigate]);

//   const handleContinue = useCallback(() => {
//     navigate('/exercises');
//   }, [navigate]);

//   const handleRestartWorkout = useCallback(() => {
//     setCurrentTaskIndex(0);
//     setTimeLeft(currentWorkout.tasks[0].time);
//     setIsActive(false);
//     setIsFinished(false);
//   }, [currentWorkout.tasks]);

//   const toggleSound = useCallback(() => {
//     setSoundEnabled(prev => !prev);
//   }, []);

//   // ===== UTILITY FUNCTIONS =====
  
//   const formatTime = useCallback((seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   }, []);

//   const getProgressPercentage = useCallback(() => {
//     return ((currentTaskIndex + 1) / currentWorkout.tasks.length) * 100;
//   }, [currentTaskIndex, currentWorkout.tasks.length]);

//   const getTimeProgressPercentage = useCallback(() => {
//     if (!currentTask.time) return 0;
//     return ((currentTask.time - timeLeft) / currentTask.time) * 100;
//   }, [currentTask.time, timeLeft]);

//   const getSessionProgress = useCallback(() => {
//     const totalTime = currentWorkout.tasks.reduce((sum, task) => sum + task.time, 0);
//     const completedTime = currentWorkout.tasks
//       .slice(0, currentTaskIndex)
//       .reduce((sum, task) => sum + task.time, 0) + (currentTask.time - timeLeft);
//     return Math.min((completedTime / totalTime) * 100, 100);
//   }, [currentWorkout.tasks, currentTaskIndex, currentTask.time, timeLeft]);

//   const getTotalTimeRemaining = useCallback(() => {
//     const remainingTasks = currentWorkout.tasks.slice(currentTaskIndex + 1);
//     const remainingTime = remainingTasks.reduce((sum, task) => sum + task.time, 0);
//     return timeLeft + remainingTime;
//   }, [currentWorkout.tasks, currentTaskIndex, timeLeft]);

//   // Vérification de sécurité
//   if (!currentTask) {
//     return (
//       <div className="ex-session-container">
//         <div className="ex-glass-panel" style={{ margin: '2rem', padding: '2rem', textAlign: 'center' }}>
//           <h2 className="ex-cyber-text">❌ ERREUR SYSTÈME</h2>
//           <p className="ex-neon-text">Exercice non trouvé dans la base de données</p>
//           <button onClick={handleGoHome} className="ex-cyber-button">
//             <Home size={20} />
//             Retour à l'accueil
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ===== RENDER COMPLETION SCREEN =====
//   if (isFinished) {
//     return (
//       <div className="ex-completion-screen">
//         <div className="ex-completion-card">
//           <div className="ex-completion-emoji">🎉</div>
          
//           <h1 className="ex-completion-title">
//             Mission Complete!
//           </h1>
          
//           <p className="ex-completion-subtitle">
//             {currentWorkout.name}
//           </p>
          
//           <p className="ex-completion-text">
//             Félicitations ! Vous avez terminé tous les {currentWorkout.tasks.length} exercices. 
//             Votre progression a été enregistrée dans le système ! 💪
//           </p>
          
//           <div className="ex-completion-actions">
//             <button
//               onClick={handleGoHome}
//               className="ex-completion-btn ex-btn-home"
//             >
//               <Home size={20} />
//               Retour Base
//             </button>
            
//             <button
//               onClick={handleContinue}
//               className="ex-completion-btn ex-btn-continue"
//             >
//               <ChevronRight size={20} />
//               Nouvelle Mission
//             </button>
            
//             <button
//               onClick={handleRestartWorkout}
//               className="ex-completion-btn ex-btn-restart"
//             >
//               <RotateCcw size={20} />
//               Recommencer
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ===== RENDER MAIN INTERFACE =====
//   return (
//     <div className="ex-session-container">
      
//       {/* Toggle Son Futuriste */}
//       <button
//         onClick={toggleSound}
//         className={`ex-sound-toggle ${!soundEnabled ? 'ex-muted' : ''}`}
//         data-tooltip={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
//       >
//         {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
//       </button>
      
//       {/* ===== HEADER HOLOGRAPHIQUE ===== */}
//       <div className="ex-header">
//         <div className="ex-header-content">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h1 className="ex-header-title">
//               {currentWorkout.name}
//             </h1>
//             <div className="ex-cyber-text">
//               MISSION {currentTaskIndex + 1}/{currentWorkout.tasks.length}
//             </div>
//           </div>
          
//           {/* Progress Bar Principal */}
//           <div className="ex-progress-container">
//             <div className="ex-progress-bar">
//               <div 
//                 className="ex-progress-fill"
//                 style={{ width: `${getProgressPercentage()}%` }}
//               />
//             </div>
//             <div className="ex-progress-text">
//               Progression globale: {Math.round(getSessionProgress())}%
//             </div>
//           </div>
          
//           {/* Progress Bar Session */}
//           <div className="ex-progress-container">
//             <div className="ex-energy-bar">
//               <div 
//                 className="ex-energy-fill"
//                 style={{ width: `${getSessionProgress()}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="ex-main-content">
        
//         {/* ===== TITRE EXERCICE CYBER ===== */}
//         <div className="ex-exercise-title">
//           <h2 data-text={currentTask.name} className="ex-glitch-text">
//             {currentTask.name}
//           </h2>
//           <p className="ex-exercise-subtitle">
//             SÉQUENCE {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
//           </p>
//           <p className="ex-exercise-meta">
//             TEMPS TOTAL RESTANT: {formatTime(getTotalTimeRemaining())}
//           </p>
//         </div>

//         {/* ===== ZONE VIDÉO HOLOGRAPHIQUE ===== */}
//         <div className="ex-video-container ex-holo-border">
//           {currentTask.videoUrl ? (
//             <div className="position-relative">
//               <video
//                 key={`video-${currentTaskIndex}-${currentTask.id}`}
//                 ref={videoRef}
//                 className="ex-video"
//                 poster="/videos/thumbnail-default.jpg"
//                 preload="metadata"
//                 loop
//                 onLoadedData={handleVideoLoadSuccess}
//                 onError={handleVideoLoadError}
//                 onPlay={() => setIsVideoPlaying(true)}
//                 onPause={() => setIsVideoPlaying(false)}
//                 onEnded={() => setIsVideoPlaying(false)}
//               >
//                 <source src={currentTask.videoUrl} type="video/mp4" />
//                 <p className="text-white text-center p-4">
//                   ERREUR: Navigateur incompatible avec lecture vidéo
//                 </p>
//               </video>
              
//               {/* Overlay avec bouton play/pause futuriste */}
//               <div 
//                 className="ex-video-overlay ex-clickable"
//                 onClick={handleVideoPlay}
//               >
//                 <div className="ex-play-button">
//                   {isVideoPlaying ? (
//                     <Pause size={32} className="text-white" />
//                   ) : (
//                     <Play size={32} className="text-white" />
//                   )}
//                 </div>
//                 {/* Effet de pulse ring */}
//                 {!isVideoPlaying && <div className="ex-pulse-ring"></div>}
//               </div>
              
//               {/* Indicateur de statut vidéo */}
//               {isVideoPlaying && (
//                 <div className="ex-video-status">
//                   ● STREAMING
//                 </div>
//               )}
              
//               {/* Indicateur de chargement */}
//               {!videoLoaded && !videoError && (
//                 <div className="ex-video-status ex-video-loading" style={{ right: '1rem', left: 'auto' }}>
//                   LOADING...
//                 </div>
//               )}
              
//               {/* Scanner line effect */}
//               <div className="ex-scanner-line"></div>
//             </div>
//           ) : (
//             // Fallback si pas de vidéo
//             <div className="d-flex flex-column align-items-center justify-content-center h-100 text-white">
//               <div className="display-1 mb-3">🎯</div>
//               <p className="ex-cyber-text h5">
//                 EXERCICE SANS VIDÉO
//               </p>
//               <p className="ex-neon-text">
//                 Suivez les instructions ci-dessous
//               </p>
//             </div>
//           )}
          
//           {/* Message d'erreur vidéo */}
//           {videoError && (
//             <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//                  style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
//               <div className="text-center text-white p-4">
//                 <div className="display-4 mb-3">⚠️</div>
//                 <p className="ex-cyber-text mb-3">ERREUR DE TRANSMISSION</p>
//                 <button
//                   onClick={() => {
//                     setVideoError(false);
//                     resetVideo();
//                   }}
//                   className="ex-cyber-button"
//                 >
//                   RECONNEXION
//                 </button>
//               </div>
//             </div>
//           )}
          
//           {/* Pattern de circuit en overlay */}
//           <div className="ex-circuit-pattern"></div>
//         </div>

//         {/* ===== SECTION TIMER FUTURISTE ===== */}
//         <div className={`ex-timer-section ${isActive ? 'ex-active' : ''} ex-data-stream`}>
//           <div 
//             className={`ex-timer-display ${isActive ? 'ex-active' : ''} ${isLowTime ? 'ex-warning' : ''}`}
//           >
//             {formatTime(timeLeft)}
//           </div>
          
//           <div className="ex-timer-controls">
//             <button
//               onClick={handlePlayPause}
//               className={`ex-control-btn ${
//                 isActive ? 'ex-btn-pause' : 'ex-btn-play'
//               }`}
//             >
//               {isActive ? <Pause size={20} /> : <Play size={20} />}
//               {isActive ? 'PAUSE' : 'START'}
//             </button>
            
//             <button
//               onClick={handleRestart}
//               className="ex-control-btn ex-btn-reset"
//             >
//               <RotateCcw size={20} />
//               RESET
//             </button>
//           </div>
          
//           {/* Barre de progression temporelle */}
//           <div className="ex-time-progress">
//             <div 
//               className="ex-time-progress-fill"
//               style={{ width: `${getTimeProgressPercentage()}%` }}
//             />
//           </div>
          
//           {/* Status indicator cyber */}
//           <div className="ex-timer-status">
//             <div className={`ex-status-dot ${isActive ? 'ex-active' : ''}`}></div>
//             <span>{isActive ? 'SYSTÈME ACTIF' : 'EN ATTENTE'}</span>
//           </div>
//         </div>

//         {/* ===== DESCRIPTION CYBER ===== */}
//         <div className="ex-description-section ex-glass-panel">
//           <h3 className="ex-description-title">
//             PROTOCOLE D'EXÉCUTION :
//           </h3>
//           <p className="ex-description-text">
//             {currentTask.description}
//           </p>
          
//           {isLowTime && (
//             <div className="ex-warning-message">
//               <strong>⚠️ ALERTE TEMPORELLE :</strong> Plus que {timeLeft} seconde{timeLeft > 1 ? 's' : ''} restante{timeLeft > 1 ? 's' : ''} !
//             </div>
//           )}
//         </div>

//         {/* ===== CONTRÔLES DE NAVIGATION CYBER ===== */}
//         <div className="ex-navigation-controls">
//           <button
//             onClick={handlePrev}
//             disabled={isFirstTask}
//             className="ex-nav-btn ex-btn-prev"
//           >
//             <ChevronLeft size={20} />
//             PRÉCÉDENT
//           </button>
          
//           <button
//             onClick={handleNext}
//             className="ex-nav-btn ex-btn-next"
//           >
//             {isLastTask ? 'TERMINER MISSION' : 'SUIVANT'}
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* ===== STATS DU WORKOUT FUTURISTE ===== */}
//         <div className="ex-workout-stats">
//           <h3 className="ex-description-title mb-4 text-center">
//             DONNÉES DE MISSION
//           </h3>
//           <div className="ex-stats-grid">
//             <div className="ex-stat-item ex-interactive">
//               <div className="ex-stat-value">
//                 {currentWorkout.tasks.length}
//               </div>
//               <div className="ex-stat-label">SÉQUENCES</div>
//             </div>
            
//             <div className="ex-stat-item ex-interactive">
//               <div className="ex-stat-value">
//                 {currentWorkout.duration}
//               </div>
//               <div className="ex-stat-label">DURÉE TOTALE</div>
//             </div>
            
//             <div className="ex-stat-item ex-interactive">
//               <div className="ex-stat-value">
//                 {currentWorkout.difficulty}
//               </div>
//               <div className="ex-stat-label">NIVEAU</div>
//             </div>
            
//             <div className="ex-stat-item ex-interactive">
//               <div className="ex-stat-value">
//                 {Math.round(getSessionProgress())}%
//               </div>
//               <div className="ex-stat-label">PROGRESSION</div>
//             </div>
//           </div>
//         </div>
        
//       </div>
      
//       {/* Particules flottantes */}
//       <div className="ex-particles">
//         {[...Array(10)].map((_, i) => (
//           <div 
//             key={i}
//             className="ex-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${10 + Math.random() * 10}s`
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExerciseSessionPage;
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  RotateCcw,
  Volume2,
  VolumeX,
  Activity,
  Timer,
  Target
} from 'lucide-react';

// Données d'exercices avec vidéos locales
const workoutsData = [
  {
    id: 1,
    name: "Full Body HIIT",
    duration: "15 minutes",
    difficulty: "Intermediate",
    tasks: [
      {
        id: 1,
        name: "Jumping Jacks",
        description: "Stand with feet together, jump while spreading legs and raising arms overhead, then return to starting position. Keep your core engaged and land softly on your toes.",
        videoUrl: "/videos/Jumping-Jack.mp4",
        time: 30
      },
      {
        id: 2,
        name: "Push-ups",
        description: "Start in plank position, lower your body until chest nearly touches floor, then push back up. Keep your body in a straight line throughout the movement. Modify by dropping to knees if needed.",
        videoUrl: "/videos/push-ups.mp4",
        time: 45
      },
      {
        id: 3,
        name: "Mountain Climbers",
        description: "Start in plank position, alternate bringing knees to chest rapidly while maintaining plank position. Keep your core tight and avoid letting hips pike up or sag down.",
        videoUrl: "/videos/mountain-climbers.mp4",
        time: 30
      },
      {
        id: 4,
        name: "Bodyweight Squats",
        description: "Stand with feet shoulder-width apart, lower your body as if sitting back into a chair, then return to standing. Keep your chest up, knees behind toes, and weight in your heels.",
        videoUrl: "/videos/Bodyweight-Squats.mp4",
        time: 40
      },
      {
        id: 5,
        name: "Plank Hold",
        description: "Hold a plank position with forearms on ground and body in straight line from head to heels. Keep your core engaged and avoid letting hips sag or pike up. Breathe steadily.",
        videoUrl: "/videos/Plank-Hold.mp4",
        time: 60
      }
    ]
  },
  {
    id: 2,
    name: "Core Strength",
    duration: "12 minutes",
    difficulty: "Beginner",
    tasks: [
      {
        id: 6,
        name: "Crunches",
        description: "Lie on your back with knees bent, hands behind head. Lift shoulders off ground by contracting abs, then lower slowly. Don't pull on your neck.",
        videoUrl: "/videos/crunches.mp4",
        time: 45
      },
      {
        id: 7,
        name: "Bicycle Crunches",
        description: "Lie on back, hands behind head. Bring opposite elbow to knee while extending other leg. Alternate sides in a pedaling motion while keeping core engaged.",
        videoUrl: "/videos/bicycle-crunches.mp4",
        time: 40
      },
      {
        id: 8,
        name: "Dead Bug",
        description: "Lie on back with arms up and knees bent at 90 degrees. Lower opposite arm and leg slowly while keeping lower back pressed to floor. Return to start and repeat other side.",
        videoUrl: "/videos/dead-bug.mp4",
        time: 50
      },
      {
        id: 9,
        name: "Side Plank (Right)",
        description: "Lie on right side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
        videoUrl: "/videos/side-plank.mp4",
        time: 30
      },
      {
        id: 10,
        name: "Side Plank (Left)",
        description: "Lie on left side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
        videoUrl: "/videos/side-plank-left.mp4",
        time: 30
      }
    ]
  }
];

function ExerciseSessionPage() {
  // ===== REFS =====
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  // ===== STATE MANAGEMENT =====
  const currentWorkout = workoutsData[0];
  
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(currentWorkout.tasks[0].time);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // ===== ÉTATS POUR LA VIDÉO =====
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // ===== COMPUTED VALUES =====
  const currentTask = currentWorkout.tasks[currentTaskIndex];
  const isFirstTask = currentTaskIndex === 0;
  const isLastTask = currentTaskIndex === currentWorkout.tasks.length - 1;
  const isLowTime = timeLeft <= 10 && timeLeft > 0;

  // ===== 3D CANVAS ANIMATION =====
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationFrame;

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Créer des particules
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          vz: Math.random() * 5 + 1,
          size: Math.random() * 3 + 1,
          color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Animation des particules
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 25, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Mouvement 3D
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        // Reset si particule sort de l'écran
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Projection 3D vers 2D
        const scale = 500 / particle.z;
        const projectedX = particle.x * scale;
        const projectedY = particle.y * scale;
        const projectedSize = particle.size * scale;

        // Dessiner la particule avec effet glow
        ctx.save();
        ctx.globalAlpha = particle.opacity * scale;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Effet de connexion entre particules proches
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = projectedX - (otherParticle.x * (500 / otherParticle.z));
          const dy = projectedY - (otherParticle.y * (500 / otherParticle.z));
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = (100 - distance) / 100;
            ctx.globalAlpha = 0.3 * scale;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherParticle.x * (500 / otherParticle.z), otherParticle.y * (500 / otherParticle.z));
            ctx.stroke();
          }
        });
        
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // ===== VIDEO MANAGEMENT =====
  const resetVideo = useCallback(() => {
    setIsVideoPlaying(false);
    setVideoError(false);
    setVideoLoaded(false);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, []);

  const handleVideoLoadError = useCallback(() => {
    setVideoError(true);
    setVideoLoaded(false);
    console.error('Erreur de chargement vidéo:', currentTask.videoUrl);
  }, [currentTask.videoUrl]);

  const handleVideoLoadSuccess = useCallback(() => {
    setVideoError(false);
    setVideoLoaded(true);
  }, []);

  // ===== SOUND MANAGEMENT =====
  const playSound = useCallback((type) => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = {
        start: 800,
        pause: 400,
        finish: 1000,
        warning: 600
      };
      
      oscillator.frequency.setValueAtTime(frequencies[type] || 500, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.log('Audio not supported:', error);
    }
  }, [soundEnabled]);

  // ===== EFFECTS =====
  
  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0 && !isFinished) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          const newTime = time - 1;
          
          if (newTime === 10) {
            playSound('warning');
          }
          
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0 && isActive && !isFinished) {
      playSound('finish');
      
      if (!isLastTask) {
        setCurrentTaskIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
        setIsActive(false);
      }
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft, isLastTask, isFinished, playSound]);

  // Reset timer ET video when task changes
  useEffect(() => {
    if (!isFinished && currentTask) {
      setTimeLeft(currentTask.time);
      setIsActive(false);
      resetVideo();
    }
  }, [currentTaskIndex, currentTask?.time, isFinished, resetVideo]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);
    const handleLoadStart = () => {
      setVideoLoaded(false);
      setVideoError(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleVideoLoadSuccess);
    video.addEventListener('error', handleVideoLoadError);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleVideoLoadSuccess);
      video.removeEventListener('error', handleVideoLoadError);
    };
  }, [handleVideoLoadError, handleVideoLoadSuccess]);

  // ===== EVENT HANDLERS =====
  
  const handleNext = useCallback(() => {
    if (isLastTask) {
      setIsFinished(true);
      setIsActive(false);
      playSound('finish');
    } else {
      setCurrentTaskIndex(prev => prev + 1);
    }
  }, [isLastTask, playSound]);

  const handlePrev = useCallback(() => {
    if (!isFirstTask) {
      setCurrentTaskIndex(prev => prev - 1);
    }
  }, [isFirstTask]);

  // ===== MODIFICATION PRINCIPALE: Synchronisation vidéo + timer =====
  const handlePlayPause = useCallback(() => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    
    // Synchroniser la vidéo avec le timer
    if (videoRef.current && !videoError) {
      if (newActiveState) {
        // Start: lancer vidéo ET timer
        videoRef.current.play().catch(error => {
          console.error('Erreur lors de la lecture vidéo:', error);
          setVideoError(true);
        });
      } else {
        // Pause: arrêter vidéo ET timer
        videoRef.current.pause();
      }
    }
    
    playSound(newActiveState ? 'start' : 'pause');
  }, [isActive, playSound, videoError]);

  const handleRestart = useCallback(() => {
    setTimeLeft(currentTask.time);
    setIsActive(false);
    
    // Reset vidéo aussi
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    setIsVideoPlaying(false);
    
    playSound('start');
  }, [currentTask.time, playSound]);

  const handleGoHome = useCallback(() => {
    alert('Redirection vers /dashboard');
  }, []);

  const handleContinue = useCallback(() => {
    alert('Redirection vers /exercises');
  }, []);

  const handleRestartWorkout = useCallback(() => {
    setCurrentTaskIndex(0);
    setTimeLeft(currentWorkout.tasks[0].time);
    setIsActive(false);
    setIsFinished(false);
  }, [currentWorkout.tasks]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  // ===== UTILITY FUNCTIONS =====
  
  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const getProgressPercentage = useCallback(() => {
    return ((currentTaskIndex + 1) / currentWorkout.tasks.length) * 100;
  }, [currentTaskIndex, currentWorkout.tasks.length]);

  const getTimeProgressPercentage = useCallback(() => {
    if (!currentTask.time) return 0;
    return ((currentTask.time - timeLeft) / currentTask.time) * 100;
  }, [currentTask.time, timeLeft]);

  const getSessionProgress = useCallback(() => {
    const totalTime = currentWorkout.tasks.reduce((sum, task) => sum + task.time, 0);
    const completedTime = currentWorkout.tasks
      .slice(0, currentTaskIndex)
      .reduce((sum, task) => sum + task.time, 0) + (currentTask.time - timeLeft);
    return Math.min((completedTime / totalTime) * 100, 100);
  }, [currentWorkout.tasks, currentTaskIndex, currentTask.time, timeLeft]);

  // ===== RENDER COMPLETION SCREEN =====
  if (isFinished) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #2d3748 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <canvas 
          ref={canvasRef} 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            zIndex: 1,
            pointerEvents: 'none'
          }} 
        />
        
        <div style={{
          background: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '2px solid rgba(56, 178, 172, 0.3)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(56, 178, 172, 0.2)',
          padding: '3rem',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          animation: 'slideIn 0.8s ease-out'
        }}>
          <div style={{ 
            fontSize: '5rem', 
            marginBottom: '2rem',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            🎉
          </div>
          
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '900',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(135deg, #38b2ac, #4fd1c7, #68d391)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(56, 178, 172, 0.5)'
          }}>
            MISSION TERMINÉE !
          </h1>
          
          <p style={{ 
            color: '#38b2ac',
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            {currentWorkout.name}
          </p>
          
          <p style={{ 
            color: '#94a3b8',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Félicitations ! Vous avez terminé tous les {currentWorkout.tasks.length} exercices. 
            Continuez comme ça ! 💪
          </p>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <button
              onClick={handleGoHome}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: '2px solid #3182ce',
                background: 'linear-gradient(135deg, #3182ce, #4299e1)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              <Home size={20} />
              Accueil
            </button>
            
            <button
              onClick={handleContinue}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: '2px solid #38a169',
                background: 'linear-gradient(135deg, #38a169, #48bb78)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              <ChevronRight size={20} />
              Autres Exercices
            </button>
            
            <button
              onClick={handleRestartWorkout}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: '2px solid #718096',
                background: 'linear-gradient(135deg, #718096, #a0aec0)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              <RotateCcw size={20} />
              Recommencer
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    );
  }

  // ===== RENDER MAIN INTERFACE =====
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #2d3748 100%)',
      position: 'relative',
      overflow: 'auto'
    }}>
      {/* Canvas 3D Background */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 1,
          pointerEvents: 'none'
        }} 
      />

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1001,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(30, 41, 59, 0.9)',
          backdropFilter: 'blur(10px)',
          border: `2px solid ${soundEnabled ? '#38b2ac' : '#ef4444'}`,
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 20px ${soundEnabled ? 'rgba(56, 178, 172, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`
        }}
      >
        {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      
      {/* Header */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '2px solid rgba(56, 178, 172, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem'
          }}>
            <h1 style={{ 
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 0 10px rgba(56, 178, 172, 0.5)'
            }}>
              {currentWorkout.name}
            </h1>
            <div style={{ color: '#38b2ac', fontWeight: '600' }}>
              MISSION {currentTaskIndex + 1}/{currentWorkout.tasks.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div style={{
            height: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '0.5rem',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, #38b2ac, #4fd1c7)',
              borderRadius: '4px',
              transition: 'width 0.8s ease',
              width: `${getProgressPercentage()}%`,
              boxShadow: '0 0 10px rgba(56, 178, 172, 0.5)'
            }} />
          </div>
          
          <div style={{ 
            color: '#94a3b8', 
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            Progression: {Math.round(getSessionProgress())}%
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Exercise Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: '900',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #38b2ac, #4fd1c7, #68d391)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(56, 178, 172, 0.5)'
          }}>
            {currentTask.name}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
            Exercice {currentTaskIndex + 1} sur {currentWorkout.tasks.length}
          </p>
        </div>

        {/* Video Container */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(56, 178, 172, 0.3)',
          border: '2px solid rgba(56, 178, 172, 0.5)',
          transition: 'all 0.5s ease'
        }}>
          {currentTask.videoUrl ? (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <video
                key={`video-${currentTaskIndex}-${currentTask.id}`}
                ref={videoRef}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '22px'
                }}
                poster="/videos/thumbnail-default.jpg"
                preload="metadata"
                loop
                onLoadedData={handleVideoLoadSuccess}
                onError={handleVideoLoadError}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src={currentTask.videoUrl} type="video/mp4" />
                <p style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
                  Votre navigateur ne supporte pas la lecture vidéo.
                </p>
              </video>
              
              {/* Video Overlay - Ne plus gérer le clic ici, c'est le bouton Start qui gère */}
              {!isVideoPlaying && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(2px)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(56, 178, 172, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(56, 178, 172, 0.5)'
                  }}>
                    <Play size={32} color="white" />
                  </div>
                </div>
              )}
              
              {/* Status Indicators */}
              {isVideoPlaying && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(239, 68, 68, 0.9)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  ● EN COURS
                </div>
              )}
              
              {!videoLoaded && !videoError && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(56, 178, 172, 0.9)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  CHARGEMENT...
                </div>
              )}
            </div>
          ) : (
            // Fallback si pas de vidéo
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'white'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
              <p style={{ color: '#38b2ac', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                EXERCICE SANS VIDÉO
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Suivez les instructions ci-dessous
              </p>
            </div>
          )}
          
          {/* Error Overlay */}
          {videoError && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
                <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  VIDÉO NON TROUVÉE
                </p>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  Vérifiez que le fichier {currentTask.videoUrl} existe
                </p>
                <button
                  onClick={() => {
                    setVideoError(false);
                    resetVideo();
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    border: '2px solid #38b2ac',
                    background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  RÉESSAYER
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Timer Section */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: `2px solid ${isActive ? 'rgba(56, 178, 172, 0.5)' : 'rgba(56, 178, 172, 0.3)'}`,
          boxShadow: isActive 
            ? '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 50px rgba(56, 178, 172, 0.4)' 
            : '0 25px 50px rgba(0, 0, 0, 0.3)',
          padding: '3rem',
          textAlign: 'center',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.5s ease'
        }}>
          {/* Animated border for active state */}
          {isActive && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(56, 178, 172, 0.8), transparent)',
              animation: 'dataStream 3s infinite'
            }} />
          )}
          
          {/* Timer Display */}
          <div style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '900',
            fontFamily: 'monospace',
            color: isActive ? '#38b2ac' : 'white',
            marginBottom: '2rem',
            textShadow: isActive 
              ? '0 0 20px rgba(56, 178, 172, 0.8), 0 0 40px rgba(56, 178, 172, 0.4)'
              : '0 0 10px rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.1em',
            position: 'relative',
            filter: isLowTime ? 'hue-rotate(180deg)' : 'none',
            animation: isLowTime ? 'pulse 0.5s ease-in-out infinite' : 'none'
          }}>
            {formatTime(timeLeft)}
            
            {/* Circular progress indicator */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              border: '2px solid rgba(56, 178, 172, 0.3)',
              borderRadius: '50%',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.5s ease'
            }} />
          </div>
          
          {/* Control Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handlePlayPause}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderRadius: '16px',
                fontWeight: '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '180px',
                backdropFilter: 'blur(10px)',
                background: isActive 
                  ? 'linear-gradient(135deg, #f56565, #fc8181)'
                  : 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                color: 'white',
                boxShadow: isActive
                  ? '0 0 20px rgba(245, 101, 101, 0.5)'
                  : '0 0 20px rgba(56, 178, 172, 0.5)'
              }}
            >
              {isActive ? <Pause size={20} /> : <Play size={20} />}
              {isActive ? 'PAUSE' : 'START'}
            </button>
            
            <button
              onClick={handleRestart}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderRadius: '16px',
                fontWeight: '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: '2px solid rgba(139, 92, 246, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '180px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(139, 92, 246, 0.9)',
                color: 'white',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
              }}
            >
              <RotateCcw size={20} />
              RESET
            </button>
          </div>
          
          {/* Time Progress Bar */}
          <div style={{
            width: '100%',
            height: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '5px',
            overflow: 'hidden',
            marginBottom: '1rem',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, #38b2ac, #4fd1c7)',
              borderRadius: '5px',
              transition: 'width 1s linear',
              width: `${getTimeProgressPercentage()}%`,
              boxShadow: '0 0 15px rgba(56, 178, 172, 0.5)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
          
          {/* Status Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#94a3b8',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: isActive ? '#38b2ac' : '#ef4444',
              boxShadow: `0 0 10px ${isActive ? '#38b2ac' : '#ef4444'}`,
              animation: 'pulse 2s ease-in-out infinite'
            }} />
            {isActive ? 'SYSTÈME ACTIF' : 'EN ATTENTE'}
          </div>
        </div>

        {/* Exercise Description */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(56, 178, 172, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          padding: '3rem',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Target size={24} color="#38b2ac" />
            PROTOCOLE D'EXÉCUTION
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, #38b2ac, #4fd1c7)',
              borderRadius: '1px'
            }} />
          </h3>
          <p style={{
            color: '#94a3b8',
            lineHeight: '1.7',
            fontSize: '1.1rem'
          }}>
            {currentTask.description}
          </p>
          
          {isLowTime && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.5rem',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid #ef4444',
              borderRadius: '12px',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              animation: 'pulse 1s ease-in-out infinite'
            }}>
              <Activity size={20} />
              <strong>⚠️ ALERTE TEMPORELLE :</strong> Plus que {timeLeft} seconde{timeLeft > 1 ? 's' : ''} !
            </div>
          )}
        </div>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handlePrev}
            disabled={isFirstTask}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '2px solid rgba(139, 92, 246, 0.5)',
              cursor: isFirstTask ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '180px',
              backdropFilter: 'blur(10px)',
              background: isFirstTask 
                ? 'rgba(100, 100, 100, 0.3)'
                : 'rgba(139, 92, 246, 0.9)',
              color: 'white',
              opacity: isFirstTask ? 0.5 : 1,
              boxShadow: isFirstTask ? 'none' : '0 0 20px rgba(139, 92, 246, 0.5)'
            }}
          >
            <ChevronLeft size={20} />
            PRÉCÉDENT
          </button>
          
          <button
            onClick={handleNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '2px solid rgba(56, 178, 172, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '180px',
              backdropFilter: 'blur(10px)',
              background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
              color: 'white',
              boxShadow: '0 0 20px rgba(56, 178, 172, 0.5)'
            }}
          >
            {isLastTask ? 'TERMINER MISSION' : 'SUIVANT'}
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Workout Stats */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(56, 178, 172, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          padding: '3rem'
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            DONNÉES DE MISSION
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(56, 178, 172, 0.05)',
              border: '1px solid rgba(56, 178, 172, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'white',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'monospace'
              }}>
                {currentWorkout.tasks.length}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                SÉQUENCES
              </div>
            </div>
            
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(56, 178, 172, 0.05)',
              border: '1px solid rgba(56, 178, 172, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'white',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'monospace'
              }}>
                {currentWorkout.duration}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                DURÉE TOTALE
              </div>
            </div>
            
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(56, 178, 172, 0.05)',
              border: '1px solid rgba(56, 178, 172, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'white',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'monospace'
              }}>
                {currentWorkout.difficulty}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                NIVEAU
              </div>
            </div>
            
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(56, 178, 172, 0.05)',
              border: '1px solid rgba(56, 178, 172, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'white',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #38b2ac, #4fd1c7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'monospace'
              }}>
                {Math.round(getSessionProgress())}%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                PROGRESSION
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes dataStream {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes exercisePulse {
          0%, 100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 20px rgba(56, 178, 172, 0.5));
          }
          50% { 
            transform: scale(1.1); 
            filter: drop-shadow(0 0 30px rgba(56, 178, 172, 0.8));
          }
        }
        
        @keyframes exerciseGlow {
          0% { opacity: 0.1; }
          100% { opacity: 0.3; }
        }
        
        button:hover:not(:disabled) {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
        }
        
        button:active:not(:disabled) {
          transform: translateY(0) !important;
        }
        
        [style*="stat-item"] {
          transition: all 0.3s ease !important;
        }
        
        [style*="stat-item"]:hover {
          transform: translateY(-8px) scale(1.05) !important;
          background: rgba(56, 178, 172, 0.1) !important;
          border-color: rgba(56, 178, 172, 0.5) !important;
          box-shadow: 0 10px 25px rgba(56, 178, 172, 0.2) !important;
        }
      `}</style>
    </div>
  );
}

export default ExerciseSessionPage;