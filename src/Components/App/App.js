import React from 'react';
import { Route, Switch } from 'react-router-dom';
import STORE from '../../STORE';
import Header from '../Header/Header';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import SignupPage from '../../Routes/SignupPage/SignupPage';
import ReviewPage from '../../Routes/ReviewPage/ReviewPage';
import ReviewList from '../ReviewList/ReviewList';
import WritePage from '../../Routes/WritePage/WritePage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import cupprApiService from '../../services/cuppr-api-service';

import './App.css';
import AccountPage from '../../Routes/AccountPage/AccountPage';



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { STORE };
  }

  componentDidMount() {
    cupprApiService.getReviews()
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          coffee_review: resJson
        })
      })
      .catch();
    cupprApiService.getComments()
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          comment: resJson
        });
      })
  }
  
  render(){
    let { coffee_review, comment } = this.state;
    let { navOptions } = this.state.STORE;
    return (
      <div className='App'>
        <Header navOptions={navOptions} />
        <main className='app-main'>
          <Switch>
            
            <Route 
              exact path={'/'} 
              component={LandingPage} 
            />
            <Route
              path={'/Signup'}
              component={SignupPage}
            />
            <Route 
              exact path={'/Reviews/:reviewId'}
              component={ReviewPage}
            />
            <Route 
              path={'/Reviews'}
              render={(props) => (
                <ReviewList {...props} reviews={coffee_review} comments={comment}/>
              )}
            />
            <Route
              path={'/Write'}
              component={WritePage}
            />
            <Route
              path={'/Account'}
              component={AccountPage}
            />
            <Route 
              component={NotFoundPage} 
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  } 
}