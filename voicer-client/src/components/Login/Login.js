import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
//import { connect } from 'react-redux';
import { 
    Form, 
    Input, 
    Button, 
    Label,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu 
} from 'reactstrap'
//import { login } from '../../actions/login';
import {DataContext} from '../../contexts/DataContext'
import {UIContext} from '../../contexts/UIContext'


// class Login extends Component {



const Login = () => {

    const [loginToggle, setLoginToggle] = useState("login")
    const [loggingIn, setLoggingIn] = useState(null)
    const [toggleDropGender, setToggleDropGender] = useState(false)
    const [toggleDropUserType, setToggleDropUserType] = useState(false)

    useEffect(()=> {
        console.log(loginToggle)
    }, [loginToggle])

    const {
        setData, // for new data
        dbURL
    } = useContext(DataContext)

    const {
        refreshAppHandler
    } = useContext(UIContext)

    const [login, setLogin] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        userType: '',
        gender: ''
    })

    const changeHandler = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        }) 
    }
    
    const submitLoginHandler = e => {
        e.preventDefault();
        setLoggingIn("start")        
        axios.post(`${dbURL}/api/auth/${loginToggle}`, login)
            .then(res => {
                setLoggingIn("success")
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {
                setLoggingIn("failure")
                console.log(err)
            })
            .finally(()=> {
                setLoggingIn(null)
                refreshAppHandler()
            })
    }

    const loginToggleHandler = () => {
        loginToggle === "login" ? setLoginToggle("register") : setLoginToggle("login")
    }

    const toggleDropGenderHandler = () => {
        setToggleDropGender(!toggleDropGender)
    }
    const toggleDropUserTypeHandler = () => {
        setToggleDropUserType(!toggleDropUserType)
    }

    return (
        <article className="onboard-card">
            <div>
                <Button type="toggle" onClick={(e) => loginToggleHandler(e)}>
                    {
                        loginToggle === "login" ? (
                            <>Click to Register</>
                        ):(
                            <>Click to Login</>
                        )
                    }
                </Button>
            </div>
            {
                loginToggle === "login" ? (
                    <h2>Log In</h2>
                ):(
                    <h2>Register</h2>
                )
            }
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

                {
                    loginToggle === "register" && (
                        <>
                        <Label className="input-label" for="firstName">
                            First name
                        </Label>
                        <Input
                            className="input"
                            type="text"
                            name="firstName"
                            tabindex="1"
                            value={login.firstName}
                            onChange={(e) => changeHandler(e)}
                        />

                        <Label className="input-label" for="lastName">
                            Last name
                        </Label>
                        <Input
                            className="input"
                            type="text"
                            name="lastName"
                            tabindex="2"
                            value={login.lastName}
                            onChange={(e) => changeHandler(e)}
                        />
                        <Label className="input-label" for="email">
                            Email
                        </Label>
                        <Input
                            className="input"
                            type="email"
                            name="email"
                            tabindex="4"
                            value={login.email}
                            onChange={(e) => changeHandler(e)}
                        />

                        <Label className="input-label" for="gender">
                            Gender
                        </Label>
                        <div className="dropdown-div">
                            <Dropdown
                            isOpen={toggleDropGender}
                            toggle={() => toggleDropGenderHandler()}
                            className="dropdown"
                            >
                            <DropdownToggle caret>
                                {login.gender
                                ? login.gender
                                : 'Gender'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Gender</DropdownItem>
                                <DropdownItem
                                name="gender"
                                value="Male"
                                onClick={(e) => changeHandler(e)}
                                >
                                Male
                                </DropdownItem>
                                <DropdownItem
                                name="gender"
                                value="Female"
                                onClick={(e) => changeHandler(e)}
                                >
                                Female
                                </DropdownItem>
                                <DropdownItem
                                name="gender"
                                value="Other"
                                onClick={(e) => changeHandler(e)}
                                >
                                Other
                                </DropdownItem>
                                <DropdownItem
                                name="gender"
                                value="Decline to say"
                                onClick={(e) => changeHandler(e)}
                                >
                                Decline to say
                                </DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </div>
                        <Label className="input-label" for="userType">
                            User type
                        </Label>
                        <div className="dropdown-div">
                            <Dropdown
                            isOpen={toggleDropUserType}
                            toggle={() => toggleDropUserTypeHandler()}
                            className="dropdown"
                            >
                            <DropdownToggle caret>
                                {login.userType
                                ? login.userType
                                : 'Client/Talent'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>User Type</DropdownItem>
                                <DropdownItem
                                name="userType"
                                value="Client"
                                onClick={(e) => changeHandler(e)}
                                >
                                Client
                                </DropdownItem>
                                <DropdownItem
                                name="userType"
                                value="Talent"
                                onClick={(e) => changeHandler(e)}
                                >
                                Talent
                                </DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </div>
                        </>
                    )
                }

                <Button type="submit" size="lg" className="btn-orange btn-centered">Log In</Button>
                
                {
                    loggingIn === "start" ? (
                        <p className="login-status">...Logging In...</p>
                    ) : (
                        <>{
                            loggingIn === "success" ? (
                                <p className="login-status success">Login Successful!</p>
                            ) :
                            (
                                <>{
                                    loggingIn === "failure" && <p className="login-status error">Login Failed</p>
                                }</>
                            )
                        }</>
                    )
                }
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