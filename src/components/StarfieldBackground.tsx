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

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  trail: { x: number; y: number }[];
}

const STAR_COUNT = 800;
const MAX_DEPTH = 1000;
const SPEED = 0.5;

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const nextShootRef = useRef(2 + Math.random() * 3);

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

  const spawnShootingStar = useCallback((w: number, h: number) => {
    const side = Math.random();
    let x: number, y: number;
    if (side < 0.5) {
      x = Math.random() * w;
      y = -10;
    } else {
      x = w + 10;
      y = Math.random() * h * 0.5;
    }
    const angle = Math.PI * 0.6 + Math.random() * 0.4;
    const speed = 8 + Math.random() * 6;
    shootingStarsRef.current.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: 40 + Math.random() * 30,
      size: 1.5 + Math.random() * 1.5,
      trail: [],
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (starsRef.current.length === 0) initStars(canvas.width, canvas.height);
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

      // --- Stars ---
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
        const twinkle = depth > 0.5 ? 0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset) : 1;
        const alpha = depth * 0.7 * (0.5 + star.brightness * 0.5) * twinkle;
        const radius = star.size * depth * 1.8 * (depth > 0.6 ? 0.85 + 0.15 * Math.sin(time * star.twinkleSpeed * 1.5 + star.twinkleOffset) : 1);

        if (star.prevX && star.prevY) {
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = light ? `rgba(59,130,246,${alpha * 0.3})` : `rgba(147,197,253,${alpha * 0.3})`;
          ctx.lineWidth = radius * 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        if (light) {
          ctx.fillStyle = `rgba(59,130,246,${alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(200,220,255,${alpha})`;
          if (depth > 0.7 && star.brightness > 0.7) {
            ctx.shadowBlur = radius * 4;
            ctx.shadowColor = `rgba(147,197,253,${alpha * 0.5})`;
          }
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        star.prevX = sx;
        star.prevY = sy;
      }

      // --- Shooting Stars ---
      nextShootRef.current -= 0.016;
      if (nextShootRef.current <= 0) {
        spawnShootingStar(w, h);
        nextShootRef.current = 3 + Math.random() * 5;
      }

      const shoots = shootingStarsRef.current;
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > 20) s.trail.shift();

        const progress = s.life / s.maxLife;
        const fadeIn = Math.min(s.life / 5, 1);
        const fadeOut = progress > 0.6 ? 1 - (progress - 0.6) / 0.4 : 1;
        const opacity = fadeIn * fadeOut;

        if (s.trail.length > 1) {
          for (let j = 1; j < s.trail.length; j++) {
            const t = j / s.trail.length;
            const a = opacity * t * 0.8;
            const lw = s.size * t;
            ctx.beginPath();
            ctx.moveTo(s.trail[j - 1].x, s.trail[j - 1].y);
            ctx.lineTo(s.trail[j].x, s.trail[j].y);
            ctx.strokeStyle = light ? `rgba(59,130,246,${a})` : `rgba(180,210,255,${a})`;
            ctx.lineWidth = lw;
            ctx.lineCap = "round";
            ctx.stroke();
          }
        }

        // Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = light ? `rgba(59,130,246,${opacity})` : `rgba(220,235,255,${opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = light ? `rgba(59,130,246,${opacity * 0.6})` : `rgba(147,197,253,${opacity * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (s.life >= s.maxLife || s.x < -50 || s.x > w + 50 || s.y > h + 50) {
          shoots.splice(i, 1);
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initStars, spawnShootingStar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarfieldBackground;
