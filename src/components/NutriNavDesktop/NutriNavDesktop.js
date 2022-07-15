import "./NutriNavDesktop.css"
import NutriNavDesktopConnection from "./NutriNavDesktopConnection"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider
} from '@chakra-ui/react'

// const userToken = 'nu3menuToken'

function DropdownDesktop() {
  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <Avatar size="sm" />
        </MenuButton>
        <MenuList bg='#f0fff4'>
          <MenuItem fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>John Doe</MenuItem>
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

function NavDesktopUser() {
  return (
    <>
      <div id="navUserDesktop">
        <a href="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </a>
        <div className="navUserDesktop-menu">
          <div className="navUserDesktop-menu-links">
            <a href="/menu">
              Mon menu
            </a>
            <a href="/bookmark">
              Favoris
            </a>
          </div>
          <div className="navUserDesktop-menu-icons">
            <a href="/create">
              <img src="./images/plus.svg" alt="Le signe plus" />
              <p>Créer mon menu</p>
            </a>
            <DropdownDesktop />
          </div>
        </div>
      </div>
      <div className="navSeparatorDesktop"></div>
    </>
  )
}

function NavDesktopVisitor() {
  return (
    <>
      <div id="navVisitorDesktop">
        <a href="/">
          <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
        </a>
        <div className="navVisitorDesktop-buttons">
          <NutriNavDesktopConnection/>
        </div>
      </div >
      <div className="navSeparatorDesktop"></div>
    </>
  )
}

function NutriNavDesktop() {
  return (
    <>
      {/* {userToken ? <navUserDesktop /> : <navVisitorDesktop />} */}
      <NavDesktopUser />
      <NavDesktopVisitor />
    </>
  )

}

export default NutriNavDesktop