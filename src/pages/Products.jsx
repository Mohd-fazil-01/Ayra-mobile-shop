import React, { useState } from 'react';
import { Search, Filter, MessageCircle } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    { id: 1, name: 'Premium Smartphone', category: 'Smartphones', img: '/images/products/smartphone_mockup.png' },
    { id: 2, name: 'Wireless Earbuds', category: 'Mobile Accessories', img: '/images/products/mobile_accessories.png' },
    { id: 3, name: 'Business Laptop', category: 'Laptops', img: '/images/products/laptop_premium.png' },
    { id: 4, name: 'Smart Refrigerator', category: 'Refrigerators', img: '/images/products/refrigerator_modern.png' },
    { id: 5, name: 'Front-Load Washing Machine', category: 'Washing Machines', img: '/images/products/washing_machine.png' },
    { id: 6, name: 'Split Air Conditioner', category: 'Air Conditioners', img: '/images/products/air_conditioner.png' },
    { id: 7, name: 'Desert Air Cooler', category: 'Coolers', img: '/images/products/air_cooler.png' },
    { id: 8, name: 'OLED Smart TV', category: 'LED TVs', img: '/images/products/led_tv.png' },
    { id: 9, name: 'Luxury Sofa Set', category: 'Furniture', img: '/images/products/furniture_sofa.png' },
    { id: 10, name: 'Ceramic Dinnerware Set', category: 'Crockery', img: '/images/products/crockery_set.png' }
  ];

  const categories = ['All', 'Smartphones', 'Mobile Accessories', 'Laptops', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Coolers', 'LED TVs', 'Furniture', 'Crockery'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="products-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">Our Product Catalog</h1>
        
        <div className="products-header">
          <div className="search-bar">
            <Search size={20} className="search-icon"/>
            <input type="text" placeholder="Search products..." />
          </div>
          
          <div className="category-filters">
            <Filter size={20} className="filter-icon d-none-mobile"/>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-actions">
                  <button className="btn btn-primary btn-small">Inquire Now</button>
                  <button className="btn btn-whatsapp btn-small" aria-label="WhatsApp Inquiry">
                    <MessageCircle size={18}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
