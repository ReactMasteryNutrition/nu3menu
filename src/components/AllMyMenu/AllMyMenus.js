// Import
import React from 'react'
import { Button, Link, Text, VStack } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
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
                lastPublicMenus.length === 0 && setUserCreatedMenu(false)
                setMyMenus(lastPublicMenus)
            },
            (error) => {
                throw error;
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        userCreatedMenu ?
        <CardComponent listOfMenu={myMenus} currentUser={currentUser} />
        :
        <VStack w='100%' minH='100%' justifyContent='center' px='2rem'>
            <Text fontSize='2xl' color='green.50' mb='3rem' textAlign='center'>You don't have any menu registered</Text>
            <Link as={ReachLink} to='/createmenu'>
                <Button leftIcon={<AddIcon size="3em" color="green.50" margin/>} bg="#48BB78" color="green.50" _hover={{ bgColor: "#a0aec0", textDecoration: 'none'}} p='2em'>
                    Add menu
                </Button>
            </Link>
        </VStack>
    )
}