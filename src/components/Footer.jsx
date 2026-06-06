import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Afzal Mobile & Electronics</h3>
          <p>Your Trusted Destination for Mobiles, Electronics & Home Appliances in Afzalgarh.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><MapPin size={20} /> <span>Main Market, Afzalgarh, UP</span></li>
            <li><Phone size={20} /> <span>+91 98765 43210</span></li>
            <li><Mail size={20} /> <span>info@afzalmobile.com</span></li>
            <li><Clock size={20} /> <span>Mon - Sun: 9:00 AM - 9:00 PM</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Afzal Mobile & Electronics Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
