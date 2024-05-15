import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white text-center p-5 w-full bottom-0">
      <div>
        <p>&copy; {currentYear} Schmietta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
