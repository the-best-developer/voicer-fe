import React from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getJobs } from '../../actions'
import { getTalent } from '../../actions';
import FilterComponent from '../FilterComponents/FilterComponent';
import { filterData, dataToFilter, setSearchKey, setSortKey } from '../../actions/filterData';

const HomePage = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 19vh;
`;

class TalentHomePage extends React.Component {

    async componentDidMount() {
        await this.props.getTalent(this.props.userId)
        await this.props.getJobs()
        let jobs = this.props.jobs.sort((a, b) => b.jobId - a.jobId)
        await this.props.dataToFilter(jobs)
        await this.props.filterData()
    }

    render() {
        return(
            <HomePage>
                <FilterComponent />
                <JobList jobs={this.props.filteredData} />
            </HomePage>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs,
    filteredData: state.filterReducer.filteredData,
    userId: state.loginReducer.id
})

export default connect(
    mapStateToProps,
    { getJobs, getTalent, dataToFilter, filterData, setSortKey, setSearchKey }
)(TalentHomePage);