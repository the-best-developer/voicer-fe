import jwt from 'jsonwebtoken'

const GateKeeper = () => {
  //are we logged in?
  let token = jwt.decode(localStorage.getItem("token"))
  if(token){
    //hooray! let's check the token expiration against the Date.now
    if(token.exp * 1000 > Date.now()){
      //login is still valid
      console.log("login is still valid")
    }else{
      //delete the token
      console.log("token expired")
      localStorage.removeItem("token")
    }  
  }else{
    //continue on, nothing to see heeeeeah!
    localStorage.removeItem('token')
    console.log("No Token, not logged in")
  }
  return token;
}

export default GateKeeper