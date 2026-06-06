import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/images/shop/shop image.jpg', alt: 'Shop Exterior' },
    { src: '/images/shop/shop image internal.jpg', alt: 'Showroom Interior' },
    { src: '/images/shop/shop image internal 2.jpg', alt: 'Showroom Interior 2' },
    { src: '/images/shop/shop image for mobile.jpg', alt: 'Shop Details' },
    { src: '/images/customers/unnamed (8).jpg', alt: 'Happy Customer' },
    { src: '/images/customers/unnamed (9).jpg', alt: 'Customer Purchase' },
    { src: '/images/customers/unnamed (10).jpg', alt: 'Customer Purchase' },
    { src: '/images/customers/unnamed (11).jpg', alt: 'Happy Family' },
    { src: '/images/customers/unnamed (12).jpg', alt: 'New Phone Delivery' },
    { src: '/images/customers/unnamed (13).jpg', alt: 'Store Event' },
    { src: '/images/customers/unnamed (14).jpg', alt: 'Appliance Sale' },
    { src: '/images/customers/unnamed (15).jpg', alt: 'Customer Satisfaction' },
    { src: '/images/customers/unnamed (16).jpg', alt: 'Local Support' },
    { src: '/images/customers/unnamed (17).jpg', alt: 'Trusted Clients' },
    { src: '/images/customers/unnamed (18).jpg', alt: 'Happy Buyer' },
    { src: '/images/customers/unnamed (19).jpg', alt: 'Store Experience' },
  ];

  return (
    <div className="gallery-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">Our Gallery</h1>
        <p className="text-center gallery-subtitle">Take a glimpse inside our showroom and meet some of our happy customers.</p>
        
        <div className="masonry-grid">
          {images.map((img, idx) => (
            <div key={idx} className="masonry-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="masonry-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
