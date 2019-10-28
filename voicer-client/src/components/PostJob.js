import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {postJob} from '../actions';
import { connect } from 'react-redux';

class PostJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobDescription: "",
            clientId: localStorage.getItem("token")
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.postJob({
            jobTitle: this.state.jobTitle,
            jobDescription: this.state.jobDescription
        })
    }

    render() {
        return(
            <div className="PostJob">
                <h1>Post a Job</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" placeholder="Enter a Title" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="description" placeholder="Describe the Job" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button>Post Job</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { postJob }
)(PostJob);