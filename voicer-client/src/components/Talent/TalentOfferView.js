import React from 'react';
import { connect } from 'react-redux';
import { getTalentJobOffers } from '../../actions';
import '../../styles/tjobofferlist.scss';
import Container from '../../styles/styledComponents/Container';
import TalentOffersCard from './TalentOffersCard';

class TalentOfferView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedJobs: []
        }
    }

    async componentDidMount() {
        await this.props.getTalentJobOffers(this.props.talent[0].talentId)
        // Grab relevant job ids
        let jobIds = []
        console.log(this.props.jobOffers)
        this.props.jobOffers.map(offer => {
            return jobIds.includes(offer.jobId) ? null : jobIds.push(offer.jobId)
        })
        // Push hiring jobs first to Array, then hired jobs to sort them
        let sortedJobs = []
        this.props.jobs.map(job => {
            if(jobIds.includes(job.jobId) && job.status === 'Hiring') {
                sortedJobs.push(job)
            }
        })
        this.props.jobs.map(job => {
            if(jobIds.includes(job.jobId) && job.status === 'Hired') {
                sortedJobs.push(job)
            }
        })
        await this.setState({sortedJobs})
        console.log(this.state.sortedJobs)
    }

    render() {
        return (
            <Container>
                {this.state.sortedJobs.map(job => {
                    return <TalentOffersCard job={job} />
                })}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent,
    jobOffers: state.getJobOffersReducer.jobOffers,
    jobs: state.getJobsReducer.jobs
})


export default connect(mapStateToProps, { getTalentJobOffers })(TalentOfferView)