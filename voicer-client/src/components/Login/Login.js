import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Label } from 'reactstrap';
import { login } from '../../actions/login';
import './Login.css';

class Login extends Component {
    state = {
        creds: {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        }); 
    }
    
    submitHandler = e => {
        e.preventDefault();
    
        const { email, password } = this.state.creds
    
        this.props.login({
            email: email,
            password: password
        })
        .then(() => this.props.history.push('/voicer'))
        .catch(err => console.log(err))
    }

    render() {
        const { email, password } = this.state.creds;

        return (
            <div className="loginPage">
                <Form className="loginForm" onSubmit={this.submitHandler}>
                    <Label for="username">Username</Label>
                    <Input
                        className="input"
                        type="text"
                        value={email}
                        placeholder="Username"
                        name="username"
                        onChange={this.changeHandler}
                    />
                    <Label for="email">Password</Label>
                    <Input
                        className="input"
                        type="text"
                        value={password}
                        placeholder="Password"
                        name="password"
                        onChange={this.changeHandler}
                    />
                    <Button className="loginButton" type="submit">Log In</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loginReducer.logginIn,
    id: state.loginReducer.id
})

export default connect(
    mapStateToProps,
    { login }
)(Login)
