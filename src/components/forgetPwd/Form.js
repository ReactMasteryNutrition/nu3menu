import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    useToast
} from "@chakra-ui/react";
import { ResponsiveWidth } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../../context/authContext";

const FormForgetPassword = () => {
    const navigate = useNavigate();
    const { resetPassword } = useAuth()
    const toast = useToast()
    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef();
    const formSubmit = async () => {
        try {
            const cred = await resetPassword(
                inputs?.current[0]?.value
            )
            toast({
                description: "A password reset email has been sent to you",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            setTimeout(() => {
                navigate('/')
            }, 100)

        } catch (err) {
            switch (err.code) {
                case "auth/user-not-found":
                    toast({
                        description: "This user doesn't exist",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                case "auth/invalid-email":
                    toast({
                        description: "This email is invalid",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                case "auth/user-disabled":
                    toast({
                        description: "This user is disabled",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                case "auth/missing-email":
                    toast({
                        description: "Please provide an email address",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                default:
                    toast({
                        description: "Unknown error",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
            }
        }
    }
    return (
        <Box
            position="absolute"
            top={ResponsiveWidth() ? '50%' : '30%'}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            <Heading as='h2' textAlign="center" fontSize="1.5rem" marginBottom="2rem" color='#48BB78'>
                Reset my password
            </Heading>
            <form onSubmit={formSubmit} ref={formRef} >
                <FormControl
                    isRequired
                    width={ResponsiveWidth() ? '50%' : '100%'}
                    margin='0 auto 2rem auto'>
                    <Input
                        type='email'
                        placeholder='Email address'
                        bg='#f0fff4'
                        color="#1A202C"
                        name="email"
                        ref={addInputs} />
                </FormControl >
                <FormControl
                    margin="1rem auto"
                    width={ResponsiveWidth() ? '50%' : '100%'} >
                    <Button
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                        onClick={() => formSubmit()}>
                        Reset
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}

export { FormForgetPassword };