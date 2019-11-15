import React from 'react';
import { connect } from 'react-redux';
import { getJobsBy } from '../actions';
import jwt from 'jsonwebtoken';
import ClientJobList from './JobList/ClientJobList';
import axiosWithAuth from './axiosAuth';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../App.scss";

class ClientHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: jwt.decode(localStorage.getItem("token")).userId,
        }
    }

    componentDidMount = async () => {
        const client = await axiosWithAuth().get(`https://voicer-lambda-app-staging.herokuapp.com/api/clients/${this.state.userId}/jobs`)
        this.props.getJobsBy(client.data[0].clientId)
    }

    render() {
        return(
            <div className="ClientHomePage">
                <ClientJobList jobs={this.props.jobs} />
                <Link to="/client/postJob" className="centered"><Button className="btn-orange btn-centered">Post Job</Button></Link>
            </div>
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