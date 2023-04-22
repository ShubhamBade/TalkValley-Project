import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../componants/SearchBar';
import AdCard from '../componants/AdCard';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (ads) => {
    setSearchResults(ads);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {searchResults.map(ad => (
          <AdCard key={ad._id} ad={ad} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
