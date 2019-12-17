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

class JobInfo extends React.Component {
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
                <StyledModalHeader>{this.props.job.jobTitle}</StyledModalHeader>
                <StyledModalContent>
                    Company - {this.props.job.companyName} <br /> <br />
                    Job Status - {this.props.job.status} <br /> <br />
                    Client - {this.props.job.firstName + ' ' + this.props.job.lastName} <br /> <br />
                    Client Rating - {this.props.job.rating} Stars <br /> <br />
                    Client Email - {this.props.job.email} <br /> <br />
                    Job Description - {this.props.job.jobDescription} <br /> <br />
                </StyledModalContent>
            </StyledModal>
        )
    }
}

export default JobInfo