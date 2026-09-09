import React from 'react';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

export const HeroBackground: React.FC = () => {
  const { x, y } = useMouseParallax(15); // Subtle movement for the deep background

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-[#050B14]">
      {/* Deepest ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a192f_0%,_transparent_100%)] opacity-40" />
      
      {/* Dynamic lighting responding to mouse */}
      <div 
        className="absolute top-1/4 -right-1/4 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] rounded-full bg-[radial-gradient(circle,_rgba(23,93,165,0.15)_0%,_transparent_60%)] blur-[100px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${x * -0.5}px, ${y * -0.5}px, 0)`
        }}
      />
      
      <div 
        className="absolute bottom-0 -left-1/4 w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_60%)] blur-[80px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`
        }}
      />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />
    </div>
  );
};
