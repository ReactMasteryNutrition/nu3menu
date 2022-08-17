
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
    Text,
    useToast,
    useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import {ModalForgetPassword} from "../forgetPwd/Modal";
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../../firebase-config";


const FormRegister = () => {
    const [show, setShow] = useState(false)
    const { onClose, isOpen, onOpen } = useDisclosure()
    const [validation, setValidation] = useState("")
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const {register, signInWithGoogle, newCreateUserInFirestoreDatabase, verifyEmail, user, currentUser} = useAuth()
    const formRef = useRef();
    const toast = useToast()
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const removeInputs = el => {
        if(el && inputs.current.includes(el)){
            inputs.current.splice(inputs.current.indexOf(el), 1)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(inputs?.current[0]?.value === ""){
            setValidation("Veuillez indiquer un prénom !")
            return;
        }
        if(inputs?.current[1]?.value === ""){
            setValidation("Veuillez indiquer une adresse email !")
            return;
        }
        if((inputs?.current[2]?.value.length) < 6) {
            setValidation("6 characters min")
            return;
        }

        try {
            const credentials = await register(
                inputs?.current[1]?.value,
                inputs?.current[2]?.value,
            )
            const NewCreateUserInFirestoreDatabase = async (UserCredential) => {
                const userRef = doc(db, `users/${UserCredential.user.uid}`);
                const userData = getDoc(userRef);
                if (!userData.exists) { // si l'utilisateur n'existe pas dans la base de données
                    setDoc(userRef, {
                        displayName: inputs?.current[0]?.value || UserCredential.user.displayName,
                        email: inputs?.current[1]?.value || UserCredential.user.email,
                        uid: UserCredential.user.uid,
                        createdAt: new Date(),
                        updatedAt: serverTimestamp(),
                        isVerified: UserCredential.user.emailVerified
                    })
                }
            }
            NewCreateUserInFirestoreDatabase(credentials)
            const closeModal = () => {
                setValidation("");
                onClose();
                navigate("/")
            };
            setTimeout(closeModal, 2000);
            console.log(credentials)


        } catch (err) {
            console.log(err)
            setValidation(err.code)
            switch (err.code) {
                case "auth/email-already-in-use":
                    setValidation("Cette adresse email est déjà utilisée !")
                    break
                case "auth/invalid-email":
                    setValidation("Cette adresse email est invalide !")
                    break
                case "auth/weak-password":
                    setValidation("Le mot de passe doit contenir au moins 6 caractères !")
                    break
                default:
                    setValidation("Une erreur est survenue !")
                    break
            }
            if (user?.emailVerified === false) {
                setTimeout(() => {
                    toast({
                        description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                } , 3000);
            }
        }
    }

    const handleGoogleSignIn = async (UserCredential) => {
        try {
            signInWithGoogle().then((UserCredential) => {
                newCreateUserInFirestoreDatabase(UserCredential)
                verifyEmail(UserCredential, false)
                if (currentUser?.emailVerified === true) {
                    setTimeout(() => {
                        toast({
                            description: "Un e-mail de vérification vous a été envoyé !",
                            status: 'success',
                            duration: 4000,
                            isClosable: true,
                        })
                    } , 3000);
                    navigate('/')
                }
                console.log(user)
                console.log(verifyEmail)
                console.log(UserCredential)
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
            if (user?.emailVerified === false) {
                setTimeout(() => {
                    toast({
                        description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                } , 3000);
            }
        }
    }

    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? "17rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            <form ref={formRef} onSubmit={handleSubmit}>
                <FormControl isRequired marginBottom="1rem">
                    <Input placeholder='Prénom' bg='#f0fff4' color="#1A202C" name="displayName" ref={addInputs}/>
                </FormControl>
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
                        onClick={handleGoogleSignIn}
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
    const { login,
            signInWithGoogle,
            newCreateUserInFirestoreDatabase,
            verifyEmail,
            user
    } = useAuth()
    const { onClose, onOpen, isOpen } = useDisclosure()
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState("");
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const formRef = useRef();
    const toast = useToast()
    const inputs = useRef([]);

    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };
    const removeInputs = (el) => {
        if (el && inputs.current.includes(el)) {
            inputs.current.splice(inputs.current.indexOf(el), 1);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //const name = currentUser?.displayName === null ? inputs?.current[0]?.value : null
            const credentials = await login(
                inputs?.current[0]?.value,
                inputs?.current[1]?.value,
            );
            newCreateUserInFirestoreDatabase(credentials)
            // formRef.current.reset();
            if(user.emailVerified === false){
                verifyEmail(user.email)
                setValidation("Votre compte est en attente de validation")
            }
            setValidation("");
            console.log(credentials);
            console.log(user.emailVerified);
            navigate("/");
        } catch (err) {
            console.log(err)
            switch (err.code) {
                case "auth/account-exists-with-different-credential":
                    setValidation("Ce compte existe déjà avec une autre méthode de connexion")
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
                case "auth/email-invalid":
                    setValidation("E-mail invalide")
                    break;
                default:
                    setValidation("Erreur inconnue")
                    break;
            }
        }
    };

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
                <FormControl margin="1rem 0" textAlign='start'>
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

export { FormRegister, FormLogin }