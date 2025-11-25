import React from 'react';
import { Link } from 'react-router-dom';

const Bookshelf = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to home</Link>
        <h1>bookshelf</h1>
      </div>
      
      <div className="page-content">
        <div className="bio-text">
          Texts that changed my brain chemistry.<br />
          <br />
          <span style={{color: '#cc0000', fontSize: '0.9em'}}>* Reading</span><br />
          <span style={{color: '#1b7001', fontSize: '0.9em'}}>† Reread</span><br />
          <br />
          
          • My Brilliant Friend by  Elena Ferrante <span style={{color: '#cc0000'}}>*</span><br />
          • The Brief Wondrous Life of Oscar Wao<br />
          • Never Let Me Go<br />
          • Sing, Unburied, Sing<br />
          • Flowers for Algernon <span style={{color: '#1b7001'}}>†</span><br />
          • When Breath Becomes Air <span style={{color: '#1b7001'}}>†</span><br />
          • Greek Lessons<br />
          • Human Acts<br />
          • L'ultime Secret<br />
          • The Catcher in the Rye<br />
          • I Am a Strange Loop <span style={{color: '#1b7001'}}>†</span><br />
          • Gödel, Escher, Bach<br />
          • The Little Prince<br />
          • Momo (by Michael Ende)<br />
          • The House of the Scorpion<br />
          • Skellig<br />
          • The Wizard's Bakery (by Gu Byeong-mo)<br />
          • 앉아있는 악마 (by Kim Min-Gyung)<br />
          • I Spy series<br />
          • Purple Hibiscus<br />
          • The Giving Tree<br />
          • The Dictionary of Lost Words<br />
          • TIME100 (April 2013)<br />
          • The Korean-English Historical Terminology Collection (written by my grandfather)<br />


        </div>
      </div>
    </div>
  );
};

export default Bookshelf; 