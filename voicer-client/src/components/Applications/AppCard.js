 import React from 'react';
 import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
 import styled from 'styled-components'

 const StyledCard = styled(Card)`
  width: 90%;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
  min-height: 100px;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
`

const StyledCardBody = styled(CardBody) `
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const StyledButtonDiv = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin-left: auto;
`

 const AppCard = props => {
    return(
        <StyledCard>
            {/* <StyledCardBody>
                <CardTitle>{props.appData.jobTitle}</CardTitle>
                <CardSubtitle>{props.appData.clientId}</CardSubtitle>
                <CardText>{props.appData.jobDescription}</CardText>
                <StyledButtonDiv>
                    <StyledButton>Make Offer</StyledButton>
                </StyledButtonDiv>
            </StyledCardBody> */}
            {console.log(props.appData)}
        </StyledCard>
    );
 }

 export default AppCard;