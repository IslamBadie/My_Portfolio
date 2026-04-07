// Scroll animation is now handled by framer-motion in AnimatedSection component
// This hook is kept for backward compatibility but no longer needed
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    // No-op: animations handled by framer-motion
  }, []);
};
