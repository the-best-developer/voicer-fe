import React, { Component } from 'react';
import styled from 'styled-components';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

// Styling
const MainDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-weight: bold;
`

// Component
class PaymentFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: true,
            typeSelected: "Paypal"
        }
    }

    toggleMenu = () => this.setState({
        toggleMenuValue: !this.state.toggleMenuValue
    })

    render() {
        return (
            <MainDiv>
                <Label>Payment Type:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.state.typeSelected}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={ _ => this.setState({typeSelected: "Paypal"})} >Paypal</DropdownItem>
                        <DropdownItem onClick={ _ => this.setState({typeSelected: "Venmo"})}>Venmo</DropdownItem>
                        <DropdownItem onClick={ _ => this.setState({typeSelected: "Bankwire"})}>Bankwire</DropdownItem>
                        </DropdownMenu>
                </Dropdown>
            
            </MainDiv>
        );
    };
};

export default PaymentFilter;