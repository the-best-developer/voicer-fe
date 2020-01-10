import React from 'react';

import 
{
    ReviewContainer,
    ReviewRating,
    ReviewMessage
} 
from '../styles/styledComponents/ReviewCard';

class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReviewContainer>
                <ReviewRating>
                    {this.props.authored ? `${this.props.review.rating} stars to ${this.props.review.recipientUsername}` : `${this.props.review.rating} stars from ${this.props.review.authorUsername}`}
                </ReviewRating>
                <ReviewMessage>
                    {this.props.review.message}
                </ReviewMessage>
            </ReviewContainer>
        );
    }
}

export default ReviewCard;