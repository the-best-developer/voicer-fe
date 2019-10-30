import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClientProfile } from '../actions';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, FormGroup, Label, Input } from 'reactstrap';

const ClientProfile = (props) => {
    useEffect(() => {
        props.getClientProfile();
    }, []);
    
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle><h1>Profile</h1></CardTitle>
                        </CardBody>
                        <CardBody>
                            <CardText>{props.clientProfile.email}</CardText>
                        </CardBody>
                        <CardBody>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input disabled id="username" value={props.clientProfile.username || ''} />
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        clientProfile: state.clientProfileReducer.clientProfile,
        gettingClientProfile: state.clientProfileReducer.gettingClientProfile,
        error: state.clientProfileReducer.error
    };
}

export default connect(mapStateToProps, { getClientProfile })(ClientProfile);