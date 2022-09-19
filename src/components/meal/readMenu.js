import React from "react";
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from "../../firebase-config";
import { Box, Text } from "@chakra-ui/react";


const ReadMenu = () => {
    const [menuAParser, setMenuAParser] = React.useState([])
    const [menuStructure, setMenuStructure] = React.useState({
        day: '',
        matin: '',
        midi: '',
        diner: ''
    })

    React.useEffect(() => {
        const response = query(collection(db, 'menus'));
        const fetchMenus = onSnapshot(
            response,
            (snapshot) => {
                const docs = [];
                snapshot.forEach((item) => {
                    docs.push(item.data().detail);
                });
                const detailMenu = docs
                let detailAParse = []
                detailMenu?.map((item) => detailAParse?.push(JSON.parse(item)))
                setMenuAParser(detailAParse);
            },
            (error) => {
                console.log(error);
            }
        );
        //return () => fetchMenus();
    }, []);
    console.log('les munu a parse', menuAParser)





    return (
        <Box bg={'green.50'}>
            c'est une div sauvage
            <Text>{menuAParser[0]?.Lundi?.Matin?.id}</Text>
            <Text> {menuAParser[0]?.Lundi?.Matin?.image} </Text>
            <Text>{menuAParser[0]?.Lundi?.Matin?.sourceUrl} </Text>
            <Text>{menuAParser[0]?.Lundi?.Matin?.title}</Text>
        </Box>
    )
}

export default ReadMenu;