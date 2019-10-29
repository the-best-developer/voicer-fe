import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class TalentProfile extends React.Component {
  state = {
    gender: '',
    voiceAge: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit!');
  };

  render() {
    return (
      <div className="TalentProfile">
        <h1>Talent Profile</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                />{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                />{' '}
                Female
              </Label>
            </FormGroup>
          </FormGroup>{' '}
          <FormGroup>
            <legend>Voice Age</legend>
            {/* <Label for="voiceAge"></Label> */}
            <Input
              type="select"
              name="voiceAge"
              id="ageSelect"
              onChange={this.handleChange}
            >
              <option value="child">Child</option>
              <option value="teen">Teen</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Input>
          </FormGroup>
          <Button>Post Job</Button>
        </Form>
      </div>
    );
  }
}

export default TalentProfile;
