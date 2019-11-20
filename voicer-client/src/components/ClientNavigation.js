import React from 'react';
import styled from 'styled-components';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

import Logo from '../images/logo-white.svg';
import UserIcon from '../images/user.svg';

const NavContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    .clientnavbar {
        width: 100% !important;
        height: 11vh !important;
        background-color: #233842 !important;
        .nav-item .client-link {
          font-family: 'Nunito Sans', sans-serif !important;
          text-transform: uppercase !important;
          color: rgb(255, 255, 255) !important;
          padding-top: 3vh !important;
          margin-right: 3vw !important;
          font-weight: bolder !important;
          cursor: pointer;
        }
        .nav-item .username {
          font-family: 'Nunito Sans', sans-serif !important;
          text-transform: uppercase !important;
          color: rgb(255, 255, 255) !important;
          padding-top: 2.75vh !important;
          font-size: 120% !important;
        }
    }
`;

const TertiaryNav = styled.div`
    width: 100%;
    height: 9vh;
    background-color: rgb(159,164,195, 0.75);
    position: absolute;
    top: 10.5vh;
    z-index: 4;
    .link-container {
      height: 9vh;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .tert-link {
        font-family: 'Nunito Sans', sans-serif;
        text-transform: uppercase;
        color: rgb(255, 255, 255) !important;
        margin-right: 5vw;
        font-weight: bolder;
        cursor: pointer;
      }
      &:last-child {
        margin-right: 7%;
      }
    }
`;

const AppLogo = styled.img`
    width: 100%;
    height: 8.5vh;
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

class ClientNavigation extends React.Component {

    logout = e => {
      e.preventDefault();
      localStorage.removeItem('token');
      this.props.history.push('/');
    }

    route = (route, e) => {
      e.preventDefault();
      this.props.history.push(`/client${route}`)
    }

    render() {
        return (
            <NavContainer>
              <Navbar className="clientnavbar" expand="md">
                <NavbarBrand href="/">
                    <AppLogo src={Logo} />
                </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="client-link" onClick={(e) => this.route('/', e)}>
                            Marketplace
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="client-link" onClick={this.logout}>Logout</NavLink>
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
                <div className="link-container">
                  <NavLink onClick={(e) => this.route('/talentlist', e)} className="tert-link">
                    Find Talent
                  </NavLink>
                  <NavLink onClick={(e) => this.route('/applications', e)} className='tert-link'>
                    Applications
                  </NavLink>
                  <NavLink onClick={(e) => this.route('/profile', e)} className='tert-link'>
                    My Profile
                  </NavLink>
                  <Link to="/client/postJob"><Button className="btn-orange">Post Job</Button></Link>
                </div>
              </TertiaryNav>
            </NavContainer>
        )};
};

export default ClientNavigation;