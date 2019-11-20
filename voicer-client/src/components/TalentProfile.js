import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select, { components } from 'react-select';
import { connect } from 'react-redux';
import {
  getLanguages,
  getAccents,
  addTalentLanguage,
  addTalentAccent
} from '../actions/register';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.css';

const ageOptions = [
  { value: 'child', label: 'Child' },
  { value: 'teen', label: 'Teen' },
  { value: 'adult', label: 'Adult' },
  { value: 'senior', label: 'Senior' }
];

// const languageOptions = [
//     { value: 'english', label: 'English' },
//     { value: 'spanish', label: 'Spanish' },
//     { value: 'german', label: 'German' },
//     { value: 'japanese', label: 'Japanese' },
//     { value: 'chinese', label: 'Chinese' }
// ];

// const accentOptions = [
//     { value: 'american', label: 'American' },
//     { value: 'british', label: 'British' },
//     { value: 'central american', label: 'Central American' },
//     { value: 'european spanish', label: 'European Spanish' }
// ];

class TalentProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: '',
      voiceAge: '',
      languageOptions: [],
      accentOptions: [],
      languages: [],
      accents: [],
      biography: ''
    };
  }

  componentDidMount() {
    this.props.getLanguages().then(this.modifyLanguage);
    this.props.getAccents().then(this.modifyAccents);
  }

  modifyLanguage = () => {
    const newArray = this.props.languageOptions.map(item => ({
      value: item.language,
      label: item.language,
      languageId: item.languageId
    }));

    this.setState({ languageOptions: newArray });
  };

  modifyAccents = () => {
    const newArray = this.props.accentOptions.map(item => ({
      value: item.accent,
      label: item.accent,
      accentId: item.accentId
    }));
    this.setState({ accentOptions: newArray });
  };

  submitTalentLanguages = talentLangArray => {
    talentLangArray.forEach(newLang => {
      this.props.addTalentLanguage(newLang);
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAgeChange = voiceAge => {
    this.setState({ voiceAge: voiceAge.value });
  };

  handleLanguageAdd = languageId => {
    const newLang = {
      userId: this.props.userId,
      languageId: languageId
    };
  };

  handleLanguageChange = languages => {
    if (languages === null) {
      languages = [];
    } else {
      this.setState({ languages });
    }
  };

  destructureLanguages = languages => {
    const newArray = languages.map(lang => lang.value);
    console.log(newArray);
    this.setState({ languages: newArray });
  };

  handleAccentChange = accents => {
    this.setState({ accents });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.submitTalentLanguages(this.state.languages);
    // this.destructureLanguages(this.state.languages);
    console.log('Profile Saved');
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
              options={this.state.languageOptions}
            />
          </FormGroup>
          <FormGroup>
            <Label for="accentSelect">Select Accents</Label>
            <Select
              className="mt-4 col-md-8 col-offset-4"
              onChange={this.handleAccentChange}
              components={makeAnimated()}
              isMulti
              options={this.state.accentOptions}
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

const mapStateToProps = state => ({
  userId: state.loginReducer.id,
  languageOptions: state.registerReducer.languages,
  accentOptions: state.registerReducer.accents
});

export default connect(mapStateToProps, {
  getAccents,
  getLanguages,
  addTalentAccent,
  addTalentLanguage
})(TalentProfile);
// export default TalentProfile;
