import React, {useContext} from 'react';

import logo from '../../images/logo-white.svg';

import {
  Navbar,
  NavbarBrand,
  //Nav,
  //NavItem,
  //NavLink
  } from 'reactstrap';
import { UIContext } from '../../contexts/UIContext';

const NavBar = () => {

  const {refreshAppHandler} = useContext(UIContext)
  
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    refreshAppHandler();
    // this.props.history.push('/');
  }

  return (
      <header style={{width: '100%'}}>

        <Navbar className="navbar-main">

          <NavbarBrand href="/">
              <img className="logo" src={logo} alt="voicer" />
          </NavbarBrand>
          {
            localStorage.getItem('token') ? (
              <a className="client-link" onClick={logout}>Logout</a>
            ):(
              <a className="client-link" href="register">Register</a>
            ) 
          }
        </Navbar>
      </header>
  );
}

export default NavBar;
