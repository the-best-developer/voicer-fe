import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class TalentProfile extends React.Component {
  state = {
    gender: '',
    voiceAge: '',
    languages: '',
    biography: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Profile Saved');
  };

  render() {
    return (
      <div style={{marginTop: '21vh'}} className="TalentProfile">
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
            {/* <Label for="voiceAge">Voice Age</Label> */}
            <Input
              type="select"
              name="voiceAge"
              id="ageSelect"
              onChange={this.handleChange}
            >
              <option value="">Select One</option>
              <option value="child">Child</option>
              <option value="teen">Teen</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="languageSelect">Select Languages</Label>
            <Input
              type="select"
              name="languages"
              id="languageSelect"
              onChange={this.handleChange}
              multiple
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="german">German</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="bioText">Bio (Tell us a bit about yourself)</Label>
            <Input
              type="textarea"
              name="biography"
              id="bioText"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Save Profile</Button>
        </Form>
      </div>
    );
  }
}

export default TalentProfile;
