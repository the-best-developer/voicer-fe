import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';

// Styling
const StyledCard = styled(Card)`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  min-height: 100px;
`

const StyledButton = styled(Button)`
  margin: 10px;
`

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: auto;
`

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`

// Component
const JobListCard = props => {

    return (
        <StyledCard>
            <StyledCardBody>
              <StyledCardDetails>
                <CardTitle>{props.jobData.jobTitle}</CardTitle>
                <CardSubtitle>{props.jobData.clientId}</CardSubtitle>
                <CardText>{props.jobData.jobDescription}</CardText>
              </StyledCardDetails>
                <StyledButtonDiv>
                    <StyledButton>Save Job</StyledButton>
                    <StyledButton>Apply</StyledButton>
                </StyledButtonDiv>
            </StyledCardBody>
        </StyledCard>
    );
};

export default JobListCard;