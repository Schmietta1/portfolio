import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "./AnimatedText";

// Constants for animation variants
const animationVariants = {
  initial: { scale: 1 },
  // hover: { scale: 1.1, transition: { duration: 0.3 } }, // Enhanced hover effect
};

const ProjectCard = ({ name, description, linkToPdf }) => {
  return (
    <motion.div
      className="project-card bg-gradient-to-b from-blue-900 to-black p-6 rounded-xl shadow-2xl border border-gray-300 hover:shadow-none"
      variants={animationVariants}
      initial="initial"
      whileHover="hover"
      layout
    >
      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white text-opacity-90"
      >
        <p>{description}</p>
        {linkToPdf && (
          <a
            href={linkToPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-900"
          >
            View Report
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { name: "PING", description: "Online IDE for HTML, CSS, and JS." },
    {
      name: "ERO1",
      description: "Optimize snow plowing routes in Montreal.",
      linkToPdf: "/pdfs/ERO1.pdf",
    },
    {
      name: "TIGER",
      description: 'Create a compiler for "Tiger" programming language.',
    },
    { name: "42sh", description: "Create a POSIX shell. Written in C" },
  ];

  return (
    <div className="projects relative">
      <AnimatedText>
        <h1 className="text-4xl lg:text-6xl font-bold mb-[2%] text-white">
          My Projects:
        </h1>
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </AnimatedText>
    </div>
  );
};

export default Projects;
