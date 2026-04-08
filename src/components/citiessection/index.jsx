import React, { useState } from 'react';
import { cities, countries } from '../../mockData';
import './index.css';

const CitiesSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('uk');

  const filteredCities = cities.filter(city => {
    if (selectedCountry === 'uk') return city.country === 'United Kingdom';
    if (selectedCountry === 'us') return city.country === 'United States';
    if (selectedCountry === 'aus') return city.country === 'Australia';
    return true;
  });

  return (
    <section className="cities-section">
      <div className="cities-container">
        {/* Section Header */}
        <div className="cities-header">
          <h2 className="cities-title">
            Popular Cities Across the Globe
          </h2>
          <p className="cities-subtitle">
            Book student accommodations near top cities and universities around the world.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="tabs-container">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              className={`tab-button ${selectedCountry === country.id ? 'active' : ''}`}
            >
              <img src={country.flag} alt={country.name} className="tab-flag" />
              <span className="tab-name">
                {country.name}
              </span>
            </button>
          ))}
        </div>

        {/* Cities Grid */}
        <div className="cities-grid">
          {filteredCities.map((city) => (
            <div key={city.id} className="city-card">
              <div className="city-image-wrapper">
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-image"
                />
              </div>
              <div className="city-overlay" />
              <div className="city-info">
                <h3 className="city-name">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;