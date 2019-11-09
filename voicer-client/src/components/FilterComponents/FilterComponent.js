import React, { Component } from 'react';
import JobList from '../JobList/JobList';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import StarFilter from './StarFilter';
import PaymentFilter from './PaymentFilter';
import { Button } from 'reactstrap';

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
        this.paymentChild = React.createRef();
        this.searchChild = React.createRef();
        this.sortChild = React.createRef();
        this.starChild = React.createRef();
    }

    componentDidMount() {
        this.setState({
            storedData: [...sampleData]
        })
    }

    updateData = data => this.setState({
        storedData: [...data]
    })

    setFilters = () => {
        this.paymentChild.current.runFilter();
        this.searchChild.current.runFilter();
        this.sortChild.current.runFilter();
        this.starChild.current.runFilter();
      };


    render() {
        return (
            <MainDiv>
                <SearchFilter ref={this.searchChild} updateData={this.updateData} data={sampleData} keys={['jobTitle']} />
                <StarFilter ref={this.starChild} updateData={this.updateData} data={this.state.storedData} keys={"stars"} />
                <SortFilter ref={this.sortChild} updateData={this.updateData} data={this.state.storedData} keys={"jobTitle"} />
                <PaymentFilter ref={this.paymentChild} />
                <Button 
                    style={{
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'rgb(160, 162, 196)',
                        width: '50%',
                        marginLeft: '20px'
                    }}
                    onClick={_ => this.setFilters()}>Filter</Button>
            </MainDiv>
        );
    };
};

export default FilterComponent;