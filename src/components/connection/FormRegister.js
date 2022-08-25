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
    useToast,
    useDisclosure, Avatar,
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import {doc, getDoc, collection, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../../firebase-config";

const FormRegister = () => {
    const [show, setShow] = useState(false)
    const { onClose } = useDisclosure()
    const [validation, setValidation] = useState("")
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const { register, signInWithGoogle, verifyEmail, currentUser, newCreateUserInFirestoreDatabase, UserCredential} = useAuth();
    const [displayName, setDisplayName] = useState("");
    const formRef = useRef();
    const toast = useToast();
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
        if(inputs?.current[0]?.value === ""){
            setValidation("Veuillez indiquer un prénom !")
            return;
        }
        if (inputs.current[0].value === "") {
            setValidation("Veuillez indiquer une adresse email")
            return;
        }
        if ((inputs.current[1].value.length) < 6) {
            setValidation("6 characters min")
            return;
        }
        try {
            const cred = register(
                inputs?.current[0]?.value,
                inputs?.current[1]?.value
            )

            const NewCreateUserInFirestoreDatabase = async (UserCredential) => {
                const userRef = doc(db, `users/${currentUser.uid}`);
                const userData = getDoc(userRef);
                if (!userData.exists()) { // si l'utilisateur n'existe pas dans la base de données
                    await setDoc (userRef, {
                        displayName: UserCredential.displayName,
                        email: inputs?.current[0]?.value,
                        id: UserCredential.uid,
                        createdAt: new Date(),
                        updatedAt: serverTimestamp(),
                        photoURL: <Avatar size="sm" />
                    })
                }
            }
            await NewCreateUserInFirestoreDatabase(cred)
            formRef.current.reset();
            setValidation("")
            verifyEmail(cred.user.email)
            const closeModal = () => {
                setValidation("")
                onClose();
                navigate("/")
            }
            if (currentUser?.emailVerified === true) {
                setTimeout(() => {
                    toast({
                        description: "Un e-mail de vérification vous a été envoyé !",
                        status: 'success',
                        duration: 4000,
                        isClosable: true
                    })
                }, 3000)
            }
            closeModal()
        } catch (err) {
            console.log(err)
            setValidation(err.code)
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
                    break
            }
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                    status: 'error',
                    duration: 4000,
                    isClosable: true
                })
            }
        }
    }

    const handleGoogleSignIn = async (UserCredential) => {
        try {
            signInWithGoogle(UserCredential).then((UserCredential) => {
                newCreateUserInFirestoreDatabase(UserCredential)
                verifyEmail(UserCredential)
                if (UserCredential?.emailVerified === true) {
                    setTimeout(() => {
                        toast({
                            description: "Un e-mail de vérification vous a été envoyé !",
                            status: 'success',
                            duration: 4000,
                            isClosable: true
                        })
                    }, 3000);
                    navigate("/")
                }
            })
            console.log(UserCredential)
        } catch (err) {
            console.log(err)
            setValidation(err.code)
            switch (err.code) {
                case "auth/invalid-email":
                    setValidation("Cette adresse e-mail n'est pas valide")
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
                default:
                    throw new Error("Erreur non prise en compte")
            }
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "Il y a eu une erreur lors de l'envoi de l'e-mail de vérification !",
                    status: 'error',
                    duration: 4000,
                    isClosable: true
                });
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

export default FormRegister;
