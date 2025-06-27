import { useRef } from "react";
import { motion } from "framer-motion";
import "./TeamFanned.css";

// Static team data.
const team = [
  { name: "Aymen Farhat", role: "Founder of NGD", image: "aaymen.jpg" },
  { name: "Amira Chaabane", role: "General Diractor", image: "aamira.jpg" },
  {
    name: "Mohamed Amine Issaoui",
    role: "Fullstack Developer",
    image: "damn.jpg",
  },
  { name: "Amine Sbii", role: "UX/UI Developer", image: "amine.jpg" },
  { name: "Rami Sassi", role: "DevOps Developer", image: "rami.jpg" },
  {
    name: "Sandra Chamsi",
    role: " Social media Manager",
    image: "ssandra.jpg",
  },
  { name: "Feres Brahmi", role: "Fullstack Developer", image: "feres.jpg" },
  { name: "syrine Bousandel", role: "Data Analyst", image: "syrine.jpg" },
  { name: "Mohamed Selmi", role: "Audit", image: "mohamedselmi.jpg" },
];

// Motion variants.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        {/* Header */}
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Team</h2>
          <p>Experts with a passion for digital innovation</p>
        </motion.div>

        {/* Carousel + Nav */}
        <div className="carousel-wrapper">
          <button onClick={() => scroll(-300)} className="nav-btn left">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button onClick={() => scroll(300)} className="nav-btn right">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <motion.div
            className="team-cards"
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileTap={{ cursor: "grabbing" }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="team-card"
                variants={cardVariant}
              >
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
