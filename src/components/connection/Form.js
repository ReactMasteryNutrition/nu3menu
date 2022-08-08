
import { ResponsiveWidth } from "../../utils/helper"
import {useLayoutEffect, useRef, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    Box,
    FormHelperText, useDisclosure, Text, Spinner
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import {BsBookmarkFill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import {setDoc} from "firebase/firestore";
import {user} from "../../firebase-config";
import {UserCredential} from "firebase/auth";
import {NewCreateUserInFirestoreDatabase} from "../context/authContext";

const FormRegister = () => {
    const { register } = useAuth()
    const navigate = useNavigate()
    const [validation, setValidation] = useState("");
    const [show, setShow] = useState(false)
    const { onClose } = useDisclosure()
    const handleClick = () => setShow(!show)

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

     const handleSubmit = async (e) => {
        e.preventDefault();
        if((inputs.current[1].value.length) < 6) {
            setValidation("6 characters min")
            return;
        }

        try {
            const cred = await register(
                inputs.current[0].value,
                inputs.current[1].value
            )
            .then (authUser => {
                return setDoc(user(authUser.user.uid), {
                    email: inputs.current[0].value,
                    createdAt: new Date()
                })
                console.log(authUser)
            })
            formRef.current.reset();
            setValidation("");
            console.log(cred)
        }

        catch (err) {
            setValidation("Wopsy, email already used")
        }
    }

    const closeModal = () => {
        setValidation("")
        onClose()
    }

    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? "17rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            {/* <FormControl isRequired marginBottom="1rem">
                <Input placeholder='Prénom' bg='#f0fff4' color="#1A202C"/>
            </FormControl> */}
            <form ref={formRef} onSubmit={handleSubmit}>
                <FormControl isRequired marginBottom="1rem">
                    <Input type='email' placeholder='E-mail' bg='#f0fff4' color="#1A202C" name="email" ref={addInputs} />
                </FormControl >
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Mot de passe'
                        bg='#f0fff4'
                        isRequired
                        color="#1A202C"
                        name="password"
                        ref={addInputs}
                    />
                    <InputRightElement width='4.5rem' >
                        <Box size='sm' bg='#f0fff4' onClick={handleClick}>
                            {show ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                        </Box>
                    </InputRightElement>
                </InputGroup>
                <FormControl margin="1rem 0">
                    <Button
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                        onClick={handleSubmit}
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
                <Text m={3} fontSize='sm' color='tomato'>{validation}</Text>
            </form>
        </Box>
    )
}

const FormLogin = ({withWhat}) => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const { onClose } = useDisclosure()
    const [validation, setValidation] = useState("");
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const {loading , setLoading} = useAuth()
    const [authing, setAuthing] = useState(false)
    const { signInWithGoogle } = useAuth()
    const btnRef = useRef(null)

    useLayoutEffect(() => {
        setTimeout(() => {
            setLoading(false)
        } , 1000)

        return () => {
            setAuthing(false)
            setLoading(true)
        }
    }, [])

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };
    const formRef = useRef();

    const handleGoogle = () => {
        setAuthing(true)
        switch (true) {
            case "google":
                signInWithGoogle().then((cred: UserCredential) => {
                    NewCreateUserInFirestoreDatabase(cred)
                    console.log(cred)
                    navigate("/")
                }).catch(err => {
                    console.log(err)
                    setAuthing(false)
                })
                break;
            default:
                break;

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const cred = await login(
                inputs.current[0].value,
                inputs.current[1].value
            );
            // formRef.current.reset();
            setValidation("");
            console.log(cred);
            onClose();
            navigate("/");
        } catch {
            setValidation("Wopsy, email and/or password incorrect")
        }
    };

    const closeModal = () => {
        setValidation("");
        onClose();
    };


    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? "16rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            <form ref={formRef} onSubmit={handleSubmit}>
                <FormControl isRequired marginBottom="1rem">
                    <Input type='email' placeholder='E-mail' bg='#f0fff4' color="#1A202C" ref={addInputs} name="email"/>
                </FormControl >
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Mot de passe'
                        bg='#f0fff4'
                        isRequired
                        color="#1A202C"
                        ref={addInputs}
                        name="password"
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
                        onClick={handleSubmit}
                    >
                        Se connecter
                    </Button>
                </FormControl>
                <FormControl>
                        <Button
                            width="100%"
                            bg="#48BB78"
                            _hover={{ bgColor: "#a0aec0" }}
                            onClick={() => handleGoogle()}
                        >
                            <AiOutlineGoogle size="20" />
                            <Box marginLeft='0.5rem'>Se connecter avec Google</Box>
                            { loading && <Spinner /> }
                            { !authing && !loading && <FormLogin withWhat='google' setAuthing={setAuthing} /> }
                            { authing && <Spinner /> }
                        </Button>
                    </FormControl>
                <Text m={3} fontSize='sm' color='tomato'>{validation}</Text>
            </form>
        </Box>
    )
}

export { FormRegister, FormLogin }