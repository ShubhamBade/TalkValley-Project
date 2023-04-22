import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchQuery);
    try {
      const response = await axios.get(`http://localhost:5000/api/ads?query=${searchQuery}`);
      console.log(response);
      onSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container d-flex justify-content-center'>
      <input className='rounded-pill bg-dark text-light'
        type="text"
        placeholder="Search ads..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button className="btn btn-primary mx-2" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
