import React from 'react';
import {Link} from 'react-router';

function TalentNavigation () {
    return(
        <div className='TalentNavigation'>
            <div className='TalentNavigationLogo'>
                <h1 className='logo'>Voicer</h1>
            </div>
            <div className='TalentNavigationLinks'>
                <Link to='/jobList'>Browse Jobs</Link>
                <Link to='/applications'>My Applications</Link>
                <Link to='/messages'>Messages</Link>
                <Link to='/profile'>My Profile</Link>
            </div>
        </div>
    )
}

export default TalentNavigation;