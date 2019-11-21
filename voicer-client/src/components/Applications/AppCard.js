 import React from 'react';
 import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
 import styled from 'styled-components'

 const StyledCard = styled(Card)`
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 5vh;
  min-height: 100px;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
`

const StyledCardBody = styled(CardBody) `
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const StyledButtonDiv = styled.div`
  padding: 10px;
  margin-left: auto;
`

 const AppCard = props => {
    return(
        <StyledCard>
            <StyledCardBody>
                <CardTitle>{props.appData.talentId}</CardTitle>
                <CardSubtitle>{props.appData.clientMessage}</CardSubtitle>
                <CardText>Status: {props.appData.status}</CardText>
                <StyledButtonDiv>
                    <StyledButton>Make Offer</StyledButton>
                </StyledButtonDiv>
            </StyledCardBody>
            {console.log(props.appData)}
        </StyledCard>
    );
 }

 export default AppCard;