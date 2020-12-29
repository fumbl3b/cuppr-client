import React from 'react'
import ReactDOM from 'react-dom';
import Review from './Review';

it('Renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Review />, div);
  ReactDOM.unmountComponentAtNode(div);

});