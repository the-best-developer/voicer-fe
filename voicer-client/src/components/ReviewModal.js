import React from 'react';
import {Form, FormGroup, Input, Label, Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { submitReview } from '../actions';
import {connect} from 'react-redux';

class ReviewModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewText: "",
            reviewRating: ""
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Call the submitReview action creator
    clickHandler = () => {
        this.props.submitReview({
            authorId: 1, //this.props.
            recipientId: 2,
            jobId: 1,
            rating: this.state.reviewRating,
            message: this.state.reviewText
        })
    }

    render() {
        return(
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
                size="lg"
            >
                <ModalHeader>Review</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Message:</Label>
                            <Input type="textarea" name="reviewText" onChange={this.changeHandler}></Input>
                            <Label>Rating:</Label>
                            <Input type="textarea" name="reviewRating" onChange={this.changeHandler}></Input>
                        </FormGroup>
                        <Button onClick={this.clickHandler}>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { submitReview } )(ReviewModal);