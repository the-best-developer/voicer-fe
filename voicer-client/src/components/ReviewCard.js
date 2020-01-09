import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.props.authored ? `${this.props.review.rating} stars to ${this.props.review.recipientUsername}` : `${this.props.review.rating} stars from ${this.props.review.authorUsername}`}</CardTitle>
                    <CardText>{this.props.review.message}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default ReviewCard;