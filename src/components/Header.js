import React from "react";
import "./Header.css"; // External CSS for styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ReferoMed AI</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">How It Works</a>
        <a href="#">Features</a>
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
