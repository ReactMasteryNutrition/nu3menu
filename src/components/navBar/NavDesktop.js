import "./NavDesktop.css"
import { ModalDesktopRegister } from "../connection/ModalRegister"
import { ModalDesktopLogin } from "../connection/ModalLogin"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react'
import {BsPlusCircle} from 'react-icons/bs'
import { Link } from "react-router-dom"

// const userToken = 'nu3menuToken'

const Dropdown = () => {
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
          <Link to="/user/myaccount">
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
          <Link to="/">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              Se déconnecter
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  )
}

const NavVisitor = () => {
  return (
    <>
      <div id="navVisitorDesktop">
        <Link to="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </Link>
        <div className="nav__buttons">
          <ModalDesktopLogin />
          <ModalDesktopRegister />
        </div>
      </div >
      <div className="nav__separator--bottom"></div>
    </>
  )
}

const NavUser = () => {
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
              <BsPlusCircle size="33"/>
              <p>Créer mon menu</p>
            </Link>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="nav__separator--bottom"></div>
    </>
  )
}

const NavDesktop = () => {
  return (
    <>
      {/* {userToken ? <navUser /> : <navVisitor />} */}
      {/* <NavVisitor /> */}
      <NavUser />
    </>
  )
}

export default NavDesktop;