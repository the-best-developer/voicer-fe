import React from 'react';
import { Jumbotron } from 'reactstrap';
import Login from '../Login/Login'

const OnboardBox = () => {
    return (
        <section className="hero-box">
            <Jumbotron className="hero">
              <Login />
            </Jumbotron>
        </section>
    )
}

export default OnboardBox;
