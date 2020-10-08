import React from 'react';
import Review from '../Review/Review';
import './ReviewList.css'

export default function ReviewList(props) {
  return (
    <div className='review-list'>

      {props.reviews.map(review => {
        return (
          <Review key={review.id} review={review} />
        );
      })}

      <Review review={props.reviews[0]} />
      <Review review={props.reviews[1]} />
    </div>
  );
}