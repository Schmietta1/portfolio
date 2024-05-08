import React from "react";

function Banner() {
  return (
    <div className="bg-gray-800 text-white text-center p-8 lg:p-8 bg-cover bg-banner-pattern">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">
        Schmietta&apos;s Portfolio
      </h1>
      <p className="text-xl lg:text-2xl">A showcase of my work and skills</p>
    </div>
  );
}

export default Banner;
