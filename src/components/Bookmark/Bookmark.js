//Import
import React from 'react'
import { Button, Center, Text, textDecoration, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { db } from "../../firebase-config"
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import {useAuth} from "../../context/authContext"
import CardComponent from '../Card/CardComponent'

// Function
export default function Bookmark(){
    // On vérifie que le user possède des menus favoris
    const [userWithFavorite, setUserWithFavorite] = React.useState(false)
    const { currentUser } = useAuth()
    const thisUserRef = doc(db, "users", currentUser?.uid)
    getDoc(thisUserRef).then((doc)=>{doc && setUserWithFavorite(doc.data().haveFavorite)})
    // Récupération des menus en favoris
    const [lastMenus, setLastMenus] = React.useState([])
    const [menuAsAnObject, setMenuAsAnObject]= React.useState([])
    // UseEffect pour récupérer les derniers menus favoris par ordre chronologique décroissant (donc du plus récent au plus vieux)
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("favorite", "array-contains", currentUser?.uid), orderBy("dateCreation", "desc"))
        onSnapshot(q, (querySnapshot)=> {
            const favoritesMenus = []
            querySnapshot.forEach((doc)=> {
                favoritesMenus.push(doc.data())
            })
            console.log('FAVORIS : ', favoritesMenus)
            setLastMenus(favoritesMenus)
        },
        (error) => {
            console.log(error);
        })
    },[userWithFavorite, currentUser?.uid])
    // UseEffect pour retraiter le détail de chaque menu et pouvoir manipuler les données
    // React.useEffect(()=>{
    //     console.log('Last Menus : ', lastMenus)
    //     //const menuEnLocal = lastMenus
    //     let detailMenu = []
    //     lastMenus.map(truc => detailMenu.push(JSON.parse(truc.detail)))
    //     //menuEnLocal.map(truc => detailMenu.push(JSON.parse(truc.detail)))
    //     console.log('detailMenu [] : ', detailMenu)
    // },[lastMenus])

    return(
        userWithFavorite ? 
        <CardComponent listOfMenu={lastMenus} currentUser={currentUser} /> 
        : 
        <VStack w='100%' minH='100%' justifyContent='center'>
            <Text fontSize='2xl' color='green.50' mb='3rem'>You don't have favorite menu yet</Text>
            <Link to='/'>
                <Button leftIcon={<FaHome size="3em" color="green.50" />} bg="#48BB78" color="green.50" _hover={{ bgColor: "#a0aec0", textDecoration: 'none'}} p='2em'>
                    Go Home
                </Button>
            </Link>
        </VStack>
    )
}