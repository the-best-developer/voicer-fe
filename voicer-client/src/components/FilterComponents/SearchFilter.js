import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { getJobs} from '../../actions'
import { filterData, setSearch, setFilterData } from '../../actions/filterData';

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

    runFilter = async () => {
        // Run filter using current state
        await this.props.filterData(this.props.jobs)
    }

    render() {
        return (
            <MainDiv>
                <Label>Search:</Label>
                <Input value={this.props.searchState} onChange={(e) => {
                    this.props.setSearch(`${e.target.value}`)
                    this.runFilter()
                }} />
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    searchState: state.filterReducer.searchState,
    jobs: state.getJobsReducer.jobs
});

export default connect(mapStateToProps, { filterData, setSearch, getJobs} )(SearchFilter);