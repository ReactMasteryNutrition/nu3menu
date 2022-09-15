import React from 'react'
import { Box } from '@chakra-ui/react'
import { CardMenu } from '../components/Card/CardMenu';

const Home = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <CardMenu/>
        </Box>
    )
}

export default Home;
