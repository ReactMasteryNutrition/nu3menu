import { Box } from "@chakra-ui/react"
import Bookmark from '../components/Bookmark/Bookmark'

const Favorite = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <Bookmark />
        </Box>
    )
}

export default Favorite;