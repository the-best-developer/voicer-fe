import react, {Component} from 'react';
import {Form} from 'reactstrap';

class PostJobForm extends Component () {
    render() {
        return(
            <div className="PostJobForm">
                <h1>Post a Job</h1>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" placeholder="Enter a Title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="description" placeholder="Describe the Job"/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default PostJobForm;