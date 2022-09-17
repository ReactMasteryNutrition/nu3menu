import React from 'react'
import { Box } from '@chakra-ui/react'
import HomeCard from '../components/HomeCard/HomeCard'
import Bookmark from '../components/Bookmark/Bookmark'

const Favorite = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            {/* <HomeCard/> */}
            <Bookmark/>
        </Box>
    )
}

export default Favorite;