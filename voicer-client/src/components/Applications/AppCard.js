import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getTalentByTalentId} from '../../actions/getTalent';
import AcceptOffer from '../AcceptOffer';
import DeclineJob from '../DeclineJob';
import CounterOffer from '../CounterOffer';
import ReviewModal from '../ReviewModal';
import axiosWithAuth from '../axiosAuth';

 const StyledCard = styled.div`
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 5vh;
  min-height: 100px;
  border: 1px solid grey;
  border-radius: 5px;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
  width: 100%;
`

const StyledOfferButton = styled(Button)`
  margin: 0 10px;
  width: 100%;
  background-color: #FF934F !important;
  border: 0 !important;
`

const StyledCardBody = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`

const StyledButtonDiv = styled.div`
  padding: 10px;
  margin-left: auto;
  width: 100%;
`

const StyledButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
`

const StyledCardContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 80%;
  margin: 10px 0;
`;

const StyledCardColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StyledCardTitle = styled(CardText)`
  color: #FF934F;
`;

const StyledCardSubtitle = styled(CardText)`
`;

const StyledCardText = styled(CardText)`
  text-align: center !important;
`;

class AppCard extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        talentData: {},
        counterModalIsOpen: false,
        declineModalIsOpen: false,
        acceptModalIsOpen: false,
        reviewModalIsOpen: false
      }
    }

    async componentDidMount() {
      const talentData = await this.props.getTalentByTalentId(this.props.appData.talentId)
      this.setState({talentData: talentData[0]})
    }

    toggleDeclineModal = () => {
      this.setState({
          declineModalIsOpen: !this.state.declineModalIsOpen
      })
    }

    toggleCounterModal = () => {
      this.setState({
          counterModalIsOpen: !this.state.counterModalIsOpen
      })
    }

    toggleAcceptModal = () => {
      this.setState({
          acceptModalIsOpen: !this.state.acceptModalIsOpen
      })
    }

    toggleReviewModal = () => {
      this.setState({
          reviewModalIsOpen: !this.state.reviewModalIsOpen
      })
    }

    render() {
      return(
        <StyledCard>
            <CounterOffer
              toggle={this.toggleCounterModal}
              isOpen={this.state.counterModalIsOpen}
              job={this.props.job}
              talentId={this.props.appData.talentId}
              userType="Client"
            />
            <AcceptOffer
              toggle={this.toggleAcceptModal}
              isOpen={this.state.acceptModalIsOpen}
              offer={this.props.appData}
              clientName={this.props.clientName}
              job={this.props.job}
            />
            <DeclineJob 
              toggle={this.toggleDeclineModal}
              isOpen={this.state.declineModalIsOpen}
              offer={this.props.appData}
              clientName={this.props.clientName}
              job={this.props.job}
              userType='Client'
            />
            <ReviewModal 
              toggle={this.toggleReviewModal}
              isOpen={this.state.reviewModalIsOpen}
              authorId= {this.props.appData.clientId}
              recipientId= {this.props.appData.talentId}
              jobId= {this.props.appData.jobId}
              userType='Client'
            />
            <StyledCardBody>
                <StyledCardColumn>
                  <StyledCardContent>
                    <StyledCardTitle>{this.state.talentData.firstName + ' ' + this.state.talentData.lastName}</StyledCardTitle>
                    <StyledCardSubtitle>Price - ${this.props.appData.price}</StyledCardSubtitle>
                    <StyledCardText>Status - {this.props.appData.status}</StyledCardText>
                  </StyledCardContent>
                  <StyledCardContent>
                    <StyledCardText>Message - {this.props.appData.clientMessage}</StyledCardText>
                  </StyledCardContent>
                </StyledCardColumn>
                {this.props.appData.status.toLowerCase() !== "open" ?
                <StyledButtonsDiv>
                  <StyledCardText>
                    {this.props.appData.status.toLowerCase()==="accepted" ?
                    "Job Offer Accepted!" :
                      null
                    }
                    {this.props.appData.status.toLowerCase()==="completed" ?
                    <StyledButtonsDiv>
                      <StyledButtonDiv>
                          <StyledButton
                            onClick={this.toggleReviewModal}
                          >
                            Review
                          </StyledButton>
                      </StyledButtonDiv>
                    </StyledButtonsDiv>
                    :
                      null
                    }
                    {this.props.appData.status.toLowerCase()==="declined" ?
                      "Job was declined." :
                      null
                    }
                  </StyledCardText>
                </StyledButtonsDiv>
                :
                !this.props.appData.isClientOffer && this.props.recent ?
                <StyledButtonsDiv>
                  <StyledButtonDiv>
                      <StyledButton
                        onClick={this.toggleAcceptModal}
                      >
                        Accept
                      </StyledButton>
                  </StyledButtonDiv>
                  <StyledButtonDiv>
                      <StyledButton
                        onClick={this.toggleDeclineModal}
                      >
                        Reject
                      </StyledButton>
                  </StyledButtonDiv>
                  <StyledButtonDiv>
                      <StyledOfferButton
                        onClick={this.toggleCounterModal}
                      >
                        Make Offer
                      </StyledOfferButton>
                  </StyledButtonDiv>
                </StyledButtonsDiv>
                :
                <StyledButtonsDiv>
                  <StyledCardText>{this.props.recent ? "Pending" : "Previous Offer"}</StyledCardText>
                </StyledButtonsDiv>
                }
            </StyledCardBody>
        </StyledCard>
      );
    }  
 }

 export default connect(null, {getTalentByTalentId})(AppCard);