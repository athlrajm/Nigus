import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
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
