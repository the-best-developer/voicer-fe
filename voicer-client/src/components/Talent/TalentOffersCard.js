import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import { connect } from 'react-redux';
import TalentOfferCard from './TalentOfferCard';
import '../../styles/tjobofferlist.scss'

class TalentOffersCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedOffers: []
        }
    }

    async componentDidMount() {
        let sortedOffers = this.props.jobOffers
            .filter(offer => offer.jobId === this.props.job.jobId)
            .reverse()
        await this.setState({sortedOffers})
        console.log(this.state.sortedOffers)
    }

    render() {
        return (
        <Card>
            <div className="job-offers-header">
                This is a job
            </div>
            {this.state.sortedOffers.map(offer => {
                return <TalentOfferCard offer={offer} />
            })}
        </Card>
        );
    }
}

const mapStateToProps = state => ({
    jobOffers: state.getJobOffersReducer.jobOffers,
})

export default connect(mapStateToProps, {})(TalentOffersCard);