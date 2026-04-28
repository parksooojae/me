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
            <br />
            
            I am a 2nd year undergraduate studying CS (+ quantum computing) at UC Berkeley.
            <br />
            My broad interests in ML and mathematics point to improving the efficiency and capabilities of large reasoning models. 
            <br />
            Currently, I spend time conducting research at the <a href="https://nlp.cs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{color: '#1a5490'}}>Natural Language Processing Group </a> @ BAIR.

            <br />
            <br />
             <a href="https://warring.st/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>Book a spot at my restauraunt</a>.

            <br /><br /><br /><br />

          


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