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
        <ul>
          <li>
            "Ruthlessness" is born either of great compassion and love, or of a complete lack thereof.
          </li>
          <li>
            Read slowly and deliberately.
          </li>     
       

        </ul>
      </div>
    </div>
  );
};

export default Musings; 