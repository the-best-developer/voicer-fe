import React, { Component } from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import StarFilter from './StarFilter';
import PaymentFilter from './PaymentFilter';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setFilterData } from '../../actions/filterData';

// FIXME: There is a bit that needs cleaned up. Here are a few things i'd like worked on next:

// Styling:
// Switch over to SASS from styled components, and use some more reactstrap styling.
// Some inline styling would also need to be switched over.

// State:
// The state handling the data would either need to be in Redux or the homepage state.
// The homepage would have to have a function that the filter component can use to pass the filtered data back to the homepage.
// The filtering functions could be refactored into redux reducers, this is a cleaner approach and shouldn't take too long.
// The filtering components should probably use fuse.js for most functions since it can easily sort mutiple keys and is simpler.

// Clean up
// Sample data needs removed and query data included
// Some inline functions need to be added as methods
// Clean up some functions and handle state in a cleaner way

const MainDiv = styled.div`
  margin-top: 19vh;
  min-width: 250px;
  max-width: 25%;
  min-height: 100%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb( 239, 241, 243 );
  padding-top: 5vh;
`

// Component
class FilterComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.filterData()
    }

    setFilters = () => {
        // Call each child filter to process the data and modify state
        
    };


    render() {
        return (
            <MainDiv>
                <SearchFilter />
                <StarFilter />
                <SortFilter />
                <PaymentFilter />
                <Button 
                    style={{
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'rgb(160, 162, 196)',
                        width: '50%',
                        marginLeft: '20px'
                    }}
                    onClick={_ => this.setFilters()}>Filter</Button>
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    filteredData: state.filterReducer.filteredData
});

export default connect(mapStateToProps, { filterData, setFilterData } )(FilterComponent);