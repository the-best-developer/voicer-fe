import React from 'react';
import {connect} from 'react-redux';
import {accept} from '../actions/acceptDecline';
import {withRouter} from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import '../styles/tjobofferlist.scss'

class AcceptOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            checkboxText: '',
            validated: false
        }
    }

    validate = async() => {
        let name = 
        this.props.talent.length > 0 ?
        this.props.talent[0].firstName + ' ' + this.props.talent[0].lastName :
        this.props.clientName
        name.toLowerCase() === this.state.checkboxText.toLowerCase() ? await this.setState({validated: true}) : await this.setState({validated: false})
    }

    changeHandler = async event => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        if(this.state.checkbox) {
            this.validate()
        }
    }

    acceptOffer = async() => {
        await this.props.accept(this.props.job, this.props.offer)
        this.props.userType==="Talent" ? this.props.history.push('/talent') : this.props.toggle()
        
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                centered={true}
                size="lg"
            >
                <ModalHeader>Accept Offer</ModalHeader>
                <ModalBody className="accept-modal-content">
                    <h2 className="accept-modal-header">Offer Amount - ${this.props.offer.price} <br /></h2>
                    <p className="accept-modal-text">Do you wish to accept this offer?</p>
                    <p className="accept-modal-text">
                        By accepting this offer, you agree to perform the services agreed upon
                        for the offered price. A feature will be added soon for cancelling jobs that
                        have been accepted if you need to abandon the job.
                    </p>
                    <p className="accept-modal-text">
                        Click the checkbox below, type your first and last name in the input, and click
                        Accept to accept the current job for the displayed price.
                    </p>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <Input
                                    addon type="checkbox" 
                                    aria-label="Checkbox for following text input"
                                    onClick={async() => await this.setState({checkbox: !this.state.checkbox})}
                                />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input name="checkboxText"
                            placeholder="Type your first and last name here"
                            onChange={this.changeHandler} 
                            value={this.state.checkboxText}
                        />
                        <InputGroupAddon addonType="append">
                            <Button
                                color="success"
                                disabled={!this.state.validated}
                                onClick={this.acceptOffer}
                            >
                                Accept
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </ModalBody>
            </Modal>
        )
    }

}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent
})

export default connect(mapStateToProps, { accept })(withRouter(AcceptOffer))