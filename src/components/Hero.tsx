import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img src="/hero-bg.png" alt="Libra X Libra Hero" className="hero-image" />
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-wrapper animate-fade-in">
          <span className="hero-subtitle delay-100">ENGINEERED FOR CHAMPIONS</span>
          <h1 className="hero-title delay-200">
            ELEVATE YOUR <br />
            <span className="text-primary-gradient">FIGHT GAME</span>
          </h1>
          <p className="hero-description delay-300">
            Premium boxing gear crafted for performance, durability, and style. 
            Join the elite circle of Libra X Libra athletes.
          </p>
          <div className="hero-actions delay-300">
            <button className="btn btn-primary hero-btn">
              Explore Collection
            </button>
            <button className="btn btn-outline hero-btn">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
