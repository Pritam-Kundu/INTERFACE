import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { currentEdition } from '../../../data/magazines';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

export const HeroMagazine: React.FC = () => {
  const { x, y } = useMouseParallax(-20); // Move opposite to background for 3D depth
  const [isLoaded, setIsLoaded] = useState(false);
  const coverImage = currentEdition.pagesPath ? `${currentEdition.pagesPath}page-001.webp` : '/assets/placeholder.jpg';

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto flex justify-center perspective-[2000px] transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <Link 
        to={`/read/${currentEdition.year}`}
        className="relative group cursor-pointer transition-transform duration-100 ease-out block"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      >
        {/* Continuous slow floating animation */}
        <div className="animate-[float_6s_ease-in-out_infinite]">
          {/* Magazine 3D Container */}
          <div className="relative w-full aspect-[1/1.4] transition-all duration-500 ease-out transform-style-3d rotate-y-[-15deg] rotate-x-[5deg] group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg] group-hover:scale-105">
            
            {/* Soft backdrop shadow */}
            <div className="absolute inset-0 bg-black/80 blur-2xl transform translate-y-8 translate-x-4 scale-95 group-hover:bg-cyan-900/40 group-hover:blur-3xl transition-all duration-500" />
            
            {/* Book Edge (Thickness) */}
            <div 
              className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-r from-gray-300 to-gray-100 origin-right transform rotate-y-90 translate-x-full border-y border-r border-white/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Page lines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_1px,rgba(0,0,0,0.1)_1px,rgba(0,0,0,0.1)_2px)] opacity-30" />
            </div>

            {/* Front Cover */}
            <div className="absolute inset-0 rounded-sm overflow-hidden border border-border/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group-hover:border-cyan-500/50 transition-colors duration-500 bg-surface">
              <img 
                src={coverImage}
                alt={`${currentEdition.title} ${currentEdition.year} Cover`}
                className="w-full h-full object-cover"
              />
              
              {/* Binder crease */}
              <div className="absolute inset-y-0 left-0 w-[2%] bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-[2%] w-[1px] bg-white/10 pointer-events-none" />
              
              {/* Lighting / Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Cyan rim light on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-500 pointer-events-none" />
            </div>

          </div>
        </div>
      </Link>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-\\[-15deg\\] { transform: rotateY(-15deg); }
        .rotate-x-\\[5deg\\] { transform: rotateX(5deg); }
        .rotate-y-\\[-5deg\\] { transform: rotateY(-5deg); }
        .rotate-x-\\[2deg\\] { transform: rotateX(2deg); }
        .rotate-y-90 { transform: rotateY(90deg); }
      `}</style>
    </div>
  );
};
