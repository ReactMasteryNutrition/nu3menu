import { useAuth } from '../../../context/authContext'
import { ResponsiveWidth } from '../../../utils/helper'
import {
    Button,
    useToast,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { reauthenticateWithCredential, EmailAuthProvider, deleteUser } from "firebase/auth"

const DeleteAccount = () => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const [passwordVerify, setPasswordVerify] = useState(false)
    const toast = useToast()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const inputs = useRef([])
    const addData = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }
    const handlePassword = () => setPasswordVerify(!passwordVerify)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const credential = EmailAuthProvider.credential(
            currentUser?.email,
            inputs?.current[0]?.value
        );
        try {
            await reauthenticateWithCredential(currentUser, credential);
            deleteUser(currentUser)
            navigate('/')
            toast({
                description: "Votre compte a bien été supprimé !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "Il y a eu une erreur lors de la suppression de votre compte !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }
    return (
        <Box>
             <Button
                onClick={onOpen}
                padding={ResponsiveWidth() ? "0.5rem 7rem" : "0.5rem 1rem"}
                width="100%"
                marginTop="6rem"
                bg="red"
                color="#f0fff4"
                _hover={{ bgColor: "#a0aec0" }}
            >
                Supprimer mon compte
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg="rgba(160, 174, 192, 0.5)" />
                <ModalContent
                    bg="#1A202C"
                    color="#F0FFF4"
                    width={ResponsiveWidth() ? null : "90%"}
                >
                    <ModalHeader>Supprimer mon compte</ModalHeader>
                    <ModalCloseButton
                        position="absolute"
                        right="0"
                        top="0"
                        transition={ResponsiveWidth() ? "all 0.25s ease" : null}
                        margin={ResponsiveWidth() ? "-0.5rem -0.4rem 0 0" : null}
                        padding="0.25rem 0.5rem"
                        borderRadius={ResponsiveWidth() ? "0.5rem" : null}
                        borderBottomRightRadius={ResponsiveWidth() ? null : 0}
                        borderBottomLeftRadius={ResponsiveWidth() ? 'null' : "1rem"}
                        borderTopLeftRadius={ResponsiveWidth() ? null : 0}
                        bg="#48bb78"
                        cursor="pointer"
                        _hover={{
                            transform: ResponsiveWidth() ? "translate(-0.35rem, 0.4rem)" : null
                        }}
                    />
                    <ModalBody>
                        <FormLabel>Veuillez-vous authentifier avec votre mot de passe</FormLabel>
                        <InputGroup size='md' marginBottom="1rem" >
                            <Input
                                id='reauthentifyName'
                                type={passwordVerify ? 'text' : 'password'}
                                bg='#f0fff4'
                                color="#1A202C"
                                ref={addData}
                            />
                            <InputRightElement width='4.5rem' >
                                <Box size='sm' bg='#f0fff4' onClick={handlePassword}>
                                    {passwordVerify ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={handleSubmit}
                            bg='#48bb78'
                            color="#f0fff4"
                            _hover={{ bgColor: "#a0aec0" }}
                        >Valider
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    )
}

export default DeleteAccount