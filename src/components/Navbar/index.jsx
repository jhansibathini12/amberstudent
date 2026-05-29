import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, Menu, User } from 'lucide-react';
import './index.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('amberUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('amberUser');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <span className="logo-text">amber</span>
          </Link>
          <div className="desktop-nav">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by City University or Property"
                className="search-input"
              />
              <button className="search-button">
                <Search size={16} />
              </button>
            </div>
          </div>
          <div className="right-menu">
            <button className="menu-item">
              <span className="text-sm">Support</span>
            </button>
            <button className="menu-item">
              <Globe size={16} />
              <span className="text-sm">En</span>
            </button>
            
            {user ? (
              <div className="user-section">
                <div className="user-info">
                  <User size={16} />
                  <span className="text-sm">{user.name}</span>
                </div>
                <button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => navigate('/login')} variant="outline" size="sm">
                Login
              </button>
            )}
            
            <button className="icon-button">
              <Menu size={20} />
            </button>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <div className="mobile-search-container">
                <input
                  type="text"
                  placeholder="Search by City University or Property"
                  className="search-input"
                />
                <Search className="mobile-search-icon" size={20} />
              </div>
              <button className="mobile-menu-item">Support</button>
              
              {user ? (
                <>
                  <div className="mobile-user-info">
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                  <div className="w-full">
                    <button onClick={handleLogout} variant="outline" className="w-full">
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full">
                  <button onClick={() => navigate('/login')} variant="outline" className="w-full">
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
