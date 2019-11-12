import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';
import styled from 'styled-components';
import {apply} from '../actions/apply';
import {connect} from 'react-redux';
import jwt from 'jsonwebtoken';

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
        this.state = {
            clientMessage: ""
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickHandler = () => {
        this.props.apply({
            jobId: this.props.job.jobId,
            offeredById: jwt.decode(localStorage.getItem("token")).userId,
            offeredToId: this.props.job.clientId,
            status: "open",
            clientMessage: this.state.clientMessage
        })
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
                        <Input type="textarea" onChange={this.changeHandler} name="clientMessage"></Input>
                    </StyledFormGroup>
                    <StyledButton onClick={this.clickHandler}>Apply</StyledButton>
                    {this.props.postingApplication ? <p>... Posting Job ...</p> : null}
                    {this.props.error ? <p>Error Posting Job</p> : null}
                    {this.props.success ? <p>Congrats! You've Successfully Applied.</p> : null}
                </StyledForm>
            </StyledModal>
        )
    }
}

const mapStateToProps = state => ({
    postingApplication: state.applyReducer.postingApplication,
    error: state.applyReducer.error,
    success: state.applyReducer.success
})

export default connect(mapStateToProps, { apply })(ApplyToJob)