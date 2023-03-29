import React, { useState } from 'react';

function SearchBar(props) {
  const [searchString, setSearchString] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchString);
  }

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchString}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
