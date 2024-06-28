import React from 'react'
import "./clientdetail.css"
import { Link } from 'react-router-dom'


function ClientDetail() {
  return (
    <div>
        <h1>Client Details</h1>
        <div className='client-detail'>
            <form>
                <label className='label1'>FULL NAME</label>
                <input placeholder='E.g Raydon A. Osengo' name='name' type='text' className='inpt1'/>
                
                <label className='label2'>ADDRESS</label>
                <input placeholder='E.g Raydon A. Osengo' name='address' type='text' className='inpt2'/>
                
                <label className='label3'><h1 className="h-fitt">FITTING DATE</h1>
                <input name='fittingDate' type='date' className='inpt3'/></label>
                
                <label className='label4'><h1 className="h-price">PRICE</h1></label>
                <input placeholder='100,000' name='price' type='price' className='inpt4'/>
                
                <label className='label5'><h1 className="h-gender">GENDER</h1>
                <select name='gender' className='inpt5'>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </select></label>
                <Link to="/contactlist"><button className='send-btn'>
       Send
    </button></Link>
            </form>
        </div>
    </div>
  )
}

export default ClientDetail
