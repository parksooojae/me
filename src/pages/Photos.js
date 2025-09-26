import React from 'react';
import { Link } from 'react-router-dom';

const Photos = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>photos</h1>
      </div>
      
      <div className="page-content">
        
        <div className="coming-soon">
          <em>Gallery coming soon...</em>
        </div>
      </div>
    </div>
  );
};

export default Photos; 