import React from "react";
import AnimatedText from "./AnimatedText";

const Banner: React.FC = () => {
  return (
    <div>
      <AnimatedText>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Schmietta's Portfolio
        </h1>
        <p className="text-xl lg:text-2xl">A showcase of my work and skills</p>
      </AnimatedText>
    </div>
  );
};

export default Banner;
