import FormDataUser from "../components/myAccount/FormDataUser"
import { Box } from "@chakra-ui/react"
import {useAuth} from "../context/authContext";

const MyAccount = () => {
    const {currentUser} = useAuth()
    console.log(currentUser)
    return (
        <Box flexGrow='1'>
            <FormDataUser />
        </Box>
    )
}

export default MyAccount