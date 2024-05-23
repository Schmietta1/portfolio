import { motion } from "framer-motion";
import React from "react";

// Constants for animation variants
const animationVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

const PdfButton = ({ pdfUrl, linkText }) => {
  return (
    <motion.a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 text-white p-4 rounded-lg shadow-2xl text-center font-bold"
      variants={animationVariants}
      initial="initial"
      whileHover="hover"
      layout
    >
      {linkText}
    </motion.a>
  );
};

export default PdfButton;