import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Avatar, Button
} from '@chakra-ui/react'
  import {Link, Navigate} from "react-router-dom"

const Dropdown = () => {
    const handleClick = () => {
        Navigate('/')
    }
    return (
        <Menu isLazy>
          <MenuButton>
            <Avatar size="sm" />
          </MenuButton>
          <MenuList bg='#f0fff4'>
            <Link to="/">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                John
              </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/myaccount">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                Mon compte
              </MenuItem>
            </Link>
            <Link to="/allmenus">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                Tous mes menus
              </MenuItem>
            </Link>
            <Link to="/alladvices">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                Tous mes avis
              </MenuItem>
            </Link>
            <Link to="/notifications">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                Notifications
              </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/helpandsupport">
              <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
                Aide et support
              </MenuItem>
            </Link>
              <Button variant='ghost' color="black" fontWeight="bold" _hover={{ bgColor: '#48bb78' }}>
                  <Link to="/" onClick={handleClick}  color="#1A202C">
                    Se déconnecter
                  </Link>
              </Button>
          </MenuList>
        </Menu>
    )
  }

  export default Dropdown