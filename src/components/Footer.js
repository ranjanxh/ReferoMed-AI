import React from "react";
import "./Footer.css"; // External CSS for styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2025 ReferoMed AI. All rights reserved. | 
        <a href="#" className="footer-link">Privacy Policy</a> | 
        <a href="#" className="footer-link">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
