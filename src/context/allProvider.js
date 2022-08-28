import { BrowserRouter } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from './authContext';
import PropTypes from 'prop-types'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "gray.800",
                fonts: "Poppins, sans-serif",
            }
        }
    },
    /*  colors: {
       green: {
         700: "#276749",
         400: "#48BB78",
         50: "#F0FFF4"
       },
       gray: {
         800: "#1A202C",
         400: "#A0AEC0"
       }
     }, */
})

const AllProvider = ({ children }) => {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </ChakraProvider>
        </BrowserRouter >
    )
}

AllProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AllProvider