import { useEffect } from "react";

const useScrollAnimation = (): void => {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const background = document.body;
      if (background) {
        background.style.backgroundPosition = `center ${y * 0.4}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollAnimation;
