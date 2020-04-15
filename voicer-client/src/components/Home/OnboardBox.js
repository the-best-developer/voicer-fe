import React from 'react';
import { Jumbotron } from 'reactstrap';
import Login from '../Login/Login'

const OnboardBox = ({refreshAppHandler}) => {
    return (
        <section className="hero-box">
            <Jumbotron className="hero">
              <Login refreshAppHandler={refreshAppHandler} />
            </Jumbotron>
        </section>
    )
}

export default OnboardBox;
