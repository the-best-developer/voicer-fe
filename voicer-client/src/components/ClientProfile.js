import React from 'react';
import { connect } from 'react-redux';
import { getClientProfile } from '../actions';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, FormGroup, Label, Input } from 'reactstrap';
import './ClientProfile.scss';

class ClientProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getClientProfile(this.props.id);
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
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input disabled id="username" value={this.props.clientProfile ? this.props.clientProfile.username : 'You are not signed in.'} />
                                    <Label for="first_name">First Name</Label>
                                    <Input disabled id="first_name" value={this.props.clientProfile ? this.props.clientProfile.firstName : 'You are not signed in.'} />
                                    <Label for="last_name">Last Name</Label>
                                    <Input disabled id="last_name" value={this.props.clientProfile ? this.props.clientProfile.lastName : 'You are not signed in.'} />
                                    <Label for="company_name">Company Name</Label>
                                    <Input disabled id="company_name" value={this.props.clientProfile ? this.props.clientProfile.companyName : 'You are not signed in.'} />
                                </FormGroup>
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
        clientProfile: state.clientProfileReducer.clientProfile,
        gettingClientProfile: state.clientProfileReducer.gettingClientProfile,
        error: state.clientProfileReducer.error,
        id: state.loginReducer.id
    };
}

export default connect(mapStateToProps, { getClientProfile })(ClientProfile);