import React, { useEffect, useState } from 'react'
import {DataContext} from '../../context/DataContext'


const JobsCard = ({token, data}) => {
    console.log(data, token)
    const [edit, setEdit] = useState(false)
    const [crud, setCrud] = useState(false)

    useEffect(() => {
        if (token && (token.user_id === data.creator_id)) {
            console.log("in business")
        }
    })


    return (
        <>
            <div>
                {data.creator_id}
            </div>
        </>
    )
}

export default JobsCard