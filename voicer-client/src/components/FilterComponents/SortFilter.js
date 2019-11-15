import React, { Component } from 'react';
import styled from 'styled-components';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setSort } from '../../actions/filterData';

// Styling
const MainDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-weight: bold;
`

// Component
class SortFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: true
        }
    }

    toggleMenu = () => this.setState({
        toggleMenuValue: !this.state.toggleMenuValue
    })

    selectedSort = _ => {
        switch(this.props.sortState){
            case "alpha":
                return "Alphabetical"
            case "num":
                return "Numerical"
            case "reverseAlpha":
                return "Reverse Alphabetical"
        }
    }

    render() {
        return (
            <MainDiv>
                <Label>Sort by:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.selectedSort()}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => {
                            this.props.setSort("alpha");
                            this.props.filterData();
                        }}>Alphabetical</DropdownItem>
                        <DropdownItem onClick={() => {
                            this.props.setSort("num");
                            this.props.filterData();
                        }}>Numerical</DropdownItem>
                        <DropdownItem onClick={() => {
                            this.props.setSort("reverseAlpha");
                            this.props.filterData();
                        }}>Reverse Alphabetical</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    sortState: state.filterReducer.sortState
});

export default connect(mapStateToProps, { filterData, setSort } )(SortFilter);