import React, { Component } from 'react';
import AppCard from './AppCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getApplications } from '../../actions';

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
        this.state = {
            applications: []
        }
    }

    componentDidMount = async () => {
        const apps = await getApplications(this.props.jobId)
        this.setState({
            applications: apps
        })
    }

    render() {
        return (
            <MainDiv>
                {this.state.applications.map(app => <AppCard key={app.jobId} appData={app}/>)}
            </MainDiv>
        );
    };
};

mapStateToProps = state => ({
    jobId: state.getTalentReducer.jobId
})

export default connect(mapStateToProps, { getApplications })(AppList)