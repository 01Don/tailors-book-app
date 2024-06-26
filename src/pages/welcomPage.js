import React from 'react'
import "./welcomePage.css"
import fundi from "../image/fundi.jpeg";
import { Link } from 'react-router-dom';

function welcomPage() {
  return (
    <div>  <header className="App-header">
    <h1 className='h1'>CHAGUA NGUO</h1>
    <Link to="/sutiPage"><button className='suti-div'>
     Suti
    </button></Link>
    <button className='suruali-div'>
     Suruali
    </button>
    <button className='kizibao-div'>
     Kizibao
    </button>
    <button className='shati-div'>
     Shati
    </button>
    <div>
     <img src={fundi} alt='picha ya fundi'  className='img-fundi'/>
    </div>
   </header></div>
  )
}

export default welcomPage