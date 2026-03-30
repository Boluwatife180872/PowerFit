import React from 'react';

const Programs: React.FC = () => {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Find the perfect workout program for your goals
          </p>
        </div>
        <div className="program-filters">
          <button className="filter-btn active" data-filter="all">
            All Programs
          </button>
          <button className="filter-btn" data-filter="strength">Strength</button>
          <button className="filter-btn" data-filter="cardio">Cardio</button>
          <button className="filter-btn" data-filter="flexibility">
            Flexibility
          </button>
          <button className="filter-btn" data-filter="group">Group Classes</button>
        </div>
        <div className="programs-grid">
          <div className="program-card" data-category="strength">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>Strength Training</h3>
              <p>
                Build muscle and increase strength with our comprehensive weight
                training programs.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 45-60 min</span>
                <span><i className="fas fa-fire"></i> High Intensity</span>
              </div>
            </div>
          </div>
          <div className="program-card" data-category="cardio">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>HIIT Cardio</h3>
              <p>
                High-intensity interval training to boost your metabolism and
                burn calories fast.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 30-45 min</span>
                <span><i className="fas fa-fire"></i> Very High</span>
              </div>
            </div>
          </div>
          <div className="program-card" data-category="flexibility">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>Yoga & Pilates</h3>
              <p>
                Improve flexibility, balance, and mental well-being with our
                yoga and pilates classes.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 60 min</span>
                <span><i className="fas fa-leaf"></i> Mindful</span>
              </div>
            </div>
          </div>
          <div className="program-card" data-category="group">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571902251103-671c6d6a6aa8?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>Group Fitness</h3>
              <p>
                Fun and energetic group classes including Zumba, Spin, and Boot
                Camp.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 45 min</span>
                <span><i className="fas fa-users"></i> Group</span>
              </div>
            </div>
          </div>
          <div className="program-card" data-category="strength">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>CrossFit</h3>
              <p>
                Functional fitness combining strength, cardio, and agility for
                total body conditioning.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 60 min</span>
                <span><i className="fas fa-fire"></i> Extreme</span>
              </div>
            </div>
          </div>
          <div className="program-card" data-category="cardio">
            <div className="program-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530549387074-6aa1995fdfd2?auto=format&fit=crop&q=80&w=800')" }}>
              <div className="program-overlay">
                <button className="program-btn">Learn More</button>
              </div>
            </div>
            <div className="program-content">
              <h3>Swimming</h3>
              <p>
                Low-impact cardio workout that's easy on joints while building
                endurance.
              </p>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 30-60 min</span>
                <span><i className="fas fa-swimmer"></i> Low Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
