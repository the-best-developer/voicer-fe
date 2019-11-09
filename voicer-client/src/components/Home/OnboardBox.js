import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap'
// import './onboardBox.css'

const OnboardBox = () => {
    return (
        <div className="hero-box">
            <Jumbotron className="hero">
                <h1 className="display-3 header">Get Started!</h1>
                <div className="choice">
                    <Link className="buttons lead" to="/register">REGISTER</Link>
                    <Link className="buttons lead" to="/login">LOGIN</Link>
                </div>
            </Jumbotron>
        </div>
    )
}

export default OnboardBox;
