import { useAuth } from '../../../context/authContext'
import { ResponsiveWidth, ModalMyAccount } from '../../../utils/helper'
import { useState, useRef } from 'react'
import {
    Button,
    FormControl,
    Box,
    useToast,
    ModalHeader,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    FormLabel
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    reauthenticateWithCredential,
    reauthenticateWithPopup,
    GoogleAuthProvider,
    updateEmail,
    EmailAuthProvider,
    sendEmailVerification
} from 'firebase/auth'

const ModalEmail = () => {
    const { currentUser } = useAuth()
    const [passwordVerify, setPasswordVerify] = useState(false)
    const toast = useToast()
    const inputs = useRef([])
    const addData = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }
    const handlePassword = () => setPasswordVerify(!passwordVerify)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(inputs?.current[0]?.value && inputs?.current[1]?.value)) {
            return toast({
                description: "Veuillez remplir tous les champs !",
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
            updateEmail(currentUser, inputs?.current[1]?.value)
            toast({
                description: "Votre adresse e-mail a bien été modifié !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            sendEmailVerification(currentUser)
            if (currentUser?.emailVerified === true) {
                setTimeout(() => {
                    toast({
                        description: "Un e-mail de vérification vous a été envoyé !",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    })
                }, 3000);
            }
        } catch (error) {
            toast({
                description: "Il y a eu une erreur lors de la modification de votre adresse e-mail !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            }
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <ModalMyAccount
                    ariaLabel={"e-mail"}
                    header={<Box
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "20%"}
                        width='100%'
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >
                        <Image
                            src="./images/logo_nu3menu.svg" alt="Logo du site"
                            width={ResponsiveWidth() ? "15rem" : "18rem"}
                            margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 3rem auto'}
                        />
                        <ModalHeader
                            textAlign="center"
                            fontSize="1.5rem"
                            marginBottom="1rem"
                        >
                            Modifier mon adresse e-mail
                        </ModalHeader>
                    </Box>}
                    content={<Box
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "50%"}
                        width={ResponsiveWidth() ? null : '90%'}
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >
                        <FormControl>
                            <FormLabel>Veuillez-vous authentifier avec votre mot de passe</FormLabel>
                            <InputGroup size='md' marginBottom="1rem" >
                                <Input
                                    id='reauthentifyEmail'
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
                        </FormControl>
                        <FormControl marginBottom="1rem">
                            <FormLabel>Nouvelle adresse e-mail</FormLabel>
                            <Input type='email' bg='#f0fff4' color="#1A202C"
                                ref={addData}
                            />
                        </FormControl >
                    </Box>}
                    footer={
                        <Button
                            onClick={handleSubmit}
                            bg='#48bb78'
                            color="#f0fff4"
                            _hover={{ bgColor: "#a0aec0" }}
                            position={ResponsiveWidth() ? null : "absolute"}
                            left={ResponsiveWidth() ? null : "50%"}
                            top={ResponsiveWidth() ? null : "75%"}
                            width={ResponsiveWidth() ? null : "90%"}
                            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                        >Valider
                        </Button>}
                />
            </form>
        </Box>
    )
}

export default ModalEmail