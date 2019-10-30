import React from 'react';
import JobList from './JobList/JobList';
import axios from 'axios';
import { connect } from 'react-redux';

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
            <JobList />
        )
    }
    
}

const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    { getJobs }
)(TalentHomePage);