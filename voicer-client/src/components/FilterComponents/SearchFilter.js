import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setSearch } from '../../actions/filterData';

// Styling
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
`

// Component
class SearchFilter extends Component {
    constructor(props) {
        super(props);
    }

    runFilter = () => {
        // Run filter using current state
    }

    render() {
        return (
            <MainDiv>
                <Label>Search:</Label>
                <Input value={this.props.searchState} onChange={(e) => {
                    this.props.setSearch(`${e.target.value}`)
                    this.props.filterData();
                }} />
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    searchState: state.filterReducer.searchState
});

export default connect(mapStateToProps, { filterData, setSearch } )(SearchFilter);