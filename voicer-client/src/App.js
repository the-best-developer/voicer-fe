import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import PostJob from './components/PostJob';
import TalentNavigation from './components/Talent/TalentNavigation';
import TalentProfile from './components/Talent/TalentProfile';
import ClientProfile from './components/ClientProfile';
import Home from './components/Home/Home';
import TalentHomePage from './components/Talent/TalentHomePage';
import ClientHomePage from './components/ClientHomePage';
import ApplyToJob from './components/ApplyToJob';
import TalentList from './components/TalentList/TalentList';
import AppList from './components/Applications/AppList';
import Footer from './components/Footer';
import ClientNavigation from './components/ClientNavigation';
import TalentOfferView from './components/Talent/TalentOfferView';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/client" component={ClientHomePage} />
        <PrivateRoute path="/client" component={ClientNavigation} />
        <Route exact path="/talent/apply" component={ApplyToJob} />
        <PrivateRoute exact path="/client/postjob" component={PostJob} />
        <PrivateRoute exact path="/client/profile" component={ClientProfile} />
        <PrivateRoute path="/talent" component={TalentNavigation} />
        <PrivateRoute exact path="/talent" component={TalentHomePage} />
        <PrivateRoute exact path="/talent/profile" component={TalentProfile} />
        <PrivateRoute exact path="/talent/applications" component={TalentOfferView} />
        <PrivateRoute exact path="/client/talentlist" component={TalentList} />
        <PrivateRoute
          exact
          path="/client/applicationlist"
          component={AppList}
        />
        <Footer />
      </Router>
    );
  }
}

export default App;
