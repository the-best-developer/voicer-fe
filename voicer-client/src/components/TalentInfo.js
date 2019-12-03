import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';

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



class TalentInfo extends React.Component {

  printTalent = talent => {

    let myTalent = this.props.talent;

    for (let [key, value] of Object.entries(myTalent)) {
      return `${key}: ${value}`;
    }

  }

  render() {
    return (
      <StyledModal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          centered={true}
          size="lg"
      >
          <StyledModalHeader>{this.props.talent.talentId}</StyledModalHeader>
          <StyledModalContent>
              Talent - {this.props.talent.toString()} <br /> <br />

      {this.printTalent(this.props.talent)}




          </StyledModalContent>
      </StyledModal>
    )
  }
}

export default TalentInfo;
