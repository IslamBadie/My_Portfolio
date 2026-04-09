import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("reload-scroll-y", String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => window.removeEventListener("beforeunload", saveScrollPosition);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigationEntry?.type === "reload";
    const savedScrollY = Number(sessionStorage.getItem("reload-scroll-y") || "0");

    if (isReload && savedScrollY > 0) {
      window.scrollTo({ top: savedScrollY, left: 0, behavior: "auto" });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          sessionStorage.removeItem("reload-scroll-y");
        });
      });

      return;
    }

    sessionStorage.removeItem("reload-scroll-y");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
};

export default ScrollToTop;
