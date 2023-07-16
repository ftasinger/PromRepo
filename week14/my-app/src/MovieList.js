// src/MovieList.js
import React from 'react';
import Movie from './Movie';
import moviesData from './moviesData';

const MovieList = () => {
  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
