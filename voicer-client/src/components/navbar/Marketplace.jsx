import React from 'react'
import { Link } from "react-router-dom"

const Marketplace = ({setDropDown}) => {
  return (
    <Link
      to={`/`}
      className="menu-item"
      onClick={() => {
        setDropDown(false)
      }}
    >
      Marketplace
    </Link>
  )
}

export default Marketplace