import React from 'react';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import './Landing.css';

export default function Landing () {
  return (
    <div className="content-container">
      <section>
        <LeftContainer>
          <h2>Welcome to Cuppr</h2>
          <p>Read.  Write. Comment. Coffee!</p>
        </LeftContainer>
        <RightContainer>
          <p>Et thundercats williamsburg, deserunt whatever sustainable ea migas af aesthetic. Enim quis street art hell of. Shaman aliqua kickstarter helvetica, master cleanse sed trust fund voluptate sustainable. Meh brunch tote bag cornhole. Bicycle rights ad coloring book adaptogen tousled sed. Glossier meggings fixie truffaut pabst, four loko est et fingerstache narwhal ullamco flannel qui mustache.</p>
        </RightContainer>           
      </section>
    </div >
    );
}