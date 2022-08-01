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
import { CgProfile } from 'react-icons/cg'
import { IoMdSettings } from "react-icons/io"
import { IoLogOut } from "react-icons/io5"
import { MdOutlineMenuBook } from "react-icons/md"
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/authContext'
// import { FaUserAlt } from "react-icons/fa"
/* 
const DrawerVisitor = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                bg="#1A202C"
                _hover={{ bg: "#1A202C" }}
                _active={{ bg: "#1A202C" }}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                onClick={onOpen}
            >
                <FaUserAlt
                    color="#48BB78"
                    // _hover={{filter: "brightness(0) saturate(100%) invert(94%) sepia(13%) saturate(319%) hueRotate(69deg) brightness(106%) contrast(101%)"}}
                    size="50"
                />
            </Button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} >
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent bg="#f0fff4">
                    <DrawerCloseButton />
                    <Box
                        position="absolute"
                        zIndex="1"
                        left="50%"
                        top="1.5rem"
                        height="0.3rem"
                        width="33.33%"
                        transform="translate(-50%, -50%)"
                        bg="#48bb78"
                        borderRadius="0.3rem"
                    ></Box>
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
                        <ModalLogin />
                        <ModalRegister />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
} */

const DrawerUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Button
                onClick={onOpen}
                bg="#1A202C"
                _hover={{ bg: "#1A202C" }}
                _active={{ bg: "#1A202C" }}
            >
                <Avatar size="sm" />
            </Button>
            <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size="full">
                <DrawerOverlay bg="rgba(160, 174, 192, 0.5)" />
                <DrawerContent bg="#f0fff4">
                    <DrawerCloseButton />
                    <Box
                        position="absolute"
                        zIndex="1"
                        left="50%"
                        top="1.5rem"
                        height="0.3rem"
                        width="33.33%"
                        transform="translate(-50%, -50%)"
                        bg="#48bb78"
                        borderRadius="0.3rem"
                    ></Box>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        gap="2rem"
                        position="relative"
                        top="5rem"
                        margin="0 auto"
                        fontWeight="bold"
                        fontSize="1.2rem">
                        <Link to='/' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="1rem">
                                <CgProfile color='#48BB78' margin-right='0.5rem' /> John
                            </Flex>
                        </Link>
                        <Link to='/myaccount' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="1rem">
                                <IoMdSettings color='#48BB78' margin-right='0.5rem' /> Mon compte
                            </Flex>
                        </Link>
                        <Link to='/allmenus' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="1rem">
                                < MdOutlineMenuBook color='#48BB78' margin-right='0.5rem' /> Tous mes menus
                            </Flex>
                        </Link>
                        <Link to='/alladvices' onClick={onClose}>
                            <ChatIcon color="#48BB78" marginRight='0.5rem' /> Tous mes avis
                        </Link>
                        <Link to='/notifications' onClick={onClose}>
                            <BellIcon color="#48BB78" marginRight='0.5rem' /> Notifications
                        </Link>
                        <Link to='/helpandsupport' onClick={onClose}>
                            <QuestionIcon color="#48BB78" marginRight='0.5rem' /> Aide et support
                        </Link>
                        <Link to='/' onClick={onClose}>
                            <Flex
                                flexDirection="row"
                                gap="0.5rem">
                                <IoLogOut color='#48BB78' margin-right='0.5rem' /> Se déconnecter
                            </Flex>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export {/*  DrawerVisitor, */ DrawerUser }