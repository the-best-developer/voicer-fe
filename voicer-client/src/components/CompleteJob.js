import React from 'react';
import {connect} from 'react-redux';
import {complete} from '../actions/completeJob.js';
import {withRouter} from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import styled from 'styled-components';
import '../styles/tjobofferlist.scss'

class CompleteJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            checkboxText: '',
            validated: false
        }
    }

    validate = async() => {
        let profile = this.props.talent.length > 0 ? this.props.talent[0] : this.props.client
        let name = (profile.firstName + ' ' + profile.lastName).toLowerCase()
        name === this.state.checkboxText.toLowerCase() && this.state.checkbox ? 
        await this.setState({validated: true}) : await this.setState({validated: false})
    }

    changeHandler = async event => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        if(this.state.checkbox) {
            this.validate()
        }
    }

    completeOffer = async() => {
        await this.props.complete(this.props.job.jobId)
        this.props.history.push('/talent')
    }

    render() {
        let fee = this.props.talent[0].loyaltyLevel === 1 ? 0.1 : 
            this.props.talent[0].loyaltyLevel === 2 ? 0.075 : 0.05
        return (
            <>
                {this.props.userType.toLowerCase()==="talent" ?
                <Button onClick={this.props.toggle} size="md" className="complete-job-button" color="info">Complete Job</Button> : null}
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={this.props.toggle}
                    onClosed={() => this.setState({
                        checkbox: false,
                        checkboxText: '',
                        validated: false
                    })}
                    centered={true}
                    size="lg"
                >
                    <ModalHeader>Complete Job</ModalHeader>
                    <ModalBody className="accept-modal-content">
                        <h2 className="accept-modal-header">
                            Earnings After Service Fee - ${this.props.offer ? 
                                this.props.offer.price - (this.props.offer.price * fee) : 0
                            } 
                        <br /></h2>
                        <p className="accept-modal-text">Do you wish to complete this job?</p>
                        <p className="accept-modal-text">
                            After completing the job, you'll receive the accepted offer pay
                            minus the service fee determined by your loyalty level.
                        </p>
                        <p className="accept-modal-text">
                            Your calculated fee is shown below. <br />
                            Loyalty Level - {this.props.talent[0].loyaltyLevel} <br />
                            Fee - {fee * 100}% * {this.props.offer.price} = ${this.props.offer.price * fee}

                        </p>
                        <p className="accept-modal-text">
                            Click the checkbox below, type your first and last name in the input, and click
                            'Complete' to complete the job.
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
                                    color="info"
                                    disabled={!this.state.validated}
                                    onClick={this.completeOffer}
                                >
                                    Complete
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
    talent: state.getTalentReducer.talent,
    client: state.getClientProfileReducer.clientProfile
})

export default connect(mapStateToProps, { complete })(withRouter(CompleteJob))