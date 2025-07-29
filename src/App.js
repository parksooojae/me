import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Musings from './pages/Musings';
import Photos from './pages/Photos';
import Bookshelf from './pages/Bookshelf';
import LiquidChrome from './LiquidChrome';
import './App.css';

// Main Home Component
const Home = () => {
  return (
    <div className="home-container">
      <div className="corner-text">
        <h1 style={{ fontSize: '40px' }}>Christopher Park</h1>
      </div>
      
      {/* LiquidChrome component positioned under the name */}
      <div className="liquid-chrome-wrapper">
        <LiquidChrome
          baseColor={[0.45, 0.45, 0.45]}
          speed={0.1}
          amplitude={0.5}
          interactive={false}
        />
      </div>
      
      <div className="about-me-section">
        <div className="about-me-text">
          About Me
        </div>
        
        <img src="/me2.jpg" alt="Me" className="opportunity-image" />
        
        <div className="bio-text">
          Hi, I'm Christopher! I study computer science at UC Berkeley. I'm currently building tools for{' '}
          <a href="https://www.adobe.com/about-adobe.html" target="_blank" rel="noopener noreferrer">Adobe</a>.<br /><br />
          
          I live in Berkeley, where I spend my free time practicing kendo, swimming, and running the beautiful Fire Trail.<br /><br />
          
          Things that interest me:<br />
          • Stochastic processes of the world (the human body, weather, market, poker)<br />
          • Game Theory<br />
          • AI interpretability<br />
          • Embodied AI<br /><br />
          .<br />
          .<br />
          .<br /><br />
          <span className="quote">"For those we'll never meet"</span>
        </div>
      </div>
      
      <div className="divider-line"></div>
      
      <div className="links">
        <a href="/musings">💭 musings</a>
        <a href="/photos">🎞️ photos</a>
        <a href="/bookshelf">📚 bookshelf</a>
      </div>
    </div>
  );
};

// Sub-pages are now imported as separate components

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musings" element={<Musings />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 