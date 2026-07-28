import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      title: "Pro-Grade Gloves",
      description: "Engineered with triple-density foam for unmatched shock absorption and wrist support.",
      icon: "🥊"
    },
    {
      title: "Performance Apparel",
      description: "Moisture-wicking, ultra-lightweight fabrics designed to keep you cool under pressure.",
      icon: "🥋"
    },
    {
      title: "Training Equipment",
      description: "Durable heavy bags and focus mitts built to withstand the most intense sessions.",
      icon: "🏋️"
    }
  ];

  return (
    <section id="gear" className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">THE <span className="text-primary-gradient">ARSENAL</span></h2>
          <p className="section-subtitle">Gear that matches your dedication.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className={`feature-card glass-panel animate-fade-in delay-${(index + 1) * 100}`} 
              key={index}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
