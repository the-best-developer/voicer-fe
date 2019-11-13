import React from 'react';
import { connect } from 'react-redux';
import { getJobsBy } from '../actions';
import jwt from 'jsonwebtoken';
import ClientJobList from './JobList/ClientJobList';
import axiosWithAuth from './axiosAuth';

class ClientHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: jwt.decode(localStorage.getItem("token")).userId,
        }
    }

    componentDidMount = async () => {
        const client = await axiosWithAuth().get(`https://voicer-lambda-app-staging.herokuapp.com/api/clients/${this.state.userId}`)
        this.props.getJobsBy(client.data[0].clientId)
    }

    render() {
        return(
            <ClientJobList jobs={[this.props.jobs]} />
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs
})

export default connect(
    mapStateToProps,
    { getJobsBy }
)(ClientHomePage);