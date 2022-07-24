import './NavMobile.css'
import { ModalMobileRegister } from "../connection/ModalRegister"
import { ModalMobileLogin } from "../connection/ModalLogin"
import { ResponsiveWidth } from "../../utils/helper"
import { Link } from 'react-router-dom'
import {
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Avatar,
    Flex,
    Box,
    Button
} from '@chakra-ui/react'
import { ChatIcon, BellIcon, QuestionIcon } from '@chakra-ui/icons'
import { BsPlusCircle, BsBookmarkFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { IoMdSettings } from "react-icons/io"
import { IoLogOut } from "react-icons/io5"
import { MdOutlineMenuBook } from "react-icons/md"
import { FaHome, FaUserAlt } from "react-icons/fa"
import { AiOutlineMenuUnfold } from 'react-icons/ai'

// const userToken = 'nu3menuToken'

const DrawerVisitor = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                bg="48BB78"
                _hover={{ bg: "48BB78" }}
                _active={{ bg: "48BB78" }}
                width="100%"
                margin="0 auto"
                onClick={onOpen}
            >
                <FaUserAlt color="48BB78" size="50"/>
            </Button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size='full'>
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent bg="#f0fff4">
                    <DrawerCloseButton />
                    <Box className='drawer__seperator--top'></Box>
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
                        <ModalMobileLogin />
                        <ModalMobileRegister />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const DrawerUser = () => {
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
                        <Link to='/user' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="0.3rem">
                                <CgProfile color='#48BB78' margin-right='0.5rem' /> John
                            </Flex>
                        </Link>
                        <Link to='/user/myaccount' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="0.3rem">
                                <IoMdSettings color='#48BB78' margin-right='0.5rem' /> Mon compte
                            </Flex>
                        </Link>
                        <Link to='/user/allmenus' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="0.3rem">
                                < MdOutlineMenuBook color='#48BB78' margin-right='0.5rem' /> Tous mes menus
                            </Flex>
                        </Link>
                        <Link to='/user/alladvices' onClick={onClose}>
                            <ChatIcon color="#48BB78" marginRight='0.5rem' /> Tous mes avis
                        </Link>
                        <Link to='/user/notifications' onClick={onClose}>
                            <BellIcon color="#48BB78" marginRight='0.5rem' /> Notifications
                        </Link>
                        <Link to='/user/helpandsupport' onClick={onClose}>
                            <QuestionIcon color="#48BB78" marginRight='0.5rem' /> Aide et support
                        </Link>
                        <Link to='/' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="0.3rem">
                                <IoLogOut color='#48BB78' margin-right='0.5rem' /> Se déconnecter
                            </Flex>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const NavVisitor = () => {

    return (
        <>
            <div id='navVisitorMobile'>
                <div className="nav__separator--top"></div>
                {ResponsiveWidth() ? null : <DrawerVisitor />}
            </div>
        </>
    )
}

const NavUser = () => {

    return (
        <>
            <Flex id='navUserMobile'>
                <Box className="nav__separator--top"></Box>
                <Box>
                    <Flex gap="2.2rem">
                        <Link to="/user" >
                            <FaHome size="33" color="#48BB78" />
                        </Link>
                        <Link to="/user/menu">
                            <AiOutlineMenuUnfold size="33" color="#48BB78" />
                        </Link>
                        <Link to="/user/createmenu">
                            <BsPlusCircle size="33" color="#48BB78" />
                        </Link>
                        <Link to="/user/bookmark">
                            <BsBookmarkFill size="33" color="#48BB78" />
                        </Link>
                        {ResponsiveWidth() ? null : <DrawerUser />}
                    </Flex>
                </Box>
            </Flex >
        </>
    )
}

const NavMobile = () => {
    return (
        <>
            {/* {userToken ? <NavUser/> : <NavVisitor/>} */}
            {/* <NavVisitor /> */}
            <NavUser />
        </>
    )
}

export default NavMobile;