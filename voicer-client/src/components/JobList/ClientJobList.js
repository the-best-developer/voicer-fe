import React, { Component } from 'react';
import ClientJobListCard from './ClientJobListCard';
import styled from 'styled-components';
import '../../App.scss';

// Styling
const MainDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 10px;
`

// Component
class ClientJobList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MainDiv>
                {this.props.jobs.map(job => <ClientJobListCard key={job.jobId} jobData={job}/>)}
            </MainDiv>
        );
    };
};

export default ClientJobList
