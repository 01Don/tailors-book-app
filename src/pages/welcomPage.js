import React from 'react';
import "./welcomePage.css";
import fundi from "../image/fundi.jpeg";
import { Link } from 'react-router-dom';

function welcomePage() {
  const handleClick = (buttonName) => {
    console.log(buttonName);
  };

  return (
    <div>
      <header className="App-header">
        <h1 className='h1'>CHAGUA NGUO</h1>
        <Link to="/sutiPage">
          <button className='suti-div' onClick={() => handleClick('Suti')}>
            Suti
          </button>
        </Link>
        <button className='suruali-div' onClick={() => handleClick('Suruali')}>
          Suruali
        </button>
        <button className='kizibao-div' onClick={() => handleClick('Kizibao')}>
          Kizibao
        </button>
        <button className='shati-div' onClick={() => handleClick('Shati')}>
          Shati
        </button>
        <div>
          <img src={fundi} alt='picha ya fundi' className='img-fundi' />
        </div>
      </header>
    </div>
  );
}

export default welcomePage;
