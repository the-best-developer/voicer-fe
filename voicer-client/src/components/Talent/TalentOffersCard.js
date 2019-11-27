import React from 'react';
import { Card, CardBody, CardTitle, Collapse} from 'reactstrap';
import { connect } from 'react-redux';
import TalentOfferCard from './TalentOfferCard';
import '../../styles/tjobofferlist.scss'

class TalentOffersCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedOffers: [],
            recentOffer: {},
            showOffers: false
        }
    }

    async componentDidMount() {
        let sortedOffers = this.props.jobOffers
            .filter(offer => offer.jobId === this.props.job.jobId)
            .reverse()
        await this.setState({sortedOffers: sortedOffers, recentOffer: sortedOffers[0]})
        console.log(this.state.sortedOffers)
    }

    render() {
        console.log(this.state.sortedOffers)
        return (
        <Card className="styled-job-card">
            <div className="job-offers-header">
                {this.state.sortedOffers.length > 0 ?
                <>
                    <p className="header-element">
                        {this.props.job.jobTitle}
                    </p>
                    <p className="header-element">
                        Current Bid - ${this.state.sortedOffers[0].price}
                    </p>
                    <p className="header-element">
                        Client - {this.props.job.firstName + ' ' + this.props.job.lastName}
                    </p>
                    <p className="header-element">
                        Status - {this.props.job.status}
                    </p>
                    <button onClick={() => this.setState({showOffers: !this.state.showOffers})} className="header-element">
                        Show Offers
                    </button>
                </> : null}
            </div>
            <Collapse
                isOpen={this.state.showOffers}
                style={{height: '100% !important'}}
                // onEntering={onEntering}
                // onEntered={onEntered}
                // onExiting={onExiting}
                // onExited={onExited}
            >
                {this.state.sortedOffers.map(offer => {
                    return <TalentOfferCard offer={offer}
                    recent={this.state.recentOffer.jobOfferId === offer.jobOfferId ? true : false}/>
                })}
            </Collapse>
        </Card>
        );
    }
}

const mapStateToProps = state => ({
    jobOffers: state.getJobOffersReducer.jobOffers,
})

export default connect(mapStateToProps, {})(TalentOffersCard);