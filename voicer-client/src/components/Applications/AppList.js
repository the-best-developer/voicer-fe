import React, { Component } from 'react';
import AppCard from './AppCard';
import styled from 'styled-components';

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

// Component
class AppList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MainDiv>
                {this.props.apps.map(app => <AppCard key={app.jobId} appData={app}/>)}
            </MainDiv>
        );
    };
};

export default AppList;