import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MyAccount from './MyAccount'

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
    test('display a modal to modify a name when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "modal name" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "modal name" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon prénom" })).toBeInTheDocument()
    })
    test('display a modal to modify an e-mail when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "modal e-mail" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "modal e-mail" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon e-mail" })).toBeInTheDocument()
    })
    test('display a modal to modify a password when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "modal password" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "modal password" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon mot de passe" })).toBeInTheDocument()
    })
    test('display a modal to delete an user account when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name: "Supprimer mon compte" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: "Supprimer mon compte" }))
        expect(screen.getByText("Etes-vous sûr de vouloir supprimer votre compte ?")).toBeInTheDocument()
    })
})
