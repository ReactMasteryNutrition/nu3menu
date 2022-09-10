import { render, screen } from "../utils/test-utils"
import Error404 from '../pages/Error404'
import userEvent from "@testing-library/user-event"

test('redirection to homepage',()=>{
    render(<Error404/>)
    expect(screen.getByRole('heading',{name:'Erreur 404 - Page non trouvée'})).toBeInTheDocument()
    expect(screen.getByLabelText('text')).toBeInTheDocument()
    expect(screen.getByRole('link',{name:'Accueil'})).toBeInTheDocument()
    userEvent.click(screen.getByRole('link',{name:'Accueil'}))
    expect(global.window.location.href).toBe("http://localhost/")
})