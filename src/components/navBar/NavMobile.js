import NavUserDrawer from './NavUserDrawer'
import ModalRegister from "../connection/ModalRegister"
import ModalLogin from "../connection/ModalLogin"
import { ResponsiveWidth } from "../../utils/helper"
import { Link as ReachLink } from 'react-router-dom'
import { Flex, Box, useMediaQuery, Link } from '@chakra-ui/react'
import { BsPlusCircle, BsBookmarkFill } from 'react-icons/bs'
import { FaHome } from "react-icons/fa"
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";

const NavVisitor = () => {
    return (
        <Box
            display={ResponsiveWidth() ? "none" : "block"}
            position="fixed"
            zIndex="1"
            bottom="0"
            width="100vw"
            height="4.5rem"
            bg="#1a202c"
        >
            <Box
                position="absolute"
                zIndex="1"
                left="50%"
                top="0"
                height="0.3rem"
                width="100%"
                transform="translate(-50%, -50%)"
                bg="#48bb78"
            ></Box>
            {ResponsiveWidth() ? null : (<>
                <Flex
                    gap="4rem"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)">
                    <ModalLogin />
                    <ModalRegister />
                </Flex>
            </>)}
        </Box>
    )
}

const NavUser = () => {
    const [maxWidth375] = useMediaQuery('(max-width: 375px)')
    return (
        <Flex
            display={ResponsiveWidth() ? "none" : "flex"}
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            zIndex="1"
            bottom="0"
            width="100vw"
            height="4.5rem"
            bg="#1a202c"
        >
            <Box
                position="absolute"
                zIndex="1"
                left="50%"
                top="0"
                height="0.3rem"
                width="100%"
                transform="translate(-50%, -50%)"
                bg="#48bb78"
            ></Box>
            <Flex gap={maxWidth375 ? "1.5rem" : "2.5rem"} alignItems="center">
                <Link as={ReachLink} to="/" >
                    <FaHome size="33" color="#48BB78" />
                </Link>
                <Link as={ReachLink} to="/menu">
                    <AiOutlineMenuUnfold size="33" color="#48BB78" />
                </Link>
                <Link as={ReachLink} to="/createmenu">
                    <BsPlusCircle size="33" color="#48BB78" />
                </Link>
                <Link as={ReachLink} to="/favorite">
                    <BsBookmarkFill size="33" color="#48BB78" />
                </Link>
                {ResponsiveWidth() ? null : <NavUserDrawer />}
            </Flex>
        </Flex>
    )
}

const NavMobile = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <>
            {currentUser ? <NavUser/> : <NavVisitor/>}
        </>
    )
}

export default NavMobile;