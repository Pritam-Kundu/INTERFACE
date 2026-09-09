import React, { useMemo } from 'react';
import { useMouseParallax } from '../../../hooks/useMouseParallax';

export const HeroParticles: React.FC = () => {
  const { x, y } = useMouseParallax(25);
  
  // Generate a fixed set of particles to avoid re-renders causing them to jump
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1, // 1px to 5px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.1,
      animationDuration: `${Math.random() * 20 + 10}s`,
      animationDelay: `${Math.random() * -20}s`,
      // Some particles will drift up, some down, some left, some right
      driftY: Math.random() > 0.5 ? 100 : -100, 
      blur: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 hidden sm:block">
      <div 
        className="relative w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-100/80"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              boxShadow: `0 0 ${p.size * 2}px rgba(6, 182, 212, 0.4)`,
              // We'll rely on global CSS keyframes for the drifting if we add them,
              // or just let parallax handle it to keep performance high.
              // For now, let's keep it purely parallax-driven to avoid painting issues on low end devices,
              // but we'll add a tiny breathing animation via CSS class.
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes subtle-drift {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};
