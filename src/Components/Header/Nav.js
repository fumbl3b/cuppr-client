import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {

  return (
    <ul>
      {props.navOptions.map((option, idx) => {
        return (
          //changed this here ->
          <li key={idx}>
            <Link key={idx} to={`/${option}`}>
              {option}
            </Link></li>
        );
      })}
    </ul>
  );
}

Nav.defaultProps = {
  navOptions: [
    'Signup',
    'Reviews',
    'Write',
    'Account',
  ]
};