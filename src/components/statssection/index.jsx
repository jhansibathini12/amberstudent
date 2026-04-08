import React from 'react';
import { stats } from '../../mockData';
import './index.css'; // Importing the standard CSS file

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-wrapper">
                <img 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="stat-icon" 
                />
              </div>
              <h3 className="stat-title">
                {stat.value} <span className="stat-label">{stat.label}</span>
              </h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Trustpilot Widget */}
        <div className="trust-widget-container">
          <div className="trust-card">
            <div className="trust-content">
              <div className="trust-stars">★★★★★</div>
              <div className="trust-info">
                <div className="trust-score">TrustScore 4.8</div>
                <div className="trust-review-count">9,445 reviews on Trustpilot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;