import React from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">Contact Us</h1>
        
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <p className="contact-desc">Have any questions about our products or services? Feel free to reach out to us. We are always here to help you.</p>
            
            <div className="info-cards">
              <div className="info-card">
                <MapPin className="info-icon" size={32}/>
                <div>
                  <h3>Visit Us</h3>
                  <p>Main Market, Near Clock Tower<br/>Afzalgarh, Uttar Pradesh 246722</p>
                </div>
              </div>
              <div className="info-card">
                <Phone className="info-icon" size={32}/>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210<br/>+91 91234 56789</p>
                </div>
              </div>
              <div className="info-card">
                <Mail className="info-icon" size={32}/>
                <div>
                  <h3>Email Us</h3>
                  <p>info@afzalmobile.com<br/>support@afzalmobile.com</p>
                </div>
              </div>
              <div className="info-card">
                <Clock className="info-icon" size={32}/>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Sunday<br/>9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h2>Send us a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 xxxxx xxxxx" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message <Send size={18} style={{marginLeft: '8px'}}/>
              </button>
            </form>
          </div>
        </div>

        <div className="map-section section">
          <h2 className="text-center">Find Us on Google Maps</h2>
          <div className="map-container">
            {/* Placeholder map iframe for Afzalgarh */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27806.940989047975!2d78.6657929424756!3d29.40348731057417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1db0f214db25%3A0xcda19ea5ec73b184!2sAfzalgarh%2C%20Uttar%20Pradesh%20246722!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
