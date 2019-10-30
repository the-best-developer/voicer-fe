import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/register';
import { login } from '../actions/login';
import { Form, Label, Input, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './Register.css';

class Register extends Component {
    state = {
        creds: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
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
            userType
        } = this.state.creds;
        userType = userType.toLowerCase();
        console.log(userType)
        this.props.register({
            firstName,
            lastName,
            email,
            password,
            userType
        })
        .then(() => {
            const creds = { email, password };
            this.props.login(creds)
            .then(() => localStorage.setItem('user', this.props.id))
            .then(() => this.props.history.push('/voicer'))
            .catch(err => console.log(err))
        })
    }


    render() {
        return (
            <div className="registerPage">
                <Form className="registerForm" onSubmit={this.submitHandler}>
                    <Label for="firstName">First name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="firstName"
                        value={this.state.creds.firstName}
                        placeholder="First Name"
                        onChange={this.changeHandler}
                    />
                    <Label for="lastName">Last name</Label>
                    <Input
                        className="input"
                        type="text"
                        name="lastName"
                        value={this.state.creds.lastName}
                        placeholder="Last Name"
                        onChange={this.changeHandler}
                    />
                    <Label for="email">Email</Label>
                    <Input
                        className="input"
                        type="email"
                        name="email"
                        value={this.state.creds.email}
                        placeholder="Email"
                        onChange={this.changeHandler}
                    />
                    <Label for="password">Password</Label>
                    <Input
                        className="input"
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />
                    <Label for="userType">User type</Label>
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
    // id: state.registerReducer.id
});

export default connect(
    mapStateToProps,
    { register, login }
)(Register);