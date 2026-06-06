import React from 'react';
import './Services.css';
import { Smartphone, Headphones, Wrench, Shield, Signal, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Sales & Support',
      desc: 'Expert guidance on choosing the right smartphone, plus data transfer and initial setup assistance.'
    },
    {
      icon: <Headphones size={40} />,
      title: 'Premium Accessories',
      desc: 'A comprehensive range of high-quality mobile accessories, covers, chargers, and smartwatches.'
    },
    {
      icon: <Signal size={40} />,
      title: 'Jio-4G SIM Services',
      desc: 'Authorized dealer for new Jio-4G SIM activations, porting, and instant recharges.'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Mobile Repairs',
      desc: 'Professional and quick repair services for major smartphone brands directly at our shop.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Warranty Assistance',
      desc: 'Seamless processing of manufacturer warranties and reliable after-sales service support.'
    },
    {
      icon: <Settings size={40} />,
      title: 'Device Configuration',
      desc: 'Help with software updates, app installations, and resolving software glitches on your mobile.'
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
