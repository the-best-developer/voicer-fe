import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import TalentJobOfferMessage from './TalentJobOfferMessage';
import '../../styles/tjobofferlist.scss';

class TalentOfferCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    toggle = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        return (
            <div className="job-offer-card">
                <TalentJobOfferMessage
                    toggle={this.toggle}
                    isOpen={this.state.modalIsOpen}
                    message={this.props.offer.clientMessage}
                />
                <div className="job-offer-info">
                    <div className="jo-card-left">
                        <button onClick={this.toggle}>Show Message</button>
                        <p>Bid - ${this.props.offer.price}</p>
                    </div>
                    {this.props.recent ? 
                    <div className="jo-card-right">
                        <button className={this.props.offer.isClientOffer ? 'jo-button-action' : 'jo-button-pending'}>
                            {this.props.offer.isClientOffer ? 'Counter Bid' : 'Pending...'}
                        </button>
                        <button className={this.props.offer.isClientOffer ? 'jo-button-action' : 'jo-button-pending'}>
                            {this.props.offer.isClientOffer ? 'Accept' : 'Pending...'}
                        </button>
                    </div> : <div className="jo-card-right" /> }
                </div>
            </div>
        );
    }
}

export default TalentOfferCard;