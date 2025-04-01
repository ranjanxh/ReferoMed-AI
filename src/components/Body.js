// Body.js
import React from "react";
import './Body.css';

const Body = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Revolutionizing Rural Healthcare Referrals</h1>
          <p>AI-powered routing for optimal patient care, reducing delays, and connecting communities.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <h2>How It Works</h2>
        <div className="cards">
          <div className="card">
            <h3>Input Data</h3>
            <p>Enter patient details, location, and required care.</p>
          </div>
          <div className="card">
            <h3>AI Analysis</h3>
            <p>Our system analyzes data to determine the best care center.</p>
          </div>
          <div className="card">
            <h3>Optimal Referral</h3>
            <p>Receive recommendations for the fastest, most efficient care routing.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 ReferoMed AI. All rights reserved. | <a href="#" style={{color:"#00A86B"}}>Privacy Policy</a> | <a href="#" style={{color:"#00A86B"}}>Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default Body;
