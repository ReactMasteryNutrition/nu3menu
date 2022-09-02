import { Box } from '@chakra-ui/react'
import DayMeal from '../components/meal/dayMeal';

const CreateMenu = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <DayMeal/>
        </Box>
    );
}

export default CreateMenu;
