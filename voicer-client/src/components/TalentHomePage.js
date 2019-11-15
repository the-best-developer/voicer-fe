import React from 'react';
import JobList from './JobList/JobList';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getJobs } from '../actions'
import FilterComponent from './FilterComponents/FilterComponent';

const HomePage = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class TalentHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getJobs()
    }

    render() {
        return(
            <HomePage>
                <FilterComponent />
                <JobList jobs={this.props.filteredData.length===0 ? this.props.jobs : this.props.filteredData} />
            </HomePage>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs,
    filteredData: state.filterReducer.filteredData
})

export default connect(
    mapStateToProps,
    { getJobs }
)(TalentHomePage);