import React from 'react';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
