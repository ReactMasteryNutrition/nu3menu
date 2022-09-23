// Imports 
import { Box, Button, Grid, GridItem, Image, Text, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoStar, IoPin } from 'react-icons/io5'
import { writeTheDate } from '../../utils/HoursAndMinutes'
import { db } from "../../firebase-config"
import { getDoc, onSnapshot } from 'firebase/firestore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

// Functions
export default function CardComponent({ listOfMenu, currentUser }) {
    // Gestion du bouton Add/Remove from Favorite
    let location = window.location.pathname
    const navigate = useNavigate();

    // Fonction pour suivre un menu (Select it)
    const beOn = (idMenu) => {
        console.log('On lance Select it pour dire qu on va suivre ce menu')
        const currentMenuRef = doc(db, "users", currentUser?.uid)
        updateDoc(currentMenuRef, {
            currentMenu: idMenu
        });
    }
    // Fonction pour ajouter un menu en favori
    const addFavorite = (idMenu) => {
        console.log('On ajoute ce menu aux favoris')
        const favoriteRef = doc(db, "menus", idMenu)
        //console.log(favoriteRef)
        updateDoc(favoriteRef, {
            favorite: arrayUnion(currentUser?.uid)
        })
        const haveFavoriteRef = doc(db, "users", currentUser?.uid)
        updateDoc(haveFavoriteRef, {
            haveFavorite: true
        })
    }

    const removeFavorite = (idMenu) => {
        console.log('on cherche à supprimer un menu des favoris')
        const favoriteRef = doc(db, "menus", idMenu)
        updateDoc(favoriteRef, {
            favorite: arrayRemove(currentUser?.uid)
        })
        navigate("/favorite")
    }

    return (
        <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
        {listOfMenu.map(menu => {
            return(
                <Box key={listOfMenu.indexOf(menu)} w={['90%', 300]} mt='1.5em' marginX={['','2rem']} p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                    <Grid
                        templateAreas={[`"image image image image"
                                        "title title title title"
                                        "auteur auteur auteur auteur" 
                                        "linkDetail linkDetail linkDetail linkDetail"
                                        "date date date date"
                                        "fav fav fav fav" 
                                        "beOn beOn beOn beOn"`,
                                        `"image image image image"
                                        "title title title title"
                                        "auteur auteur auteur linkDetail"
                                        "date date date linkDetail"
                                        "fav fav beOn beOn"`]}
                            gridTemplateColumns='1fr 1fr 1.5fr 0.5fr'
                            w='100%'
                            gap='2'
                        >
                            <GridItem position='absolute' top='0' left='0' display='flex' alignItems='center' p='0.5rem' minW='33%' minH='20%' borderBottomRightRadius='full' color='green.50' bg='green.700' opacity='0.72'>
                                <IconContext.Provider value={{ color: '#F0FFF4', margin: '1rem', size: '2rem' }}>
                                    <IoStar />
                                    <Text pl='0.5rem' fontSize='lg'>5</Text>
                                </IconContext.Provider>
                            </GridItem>
                            <GridItem area='image' display='flex' justifyContent='center'>
                                <Image src={menu.cover} alt={menu.title} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md' />
                            </GridItem>
                            <GridItem area='title' display='flex' alignItems='center' paddingY='0.5rem' >
                                <Tooltip label={menu.title} placement='top'>
                                    <Text fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight='bold' noOfLines={1}>{menu.title}</Text>
                                </Tooltip>
                            </GridItem>
                            <GridItem area='auteur'>
                                <Text>Author : {menu.author && menu.author}</Text>
                            </GridItem>
                            <GridItem area='date'>
                                <Text fontSize='xs'>Created on : {writeTheDate(menu.dateCreation)}</Text>
                            </GridItem>
                            <GridItem area='linkDetail'>
                                <IconContext.Provider value={{ size: '3rem', color: '#276749' }}>
                                    <Tooltip label='See detail' placement='top' bg='green.700'>
                                        <Link to={`/${menu.idMenu}`}>
                                            <IoEnter />
                                        </Link>
                                    </Tooltip>
                                </IconContext.Provider>
                            </GridItem>
                            <GridItem area='fav'>
                                <IconContext.Provider value={{ color: '#276749' }}>
                                    {
                                        location === '/favorite' ?
                                        <Button leftIcon={<IoStar />} w='100%' color='green.700' bgColor='green.50' onClick={() => removeFavorite(menu.idMenu)}>
                                            Remove Fav
                                        </Button>
                                        :
                                        <Button leftIcon={<IoStar />} w='100%' color='green.700' bgColor='green.50' onClick={() => addFavorite(menu.idMenu)}>
                                            Add in Fav
                                        </Button>
                                    }
                                    
                                </IconContext.Provider>
                            </GridItem>
                            <GridItem area='beOn'>
                                <IconContext.Provider value={{ color: '#fff' }}>
                                    <Button leftIcon={<IoPin />} w='100%' color='green.50' bgColor='green.700' onClick={() => beOn(menu.idMenu)}>
                                        Select it
                                    </Button>
                                </IconContext.Provider>
                            </GridItem>
                        </Grid>
                    </Box>
                )
            })}
        </Box>
    )
}