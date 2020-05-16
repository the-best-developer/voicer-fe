import React, { useState, useContext } from "react"
import LogRegFields from "./login/logRegFields"
import { ReactComponent as Caret } from "../../images/caret.svg"
import { Link } from "react-router-dom"

import { DataContext } from "../../context/DataContext"
import Logo from "./Logo"
import Logout from "./Logout"

const NavBar = () => {
  const { token, refreshAppHandler } = useContext(DataContext)
  const [dropDown, setDropDown] = useState(false)
  const [loginRegister, setLoginRegister] = useState(false)

  const loginRegisterHandler = (e) => {
    e.preventDefault()
    setLoginRegister(!loginRegister)
  }

  return (
    <>
      <header>
        <nav className="navbar">
          <Logo />
          {
            // if logged in, add a 'Post job' link to nav bar
            token ? <p className="post-job-nav">Post a job</p> : <></>
          }

          <ul className="navbar-nav">
            <NavItem
              icon={<Caret />}
              dropDown={dropDown}
              setDropDown={setDropDown}
            >
              <aside className="dropdown">
                <div className="menu">
                  <Link
                    to={`/`}
                    className="menu-item"
                    onClick={() => {
                      setDropDown(false)
                    }}
                  >
                    Marketplace{" "}
                  </Link>
                  <Link
                    to={`/voice`}
                    className="menu-item"
                    onClick={() => {
                      setDropDown(false)
                    }}
                  >
                    All Users
                  </Link>
                  <hr />
                  {token ? (
                    <>
                      <a
                        href={`/voice/${token.display_name}`}
                        className="menu-item"
                        onClick={() => {
                          setDropDown(false)
                        }}
                      >
                        My Profile
                      </a>
                      <p
                        className="menu-item post-job-text"
                        onClick={() => {
                          setDropDown(false)
                          //set a display to true to show the form
                        }}
                      >
                        Post a job
                      </p>
                      <Logout setDropDown={setDropDown} />
                    </>
                  ) : (
                    <LogRegFields
                      setDropDown={setDropDown}
                      className="login-item"
                      register={loginRegister}
                      loginRegisterHandler={loginRegisterHandler}
                      setLoginRegister={setLoginRegister}
                    />
                  )}
                </div>
              </aside>
            </NavItem>
          </ul>
        </nav>
      </header>
    </>
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
