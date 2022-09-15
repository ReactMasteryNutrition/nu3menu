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
    const falseResponseApi = [
        {
                title: 'Titre Menu 1',
                gradeReview: '2.2',
                imageUrl: 'https://st.depositphotos.com/1005573/2814/i/600/depositphotos_28144633-stock-photo-health-food-platter.jpg',
                imageAlt: 'Menu 1',
                description: 'Lorem ipsum dolor sit amet. Et velit doloremque et ullam corrupti qui dolores voluptas. Fugit debitis aut temporibus omnis est quisquam animi et exercitationem possimus et praesentium quam.',
        },
        {
                title: 'Titre Menu 2',
                gradeReview: '4.2',
                imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/29094727/poisson-tout-en-un-au-four-600x600.jpeg',
                imageAlt: 'Menu 2',
                description: 'In sint dolor rem voluptatem molestiae ea quas distinctio et nemo obcaecati quo doloremque voluptas. Et numquam sequi ut voluptates ipsam et blanditiis nobis qui atque nihil.',
        },
        {
                title: 'Titre Menu 3',
                gradeReview: '4.4',
                imageUrl: 'https://www.bistrot-mimi-restaurant-marseille.com/media/cache/l600/websites/3611a381e0faf4e9115db6db166f9810/img/image01_20220210112914.jpg',
                imageAlt: 'Menu 3',
                description: 'Qui adipisci eveniet et corrupti exercitationem et autem fuga ut saepe mollitia ad eligendi neque aut deleniti blanditiis. Eos voluptate voluptatem eum maiores dolor quo eaque possimus.',
        },
        {
                title: 'Titre Menu 4',
                gradeReview: '3.3',
                imageUrl: 'https://assets.afcdn.com/album/D20191108/phalbm25850964.jpg',
                imageAlt: 'Menu 4',
                description: 'Ab galisum obcaecati sit ratione quisquam in beatae necessitatibus et dignissimos suscipit non dolore vero. In natus quod est maiores necessitatibus est sint possimus est consequatur aliquid rem recusandae dicta!',
        },
        {
            title: 'Titre Menu 5',
            gradeReview: '4.1',
            imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/3/2020/09/16091448/gratin-dauphinois-a-la-viande-a-fondue-600x600.jpg',
            imageAlt: 'Menu 5',
            description: 'Quo nesciunt nemo aut facilis sunt et sint voluptates ut quasi voluptas eos aliquam molestiae et illo repellendus. Et galisum magni sit nisi cumque ex cumque corporis.',
        },
        {
            title: 'Titre Menu 6',
            gradeReview: '4.4',
            imageUrl: 'https://www.sublimeurs.fr/wp-content/uploads/saisons-cuisine.jpg',
            imageAlt: 'Menu 6',
            description: 'Eum voluptas voluptas sed pariatur aperiam rem veniam beatae quo Quis libero et quia nobis. Aut voluptates architecto hic voluptas maxime non sint voluptas cum vero fugiat et itaque fugit!',
        },
    ]
    //
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
            const testArray = lastPublicMenus.sort()
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

        //Lecture de l'auteur

    },[lastMenus])

    return(
        // <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
        //     {falseResponseApi.map(recipe => {
        //         return(
        //             <Box key={falseResponseApi.indexOf(recipe)} w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
        //                 <IconContext.Provider value={{ color: '#F0FFF4', margin: '1rem', size: '2rem'}}>
        //                     <Box position='absolute' top='0' left='0' display='flex' alignItems='center' p='0.5rem' minW='33%' minH='20%' borderBottomRightRadius='full' color='green.50' bg='green.700' opacity='0.72'>
        //                         <IoStar/>
        //                         <Text pl='0.5rem' fontSize='lg'>{recipe.gradeReview}</Text>
        //                     </Box>
        //                 </IconContext.Provider>
        //                 <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
        //                     <Box display='flex' flexDirection={['row', 'column', 'column', 'column']}>
        //                         <Image src={recipe.imageUrl} alt={recipe.imageAlt} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
        //                         <Box>
        //                             <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center'>{recipe.title}</Text>
        //                             <Text noOfLines={2} ml={['0.5rem', 0]}>{recipe.description}</Text>
        //                             <Box display='flex' justifyContent='right'>
        //                                 <Link>
        //                                     <IoEnter/>
        //                                 </Link>
        //                             </Box>
        //                         </Box>
        //                     </Box>
        //                 </IconContext.Provider>
        //             </Box>
        //         )
        //     })}
        // </Box>
        <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
        {lastMenus.map(menu => {
            // let author = readTheAuthor(menu.idCreator)
            // console.log(author)
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
                    {/* <IconContext.Provider value={{ color: '#F0FFF4', margin: '1rem', size: '2rem'}}>
                        <Box position='absolute' top='0' left='0' display='flex' alignItems='center' p='0.5rem' minW='33%' minH='20%' borderBottomRightRadius='full' color='green.50' bg='green.700' opacity='0.72'>
                            <IoStar/>
                            <Text pl='0.5rem' fontSize='lg'>5</Text>
                        </Box>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                        <Box display='flex' flexDirection={['row', 'column', 'column', 'column']}>
                            <Image src={menu.cover} alt={menu.title} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                            <Box>
                                <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center' noOfLines={1} maxW='100%'>{menu.title}</Text>
                                <Text noOfLines={2} ml={['0.5rem', 0]}>{recipe.description}</Text>
                                <Box display='flex' justifyContent='right'>
                                    <Link>
                                        <IoEnter/>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </IconContext.Provider> */}
                </Box>
            )
        })}
    </Box>
    )
}