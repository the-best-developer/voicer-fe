import React, { Component } from 'react';
import styled from 'styled-components';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setSort, setSortKey } from '../../actions/filterData';

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

    filterSort = async (type) => {

        // Run filter using current state

        // FIXME:
        // This should be moved into each specific component to reference the key in the table to sort.
        // ====================================================================================================
        
        // define key to sort:
        let key;
        switch (type) {

            // If client, sort by talent data. if talent, sort by job data.
            case "alpha":
                key = (this.props.userType === 'client') ? 'firstName' : 'jobTitle'
            case "recent":
                key = (this.props.userType === 'client') ? 'jobId' : 'jobId'
            case "rating":
                key = (this.props.userType === 'client') ? 'firstName' : 'jobTitle'

        }
        // ====================================================================================================
        
        await this.props.setSort(type)
        await this.props.setSortKey(key)
        await this.props.filterData();
    }

    selectedSort = _ => {
        switch(this.props.sortState){

            case "alpha":
                return "Alphabetical"

            case "recent":
                return "Most recent"

            case "rating":
                return "Highest rated"
        }
    }

    render() {
        return (
            <MainDiv>
                <Label>Sort by:</Label>
                <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                    <DropdownToggle caret>{this.selectedSort()}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.filterSort("alpha")}>Alphabetical</DropdownItem>
                        <DropdownItem onClick={() => this.filterSort("recent")}>Most recent</DropdownItem>
                        <DropdownItem onClick={() => this.filterSort("rating")}>Highest rated</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    sortState: state.filterReducer.sortState,
    jobs: state.getJobsReducer.jobs
});

export default connect(mapStateToProps, { filterData, setSort, setSortKey } )(SortFilter);