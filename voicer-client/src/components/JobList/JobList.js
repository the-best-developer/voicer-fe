import React, { Component } from 'react';
import JobListCard from './JobListCard'
import styled from 'styled-components'

// Styling
const MainDiv = styled.div`
  width: 60%;
  margin: 10px;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: 1px solid red;
  padding: 10px;
`

// Sample Data
const sampleData = [
    {
        "clientId" : "1",
        "jobTitle" : "Cool guy",
        "jobDescription" : "I need a cool guy to do stuff"
    },
    {
        "clientId" : "2",
        "jobTitle" : "Alright bro",
        "jobDescription" : "I need a alright bro to do stuff"
    },
    {
        "clientId" : "3",
        "jobTitle" : "Cold fellow",
        "jobDescription" : "I need a cold fellow to do stuff"
    },
    {
        "clientId" : "4",
        "jobTitle" : "Fire bruh",
        "jobDescription" : "I need a fire bruh to do stuff"
    },
    {
        "clientId" : "5",
        "jobTitle" : "Ice bruh",
        "jobDescription" : "I need a ice bruh to do stuff"
    },
    {
        "clientId" : "6",
        "jobTitle" : "Electric bruh",
        "jobDescription" : "I need a electric bruh to do stuff"
    },
    {
        "clientId" : "7",
        "jobTitle" : "Earth bruh",
        "jobDescription" : "I need a earth bruh to do stuff"
    }
];

// Component
class JobList extends Component {
    state = {
        jobData: sampleData
    };

    render() {
        return (
            <MainDiv>
                {this.state.jobData.map(job => <JobListCard jobData={job}/>)}
            </MainDiv>
        );
    };
};

export default JobList