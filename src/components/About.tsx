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
          <div className="about-top">
            <div className="about-image" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" alt="Gym Interior" />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
            <div className="about-text" data-aos="fade-left">
              <h3>More Than Just A Gym</h3>
              <p>
                At PowerFit, we believe that fitness is a lifestyle, not a chore. 
                Our journey started with a simple belief: everyone deserves access 
                to world-class facilities and expert guidance to reach their potential.
              </p>
              <p>
                We've spent the last 15 years building a community where members 
                support one another, where trainers are mentors, and where every 
                workout brings you closer to the best version of yourself.
              </p>
              <ul className="about-list">
                <li><i className="fas fa-check-circle"></i> Certified Professional Trainers</li>
                <li><i className="fas fa-check-circle"></i> 24/7 Access to Facilities</li>
                <li><i className="fas fa-check-circle"></i> Personalized Training Programs</li>
                <li><i className="fas fa-check-circle"></i> Modern Equipment & Amenities</li>
              </ul>
            </div>
          </div>
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
