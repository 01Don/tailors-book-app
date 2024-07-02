import React, { useState } from 'react';
import "./contactlist.css";
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';

export default function ContactList() {
 

  return (
    <div className='contact-page'>
      <h1>My Contact</h1>
      <div className='contact-div'>
       <SearchBar/>
      </div>
      <Link to="/contactlist">
        <button className='send-btn1'>
          Next
        </button>
      </Link>
    </div>
  );
}
