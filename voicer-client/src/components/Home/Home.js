import React from 'react';
import NavBar from './NavBar'
import InfoBox from './InfoBox';
import OnboardBox from './OnboardBox';

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <OnboardBox />
            <InfoBox />
        </div>
    )
}

export default Home;
