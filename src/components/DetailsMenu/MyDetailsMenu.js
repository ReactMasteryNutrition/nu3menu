// import
import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { Link } from 'react-router-dom'
import {
    Box,
    Button,
    Divider,
    Heading,
    IconButton,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
    VStack
} from '@chakra-ui/react'
import { CloseIcon, LinkIcon } from '@chakra-ui/icons'
import { IoEnter } from 'react-icons/io5'
import Oneday from '../meal/oneDay'
import DetailRecipeModalWithSpoon from '../Card/DetailRecipeModalWithSpoon'
// function
export default function MyDetailsMenu(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    let { menuId } = useParams()
    const [currentMenu, setCurrentMenu] = useState([])
    const [detailMenu, setDetailMenu] = useState([])
    const [detailRecipe, setDetailRecipe] = useState({})
    // get menu data
    useEffect(() => {
        const q = query(collection(db, 'menus'), where('idMenu', '==', menuId))
        let thisCurrentMenu = []
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                thisCurrentMenu.push(doc.data())
            })
            setCurrentMenu(thisCurrentMenu)
        })
    }, [menuId])
    // parsed menu meal
    useEffect(() => {
        let detailAParse = []
        currentMenu.map((item) => detailAParse.push(JSON.parse(item.detail)))
        setDetailMenu(detailAParse)
    }, [currentMenu])
    const openDetailModal = (truc) => {
        setDetailRecipe(truc)
        onOpen()
    }
    // clear data recipe
    const closeAndClear = () => {
        setDetailRecipe()
        onClose()
    }
    //
    
    return (
        menuId ? (
            <Box w='100%' px='4rem' color={"green.50"}>
                <VStack mb='2rem' textAlign='center'>
                    <Heading as='h1' size='xl' >{currentMenu[0]?.title}</Heading>
                    <Text>Created by : {currentMenu[0]?.author}</Text>
                    {/* <Text>{writeTheDate(currentMenu[0]?.dateCreation)}</Text> */}
                </VStack>
                <Divider />
                <VStack>
                    {detailMenu[0] &&
                        Object.entries(detailMenu[0]).map(keyNumber => {
                            return (
                                <Stack w='100%' justifyContent='center' key={`${keyNumber[0]}${Math.floor(Math.random() * 100)}`}>
                                    <Heading>{keyNumber[0]}</Heading>
                                    <Stack
                                        w='100%'
                                        direction={['column', 'column', 'row']}
                                        justifyContent={['center', 'center', 'space-around']}>
                                        {
                                            Object.entries(keyNumber[1])?.map(meal => {
                                                return (
                                                    <Oneday
                                                        key={`${keyNumber[0]}${meal[0]}`}
                                                        categorykey={meal[0]}
                                                        sourceImg={meal[1]?.image}
                                                        title={meal[1]?.title}
                                                        urlData={meal[1]?.sourceUrl}
                                                        buttonToOpenModal={
                                                            <IconButton aria-label='Details' icon={<IoEnter />} my='1rem' mx={['0', '0.5rem']} bgColor='gray.800' onClick={() => openDetailModal(meal[1])}/>

                                                        }

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
                {detailRecipe != null ?
                    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='xl'>
                        <ModalOverlay />
                        <ModalContent bg='gray.800' color='green.50'>
                            <ModalHeader textAlign={['center']}>{detailRecipe?.title}</ModalHeader>
                            <ModalCloseButton onClick={() => closeAndClear()} />
                            <DetailRecipeModalWithSpoon detail={detailRecipe} />
                            <ModalFooter flexDir={['column', 'row']}>
                                <Link to={ detailRecipe?.sourceUrl } target="_blank">
                                    <Button leftIcon={<LinkIcon/>}  w='100%' colorScheme='gray' color='gray.800' my='1rem' mx={['0', '0.5rem']}>How cook it ?</Button>
                                </Link>
                                <Button
                                    leftIcon={<CloseIcon />}
                                    w='100%'
                                    my='1rem'
                                    mx={['0', '0.5rem']}
                                    colorScheme='red'
                                    onClick={() => closeAndClear()}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal> : null
                }
            </Box>
        ) :
            <Navigate to='*' />
    )
}
