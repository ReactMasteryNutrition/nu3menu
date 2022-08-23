import { render, screen } from "../utils/test-utils"
import MyAccount from '../pages/MyAccount'
import userEvent from '@testing-library/user-event'

describe('display a modal', () => {
    test('display a modal to modify a name when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "name" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "name" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon prénom" })).toBeInTheDocument()
    })
    test('display a modal to modify an e-mail when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "e-mail" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "e-mail" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon adresse e-mail" })).toBeInTheDocument()
    })
    test('display a modal to modify a password when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { description: "password" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { description: "password" }))
        expect(screen.getByRole('dialog', { name: "Modifier mon mot de passe" })).toBeInTheDocument()
    })
    test('display a modal to delete an user account when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name: "Supprimer mon compte" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: "Supprimer mon compte" }))
        expect(screen.getByRole("dialog", {name:"Supprimer mon compte"})).toBeInTheDocument()
    })
})