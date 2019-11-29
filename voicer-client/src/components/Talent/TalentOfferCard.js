import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import TalentJobOfferMessage from './TalentJobOfferMessage';
import CounterOffer from '../CounterOffer';
import '../../styles/tjobofferlist.scss';
import AcceptOffer from './AcceptOffer';

class TalentOfferCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoModalIsOpen: false,
            counterOfferModalIsOpen: false,
            acceptModalIsOpen: false,
            declineModalIsOpen: false
        }
    }

    toggleInfoModal = () => {
        this.setState({
            infoModalIsOpen: !this.state.infoModalIsOpen
        })
    }

    toggleCounterOfferModal = () => {
        this.setState({
            counterOfferModalIsOpen: !this.state.counterOfferModalIsOpen
        })
    }

    toggleAcceptModal = () => {
        this.setState({
            acceptModalIsOpen: !this.state.acceptModalIsOpen
        })
    }

    render() {
        return (
            <div className="job-offer-card">
                <TalentJobOfferMessage
                    toggle={this.toggleInfoModal}
                    isOpen={this.state.infoModalIsOpen}
                    message={this.props.offer.clientMessage}
                />
                <CounterOffer 
                    toggle={this.toggleCounterOfferModal}
                    isOpen={this.state.counterOfferModalIsOpen}
                    job={this.props.job}
                />
                <AcceptOffer 
                    toggle={this.toggleAcceptModal}
                    isOpen={this.state.acceptModalIsOpen}
                    job={this.props.job}
                    offer={this.props.offer}
                />
                <div className="job-offer-info">
                    <div className="jo-card-left">
                        <button onClick={this.toggleInfoModal}>Show Message</button>
                        <p>Bid - ${this.props.offer.price}</p>
                    </div>
                    {this.props.recent ? 
                    <div className="jo-card-right">
                        <button
                            onClick={async() => await this.toggleCounterOfferModal()} 
                            className={this.props.offer.isClientOffer ? 'jo-button-action' : 'jo-button-pending'}
                            disabled={!this.props.offer.isClientOffer}
                        >
                            {this.props.offer.isClientOffer ? 'Counter Bid' : 'Pending...'}
                        </button>
                        <button 
                            onClick={async() => await this.toggleAcceptModal()} 
                            className={this.props.offer.isClientOffer ? 'jo-button-action' : 'jo-button-pending'}
                            disabled={!this.props.offer.isClientOffer}
                        >
                            {this.props.offer.isClientOffer ? 'Accept' : 'Pending...'}
                        </button>
                    </div> : <div className="jo-card-right">{this.props.offer.createdAt}</div> }
                </div>
            </div>
        );
    }
}

export default TalentOfferCard;