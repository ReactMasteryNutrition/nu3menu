// Imports //
import React from 'react'
import { Box, Button, Flex, Grid, GridItem, IconButton, Image, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import { CloseIcon, LinkIcon } from '@chakra-ui/icons'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoFlash, IoPeople, IoStatsChart, IoTimer } from 'react-icons/io5'
import { toHoursAndMinutes } from '../../utils/HoursAndMinutes'
import DetailRecipeModalWithSpoon from './DetailRecipeModalWithSpoon'
import ButtonToAddRecipeWithSpoon from '../menuCreator/buttonToAddRecipeSpoon'
import { Link } from 'react-router-dom'
// Functions //

export default function CardRecipeWithSpoon({indexOfDay, categoryOfMeal, weekMenu, setWeekMenu, datas}) {
    // gestion ouverture et fermeture de la modal avec le detail de LA recette
    const { isOpen, onOpen, onClose } = useDisclosure()
    // stockage de l'object qui contient les recettes de l'API
    const recipesDatas = datas?.data?.results
    // stockage de LA recette que l'on souhaite voir en détail et peut-être ajouter au menu
    const [detailRecipe, setDetailRecipe] = React.useState({});
    // Ouverture de la modal après lui avoir envoyé les données de LA recette pour l'hydrater
    const openDetailModal = (truc) => {
        setDetailRecipe(truc)
        onOpen()
    }
    // Fermeture de la modal avec remise à 0 du détail de LA recette sinon les données persistes et sont visibles au prochain affichage
    const closeAndClear = () => {
        onClose()
        setDetailRecipe()
    }

    return(
        <Box w='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center' alignItems='center' paddingBottom='1rem' boxSizing='border-box' color='green.50'>
            {recipesDatas.map(recipe => {
                // on boucle sur l'ensemble des recettes afin d'afficher une Card par recette et on l'hydrate des données souhaitées
                return(
                    <Box key={recipe.id} w={['90%', 300]} mt='1.5em' marginX='0.5rem' p='0.5rem' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
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
                                <Image src={recipe.image} alt={recipe.title} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                            </GridItem>
                            <GridItem display='flex' alignItems='center' paddingY='0.5rem' area='title'>
                                <Tooltip label={recipe.title} placement='top'>
                                    <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' noOfLines={1}>{recipe.title}</Text>
                                </Tooltip>
                            </GridItem>
                            <GridItem area='stats' paddingLeft='0.5rem'>
                                <VStack spacing='0.5' align='left'>
                                    <IconContext.Provider value={{ size: '1.5rem', color: '#276749'}}>
                                        <Flex>
                                            <IoTimer/>
                                            <Text marginLeft='0.5rem'>{toHoursAndMinutes(recipe.readyInMinutes)}</Text>
                                        </Flex>
                                        <Flex>
                                            <IoPeople/>
                                            <Text marginLeft='0.5rem'>{recipe.servings}</Text>
                                        </Flex>
                                        <Flex>
                                            <IoFlash/>
                                            <Text marginLeft='0.5rem'>{recipe.nutrition.nutrients[0].amount.toFixed(2)} Kcal</Text>
                                        </Flex>
                                        <Flex>
                                            <IoStatsChart/>
                                            <Text marginLeft='0.5rem'>Glycemic Index : {recipe.nutrition.properties[0].amount}</Text>
                                        </Flex>
                                    </IconContext.Provider>
                                </VStack>
                            </GridItem>
                            <GridItem area='openDetails' display='flex' alignItems='end' justifyContent='end'>
                                <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                                    <IconButton aria-label='Details' icon={<IoEnter />} my='1rem' mx={['0', '0.5rem']} bgColor='gray.400' onClick={()=> openDetailModal(recipe)}/>
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
                        <ModalHeader textAlign={['center']}>{ detailRecipe?.title }</ModalHeader>
                        <ModalCloseButton onClick={()=>closeAndClear()}/>
                        <DetailRecipeModalWithSpoon detail={detailRecipe}/>
                        <ModalFooter flexDir={['column', 'row']}>
                            <ButtonToAddRecipeWithSpoon recipeToAdd={detailRecipe} onClose={onClose} index={indexOfDay} category={categoryOfMeal} weekMenu={weekMenu} setWeekMenu={setWeekMenu} />
                            <Link to={{ pathname: detailRecipe?.sourceUrl }} rel= "noreferrer noopener" target="_blank" >
                                <Button leftIcon={<LinkIcon/>}  w='100%' colorScheme='gray' color='gray.800' my='1rem' mx={['0', '0.5rem']}>How cook it ?</Button>
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