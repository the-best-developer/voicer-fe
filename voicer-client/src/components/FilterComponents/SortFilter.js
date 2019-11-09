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

const sortData = (data, key = [], method) => {
    let sortedData = [...data]

    switch(method) {
        case 'alpha':
            sortedData.sort((x,y) => (y[key] > x[key]) ? -1 : 1);
            return sortedData;
        case 'num':
            sortedData.sort((x,y) => x['clientId'] - y['clientId']);
            return sortedData;
        case 'reverseAlpha':
            sortedData.sort((x,y) => (y[key] > x[key]) ? -1 : 1).reverse();
            return sortedData;
        default:
            return sortedData;
    }
}

// Component
class SortFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "Alphabetical",
            toggleMenu: true
        }
    }

    toggleMenu = () => this.setState({
        toggleMenuValue: !this.state.toggleMenuValue
    })

    render() {
        return (
            <MainDiv>
                <Label>Sort by:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.state.sortBy}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => {
                            this.props.updateData(sortData(this.props.data, this.props.keys, "alpha"))
                            this.setState({sortBy: "Alphabetical"})
                        }}>Alphabetical</DropdownItem>
                        <DropdownItem onClick={() => {
                            this.props.updateData(sortData(this.props.data, this.props.keys, "num"))
                            this.setState({sortBy: "Numerical"})
                        }}>Numerical</DropdownItem>
                        <DropdownItem onClick={() => {
                            this.props.updateData(sortData(this.props.data, this.props.keys, "reverseAlpha"))
                            this.setState({sortBy: "Reverse Alphabetical"})
                        }}>Reverse Alphabetical</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
            </MainDiv>
        );
    };
};

export default SortFilter;