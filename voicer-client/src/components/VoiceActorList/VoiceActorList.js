import React, { Component } from 'react';
import VoiceActorCard from './VoiceActorCard'
import styled from 'styled-components'

// Styling
const MainDiv = styled.div`
  width: 75%;
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
        "username" : "Jack",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jack",
        "lastName" : "Jackson"
    },
    {
        "username" : "Jake",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jake",
        "lastName" : "Jakeson"
    },
    {
        "username" : "James",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "James",
        "lastName" : "Jameson"
    },
    {
        "username" : "Jerry",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jerry",
        "lastName" : "Jerryson"
    },
    {
        "username" : "Jack2",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jack2",
        "lastName" : "Jackson"
    },
    {
        "username" : "Jake2",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jake2",
        "lastName" : "Jakeson"
    },
    {
        "username" : "James2",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "James2",
        "lastName" : "Jameson"
    },
    {
        "username" : "Jerry2",
        "password" : "test",
        "userType" : "Talent",
        "email" : "ex@am.ple",
        "firstName" : "Jerry2",
        "lastName" : "Jerryson"
    }
];

// Component
class VoiceActorList extends Component {
    state = {
        vaData: sampleData
    };

    render() {
        return (
            <MainDiv>
                {this.state.vaData.map(data => <VoiceActorCard vaData={data}/>)}
            </MainDiv>
        );
    };
};

export default VoiceActorList;