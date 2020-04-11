import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-white.svg';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = e => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <header style={{width: '100%'}}>

              <Navbar className="navbar-main">

                <NavbarBrand href="/">
                    <img className="logo" src={logo} alt="voicer" />
                </NavbarBrand>

                {/* <Nav>
                  <NavItem>
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/login">Login</NavLink>
                  </NavItem>
                </Nav> */}

              </Navbar>
            </header>
        );
    }
}

export default NavBar;
