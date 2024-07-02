import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input 
        placeholder='Type to search..' 
        value={searchText} 
        onChange={handleInputChange} 
      />
    </div>
  );
};
