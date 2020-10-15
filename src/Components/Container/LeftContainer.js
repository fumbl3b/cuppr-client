import React from 'react';
import './Containers.css';

export default function LeftContainer (props) {
  return(
    <div className="left-container">
      {props.children}
    </div>
  );
}