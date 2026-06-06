import React from 'react';
import './Services.css';
import { Smartphone, Monitor, Wrench, Shield, Truck, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Sales & Support',
      desc: 'Expert guidance on choosing the right smartphone, plus data transfer and initial setup assistance.'
    },
    {
      icon: <Monitor size={40} />,
      title: 'Electronics Sales',
      desc: 'A comprehensive range of TVs, laptops, and home electronics from authorized and trusted brands.'
    },
    {
      icon: <Settings size={40} />,
      title: 'Home Appliances',
      desc: 'Guidance and sales for refrigerators, washing machines, and coolers suitable for your home size.'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Product Installation',
      desc: 'Professional installation support for ACs, TVs, and large appliances right at your doorstep.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Warranty Assistance',
      desc: 'Seamless processing of manufacturer warranties and reliable after-sales service support.'
    },
    {
      icon: <Truck size={40} />,
      title: 'Delivery Services',
      desc: 'Safe and prompt delivery of large electronics and furniture directly to your home.'
    }
  ];

  return (
    <div className="services-page animate-fade-in-up">
      <div className="container section">
        <h1 className="page-title text-center">Our Services</h1>
        <p className="text-center services-subtitle">Beyond just products, we provide a complete shopping experience.</p>
        
        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-wrapper">
                {srv.icon}
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
