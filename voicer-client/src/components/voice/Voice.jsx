import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from '../../context/DataContext'
import axios from 'axios'
import VoiceItem from './VoiceItem'

export default function Voice() {
  
  const [nameMatchesDB, setNameMatchesDB] = useState(true)

  const {
    token,
    data, 
    setData,
    url
  } = useContext(DataContext)

  const displayName = useParams().displayName

  useEffect(()=>{
    if(displayName){
      console.log("there is a param")
      axios.get(`${url}/api/users?display_name=${displayName}`)
        .then(result => {
          setData(result.data.filter(voice => voice.display_name === displayName))
          setData(result.data)
          setNameMatchesDB(false)
        })
        .catch(err => {
          console.log(err)
        })
    }  else {   
      //console.log("there is no param")
      axios.get(`${url}/api/users`)
        .then(result => {
          setData(result.data)
          setNameMatchesDB(false)
        })
        .catch(err => {
          console.log(err)
        })
    
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <section className="voice"> 
      {
        (!nameMatchesDB && displayName !== undefined) && <article className="error">The Display Name you specified is either unavailable, or doesn't exist</article>
      }
      {
        (displayName !== undefined) && nameMatchesDB ? (
          <>
            {
              data.map(voice => (
                <VoiceItem 
                  key={voice.display_name} 
                  data={voice}
                  bio={true}
                  token={token}
                  currentDisplayName={displayName}
                />
              ))
            }
          </>
        ):(
          <> 
            {
              data.map(voice => (
                <a 
                  key={voice.display_name} 
                  href={`/voice/${voice.display_name}`}
                >
                  <VoiceItem  
                    data={voice}
                  />
                </a>
              ))
            }
          </>
        )
      }
    </section>
  )
}