import React from 'react'
import "./sutiPage.css"
import fundiSuti from "../image/fundi2.jpeg"
import { Link } from 'react-router-dom'
import contactList from './contactList';

function sutiPage() {
  return (
    <div className='sutipage'>
        <div><h1 className='suti-h1'>Suti</h1></div>
       <div className='ure-div'>Urefu</div> 
       <input type="number" name='vipimo'  className="urf-inp"/ >
       <div className='ure-div'>Kifua</div> 
       <input type="number" name='vipimo'  className="urf-inp"/ >
       <div className='ure-div'>Bega</div> 
       <input type="number" name='vipimo'  className="urf-inp"/ >
       <div className='ure-div'>Shingo</div> 
       <input type="number" name='vipimo'  className="urf-inp"/ >
       <Link to="/contactList"><button className='send-btn'>
       Send
    </button></Link>
    </div>
  )
}

export default sutiPage