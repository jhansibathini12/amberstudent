import React from 'react';
import { features } from '../../mockData';
import './index.css'; // Importing the standard CSS file

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <h2 className="features-title">
            Book your Perfect Accommodation
          </h2>
          <p className="features-subtitle">
            Take the hassle out of securing your student home for the best years of your life
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-container">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="feature-icon" 
                />
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;