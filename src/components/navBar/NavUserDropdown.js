import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Link
} from '@chakra-ui/react'
import { auth } from "../../firebase-config";
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { useAuth } from '../../context/authContext'


const NavUserDropdown = () => {
  const navigate = useNavigate()
  const { logout, currentUser } = useAuth()

  const handleClick = async () => {
    // logout the current user
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
      <MenuButton aria-label='dropdown'>
        {currentUser?.photoURL ?
          <Avatar src={currentUser?.photoURL} size="sm" borderRadius="0.5rem" backgroundColor="#1A202C" />
          : <Avatar size="sm" />}
      </MenuButton>
      <MenuList bg='#f0fff4'>
        {currentUser?.displayName ? (<>
          <Link as={ReachLink} to="/menu">
            <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
              {currentUser?.displayName}
            </MenuItem>
          </Link>
          <MenuDivider /></>)
          : null
        }
        <Link as={ReachLink} to="/myaccount">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            My account
          </MenuItem>
        </Link>
        <Link as={ReachLink} to="/allmenus">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            All my menus
          </MenuItem>
        </Link>
        {/*  <Link as={ReachLink} to="/alladvices">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            Tous mes avis
          </MenuItem>
        </Link>
        <Link as={ReachLink} to="/notifications">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            Notifications
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link as={ReachLink} to="/helpandsupport">
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            Aide et support
          </MenuItem>
        </Link> */}
        <Link as={ReachLink} to="/" onClick={handleClick}>
          <MenuItem fontWeight="bold" color="#1A202C" _hover={{ bgColor: '#48bb78' }}>
            Log out
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default NavUserDropdown