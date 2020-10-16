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
    this.state = { 
      hasError: false,
      STORE,
      values: {},
      redirect: null,
    };
  }

  componentDidMount() {
   this.handleDataUpdate();
  }

  handleDataUpdate = () => {
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

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      values:{ ...this.state.values, [name]: value }
    });
  }

  handleReviewSubmit = e => {
    e.preventDefault();
    const newReview = this.state.values;
    cupprApiService.postReview({...newReview});
    this.setState({ 
      values: {
        display_name: '',
        coffee_name: '',
        coffee_origin: '',
        process_method: 'Washed/Wet',
        roaster_name: '',
        body: ''
      } 
    });
    // this.setState({
    //   redirect: '/Reviews'
    // });
  }
  
  render(){
    let { coffee_review, comment } = this.state;
    let { navOptions } = this.state.STORE;
    
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }

    return (
      <div className='App'>
        <Header navOptions={navOptions} />
        <main className='app-main'>
          <Switch>
            
            <Route 
              exact path={'/' || '/cuppr-client'} 
              component={LandingPage} 
            />
            <Route
              path={'/Signup'}
              render={(props) => (
                <SignupPage {...props} />
              )}
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
              render={(props) => (
                <WritePage {...props} values={this.state.values}
                  handleInputChange={this.handleInputChange}
                  handleReviewSubmit={this.handleReviewSubmit}
                />
              )}
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