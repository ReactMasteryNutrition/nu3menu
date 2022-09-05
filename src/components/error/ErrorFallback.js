import { Flex, Heading, Button, Box } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { ResponsiveWidth } from "../../utils/helper"
import PropTypes from 'prop-types'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
        resetErrorBoundary()
    }
    return (
        <Flex role='alert' w="100%" flexDirection='column' justifyContent="center" flexGrow='1' alignItems='center' margin={ResponsiveWidth() ? null : '10rem 0'}>
            <Heading as='h1' size='xl' color="#48BB78" textAlign="center">
                Une erreur est survenue !
            </Heading>
            <Box color='red' textAlign="center" margin="3rem 0">{error.message}</Box>
            <Box color='#48BB78' textAlign="center" fontSize="1.2rem" fontWeight="bold" marginBottom="1rem">
                Revenez à la page d'accueil
            </Box>
            <Button leftIcon={<FaHome size="20" color="#F0FFF4" />} bg="#48BB78" color="#F0FFF4" _hover={{ bgColor: "#a0aec0" }} onClick={handleClick}>
                Accueil
            </Button>
        </Flex>
    )
}

ErrorFallback.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired
}

export default ErrorFallback