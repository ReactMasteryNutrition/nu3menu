
import { Box } from "@chakra-ui/react";
import MyDetailsMenu from "../components/DetailsMenu/MyDetailsMenu"


const DetailsMenu = () => {
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1'>
            <MyDetailsMenu/>
        </Box>
    )
}

export default DetailsMenu