"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./portfolio.css";

interface Project {
  title: string;
  category: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Application",
    category: "Web Development",
    image: "/p2.png",
    image1: "/amatun1.jpg",
    image2: "/amatun2.jpg",
    image3: "/amatun3.jpg",
    image4: "/amatun4.jpg",
    image5: "/amatun5.jpg",
  },
  {
    title: "Application Mobile",
    category: "Mobile Development",
    image: "/phone.png",
    image1: "/mobile1.png",
    image2: "/mobile2.png",
    image3: "/mobile3.png",
    image4: "/mobile2.png",
    image5: "/mobile4.png",
  },
  {
    title: "E-commerce management",
    category: "Dashboard",
    image: "/dash.jpg",
    image1: "/dash1.jpg",
    image2: "/dash2.jpg",
    image3: "/dash3.jpg",
    image4: "/dash4.jpg",
    image5: "/dash4.jpg",
  },
  {
    title: "AI-Powered Analytics",
    category: "Data Science",
    image: "/brand3.jpg",
    image1: "/analytics1.jpg",
    image2: "/analytics2.jpg",
    image3: "/analytics3.jpg",
    image4: "/analytics4.jpg",
    image5: "/analytics5.jpg",
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);

  const sliderImages = useMemo(() => {
    return selectedProject
      ? [
          selectedProject.image1,
          selectedProject.image2,
          selectedProject.image3,
          selectedProject.image4,
          selectedProject.image5,
        ]
      : [];
  }, [selectedProject]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  }, [sliderImages.length]);

  // Preload images
  const preloadImages = (project: Project) => {
    setLoading(true);
    const imageUrls = [
      project.image,
      project.image1,
      project.image2,
      project.image3,
      project.image4,
      project.image5,
    ];
    Promise.all(
      imageUrls.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
          })
      )
    ).then(() => {
      setLoading(false);
      setSelectedProject(project);
      setCurrentSlide(0);
    });
  };

  useEffect(() => {
    if (sliderImages.length > 0) {
      const nextIndex = (currentSlide + 1) % sliderImages.length;
      const img = new Image();
      img.src = sliderImages[nextIndex];
    }
  }, [currentSlide, sliderImages]);

  // Slide animation
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-[110px] pb-24 bg-black"
      id="portfolio"
    >
      <div className="portfolio-container text-center">
        <div className="bento-grid">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
            return (
              <motion.div
                key={index}
                ref={ref}
                className={`bento-item bento-item-${index + 1}`}
                onClick={() => preloadImages(project)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="bento-image"
                />
                <div className="bento-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="spinner"></div>
          </motion.div>
        )}

        {selectedProject && !loading && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="portfolio-modal-content">
              <button className="prev-button" onClick={prevSlide}>
              </button>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={sliderImages[currentSlide]}
                  src={sliderImages[currentSlide]}
                  alt="Project Slide"
                  className="slider-image"
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />
              </AnimatePresence>
              <button className="next-button" onClick={nextSlide}>
              </button>
              <button
                className="close-button rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                ❌
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
