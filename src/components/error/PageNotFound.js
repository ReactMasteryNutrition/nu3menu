import { Flex, Heading, Button, Box } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { ResponsiveWidth } from "../../utils/helper"

const PageNotFound = () => {
    return (
        <Flex flexDirection='column' justifyContent="center" alignItems='center' margin={ResponsiveWidth() ? '15rem 0' : '10rem 0'}>
            <Heading as='h1' size='xl' color="red" textAlign="center">
                Error 404 - Page not found
            </Heading>
            <Box aria-label='text' color='#48BB78' textAlign="center" fontSize="1.2rem" fontWeight="bold" margin="3rem 0 1.5rem 0">
                There is nothing interesting here !
                <br />
                Go back to the home page
            </Box>
            <Link to='/'>
                <Button leftIcon={<FaHome size="20" color="#F0FFF4" />} bg="#48BB78" color="#F0FFF4" _hover={{ bgColor: "#a0aec0" }} >
                    Home
                </Button>
            </Link>
        </Flex>
    )
}

export default PageNotFound