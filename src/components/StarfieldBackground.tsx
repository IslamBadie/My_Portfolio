import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

const STAR_COUNT = 800;
const MAX_DEPTH = 1000;
const SPEED = 0.5;

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  const initStars = useCallback((width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const x = (Math.random() - 0.5) * width * 2;
      const y = (Math.random() - 0.5) * height * 2;
      const z = Math.random() * MAX_DEPTH;
      stars.push({ x, y, z, prevX: 0, prevY: 0, size: Math.random() * 1.5 + 0.5, brightness: Math.random(), twinkleSpeed: Math.random() * 3 + 1, twinkleOffset: Math.random() * Math.PI * 2 });
    }
    starsRef.current = stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (starsRef.current.length === 0) {
        initStars(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const isLight = () => document.documentElement.classList.contains("light");

    let time = 0;
    const animate = () => {
      time += 0.016;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const light = isLight();

      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      const mx = mouseRef.current.x * 30;
      const my = mouseRef.current.y * 30;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.z -= SPEED;
        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          star.x = (Math.random() - 0.5) * w * 2;
          star.y = (Math.random() - 0.5) * h * 2;
          star.brightness = Math.random();
        }

        const k = 300 / star.z;
        const sx = star.x * k + cx + mx * (1 - star.z / MAX_DEPTH);
        const sy = star.y * k + cy + my * (1 - star.z / MAX_DEPTH);

        if (sx < -10 || sx > w + 10 || sy < -10 || sy > h + 10) continue;

        const depth = 1 - star.z / MAX_DEPTH;
        const alpha = depth * 0.7 * (0.5 + star.brightness * 0.5);
        const radius = star.size * depth * 1.8;

        // Draw trail
        if (star.prevX && star.prevY) {
          const trailAlpha = alpha * 0.3;
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = light
            ? `rgba(59, 130, 246, ${trailAlpha})`
            : `rgba(147, 197, 253, ${trailAlpha})`;
          ctx.lineWidth = radius * 0.5;
          ctx.stroke();
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        
        if (light) {
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
          // Glow for bright close stars
          if (depth > 0.7 && star.brightness > 0.7) {
            ctx.shadowBlur = radius * 4;
            ctx.shadowColor = `rgba(147, 197, 253, ${alpha * 0.5})`;
          }
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        star.prevX = sx;
        star.prevY = sy;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarfieldBackground;
