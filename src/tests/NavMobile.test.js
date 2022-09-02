import { render, screen } from '../utils/test-utils'
import NavMobile from '../components/navBar/NavMobile'
import userEvent from '@testing-library/user-event'

describe('display a modal', () => {
    test('display a modal to register a visitor when clicking', () => {
        render(<NavMobile />)
        expect(screen.getByLabelText("register")).toBeInTheDocument()
        userEvent.click(screen.getByLabelText("register"))
        expect(global.window.location.href).toContain("/register")
        expect(screen.getByRole("dialog", { name: "Logo du site" })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: "S'inscrire" })).toBeInTheDocument()
    })
    test('display a modal to login an user when clicking', () => {
        render(<NavMobile />)
        expect(screen.getByLabelText("login")).toBeInTheDocument()
        userEvent.click(screen.getByLabelText("login"))
        expect(global.window.location.href).toContain("/login")
        expect(screen.getByRole("dialog", { name: "Logo du site" })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: "Se connecter" })).toBeInTheDocument()
    })
})
