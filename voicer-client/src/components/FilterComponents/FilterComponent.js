import React, { Component } from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import StarFilter from './StarFilter';
import PaymentFilter from './PaymentFilter';

// Styling
const MainDiv = styled.div`

  min-width: 225px;
  max-width: 25%;
  height: 99vh;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb( 239, 241, 243 );
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
class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storedData: []
        }
    }

    componentDidMount() {
        this.setState({
            storedData: [...sampleData]
        })
    }

    updateData = data => this.setState({
        storedData: [...data]
    })


    render() {
        return (
            <MainDiv>
                <SearchFilter updateData={this.updateData} data={sampleData} keys={['jobTitle']} />
                <StarFilter updateData={this.updateData} data={this.state.storedData} keys={"stars"} />
                <SortFilter updateData={this.updateData} data={this.state.storedData} keys={"jobTitle"} />
                <PaymentFilter />
            </MainDiv>
        );
    };
};

export default FilterComponent;