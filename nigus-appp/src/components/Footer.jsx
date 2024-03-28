import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">
          
          <img src="https://media.licdn.com/dms/image/C560BAQFfu4cLsyyIiw/company-logo_200_200/0/1647519855082/nigus_systems_logo?e=2147483647&v=beta&t=3nMhW3V2EubBdkcM3V7FfGAZfdIkmf3iRK_zjTdmrrc" alt="Company Logo" />
        </div>
        <div className="footer-links">
         
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            
          </ul>
        </div>
        <div className="social-icons">
          
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nigus. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer