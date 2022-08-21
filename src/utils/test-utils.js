import { render as renderReactTestingLib } from '@testing-library/react'
import AllProvider from "../context/allProvider";

const render = (ui, { ...options } = {}) => {
    return renderReactTestingLib(ui, { wrapper: AllProvider, ...options })
}

export * from '@testing-library/react'
export { render }