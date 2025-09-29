import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  isActive?: boolean;
}

export const useCountUp = ({ 
  end, 
  start = 0, 
  duration = 2000, 
  isActive = false 
}: UseCountUpProps) => {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!isActive) {
      setCurrent(start);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const value = start + (end - start) * easeOutCubic;
      
      setCurrent(Math.floor(value));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [start, end, duration, isActive]);

  return current;
};