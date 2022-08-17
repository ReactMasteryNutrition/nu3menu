import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react'
import { auth } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../context/authContext'

const NavUserDropdown = () => {
  const navigate = useNavigate()
  const { logout, currentUser } = useAuth()
  const handleClick = async () => {
    try {
      await logout(auth)
      setTimeout(() => {
        navigate('/')
      }, 1000);
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size="sm" />
      </MenuButton>
      <MenuList bg='#f0fff4'>
        <Link to="/">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            {currentUser?.displayName ? currentUser?.displayName : "Mon prénom"}
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
        <Link to="/" onClick={handleClick}>
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            Se déconnecter
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default NavUserDropdown