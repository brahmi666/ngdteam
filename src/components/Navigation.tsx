import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [visible, setVisible] = useState(true);
  const email = "contact@ngd.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      setIsDropdownOpen(false);
    }, 1000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 sm:top-6 md:top-10 left-0 right-0 mx-auto w-full max-w-[90%] md:max-w-[70vw] lg:max-w-fit px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border border-black/10 shadow-lg rounded-lg flex items-center justify-center z-[5000]"
      style={{
        backdropFilter: "blur(4px) saturate(180%)",
        backgroundColor: "rgba(16, 16, 16, 0.85)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex space-x-6 text-sm sm:text-base text-neutral-500">
        <a href="#hero" className="hover:text-neutral-300 transition-colors">
          Home
        </a>
        <a href="#services" className="hover:text-neutral-300 transition-colors">
          Services
        </a>
        <a href="#portfolio" className="hover:text-neutral-300 transition-colors">
          Portfolio
        </a>
        <a href="#team" className="hover:text-neutral-300 transition-colors">
          Team
        </a>
      </div>
    </motion.nav>
  );
}
