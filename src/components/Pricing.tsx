import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Flexible membership options to fit your lifestyle
          </p>
        </div>
        <div className="pricing-toggle">
          <span className="toggle-label">Monthly</span>
          <div className="toggle-switch" id="pricingToggle">
            <div className="toggle-slider"></div>
          </div>
          <span className="toggle-label">
            Yearly <span className="discount-badge">Save 20%</span>
          </span>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Basic</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount monthly-price">29</span>
                <span className="amount yearly-price" style={{ display: 'none' }}>279</span>
                <span className="period monthly-period">/month</span>
                <span className="period yearly-period" style={{ display: 'none' }}>/year</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Gym Access (6am-10pm)</li>
                <li><i className="fas fa-check"></i> Basic Equipment</li>
                <li><i className="fas fa-check"></i> Locker Room Access</li>
                <li><i className="fas fa-check"></i> 1 Guest Pass/Month</li>
                <li className="unavailable"><i className="fas fa-times"></i> Personal Training</li>
                <li className="unavailable"><i className="fas fa-times"></i> Group Classes</li>
              </ul>
            </div>
            <button className="pricing-btn">Choose Plan</button>
          </div>
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Premium</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount monthly-price">59</span>
                <span className="amount yearly-price" style={{ display: 'none' }}>567</span>
                <span className="period monthly-period">/month</span>
                <span className="period yearly-period" style={{ display: 'none' }}>/year</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> 24/7 Gym Access</li>
                <li><i className="fas fa-check"></i> All Equipment Access</li>
                <li><i className="fas fa-check"></i> Unlimited Group Classes</li>
                <li><i className="fas fa-check"></i> 2 Personal Training Sessions</li>
                <li><i className="fas fa-check"></i> Nutrition Consultation</li>
                <li><i className="fas fa-check"></i> 5 Guest Passes/Month</li>
              </ul>
            </div>
            <button className="pricing-btn">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Elite</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount monthly-price">99</span>
                <span className="amount yearly-price" style={{ display: 'none' }}>950</span>
                <span className="period monthly-period">/month</span>
                <span className="period yearly-period" style={{ display: 'none' }}>/year</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Everything in Premium</li>
                <li><i className="fas fa-check"></i> Unlimited Personal Training</li>
                <li><i className="fas fa-check"></i> Custom Meal Plans</li>
                <li><i className="fas fa-check"></i> Recovery Suite Access</li>
                <li><i className="fas fa-check"></i> Priority Booking</li>
                <li><i className="fas fa-check"></i> Unlimited Guest Passes</li>
              </ul>
            </div>
            <button className="pricing-btn">Choose Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
