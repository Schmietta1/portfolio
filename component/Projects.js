import { motion } from "framer-motion";
import React from "react";

// Constants for animation variants to improve reusability and maintainability
const ANIMATION_VARIANTS = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

const ProjectCard = ({ name, description, linkToPdf }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="project-card bg-gray-800 p-6 rounded-lg shadow-2xl"
      onClick={handleToggle}
      variants={ANIMATION_VARIANTS}
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
    {
      name: "PING",
      description:
        "A team of 4 students. We were assigned to create an online IDE for HTML, CSS, and JS.",
    },
    {
      name: "ERO1",
      description:
        "A project of 4 students. We were assigned to optimize the route of plowing snow in Montreal city using graphs and Python.",
      linkToPdf: "/pdfs/ERO1.pdf",
    },
    {
      name: "TIGER",
      description:
        'A project of 4 students. We were assigned to create a compiler for the programming language "Tiger".',
    },
    {
      name: "42sh",
      description:
        "A project of 4 students. We were assigned to create a POSIX shell.",
    },
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
