import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, createClientProfile, createTalentProfile } from '../actions/register';
import { login } from '../actions/login';
import NavBar from './Home/NavBar';
import { Form, Label, Input, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

class Register extends Component {
    state = {
        creds: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            userType: '',
            gender: ''
        },
        toggleDropUserType: false,
        toggleDropGender: false,

    };

    changeHandler = e => {
        console.log(e.target.value)
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();
        let {
            firstName,
            lastName,
            email,
            password,
            username,
            userType,
            gender
        } = this.state.creds;
        userType = userType.toLowerCase();
        this.props.register({
            firstName,
            lastName,
            email,
            password,
            username,
            userType,
            gender
        })
        .then(() => {
            const creds = { username, password };
            this.props.login(creds)
            .then(() => {
                return userType === "client" ?
                this.props.createClientProfile({userId: this.props.id, companyName: username}) :
                this.props.createTalentProfile({userId: this.props.id, language: 'English'})
            })
            .then(() => userType === "client" ? this.props.history.push('/client') : this.props.history.push('/talent'))
            .catch(err => console.log(err))
        })
    }


    render() {
        return (
          <div>
            <NavBar />
            <div className="register-page">

          <div className="input-box input-box-wide">
                <h2>Register</h2>

                <Form onSubmit={this.submitHandler}>



                  <div className="input-box-cols">

                  <div>


                    <Label className="input-label" for="firstName">First name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="firstName"
                        tabindex="1"
                        value={this.state.creds.firstName}
                        onChange={this.changeHandler}
                    />




                    <Label className="input-label" for="username">Username</Label>
                    <Input
                        className="input"
                        type="text"
                        name="username"
                        tabindex="3"
                        value={this.state.creds.username}
                        onChange={this.changeHandler}
                    />

                    <Label className="input-label" for="password">Password</Label>
                    <Input
                        className="input"
                        type="password"
                        name="password"
                        tabindex="5"
                        value={this.state.creds.password}
                        onChange={this.changeHandler}
                    />


                    <Label className="input-label" for="gender">Gender</Label>
                    <div className="dropdown-div">
                        <Dropdown
                            isOpen={this.state.toggleDropGender}
                            toggle={() => this.setState({toggleDropGender: !this.state.toggleDropGender})}
                            className="dropdown"
                        >
                            <DropdownToggle caret>
                                {this.state.creds.gender ? this.state.creds.gender : 'Gender'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Gender</DropdownItem>
                                <DropdownItem name="gender" value="Male" onClick={this.changeHandler}>Male</DropdownItem>
                                <DropdownItem name="gender" value="Female" onClick={this.changeHandler}>Female</DropdownItem>
                                <DropdownItem name="gender" value="Other" onClick={this.changeHandler}>Other</DropdownItem>
                                <DropdownItem name="gender" value="Decline to say" onClick={this.changeHandler}>Decline to say</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                  </div>


                  <div>
                    <Label className="input-label" for="lastName">Last name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="lastName"
                        tabindex="2"
                        value={this.state.creds.lastName}
                        onChange={this.changeHandler}
                    />

                    <Label className="input-label" for="email">Email</Label>
                    <Input
                        className="input"
                        type="email"
                        name="email"
                        tabindex="4"
                        value={this.state.creds.email}
                        onChange={this.changeHandler}
                    />

                    <Label className="input-label" for="userType">User type</Label>
                    <div className="dropdown-div">
                        <Dropdown
                            isOpen={this.state.toggleDropUserType}
                            toggle={() => this.setState({toggleDropUserType: !this.state.toggleDropUserType})}
                            className="dropdown"
                        >
                            <DropdownToggle caret>
                                {this.state.creds.userType ? this.state.creds.userType : 'Client/Talent'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>User Type</DropdownItem>
                                <DropdownItem name="userType" value="Client" onClick={this.changeHandler}>Client</DropdownItem>
                                <DropdownItem name="userType" value="Talent" onClick={this.changeHandler}>Talent</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                  </div>

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-orange btn-centered">
                      Register
                  </Button>

                </Form>

          </div>



            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.loginReducer.id
});

export default connect(
    mapStateToProps,
    { register, login, createClientProfile, createTalentProfile }
)(Register);
