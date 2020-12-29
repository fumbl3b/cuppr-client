import React from 'react';
import { Route, Switch } from 'react-router-dom';
import STORE from '../../STORE';
import Header from '../Header/Header';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import ReviewPage from '../../Routes/ReviewPage/ReviewPage';
import ReviewList from '../ReviewList/ReviewList';
import WritePage from '../../Routes/WritePage/WritePage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import cupprApiService from '../../services/cuppr-api-service';

import './App.css';



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      STORE,
      values: { process_method: 'Washed/Wet' },
      redirect: null,
      submitId: null
    };
  }

  componentDidMount() {
   this.handleDataUpdate();
  }

  handleDataUpdate = () => {
    cupprApiService.getReviews()
      .then((resJson) => {
        this.setState({
          coffee_review: resJson
        })
      })
      .catch();
    cupprApiService.getComments()
      .then((resJson) => {
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
    cupprApiService.postReview({...newReview})
      .then(res => {
        this.setState({
          submitId: res.id,
          values: {
            display_name: '',
            coffee_name: '',
            coffee_origin: '',
            process_method: 'Washed/Wet',
            roaster_name: '',
            body: ''
          } 
        })
      });
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
              exact path={'/'} 
              component={LandingPage} 
            />
            {/* <Route
              path={'/cuppr-client/Signup'}
              render={(props) => (
                <SignupPage {...props} />
              )}
            /> */}
            <Route 
              path={'/Reviews/:reviewId'}
              render={(props) => (
                <ReviewPage {...props} reviews={coffee_review} comments={comment} />
              )}
            />
            <Route 
              path={'/Reviews'}
              render={(props) => (
                <ReviewList {...props} reviews={coffee_review} comments={comment} />
              )}
            />
            <Route
              path={'/Write'}
              render={(props) => (
                <WritePage {...props} submitId={this.state.submitId} values={this.state.values}
                  handleInputChange={this.handleInputChange}
                  handleReviewSubmit={this.handleReviewSubmit}
                />
              )}
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