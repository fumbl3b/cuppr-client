import React from 'react';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import write from '../../img/write.png';
import './Write.css';

export default function Write(props) {
  
  return(
    <>
    <LeftContainer>
    <img src={write} alt="review image" style={{ width: '200px' }} />
      <h3>Review guidelines</h3>
      <ol>
        <li>Please include all details you can about the coffee, including its name, origin, processing method, and roaster.</li>
        <li>Avoid subjective judgement calls.  If you liked something, please connect it to the experience or flavor.</li>
        <li>Above all, be yourself.  There's no right way to write a review.  Have fun sharing our coffee experiences with others.</li>
      </ol>
    </LeftContainer>
    <RightContainer>
    <form className='write-form' onChange={props.handleInputChange} 
      onSubmit={props.handleReviewSubmit}
      value={props.values}>
      <div className='review-body'>
        <label htmlFor='display_name'>your name:  </label>
          <input required name='display_name' id='write-form-display_name' value={props.values.display_name} />
          <label htmlFor='coffee_name'>coffee name:  </label>
          <input required name='coffee_name' id='write-form-coffee_name' value={props.values.coffee_name} />
          <label htmlFor='coffee_orign'>origin:  </label>
          <input required name='coffee_origin' id='write-form-coffee_origin' value={props.values.coffee_origin} />
        <label htmlFor='process_method'>processing method:</label>
        <select required name='process_method' id='write-form-process_method' value={props.values.process_method}>
          <option value='Washed/Wet'>Washed/Wet</option>
          <option value='Honey'>Honey</option>
          <option value='Pulped Natural'>Pulped Natural</option>
          <option value='Natural/Dry'>Natural/Dry</option>
          <option value='Lactic'>Lactic</option>
          <option value='Other/Blend'>Other/Blend</option>
        </select>
        <label htmlFor='roaster_name'>roaster name:</label>
        <input required name='roaster_name' id='write-form-roaster_name' value ={props.values.roaster_name} />
        <textarea
          required
          aria-label='Type your review...'
          name='body'
          id='body'
          cols='30'
          rows='5'
          placeholder='Type your review...'
          value={props.values.body}
        />
        <button type='submit '>Submit</button>
      </div>
    </form>
      
    </RightContainer>
    </>
  ) 
}

Write.defaultProps = {
  handleInputChange: () => {},
  handleReviewSubmit: () => {}
}