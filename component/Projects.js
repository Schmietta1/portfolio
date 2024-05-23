import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "./AnimatedText";

// Constants for animation variants
const animationVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 }, // Increase the scale value for a bigger effect
};

const ProjectCard = ({ name, description, linkToPdf }) => {
  return (
    <motion.div
      className="project-card bg-gray-800 p-6 rounded-lg shadow-2xl"
      variants={animationVariants}
      initial="initial"
      whileHover="hover"
      layout
    >
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white"
      >
        <p>{description}</p>
        {linkToPdf && (
          <a
            href={linkToPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500"
          >
            Report of the assignment
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-[3%] text-white">
          My Projects:
        </h1>
        <div></div>
        <div className="project-grid grid grid-cols-2 gap-4 px-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </AnimatedText>
    </div>
  );
};

export default Projects;
