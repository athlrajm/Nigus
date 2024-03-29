import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isSticky ? 'fixed' : ''}`}>
      <div className="container">
        <div className="logo">NIGUS</div>
        <nav className="nav-links">
          <div className="dropdown">
            <a href="#features" className="dropbtn">WEB DEVELOPMENT</a>
            <div className="dropdown-content">
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Demo</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#features" className="dropbtn">APPLICATION DEVELOPMENT </a>
            <div className="dropdown-content">
            <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Demo</a>
              <a href="#">Contact</a>
            </div>
          </div>
         
          <div className="dropdown">
            <a href="#solutions" className="dropbtn">AI/ML DEVELOPMENT</a>
            <div className="dropdown-content">
            <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Demo</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#case-studies" className="dropbtn">SYSTEM INTEGRATION</a>
            <div className="dropdown-content">
            <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Demo</a>
              <a href="#">Contact</a>
            </div>
          </div>
          
        </nav>
        <div className="cta-btn">
          <a href='#'><button>CONTACT</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
