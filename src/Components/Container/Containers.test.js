import React from 'react';
import ReactDOM from 'react-dom';
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

it('LeftContainer renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<LeftContainer />, div);
  ReactDOM.unmountComponentAtNode(div);

});


it('RightContainer renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<RightContainer />, div);
  ReactDOM.unmountComponentAtNode(div);

});
