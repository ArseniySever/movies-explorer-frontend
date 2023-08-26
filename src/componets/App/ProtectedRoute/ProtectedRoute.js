import React from 'react';
import {Route, Navigate} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    return (
        
        props.isAuth === "auth" || !props.isAuth === "no_auth" ? <Component {...props} /> : <Navigate to='/'  /> 
    
    )
}

export default ProtectedRoute;