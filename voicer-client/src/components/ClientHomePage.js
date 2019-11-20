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
import "../App.scss";

const HomePage = styled.div`
    margin-top: 19vh;
    min-height: 100%;
    display: flex;
<<<<<<< HEAD
    flex-direction: row;
=======
    flex-wrap: wrap;
    margin-top: 19vh;
    min-height: 65vh;
>>>>>>> e702508a306e368d375dc3dc1ccd8617a34c3e1e
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
                <ClientJobList jobs={this.props.filteredData} />
>>>>>>> e702508a306e368d375dc3dc1ccd8617a34c3e1e
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