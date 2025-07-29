import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Musings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>💭 Musings</h1>
      </div>
      
      <div className="page-content">
        <p>Welcome to my collection of thoughts and reflections.</p>
        <p>This space is where I share ideas about technology, life, and the fascinating intersections between them.</p>
        
        <div className="coming-soon">
          <em>Content coming soon...</em>
        </div>
      </div>
    </div>
  );
};

export default Musings; 