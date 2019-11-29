import React from 'react';
import {connect} from 'react-redux';
import {decline} from '../../actions/acceptDecline';
import {withRouter} from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import styled from 'styled-components';
import '../../styles/tjobofferlist.scss'

class DeclineJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            checkboxText: '',
            validated: false
        }
    }

    validate = async() => {
        let name = this.props.talent[0].firstName + ' ' + this.props.talent[0].lastName
        name === this.state.checkboxText ? await this.setState({validated: true}) : await this.setState({validated: false})
    }

    changeHandler = async event => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        if(this.state.checkbox) {
            this.validate()
        }
    }

    declineOffer = async() => {
        await this.props.decline(this.props.job, this.props.offer)
        this.props.history.push('/talent')
    }

    render() {
        return (
            <>
                <Button onClick={this.props.toggle} size="md" className="decline-job-button" color="danger">Decline Job</Button>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={this.props.toggle}
                    centered={true}
                    size="lg"
                >
                    <ModalHeader>Decline Job</ModalHeader>
                    <ModalBody className="accept-modal-content">
                        <h2 className="accept-modal-header">
                            Current Offer Amount - ${this.props.offer ? this.props.offer.price : 0} 
                        <br /></h2>
                        <p className="accept-modal-text">Do you wish to decline this job?</p>
                        <p className="accept-modal-text">
                            By declining this job, you won't be able to make any more
                            bids/offers on this job. The job will also be placed at the
                            bottom of your application history. This is a permanent action.
                        </p>
                        <p className="accept-modal-text">
                            Click the checkbox below, type your first and last name in the input, and click
                            Decline to decline the job.
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
                                    color="danger"
                                    disabled={!this.state.validated}
                                    onClick={this.declineOffer}
                                >
                                    Decline
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent
})

export default connect(mapStateToProps, { decline })(withRouter(DeclineJob))