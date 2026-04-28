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
          <li>
            I’ve begun to dedicate more time to research and academics. 
            <br />
       
            In doing so, I discovered myself with a growing dread that the field of knowledge is:
            <div style={{ marginLeft: '2em' }}>
              (1) incredibly vast and deep<br />
              (2) expanding faster than I can perceive.
            </div>
            Dunning–Kruger effect.
            It scares me more that this realization never struck me until now. I’m very humbled.
          </li>
        </ul>
       
   
      </div>
    </div>
  );
};

export default Musings; 