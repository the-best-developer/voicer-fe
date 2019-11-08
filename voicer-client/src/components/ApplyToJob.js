import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';

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
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
            >
                <p>You are Applying to:</p>
                <ModalHeader>{this.props.job.jobTitle}</ModalHeader>
                <Form className="ApplyToJob">
                    <FormGroup>
                        <Label>Write a Message to the Client</Label>
                        <Input type="textarea"></Input>
                    </FormGroup>
                </Form>
            </Modal>
        )
    }
}

export default ApplyToJob