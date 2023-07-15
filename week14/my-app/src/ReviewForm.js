// src/ReviewForm.js
import React, { useState } from 'react';
import moviesData from './moviesData';

const ReviewForm = ({ movieId }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reviewText.trim() !== '') {
      // Find the movie by its ID
      const movieIndex = moviesData.findIndex((movie) => movie.id === movieId);

      if (movieIndex !== -1) {
        // Create a new movie object with the added review
        const updatedMovie = {
          ...moviesData[movieIndex],
          reviews: [...moviesData[movieIndex].reviews, reviewText],
        };

        // Update the moviesData array with the new movie object
        const updatedMoviesData = [
          ...moviesData.slice(0, movieIndex),
          updatedMovie,
          ...moviesData.slice(movieIndex + 1),
        ];

        // Update the state or save the updatedMoviesData in a database in a real application
        console.log('Review submitted:', reviewText);
        console.log('Updated movies data:', updatedMoviesData);
      }

      // Clear the review input field
      setReviewText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Review</h3>
      <textarea
        rows="4"
        placeholder="Write your review here"
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
