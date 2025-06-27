import { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true); // Start fading out
    }, 1500); // Start fade-out after 1.5s

    const removeScreenTimer = setTimeout(() => {
      setIsVisible(false); // Completely remove the splash screen
    }, 2200); // Remove after fade animation completes (0.7s fade-out)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeScreenTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isFadingOut ? "fade-out" : ""}`}>
      <img src="/ngd.png" alt="NGD Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
