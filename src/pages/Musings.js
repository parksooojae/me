import React from 'react';
import { Link } from 'react-router-dom';

const Musings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>musings</h1>
      </div>
      
      <div className="page-content">

        <div className="coming-soon">
          <em>Content coming soon...</em>
        </div>
      </div>
    </div>
  );
};

export default Musings; 