import React, { useState, useEffect, useCallback } from 'react';
import './WorkoutTimer.css';

const WorkoutTimer = ({ 
  initialTime = 0, 
  onTimeUpdate = () => {}, 
  onComplete = () => {},
  autoStart = false,
  showControls = true 
}) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          onTimeUpdate(newTime);
          return newTime;
        });
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused, onTimeUpdate]);

  const formatTime = useCallback((seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    onComplete(time);
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <div className="workout-timer">
      <div className="timer-display">
        <div className="timer-time">
          {formatTime(time)}
        </div>
        <div className="timer-status">
          {!isRunning ? 'Arrêté' : isPaused ? 'En pause' : 'En cours'}
        </div>
      </div>
      
      {showControls && (
        <div className="timer-controls">
          {!isRunning ? (
            <button 
              className="btn btn-success btn-sm me-2" 
              onClick={handleStart}
            >
              <i className="bi bi-play-fill me-1"></i>
              Démarrer
            </button>
          ) : isPaused ? (
            <button 
              className="btn btn-warning btn-sm me-2" 
              onClick={handleResume}
            >
              <i className="bi bi-play-fill me-1"></i>
              Reprendre
            </button>
          ) : (
            <button 
              className="btn btn-warning btn-sm me-2" 
              onClick={handlePause}
            >
              <i className="bi bi-pause-fill me-1"></i>
              Pause
            </button>
          )}
          
          <button 
            className="btn btn-danger btn-sm me-2" 
            onClick={handleStop}
            disabled={!isRunning}
          >
            <i className="bi bi-stop-fill me-1"></i>
            Arrêter
          </button>
          
          <button 
            className="btn btn-secondary btn-sm" 
            onClick={handleReset}
          >
            <i className="bi bi-arrow-clockwise me-1"></i>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutTimer;