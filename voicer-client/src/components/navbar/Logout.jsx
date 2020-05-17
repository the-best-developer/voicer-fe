import React from 'react'
import { ReactComponent as SignOut } from "../../images/sign-out-alt-light.svg"


const Logout = ({setDropDown}) => {
  return(
    <button
      className="menu-item"
      lefticon={SignOut}
      onClick={(e) => {
        e.preventDefault()
        setDropDown(false)
        localStorage.removeItem("token")
        window.location.href = "/"
      }}
    >
      Logout
    </button>
  )
}

export default Logout