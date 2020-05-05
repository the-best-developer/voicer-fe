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

  const {refreshAppHandler, homeLoginToggle, homeLoginToggleHandler} = useContext(UIContext)
  
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
              <button className="client-link" onClick={(e)=>logout(e)}>Logout</button>
            ):(
              <>{
                homeLoginToggle ? (
                  <button className="client-link" onClick={(e) => homeLoginToggleHandler(e)}>Hide Login</button>
                ):(
                  <button className="client-link" onClick={(e) => homeLoginToggleHandler(e)}>Login</button>
                )
              }</>
            ) 
          }
        </Navbar>
      </header>
  );
}

export default NavBar;
