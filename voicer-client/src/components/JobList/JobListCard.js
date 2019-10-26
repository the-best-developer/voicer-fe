import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components'

// Styling
const StyledCard = styled(Card)`
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
  min-height: 200px;
`

const StyledButton = styled(Button)`
  border: 1px solid red;
  margin: 5px;
  margin-left: auto;
`

const StyledCardBody = styled(CardBody)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
`

// Component
const JobListCard = props => {

    return (
        <StyledCard>
            <StyledCardBody>
                <CardTitle>{props.jobData.jobTitle}</CardTitle>
                <CardSubtitle>{props.jobData.clientId}</CardSubtitle>
                <CardText>{props.jobData.jobDescription}</CardText>
                <StyledButton>Click me!</StyledButton>
            </StyledCardBody>
        </StyledCard>
    );
};

export default JobListCard;