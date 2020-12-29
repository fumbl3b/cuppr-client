import React from 'react'
import ReactDOM from 'react-dom'
import Write from './Write';

it('Renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Write />, div);
  ReactDOM.unmountComponentAtNode(div);

});