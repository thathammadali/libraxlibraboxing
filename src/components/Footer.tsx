import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Libra X Libra" style={{ height: '64px' }} />
          </a>
          <p className="footer-description">
            Premium boxing gear for those who demand excellence in the ring and beyond.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Gloves</a></li>
              <li><a href="#">Apparel</a></li>
              <li><a href="#">Equipment</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Athletes</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Libra X Libra. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
