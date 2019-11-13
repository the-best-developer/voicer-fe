import React, { Component } from 'react';
import styled from 'styled-components';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setPayment } from '../../actions/filterData';

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

    runFilter = () => {
        // Run filter using current state
        this.props.filterData();
    }

    render() {
        return (
            <MainDiv>
                <Label>Payment Type:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.props.paymentState}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={ _ => this.props.setPayment("Paypal") && this.runFilter()} >Paypal</DropdownItem>
                        <DropdownItem onClick={ _ => this.props.setPayment("Venmo")}>Venmo</DropdownItem>
                        <DropdownItem onClick={ _ => this.props.setPayment("Bankwire") }>Bankwire</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    paymentState: state.filterReducer.paymentState
});

export default connect(mapStateToProps, { filterData, setPayment } )(PaymentFilter);