import { Box } from '@chakra-ui/react'
import Bookmark from '../components/Bookmark/Bookmark';
import DayMeal from '../components/meal/dayMeal';

const CreateMenu = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            {/* <Bookmark/> */}
            <DayMeal/>
        </Box>
    );
}

export default CreateMenu;
