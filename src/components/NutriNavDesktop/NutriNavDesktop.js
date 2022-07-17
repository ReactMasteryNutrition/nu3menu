import "./NutriNavDesktop.css"
import NutriNavDesktopConnection from "./NutriNavDesktopConnection"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react'

// const userToken = 'nu3menuToken'

const DropdownDesktop = () => {
  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <Avatar size="sm" />
        </MenuButton>
        <MenuList bg='#f0fff4'>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>John</MenuItem>
          <MenuDivider />
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Mon compte</MenuItem>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Tous mes menus</MenuItem>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Tous mes avis</MenuItem>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Notifications</MenuItem>
          <MenuDivider />
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Aide et support</MenuItem>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>Se déconnecter</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

const NavDesktopVisitor = () => {
  return (
    <>
      <div id="navVisitorDesktop">
        <a href="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </a>
        <div className="nav__buttons">
          <NutriNavDesktopConnection />
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
        <a href="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </a>
        <div className="nav__menu">
          <div className="nav__links">
            <a href="/menu">
              Mon menu
            </a>
            <a href="/bookmark">
              Favoris
            </a>
          </div>
          <div className="nav__icons">
            <a href="/create">
              <img src="./images/plus.svg" alt="Le signe plus" />
              <p>Créer mon menu</p>
            </a>
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
      {/* <NavDesktopVisitor /> */}
      <NavDesktopUser />
    </>
  )
}

export default NutriNavDesktop