import { Box } from '@chakra-ui/react'
import MenuCreator from '../components/menuCreator/menuCreator';

const CreateMenu = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <MenuCreator/>
        </Box>
    );
}

export default CreateMenu;
