import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/talent-profile.css';


const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];

const ageOptions = [
  { value: 'child', label: 'Child' },
  { value: 'teen', label: 'Teen' },
  { value: 'adult', label: 'Adult' },
  { value: 'senior', label: 'Senior' }
];

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
];


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

  handleGenderChange = (gender) => {
    this.setState({ gender: gender.value });
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
        <h1 className="title">TALENT PROFILE</h1>
        <Form onSubmit={this.handleSubmit} className="ProfileForm">
          <FormGroup tag="fieldset">
            <Label for="genderSelect">Select Voice Gender</Label>
            <Select
              className="mt-0 mb-3 col-md-11 col-offset-4"
              onChange={this.handleGenderChange}
              components={makeAnimated()}
              options={genderOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="voiceAgeSelect">Select Voice Age</Label>
            <Select
              className="mt-0 mb-3 col-md-11 col-offset-4"
              onChange={this.handleAgeChange}
              components={makeAnimated()}
              options={ageOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="languageSelect">Select Languages</Label>
            <Select 
              className="mt-0 mb-3 col-md-11 col-offset-4"
              onChange={this.handleLanguageChange}
              components={makeAnimated()}
              isMulti
              options={languageOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="accentSelect">Select Accents</Label>
            <Select
              className="mt-0 mb-3 col-md-11 col-offset-4"
              onChange={this.handleAccentChange}
              components={makeAnimated()}
              isMulti
              options={accentOptions}
            />
          </FormGroup>
          <FormGroup className="bioForm">
            <Label for="bioText">Bio (Tell us a bit about yourself)</Label>
            <Input
              className="mt-0 mb-3 ml-3 col-md-11 col-offset-4"
              type="textarea"
              name="biography"
              id="bioText"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button outline size="lg" className="saveButton">Save Profile</Button>
        </Form>
      </div>
    );
  }
}

export default TalentProfile;
