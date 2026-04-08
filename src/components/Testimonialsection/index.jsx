import React, { useRef } from 'react';
import { testimonials } from '../../mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Trust of 1 Million+ students
          </h2>
          <div className="rating-container">
            <div className="stars">★★★★★</div>
            <div className="review-count">9.4K reviews</div>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          <button
            onClick={() => scroll('left')}
            className="nav-button prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={scrollRef} className="carousel-track">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">{testimonial.review}</p>
                <div className="testimonial-footer">
                  <img 
                    src={testimonial.flag} 
                    alt="country flag" 
                    className="footer-flag" 
                  />
                  <div className="footer-info">
                    <p className="user-name">{testimonial.name}</p>
                    <p className="user-university">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="nav-button next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;