import React from 'react';
import { connect } from 'react-redux';
import {
    getAuthoredReviews,
    getReceivedReviews
} from '../actions';
import Container from '../styles/styledComponents/Container';
import styled from 'styled-components'

const ReviewsContainer = styled(Container)`
    margin: 21vh 0;
`;

const ReviewType = styled('h3')`
    text-align: center;
    color: #FF934F;
    text-decoration: underline;
`

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getAuthoredReviews();
        getReceivedReviews();
    }

    render() {
        return (
            <ReviewsContainer>
                <ReviewType>Received Reviews</ReviewType>
                    {this.props.authoredReviews.map((review, index) => {
                        return <h1>Thing</h1>
                    })}
                <ReviewType>Authored Reviews</ReviewType>
                    {this.props.receivedReviews.map((review, index) => {
                        return <h1>Thing</h1>
                    })}
            </ReviewsContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        gettingAuthoredReviews: state.getReviewsReducer.gettingAuthoredReviews,
        gettingReceivedReviews: state.getReviewsReducer.gettingReceivedReviews,
        authoredReviews: state.getReviewsReducer.authoredReviews,
        receivedReviews: state.getReviewsReducer.receivedReviews,
        error: state.getReviewsReducer.error
    }
}

export default connect(mapStateToProps, { getAuthoredReviews, getReceivedReviews })(ReviewList);