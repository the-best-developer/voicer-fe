import React, { Component } from 'react';
import JobListCard from './JobListCard';
import styled from 'styled-components';
import ApplyToJob from '../ApplyToJob';
import '../../App.css';

// Styling
const MainDiv = styled.div`
  width: 60%;
  margin: 10px;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`

// Component
class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeJob: {},
            modalIsOpen: false
        }
    }

    openModal = job => {
        console.log("openModal")
        this.setState({
            activeJob: job,
        })
        console.log(this.state.activeJob)
    }

    toggle = () => {
        console.log("toggle")
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        return (
            <MainDiv>
                {this.props.jobs.map(job =>
                    <JobListCard
                        key={job.jobId}
                        jobData={job}
                        openModal={this.openModal}
                        toggle={this.toggle}
                    />
                )}
                <ApplyToJob toggle={this.toggle} isOpen={this.state.modalIsOpen} job={this.state.activeJob} />
            </MainDiv>
        );
    };
};

export default JobList