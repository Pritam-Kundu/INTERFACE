import { useState, useEffect } from 'react';

interface ParallaxCoordinates {
  x: number;
  y: number;
}

export const useMouseParallax = (multiplier: number = 1): ParallaxCoordinates => {
  const [coordinates, setCoordinates] = useState<ParallaxCoordinates>({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile/touch devices or if reduced motion is preferred
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;
    
    if (mediaQuery.matches || isMobile) {
      return;
    }

    let requestRef: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      // Values will range from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Throttle updates using requestAnimationFrame for performance
      if (requestRef) {
        cancelAnimationFrame(requestRef);
      }
      
      requestRef = requestAnimationFrame(() => {
        setCoordinates({ 
          x: x * multiplier, 
          y: y * multiplier 
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, [multiplier]);

  return coordinates;
};
