//Import
import React from 'react';
import { Box } from '@chakra-ui/react'
import { db } from "../../firebase-config"
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import {useAuth} from "../../context/authContext"
import CardComponent from '../Card/CardComponent';

// Function
export default function HomeCard(){
    // Récupération du Current User
    const { currentUser } = useAuth()
    // States
    const [lastMenus, setLastMenus] = React.useState([])
    const [menuAsAnObject, setMenuAsAnObject]= React.useState([])
    // UseEffect pour récupérer les derniers menus public par ordre chronologique décroissant (donc du plus récent au plus vieux)
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("isPublic", "==", true), orderBy("dateCreation", "desc"),  limit(10))
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

    return(
        <CardComponent listOfMenu={lastMenus} currentUser={currentUser} />
    )
}