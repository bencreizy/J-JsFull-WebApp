import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector("body");
      if (background) {
        background.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      }
    };

    // Apply smooth GPU-accelerated scrolling to prevent flicker
    document.body.style.willChange = "transform";
    document.body.style.transform = "translateZ(0)";
    document.body.style.transition = "background-position 0.3s ease-out";
    document.body.style.backgroundAttachment = "scroll";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
