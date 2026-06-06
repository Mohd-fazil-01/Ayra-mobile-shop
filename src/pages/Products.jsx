import React, { useState } from 'react';
import { Search, Filter, MessageCircle } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    { id: 1, name: 'Samsung Galaxy S24 Ultra', category: 'Samsung', img: '/images/products/smartphone_mockup.png' },
    { id: 2, name: 'Apple iPhone 15 Pro Max', category: 'Apple', img: '/images/products/smartphone_mockup.png' },
    { id: 3, name: 'Xiaomi Redmi Note 13 Pro+', category: 'Xiaomi', img: '/images/products/smartphone_mockup.png' },
    { id: 4, name: 'Vivo V30 Pro', category: 'Vivo', img: '/images/products/smartphone_mockup.png' },
    { id: 5, name: 'Oppo Reno 11', category: 'Oppo', img: '/images/products/smartphone_mockup.png' },
    { id: 6, name: 'Realme 12 Pro', category: 'Realme', img: '/images/products/smartphone_mockup.png' },
    { id: 7, name: 'OnePlus 12R', category: 'OnePlus', img: '/images/products/smartphone_mockup.png' },
    { id: 8, name: 'Samsung Galaxy A54', category: 'Samsung', img: '/images/products/smartphone_mockup.png' },
    { id: 9, name: 'Wireless Earbuds Pro', category: 'Accessories', img: '/images/products/mobile_accessories.png' },
    { id: 10, name: '65W Fast Charger', category: 'Accessories', img: '/images/products/mobile_accessories.png' }
  ];

  const categories = ['All', 'Samsung', 'Apple', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'OnePlus', 'Accessories'];

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
