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
          Books that have shaped my thinking and understanding of the world.<br />
          <br /><br />
          
          • The Brief Wondrous Life of Oscar Wao<br />
          • Never Let Me Go<br />
          • Sing, Unburied, Sing<br />
          • Flowers for Algernon<br />
          • Greek Lessons<br />
          • Human Acts<br />
          • L'ultime secret by Bernard Werber<br />
          • The Catcher in the Rye<br />
          • I Am a Strange Loop<br />
          • Gödel, Escher, Bach<br />
          • The Little Prince<br />
          • Momo. Novel by Michael Ende<br />
          • 전갈아이<br />
          • The House of Scorpion<br />
          • "Skellig" by David Almond<br />
          • The Wizard's Bakery by Gu Byeong-mo<br />
          • 앉아있는 악마
        </div>
      </div>
    </div>
  );
};

export default Bookshelf; 