//Import
import React from 'react';
import { db } from "../../firebase-config"
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import {useAuth} from "../../context/authContext"
import CardComponent from '../Card/CardComponent';
import CardPublic from '../Card/CardPublic';

// Function
export default function HomeCard(){
    // Récupération du Current User
    const { currentUser } = useAuth()
    // States
    const [lastMenus, setLastMenus] = React.useState([])
    // UseEffect pour récupérer les derniers menus public par ordre chronologique décroissant (donc du plus récent au plus vieux)
    React.useEffect(()=>{
        const q = query(collection(db, 'menus'), where("isPublic", "==", true), orderBy("dateCreation", "desc"),  limit(10))
        onSnapshot(q, (querySnapshot)=> {
            const lastPublicMenus = []
            querySnapshot.forEach((doc)=> {
                lastPublicMenus.push(doc.data())
            })
            setLastMenus(lastPublicMenus)
        },
        (error) => {
            console.log(error);
        })
    },[])
    // UseEffect pour retraiter le détail de chaque menu et pouvoir manipuler les données
    React.useEffect(()=>{
        let detailMenu = []
        lastMenus.map(truc => detailMenu.push(JSON.parse(truc.detail)))
    },[lastMenus])

    return(
        currentUser ?
        <CardComponent listOfMenu={lastMenus} currentUser={currentUser} />
        :
        <CardPublic listOfMenu={lastMenus} />
    )
}