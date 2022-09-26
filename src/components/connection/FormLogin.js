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
    Link
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAuth } from '../../context/authContext';
import { useNavigate, Link as ReachLink } from 'react-router-dom';

const FormLogin = () => {
    const { login, signInWithGoogle, newCreateUserInFirestoreDatabase } = useAuth();
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
             await login(
                inputs.current[0].value,
                inputs.current[1].value
            )
            //formRef.current.reset();
            setValidation("")
            navigate("/")
        } catch (err) {
            setValidation(err.code)
            switch (err.code) {
                case "auth/user-not-found":
                    setValidation("This user doesn't found")
                    break;
                case "auth/wrong-password":
                    setValidation("Wrong password")
                    break;
                case "auth/too-many-requests":
                    setValidation("Too many requests")
                    break;
                case "auth/user-disabled":
                    setValidation("This user is disabled")
                    break;
                case "auth/invalid-email":
                    setValidation("This Invalid email address")
                    break;
                default:
                    setValidation("Unknown error")
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
            setValidation(err.code)
            switch (err.code) {
                case "auth/account-exists-with-different-credential":
                    setValidation("This account exists with different credential")
                    break;
                case "auth/credential-already-in-use":
                    setValidation("This credential is already in used")
                    break;
                case "auth/operation-not-allowed":
                    setValidation("Operation not allowed")
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
                case "auth/invalid-email":
                    setValidation("This email address is invalid")
                    break;
                default:
                    setValidation("Unknown error")
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
                    <Input type='email' placeholder='Email address' bg='#f0fff4' color="#1A202C" ref={addInputs} />
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
                <FormControl textAlign='start'>
                    <Link as={ReachLink} to='/forgetpassword' target="_blank" size="xs" color='gray.500' _hover={{ textDecoration: "none" }}>
                        Forgot your password ?
                    </Link>
                </FormControl>
                <FormControl margin="1rem 0">
                    <Button
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                        onClick={handleSubmit}
                    >
                        Log in
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
                        <Box marginLeft='0.5rem'>Log in with Google</Box>
                    </Button>
                </FormControl>
                <Text m={3} fontSize='sm' color='tomato'>{validation}</Text>
            </form>
        </Box>
    )
}

export default FormLogin