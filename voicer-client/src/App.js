import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register';
// import MainApp from './components/MainApp';
// import PrivateRoute from './components/Login/PrivateRoute';
import PostJob from './components/PostJob';
import TalentNavigation from './components/TalentNavigation';
import TalentProfile from './components/TalentProfile';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/client/postjob" component={PostJob} />
        <Route path="/talent" component={TalentNavigation} />
        <Route exact path="/talent/profile" component={TalentProfile} />
        {/* <PrivateRoute exact path="/voicer" component={MainApp} /> */}
      </Router>
    );
  }
}

export default App;
