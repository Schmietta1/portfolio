import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
        Contact me:
      </h1>
      <p className="text-xl lg:text-2xl text-white">
        You can contact me via my email: thomas.florion@epita.fr
      </p>
      <p className="text-xl lg:text-2xl text-white">
        Or you can contact me via my phone number: 07 49 87 01 11
      </p>
    </div>
  );
};

export default Contact;
