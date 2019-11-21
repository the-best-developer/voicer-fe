import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.css';

const ageOptions = [
  { value: 'child', label: 'Child' },
  { value: 'teen', label: 'Teen' },
  { value: 'adult', label: 'Adult' },
  { value: 'senior', label: 'Senior' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'german', label: 'German' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'chinese', label: 'Chinese' }
];

const accentOptions = [
  { value: 'american', label: 'American' },
  { value: 'british', label: 'British' },
  { value: 'central american', label: 'Central American' },
  { value: 'european spanish', label: 'European Spanish' }
]


class TalentProfile extends React.Component {
  state = {
    gender: '',
    voiceAge: '',
    languages: [],
    accents: [],
    biography: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAgeChange = (voiceAge) => {
    this.setState({ voiceAge: voiceAge.value });
  };

  handleLanguageChange = (languages) => {
    this.setState({ languages });
  };

  handleAccentChange = (accents) => {
    this.setState({ accents });
  }

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
            <Label for="voiceAgeSelect">Select Voice Age</Label>
            <Select
              className="mt-4 col-md-8 col-offset-4"
              onChange={this.handleAgeChange}
              components={makeAnimated()}
              options={ageOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="languageSelect">Select Languages</Label>
            <Select 
              className="mt-4 col-md-8 col-offset-4"
              onChange={this.handleLanguageChange}
              components={makeAnimated()}
              isMulti
              options={languageOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="accentSelect">Select Accents</Label>
            <Select
              className="mt-4 col-md-8 col-offset-4"
              onChange={this.handleAccentChange}
              components={makeAnimated()}
              isMulti
              options={accentOptions}
            />
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
