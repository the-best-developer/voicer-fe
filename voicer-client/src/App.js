import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register';
<<<<<<< HEAD
import MainApp from './components/MainApp';
import PrivateRoute from './components/Login/PrivateRoute'
import PostJob from './components/PostJob';
=======
// import MainApp from './components/MainApp';
import PrivateRoute from './components/Login/PrivateRoute';
>>>>>>> 9417c10252ef98f0884770d6f707c65b30bdcd2d

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
<<<<<<< HEAD
        <PrivateRoute exact path="/voicer" component={MainApp} />
        <Route exact path="/postJob" component={PostJob} />
=======
        {/* <PrivateRoute exact path="/voicer" component={MainApp} /> */}
>>>>>>> 9417c10252ef98f0884770d6f707c65b30bdcd2d
      </Router>
    );
  }
}

export default App;
