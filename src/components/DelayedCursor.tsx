import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DelayedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: { clientX: any; clientY: any }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDelayedPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }));
    }, 5);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <motion.div
      className="hidden lg:block fixed top-0 left-0 w-10 h-10 
             bg-purple-500 bg-opacity-20 backdrop-filter 
             backdrop-blur-sm rounded-full pointer-events-none 
             z-[9999]"
      animate={{ x: delayedPosition.x - 20, y: delayedPosition.y - 20 }}
      transition={{ type: "tween", ease: "linear", duration: 0.02 }}
      style={{ position: "fixed" }}
    />
  );
};

export default DelayedCursor;
