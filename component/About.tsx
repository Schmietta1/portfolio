import React from "react";
import AnimatedText from "./AnimatedText";

const About: React.FC = () => {
  return (
    <div>
      <AnimatedText>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
          About me:
        </h1>
        <p className="text-xl lg:text-2xl text-white">
          I'm a 22 years old student at EPITA, I love video games and I'm
          passionate about science and quantum science.
        </p>
      </AnimatedText>
    </div>
  );
};

export default About;
