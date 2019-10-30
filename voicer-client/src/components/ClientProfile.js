import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, FormGroup, Label, Input } from 'reactstrap';

const ClientProfile = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle><h1>Profile</h1></CardTitle>
                        </CardBody>
                        <CardBody>
                            <CardText>{props.user.email}</CardText>
                        </CardBody>
                        <CardBody>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input disabled id="username" value={props.user.username || ''} />
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
        user: {
            username: 'default',
            email: 'ex@am.ple'
        }
    };
}

export default connect(mapStateToProps)(ClientProfile);