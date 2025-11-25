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
          speed={0.2}
          amplitude={0.3}
          interactive={false}
        />
      </div>
      
      <div className="about-me-section">
        <div className="about-me-text">
          About Me
        </div>
        
        <div className="content-wrapper">
          <div className="bio-text">
            Hi, I'm Chris!
            <br /><br />
            
            I study CS at UC Berkeley, where I spend my free time practicing kendo, swimming, or making music.
            <br /><br />
            
            I built tools for {' '}
            <a href="https://www.adobe.com/about-adobe.html" target="_blank" rel="noopener noreferrer" className="adobe-link">Adobe</a>
            {' '} over the summer.
            <br /><br />

            
            <strong>A few of many things that interest me:</strong><br />

            • Speech-language models. Language is mankind's greatest invention, and speech is the vessel.<br />
            • Modeling stochasticity (the human body, weather, market, poker)<br />
            • Model interpretability<br />
            • Stoicism & existentialism<br />
            • Game Theory<br />

            <div className="section-divider"></div>

            <div className="navigation-links">
              <Link to="/musings">{"> musings"}</Link>
              <Link to="/photos">{"> photos"}</Link>
              <Link to="/bookshelf">{"> bookshelf"}</Link>
            </div>

            <div className="section-divider"></div>

            <div className="social-links">
              <a href="https://www.instagram.com/parksooojae/" target="_blank" rel="noopener noreferrer">@Instagram</a>
              <a href="https://www.linkedin.com/in/soojae/" target="_blank" rel="noopener noreferrer">@LinkedIn</a>
              <a href="mailto:chris.park@berkeley.edu">@Email</a>
            </div>

          </div>
        </div>
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