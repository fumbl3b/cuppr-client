import React from 'react';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import cup from '../../img/cup.png'
import './Landing.css';

export default function Landing () {
  return (
    <div className="content-container">
      <section>
        <LeftContainer>
        <h4>A place to write about flavor...</h4>
          <p>CuppR is an anonymous coffee review aggregator.  If you drink coffee, we're pretty sure you've got an opinion on it.  Share that opinion here!</p>
          <p>CuppR is not affiliated with any roasters or coffee retailers, and will always be 100% free.  Please navigate to 'Reviews' to read some, or 'Write' to submit an experience of your own.</p>
        </LeftContainer>
        <RightContainer>
          <h2><img src={cup} alt="coffee cup" style={{ width: '200px' }} /></h2>
          <h2>Welcome to Cuppr</h2>
          <p>Read.  Write. Coffee!</p>
        </RightContainer>           
      </section>
    </div >
    );
}