// Import
import { Text } from "@chakra-ui/react";
import {useAuth} from "../../context/authContext";

// Function
export default function Bookmark(){
    //on récupère l'ID du User
    const { currentUser } = useAuth()
    console.log(currentUser.uid)
    // return
    return(
        <Text>Page des favoris</Text>
    )
}