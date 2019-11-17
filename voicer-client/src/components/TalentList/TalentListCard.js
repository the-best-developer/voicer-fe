import React from 'react';
import { Card, Button, CardBody } from 'reactstrap';
import styled from 'styled-components';

// Styling
const StyledCard = styled(Card)`
  width: 100%;
  margin: 15px 0;
  min-height: 200px;
  padding: 5px;
  border: 1px solid #707070 !important;
  border-radius: 10px !important;
  background-color: #EFF1F3 !important;
  box-shadow: 2px 2px 5px 4px rgba(130, 130, 130, 0.2);
`

const StyledCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 10vh;
`;

const CardName = styled.div`
  padding-right: 10px;
  font-family: 'Nunito Sans', sans-serif ;
  font-size: 1.0rem;
  font-weight: 800;
`;

const CardTitle = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 3px;
  background-color: #DBD3D8;
`

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin: 0;
    display:block; /* for use on default inline elements like span */
    overflow: hidden;
    background-color: #717F86;
`;

// const StyledButtonDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   margin-left: auto;
// `

const StyledCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  padding-left: 10px;
`

const StyledCardDetail = styled.div`
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
`;

const StyledCardDetailItem = styled.div`
  width: 100%;
  text-align: left;
`;

const StyledCardAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  width: 22.5%;
`

const StyledCardActionItem = styled.div`
  width: 100%;
  text-align: left;
`;

// Component
const TalentListCard = props => {

    const formatDate = (date) => {
      
      let newDate = new Date(date);
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let month = months[newDate.getMonth()]
      let day = newDate.getDate();
      let year = newDate.getFullYear();
      return(month.slice(0, 3) + ' ' + day + ', ' + year)
    }
    console.log(props)
    return (
        <StyledCard>
            <StyledCardBody>
              <StyledCardHeader>
                <CardTitle>{props.talentData.firstName + ' ' + props.talentData.lastName}</CardTitle>
                <CardName>{}</CardName>
                <Divider />
              </StyledCardHeader>
              <StyledCardDetails>
                <StyledCardDetail>
                  <StyledCardDetailItem>
                    <strong>Email</strong>
                  </StyledCardDetailItem>
                  <StyledCardDetailItem>
                    {props.talentData.email}
                  </StyledCardDetailItem>
                </StyledCardDetail>
                <StyledCardDetail>
                  <StyledCardDetailItem>
                    <strong>Language</strong>
                  </StyledCardDetailItem>
                  <StyledCardDetailItem>
                    English
                  </StyledCardDetailItem>
                </StyledCardDetail>
                <StyledCardDetail>
                  <StyledCardDetailItem>
                    <strong>Gender</strong>
                  </StyledCardDetailItem>
                  <StyledCardDetailItem>
                    {props.talentData.gender}
                  </StyledCardDetailItem>
                </StyledCardDetail>
                <StyledCardDetail>
                  <StyledCardDetailItem>
                    <strong>Rating</strong>
                  </StyledCardDetailItem>
                  <StyledCardDetailItem>
                  {props.talentData.rating}
                  </StyledCardDetailItem>
                </StyledCardDetail>
              </StyledCardDetails>
              <StyledCardAction>
                <StyledCardActionItem>
                    <StyledButton onClick={() => {
                      props.openModal(props.talentData);
                      props.toggle2();
                    }}>INFO</StyledButton>
                </StyledCardActionItem>
                <StyledCardActionItem>
                    <StyledButton className='btn-orange' onClick={() => {
                      props.openModal(props.talentData);
                      props.toggle();
                    }}>Apply</StyledButton>
                </StyledCardActionItem>
              </StyledCardAction>
              {/* <StyledCardHeader>
                <CardText>{props.talentData.jobDescription}</CardText>
              </StyledCardDetails>
                <StyledButtonDiv>
                    <StyledButton>Save Job</StyledButton>
                    <StyledButton onClick={() => {
                      props.openModal(props.talentData);
                      props.toggle();
                    }}>Apply</StyledButton>
                </StyledButtonDiv> */}
            </StyledCardBody>
        </StyledCard>
    );
};

export default TalentListCard;