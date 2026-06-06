import React from 'react';
import './About.css';
import { Target, Eye, HeartHandshake, Award, Users, ShoppingBag } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">About Afzal Mobile & Electronics</h1>
        
        <div className="about-intro-grid">
          <div className="about-text-content">
            <h2>Our Story</h2>
            <p>Welcome to Afzal Mobile & Electronics Shop, Afzalgarh's most trusted destination for cutting-edge technology and premium home appliances. With years of experience serving the local community, we have built a reputation for excellence, reliability, and unparalleled customer service.</p>
            <p>What started as a small mobile shop has now grown into a comprehensive electronics and furniture showroom, all thanks to the unwavering trust of our customers. We believe in providing only 100% genuine products with authorized warranties.</p>
          </div>
          <div className="about-image-content">
             <img src="/images/shop/shop image internal 2.jpg" alt="Showroom Interior" className="main-image"/>
          </div>
        </div>

        <div className="stats-grid section">
          <div className="stat-card">
            <Award className="stat-icon" size={40}/>
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" size={40}/>
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <ShoppingBag className="stat-icon" size={40}/>
            <h3>50,000+</h3>
            <p>Products Sold</p>
          </div>
        </div>

        <div className="mission-vision-grid section">
          <div className="mv-card">
            <Target size={40} className="mv-icon"/>
            <h3>Our Mission</h3>
            <p>To bring the latest and most reliable technology and home essentials to the people of Afzalgarh at highly competitive prices, while maintaining the highest standards of customer service.</p>
          </div>
          <div className="mv-card">
            <Eye size={40} className="mv-icon"/>
            <h3>Our Vision</h3>
            <p>To become the leading and most trusted retail brand in the region, known for our expansive range of premium electronics, exceptional shopping experience, and long-lasting customer relationships.</p>
          </div>
          <div className="mv-card">
            <HeartHandshake size={40} className="mv-icon"/>
            <h3>Customer Commitment</h3>
            <p>We promise full transparency, dedicated after-sales support, and expert guidance to help you choose the right products that perfectly match your needs and budget.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
