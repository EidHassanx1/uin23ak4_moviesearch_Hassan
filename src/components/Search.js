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
    <div>

      {movies && movies.map((movie) => (
        <div className='Search' key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}

    </div>
  );
}