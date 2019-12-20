import React from 'react';
import { connect } from 'react-redux';
import { getJobsBy, getApplicationsByClientId, getClientProfile } from '../actions';
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
            applications: [],
            client: {}
        }
    }

    componentDidMount = async () => {
        await this.props.getClientProfile(this.state.userId)
        await this.setState({client: this.props.client})
        await this.props.getJobsBy(this.state.client.clientId)
        await this.props.dataToFilter(this.props.jobs)
        await this.props.filterData()
        await this.props.getApplicationsByClientId(this.state.client.clientId)
        this.setState({applications: this.props.applications})
    }

    render() {
        return(
            <HomePage>
                <FilterComponent />
                <div className="job-list-container">
                    {this.props.jobs.length === 0 ? <ClientWelcome /> :
                        <ClientJobList
                            jobs={this.props.filteredData}
                            clientId={this.state.client.clientId}
                            clientName={this.state.client.firstName + ' ' + this.state.client.lastName}
                            applications={this.state.applications}
                        />
                    }
                    <Link to="/client/postJob" className="centered"><Button className="btn-orange btn-centered">Post Job</Button></Link>
                </div>
            </HomePage>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs,
    filteredData: state.filterReducer.filteredData,
    applications: state.getJobOffersReducer.jobOffers,
    client: state.getClientProfileReducer.clientProfile
})

export default connect(
    mapStateToProps,
    { getJobsBy, getClientProfile, dataToFilter, filterData, setSortKey, setSearchKey, getApplicationsByClientId }
)(ClientHomePage);