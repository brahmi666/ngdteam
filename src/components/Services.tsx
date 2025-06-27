import { motion } from "framer-motion";
import { Palette, Code, Monitor, Smartphone, Globe, Gauge } from "lucide-react";
import "./Services.css";

// Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Services() {
  const services = [
    {
      icon: <Palette />,
      title: "Brand Strategy",
      category: "Communication and Digital Marketing",
    },
    {
      icon: <Monitor />,
      title: "Graphic Design",
      category: "Communication and Digital Marketing",
    },
    {
      icon: <Globe />,
      title: "Social Media Management",
      category: "Communication and Digital Marketing",
    },
    {
      icon: <Code />,
      title: "Website Creation",
      category: "Web and Mobile Development",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      category: "Web and Mobile Development",
    },
    {
      icon: <Gauge />,
      title: "SaaS Solutions",
      category: "Web and Mobile Development",
    },
  ];

  return (
    <section
      id="services"
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-[120px] pb-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="mb-10"
        >
          <h2 className="text-[30px] md:text-2xl lg:text-3xl font-bold mb-4">
            Our Services
          </h2>
          <p className="uppercase tracking-wider text-xs text-neutral-400 md:text-lg lg:text-lg">
            Comprehensive solutions for your digital presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index * 0.1}
              className="service-card"
            >
              <span className="service-bg"></span>
              <span className="service-content">
                <span className="service-icon">{service.icon}</span>
                <h3 className="text-xl">{service.title}</h3>
                <p className="text-sm">{service.category}</p>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
