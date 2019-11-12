import React from 'react';
import NavBar from './NavBar'
import InfoBox from './InfoBox';
import Footer from '../Footer';
import OnboardBox from './OnboardBox';

const Home = () => {
    return (
        <div className='home'>

            <NavBar />
            <OnboardBox />
            <InfoBox />

            <Footer />
        </div>
    )
}

export default Home;
