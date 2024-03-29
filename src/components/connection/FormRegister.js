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
    Text,
    useToast,
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const FormRegister = () => {
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState("")
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const { register, signInWithGoogle, verifyEmail, currentUser, newCreateUserInFirestoreDatabase } = useAuth();
    const formRef = useRef();
    const toast = useToast();
    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputs.current[0].value === "") {
            setValidation("Please enter an email address")
            return;
        }
        if ((inputs.current[1].value.length) < 6) {
            setValidation("Your password must contain at least 6 characters")
            return;
        }
        try {
            const cred = await register(
                inputs?.current[0]?.value,
                inputs?.current[1]?.value
            )
            const NewCreateUserInFirestoreDatabase = async (cred) => {
                const userRef = doc(db, `users/${cred.user.uid}`)
                const userDoc = await getDoc(userRef)
                if (!userDoc.exists()) {
                    await setDoc(userRef, {
                        email: inputs?.current[0]?.value,
                        displayName: cred.user.displayName,
                        id: cred.user.uid,
                        photoURL: cred.user.photoURL,
                        createdAt: serverTimestamp(),
                        dateLogin: serverTimestamp(),
                        isVerified: cred.user.emailVerified ? false : true
                    })
                }
            }
            await NewCreateUserInFirestoreDatabase(cred)
            await verifyEmail(currentUser)
            if (currentUser?.emailVerified === true) {
                setTimeout(() => {
                    toast({
                        description: "A verification email has been sent to you",
                        status: 'success',
                        duration: 4000,
                        isClosable: true
                    })
                }, 3000)
            }
            //formRef.current.reset();
            setValidation("")
            navigate("/")
        } catch (err) {
            setValidation(err.code)
            switch (err.code) {
                case "auth/email-already-in-use":
                    setValidation("This email address is already used")
                    break;
                case "auth/invalid-email":
                    setValidation("This email address is invalid")
                    break;
                default:
                    setValidation("Unknown error")
                    break
            }
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "There was an error sending the verification email",
                    status: 'error',
                    duration: 4000,
                    isClosable: true
                })
            }
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            signInWithGoogle().then((UserCredential) => {
                newCreateUserInFirestoreDatabase(UserCredential)
                verifyEmail(UserCredential)
                navigate('/')
            })
        } catch (err) {
            setValidation(err.code)
            switch (err.code) {
                case "auth/invalid-email":
                    setValidation("This email address is invalid")
                    break;
                case "auth/user-disabled":
                    setValidation("This user is disabled")
                    break;
                case "auth/wrong-password":
                    setValidation("Wrong password")
                    break;
                case "auth/email-already-in-use":
                    setValidation("This email address is already used")
                    break;
                default:
                    throw new Error("Unknown error")
            }
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "There was an error sending the verification email",
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
                    <Input type='email' placeholder='Email address' bg='#f0fff4' color="#1A202C" name="email" ref={addInputs} />
                </FormControl >
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
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
                        Sign up
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
                        <Box marginLeft='0.5rem'>Sign up with Google</Box>
                    </Button>
                </FormControl>
                <Text m={3} fontSize='sm' color='tomato'>{validation}</Text>
            </form>
        </Box>
    )
}

export default FormRegister;
