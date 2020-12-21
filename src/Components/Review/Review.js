import React from 'react';
//import Comment from './Comment/Comment'
import './Review.css';

export default function Review (props) {
  let { review } = props;
  //let commentsArr = comments.filter(comment => comment.review_id === review.id);

  return (
    <div className="review">
      <h2>{review.coffee_name}</h2>
      <h3>{review.roaster_name}</h3>
      <h3>{review.process_method}--{review.coffee_origin}</h3>
      <h4>Written By: {review.display_name}</h4>
      <p>{review.body}</p>
      {/* <h4>Comments</h4>
      {commentsArr.map(comment => <Comment key={comment.id} comment={comment} />)} */}
    </div>
  );
}

Review.defaultProps = {
  review: {}
}