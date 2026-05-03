import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  delay?: number;
}

const ParallaxSection = ({ children, speed = 0.3, delay = 0 }: ParallaxSectionProps) => {
  const { ref, y, opacity, scale } = useParallax(speed);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
