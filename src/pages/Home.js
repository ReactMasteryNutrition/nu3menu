import { Box } from '@chakra-ui/react'
import HomeCard from '../components/HomeCard/HomeCard';

const Home = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <HomeCard/>
        </Box>
    )
}

export default Home;
