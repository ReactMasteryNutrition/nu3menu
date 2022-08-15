import AuthContextProvider from "../context/authContext"
import { render as renderReactTestingLib } from '@testing-library/react'

const render = (ui, { ...options } = {}) => {
    return renderReactTestingLib(ui, { wrapper: AuthContextProvider, ...options })
}

export * from '@testing-library/react'
export { render }