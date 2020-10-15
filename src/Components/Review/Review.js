import React from 'react';
import Comment from './Comment/Comment'
import './Review.css';

export default function Review (props) {
  let { review, comments } = props;

  let commentsArr = comments.filter(comment => comment.review_id === review.id);
  console.log(commentsArr);
  return (
    <div className="review">
      <h2>{review.coffee_name}</h2>
      <h3>{review.roaster_name}</h3>
      <h3>{review.process_method}--{review.coffee_origin}</h3>
      <h4>Written By: {review.nickname}</h4>
      <p>{review.body}</p>
      <h4>Comments</h4>
      {commentsArr.map(comment => <Comment key={comment.id} comment={comment} />)}
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