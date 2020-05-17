import React from 'react'
import { Link } from "react-router-dom"


const AllUsers = ({setDropDown}) => {
  return (
    <Link
      to={`/voice`}
      className="menu-item"
      onClick={() => {
        setDropDown(false)
      }}
    >
      All Users
    </Link>
  )
}

export default AllUsers