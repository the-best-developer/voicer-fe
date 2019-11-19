import React from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getJobs } from '../../actions'
import FilterComponent from '../FilterComponents/FilterComponent';
import { filterData, dataToFilter, setSearchKey, setSortKey } from '../../actions/filterData';

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
        await this.props.dataToFilter(this.props.jobs)
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
    filteredData: state.filterReducer.filteredData
})

export default connect(
    mapStateToProps,
    { getJobs, dataToFilter, filterData, setSortKey, setSearchKey }
)(TalentHomePage);