import React from "react";
import AnimatedText from "./AnimatedText";
import PdfButton from "./PdfButtons";

const Contact: React.FC = () => {
  return (
    <div>
      <AnimatedText>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
          Contact me:
        </h1>
        <p className="text-xl lg:text-2xl text-white">
          You can contact me via my email:{" "}
          <span className="font-bold">thomas.florion@epita.fr</span>
        </p>
        <p className="text-xl lg:text-2xl text-white">
          Or you can contact me via my phone number:{" "}
          <span className="font-bold">07 49 87 01 11</span>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <PdfButton pdfUrl="/pdfs/thomasCVFrancais.pdf" linkText="CV(FR)" />
          <PdfButton pdfUrl="/pdfs/thomasCVEnglish.pdf" linkText="CV(EN)" />
        </div>
      </AnimatedText>
    </div>
  );
};

export default Contact;
