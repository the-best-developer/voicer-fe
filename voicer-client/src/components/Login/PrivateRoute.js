import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render = { props => {
                if(jwt.verify(localStorage.getItem('token'), process.env.REACT_APP_SECRET)) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/" />
                }
            }}
        />
    )
}

export default PrivateRoute;