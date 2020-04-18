import React from 'react'
import jwt from 'jsonwebtoken'

const theSwitch = () => {
  //console.log(window.location.pathname)
  switch(window.location.pathname){
    case null:
    case '/':
      //get data for root
      console.log("theSwitch: root")
      break;
    case '/voice':
    case '/voice/':
      //get data for voice
      console.log("theSwitch: voice")
      break;
    default:
      //don't get data, because no data for you.
      console.log("theSwitch: false")
  }
}

const GateKeeper = () => {
  //are we logged in?
  const token = jwt.decode(localStorage.getItem("token"))
  if(token){
    //hooray! let's check the token expiration against the Date.now
    if(token.exp * 1000 > Date.now()){
      //login is still valid
      console.log("login is still valid")
      //okay, now let's get data based on path
      theSwitch()
    }else{
      //delete the token
      console.log("token expired")
      localStorage.removeItem("token")
    }  
  }else{
    //continue on, nothing to see heeeeeah!
    console.log("No Token, not logged in")
  }

  return (
    <></>
  )
}

export default GateKeeper