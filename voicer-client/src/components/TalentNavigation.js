import React from 'react';
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

import Logo from '../images/logo-white.svg';
import UserIcon from '../images/user.svg';

const NavContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    .talentnavbar {
        width: 100% !important;
        height: 15vh !important;
        background-color: #233842 !important;
        .nav-item .talent-link {
          font-family: 'Nunito Sans', sans-serif !important;
          text-transform: uppercase !important;
          color: rgb(255, 255, 255) !important;
          padding-top: 1em !important;
          margin-right: 3vw !important;
          font-weight: bolder !important;
        }
        .nav-item .username {
          font-family: 'Nunito Sans', sans-serif !important;
          text-transform: uppercase !important;
          color: rgb(255, 255, 255) !important;
          padding-top: 0.75em !important;
          font-size: 120% !important;
        }
    }
`;

const TertiaryNav = styled.div`
    width: 100%;
    height: 10vh;
    background-color: rgb(159,164,195, 0.75);
    position: absolute;
    top: 14vh;
    z-index: 4;
    div {
      height: 10vh;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .tert-link {
        font-family: 'Nunito Sans', sans-serif;
        text-transform: uppercase;
        color: rgb(255, 255, 255) !important;
        margin-right: 5vw;
        font-weight: bolder;
      }
      &:last-child {
        margin-right: 7%;
      }
    }
`;

const AppLogo = styled.img`
    width: 100%;
    height: 9vh;
`;

const IconStyle = styled.img`
    width: 100%;
    height: 9vh;
`;

const Divider = styled.div`
    height: 8vh;
    width: 1px;
    margin: 0 5vw;
    display:block; /* for use on default inline elements like span */
    overflow: hidden;
    background-color: #717F86;
`;

class TalentNavigation extends React.Component {

    render() {
        return (
            <NavContainer>
              <Navbar className="talentnavbar" expand="md">
                <NavbarBrand href="/">
                    <AppLogo src={Logo} />
                </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="talent-link" href="/components/">
                            Marketplace
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="talent-link" href="https://github.com/reactstrap/reactstrap">Logout</NavLink>
                    </NavItem>
                    <NavItem>
                      <Divider />
                    </NavItem>
                    <NavItem>
                      <NavLink className='username'>John Smith</NavLink>
                    </NavItem>
                    <NavItem>
                      <IconStyle src={UserIcon} />
                    </NavItem>
                  </Nav>
              </Navbar>
              <TertiaryNav>
                <div>
                  <NavLink className="tert-link">
                    All Talents
                  </NavLink>
                  <NavLink className='tert-link'>
                    My Jobs
                  </NavLink>
                  <NavLink className='tert-link'>
                    Messages
                  </NavLink>
                  <NavLink className='tert-link'>
                    My Profile
                  </NavLink>
                </div>
              </TertiaryNav>
            </NavContainer>
        )};
};

export default TalentNavigation;