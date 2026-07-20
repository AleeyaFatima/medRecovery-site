import React, { useEffect, useState } from 'react';

export default function ParallaxParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles on mount
    const newParticles = Array.from({ length: 45 }).map((_, i) => {
      const isPurple = Math.random() > 0.5;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        speed: (Math.random() * 0.5 + 0.1) * (Math.random() > 0.5 ? 1 : -1), // Speed coefficient
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 5 + 3}s`,
        color: isPurple ? 'rgba(192, 132, 252, 0.7)' : 'rgba(251, 191, 36, 0.7)',
        glow: isPurple ? 'rgba(192, 132, 252, 0.4)' : 'rgba(251, 191, 36, 0.4)',
      };
    });
    setParticles(newParticles);

    // Sync scroll position to CSS custom property
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-particles-container" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="parallax-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 12px ${p.glow}, 0 0 4px ${p.color}`,
            '--speed': p.speed,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <style>{`
        .parallax-particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1; /* Sits behind page content cards, but above body background layers */
          overflow: hidden;
        }
        .parallax-particle {
          position: absolute;
          border-radius: 50%;
          transform: translateY(calc(var(--scroll-y, 0px) * var(--speed, 0.15)));
          will-change: transform;
          animation: particleTwinkle 4s ease-in-out infinite alternate;
        }
        @keyframes particleTwinkle {
          0% {
            opacity: 0.25;
            transform: translateY(calc(var(--scroll-y, 0px) * var(--speed, 0.15))) scale(0.85);
          }
          100% {
            opacity: 0.95;
            transform: translateY(calc(var(--scroll-y, 0px) * var(--speed, 0.15))) scale(1.15);
          }
        }
      `}</style>
    </div>
  );
}
