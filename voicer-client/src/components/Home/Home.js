import React, {useEffect} from 'react';
import jwt from 'jsonwebtoken';

import OnboardBox from './OnboardBox';
import InfoBox from './InfoBox';
import TalentHomePage from '../Talent/TalentHomePage';
import ClientHomePage from '../ClientHomePage'
import TalentNavigation from '../Talent/TalentNavigation';
import ClientNavigation from '../ClientNavigation';



const Home = ({refreshAppHandler}) => {
    const token = jwt.decode(localStorage.getItem("token"))
    useEffect(() => {
        console.log(token)
    }, [])

    return (
        <>
            {
                localStorage.getItem('token') ? (
                    <>
                    {
                        token.userType == "talent" ? (
                            <>
                                {/* <TalentNavigation /> */}
                                <TalentHomePage />
                            </>
                        ) : (
                            <>
                                {/* <ClientNavigation /> */}
                                <ClientHomePage />
                            </>
                        ) 
                    }
                    </>
                ):(
                    <>
                        <OnboardBox refreshAppHandler={refreshAppHandler} />
                        <InfoBox />
                    </>
                )
            }
        </>
    )
}

export default Home;
