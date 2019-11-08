import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';
import styled from 'styled-components';

//Styling
const StyledModal = styled(Modal)`
    padding: 25px;
    width: 50%;
`

const StyledModalHeader = styled(ModalHeader)`
    margin: 25px;
`

const StyledP = styled.p`
    margin: 25px;
`

const StyledForm = styled(Form)`
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledButton = styled(Button)`
    width: 50%;
    margin: 0 auto;
`
const StyledFormGroup = styled(FormGroup)`
    width: 100%;
`

class ApplyToJob extends React.Component {
    constructor(props) {
        super(props)
    }

    onChange = () => {

    }

    onSubmit = () => {

    }

    render() {
        return(
            <StyledModal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
                size="lg"
            >
                <StyledP>You are Applying to:</StyledP>
                <StyledModalHeader>{this.props.job.jobTitle}</StyledModalHeader>
                <StyledForm className="ApplyToJob">
                    <StyledFormGroup>
                        <Label>Leave the Client a Message</Label>
                        <Input type="textarea"></Input>
                    </StyledFormGroup>
                    <StyledButton>Apply</StyledButton>
                </StyledForm>
            </StyledModal>
        )
    }
}

export default ApplyToJob