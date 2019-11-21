import React from 'react';
import { Card, Button, CardBody } from 'reactstrap';
import styled from 'styled-components';
import UserIcon from '../../images/user.svg';

// Styling
const StyledCard = styled(Card)`
  width: 48%;
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
  align-items: center;
  flex-wrap: no-wrap;
`;

const CardName = styled.div`
  padding-right: 10px;
  font-family: 'Nunito Sans', sans-serif ;
  font-size: 1.6rem;
  font-weight: 800;
`;

const UserImg = styled.img`
  width: 60px;
`;

const DetailLabel = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  color: #223843;
`

const DetailItem = styled.div`
`

const StyledButton = styled(Button)`
  width: 100%;
  margin: 3px;
  background-color: #DBD3D8;
`

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin: 1rem 0;
    display:block; /* for use on default inline elements like span */
    overflow: hidden;
    background-color: #717F86;
`;

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const StyledCardDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: .5rem 0;
`;

const StyledCardAction = styled.div`
  display: flex;
  justify-content: space-between;
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
                <CardName>
                  {props.talentData.firstName + ' ' + props.talentData.lastName}
                </CardName>
                <UserImg src={UserIcon} />
              </StyledCardHeader>

              <Divider />



              <StyledCardDetails>
                <StyledCardDetail>
                  <DetailLabel>
                    Rating
                  </DetailLabel>
                  <DetailItem>
                    {props.talentData.rating}
                  </DetailItem>
                </StyledCardDetail>

                <StyledCardDetail>
                  <DetailLabel>
                    Language
                  </DetailLabel>
                  <DetailItem>
                    English *
                  </DetailItem>
                </StyledCardDetail>

                <StyledCardDetail>
                  <DetailLabel>
                    Gender
                  </DetailLabel>
                  <DetailItem>
                    {props.talentData.gender}
                  </DetailItem>
                </StyledCardDetail>

                <StyledCardDetail>
                  <DetailLabel>
                    Email
                  </DetailLabel>
                  <DetailItem>
                    {props.talentData.email}
                  </DetailItem>
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
                    }}>Invite</StyledButton>
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
