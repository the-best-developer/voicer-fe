import React from 'react';
import { Jumbotron } from 'reactstrap';
import OnboardCard from './OnboardCard';

const OnboardBox = () => {
    return (
        <div className="hero-box">
            <Jumbotron className="hero">
              <OnboardCard />
            </Jumbotron>
        </div>
    )
}

export default OnboardBox;
