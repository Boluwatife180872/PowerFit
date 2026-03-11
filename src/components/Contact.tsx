import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your fitness journey? Contact us today!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>123 Fitness Street<br />Gym City, GC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@powerfit.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h3>Hours</h3>
                <p>Mon-Fri: 5AM-11PM<br />Sat-Sun: 6AM-10PM</p>
              </div>
            </div>
          </div>
          <form className="contact-form" id="contactForm">
            <div className="form-group">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="form-group">
              <select id="interest" name="interest" required>
                <option value="">Select Your Interest</option>
                <option value="membership">Membership Information</option>
                <option value="personal-training">Personal Training</option>
                <option value="group-classes">Group Classes</option>
                <option value="corporate">Corporate Membership</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="interest">Interest</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows={5} required></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="form-submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
