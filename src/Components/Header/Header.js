import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import './Header.css';

export default function Header (props) {
  return (
    <header>
      <LeftContainer>
      <Link to='/'>
        <h1>CuppR</h1>
        <h4>"the world's okayest coffee review site"</h4>
      </Link>
      </LeftContainer>      
      <RightContainer>
        <Nav navOptions={props.navOptions}/>
      </RightContainer>    
    </header>
  );
}