import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';
import styled from 'styled-components';
import {apply} from '../actions/apply';
import {connect} from 'react-redux';

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

class CounterOffer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clientMessage: "",
            price: this.props.job.initialPrice
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
            talentId: this.props.talent.length > 0 ? this.props.talent[0].talentId : this.props.talentId,
            clientId: this.props.job.clientId,
            isClientOffer: this.props.userType==="Client" ? true : false,
            price: this.state.price,
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
                <StyledP>You are submitting a counter offer to:</StyledP>
                <StyledModalHeader>{this.props.job.jobTitle}</StyledModalHeader>
                <StyledForm className="CounterOffer">
                    <StyledFormGroup>
                        <Label>Your Offer Price</Label>
                        <Input type="text" onChange={this.changeHandler} name="price"></Input>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <Label>Leave the Client a Message</Label>
                        <Input type="textarea" onChange={this.changeHandler} name="clientMessage"></Input>
                    </StyledFormGroup>
                    <StyledButton onClick={this.clickHandler}>Counter Offer</StyledButton>
                    {this.props.postingApplication ? <p>... Posting Counter Offer ...</p> : null}
                    {this.props.error ? <p>Error Counter Offering</p> : null}
                    {this.props.success ? <p>Congrats! You've Successfully Sent Your Offer.</p> : null}
                </StyledForm>
            </StyledModal>
        )
    }
}

const mapStateToProps = state => ({
    postingApplication: state.applyReducer.postingApplication,
    talent: state.getTalentReducer.talent,
    error: state.applyReducer.error,
    success: state.applyReducer.success
})

export default connect(mapStateToProps, { apply })(CounterOffer)