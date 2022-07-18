import './NutriNavMobile.css'
import {
    useDisclosure,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Avatar,
    Box
} from '@chakra-ui/react'
import { ChatIcon, BellIcon, QuestionIcon } from '@chakra-ui/icons'

// const userToken = 'nu3menuToken'

const DrawerVisitorMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <button onClick={onOpen}>
                <img src="./images/avatar_visitor.svg" alt="Logo du site" />
            </button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} >
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent
                    bg="#f0fff4"
                    borderTopLeftRadius="2rem"
                    borderTopRightRadius="2rem"
                >
                    <DrawerCloseButton />

                    <div className='drawer__seperator--top'></div>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                        marginTop="2rem"
                    >
                        <div>
                            <Button bg="#f0fff4" _hover={{ bg: "#f0fff4" }} >
                                <img src='./images/login.svg'
                                     alt='Une porte et une flèche' width="30rem" />
                                Se connecter
                            </Button>
                        </div>
                        <div>
                            <Button bg="#f0fff4" _hover={{ bg: "#f0fff4" }}>
                                <img src='./images/register.svg'
                                     alt='Des avatars' width="30rem" />
                                S'inscrire
                            </Button>
                        </div>
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
            <Box>
                <button onClick={onOpen}>
                    <Avatar size="sm" />
                </button>
            </Box>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} bottom="4.625rem"
            >
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent
                    bg="#f0fff4"
                    borderTopLeftRadius="2rem"
                    borderTopRightRadius="2rem"
                >
                    <DrawerCloseButton />

                    <div className='drawer__seperator--top'></div>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        textAlign="center"
                        gap="1rem"
                        marginTop="2rem"
                        fontWeight="bold" >
                        <a href='/' className='drawer_img--position'>
                            <img src='./images/avatar_account.svg' alt='Avatar' />
                            <p>John</p>
                        </a>
                        <a href='/account' className='drawer_img--position'>
                            <img src='./images/gear_wheel.svg' alt='Avatar' />
                            <p >Mon compte</p>
                        </a>
                        <a href='/allmenus' className='drawer_img--position'>
                            <img src='./images/card_menu.svg' alt='Carte de menus' />
                            <p>Tous mes menus</p>
                        </a>
                        <div>
                            <a href='/alladvices'>
                                <ChatIcon color="#48BB78" /> Tous mes avis
                            </a>
                        </div>
                        <div>
                            <a href='/notifications'>
                                <BellIcon color="#48BB78" /> Notifications
                            </a>
                        </div>
                        <div>
                            <a href='/helpandsupport'>
                                <QuestionIcon color="#48BB78" /> Aide et support
                            </a>
                        </div>
                        <a href='/logout' className='drawer_img--position'>
                            <img src="./images/logout.svg" alt='Une porte et une flèche' />
                            <p>Se déconnecter</p>
                        </a>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}

const NavVisitorMobile = () => {
    return (
        <>
            <div id='navVisitorMobile'>
                <div className="nav__separator--top"></div>
                <DrawerVisitorMobile />
            </div>
        </>
    )
}

const NavUserMobile = () => {
    return (
        <>
            <div id='navUserMobile'>
                <div className="nav__separator--top"></div>
                <a href="/">
                    <img src="./images/home.svg" alt="Maison" />
                </a>
                <a href="/menu">
                    <img src="./images/menu.svg" alt="Menu" />
                </a>
                <a href="/create">
                    <img src="./images/plus.svg" alt="Le signe plus" />
                </a>
                <a href="/bookmark">
                    <img src="./images/bookmark.svg" alt="Marque-page" />
                </a>
                <DrawerUserMobile />
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

export default NutriNavMobile