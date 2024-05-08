// components/ProjectCard.js
import { motion } from "framer-motion";
import React, { useState } from "react";

const ProjectCard = ({ name, description, linkToPdf }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-2xl cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.05 }}
      layout
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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

export default ProjectCard;
