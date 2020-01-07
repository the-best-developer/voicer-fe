import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {postJob} from '../actions';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import axiosWithAuth from './axiosAuth';
import Container from '../styles/styledComponents/Container';
import styled from 'styled-components';
import { dbUrl } from '../actions';

const PostJobContainer = styled(Container)`
    min-height: 48vh;
    margin: 50px auto;
    margin-top: 23vh;
    width: 600px;
    h1 {
        text-align: center;
    }
    Form {
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    Button {
        margin-top: 20px;
    }
`

class PostJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobDescription: "",
            userId: jwt.decode(localStorage.getItem("token")).userId,
            price: 0
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault()
        const client = await axiosWithAuth().get(`${dbUrl}/api/clients/${this.state.userId}`)
        this.props.postJob({
            jobTitle: this.state.jobTitle,
            jobDescription: this.state.jobDescription,
            clientId: client.data[0].clientId,
            initialPrice: this.state.price
        }, this.props.history)
    }

    render() {
        return(
            <PostJobContainer>
                <h1>Post a Job</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="jobTitle" placeholder="Enter a Title" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="jobDescription" placeholder="Describe the Job" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Price</Label>
                        <Input type="decimal" name="price" placeholder="Price" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button>Post Job</Button>
                </Form>
            </PostJobContainer>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { postJob }
)(PostJob);