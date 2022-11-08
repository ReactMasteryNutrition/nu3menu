import { render, screen } from "../utils/test-utils"
import MyAccount from '../pages/MyAccount'
import userEvent from '@testing-library/user-event'

describe('display a modal', () => {
    test('display a modal to modify an avatar when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name:"avatar" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name:"avatar" }))
        expect(screen.getByText("Edit my avatar")).toBeInTheDocument()
    })
    test('display a modal to modify a name when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name:"name" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name:"name" }))
        expect(screen.getByRole('dialog', { name: "Edit my name" })).toBeInTheDocument()
    })
    test('display a modal to modify an email address when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name: "email" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: "email" }))
        expect(screen.getByRole('dialog', { name: "Edit my email address" })).toBeInTheDocument()
    })
    test('display a modal to modify a password when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name: "password" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: "password" }))
        expect(screen.getByRole('dialog', { name: "Edit my password" })).toBeInTheDocument()
    })
    test('display a modal to delete an user account when clicking', () => {
        render(<MyAccount />)
        expect(screen.getByRole('button', { name: "delete" })).toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: "delete" }))
        expect(screen.getByRole("dialog", {name:"Delete my account"})).toBeInTheDocument()
    })
})
