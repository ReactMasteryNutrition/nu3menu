import { render as renderReactTestingLib } from '@testing-library/react'
import AllProvider from "../context/allProvider";
import PropTypes from 'prop-types'

// all tests subscribe to updates from providers
const render = (ui, { ...options } = {}) => {
    return renderReactTestingLib(ui, { wrapper: AllProvider, ...options })
}

render.propTypes = {
    ui: PropTypes.elementType.isRequired,
    options: PropTypes.elementType.isRequired
}

export * from '@testing-library/react'
export { render }