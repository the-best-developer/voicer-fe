import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select, { components } from 'react-select';
import { connect } from 'react-redux';
import { getLanguages, addTalentLanguage } from '../../actions/language';
import { getAccents, addTalentAccent } from '../../actions/accent';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/talent-profile.css';

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

  //On Mount, lang/accents are pulled from back-end and added to store, then
  //modified to a format that the form fields can use and put into state
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
      const langSubmit = {
        userId: this.props.userId,
        languageId: newLang.languageId
      };
      this.props.addTalentLanguage(langSubmit);
    });
  };

  submitTalentAccents = talentAccentArray => {
    talentAccentArray.forEach(newAccent => {
      const accentSubmit = {
        userId: this.props.userId,
        accentId: newAccent.accentId
      };
      this.props.addTalentAccent(accentSubmit);
    });

  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

handleAgeChange = (voiceAge) => {
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

handleAccentChange = (accents) => {
    this.setState({ accents });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.submitTalentLanguages(this.state.languages);
    this.submitTalentAccents(this.state.accents);
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
              options={this.state.languageOptions}

            />
          </FormGroup>
          <FormGroup>
            <Label for="accentSelect">Select Accents</Label>
            <Select
              className="mt-0 mb-3 col-md-11 col-offset-4"
              onChange={this.handleAccentChange}
              components={makeAnimated()}
              isMulti
              options={this.state.accentOptions}
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

const mapStateToProps = state => ({
  userId: state.loginReducer.id,
  languageOptions: state.languageReducer.languages,
  accentOptions: state.accentReducer.accents
});

export default connect(mapStateToProps, {
  getAccents,
  getLanguages,
  addTalentAccent,
  addTalentLanguage
})(TalentProfile);
