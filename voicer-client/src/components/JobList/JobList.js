import React, { Component } from 'react';
import JobListCard from './JobListCard'

const sampleData = {
        "clientId" : "1",
        "jobTitle" : "Cool guy",
        "jobDescription" : "I need a cool guy to do stuff"
}

class JobList extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Here is a list of jobs:</h1>
                <JobListCard jobData={sampleData}/>
            </div>
        )
    }
}

export default JobList