import React from 'react';
import './Review.css';

export default function Review (props) {
  let { review } = props;
  return (
    <div className="review">
      <h2>{review.coffee_name}</h2>
      <h3>{review.roaster_name}</h3>
      <h3>{review.process_method}--{review.coffee_origin}</h3>
      <h4>Written By: {review.user_name}</h4>
      <p>{review.review_body}</p>
    </div>
  );
}

// Review.defaultProps = {
//   review: {
//     id: React.PropTypes.number,
//     user_id: React.PropTypes.number,
//     user_name: React.PropTypes.string,
//     coffee_name: React.PropTypes.string,
//     roaster_id: React.PropTypes.number,
//     roaster_name: React.PropTypes.string,
//     coffee_origin: React.PropTypes.string,
//     process_method: React.PropTypes.string,
//     review_body: React.PropTypes.string,
//     active: React.PropTypes.bool,
//   }
// }