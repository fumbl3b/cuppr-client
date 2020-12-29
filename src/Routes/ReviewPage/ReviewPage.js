import React from 'react'
import Review from '../../Components/Review/Review'
import { Link } from 'react-router-dom'
import cupprApiService from '../../services/cuppr-api-service'


export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    //get reviews API call
    cupprApiService.getReviews().then(res => {
      this.setState({
        reviews: res
      })
    })
  }

  render() {
    const id = this.props.match.params.reviewId
    let { reviews = [] } = this.state;
    reviews = reviews.filter(review => review.id == id);
    return (<>
      <div className='review-list'>

        {reviews.map(review => {
          return (
            <Review key={review.id} review={review} />
          );
        })}

      </div>
      <div style={{ textAlign: 'center' }}><Link to={'/Reviews'}><button>return to <br />all reviews</button></Link></div>
    </>
    );
  }
}
