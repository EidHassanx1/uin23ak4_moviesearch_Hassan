import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Placeholder from './components/Placeholder';
import Search from './components/Search';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(searchString) {
    setLoading(true);
    const API_KEY = '4fbb46f2';
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}`
    );
    const data = await response.json();
    setLoading(false);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  }

  return (
    
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Placeholder />
      ) : movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No results found.</p>
      )}
      <Search />
    </div>
      
  );
}

export default App;
