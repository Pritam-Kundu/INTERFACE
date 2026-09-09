import React from 'react';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

export const HeroLightTrails: React.FC = () => {
  const { x, y } = useMouseParallax(10); // Less movement than particles for depth

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 hidden lg:block opacity-70">
      <div 
        className="relative w-full h-full flex items-center justify-end pr-24 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      >
        <svg 
          viewBox="0 0 800 800" 
          className="absolute w-[800px] h-[800px] right-0 translate-x-1/4 animate-[spin_60s_linear_infinite]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Trail */}
          <ellipse 
            cx="400" cy="400" rx="380" ry="200" 
            transform="rotate(-30 400 400)" 
            stroke="url(#trail-gradient-1)" 
            strokeWidth="1.5" 
            strokeDasharray="400 600"
            className="opacity-40"
          />
          
          {/* Inner Trail */}
          <ellipse 
            cx="400" cy="400" rx="280" ry="120" 
            transform="rotate(45 400 400)" 
            stroke="url(#trail-gradient-2)" 
            strokeWidth="1" 
            strokeDasharray="200 800"
            className="opacity-60"
          />

          <defs>
            <linearGradient id="trail-gradient-1" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="trail-gradient-2" x1="800" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
