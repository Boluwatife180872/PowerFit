import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Transform Your</span>
            <span className="title-line highlight">Body & Mind</span>
          </h1>
          <p className="hero-description">
            Join PowerFit and embark on a journey to become the strongest
            version of yourself. State-of-the-art equipment, expert trainers,
            and a community that motivates you every step of the way.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" id="startJourneyBtn">
              <span>Start Your Journey</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn btn-secondary" id="watchVideoBtn">
              <i className="fas fa-play"></i>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number" data-target="5000">0</div>
            <div className="stat-label">Happy Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="50">0</div>
            <div className="stat-label">Expert Trainers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="15">0</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
