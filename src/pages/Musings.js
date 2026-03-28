import React from 'react';
import { Link } from 'react-router-dom';

const Musings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>musings</h1>
        <p>shower thoughts i'll maybe recycle for a blog.</p>
      </div>
      
      <div className="page-content">
        <ul>
          <li>
            "Ruthlessness" is born either of great compassion and love, or of a complete lack thereof.
          </li>
          <li>
            Read slowly and deliberately. Relish the content, savor it, as you would with fine wine.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Musings; 