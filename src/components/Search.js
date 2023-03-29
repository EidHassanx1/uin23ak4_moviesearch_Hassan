import React, { useState, useEffect } from 'react';

export default function Search() {
  const [movies, setMovies] = useState([]);

  const fetchNewMovies = async () => {
    try {
      const response = await fetch(
            `https://www.omdbapi.com/?s=james-bond&apikey=4fbb46f2`
            );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNewMovies();
  }, []);

  return (
    <div className='james-bond'>
  {movies && movies.map((movie) => {
    if (movie.Title.includes('James Bond')) {
      return (
        <div className='Search' key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Year: {movie.Year}</p>
          <p>Director: {movie.Director}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Genre: {movie.Genre}</p>
          {movie.Awards && <p>Awards: {movie.Awards}</p>}
          
        </div>
      );
    }
    return null;
  })}
</div>

  );
}