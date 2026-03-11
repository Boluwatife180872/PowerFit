import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose PowerFit?</h2>
          <p className="section-subtitle">
            We're not just a gym, we're your fitness family
          </p>
        </div>
        <div className="about-content">
          <div className="about-features">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Premium Equipment</h3>
              <p>
                State-of-the-art fitness equipment from leading brands to ensure
                the best workout experience.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Trainers</h3>
              <p>
                Certified personal trainers with years of experience to guide
                you towards your fitness goals.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Access</h3>
              <p>
                Train on your schedule with round-the-clock access to all our
                facilities and equipment.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Community</h3>
              <p>
                Join a supportive community of fitness enthusiasts who motivate
                and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
