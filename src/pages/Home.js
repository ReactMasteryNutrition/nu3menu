import * as React from 'react'
import {AuthContext} from "../components/context/authContext";
import {Navigate, useLocation} from "react-router-dom";
import {useContext} from "react";


const Home = () => {
    const { currentUser } = useContext( AuthContext )
    const location = useLocation()

    if(!currentUser) {
        //return <Navigate to="/" />
    }

    return (
        <></>
    )
}

export default Home;