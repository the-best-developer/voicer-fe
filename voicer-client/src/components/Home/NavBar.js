import React, { useState } from 'react';
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
            <div style={{width: '100%', backgroundColor: '#9FA4C4'}}>


          <div className="testing">
            This is for testing
          </div>

              <Navbar light expand="md">
                <NavbarBrand href="/">Voicer</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Onboard
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                            <NavLink href="/login">Login</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/register">Register</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        );
    }
}

export default NavBar;
