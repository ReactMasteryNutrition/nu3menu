
import { ResponsiveWidth } from "../../utils/helper"
import {useContext, useRef, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    Box,
    FormHelperText
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AuthContext } from '../context/authContext';
import {BsBookmarkFill} from "react-icons/bs";
import { UseAuth } from '../context/authContext'

const FormRegister = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { register } = UseAuth()
    console.log(register)

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? "17rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            {/*<FormControl isRequired marginBottom="1rem">
                <Input placeholder='Prénom' bg='#f0fff4' color="#1A202C"/>
            </FormControl>*/}
            <form onSubmit={handleSubmit}>
                <FormControl isRequired marginBottom="1rem">
                    <Input type='email' name='email' htmlFor="signUpEmail" ref={addInputs} placeholder='E-mail' bg='#f0fff4' color="#1A202C" />
                </FormControl >
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Mot de passe'
                        bg='#f0fff4'
                        isRequired
                        color="#1A202C"
                        name='password'
                    />
                    <InputRightElement width='4.5rem' >
                        <Box size='sm' ref={addInputs} bg='#f0fff4' onClick={handleClick}>
                            {show ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                        </Box>
                    </InputRightElement>
                </InputGroup>
                <FormControl margin="1rem 0">
                    <Button
                        type='submit'
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                    >
                        S'inscrire
                    </Button>
                </FormControl>
                <FormControl>
                    <Button
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                    >
                        <AiOutlineGoogle size="20" />
                        <Box marginLeft='0.5rem'>S'inscrire avec Google</Box>
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}

const FormLogin = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? "16rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            <FormControl isRequired marginBottom="1rem">
                <Input type='email' placeholder='E-mail' bg='#f0fff4' color="#1A202C" />
            </FormControl >
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Mot de passe'
                    bg='#f0fff4'
                    isRequired
                    color="#1A202C"
                />
                <InputRightElement width='4.5rem' >
                    <Box size='sm' bg='#f0fff4' onClick={handleClick}>
                        {show ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                    </Box>
                </InputRightElement>
            </InputGroup>
            <FormControl textAlign='start'>
                <FormHelperText>Mot de passe oublié ?</FormHelperText>
            </FormControl>
            <FormControl margin="1rem 0">
                <Button

                    width="100%"
                    bg="#48BB78"
                    _hover={{ bgColor: "#a0aec0" }}
                >
                    Se connecter
                </Button>
            </FormControl>
            <FormControl>
                <Button
                    width="100%"
                    bg="#48BB78"
                    _hover={{ bgColor: "#a0aec0" }}
                >
                    <AiOutlineGoogle size="20" />
                    <Box marginLeft='0.5rem'>Se connecter avec Google</Box>
                </Button>
            </FormControl>
        </Box>
    )
}

export { FormRegister, FormLogin }