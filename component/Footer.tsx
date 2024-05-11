import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-white text-center p-5">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Schmietta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
