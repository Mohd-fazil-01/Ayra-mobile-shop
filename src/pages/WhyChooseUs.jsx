import React from 'react';
import './WhyChooseUs.css';
import { ShieldCheck, ThumbsUp, Tag, HeadphonesIcon, Award, PackageCheck } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="why-us-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">Why Choose Us</h1>
        
        <div className="reasons-grid">
          <div className="reason-card">
            <ShieldCheck className="reason-icon" size={48} />
            <h3>100% Genuine Products</h3>
            <p>We source all our mobiles, electronics, and appliances directly from authorized distributors. Every product comes with an official brand warranty.</p>
          </div>
          <div className="reason-card">
            <ThumbsUp className="reason-icon" size={48} />
            <h3>Trusted Local Reputation</h3>
            <p>Serving Afzalgarh for over 15 years, our shop is synonymous with trust and reliability. We value our relationship with the local community above all else.</p>
          </div>
          <div className="reason-card">
            <Tag className="reason-icon" size={48} />
            <h3>Best Market Pricing</h3>
            <p>We offer highly competitive pricing, seasonal discounts, and easy EMI options to ensure you get the best value for your hard-earned money.</p>
          </div>
          <div className="reason-card">
            <PackageCheck className="reason-icon" size={48} />
            <h3>Wide Product Selection</h3>
            <p>From the latest flagship smartphones to heavy-duty home appliances and elegant furniture, find everything under one roof.</p>
          </div>
          <div className="reason-card">
            <HeadphonesIcon className="reason-icon" size={48} />
            <h3>Reliable Customer Service</h3>
            <p>Our expert staff is always ready to assist you. We guide you through the features and help you make an informed purchase decision.</p>
          </div>
          <div className="reason-card">
            <Award className="reason-icon" size={48} />
            <h3>After Sales Support</h3>
            <p>Our relationship doesn't end at the sale. We provide robust after-sales support, installation assistance, and help with warranty claims.</p>
          </div>
        </div>

        <div className="trust-banner section">
          <div className="trust-content">
            <h2>Experience the Difference</h2>
            <p>Visit Afzal Mobile & Electronics Shop today and experience a world-class shopping environment right here in Afzalgarh.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
