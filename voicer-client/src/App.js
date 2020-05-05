import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import GateKeeper from './components/GateKeeper/GateKeeper'
import NavBar from './components/navbar/NavBar'
import Marketplace from './components/marketplace/Marketplace'
import Voice from './components/voice/Voice'


import {DataContext} from './context/DataContext'

import './App.scss'

function App() {
  const token = GateKeeper()
  const [refreshApp, setRefreshApp] = useState(true)
  const [url] = useState("https://pt9-dbtest.herokuapp.com")

  const [data, setData] = useState([])
  
  //global reset
  const refreshAppHandler = () => {
    console.log(refreshApp)
    setRefreshApp(!refreshApp)
  }
  //end global reset
  
  //UI elements


  return (
    <DataContext.Provider value={{token, data, setData, refreshAppHandler, url}}>
      <Router>
        <NavBar />
         <main>
          <Route exact path='/' component={Marketplace} />
          <Route exact path='/:marketplaceID' component={Marketplace} />
          <Route exact path='/voice/' component={Voice} />
          <Route exact path='/voice/:displayName' component={Voice} />
        </main>
      </Router>
    </DataContext.Provider>
  )
}

export default App
