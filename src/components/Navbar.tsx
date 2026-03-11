import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-dumbbell"></i>
          <span>PowerFit</span>
        </div>
        <ul className="nav-menu" id="navMenu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#programs" className="nav-link">Programs</a></li>
          <li><a href="#trainers" className="nav-link">Trainers</a></li>
          <li><a href="#pricing" className="nav-link">Pricing</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="#contact" className="nav-link cta-btn">Join Now</a></li>
        </ul>
        <div className="hamburger" id="hamburger" aria-label="Open menu" role="button" tabIndex={0}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
