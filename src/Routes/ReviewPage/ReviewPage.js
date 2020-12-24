import React from 'react'
import Review from '../../Components/Review/Review'
import { Link } from 'react-router-dom'

export default function ReviewPage(props) {
  const id = props.match.params.reviewId
  let { reviews = [], comments = [] } = props;
  reviews = reviews.filter(review => review.id == id);
  return (<>
    <div className='review-list'>

      {reviews.map(review => {
        return (
          <Review key={review.id} review={review} comments={comments} />
        );
      })}

    </div>
    <div style={{textAlign: 'center'}}><Link to={'/Reviews'}><button>return to <br/>all reviews</button></Link></div>
    </>
  );
}