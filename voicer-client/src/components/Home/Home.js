import React, {useEffect, useContext} from 'react';
import jwt from 'jsonwebtoken';
import {useParams} from 'react-router-dom'

import OnboardBox from './OnboardBox';
import InfoBox from './InfoBox';
import TalentHomePage from '../Talent/TalentHomePage';
import ClientHomePage from '../ClientHomePage'
import { UIContext } from '../../contexts/UIContext';



const Home = () => {
    const job = useParams().job
    const token = jwt.decode(localStorage.getItem("token"))
    const {homeLoginToggle} = useContext(UIContext)

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
                    {homeLoginToggle && <OnboardBox />}
                    
                    <InfoBox />
                </>
            )
        }</>
    )
}

export default Home;
