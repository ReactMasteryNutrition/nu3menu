import './NutriNavMobile.css'
import NutriRegister from '../../pages/Connection/NutriRegister'
import {
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Avatar,
    useMediaQuery
} from '@chakra-ui/react'
import { ChatIcon, BellIcon, QuestionIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import NutriLogin from '../../pages/Connection/NutriLogin'

// const userToken = 'nu3menuToken'

const DrawerVisitorMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button onClick={onOpen}>
                <img src="./images/avatar_visitor.svg" alt="Logo du site" />
            </button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size='full'>
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent bg="#f0fff4">
                    <DrawerCloseButton />

                    <div className='drawer__seperator--top'></div>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        gap="1rem"
                        position="relative"
                        top="5rem"
                        margin="0 auto"
                        fontWeight="bold"
                        fontSize="1.2rem"
                    >
                        <NutriLogin />
                        <NutriRegister />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const DrawerUserMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button onClick={onOpen}>
                <Avatar size="sm" />
            </button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size="full">
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent bg="#f0fff4">
                    <DrawerCloseButton />

                    <div className='drawer__seperator--top'></div>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        gap="2rem"
                        position="relative"
                        top="5rem"
                        margin="0 auto"
                        fontWeight="bold"
                        fontSize="1.2rem">
                        <Link to='/user' className='drawer_img--position'>
                            <img src='./images/avatar_account.svg' alt='Avatar' style={{ marginRight: '0.5rem' }} />
                            <p>John</p>
                        </Link>
                        <Link to='/user/account' className='drawer_img--position'>
                            <img src='./images/gear_wheel.svg' alt='Avatar' style={{ marginRight: '0.5rem' }} />
                            <p >Mon compte</p>
                        </Link>
                        <Link to='/user/allmenus' className='drawer_img--position'>
                            <img src='./images/card_menu.svg' alt='Carte de menus' style={{ marginRight: '0.5rem' }} />
                            <p>Tous mes menus</p>
                        </Link>
                        <Link to='/user/alladvices'>
                            <ChatIcon color="#48BB78" marginRight='0.5rem' /> Tous mes avis
                        </Link>
                        <Link to='/user/notifications'>
                            <BellIcon color="#48BB78" marginRight='0.5rem' /> Notifications
                        </Link>
                        <Link to='/user/helpandsupport'>
                            <QuestionIcon color="#48BB78" marginRight='0.5rem' /> Aide et support
                        </Link>
                        <Link to='/' className='drawer_img--position'>
                            <img 
                            src="./images/logout.svg" 
                            alt='Une porte et une flèche' 
                            style={{ marginRight: '0.5rem' }} />
                            <p>Se déconnecter</p>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const NavVisitorMobile = () => {
    const [minWidth501] = useMediaQuery('(min-width: 501px)')

    return (
        <>
            <div id='navVisitorMobile'>
                <div className="nav__separator--top"></div>
                {minWidth501 ? null : <DrawerVisitorMobile />}
            </div>
        </>
    )
}

const NavUserMobile = () => {
    const [minWidth501] = useMediaQuery('(min-width: 501px)')

    return (
        <>
            <div id='navUserMobile'>
                <div className="nav__separator--top"></div>
                <Link to="/user">
                    <img src="./images/home.svg" alt="Maison" />
                </Link>
                <Link to="/user/menu">
                    <img src="./images/menu.svg" alt="Menu" />
                </Link>
                <Link to="/user/createmenu">
                    <img src="./images/plus.svg" alt="Le signe plus" />
                </Link>
                <Link to="/user/bookmark">
                    <img src="./images/bookmark.svg" alt="Marque-page" />
                </Link>
                {minWidth501 ? null : <DrawerUserMobile />}
            </div>
        </>
    )
}

const NutriNavMobile = () => {
    return (
        <>
            {/* {userToken ? <NavMobileUser/> : <NavMobileVisitor/>} */}
            {/* <NavVisitorMobile /> */}
            <NavUserMobile />
        </>
    )
}

export default NutriNavMobile;