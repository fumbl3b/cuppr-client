import React from 'react';
import { Route, Switch } from 'react-router-dom';
import STORE from './STORE';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import ReviewList from './ReviewList/ReviewList';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import './App.css';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { STORE };
  }
  
  render(){
    let { navOptions, coffee_reviews } = this.state.STORE;
    console.log(coffee_reviews);
    return (
      <div className='App'>
        <Header navOptions={navOptions} />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route 
              path='/Reviews'
              render={(props) => (
                <ReviewList {...props} reviews={coffee_reviews} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  } 
}