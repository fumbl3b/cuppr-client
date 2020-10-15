import React from 'react';
import Review from '../Review/Review';
import './ReviewList.css'

export default function ReviewList(props) {
  const { reviews = [], comments = [] } = props;
  return (
    <div className='review-list'>
      
      {reviews.map(review => {
        return (
          <Review key={review.id} review={review} comments={comments} />
        );
      })}
    </div>
  );
}