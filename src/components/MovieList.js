import React from 'react';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-details">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            {movie.Awards && <p>Awards: {movie.Awards}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}


export default MovieList;
