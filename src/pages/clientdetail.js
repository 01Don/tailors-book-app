import React, { useState } from 'react';
import "./clientdetail.css";
import { Link } from 'react-router-dom';

function ClientDetail() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    fittingDate: '',
    price: '',
    gender: 'male',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSendClick = () => {
    console.log('Name:', form.name);
    console.log('Address:', form.address);
    console.log('Fitting Date:', form.fittingDate);
    console.log('Price:', form.price);
    console.log('Gender:', form.gender);
  };

  return (
    <div>
      <h1>Client Details</h1>
      <div className='client-detail'>
        <form>
          <label className='label1'>FULL NAME</label>
          <input
            placeholder='E.g Raydon A. Osengo'
            name='name'
            type='text'
            className='inpt1'
            value={form.name}
            onChange={handleChange}
          />

          <label className='label2'>ADDRESS</label>
          <input
            placeholder='E.g Raydon A. Osengo'
            name='address'
            type='text'
            className='inpt2'
            value={form.address}
            onChange={handleChange}
          />

          <label className='label3'>
            <h1 className="h-fitt">FITTING DATE</h1>
            <input
              name='fittingDate'
              type='date'
              className='inpt3'
              value={form.fittingDate}
              onChange={handleChange}
            />
          </label>

          <label className='label4'>
            <h1 className="h-price">PRICE</h1>
          </label>
          <input
            placeholder='100,000'
            name='price'
            type='text'
            className='inpt4'
            value={form.price}
            onChange={handleChange}
          />

          <label className='label5'>
            <h1 className="h-gender">GENDER</h1>
            <select
              name='gender'
              className='inpt5'
              value={form.gender}
              onChange={handleChange}
            >
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
          </label>
          <Link to="/contactlist">
            <button className='send-btn' onClick={handleSendClick}>
              Send
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ClientDetail;
