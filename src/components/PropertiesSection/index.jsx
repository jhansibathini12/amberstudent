import React from 'react';
import { properties } from '../../mockData';
import './index.css';

const PropertiesSection = () => {
  return (
    <section className="properties-section">
      <div className="properties-container">
        <h2 className="properties-title">Featured Properties</h2>
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.images[0]} alt={property.name} className="property-image" />
              <div className="property-info">
                <h3 className="property-name">{property.name}</h3>
                <p className="property-location">{property.city}, {property.country}</p>
                <div className="property-price">
                  <span className="price">{property.price}</span>
                  <span className="period">/{property.period}</span>
                </div>
                {property.save && <p className="property-save">Save {property.save}</p>}
                {property.rating && (
                  <div className="property-rating">
                    <span>{property.rating}</span>
                    {property.reviews && <span>({property.reviews} reviews)</span>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;