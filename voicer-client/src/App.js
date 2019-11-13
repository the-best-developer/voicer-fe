import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import PostJob from './components/PostJob';
import TalentNavigation from './components/TalentNavigation';
import TalentProfile from './components/TalentProfile';
import ClientProfile from './components/ClientProfile';
import Home from './components/Home/Home';
import TalentHomePage from './components/TalentHomePage';
<<<<<<< HEAD
import ClientHomePage from './components/ClientHomePage';
=======
import ApplyToJob from './components/ApplyToJob';

import Footer from './components/Footer';
>>>>>>> c9d3289f2951ebbd20d2228a51ee8f6b79b42eac

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
<<<<<<< HEAD
        <PrivateRoute exact path="/client" component={ClientHomePage} />
=======
        {/* <PrivateRoute exact path="/voicer" component={MainApp} /> */}
        <Route exact path="/talent/apply" component={ApplyToJob} />
>>>>>>> c9d3289f2951ebbd20d2228a51ee8f6b79b42eac
        <PrivateRoute exact path="/client/postjob" component={PostJob} />
        <PrivateRoute exact path="/client/profile" component={ClientProfile} />
        <PrivateRoute path="/talent" component={TalentNavigation} />
        <PrivateRoute exact path="/talent" component={TalentHomePage} />

        <Footer />
      </Router>
    );
  }
}

export default App;
