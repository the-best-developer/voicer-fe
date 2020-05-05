import React, {useState, useContext} from 'react'
import LogRegFields from './login/logRegFields'
import {ReactComponent as Logo} from '../../images/logo-white.svg'
import {ReactComponent as Caret} from '../../images/caret.svg'
import {ReactComponent as SignOut} from '../../images/sign-out-alt-light.svg'
import {Link} from 'react-router-dom'

import {DataContext} from '../../context/DataContext'

const NavBar = () => {
  
  const {token, refreshAppHandler} = useContext(DataContext)

  const [loginRegister, setLoginRegister] = useState(false)


  const loginRegisterHandler = (e) => {
    e.preventDefault()
    setLoginRegister(!loginRegister)
  }

  return (
    <>
      <header>
        <nav className="navbar">
          <Logo className="logo"/>
          <ul className="navbar-nav">
            <NavItem  icon={<Caret />} >
              <aside className="dropdown">
                <div className="menu">
                  <Link to={`/`} className="menu-item" >Marketplace </Link>
                  <Link to={`/voice`} className="menu-item" >All Users</Link>
                  <hr />
                  {token ? (
                    <>
                        <a href={`/voice/${token.display_name}`} className="menu-item" >My Profile</a>
                        <button
                          className="menu-item"
                          lefticon={SignOut}
                          onClick={(e)=>{
                            e.preventDefault()
                            localStorage.removeItem("token")
                            refreshAppHandler()
                          }}
                        >Logout</button>
                    </>
                  ):(
                      <LogRegFields 
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

const NavItem = (props) =>{
  const [dropDown, setDropDown] = useState(false) //needs to be global?

  return (
    <li className="nav-item">
      <button 
        className={dropDown ? "icon-button selected" : "icon-button"} 
        onClick={(e)=>{
          e.preventDefault()
          setDropDown(!dropDown)
        }}>
          {props.icon}
      </button>
      {dropDown && props.children}
    </li>
  )
}

export default NavBar