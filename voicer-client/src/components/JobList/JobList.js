import React, { Component } from 'react';
import JobListCard from './JobListCard';
import styled from 'styled-components';
import ApplyToJob from '../ApplyToJob';
import JobInfo from '../JobInfo';
import ReviewModal from '../ReviewModal';
import '../../App.scss';

// Styling
const MainDiv = styled.div`
  width: 65%;
  margin: 0 10px 0 10px;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px 10% 10px 10px;
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
            modalIsOpen2: false,
        }
    }

    openModal = job => {
        this.setState({
            activeJob: job,
        })
    }

    toggle = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    toggle2 = () => {
        this.setState({
            modalIsOpen2: !this.state.modalIsOpen2
        })
    }

    render() {
        const jobs = this.props.jobs.filter(job => job.status !== "Hired")
        return (
            <MainDiv>
                {jobs.map(job =>
                    <JobListCard
                        key={job.jobId}
                        jobData={job}
                        openModal={this.openModal}
                        toggle={this.toggle}
                        toggle2={this.toggle2}
                    />
                )}
                <ApplyToJob
                    toggle={this.toggle}
                    isOpen={this.state.modalIsOpen}
                    job={this.state.activeJob}
                />
                <ReviewModal
                    toggle={this.toggle2}
                    isOpen={this.state.modalIsOpen2}
                    job={this.state.activeJob}
                />
            </MainDiv>
        );
    };
};

export default JobList
