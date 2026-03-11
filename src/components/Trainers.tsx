import React from 'react';

const Trainers: React.FC = () => {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Trainers</h2>
          <p className="section-subtitle">
            Expert professionals dedicated to your success
          </p>
        </div>
        <div className="trainers-grid">
          <div className="trainer-card">
            <div className="trainer-image">
              <div className="trainer-overlay">
                <div className="trainer-social">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="trainer-info">
              <h3>Sarah Johnson</h3>
              <p className="trainer-specialty">Strength & Conditioning</p>
              <p className="trainer-experience">8 Years Experience</p>
              <div className="trainer-certifications">
                <span>NASM-CPT</span>
                <span>CSCS</span>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <div className="trainer-image">
              <div className="trainer-overlay">
                <div className="trainer-social">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="trainer-info">
              <h3>Mike Rodriguez</h3>
              <p className="trainer-specialty">HIIT & Cardio</p>
              <p className="trainer-experience">6 Years Experience</p>
              <div className="trainer-certifications">
                <span>ACE-CPT</span>
                <span>TRX</span>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <div className="trainer-image">
              <div className="trainer-overlay">
                <div className="trainer-social">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="trainer-info">
              <h3>Emma Chen</h3>
              <p className="trainer-specialty">Yoga & Pilates</p>
              <p className="trainer-experience">10 Years Experience</p>
              <div className="trainer-certifications">
                <span>RYT-500</span>
                <span>PMA-CPT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
