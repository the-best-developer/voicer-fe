import React, { Component } from 'react';
import JobListCard from './JobListCard';
import styled from 'styled-components';
import ApplyToJob from '../ApplyToJob';
import '../../App.scss';

// Styling
const MainDiv = styled.div`
  max-width: 70%;
  margin: 21vh 10px 0 10px;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px;
  height: 99vh;
  &:last-child {
      margin-bottom: 30px;
  }
`

// Component
class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeJob: {},
            modalIsOpen: false,
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
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        console.log(this.props.jobs)
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
                <ApplyToJob
                    toggle={this.toggle}
                    isOpen={this.state.modalIsOpen}
                    job={this.state.activeJob}
                />
            </MainDiv>
        );
    };
};

export default JobList
