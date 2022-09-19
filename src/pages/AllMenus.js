import { Box } from '@chakra-ui/react'
import AllMyMenus from '../components/AllMyMenu/AllMyMenus';

const AllMenus = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <AllMyMenus/>
        </Box>
    );
}

export default AllMenus;
