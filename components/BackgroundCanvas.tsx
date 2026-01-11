import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseX?: number;
  baseY?: number;
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Adjust particle count based on screen size for performance
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 10000), 100); 
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5, 
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2.5 + 1,
          color: Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(163, 163, 163, 0.5)', // White/Gray
        });
      }
    };

    const draw = () => {
      // Create trails effect by using partial opacity clear
      // Using a very slight opacity for the clearRect allows trails to linger briefly
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        // Physics
        p.x += p.vx;
        p.y += p.vy;

        // Friction (slow down over time) to keep movement smooth and floaty
        p.vx *= 0.99; 
        p.vy *= 0.99;

        // Keep constant minimal movement (drift) - slightly increased for better auto-movement
        if (Math.abs(p.vx) < 0.3) p.vx += (Math.random() - 0.5) * 0.2;
        if (Math.abs(p.vy) < 0.3) p.vy += (Math.random() - 0.5) * 0.2;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < 150) {
            ctx.beginPath();
            // Opacity based on distance
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - dist / 1000})`; 
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0a0a)' }}
    />
  );
};

export default BackgroundCanvas;