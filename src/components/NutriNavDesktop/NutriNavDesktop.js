import "./NutriNavDesktop.css"
import NutriRegister from "../../pages/Connection/NutriRegister"
import NutriLogin from "../../pages/Connection/NutriLogin"
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

const NutriNavDesktop = ({mealDayy}) => {
  console.log(`c'est un mealdayyyyyy ${mealDayy}`)
  return (
    <>
      {/* {userToken ? <navUserDesktop /> : <navVisitorDesktop />} */}
      <NavDesktopVisitor />
      {/* <NavDesktopUser /> */}
    </>
  )
}

export default NutriNavDesktop;