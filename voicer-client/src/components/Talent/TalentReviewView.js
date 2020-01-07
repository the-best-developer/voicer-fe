import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/styledComponents/Container';
import styled from 'styled-components'

const ReviewsContainer = styled(Container)`
    margin: 21vh 0;
`;

const ReviewType = styled('h3')`
    text-align: center;
    color: #FF934F;
    text-decoration: underline;
`

class TalentReviewView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReviewsContainer>
                <ReviewType>Received Reviews</ReviewType>
                <ReviewType>Authored Reviews</ReviewType>
            </ReviewsContainer>
        );
    }
}

export default TalentReviewView;