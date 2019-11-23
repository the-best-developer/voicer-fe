import React, { Component } from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import StarFilter from './StarFilter';
import PaymentFilter from './PaymentFilter';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { filterData } from '../../actions/filterData';

// FIXME: There is a bit that needs cleaned up. Here are a few things i'd like worked on next:

// Styling:
// Switch over to SASS from styled components, and use some more reactstrap styling.
// Some inline styling would also need to be switched over.

const MainDiv = styled.div`
  min-width: 250px;
  max-width: 25%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb( 239, 241, 243 );
`

// Component
class FilterComponent extends Component {
    constructor(props) {
        super(props);
    }

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
                    onClick={_ => this.props.filterData()}>Filter</Button>
            </MainDiv>
        );
    };
};

export default connect(null, { filterData } )(FilterComponent);
