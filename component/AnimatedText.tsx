import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 1, 
        ease: "easeOut",
        staggerChildren: 0.3,
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="text-center text-xl"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
