import AuthContextProvider from "../context/authContext"
import React from "react";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { render as renderReactTestingLib } from '@testing-library/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "gray.800",
                fonts: "Poppins, sans-serif",
            }
        }
    }
})

const AllProviders = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
        </ChakraProvider>
    )
}

const render = (ui, { ...options } = {}) => {
    return renderReactTestingLib(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
export { render }