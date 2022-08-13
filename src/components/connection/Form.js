
import { ResponsiveWidth } from "../../utils/helper"
import { useRef, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    Box,
    FormHelperText, useDisclosure
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'

function Text(props) {
    return null;
}

const FormRegister = () => {
    const [show, setShow] = useState(false)
    const { onClose } = useDisclosure()
    const [validation, setValidation] = useState("")
    const [authing, setAuthing] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const { register, signInWithGoogle, NewCreateUserInFirestoreDatabase } = useAuth();
    const formRef = useRef();
    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const removeInputs = el => {
        if (el && inputs.current.includes(el)) {
            inputs.current = inputs.current.filter(i => i !== el)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = inputs.current.every(i => i.validity.valid)
        if (inputs.current[0].value === "") {
            setValidation("Veuillez indiquer une adresse email")
            return;
        }
        if ((inputs.current[1].value.length) < 6) {
            setValidation("6 characters min")
            return;
        }
        try {
            const cred = await register(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            closeModal(onClose)
            navigate("/")

        } catch (err) {
            setValidation(err.message)
            switch (err.code) {
                case "auth/email-already-in-use":
                    setValidation("Cette adresse e-mail est déjà utilisée")
                    break;
                case "auth/invalid-email":
                    setValidation("Cette adresse e-mail n'est pas valide")
                    break;
                case "auth/weak-password":
                    setValidation("Le mot de passe doit contenir au moins 6 caractères")
                    break;
                default:
                    throw new Error("Erreur non prise en compte")
                    break;
            }
            //console.dir(err)
            // setError(err.message);
        }
    }

    const handleGoogle = () => {
        setAuthing(true)
        signInWithGoogle()
            .then((UserCredential) => {
                NewCreateUserInFirestoreDatabase(UserCredential)
                navigate("/")
            })
            .catch(err => {
                setValidation(err.code)
                switch (err.code) {
                    case "auth/account-exists-with-different-credential":
                        setValidation("Ce compte existe déjà avec un autre méthode de connexion")
                        break;
                    case "auth/invalid-credential":
                        setValidation("Ce compte n'existe pas")
                        break;
                    case "auth/operation-not-allowed":
                        setValidation("Opération non autorisée")
                        break;
                    case "auth/user-disabled":
                        setValidation("Ce compte est désactivé")
                        break;
                    case "auth/user-not-found":
                        setValidation("Ce compte n'existe pas")
                        break;
                    case "auth/wrong-password":
                        setValidation("Mauvais mot de passe")
                        break;
                    default:
                        setValidation("Erreur inconnue")
                        break;
                }
            })
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
                        onClick={handleGoogle}
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

const FormLogin = () => {
    const { login, signInWithGoogle, NewCreateUserInFirestoreDatabase } = useAuth();
    const { onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState("")
    const [authing, setAuthing] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const formRef = useRef();
    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };
    const removeInputs = (el) => {
        if (el && inputs.current.includes(el)) {
            inputs.current = inputs.current.filter(i => i !== el);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const cred = await login(
                inputs.current[0].value,
                inputs.current[1].value
            )
            //formRef.current.reset();
            setValidation("")
            closeModal(onClose)
            navigate("/")
        } catch (err) {
            setValidation(err.message)

        }
    }
    const handleGoogle = () => {
        setAuthing(true)
        signInWithGoogle()
            .then((UserCredential) => {
                NewCreateUserInFirestoreDatabase(UserCredential)
                navigate("/")
            })
            .catch(err => {
                setValidation(err.code)
                switch (err.code) {
                    case "auth/account-exists-with-different-credential":
                        setValidation("Ce compte existe déjà avec un autre méthode de connexion")
                        break;
                    case "auth/invalid-credential":
                        setValidation("Ce compte n'existe pas")
                        break;
                    case "auth/operation-not-allowed":
                        setValidation("Opération non autorisée")
                        break;
                    case "auth/user-disabled":
                        setValidation("Ce compte est désactivé")
                        break;
                    case "auth/user-not-found":
                        setValidation("Ce compte n'existe pas")
                        break;
                    case "auth/wrong-password":
                        setValidation("Mauvais mot de passe")
                        break;
                    default:
                        setValidation("Erreur inconnue")
                        break;
                }
            })
    }
    const closeModal = () => {
        setValidation("")
        onClose()
    }

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
                    <Input type='email' placeholder='E-mail' bg='#f0fff4' color="#1A202C" ref={addInputs} />
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
                        onClick={handleGoogle}
                    >
                        <AiOutlineGoogle size="20" />
                        <Box marginLeft='0.5rem'>Se connecter avec Google</Box>
                    </Button>
                </FormControl>
                <Text m={3} fontSize='sm' color='tomato'>{validation}</Text>
            </form>
        </Box>
    )
}

export { FormRegister, FormLogin }