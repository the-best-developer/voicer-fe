import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setSearch, setSearchKey } from '../../actions/filterData';

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

    filterSearch = async (text, key) => {
        // Run filter using current state
        await this.props.setSearchKey(key)
        await this.props.setSearch(text)
        await this.props.filterData()
    }

    render() {
        return (
            <MainDiv>
                <Label>Search:</Label>
                <Input value={this.props.searchState} onChange={(e) => this.filterSearch(`${e.target.value}`, ['jobTitle', 'jobDescription'])} />
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    searchState: state.filterReducer.searchState,
    jobs: state.getJobsReducer.jobs
});

export default connect(mapStateToProps, { filterData, setSearch, setSearchKey } )(SearchFilter);
