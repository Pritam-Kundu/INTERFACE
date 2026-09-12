import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/my-custom-sound.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Soft volume
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 p-3 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg text-primary hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent group"
      aria-label={isPlaying ? "Mute relaxing sound" : "Play relaxing sound"}
    >
      {isPlaying ? (
        <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX size={24} className="group-hover:scale-110 transition-transform opacity-60" />
      )}
      
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-background text-secondary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
        {isPlaying ? 'Mute' : 'Play Relaxing Sound'}
      </span>
    </button>
  );
};
