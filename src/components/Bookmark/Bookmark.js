//Import
import React from 'react'
import { Button, Link, Text, VStack } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { db } from "../../firebase-config"
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import {useAuth} from "../../context/authContext"
import CardComponent from '../Card/CardComponent'

// Function
export default function Bookmark(){
    // On vérifie que le user possède des menus favoris
    const [userWithFavorite, setUserWithFavorite] = React.useState()
    const [sumOfFav, setSumOfFav] = React.useState()
    const { currentUser } = useAuth()
    const thisUserRef = doc(db, "users", currentUser?.uid)
    getDoc(thisUserRef).then((doc)=>{doc && setUserWithFavorite(doc.data().haveFavorite)})
    // Récupération des menus en favoris
    const [lastMenus, setLastMenus] = React.useState([])

    // UseEffect pour récupérer les derniers menus favoris par ordre chronologique décroissant (donc du plus récent au plus vieux)
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("favorite", "array-contains", currentUser?.uid), orderBy("dateCreation", "desc"))
        onSnapshot(q, (querySnapshot)=> {
                const favoritesMenus = []
                querySnapshot.forEach((doc)=> {
                    favoritesMenus.push(doc.data())
                })
                setLastMenus(favoritesMenus)
                setSumOfFav(favoritesMenus.length)
            },
            (error) => {
                throw error;
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userWithFavorite, sumOfFav])

    return(
        userWithFavorite ? 
        <CardComponent listOfMenu={lastMenus} currentUser={currentUser} setUserWithFavorite={setUserWithFavorite} sumOfFav={sumOfFav} setSumOfFav={setSumOfFav}/> 
        : 
        <VStack w='100%' minH='100%' justifyContent='center' px='2rem'>
            <Text fontSize='2xl' color='green.50' mb='3rem'>You don't have favorite menu yet</Text>
            <Link as={ReachLink} to='/'>
                <Button leftIcon={<FaHome size="3em" color="green.50" />} bg="#48BB78" color="green.50" _hover={{ bgColor: "#a0aec0", textDecoration: 'none'}} p='2em'>
                    Go Home
                </Button>
            </Link>
        </VStack>
    )
}