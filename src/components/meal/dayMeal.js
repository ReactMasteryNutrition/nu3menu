import React from "react";
import { Box, Button, Center, Divider, Heading, Link, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure, VStack} from "@chakra-ui/react";
import { CloseIcon, LinkIcon } from '@chakra-ui/icons'
import { IoEnter } from 'react-icons/io5'
import Oneday from "./oneDay";
import DetailRecipeModalWithSpoon from "../Card/DetailRecipeModalWithSpoon"
import { db } from "../../firebase-config"
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import {useAuth} from "../../context/authContext"



const DayMeal = () =>{
  // gestion ouverture et fermeture de la modal avec le detail de LA recette
  const { isOpen, onOpen, onClose } = useDisclosure()
  // On vérifie que le user possède des menus favoris
  const [userHaveCurrentMenu, setUserHaveCurrentMenu] = React.useState(false)
  const [idCurrentMenu, setIdCurrentMenu] = React.useState("")
  const { currentUser } = useAuth()
  const thisUserRef = doc(db, "users", currentUser?.uid)
  getDoc(thisUserRef).then((doc)=>{doc.data().currentMenu && 
    setUserHaveCurrentMenu(true)
    setIdCurrentMenu(doc.data().currentMenu)
  })


  const [currentMenu,setCurrentMenu] = React.useState([])
  React.useEffect(()=>{
    if(userHaveCurrentMenu){
      const q = query(collection(db, 'menus'), where('idMenu', '==', idCurrentMenu))
      onSnapshot(q, (querySnapshot)=> {
        const thisCurrentMenu = []
        querySnapshot.forEach((doc)=> {
          thisCurrentMenu.push(doc.data())
        })
        setCurrentMenu(thisCurrentMenu)
      })
    }
  },[idCurrentMenu, userHaveCurrentMenu])

  const [detailMenu, setDetailMenu] = React.useState([])
  React.useEffect(()=>{
    let detailAParse = []
    currentMenu.map((item) => detailAParse.push(JSON.parse(item.detail)))
    setDetailMenu(detailAParse)
  },[currentMenu])

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
    userHaveCurrentMenu ? 
    <Box  w='100%' px='4rem' color={"green.50"}>
                <Center mb='2rem'>
                  <Heading as='h1' size='xl' >MENU OF THE WEEK</Heading>
                </Center>   
                <Divider/>
                <VStack>  
                  {
                    //console.log('LALLLALAA',detailMenu[0])
                    detailMenu[0] &&
                    Object.entries(detailMenu[0]).map(key => {
                      return (
                        <Stack w='100%' justifyContent='center'>
                          <Heading>{key[0]}</Heading>
                          <Stack w='100%' direction={['column', 'column', 'row' ]} justifyContent={['center', 'center', 'space-around']}>
                          {
                            Object.entries(key[1])?.map(meal => {
                              return (
                                //console.log(meal)
                                <Oneday
                                key={meal[0]}
                                categorykey={meal[0]}
                                sourceImg={meal[1]?.image}
                                title={meal[1]?.title}
                                urlData={meal[1]?.sourceUrl}
                                buttonToOpenModal={<Link isExternal my='1rem' mx={['0', '0.5rem']} onClick={()=> openDetailModal(meal[1])}><IoEnter /></Link>}
                              />
                                )
                            })
                          }
                        </Stack>
                        </Stack>
                      )
                    })

                  }
                </VStack>
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
        : 
      <Box color='green.50'>NO MENU</Box>
    
  )
}


export default DayMeal;