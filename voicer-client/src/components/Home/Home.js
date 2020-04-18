import React, {useEffect} from 'react';
import jwt from 'jsonwebtoken';
import {useParams} from 'react-router-dom'

import OnboardBox from './OnboardBox';
import InfoBox from './InfoBox';
import TalentHomePage from '../Talent/TalentHomePage';
import ClientHomePage from '../ClientHomePage'



const Home = ({refreshAppHandler}) => {
    const job = useParams().job
    const token = jwt.decode(localStorage.getItem("token"))

    useEffect(() => {
        console.log(token)
        console.log(job)
    }, [])

    return (
        <>{
            token ? (
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
                    <OnboardBox />
                    <InfoBox />
                </>
            )
        }</>
    )
}

export default Home;
