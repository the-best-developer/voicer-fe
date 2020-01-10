import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import UserIcon from '../images/user.svg';
import VoiceSample from './Talent/VoiceSample';

//Styling
const StyledModal = styled(Modal)`
    padding: 25px;
`

const StyledModalHeader = styled(ModalHeader)`
    width: 100% !important;
    justify-content: center !important;
    h5 {
        font-size: 2.0rem !important;
    }
`

const StyledModalContent = styled(ModalBody)`
    padding-left: 5rem !important; 
`;

const UserImg = styled.img`
  width: 100px;
  display: block;
  margin: 1rem auto;
`;


class TalentInfo extends React.Component {

  talentName = talent => `${talent.firstName} ${talent.lastName}`

  render() {
    console.log(this.props.samples)
    return (
      <StyledModal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          centered={true}
          size="lg"
      >
          <StyledModalHeader>
            <UserImg src={UserIcon} />
            {this.talentName(this.props.talent)}
          </StyledModalHeader>

          <StyledModalContent>
            <p>id: {this.props.talent.talentId}</p>
            <p>username: {this.props.talent.username}</p>
            <p>email: {this.props.talent.email}</p>
            <>
              { this.props.samples ? this.props.samples.map(sample => <VoiceSample sample={sample} /> ) : null}
            </>
          </StyledModalContent>
      </StyledModal>
    )
  }
}

export default TalentInfo;
