import React from 'react'
import ReactDOM from 'react-dom'
import ReviewList from './ReviewList'

it('Renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<ReviewList />, div);
  ReactDOM.unmountComponentAtNode(div);

});