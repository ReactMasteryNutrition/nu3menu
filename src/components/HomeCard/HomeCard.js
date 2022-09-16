//Import
import React from 'react';
import { Box } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoStar, IoPin } from 'react-icons/io5'
import { arrayUnion, collection, doc, getDoc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { db } from "../../firebase-config";
import { writeTheDate } from '../../utils/HoursAndMinutes';
import {useAuth} from "../../context/authContext";

// Function
export default function HomeCard(){
    const [lastMenus, setLastMenus] = React.useState([])
    const [menuAsAnObject, setMenuAsAnObject]= React.useState([])
    // UseEffect pour récupérer les derniers menus public par ordre chronologique décroissant (donc du plus récent au plus vieux)
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("isPublic", "==", true), orderBy("dateCreation", "desc"))
        onSnapshot(q, (querySnapshot)=> {
            const lastPublicMenus = []
            querySnapshot.forEach((doc)=> {
                lastPublicMenus.push(doc.data())
            })
            console.log('CURRENT DATA :', lastPublicMenus)
            setLastMenus(lastPublicMenus)
        },
        (error) => {
            console.log(error);
        })
    },[])
    // UseEffect pour retraiter le détail de chaque menu et pouvoir manipuler les données
    React.useEffect(()=>{
        console.log('Last Menus : ', lastMenus)
        //const menuEnLocal = lastMenus
        let detailMenu = []
        lastMenus.map(truc => detailMenu.push(JSON.parse(truc.detail)))
        //menuEnLocal.map(truc => detailMenu.push(JSON.parse(truc.detail)))
        console.log('detailMenu [] : ', detailMenu)
    },[lastMenus])
    // Récupération du Current User
    const { currentUser } = useAuth()
    // Fonction pour suivre un menu (Be on this diet)
    const beOn = (idMenu) => {
        console.log('On lance beOn pour dire qu on va suivre ce menu')
        const currentMenuRef = doc(db, "users", currentUser?.uid)
        //console.log(currentMenuRef)
        updateDoc(currentMenuRef, {
            currentMenu: idMenu
        });
    }
    // Fonction pour ajouter un menu en favori
    const addFavorite = (idMenu) => {
        console.log('On ajoute ce menu aux favoris')
        let isInMyFav = false
        const favoriteRef = doc(db, "menus", idMenu)
        //console.log(favoriteRef)
        updateDoc(favoriteRef, {
            favorite: arrayUnion(currentUser?.uid)
        })
    }
    return(
        <Box>Je mets mes cartes ici</Box>
    )
}