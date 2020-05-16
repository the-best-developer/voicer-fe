import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as WhiteLogo } from "../../images/logo-white.svg"

const Logo = () => {
	return (
		<Link to="/">
			<WhiteLogo className="logo" />
		</Link>
	)
}

export default Logo
