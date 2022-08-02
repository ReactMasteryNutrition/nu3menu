import React, {useContext} from 'react'
import { Box } from '@chakra-ui/react'
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../components/context/authContext";

const Home = () => {
    const { currentUser } = useContext( AuthContext )

    if(!currentUser) {
        //return <Navigate to="/" />
    }

    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
        </Box>
    )
}

export default Home;
