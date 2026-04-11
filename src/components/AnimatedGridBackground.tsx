import { useEffect, useRef, useCallback } from "react";

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const time = performance.now() * 0.001;
    const spacing = 40;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Determine if light mode
    const isLight = document.documentElement.classList.contains("light");
    const baseColor = isLight ? "100, 130, 200" : "66, 135, 245";
    const baseAlpha = isLight ? 0.06 : 0.04;
    const highlightAlpha = isLight ? 0.25 : 0.2;
    const dotBaseAlpha = isLight ? 0.1 : 0.06;
    const dotHighlightAlpha = isLight ? 0.5 : 0.4;

    // Draw grid lines
    for (let x = 0; x <= w; x += spacing) {
      const distX = Math.abs(x - mx);
      const influence = Math.max(0, 1 - distX / 200);
      const alpha = baseAlpha + influence * highlightAlpha;
      const wave = Math.sin(time * 0.5 + x * 0.01) * 0.015;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${baseColor}, ${alpha + wave})`;
      ctx.lineWidth = influence > 0.3 ? 0.8 : 0.4;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y <= h; y += spacing) {
      const distY = Math.abs(y - my);
      const influence = Math.max(0, 1 - distY / 200);
      const alpha = baseAlpha + influence * highlightAlpha;
      const wave = Math.sin(time * 0.5 + y * 0.01) * 0.015;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${baseColor}, ${alpha + wave})`;
      ctx.lineWidth = influence > 0.3 ? 0.8 : 0.4;
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw intersection dots
    for (let x = 0; x <= w; x += spacing) {
      for (let y = 0; y <= h; y += spacing) {
        const dist = Math.hypot(x - mx, y - my);
        const influence = Math.max(0, 1 - dist / 180);
        const pulse = Math.sin(time * 2 + x * 0.05 + y * 0.05) * 0.5 + 0.5;
        const alpha = dotBaseAlpha + influence * dotHighlightAlpha + pulse * 0.02;
        const radius = 1 + influence * 2.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow on nearby dots
        if (influence > 0.5) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${baseColor}, ${influence * 0.15})`;
          ctx.arc(x, y, radius + 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = document.documentElement.scrollHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.documentElement.scrollHeight}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    animFrameRef.current = requestAnimationFrame(draw);

    // Re-measure height when content changes
    const observer = new ResizeObserver(resize);
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default AnimatedGridBackground;
