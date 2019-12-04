import React from 'react';
import { Card, CardBody, CardTitle, Collapse} from 'reactstrap';
import { connect } from 'react-redux';
import TalentOfferCard from './TalentOfferCard';
import DeclineJob from '../DeclineJob';
import '../../styles/tjobofferlist.scss';

class TalentOffersCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedOffers: [],
            recentOffer: {},
            showOffers: false,
            declineModalIsOpen: false
        }
    }

    async componentDidMount() {
        let sortedOffers = this.props.jobOffers
            .filter(offer => offer.jobId === this.props.job.jobId)
            .reverse()
        await this.setState({sortedOffers: sortedOffers, recentOffer: sortedOffers[0]})
        console.log(this.state.sortedOffers)
    }

    toggleDeclineModal = () => {
        this.setState({
            declineModalIsOpen: !this.state.declineModalIsOpen
        })
    }

    render() {
        return (
        <>
        {this.state.sortedOffers.length > 0 ?
        this.state.sortedOffers[0].status !== "Declined" ?

        <Card className="styled-job-card">
            <div className="job-offers-header">
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
                        {this.props.job.status === "Hired" ? "Show Final Bid" : "Show Offers"}
                    </button>
                </>
            </div>
            {this.props.job.status === "Hiring" ?
            <Collapse
                isOpen={this.state.showOffers}
                style={{height: '100% !important'}}
                // onEntering={onEntering}
                // onEntered={onEntered}
                // onExiting={onExiting}
                // onExited={onExited}
            >   
                {this.state.sortedOffers.map(offer => {
                    return <TalentOfferCard offer={offer} job={this.props.job}
                    recent={this.state.recentOffer.jobOfferId === offer.jobOfferId ? true : false}/>
                })}
                <DeclineJob
                    toggle={this.toggleDeclineModal}
                    isOpen={this.state.declineModalIsOpen}
                    job={this.props.job}
                    offer={this.state.sortedOffers ? this.state.sortedOffers[0] : null}
                />
            </Collapse> :
            <Collapse
                isOpen={this.state.showOffers}
                style={{height: '100% !important'}}
            >
                <p className="accepted-job-desc">
                    You accepted this job for $
                    {this.state.sortedOffers.length > 0 ? this.state.sortedOffers[0].price : 0}
                    , great work!
                </p>
            </Collapse>
            }
        </Card>
        :
        <Card className="styled-job-card declined">
            <div className="job-offers-header">
                <>
                    <p className="header-element">
                        {this.props.job.jobTitle}
                    </p>
                    <p className="header-element">
                        Final Bid - ${this.state.sortedOffers[0].price}
                    </p>
                    <p className="header-element">
                        Client - {this.props.job.firstName + ' ' + this.props.job.lastName}
                    </p>
                    <p className="header-element">
                        Status - Declined
                    </p>
                </>
            </div>
        </Card> 
        : null
        }
        </>
        );
    }
}

const mapStateToProps = state => ({
    jobOffers: state.getJobOffersReducer.jobOffers,
})

export default connect(mapStateToProps, {})(TalentOffersCard);