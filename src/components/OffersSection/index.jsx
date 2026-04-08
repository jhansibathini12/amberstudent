import React from 'react';
import { offers } from '../../mockData';
// import { Button } from './ui/button';
import './index.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        {/* Section Header */}
        <div className="offers-header">
          <h2 className="offers-title">
            Amber Referral Program and Offers
          </h2>
          <p className="offers-subtitle">
            Several promotions, deals and special offers crafted just for you.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="offers-grid">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`offer-card offer-card-${offer.id}`}
              /* If your mockData 'gradient' property contains raw CSS values, 
                 you can apply it via style={{ background: offer.gradient }} */
            >
              <div className="offer-content">
                <h3 className="offer-card-title">{offer.title}</h3>
                <p className="offer-card-description">{offer.description}</p>
                <button 
                  size="sm" 
                  className="offer-button"
                >
                  {offer.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;