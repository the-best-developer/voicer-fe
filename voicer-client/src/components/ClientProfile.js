import React from 'react';
import { connect } from 'react-redux';
import { getClientProfile, editClientProfile } from '../actions';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import './ClientProfile.scss';
import goldMic from '../images/Gold-Mic.png';
import silverMic from '../images/Silver-Mic.png';
import bronzeMic from '../images/Bronze-Mic.png';

class ClientProfile extends React.Component {
    state = {
        editing: false
    }

    componentDidMount() {
        this.props.getClientProfile(this.props.id);
    }

    edit = () => {
        this.setState(prevState => ({
            editing: !prevState.editing
        }));
    }

    editProfile = event => {
        event.preventDefault();
        let elements = event.target.elements;
        let changes = {
            username: elements['username'].value,
            firstName: elements['first_name'].value,
            lastName: elements['last_name'].value,
            companyName: elements['company_name'].value
        }
        this.props.editClientProfile(changes);
        this.setState({ editing: false });
        console.log(changes);
    }

    loyaltyLevel = level => {
        if(level === 1) {
            return <img className="loyaltyBadge" src={bronzeMic} alt="bronze-mic" />
        } else if (level === 2) {
            return <img className="loyaltyBadge" src={silverMic} alt="silver-mic" />
        } else if (level ===3) {
            return <img className="loyaltyBadge" src={goldMic} alt="gold-mic" />
        }
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle><h1>Profile</h1></CardTitle>
                            </CardBody>
                            <CardBody>
                                <CardText>{this.props.clientProfile ? this.props.clientProfile.email : 'You are not signed in.'}</CardText>
                            </CardBody>
                            <CardBody>
                                {this.loyaltyLevel(this.props.clientProfile.loyaltyLevel)}
                            </CardBody>
                            <CardBody>
                                <Form onSubmit={this.editProfile}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input disabled={!this.state.editing} id="username" defaultValue={this.props.clientProfile ? this.props.clientProfile.username : 'You are not signed in.'} />
                                        <Label for="first_name">First Name</Label>
                                        <Input disabled={!this.state.editing} id="first_name" defaultValue={this.props.clientProfile ? this.props.clientProfile.firstName : 'You are not signed in.'} />
                                        <Label for="last_name">Last Name</Label>
                                        <Input disabled={!this.state.editing} id="last_name" defaultValue={this.props.clientProfile ? this.props.clientProfile.lastName : 'You are not signed in.'} />
                                        <Label for="company_name">Company Name</Label>
                                        <Input disabled={!this.state.editing} id="company_name" defaultValue={this.props.clientProfile ? this.props.clientProfile.companyName : 'You are not signed in.'} />
                                        {this.state.editing ? <Input id='submit-button' type="submit" value={'Submit Changes'}/> : null}
                                    </FormGroup>
                                </Form>
                                <Button onClick={this.edit}>Edit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        clientProfile: state.getClientProfileReducer.clientProfile,
        gettingClientProfile: state.getClientProfileReducer.gettingClientProfile,
        error: state.getClientProfileReducer.error,
        id: state.loginReducer.id
    };
}

export default connect(mapStateToProps, { getClientProfile, editClientProfile })(ClientProfile);