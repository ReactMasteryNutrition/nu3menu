// Imports //
import React from 'react'
import { Box, Button, Flex, Grid, GridItem, Image, Link, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import { CloseIcon, LinkIcon } from '@chakra-ui/icons'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoFlash, IoPeople, IoTimer } from 'react-icons/io5'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
import DetailRecipeModal from './DetailRecipeModal'
import ButtonToAddRecipe from '../menuCreator/buttonToAddRecipe'
// Functions //

export default function CardRecipe({datas, indexOfDay, categoryOfMeal, weekMenu, setWeekMenu}) {
    // gestion ouverture et fermeture de la modal avec le detail de LA recette
    const { isOpen, onOpen, onClose } = useDisclosure()
    // stockage de l'object qui contient les recettes de l'API
    const recipesDatas = datas?.data?.hits
    // stockage de LA recette que l'on souhaite voir en détail et peut-être ajouter au menu
    const [detailRecipe, setDetailRecipe] = React.useState({});
    // Ouverture de la modal après lui avoir envoyé les données de LA recette pour l'hydrater
    const openDetailModal = (truc) => {
        console.log(`Ce qu'on met dans la modal : `)
        console.log(truc)
        setDetailRecipe(truc)
        onOpen()
    }
    // Fermeture de la modal avec remise à 0 du détail de LA recette sinon les données persistes et sont visibles au prochain affichage
    const closeAndClear = () => {
        onClose()
        setDetailRecipe()
    }

    return(
        <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box'>
            {recipesDatas.map(recipe => {
                // on boucle sur l'ensemble des recettes afin d'afficher une Card par recette et on l'hydrate des données souhaitées
                return(
                    <Box key={recipe._links.self.href} w={[280, 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                    <Grid 
                        templateAreas={[`"image image stats stats"
                                        "title title title openDetails"`, 
                                        `"image image image image"
                                        "title title title title"
                                        "stats stats stats openDetails"`]}
                        gridTemplateColumns='1fr 1fr 1.5fr 0.5fr'
                        w='100%'
                    >
                        <GridItem area='image' display='flex' justifyContent={['start', 'center']}>
                            <Image src={recipe.recipe.image} alt={recipe.recipe.label} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                        </GridItem>
                        <GridItem display='flex' alignItems='center' paddingY='0.5rem' area='title'>
                            <Tooltip label={recipe.recipe.label} placement='top'>
                                <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' noOfLines={1}>{recipe.recipe.label}</Text>
                            </Tooltip>
                        </GridItem>
                        <GridItem area='stats' paddingLeft='0.5rem'>
                            <VStack spacing='0.5' align='left'>
                                <IconContext.Provider value={{ size: '1.5rem', color: '#276749'}}>
                                    <Flex>
                                        <IoTimer/>
                                        <Text marginLeft='0.5rem'>{toHoursAndMinutes(recipe.recipe.totalTime)}</Text>
                                    </Flex>
                                    <Flex>
                                        <IoPeople/>
                                        <Text marginLeft='0.5rem'>{recipe.recipe.yield}</Text>
                                    </Flex>
                                    <Flex>
                                        <IoFlash/>
                                        <Text marginLeft='0.5rem'>{recipe.recipe.calories.toFixed(2)} Kcal</Text>
                                    </Flex>
                                </IconContext.Provider>
                            </VStack>
                        </GridItem>
                        <GridItem area='openDetails' display='flex' alignItems='end' justifyContent='end'>
                            <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                <Link onClick={()=> openDetailModal(recipe)}>
                                    <IoEnter/>
                                </Link>
                            </IconContext.Provider>
                        </GridItem>
                    </Grid>
                    </Box>
                )
            })}
            { detailRecipe != null ?
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='xl'>
                    <ModalOverlay />
                    <ModalContent bg='gray.800' color='green.50'>
                    <ModalHeader textAlign={['center']}>{ detailRecipe?.recipe?.label }</ModalHeader>
                    <ModalCloseButton onClick={()=>closeAndClear()}/>
                    <DetailRecipeModal detail={detailRecipe}/>
                    <ModalFooter flexDir={['column', 'row']}>
                        <ButtonToAddRecipe index={indexOfDay} category={categoryOfMeal} weekMenu={weekMenu} setWeekMenu={setWeekMenu} recipeToAdd={detailRecipe} onClose={onClose}/>
                        <Link href={detailRecipe?.recipe?.url} isExternal w='100%' my='1rem' mx={['0', '0.5rem']}>
                            <Button leftIcon={<LinkIcon/>}  w='100%' colorScheme='gray' color='gray.800' onClick={()=> console.log('On va voir la recette')}>How cook it ?</Button>
                        </Link>
                        <Button leftIcon={<CloseIcon/>} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='red' onClick={()=>closeAndClear()}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal> : null
            }
        </Box>
    )
}