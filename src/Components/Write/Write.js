import React from 'react';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import './Write.css';

export default function Write(props) {

  const handleSubmit = e => {
    e.preventDefault();
    const coffee_name = e.target.coffee_name;
    console.log(coffee_name);
  }

  return(
    <>
    <LeftContainer>
    <form className='write-form' onSubmit={handleSubmit} >
      <div className='review-body'>
          <label htmlFor='coffee_name'>coffee name:  </label>
          <input required name='coffee_name' id='write-form-coffee_name' />
          <label htmlFor='coffee_orign'>origin:  </label>
          <input required name='coffee_origin' id='write-form-coffee_origin' />
        <select required name='process_method' id='write-form-process_method'>
          <option value='Washed/Wet'>Washed/Wet</option>
          <option value='Honey'>Honey</option>
          <option value='Pulped Natural'>Pulped Natural</option>
          <option value='Natural/Dry'>Natural/Dry</option>
          <option value='Lactic'>Lactic</option>
          <option value='Other/Blend'>Other/Blend</option>
        </select>
        <label htmlFor='roaster_name'>roaster name:</label>
        <input required name='roaster_name' id='write-form-roaster_name' />
        <textarea
          required
          aria-label='Type your review...'
          name='body'
          id='body'
          cols='30'
          rows='5'
          placeholder='Type your review...'
        />
        <button type='submit '>Submit</button>
      </div>
    </form>
    </LeftContainer>
    <RightContainer>
      Review guidelines
    </RightContainer>
    </>
  ) 
}