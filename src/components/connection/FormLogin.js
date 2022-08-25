import { ResponsiveWidth } from "../../utils/helper"
import { useRef, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    Box,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import {ModalForgetPassword} from "../forgetPwd/Modal";
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../../firebase-config";
import {updateProfile} from "firebase/auth";

const FormLogin = () => {
    const { login, signInWithGoogle, newCreateUserInFirestoreDatabase, verifyEmail, user, updateProfile} = useAuth();
    const { onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState("")
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
        const closeModal = () => {
            onClose()
            navigate("/")
        }
        e.preventDefault();
        try {
            const cred = login(
                inputs.current[0].value,
                inputs.current[1].value
            )
            //formRef.current.reset();
            setValidation("")
            closeModal()
        } catch (err) {
            setValidation(err.code)
            switch (err.code) {
                case "auth/user-not-found":
                    setValidation("Cet utilisateur n'existe pas")
                    break;
                case "auth/wrong-password":
                    setValidation("Mot de passe incorrect")
                    break;
                case "auth/too-many-requests":
                    setValidation("Trop de tentatives de connexion")
                    break;
                case "auth/user-disabled":
                    setValidation("Cet utilisateur est désactivé")
                    break;
                case "auth/invalid-email":
                    setValidation("Adresse email invalide")
                    break;
                default:
                    setValidation("Erreur inconnue")
                    break;
            }
        }
    }
    const handleGoogleSignIn = async (UserCredential) => {
        try {
            signInWithGoogle().then((UserCredential) => {
                newCreateUserInFirestoreDatabase(UserCredential)
                navigate('/')
            })
        }
        catch (err) {
            console.log(err)
            setValidation(err.code)
            switch (err.code) {
                case "auth/account-exists-with-different-credential":
                    setValidation("Ce compte existe déjà avec un autre identifiant")
                    break;
                case "auth/credential-already-in-use":
                    setValidation("Cette identifiant est déjà utilisé")
                    break;
                case "auth/operation-not-allowed":
                    setValidation("Opération non autorisée")
                    break;
                case "auth/user-disabled":
                    setValidation("Cet utilisateur est désactivé")
                    break;
                case "auth/wrong-password":
                    setValidation("Le mot de passe est incorrect")
                    break;
                case "auth/email-already-in-use":
                    setValidation("Cet email est déjà utilisé")
                    break;
                case "auth/invalid-email":
                    setValidation("Cet email n'est pas valide")
                    break;
                default:
                    setValidation("Erreur inconnue")
                    break;
            }
        }
    }
    console.log(db)

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
                    <ModalForgetPassword/>
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
                        onClick={handleGoogleSignIn}
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

export default FormLogin