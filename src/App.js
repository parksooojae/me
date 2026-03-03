import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Musings from './pages/Musings';
import Bookshelf from './pages/Bookshelf';
import './App.css';

// Main Home Component
const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-name">
        <h1>Christopher Park</h1>
      </div>

      <div className="about-me-section">
        <div className="content-wrapper">
          <div className="bio-text">
            Hi, I'm Chris!
            <br /><br />
            
            I study CS at UC Berkeley. I swim long distances, read lots of books, and make music.
            <br /><br />
            
            I built tools for {' '}
            <a href="https://www.adobe.com/about-adobe.html" target="_blank" rel="noopener noreferrer" className="adobe-link">Adobe</a>
            {' '} over the summer.
            <br /><br />

            
            <strong>Talk to me about:</strong><br />

            • Speech ∪ language models<br />
            • Modeling stochasticity (the human body, weather, market, poker)<br />
            • Stoicism & existentialism<br />
            • Game Theory<br />

            <div className="section-divider"></div>

            <div className="navigation-links">
              <Link to="/musings">{"> musings"}</Link>
              <Link to="/bookshelf">{"> bookshelf"}</Link>
            </div>

            <div className="section-divider"></div>

            <div className="social-links">
              <span>chris dot park at berkeley dot edu</span>
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
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App; 