import DayMeal from '../components/meal/dayMeal';
import { Flex, Heading, Button, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { ResponsiveWidth } from "../utils/helper"

const Bookmark = () => {
    return (
        'idBookmark' ? (
            < Flex
                w="100%"
                flexDirection='column'
                justifyContent="center"
                flexGrow='1'
                alignItems='center'
                margin={ResponsiveWidth() ? null : '10rem 0'}
            >
                <Heading as='h1' size='xl' color="#48BB78" textAlign="center">
                    Vous n'avez pas encore de menus en favoris !
                </Heading>
                <Link to='/'>
                    <Button 
                    leftIcon={<FaHome size="20" color="#F0FFF4" />} 
                    bg="#48BB78" 
                    color="#F0FFF4" 
                    _hover={{ bgColor: "#a0aec0" }} 
                    marginTop='3rem'
                    >
                        Accueil
                    </Button>
                </Link>
            </Flex >
        ) : (
            <Box w="100%" display='flex' flexDir={['column', 'row']} flexGrow='1' >
                <DayMeal />
            </Box >
        )
    )
}

export default Bookmark;