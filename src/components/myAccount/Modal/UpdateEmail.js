import { useAuth } from '../../../context/authContext'
import { ModalMyAccount } from '../../../utils/helper'
import { useState, useRef } from 'react'
import {
    Button,
    FormControl,
    Box,
    useToast,
    Input,
    InputGroup,
    InputRightElement,
    FormLabel
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { reauthenticateWithCredential, updateEmail, EmailAuthProvider } from 'firebase/auth'

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
        e.preventDefault();
        const credential = EmailAuthProvider.credential(
            currentUser?.email,
            inputs?.current[0]?.value
        );
        try {
            await reauthenticateWithCredential(currentUser, credential)
            updateEmail(currentUser, inputs?.current[1]?.value)
            toast({
                description: "Votre adresse e-mail a bien été modifié !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "Il y a eu une erreur lors de la modification de votre adresse e-mail !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <ModalMyAccount
                    title={"e-mail"}
                    header={"Modifier mon adresse e-mail"}
                    content={<>
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
                                placeholder={currentUser?.email}
                                ref={addData}
                            />
                        </FormControl >
                    </>}
                    footer={
                        <Button
                            onClick={handleSubmit}
                            bg='#48bb78'
                            color="#f0fff4"
                            _hover={{ bgColor: "#a0aec0" }}
                        >Valider
                        </Button>}
                />
            </form>
        </Box>
    )
}

export default ModalEmail