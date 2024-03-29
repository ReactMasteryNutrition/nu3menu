// import
import * as React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Error404 from '../../pages/Error404';
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'
import {
    Box,
    Button,
    Divider,
    Heading,
    IconButton,
    Link,
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
const DetailRecipeModalWithSpoon = React.lazy(() =>
    import(/* webpackPrefetch: true */ "../Card/DetailRecipeModalWithSpoon")
);

// function
export default function MyDetailsMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let { menuId, favoriteId, allmenuId } = useParams()
    const [currentMenu, setCurrentMenu] = useState([])
    const [detailMenu, setDetailMenu] = useState([])
    const [detailRecipe, setDetailRecipe] = useState({})
    // get menu data
    useEffect(() => {
        const q = query(collection(db, 'menus'), where('idMenu', '==', menuId || favoriteId || allmenuId))
        let thisCurrentMenu = []
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                thisCurrentMenu.push(doc.data())
            })
            setCurrentMenu(thisCurrentMenu)
        })
    }, [allmenuId, favoriteId, menuId])
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

    return (
        currentMenu[0]?.idMenu ? (
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
                                                            <IconButton aria-label='Details' icon={<IoEnter />} my='1rem' mx={['0', '0.5rem']} bgColor='gray.800' onClick={() => openDetailModal(meal[1])} />

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
                                <Link href={detailRecipe?.sourceUrl} rel="noreferrer noopener" target="_blank" w='100%' my='1rem' mx={['0', '0.5rem']}>
                                    <Button leftIcon={<LinkIcon />} colorScheme='gray' color='gray.800' w='100%' _hover={{ textDecoration: 'none' }}>How cook it ?</Button>
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
        ) : <Error404 />
    )
}
