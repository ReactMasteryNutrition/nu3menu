import React from "react";
import { Heading, Flex, Text, Image, Button, Link, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { IoEnter } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib/esm/iconContext';


const Oneday = ({ kiyWeek, categorykey, sourceImg, title, urlData }) => {

    //const { isOpen, onOpen, onClose } = useDisclosure()

    //const openModal = () =>{
      //  onOpen()
    //}
//onClick={() => openModal}
    return (
        <>
        
            <Flex direction={'column'} >
                <Heading as='h3' size='xl'> {kiyWeek}</Heading>
                <Text>{categorykey}</Text>
                <Image w={'100%'} src={sourceImg} alt="rimage" />
                <Text>{ title }</Text>

                <Flex flexDir={['column', 'row']} alignItems={'center'}>
                    <Link href={urlData} isExternal w='100%' my='1rem' mx={['0', '0.5rem']}>
                        <Button leftIcon={<LinkIcon />} w={'100%'}>How cook it ?</Button>
                    </Link>
                    <IconContext.Provider value={{ size: '3rem', color: '#276749'}}>
                    <Link isExternal w='100%' my='1rem' mx={['0', '0.5rem']}>
                        <IoEnter />
                    </Link>
                    </IconContext.Provider>
                </Flex>
            </Flex>

           

           {/* <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='xl'>
                <ModalOverlay />
                <ModalContent bg='gray.800' color='green.50'>
                    <ModalHeader textAlign={['center']}>{detailRecipe?.data?.recipe?.label}</ModalHeader>
                    <ModalCloseButton onClick={() => onClose()} />
                    <DetailRecipeModal detail={detailRecipe} />
                    <ModalFooter flexDir={['column', 'row']}>
                        <Link href={detailRecipe?.data?.recipe?.url} isExternal w='100%' my='1rem' mx={['0', '0.5rem']}>
                            <Button leftIcon={<LinkIcon />} w='100%' colorScheme='gray' color='gray.800' onClick={() => console.log('On va voir la recette')}>How cook it ?</Button>
                        </Link>
                        <Button leftIcon={<CloseIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='red' onClick={() => closeAndClear()}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
    </Modal>*/}
        </>
    )
}

export default Oneday;