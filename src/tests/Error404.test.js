import { render, screen } from "../utils/test-utils"
import Error404 from '../pages/Error404'
import userEvent from "@testing-library/user-event"

test('redirection to homepage',()=>{
    render(<Error404/>)
    expect(screen.getByRole('heading',{name:'Error 404 - Page not found'})).toBeInTheDocument()
    expect(screen.getByLabelText('text')).toBeInTheDocument()
    expect(screen.getByRole('link',{name:'Home'})).toBeInTheDocument()
    userEvent.click(screen.getByRole('link',{name:'Home'}))
    expect(global.window.location.href).toBe("http://localhost/")
})