import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Logo from './logo.svg';

const NavContainer = styled.div`
    .bg-light {
        background-color: #233842 !important;
    }
    .navbar {
        height: 12.5vh !important;
    }
`;

const AppLogo = styled.img`
    width: 100%;
    height: 9vh;
`;

class TalentNavigation extends React.Component {
    
    state = {
        isOpen: false
    }

    render() {
        return (
            <NavContainer>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <AppLogo src={Logo} />
                </NavbarBrand>
                <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Marketplace</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">Logout</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </NavContainer>
        )};
};

export default TalentNavigation;

// Old Nav
// return (
// <div className='TalentNavigation'>
//     <Link to='/'>
//         <div className='TalentNavigationLogo'>
//             <h1 className='logo'>Voicer</h1>
//         </div>
//     </Link>
    
//     <div className='TalentNavigationLinks'>
//         <Link to='/talent'>Browse Jobs</Link>
//         <Link to='/talent/applications'>My Applications</Link>
//         <Link to='/talent/messages'>Messages</Link>
//         <Link to='/talent/profile'>My Profile</Link>
//     </div>
// </div> )