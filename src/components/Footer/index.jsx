import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import './index.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="contact-bar">
        <div className="footer-container">
          <div className="contact-header">
            <h3 className="contact-title">Need help? Let's connect</h3>
            <p className="contact-subtitle">If you have any queries, feel free to contact us</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="icon-badge pink-bg">
                <MessageCircle className="icon pink-text" />
              </div>
              <div className="status-tag pink-tag">2 Mins Reply</div>
              <p className="contact-method">Live Chat</p>
            </div>

            <div className="contact-card">
              <div className="icon-badge green-bg">
                <MessageCircle className="icon green-text" />
              </div>
              <div className="status-tag green-tag">2 Mins Reply</div>
              <p className="contact-method">Chat on Whatsapp</p>
            </div>

            <div className="contact-card">
              <div className="icon-badge yellow-bg">
                <Mail className="icon yellow-text" />
              </div>
              <p className="contact-method">Email Us</p>
            </div>

            <div className="contact-card">
              <div className="icon-badge blue-bg">
                <Phone className="icon blue-text" />
              </div>
              <p className="contact-method">+91 8035735724</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-footer">
        <div className="footer-container">
          <div className="nav-grid">
            <div className="brand-column">
              <h3 className="footer-logo">amber</h3>
              <p className="copyright">© 2026. All rights reserved.</p>
              <div className="rating-row">
                <div className="stars">★★★★★</div>
                <span className="rating-val">4.8</span>
              </div>
              <p className="review-stat">9,445 reviews</p>
              <div className="app-section">
                <p className="app-label">Get the app</p>
                <div className="app-links">
                  <img src="https://prod-static-assets.amberstudent.com/images/playstore-android.svg?auto=format&trim=auto" alt="Play Store" />
                  <img src="https://prod-static-assets.amberstudent.com/images/app-store.svg?auto=format&trim=auto" alt="App Store" />
                </div>
              </div>
            </div>
            <div className="links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Refer a Friend</a></li>
                <li><a href="#">Group Bookings <span className="badge">New</span></a></li>
                <li><a href="#">List with us <span className="badge">New</span></a></li>
                <li><a href="#">Careers <span className="badge">Hiring!</span></a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Discover</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Amber Plus</a></li>
                <li><a href="#">Scholarships <span className="badge">Apply</span></a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">T&C</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Contact us</h4>
              <ul className="contact-details">
                <li><a href="mailto:contact@amberstudent.com">contact@amberstudent.com</a></li>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="tel:+447456741634">+44 7456741634</a></li>
              </ul>
              <div className="social-box">
                <p>Follow us on:</p>
                <div className="social-icons">
                  <a href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
                  </a>
                  <a href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-bar">
        <div className="footer-container">
          <p>Payment Options</p>
          <img src="https://prod-static-assets.amberstudent.com/images/footer_payment_partners.svg" alt="Payment Partners" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
