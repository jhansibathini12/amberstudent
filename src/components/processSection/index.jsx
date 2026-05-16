import React from 'react';
import { ArrowRight } from 'lucide-react';
import './index.css'; 

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Discover and Finalise',
      description: 'Choose from a plethora of verified student home listings',
      image: 'https://static-assets.amberstudent.com/images/bookings-steps-hd-1.svg'
    },
    {
      number: 2,
      title: 'Get your paperwork done',
      description: "Paperwork's on us, no need to fuss.",
      image: 'https://static-assets.amberstudent.com/images/bookings-steps-hd-2.svg'
    },
    {
      number: 3,
      title: 'Accommodation Booked!',
      description: 'Relax, pack your bags, and unravel a new life chapter!',
      image: 'https://static-assets.amberstudent.com/images/bookings-steps-hd-3.svg'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            Book your place in 3 easy steps
          </h2>
          <p className="process-subtitle">
            Book places in major cities and universities across the globe
          </p>
        </div>

        
        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-card">
                <div className="step-content group">
                  <div className="step-number">
                    {step.number}
                  </div>
                  <div className="step-image-container">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="step-image" 
                    />
                  </div>
                  
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
