import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Bookshelf = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>📚 Bookshelf</h1>
      </div>
      
      <div className="page-content">
        <p>Books that have shaped my thinking and understanding of the world.</p>
        <p>From technical texts to philosophical works, fiction to biographies.</p>
        
        <div className="coming-soon">
          <em>Reading list coming soon...</em>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf; 