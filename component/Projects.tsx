import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedText from "./AnimatedText";

// Constants for animation variants
const animationVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } }, // Enhanced hover effect
};

interface Project {
  name: string;
  shortDescription: string;
  fullDescription: string;
  linkToPdf?: string;
}

interface ProjectCardProps extends Project {
  isExpanded: boolean;
  toggleDescription: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  shortDescription,
  fullDescription,
  linkToPdf,
  isExpanded,
  toggleDescription,
}) => {
  return (
    <motion.div
      className="project-card bg-blue-900/50 p-6 rounded-xl shadow-2xl hover:shadow-none cursor-pointer"
      variants={animationVariants}
      initial="initial"
      whileHover="hover"
      layout
      onClick={toggleDescription}
    >
      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white text-opacity-90"
      >
        <p>{isExpanded ? fullDescription : shortDescription}</p>
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

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects: Project[] = [
    {
      name: "PING",
      shortDescription: "Online IDE for web development.",
      fullDescription:
        "PING is an Online IDE that supports HTML, CSS, and JavaScript with color syntax highlighting and code completion.",
    },
    {
      name: "ERO1",
      shortDescription: "Snow plowing route optimization.",
      fullDescription:
        "ERO1 uses advanced and custom algorithms to optimize snow plowing routes in Montreal, significantly reducing operational costs and improving response times.",
      linkToPdf: "/pdfs/ERO1.pdf",
    },
    {
      name: "TIGER",
      shortDescription: "Compiler creation for Tiger language.",
      fullDescription:
        'TIGER project involves creating a compiler for the "Tiger" programming language, focusing on learning compiler design principles.',
    },
    {
      name: "42sh",
      shortDescription: "POSIX shell development.",
      fullDescription:
        "42sh is a project to create a fully functional POSIX shell written in C, aiming to mimic features found in advanced shells like bash and zsh.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <AnimatedText>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
          My Projects:
        </h1>
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isExpanded={expandedProject === index}
              toggleDescription={() => toggleDescription(index)}
            />
          ))}
        </div>
      </AnimatedText>
    </div>
  );
};

export default Projects;
