import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from '../../context/DataContext'

import Hero from '../hero/Hero'

export default function Marketplace() {

  const {token} = useContext(DataContext)

  const displayName = useParams().marketplaceID
  console.log(displayName)

  return (
    <>
      {(!token && displayName === undefined) && <Hero />}
    </>
  )
}