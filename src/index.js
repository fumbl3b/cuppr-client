import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import App from './Components/App/App'

// ReactDOM.render(
//   <BrowserRouter>
//     <Router.Consumer>
//       <App />
//     </Router.Consumer>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);