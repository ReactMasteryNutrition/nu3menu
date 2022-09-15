// Imports //
import React from 'react';
import { Box, Grid, GridItem, Image, Link, Text, Tooltip } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoStar } from 'react-icons/io5'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from "../../firebase-config";
import { writeTheDate } from '../../utils/HoursAndMinutes';

// Functions //

export function CardMenu() {
    
    const [lastMenus, setLastMenus] = React.useState([])
    const [menuAsAnObject, setMenuAsAnObject]= React.useState([])
    //
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
    //
    React.useEffect(()=>{
        console.log('Last Menus : ', lastMenus)
        //const menuEnLocal = lastMenus
        let detailMenu = []
        lastMenus.map(truc => detailMenu.push(JSON.parse(truc.detail)))
        //menuEnLocal.map(truc => detailMenu.push(JSON.parse(truc.detail)))
        console.log('detailMenu [] : ', detailMenu)
    },[lastMenus])

    return(
        <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
        {lastMenus.map(menu => {
            return(
                <Box key={lastMenus.indexOf(menu)} w={['90%', 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                    <Grid
                        templateAreas={[`"image image image image"
                                        "title title title title"
                                        "auteur auteur auteur linkDetail"
                                        "date date date linkDetail"`]}
                        gridTemplateColumns='1fr 1fr 1.5fr 0.5fr'
                        w='100%'
                    >
                        <GridItem position='absolute' top='0' left='0' display='flex' alignItems='center' p='0.5rem' minW='33%' minH='20%' borderBottomRightRadius='full' color='green.50' bg='green.700' opacity='0.72'>
                            <IconContext.Provider value={{ color: '#F0FFF4', margin: '1rem', size: '2rem'}}>
                                <IoStar/>
                                <Text pl='0.5rem' fontSize='lg'>5</Text>
                            </IconContext.Provider>
                        </GridItem>
                        <GridItem area='image' display='flex' justifyContent='center'>
                            <Image src={menu.cover} alt={menu.title} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                        </GridItem>
                        <GridItem area='title' display='flex' alignItems='center' paddingY='0.5rem' >
                            <Tooltip label={menu.title} placement='top'>
                                <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' noOfLines={1}>{menu.title}</Text>
                            </Tooltip>
                        </GridItem>
                        <GridItem area='auteur'>
                            <Text>Author : {menu.author && menu.author}</Text>
                        </GridItem>
                        <GridItem area='date'>
                            <Text fontSize='xs'>Created on : {writeTheDate(menu.dateCreation)}</Text>
                        </GridItem>
                        <GridItem area='linkDetail'>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                <Link onClick={()=> console.log('Open detail of menu')}>
                                    <IoEnter/>
                                </Link>
                            </IconContext.Provider>
                        </GridItem>
                    </Grid>
                </Box>
            )
        })}
    </Box>
    )
}