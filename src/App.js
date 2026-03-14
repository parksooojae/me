import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Musings from './pages/Musings';
import Bookshelf from './pages/Bookshelf';
import foodImg from './assets/food.png';
import './App.css';

// Main Home Component
const Home = () => {
  const [showFood, setShowFood] = useState(false);

  return (
    <div className="home-container">
      <div className="hero-name">
        <h3>Christopher Park</h3>
        <span className="hero-email">[chris dot park at berkeley dot edu]</span>
      </div>

      <div className="about-me-section">
        <div className="content-wrapper">
          <div className="bio-text">
            <br />
            Hi, I'm Chris!
            <br /><br />
            
            I'm a 2nd year undergraduate studying CS (+ quantum computing) at UC Berkeley.
            <br />
            I am particularly interested in maximizing the efficiency and capabilities of language models. 
            <br />
            Scaling compute is seductive. Efficiency is principled.
            <br /><br />
            
            Over the summer, I built tools for {' '}
            <a href="https://www.adobe.com/about-adobe.html" target="_blank" rel="noopener noreferrer" className="adobe-link">Adobe</a>
            {''}. <br />
            First semester of college, I wrote algos for <a href="https://business.amazon.com/" target="_blank" rel="noopener noreferrer" className="amazon-link">Amazon</a>'s recommendation engine.
            <br /><br />
            I create {' '}
            <span
              className="food-hover-trigger"
              onMouseEnter={() => setShowFood(true)}
              onMouseLeave={() => setShowFood(false)}
            >
              tasting menus
              <span className={`polaroid ${showFood ? 'polaroid-visible' : ''}`}>
                <img src={foodImg} alt="Peach, Pesto & Burrata Sandwich" />
                <span className="polaroid-caption">Peach, Pesto &amp; Burrata Sandwich</span>
              </span>
            </span>
            {' '} for friends and close acquaintances. <a href="https://warring.st/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>Reach out if you are interested</a>!

            <br /><br /><br /><br />

            
            <strong>Yap with me about:</strong><br />

            • Language Models<br />
            • Stoicism & existentialism<br />
            • Game Theory<br /><br />



            <div className="section-divider"></div>

            <div className="navigation-links">
              <Link to="/musings">{"> musings"}</Link>
              <Link to="/bookshelf">{"> bookshelf"}</Link>
            </div>

            <div className="section-divider"></div>


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