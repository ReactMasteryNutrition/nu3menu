import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Avatar, Button
} from '@chakra-ui/react'
  import {Link, Navigate} from "react-router-dom"
import {signOut} from "firebase/auth";
import {auth} from "../../firebase-config";
import {useAuth} from "../context/authContext";

const Dropdown = () => {
    const { currentUser } = useAuth()
    const logOut = async () => {
        try {
            await signOut(auth)

        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }
    const handleClick = () => {
        logOut()
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
                  {currentUser?.email}
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

  export default Dropdown