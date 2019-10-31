import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import InfoBox from './InfoBox';
import OnboardBox from './OnboardBox';
import './home.css'


const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <OnboardBox />
            <InfoBox />
            <footer className="footer">
                <p> THIS IS A FOOTER </p>
            </footer>
        </div>
    )
}

export default Home;
