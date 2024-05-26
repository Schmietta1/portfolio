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
      className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-900"
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