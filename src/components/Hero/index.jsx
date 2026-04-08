import React from 'react';
import { Search, CheckCircle2, Headphones, BadgeCheck } from 'lucide-react';
import './index.css'; // Importing the standard CSS file

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: 'url(https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/1440%20-%20web-min.png?q=90)',
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Headline */}
          <p className="hero-pretext">Home away from home</p>
          <h1 className="hero-headline">
            Book student accommodations near top
            <br className="desktop-break" /> universities and cities across the globe
          </h1>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <CheckCircle2 className="trust-icon" />
              <span className="trust-text">Verified Properties</span>
            </div>
            <div className="trust-badge">
              <Headphones className="trust-icon" />
              <span className="trust-text">24x7 Assistance</span>
            </div>
            <div className="trust-badge">
              <BadgeCheck className="trust-icon" />
              <span className="trust-text">Lowest Price Guarantee</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <div className="search-select-wrapper">
                <select className="search-select">
                  <option>Search by</option>
                  <option>City</option>
                  <option>University</option>
                  <option>Property</option>
                </select>
              </div>
              <div className="search-divider" />
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="City University or Property"
                  className="search-input"
                />
              </div>
              <button className="search-button">
                <Search className="search-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;