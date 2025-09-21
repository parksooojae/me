import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
        
        <div className="content-wrapper">
          <img src={`${process.env.PUBLIC_URL}/me.jpeg`} alt="Me" className="opportunity-image" />
          
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
      </div>
      
      <div className="divider-line"></div>
      
      <div className="links">
        <Link to="/musings">💭 musings</Link>
        <Link to="/photos">🎞️ photos</Link>
        <Link to="/bookshelf">📚 bookshelf</Link>
      </div>
    </div>
  );
};

// Main App Component with error boundary
const App = () => {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musings" element={<Musings />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App; 