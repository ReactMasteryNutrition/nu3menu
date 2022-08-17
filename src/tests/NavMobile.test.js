import { render, screen } from '../utils/test-utils'
import NavMobile from '../components/navBar/NavMobile'
import { BrowserRouter as Router } from "react-router-dom"
import userEvent from '@testing-library/user-event'

beforeAll(() => {
    window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })
})

describe('display a modal', () => {
    test('display a modal to register a visitor when clicking', () => {
        render(<Router><NavMobile /></Router>)
        expect(screen.getByLabelText("register")).toBeInTheDocument()
        userEvent.click(screen.getByLabelText("register"))
        expect(global.window.location.href).toContain("/register")
        expect(screen.getByRole("dialog", { name: "Logo du site" })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: "S'inscrire" })).toBeInTheDocument()
    })
    test('display a modal to login an user when clicking', () => {
        render(<Router><NavMobile /></Router>)
        expect(screen.getByLabelText("login")).toBeInTheDocument()
        userEvent.click(screen.getByLabelText("login"))
        expect(global.window.location.href).toContain("/login")
        expect(screen.getByRole("dialog", { name: "Logo du site" })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: "Se connecter" })).toBeInTheDocument()
    })
})
