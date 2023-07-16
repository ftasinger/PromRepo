
import React, { useState } from 'react';

const ReviewForm = ({ movieId }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reviewText.trim() !== '') {
      
      console.log('Review submitted:', reviewText);
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
      <button type="submit" className="submit-button">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

