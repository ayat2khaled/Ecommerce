import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../Context/User.context';

function GuestRoute({children}) {
    const {token} = useContext(userContext);
    if(!token){
        return children;
    } 
    else{
        return <Navigate to="/"/>
    }
    
}

export default GuestRoute
