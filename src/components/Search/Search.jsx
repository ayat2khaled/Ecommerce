import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          flex: 1,
          margin: '6px',
        }}
      />
    </div>
  );
}

export default SearchBar;