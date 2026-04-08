import React from 'react';
import { partners } from '../../mockData';
import './index.css';

const PartnersSection = () => {
  const featuredLogos = [
    'https://prod-static-assets.amberstudent.com/images/featured-in/fin-exp.png',
    'https://prod-static-assets.amberstudent.com/images/featured-in/eco-times.png',
    'https://prod-static-assets.amberstudent.com/images/featured-in/invezz.png',
    'https://prod-static-assets.amberstudent.com/images/featured-in/yourstory.png',
    'https://prod-static-assets.amberstudent.com/images/featured-in/outlook-biz.png',
    'https://prod-static-assets.amberstudent.com/images/featured-in/cnbc.png'
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* Section Header */}
        <div className="partners-header">
          <h2 className="partners-title">
            We have the best partners
          </h2>
        </div>

        {/* Partners Carousel */}
        <div className="carousel-overflow">
          <div className="carousel-track">
            {/* Triple the array to ensure seamless looping */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-logo-item">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured In */}
        <div className="featured-section">
          <div className="featured-header">
            <h3 className="featured-title">Featured In</h3>
          </div>
          <div className="carousel-overflow">
            <div className="carousel-track slow">
              {[...featuredLogos, ...featuredLogos].map((logo, index) => (
                <div key={index} className="featured-logo-item">
                  <img
                    src={logo}
                    alt="Media Publication"
                    className="featured-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;