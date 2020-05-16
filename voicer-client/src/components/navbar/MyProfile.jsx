import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { DataContext } from "../../context/DataContext"



const MyProfile = ({setDropDown}) => {
  const { token } = useContext(DataContext)

  return(
    <Link
      to={`/voice/${token.display_name}`}
      className="menu-item"
      onClick={() => {
        setDropDown(false)
      }}
    >
      My Profile
    </Link>
  )
}

export default MyProfile