import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';

class TalentOfferCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <Card>
            <CardBody>
                {this.props.offer.talentId}
                {this.props.offer.clientId}
                {this.props.offer.status}
                {this.props.offer.jobId}
                {this.props.offer.clientMessage}
                {this.props.offer.createdAt}
                {this.props.offer.isClientOffer}
                {/* <CardTitle></CardTitle> */}
            </CardBody>
        </Card>
        );
    }
}

export default TalentOfferCard;