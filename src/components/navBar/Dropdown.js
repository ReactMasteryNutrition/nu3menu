import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Avatar
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom"

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

  export default Dropdown