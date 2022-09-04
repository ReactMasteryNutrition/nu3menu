import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './authContext'
import PropTypes from 'prop-types'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retryDelay: 500,
        retry: (failureCount, error) => {
          if (error.status === 404) return false
          else if (error.status === 401) return false
          else if (failureCount > 3) return false
          else return true
        },
      },
      mutations: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retryDelay: 500,
        retry: 1,
      },
    },
  })

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
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme}>
                    <AuthContextProvider>
                        {children}
                    </AuthContextProvider>
                </ChakraProvider>
            </QueryClientProvider>
        </BrowserRouter >
    )
}

AllProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AllProvider