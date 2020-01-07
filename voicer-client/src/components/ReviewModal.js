import React from 'react';
import {Form, FormGroup, Input, Label, Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { submitReview } from '../actions';
import {connect} from 'react-redux';
import SetRating from './SetRating';
import styled from 'styled-components';

const StyledFButton = styled(Button)`
    width: 100%;
    margin: 10px 0;
`

class ReviewModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewText: "",
            reviewRating: 5
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setRateState = rating => {
        this.setState({
            reviewRating: rating
        })
    }

    // Call the submitReview action creator
    clickHandler = () => {
        console.log(this.props)
        this.props.submitReview({
            authorId: this.props.authorId,
            recipientId: this.props.recipientId,
            jobId: this.props.jobId,
            rating: this.state.reviewRating,
            message: this.state.reviewText
        })
    }

    render() {
        return(
            <Modal
                isOpen={(this.props.success) ? 0 : this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
            >
                <ModalHeader>Review</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Message:</Label>
                            <Input type="textarea" style={{ minHeight: 100 }} name="reviewText" onChange={this.changeHandler}></Input>
                            <Label>Rating:</Label>
                            <SetRating rating={this.state.reviewRating} setRating={this.setRateState} />
                        </FormGroup>
                        <StyledFButton onClick={this.clickHandler}>Submit</StyledFButton>
                    </Form>
                    {(this.props.success) && <Label>Success!!!{this.props.feedback}</Label>}
                    {(this.props.error) && <Label>Error: {this.props.error.message}</Label>}
                </ModalBody>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    feedback: state.submitReviewReducer.feedback,
    success: state.submitReviewReducer.success,
    error: state.submitReviewReducer.error,
})

export default connect(mapStateToProps, { submitReview } )(ReviewModal);