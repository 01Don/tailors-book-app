import React from 'react'
import "./contactlist.css"
import { Link } from 'react-router-dom'

export default function contactList() {
  return (
    <div className='contact-page'>
        <h1>Contact List</h1>
        <div className='contact-div'>
         <ul className='contact-name'>
            <li className='contact'>Fundi Juma</li>
            <li className='contact'>Fundi Ayubu</li>
            <li className='contact'>Babu Iddi</li>
            <li className='contact'>Mazengo Fundi</li>
            <li className='contact'>Fundi Juma</li>
            <li className='contact'>Fundi Ayubu</li>
            <li className='contact'>Babu Iddi</li>
            <li className='contact'>Mazengo Fundi</li>
            <li className='contact'>Fundi Juma</li>
            <li className='contact'>Fundi Ayubu</li>
            <li className='contact'>Babu Iddi</li>
            <li className='contact'>Mazengo Fundi</li>
            <li className='contact'>Fundi Juma</li>
            <li className='contact'>Fundi Ayubu</li>
            <li className='contact'>Babu Iddi</li>
            <li className='contact'>Mazengo Fundi</li>
         </ul>
        
        </div>
        <Link to="/contactlist"><button className='send-btn1'>
       Next
    </button></Link>
    </div>
  )
}
