import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';

class ReviewModal extends React.Component {
    constructor(props) {
        super(props)
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
                <Form>
                    <FormGroup>
                        <Input type="textarea" onChange={() => {console.log("woohooooo!!")}} name="review"></Input>
                    </FormGroup>
                    <Button onClick={() => {console.log("woho!1!1")}}>Submit</Button>
                </Form>
            </Modal>
        )
    }
}

export default ReviewModal;