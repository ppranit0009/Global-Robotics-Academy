import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
    };
    
    checkAuth();
    
    // Listen for storage changes (for multi-tab support)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="logo.png" alt="Global Robotics Academy" className="logo-image" />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobileMenu}>About</Link>
          <Link to="/programs" className={isActive('/programs') ? 'active' : ''} onClick={closeMobileMenu}>Programs</Link>
          <Link to="/teams" className={isActive('/teams') ? 'active' : ''} onClick={closeMobileMenu}>Our Teams</Link>
          <Link to="/impact" className={isActive('/impact') ? 'active' : ''} onClick={closeMobileMenu}>Our Impact</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link>
          {isAuthenticated && (
            <Link to="/team-form" className={`special-link ${isActive('/team-form') ? 'active' : ''}`} onClick={closeMobileMenu}>Build Your Team</Link>
          )}
          <div className="mobile-auth">
            {isAuthenticated ? (
              <button className="btn" onClick={handleLogout}>Logout ↗</button>
            ) : (
              <Link className="btn" to="/login" onClick={closeMobileMenu}>Start Your Journey ↗</Link>
            )}
          </div>
        </nav>
        
        {/* Desktop auth button */}
        <div className="desktop-auth">
          {isAuthenticated ? (
            <button className="btn" onClick={handleLogout}>Logout ↗</button>
          ) : (
            <Link className="btn" to="/login">Start Your Journey ↗</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;