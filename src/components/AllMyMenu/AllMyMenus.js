// Import
import React from 'react'
import { Button, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {useAuth} from "../../context/authContext"
import { db } from "../../firebase-config"
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { AddIcon } from '@chakra-ui/icons'
import CardComponent from '../Card/CardComponent'
// Function
export default function AllMyMenus(){
    // On vérifie que le user a créé des menus
    const [userCreatedMenu, setUserCreatedMenu] = React.useState(true)
    const [myMenus, setMyMenus] = React.useState([])
    const { currentUser } = useAuth()
    
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("idCreator", "==", currentUser?.uid), orderBy("dateCreation", "desc"))
        onSnapshot(q, (querySnapshot)=> {
            const lastPublicMenus = []
            querySnapshot.forEach((doc)=> {
                lastPublicMenus.push(doc.data())
            })
            console.log('CURRENT DATA :', lastPublicMenus)
            lastPublicMenus.length === 0 && setUserCreatedMenu(false)
            setMyMenus(lastPublicMenus)
        },
        (error) => {
            console.log(error);
        })
    },[])
    

    return(
        userCreatedMenu ?
        <CardComponent listOfMenu={myMenus} currentUser={currentUser} />
        :
        <VStack w='100%' minH='100%' justifyContent='center'>
            <Text fontSize='2xl' color='green.50' mb='3rem'>You don't have any menu registered</Text>
            <Link to='/createMenu'>
                <Button leftIcon={<AddIcon size="3em" color="green.50" margin/>} bg="#48BB78" color="green.50" _hover={{ bgColor: "#a0aec0", textDecoration: 'none'}} p='2em'>
                    Add menu
                </Button>
            </Link>
        </VStack>
    )
}