import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bookshelf from './pages/Bookshelf';
import foodImg from './assets/food.png';
import avatarImg from './assets/avatar.png';
import './App.css';

// Main Home Component
const Home = () => {
  const [showFood, setShowFood] = useState(false);

  return (
    <div className="home-container">
      <div className="hero-name">
        <img src={avatarImg} alt="" className="hero-avatar" />
        <h3>Christopher Park</h3>
        <span className="hero-email">[chris dot park at berkeley dot edu]</span>
      </div>

      <div className="about-me-section">
        <div className="content-wrapper">
          <div className="bio-text">
            Undergraduate researcher at the <a href="https://nlp.cs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>Natural Language Processing Group</a> @ <a href="https://bair.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>BAIR</a>.
       
       
       
            <br /><br />

            Former researcher at <a href="https://medschool.ucsf.edu/research" target="_blank" rel="noopener noreferrer" style={{color: '#000', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '0.125rem'}}>UCSF School of Medicine</a>, on wearable devices.
       

            <br /><br />

            In the beginning, a violinist.

            <div className="section-divider"></div>

            <div className="navigation-links">
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
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App; 