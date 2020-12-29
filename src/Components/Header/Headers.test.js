import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';


it('Header renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('Nav renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);

});
