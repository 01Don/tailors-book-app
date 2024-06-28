import React, { useState } from 'react';
import "./sutiPage.css";
import { Link } from 'react-router-dom';

function SutiPage() {
  const [inputs, setInputs] = useState({
    urefu: '',
    kifua: '',
    bega: '',
    shingo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    console.log('Urefu:', inputs.urefu);
    console.log('Kifua:', inputs.kifua);
    console.log('Bega:', inputs.bega);
    console.log('Shingo:', inputs.shingo);
  };

  return (
    <div className='sutipage'>
      <div>
        <h1 className='suti-h1'>Suti</h1>
      </div>
      <div className='ure-div'>Urefu</div>
      <input
        type="number"
        name='urefu'
        className="urf-inp"
        value={inputs.urefu}
        onChange={handleChange}
      />
      <div className='ure-div'>Kifua</div>
      <input
        type="number"
        name='kifua'
        className="urf-inp"
        value={inputs.kifua}
        onChange={handleChange}
      />
      <div className='ure-div'>Bega</div>
      <input
        type="number"
        name='bega'
        className="urf-inp"
        value={inputs.bega}
        onChange={handleChange}
      />
      <div className='ure-div'>Shingo</div>
      <input
        type="number"
        name='shingo'
        className="urf-inp"
        value={inputs.shingo}
        onChange={handleChange}
      />
      <Link to="/clientdetail">
        <button className='send-btn' onClick={handleNextClick}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default SutiPage;
