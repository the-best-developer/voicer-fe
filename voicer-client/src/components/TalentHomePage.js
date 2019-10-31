import React from 'react';
import JobList from './JobList/JobList';
import { connect } from 'react-redux';
import { getJobs } from '../actions'

class TalentHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: []
        }
    }

    componentDidMount() {
        this.props.getJobs()
    }

    render() {
        return(
            <JobList jobs={this.state.jobList}/>
        )
    }
    
}

const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    { getJobs }
)(TalentHomePage);