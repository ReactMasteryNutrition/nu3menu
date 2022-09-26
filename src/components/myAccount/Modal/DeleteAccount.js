import { useAuth } from '../../../context/authContext'
import { ResponsiveWidth } from '../../../utils/helper'
import {
    Button,
    useToast,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Image,
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
import { reauthenticateWithCredential, reauthenticateWithPopup, GoogleAuthProvider, EmailAuthProvider, deleteUser } from "firebase/auth"

const DeleteAccount = () => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const [passwordVerify, setPasswordVerify] = useState(false)
    const inputs = useRef([])
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    // add value in current object
    const addData = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const handlePassword = () => setPasswordVerify(!passwordVerify)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(inputs?.current[0]?.value)) {
            return toast({
                description: "Please fill in this field !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        // data for reauthentication
        const credential = EmailAuthProvider.credential(
            currentUser?.email,
            inputs?.current[0]?.value
        )
        // create a Google provider
        const provider = new GoogleAuthProvider()
        try {
            // reauthenticate directly on the site or with Google
            if (currentUser?.providerData[0]?.providerId !== 'google.com') {
                await reauthenticateWithCredential(currentUser, credential)
            } else {
                await reauthenticateWithPopup(currentUser, provider)
            }
            // delete the user account
            deleteUser(currentUser)
            // redirection to homepage
            navigate('/')
            toast({
                description: "Your account has been deleted !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "There was an error while deleting your account !",
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
                Delete my account
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg={ResponsiveWidth() ? "rgba(160, 174, 192, 0.5)" : "inherit"} />
                <ModalContent
                    bg="#1A202C"
                    color="#F0FFF4"
                    position={ResponsiveWidth() ? null : "fixed"}
                    minHeight={ResponsiveWidth() ? null : "100vh"}
                    minWidth={ResponsiveWidth() ? null : "100vw"}
                    borderRadius={ResponsiveWidth() ? null : 0}
                >
                    <Box
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "25%"}
                        width='100%'
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >
                        <Image
                            src="./images/logo_nu3menu.svg" alt="Site logo"
                            width={ResponsiveWidth() ? "15rem" : "18rem"}
                            margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 2rem auto'}
                        />
                        <ModalHeader textAlign="center" fontSize="1.5rem" marginBottom="1rem">
                            Delete my account
                        </ModalHeader>
                    </Box>
                    <ModalCloseButton
                        onClick={onClose}
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
                        borderTopRightRadius={ResponsiveWidth() ? null : 0}
                        bg="#48bb78"
                        cursor="pointer"
                        _hover={{ transform: ResponsiveWidth() ? "translate(-0.35rem, 0.4rem)" : null }}
                    />
                    <ModalBody>
                        <Box
                            position={ResponsiveWidth() ? null : "absolute"}
                            left={ResponsiveWidth() ? null : "50%"}
                            top={ResponsiveWidth() ? null : "50%"}
                            width={ResponsiveWidth() ? null : '90%'}
                            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                        >
                            <FormLabel>Please log in with your password</FormLabel>
                            <InputGroup size='md' marginBottom="1rem" >
                                <Input
                                    id='reauthentifyName'
                                    type={passwordVerify ? 'text' : 'password'}
                                    bg='#f0fff4'
                                    color="#1A202C"
                                    padding={ResponsiveWidth() ? null : '1.3rem 0 1.3rem 1rem'}
                                    ref={addData}
                                    aria-label='delete'
                                />
                                <InputRightElement width='4.5rem' padding={ResponsiveWidth() ? null : '1.3rem 0'}>
                                    <Box size='sm' bg='#f0fff4' onClick={handlePassword}>
                                        {passwordVerify ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={handleSubmit}
                            bg='#48bb78'
                            color="#f0fff4"
                            _hover={{ bgColor: "#a0aec0" }}
                            padding={ResponsiveWidth() ? null : '1.3rem 0'}
                            position={ResponsiveWidth() ? null : "absolute"}
                            left={ResponsiveWidth() ? null : "50%"}
                            top={ResponsiveWidth() ? null : "70%"}
                            width={ResponsiveWidth() ? null : "90%"}
                            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                        >Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    )
}

export default DeleteAccount