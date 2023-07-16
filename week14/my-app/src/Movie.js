
import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const { title, image, synopsis, rating } = movie;

  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{synopsis}</p>
      <Stars rating={rating} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movieId={movie.id} />
    </div>
  );
};

export default Movie;
