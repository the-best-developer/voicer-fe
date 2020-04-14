import React, { Component, useContext } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Label } from 'reactstrap';
import { login } from '../../actions/login';


class Login extends Component {

    state = {
        creds: {
            username: '',
            password: ''
        },
        error: false
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
    
        const { username, password } = this.state.creds
    
        this.props.login({
            username: username,
            password: password
        })
        .then(() => {
            if (localStorage.getItem('token')) {
                // return this.props.userType === "client" ?
                    // this.props.history.push('/client') :
                    // this.props.history.push('/talent')
            } else {
                this.setState({ error: true });
            }
        })
        .catch(err => console.log(err))
        .finally(()=> {
            window.location.reload()

        })
    }

    render() {
        const { username, password } = this.state.creds;

        return (
                  <article className="2onboard-card">
                        <h2>Log In</h2>
                        <Form onSubmit={this.submitHandler}>
                            <Label className="input-label" for="username">Username</Label>
                            <Input
                                className="input"
                                type="text"
                                value={username}
                                name="username"
                                onChange={this.changeHandler}
                            />
                            <Label className="input-label" for="password">Password</Label>
                            <Input
                                className="input"
                                type="password"
                                value={password}
                                name="password"
                                onChange={this.changeHandler}
                            />


                          <Button type="submit" size="lg" className="btn-orange btn-centered">Log In</Button>
                          {this.props.loggingIn ?
                            <p className="login-status">...Logging In...</p> : 
                            this.props.success ? <p className="login-status success">Login Successful!</p> :
                            this.props.error ? <p className="login-status error">Login Failed</p> : null}
                        </Form>
                  </article>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loginReducer.loggingIn,
    id: state.loginReducer.id,
    userType: state.loginReducer.userType,
    error: state.loginReducer.error,
    success: state.loginReducer.success
})

export default connect(
    mapStateToProps,
    { login }
)(Login)
