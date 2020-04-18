import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {UIContext} from './contexts/UIContext'
import {DataContext} from './contexts/DataContext'


import NavBar from './components/Home/NavBar'
import Home from './components/Home/Home'
import Voice from './components/Voice/Voice'

//to be depricated
import Register from './components/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import PostJob from './components/PostJob';
import TalentNavigation from './components/Talent/TalentNavigation';
import TalentProfile from './components/Talent/TalentProfile';
import ClientProfile from './components/ClientProfile';
import GateKeeper from './components/GateKeeper/GateKeeper';
import TalentHomePage from './components/Talent/TalentHomePage';
import ClientHomePage from './components/ClientHomePage';
import ApplyToJob from './components/ApplyToJob';
import TalentList from './components/TalentList/TalentList';
import AppList from './components/Applications/AppList';
import ClientNavigation from './components/ClientNavigation';
import TalentOfferView from './components/Talent/TalentOfferView';
import ReviewList from './components/ReviewList';

const App = () => {
  const [refreshApp, setRefreshApp] = useState(true)
  const dbURL = 'https://voicer-lambda-app.herokuapp.com'
  const [data, setData] = useState([])
  const [homeLoginToggle, setHomeLoginToggle] = useState(false)

  useEffect(()=>{}, [refreshApp])

  useEffect(()=>{console.log(homeLoginToggle)}, [homeLoginToggle])

  const homeLoginToggleHandler = (e) => {
    e.preventDefault();
    setHomeLoginToggle(!homeLoginToggle)
  }

  const refreshAppHandler = () => {
    setRefreshApp(!refreshApp)
  }

  return (
    <DataContext.Provider value={{dbURL, data, setData}}>
      <UIContext.Provider value={{refreshAppHandler, homeLoginToggle, homeLoginToggleHandler}}>
        <Router>
          <GateKeeper />
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/marketplace/:job" component={Home} />
          <Route exact path="/voice/" component={Voice} />
          <Route exact path="/myvoice/:job" component={Voice} />
          {/* <Route path="/register" component={Register} /> */}
          <PrivateRoute exact path="/client" component={ClientHomePage} />
          <PrivateRoute path="/client" component={ClientNavigation} />
          <Route exact path="/talent/apply" component={ApplyToJob} />
          <PrivateRoute exact path="/client/postjob" component={PostJob} />
          <PrivateRoute exact path="/client/profile" component={ClientProfile} />
          <PrivateRoute path="/talent" component={TalentNavigation} />
          <PrivateRoute exact path="/talent" component={TalentHomePage} />
          <PrivateRoute exact path="/talent/profile" component={TalentProfile} />
          <PrivateRoute exact path="/talent/applications" component={TalentOfferView} />
          <PrivateRoute exact path="/talent/reviews" component={ReviewList} />
          <PrivateRoute exact path="/client/reviews" component={ReviewList} />
          <PrivateRoute exact path="/client/talentlist" component={TalentList} />
          <PrivateRoute exact path="/client/applicationlist"component={AppList}/>
          {/* <Footer /> */}
        </Router>
      </UIContext.Provider>
    </DataContext.Provider>
  );
}


export default App;
