import ModalRegister from "../connection/ModalRegister"
import ModalLogin from "../connection/ModalLogin"
import { ResponsiveWidth } from "../../utils/helper"
import NavUserDropdown from "./NavUserDropdown"
import { Link } from "react-router-dom"
import { BsPlusCircle } from 'react-icons/bs'
import { Box, Flex, Image, Tooltip } from '@chakra-ui/react'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavVisitor = () => {
  return (
    <Box>
      <Flex
        flexDirection="row"
        justifyContent={ResponsiveWidth() ? "space-between" : "center"}
        alignItems="center"
        margin="1rem"
      >
        <Link to="/">
          <Image
            src="./images/logo_nu3menu.svg"
            alt="Logo du site"
            width="12rem"
          />
        </Link>
        <Box
          display={ResponsiveWidth() ? "flex" : "none"}
          gap="4rem"
        >
          <ModalLogin />
          <ModalRegister />
        </Box>
      </Flex >
      <Box
        position="relative"
        top={ResponsiveWidth() ? null : "50%"}
        left={ResponsiveWidth() ? null : "50%"}
        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}

        height="0.3rem"
        width={ResponsiveWidth() ? "100%" : "80%"}
        borderRadius={ResponsiveWidth() ? null : "3rem"}
        bg="#48bb78"
      ></Box>
    </Box>
  )
}

const NavUser = () => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent={ResponsiveWidth() ? "space-between" : "center"}
        alignItems="center"
        margin="1rem"
      >
        <Link to="/">
          <Image
            src="./images/logo_nu3menu.svg"
            alt="Logo du site"
            width="12rem"
          />
        </Link>
        <Box
          display={ResponsiveWidth() ? "flex" : "none"}
          flexDirection="row"
          alignItems="center"
          color="#48bb78"
          gap="1.5rem"
        >
          <Flex
            flexDirection="row"
            gap="1rem"
            fontSize="1.1rem"
            fontWeight="700"
          >
            <Link to="/menu"
            >
              <Box _hover={{
                color: "#f0fff4"
              }}>Mon menu</Box>
            </Link>
            <Link to="/favorite"
            >
              <Box
                _hover={{
                  color: "#f0fff4"
                }}>Favoris</Box>
            </Link>
          </Flex>
          <Flex
            flexDirection="row"
            gap="1rem"
            with="5rem"
          >
            <Link to="/createMenu"
            >
              <Tooltip
                label='Créer mon menu'
                width="6.5rem"
                textAlign="center"
                fontSize="0.7rem"
                borderRadius="0.3rem"
                bg="#f0fff4"
                color="#1a202c"
              >
                <Box as="span">
                  <BsPlusCircle size="33" />
                </Box >
              </Tooltip>
            </Link>
            <NavUserDropdown />
          </Flex>
        </Box>
      </Flex >
      <Box
        position="relative"
        top={ResponsiveWidth() ? null : "50%"}
        left={ResponsiveWidth() ? null : "50%"}
        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
        bottom="0.31rem"
        height="0.3rem"
        width={ResponsiveWidth() ? "100%" : "80%"}
        borderRadius={ResponsiveWidth() ? null : "3rem"}
        bg="#48bb78"
      ></Box>
    </>
  )
}

const NavDesktop = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      {currentUser ? <NavUser /> : <NavVisitor />}
    </>
  )
}

export default NavDesktop;