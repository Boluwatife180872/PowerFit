import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-dumbbell"></i>
              <span>PowerFit</span>
            </div>
            <p>
              Transform your body and mind with PowerFit. Join our community of
              fitness enthusiasts and achieve your goals with expert guidance
              and state-of-the-art facilities.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li><a href="#">Strength Training</a></li>
              <li><a href="#">HIIT Cardio</a></li>
              <li><a href="#">Yoga & Pilates</a></li>
              <li><a href="#">Group Fitness</a></li>
              <li><a href="#">Personal Training</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 123 Fitness Street, Gym City, GC 12345</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@powerfit.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 PowerFit Gym. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
