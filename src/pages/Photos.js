import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Photos = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>🎞️ Photos</h1>
      </div>
      
      <div className="page-content">
        <p>A visual journey through places I've been and moments I've captured.</p>
        <p>From the trails of Berkeley to everyday beauty around me.</p>
        
        <div className="coming-soon">
          <em>Gallery coming soon...</em>
        </div>
      </div>
    </div>
  );
};

export default Photos; 