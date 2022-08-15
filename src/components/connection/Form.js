
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
    useToast,
    FormHelperText,
    useDisclosure,
    Text,
    Spinner
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import {BsBookmarkFill, BsFillPersonPlusFill} from "react-icons/bs";
import {useNavigate, Link, NavLink as RouterLink} from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import {setDoc} from "firebase/firestore";
import {user} from "../../firebase-config";
import {ModalForgetPassword} from "../forgetPwd/Modal";
import {FormForgetPassword} from "../forgetPwd/Form";


const FormRegister = () => {
    const [show, setShow] = useState(false)
    const { onClose, isOpen, onOpen } = useDisclosure()
    const [validation, setValidation] = useState("")
    const [authing, setAuthing] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const { register, signInWithGoogle, NewCreateUserInFirestoreDatabase, sendEmailVerification, currentUser } = useAuth()
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
        const isValid = inputs.current.every(input => input.isValid());
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
            const cred = await register(
                inputs?.current[0]?.value,
                inputs?.current[1]?.value,
                inputs?.current[2]?.value
            )
            await NewCreateUserInFirestoreDatabase(cred.user.uid, cred.inputs?.current[0]?.value, inputs?.current[1]?.value)
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
            //formRef.current.reset();
            setValidation("");
            onClose();
            setTimeout(() => {
                navigate("/")
            }, 1000)

            {/* .then (authUser => {
                    return setDoc(user(authUser.user.uid), {
                        "displayName": inputs.current[0].value,
                        "email": inputs.current[1].value,
                        "createdAt": new Date()
                    })
                    console.log(authUser)
                }) */}
        }
        catch (err) {
            console.log(err)
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            }
            setValidation(err.code)
            switch (err.code) {
                case "auth/email-already-in-use":
                    setValidation("Cet email est déjà utilisé")
                    break;
                case "auth/invalid-email":
                    setValidation("Cet email n'est pas valide")
                    break;
                case "auth/operation-not-allowed":
                    setValidation("Opération non autorisée")
                    break;
                case "auth/weak-password":
                    setValidation("Le mot de passe est trop faible")
                    break;
                default:
                    setValidation("Erreur inconnue")
                    break;
            }
        }
    }

    const handleGoogleSignIn = async () => {
        setAuthing(true)
        try {
            const cred = await signInWithGoogle()
            setAuthing(false)
            onClose();
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (err) {
            setAuthing(false)
            console.log(err)
            setValidation(err.code)
            switch (err.code) {
                case "auth/account-exists-with-different-credential":
                    setValidation("Ce compte existe déjà avec un autre identifiant")
                    break;
                case "auth/auth-domain-config-required":
                    setValidation("Configuration de domaine requise")
                    break;
                case "auth/cancelled-popup-request":
                    setValidation("Requête popup annulée")
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
                case "auth/operation-not-supported-in-this-environment":
                    setValidation("Opération non supportée dans cet environnement")
                    break;
                case "auth/popup-blocked":
                    setValidation("Popup bloqué")
                    break;
                case "auth/popup-closed-by-user":
                    setValidation("Popup fermé par l'utilisateur")
                    break;
                case "auth/unauthorized-domain":
                    setValidation("Domaine non autorisé")
                    break;
                default:
                    setValidation("Erreur inconnue")
                    break;

            }

        }

        const closeModal = () => {
            setValidation("")
            onClose()
        }
    }

   /* const handleGoogle = () => {
        setAuthing(true)
        signInWithGoogle()
            .then((UserCredential) => {
                NewCreateUserInFirestoreDatabase(UserCredential)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
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
    } */



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
            NewCreateUserInFirestoreDatabase,
            resetPassword,
            loading,
            setLoading
    } = useAuth()
    const { onClose, onOpen, isOpen } = useDisclosure()
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState("");
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
            inputs.current.splice(inputs.current.indexOf(el), 1);
        }
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            setLoading(false)
        } , 1000)

        return () => {
            setAuthing(false)
            setLoading(true)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const cred = await login(
                inputs?.current[0]?.value,
                inputs?.current[1]?.value,
            );
            // formRef.current.reset();
            setValidation("");
            console.log(cred);
            onClose();
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
        const closeModal = () => {
            setValidation("");
            onClose();
        };
        setTimeout(closeModal, 2000);
    };

    const handleGoogle = async () => {
        setAuthing(true)
        signInWithGoogle()
        await ((userCredential) => {
            NewCreateUserInFirestoreDatabase(userCredential)
            navigate("/")
        })
        .catch(err => {
                setValidation(err.code)
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
            })
        const closeModal = () => {
            setValidation("");
            setAuthing(false)
            onClose();
        }
        setTimeout(closeModal, 2000);
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