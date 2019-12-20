import React from 'react';
import { connect } from 'react-redux';
import { getTalentJobOffers } from '../../actions';
import '../../styles/tjobofferlist.scss';
import Container from '../../styles/styledComponents/Container';
import TalentOffersCard from './TalentOffersCard';
import styled from 'styled-components';

const OffersContainer = styled(Container)`
    margin: 21vh 0;
`; 
class TalentOfferView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hiringJobs: [],
            hiredJobs: [],
            declinedJobs: []
        }
    }

    async componentDidMount() {
        await this.props.getTalentJobOffers(this.props.talent[0].talentId)
        await this.sortJobs()
    }

    sortJobs = async() => {
        // We're going to split the job ids into 3 seperate arrays for sorting
        let hiringIds = []
        let hiredIds = []
        let declinedIds = []
        // Each map is sorting each possible job type
        this.props.jobOffers.map(offer => {
            if(offer.status.toLowerCase() === "declined") {
                return declinedIds.push(offer.jobId)
            }
        })
        this.props.jobOffers.map(offer => {
            if(!hiringIds.includes(offer.jobId) && !declinedIds.includes(offer.jobId)) {
                return hiringIds.push(offer.jobId)
            }
        })
        this.props.jobOffers.map(offer => {
            if(!hiredIds.includes(offer.jobId) && offer.status.toLowerCase()==="accepted" ||
               !hiredIds.includes(offer.jobId) && offer.status.toLowerCase()==="completed") {
                return hiredIds.push(offer.jobId)
            }
        })
        // Initialize job arrays
        let hiringJobs = []
        let hiredJobs = []
        let declinedJobs = []
        // Each map is checking the arrays we were storing ID's in earlier
        // And pushes jobs to their respective arrays, so we can organize them
        this.props.jobs.map(job => {
            if(hiringIds.includes(job.jobId) && job.status.toLowerCase() === 'hiring') {
                hiringJobs.push(job)
            }
        })
        this.props.jobs.map(job => {
            if(hiredIds.includes(job.jobId) && job.status.toLowerCase() === 'hired' || 
               hiredIds.includes(job.jobId) && job.status.toLowerCase() === 'completed') {
                hiredJobs.push(job)
            }
        })
        this.props.jobs.map(job => {
            if(declinedIds.includes(job.jobId)) {
                declinedJobs.push(job)
            }
        })
        await this.setState({
            hiringJobs: hiringJobs,
            hiredJobs: hiredJobs,
            declinedJobs: declinedJobs
        })
    }

    render() {
        return (
            <OffersContainer>
                <h3 className="jobs-type">Pending Jobs</h3>
                {this.state.hiringJobs.map(job => {
                    return <TalentOffersCard job={job} />
                })}
                <h3 className="jobs-type">Accepted/Completed Jobs</h3>
                {this.state.hiredJobs.map(job => {
                    return <TalentOffersCard job={job} />
                })}
                <h3 className="jobs-type">Declined Jobs</h3>
                {this.state.declinedJobs.map(job => {
                    return <TalentOffersCard job={job} />
                })}
            </OffersContainer>
        )
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent,
    jobOffers: state.getJobOffersReducer.jobOffers,
    jobs: state.getJobsReducer.jobs
})


export default connect(mapStateToProps, { getTalentJobOffers })(TalentOfferView)