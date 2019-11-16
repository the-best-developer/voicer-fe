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

    filterPayment = async (payment) => {
        // Run filter using current state
        await this.props.setPayment(payment)
        await this.props.filterData();
    }

    render() {
        return (
            <MainDiv>
                <Label>Payment Type:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.props.paymentState}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={ _ => this.filterPayment("Paypal")} >Paypal</DropdownItem>
                        <DropdownItem onClick={ _ => this.filterPayment("Venmo")}>Venmo</DropdownItem>
                        <DropdownItem onClick={ _ => this.filterPayment("Bankwire")}>Bankwire</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    paymentState: state.filterReducer.paymentState,
    jobs: state.getJobsReducer.jobs
});

export default connect(mapStateToProps, { filterData, setPayment } )(PaymentFilter);