import React from 'react';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import write from '../../img/write.png';
import { Link } from 'react-router-dom';
import cupprApiService from '../../services/cuppr-api-service';
import './Write.css';

export default class Write extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      reviewURL: '',
      values: {
        display_name: '',
        coffee_name: '',
        coffee_origin: '',
        process_method: 'Washed/Wet',
        roaster_name: '',
        body: ''
      }
    }
  }

  handleFormChange = (e) => {
    let valueName = e.target.name
    this.setState({
      submitted: false,
      values: {
        ...this.state.values, [valueName]: e.target.value
      }
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const newReview = this.state.values
    cupprApiService.postReview(newReview).then(res => {
      this.setState({
        reviewURL: `/Reviews/${res.id}`,
        values: { 
          display_name: '',
          coffee_name: '',
          coffee_origin: '',
          process_method: 'Washed/Wet',
          roaster_name: '',
          body: ''
        },
        submitted: true,
      })
    })
  }

  render() {
    return (
      <div>


        <LeftContainer>
          <div className='img-container'><img src={write} alt="review" style={{ width: '200px' }} /></div>
          <h3>Review guidelines</h3>
          <ol>
            <li>Please include all details you can about the coffee, including its name, origin, processing method, and roaster.</li>
            <li>Avoid subjective judgement calls.  If you liked something, please connect it to the experience or flavor.</li>
            <li>Above all, be yourself.  There's no right way to write a review.  Have fun sharing our coffee experiences with others.</li>
          </ol>
        </LeftContainer>
        <RightContainer>

          {/* displays only if submission has been accepted */}
          {this.state.submitted && (
            <div className='submission-confirmation review-body'>
              Submission Accepted :).  Thanks for brewing.
              <Link to={this.state.reviewURL}>
                <button>View your review</button>
              </Link>
            </div>
          )}
          <form className='write-form' onChange={this.handleFormChange}
            onSubmit={this.handleSubmit}
            values={this.state.values}
          >

            <div className='review-body'>
              <label htmlFor='display_name'>your name:  </label>
              <input required name='display_name' id='write-form-display_name' value={this.state.display_name} />
              <label htmlFor='coffee_name'>coffee name:  </label>
              <input required name='coffee_name' id='write-form-coffee_name' value={this.state.coffee_name} />
              <label htmlFor='coffee_orign'>origin:  </label>
              <input required name='coffee_origin' id='write-form-coffee_origin' value={this.state.coffee_origin} />
              <label htmlFor='process_method'>processing method:</label>
              <select required name='process_method' id='write-form-process_method' value={this.state.process_method} defaultValue={'Washed/Wet'}>
                <option value='Washed/Wet'>Washed/Wet</option>
                <option value='Honey'>Honey</option>
                <option value='Pulped Natural'>Pulped Natural</option>
                <option value='Natural/Dry'>Natural/Dry</option>
                <option value='Lactic'>Lactic</option>
                <option value='Other/Blend'>Other/Blend</option>
              </select>
              <label htmlFor='roaster_name'>roaster name:</label>
              <input required name='roaster_name' id='write-form-roaster_name' value={this.state.roaster_name} />
              <textarea
                required
                aria-label='Type your review...'
                name='body'
                id='body'
                cols='30'
                rows='5'
                placeholder='Type your review...'
                value={this.state.body}
              />
              <button type='submit'>Submit</button>
            </div>
          </form>
        </RightContainer>
      </div>
    )
  }
}

// Write.defaultProps = {
//   handleInputChange: () => { },
//   handleReviewSubmit: () => { }
// }