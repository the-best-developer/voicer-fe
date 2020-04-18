import React, { useState, useContext } from 'react'
import axios from 'axios'
//import { connect } from 'react-redux';
import { Form, Input, Button, Label } from 'reactstrap'
//import { login } from '../../actions/login';
import {DataContext} from '../../contexts/DataContext'
import {UIContext} from '../../contexts/UIContext'


// class Login extends Component {



const Login = () => {

    const {
        setData, // for new data
        dbURL
    } = useContext(DataContext)

    const {
        refreshAppHandler
    } = useContext(UIContext)

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const changeHandler = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        }) 
    }
    
    const submitLoginHandler = e => {
        e.preventDefault();
        
        axios.post(`${dbURL}/api/auth/login`, login)
            .then(res => {
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => console.log(err))
            .finally(()=> {
                refreshAppHandler()
            })
    }

    return (
        <article className="onboard-card">
            <h2>Log In</h2>
            <Form onSubmit={(e) => submitLoginHandler(e)}>
                <Label className="input-label" for="username">Username</Label>
                <Input
                    className="input"
                    type="text"
                    value={login.username}
                    name="username"
                    onChange={(e) => changeHandler(e)}
                />
                <Label className="input-label" for="password">Password</Label>
                <Input
                    className="input"
                    type="password"
                    value={login.password}
                    name="password"
                    onChange={(e) => changeHandler(e)}
                />


                <Button type="submit" size="lg" className="btn-orange btn-centered">Log In</Button>
                {/* {this.props.loggingIn ?
                <p className="login-status">...Logging In...</p> : 
                this.props.success ? <p className="login-status success">Login Successful!</p> :
                this.props.error ? <p className="login-status error">Login Failed</p> : null} */}
            </Form>
        </article>
    )
}


// const mapStateToProps = state => ({
//     loggingIn: state.loginReducer.loggingIn,
//     id: state.loginReducer.id,
//     userType: state.loginReducer.userType,
//     error: state.loginReducer.error,
//     success: state.loginReducer.success
// })

// export default connect(
//     mapStateToProps,
//     { login }
// )(Login)

export default Login