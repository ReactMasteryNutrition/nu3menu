import './NutriNavMobile.css'
import { Avatar } from '@chakra-ui/react'

// const userToken = 'nu3menuToken'

function NavMobileUser() {
    return (
        <>
            <div id='navUserMobile'>
                <div className="navSeparatorMobile"></div>
                <a href="/">
                    <img src="./images/home.svg" alt="Maison" />
                </a>
                <a href="/menu">
                    <img src="./images/menu_list.svg" alt="Menu" />
                </a>
                <a href="/create">
                    <img src="./images/plus.svg" alt="Le signe plus" />
                </a>
                <a href="/bookmark">
                    <img src="./images/bookmark.svg" alt="Marque-page" />
                </a>
                <button>
                    {/* <img src="./images/avatar_user.svg" alt="Avatar" /> */}
                    <Avatar size="sm" />
                </button>
            </div>
        </>
    )
}

/* function NavMobileVisitor() {
    return (
        <>
            <div id='navVisitorMobile'>
                <div className="navSeparatorMobile"></div>
                <a href="/">
                    <img src="./images/avatar_visitor.svg" alt="Logo du site" />
                </a>
            </div>
        </>
    )
} */

function NutriNavMobile() {
    return (
        <>
            {/* {userToken ? <NavMobileUser/> : <NavMobileVisitor/>} */}
            <NavMobileUser />
            {/* <NavMobileVisitor /> */}
        </>
    )
}

export default NutriNavMobile