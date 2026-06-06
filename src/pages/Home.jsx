import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Tag, ThumbsUp, UserCheck, CheckCircle2, HeadphonesIcon, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const productCategories = [
    { name: 'Smartphones', img: '/images/products/smartphone_mockup.png' },
    { name: 'Mobile Accessories', img: '/images/products/mobile_accessories.png' },
    { name: 'Laptops', img: '/images/products/laptop_premium.png' },
    { name: 'Air Conditioners', img: '/images/products/air_conditioner.png' },
    { name: 'Refrigerators', img: '/images/products/refrigerator_modern.png' },
    { name: 'Washing Machines', img: '/images/products/washing_machine.png' },
    { name: 'Coolers', img: '/images/products/air_cooler.png' },
    { name: 'LED TVs', img: '/images/products/led_tv.png' },
    { name: 'Furniture', img: '/images/products/furniture_sofa.png' },
    { name: 'Crockery', img: '/images/products/crockery_set.png' }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("/images/shop/shop image.jpg")' }}>
        <div className="container hero-content animate-fade-in-up">
          <h1>Afzal Mobile & Electronics Shop</h1>
          <p>Your Trusted Destination for Mobiles, Electronics & Home Appliances in Afzalgarh</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">View Products</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
          <div className="trust-badges">
            <span className="badge"><ShieldCheck size={18}/> Genuine Products</span>
            <span className="badge"><Tag size={18}/> Best Prices</span>
            <span className="badge"><ThumbsUp size={18}/> Trusted Locally</span>
            <span className="badge"><HeadphonesIcon size={18}/> After Sales Support</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section className="section about-preview">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/images/shop/shop image internal.jpg" alt="Inside Afzal Mobile Shop" />
          </div>
          <div className="about-text">
            <h2>Serving Afzalgarh with Trust & Quality</h2>
            <p>Welcome to Afzal Mobile & Electronics Shop. We have been the leading destination for all your technology and home needs. From the latest smartphones to essential home appliances, our commitment to quality, genuine brands, and unparalleled customer satisfaction sets us apart.</p>
            <Link to="/about" className="btn btn-primary">Read More <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS CATEGORIES */}
      <section className="section products-preview bg-surface">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="category-grid">
            {productCategories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <img src={cat.img} alt={cat.name} />
                <div className="category-overlay">
                  <h3>{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section features">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card"><ShieldCheck size={40} className="feature-icon"/><p>Genuine Products</p></div>
            <div className="feature-card"><CheckCircle2 size={40} className="feature-icon"/><p>Authorized Brands</p></div>
            <div className="feature-card"><Tag size={40} className="feature-icon"/><p>Competitive Pricing</p></div>
            <div className="feature-card"><ThumbsUp size={40} className="feature-icon"/><p>Local Trusted Shop</p></div>
            <div className="feature-card"><UserCheck size={40} className="feature-icon"/><p>Expert Guidance</p></div>
            <div className="feature-card"><HeadphonesIcon size={40} className="feature-icon"/><p>Customer Support</p></div>
          </div>
        </div>
      </section>

      {/* 6 & 7. OUR CLIENTS & TESTIMONIALS */}
      <section className="section clients bg-surface">
        <div className="container">
          <h2 className="text-center">Our Happy Customers</h2>
          <div className="clients-grid">
            <img src="/images/customers/unnamed (4).jpg" alt="Customer" className="client-img" />
            <img src="/images/customers/unnamed (5).jpg" alt="Customer" className="client-img" />
            <img src="/images/customers/unnamed (6).jpg" alt="Customer" className="client-img" />
            <img src="/images/customers/unnamed (7).jpg" alt="Customer" className="client-img" />
          </div>
        </div>
      </section>

      {/* 8. COMING SOON OFFERS */}
      <section className="section offers">
        <div className="container text-center">
          <h2>Upcoming Festival Offers</h2>
          <p className="subtitle">Exciting Deals Coming Soon</p>
          <div className="offers-grid">
            <div className="offer-card"><h3>Diwali Mega Sale</h3><p>Up to 50% Off</p></div>
            <div className="offer-card"><h3>Exchange Offer</h3><p>Upgrade Your Phone</p></div>
            <div className="offer-card"><h3>Cashback Offers</h3><p>On Credit Cards</p></div>
            <div className="offer-card"><h3>Easy EMI Plans</h3><p>0% Interest</p></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
