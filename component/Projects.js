import { motion } from "framer-motion";
import React from "react";

// Constants for animation variants
const animationVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

const ProjectCard = ({ name, description, linkToPdf }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Toggle expanded state
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      className="project-card bg-gray-800 p-6 rounded-lg shadow-2xl"
      onClick={handleToggle}
      variants={animationVariants}
      initial="initial"
      whileHover="hover"
      layout
    >
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      {isExpanded && (
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
              View PDF
            </a>
          )}
        </motion.div>
      )}
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
      <h2
        className="text-5xl font-bold text-center mb-8 text-white"
        style={{ marginTop: "20vh", width: "100%" }}
      >
        My Projects:
      </h2>
      <div className="project-grid grid grid-cols-3 gap-4 px-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
