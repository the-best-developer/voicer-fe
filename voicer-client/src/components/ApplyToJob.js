import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';

class ApplyToJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    onChange = () => {

    }

    onSubmit = () => {

    }

    toggle = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        return(
            <Modal
                isOpen={this.state.isOpen}
                toggle={toggle}
                centered={true}
            >
                <ModalHeader>{this.props.jobTitle}</ModalHeader>
                <Form className="ApplyToJob">
                    <FormGroup>
                        <Label></Label>
                        <Input></Input>
                    </FormGroup>
                </Form>
            </Modal>
        )
    }
}

export default ApplyToJob