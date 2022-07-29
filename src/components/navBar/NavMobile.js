import { /* DrawerVisitor, */ DrawerUser } from './Drawer'
import { ModalRegister, ModalLogin } from "../../components/connection/Modal"

import { ResponsiveWidth } from "../../utils/helper"
import { Link } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'
import { BsPlusCircle, BsBookmarkFill } from 'react-icons/bs'
import { FaHome } from "react-icons/fa"
import { AiOutlineMenuUnfold } from 'react-icons/ai'

// const userToken = 'nu3menuToken'

const NavVisitor = () => {
    return (
        <Box
            display={ResponsiveWidth() ? "none" : "block"}
            position="fixed"
            z-index="1"
            bottom="0"
            width="100vw"
            height="4.5rem"
            bg="#1a202c"
        >
            <Box
                position="absolute"
                z-index="1"
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
            {/* <DrawerVisitor/> */}
        </Box>
    )
}

const NavUser = () => {
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
                z-index="1"
                left="50%"
                top="0"
                height="0.3rem"
                width="100%"
                transform="translate(-50%, -50%)"
                bg="#48bb78"
            ></Box>
            <Box>
                <Flex gap="2.2rem" alignItems="center">
                    <Link to="/" >
                        <FaHome size="33" color="#48BB78" />
                    </Link>
                    <Link to="/menu">
                        <AiOutlineMenuUnfold size="33" color="#48BB78" />
                    </Link>
                    <Link to="/createmenu">
                        <BsPlusCircle size="33" color="#48BB78" />
                    </Link>
                    <Link to="/bookmark">
                        <BsBookmarkFill size="33" color="#48BB78" />
                    </Link>
                    {ResponsiveWidth() ? null : <DrawerUser />}
                </Flex>
            </Box>
        </Flex >
    )
}

const NavMobile = () => {
    return (
        <>
            {/* {userToken ? <NavUser/> : <NavVisitor/>} */}
            <NavVisitor />
            {/* <NavUser /> */}
        </>
    )
}

export default NavMobile;