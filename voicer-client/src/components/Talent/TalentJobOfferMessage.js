import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';

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

class JOMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <StyledModal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
                size="lg"
            >
                <StyledModalHeader>Bid Message</StyledModalHeader>
                <StyledModalContent>
                    {this.props.message}
                </StyledModalContent>
            </StyledModal>
        )
    }
}

export default JOMessage