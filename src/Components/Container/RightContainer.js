import React from 'react';
import './Containers.css';


export default function RightContainer (props) {
  return(
    <div className="right-container">
      {props.children}
    </div>
  );
}