import "./NutriNavDesktop.css"
import NutriRegister from "../../pages/Connection/NutriRegister"
import NutriLogin from "../../pages/Connection/NutriLogin"
import React, {useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react'
import { Link } from "react-router-dom"

// const userToken = 'nu3menuToken'

const DropdownDesktop = () => {

  const {toggleModals} = useContext(AuthContext)
  const navigate = useNavigate()

  const signOut = async () => {
    try {
      await signOut(auth)
      toggleModals()
      navigate("/user");
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <Avatar size="sm" />
        </MenuButton>
        <MenuList bg='#f0fff4'>
          <Link to="/user">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              John
            </MenuItem>
          </Link>
          <MenuDivider />
          <Link to="/user/account">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Mon compte
            </MenuItem>
          </Link>
          <Link to="/user/allmenus">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Tous mes menus
            </MenuItem>
          </Link>
          <Link to="/user/alladvices">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Tous mes avis
            </MenuItem>
          </Link>
          <Link to="/user/notifications">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Notifications
            </MenuItem>
          </Link>
          <MenuDivider />
          <Link to="/user/helpandsupport">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Aide et support
            </MenuItem>
          </Link>
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}  onClick={logOut}>
              Se déconnecter
            </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

const NavDesktopVisitor = () => {
  return (
    <>
      <div id="navVisitorDesktop">
        <Link to="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </Link>
        <div className="nav__buttons">
          <NutriLogin />
          <NutriRegister />
        </div>
      </div >
      <div className="nav__separator--bottom"></div>
    </>
  )
}

const NavDesktopUser = () => {
  return (
    <>
      <div id="navUserDesktop">
        <Link to="/user">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </Link>
        <div className="nav__menu">
          <div className="nav__links">
            <Link to="/user/menu">
              Mon menu
            </Link>
            <Link to="/user/bookmark">
              Favoris
            </Link>
          </div>
          <div className="nav__icons">
            <Link to="/user/createmenu">
              <img src="./images/plus.svg" alt="Le signe plus" />
              <p>Créer mon menu</p>
            </Link>
            <DropdownDesktop />
          </div>
        </div>
      </div>
      <div className="nav__separator--bottom"></div>
    </>
  )
}

const NutriNavDesktop = () => {
  return (
    <>
      {/* {userToken ? <navUserDesktop /> : <navVisitorDesktop />} */}
      <NavDesktopVisitor />
      {/* <NavDesktopUser /> */}
    </>
  )
}

export default NutriNavDesktop;