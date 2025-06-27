import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { WavyBackground } from "./ui/WavyBackground";

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [typedText, setTypedText] = useState("");
  const text = `Transforming Ideas into Reality`;
  const minScale = 0.4;
  const scaleSpeed = 300;

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const newScale = 1 - window.scrollY / scaleSpeed;
        setScale(Math.max(minScale, Math.min(1, newScale)));
      });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let i = 0;
    setTypedText(""); // Reset typed text before animation
    const typeWriter = () => {
      if (i < text.length) {
        setTypedText((prev) => prev + text[i]);
        i++;
        setTimeout(typeWriter, 80);
      }
    };
    typeWriter();
  }, []);

  return (
    <WavyBackground>
      <div
        id="hero"
        className="relative flex items-center justify-center h-screen text-white overflow-hidden"
      >
        {/* Content */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-wider syncopate-regular  text-center text-xs text-neutral-300 md:text-sm lg:text-sm">
              Transforming Ideas into Reality
            </p>

            <TextGenerateEffect
              words="New Generation of Developers"
              className="text-center text-[30px] md:text-4xl lg:text-6xl font-bold syncopate-regular"
            />

            {/* <p className="text-center text-neutral-600 md:tracking-wider mb-6 text-xs md:text-lg lg:text-lg">
          At NGD, we believe in shaping the future of technology by pushing
          the boundaries of innovation.
          </p> */}

            <a href="#about">
              <MagicButton
                title="see our work "
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
