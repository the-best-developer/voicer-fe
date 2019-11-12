import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import PostJob from './components/PostJob';
import TalentNavigation from './components/TalentNavigation';
import ClientProfile from './components/ClientProfile';
import Home from './components/Home/Home';
import TalentHomePage from './components/TalentHomePage';
import ApplyToJob from './components/ApplyToJob';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <PrivateRoute exact path="/voicer" component={MainApp} /> */}
        <Route exact path="/talent/apply" component={ApplyToJob} />
        <PrivateRoute exact path="/client/postjob" component={PostJob} />
        <PrivateRoute exact path="/client" component={ClientProfile} />
        <PrivateRoute path="/talent" component={TalentNavigation} />
        <PrivateRoute exact path="/talent" component={TalentHomePage} />
      </Router>
    );
  }
}

export default App;
