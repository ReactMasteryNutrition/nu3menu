import DayMeal from '../components/meal/dayMeal';
import { Box } from "@chakra-ui/react"

const CurrentMenu = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1' >
            <DayMeal />
        </Box >
    )
}

export default CurrentMenu;
