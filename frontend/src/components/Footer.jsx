import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo">
            <img src="logo.png" alt="Global Robotics Academy" className="logo-image" />
          </div>
          <p className="footer-tag" style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.4', color: '#5a6067' }}>Build. Innovate. Compete. Go Global.</p>
          <div className="footer-contact">
            <p className="contact-item">+91 9922552891</p>
            <p className="contact-item">gra.stemsage@gmail.com</p>
            <p className="contact-item">Mumbai, India</p>
          </div>
        </div>
        <div className="footer-col">
          <Link to="/about">About</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/teams">Our Teams</Link>
          <Link to="/impact">Our Impact</Link>
          <Link to="/partners">Schools &amp; Partners</Link>
        </div>
        <div className="footer-col">
          <Link to="/gallery">Gallery</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © 2024 GLOBAL ROBOTICS ACADEMY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;