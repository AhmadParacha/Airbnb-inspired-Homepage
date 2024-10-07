import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', location);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
