import React from "react";
import { Box, Button, Center, Divider, Heading, HStack, Link, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure, VStack} from "@chakra-ui/react";
import { CloseIcon, LinkIcon } from '@chakra-ui/icons'
import { IoEnter } from 'react-icons/io5'
import Oneday from "./oneDay";
import DetailRecipeModal from "../Card/DetailRecipeModal"
import DetailRecipeModalWithSpoon from "../Card/DetailRecipeModalWithSpoon";



const DayMeal = () =>{
  // gestion ouverture et fermeture de la modal avec le detail de LA recette
  const { isOpen, onOpen, onClose } = useDisclosure()
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

  let week =  localStorage.getItem('week')
  let weekParse = JSON.parse(week)
  const keyWeek = Object.keys(weekParse)

  console.log(weekParse)

  //console.log(`${keyWeek} voila les clef`)
  //console.log(`teste recupération week  ${week}`)
  //console.log(`${weekParse.lundi.matin.data.recipe.label} on est parser`)
      return(
          <Box  w='100%' p={4} color={"green.50"}>
            <Center>
              <Heading as='h1' size='xl' mb='2rem'>MENU DE LA SEMAINE</Heading>
            </Center>   
            <Divider/>      
              {
                Object.entries(weekParse).map(entry => {
                  //console.log(entry)
                  return(
                    <>
                      <Center mt='2rem'>
                      <VStack>
                        <Heading>{entry[0]}</Heading>
                        <Stack w='100%' direction={['column', 'row' ]} spacing={'24px'}>
                        {Object.entries(entry[1]).map(meal => {
                          //console.log(meal)
                          return(
                            <Oneday
                              categorykey={meal[0]}
                              sourceImg={meal[1]?.image}
                              title={meal[1]?.title}
                              urlData={meal[1]?.sourceUrl}
                              buttonToOpenModal={<Link isExternal my='1rem' mx={['0', '0.5rem']} onClick={()=> openDetailModal(meal[1])}><IoEnter /></Link>}
                            />
                          )
                          })}
                        </Stack>
                      </VStack>
                      </Center>
                      <Divider mt='1rem'/>
                    </>
                  )
                    
                }
                )
              }
              {
                detailRecipe != null ?
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='xl'>
                    <ModalOverlay />
                    <ModalContent bg='gray.800' color='green.50'>
                    <ModalHeader textAlign={['center']}>{ detailRecipe?.title }</ModalHeader>
                    <ModalCloseButton onClick={()=>closeAndClear()}/>
                    <DetailRecipeModalWithSpoon detail={detailRecipe}/>
                    <ModalFooter flexDir={['column', 'row']}>
                        <Link href={detailRecipe?.sourceUrl} isExternal w='100%' my='1rem' mx={['0', '0.5rem']}>
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


export default DayMeal;