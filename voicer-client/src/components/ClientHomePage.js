import React from 'react';
import { connect } from 'react-redux';
import { getJobsBy } from '../actions';
import jwt from 'jsonwebtoken';
import ClientJobList from './JobList/ClientJobList';
import axiosWithAuth from './axiosAuth';
import styled from 'styled-components';
import FilterComponent from './FilterComponents/FilterComponent';
import { filterData, dataToFilter, setSearchKey, setSortKey } from '../actions/filterData';
import ClientWelcome from './ClientWelcome';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "../App.scss";

const HomePage = styled.div`
    margin-top: 19vh;
    min-height: 100%;
    display: flex;
    flex-direction: row;
`;

class ClientHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: jwt.decode(localStorage.getItem("token")).userId,
        }
    }

    componentDidMount = async () => {
        const client = await axiosWithAuth().get(`https://voicer-lambda-app-staging.herokuapp.com/api/clients/${this.state.userId}`)
        await this.props.getJobsBy(client.data[0].clientId)
        await this.props.dataToFilter(this.props.jobs)
        await this.props.filterData()
    }

    render() {
        return(
            <HomePage>
                <FilterComponent />
<<<<<<< HEAD
                <div className="job-list-container">
                    {this.props.jobs.length === 0 ? <ClientWelcome /> : <ClientJobList jobs={this.props.jobs} />}
                    <Link to="/client/postJob" className="centered"><Button className="btn-orange btn-centered">Post Job</Button></Link>
                </div>
=======
                {this.props.jobs.length === 0 ? <ClientWelcome /> : <ClientJobList jobs={this.props.jobs} />}
                <Link to="/client/postJob" className="centered"><Button className="btn-orange btn-centered">Post Job</Button></Link>
>>>>>>> 79edb0fcc2fb2ef1461e1fac6f5ad4c3c9d0c8d0
            </HomePage>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs,
    filteredData: state.filterReducer.filteredData
})

export default connect(
    mapStateToProps,
    { getJobsBy, dataToFilter, filterData, setSortKey, setSearchKey }
)(ClientHomePage);