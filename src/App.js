import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Placeholder from './components/Placeholder';
import Search from './components/Search';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setSearchSuccessful] = useState(true);
  let searchString = '';


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
      setSearchSuccessful(true);
    } else {
      setMovies([]);
      setSearchSuccessful(false);
    }
  }

  return (
    <div className="App">
      <h1>Eidflix</h1>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : loading ? (
        <Placeholder />
      ) : searchString.trim() === '' ? (
        <Search />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
  
}


export default App;
