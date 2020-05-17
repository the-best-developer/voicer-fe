import React, { useState, useContext } from "react"
import LogRegFields from "./login/logRegFields"

import { ReactComponent as Caret } from "../../images/caret.svg"
import { DataContext } from "../../context/DataContext"
import Logo from "./Logo"
import Logout from "./Logout"
import MyProfile from "./MyProfile"
import PostAJob from "./PostAJob"
import AllUsers from "./AllUsers"
import Marketplace from "./Marketplace"

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false)
  

  return (
    <>
      <header>
        <nav className="navbar">
          <Logo />
          <ul className="navbar-nav">
            <NavItem icon={<Caret />} dropDown={dropDown} setDropDown={setDropDown}>
            <DropDown setDropDown={setDropDown} />
            </NavItem>
          </ul>
        </nav>
      </header>
    </>
  )
}

const DropDown = ({setDropDown}) => {
  const { token } = useContext(DataContext)
  const [loginRegister, setLoginRegister] = useState(false)

  const loginRegisterHandler = (e) => {
    e.preventDefault()
    setLoginRegister(!loginRegister)
  }
  return (
    <aside className="dropdown">
      <div className="menu">
        <Marketplace setDropDown={setDropDown} />
        <AllUsers setDropDown={setDropDown} />
        <hr />
        {token ? (
          <>
            <MyProfile setDropDown={setDropDown}/>
            <PostAJob setDropDown={setDropDown}/>
            <Logout setDropDown={setDropDown} />
          </>
        ) : (
          <LogRegFields setDropDown={setDropDown} className="login-item" register={loginRegister} loginRegisterHandler={loginRegisterHandler} setLoginRegister={setLoginRegister} />
        )}
      </div>
    </aside>
  )
}

const NavItem = ({ children, icon, dropDown, setDropDown }) => {
  return (
    <li className="nav-item">
      <button
        className={dropDown ? "icon-button selected" : "icon-button"}
        onClick={(e) => {
          e.preventDefault()
          setDropDown(!dropDown)
        }}
      >
        {icon}
      </button>
      {dropDown && children}
    </li>
  )
}

export default NavBar
