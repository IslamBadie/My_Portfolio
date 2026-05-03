import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  gradientBorder?: boolean;
  variants?: any;
  whileHover?: any;
  transition?: any;
}

const GlassCard = ({
  children,
  className,
  glowOnHover = true,
  gradientBorder = false,
  variants,
  whileHover,
  transition,
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowOnHover) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [glowOnHover]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden group",
        gradientBorder && "p-[1px]",
        className
      )}
      variants={variants}
      whileHover={whileHover}
      transition={transition}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      {gradientBorder && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
      )}

      {/* Glass content */}
      <div className={cn(
        "relative rounded-xl bg-card/60 backdrop-blur-xl border border-border/50",
        "transition-all duration-500",
        "group-hover:bg-card/80 group-hover:border-primary/30",
        gradientBorder ? "p-6" : "p-6"
      )}>
        {/* Cursor glow */}
        {glowOnHover && isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, hsl(var(--primary) / 0.15), transparent 60%)`,
            }}
          />
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
