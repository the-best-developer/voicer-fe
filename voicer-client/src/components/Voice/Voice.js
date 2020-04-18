import React, {useEffect} from 'react';
import jwt from 'jsonwebtoken';
import {useParams} from 'react-router-dom'



const Voice = () => {
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
                  <p>Logged in</p>
                </>
            ):(
                <>
                  <p>Not logged in</p>
                </>
            )
        }</>
    )
}

export default Voice;
