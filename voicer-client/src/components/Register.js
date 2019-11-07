import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/register';
import { login } from '../actions/login';
import NavBar from './Home/NavBar';
import { Form, Label, Input, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './Register.css';

class Register extends Component {
    state = {
        creds: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            userType: ''
        },
        toggleDrop: false
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
            userType
        } = this.state.creds;
        userType = userType.toLowerCase();
        this.props.register({
            firstName,
            lastName,
            email,
            password,
            username,
            userType
        })
        .then(() => {
            const creds = { username, password };
            this.props.login(creds)
            .then(() => localStorage.setItem('userId', this.props.id))
            .then(() => this.props.history.push('/voicer'))
            .catch(err => console.log(err))
        })
    }


    render() {
        return (
            <div className="registerPage">
                <NavBar />
                <Form className="registerForm" onSubmit={this.submitHandler}>
                    <Label className="input-label" for="firstName">First name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="firstName"
                        value={this.state.creds.firstName}
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="lastName">Last name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="lastName"
                        value={this.state.creds.lastName}
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="username">Username</Label>
                    <Input
                        className="input"
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="email">Email</Label>
                    <Input
                        className="input"
                        type="email"
                        name="email"
                        value={this.state.creds.email}
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="password">Password</Label>
                    <Input
                        className="input"
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="userType">User type</Label>
                    <div className="dropdown-div">
                        <Dropdown
                            isOpen={this.state.toggleDrop}
                            toggle={() => this.setState({toggleDrop: !this.state.toggleDrop})}
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
                    <Button className="registerButton" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.registerReducer.id
});

export default connect(
    mapStateToProps,
    { register, login }
)(Register);