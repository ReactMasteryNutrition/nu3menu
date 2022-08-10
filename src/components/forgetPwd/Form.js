import {Box, Button, FormControl, Input, InputGroup, InputRightElement, Text, useDisclosure} from "@chakra-ui/react";
import {ResponsiveWidth} from "../../utils/helper";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {useAuth} from "../context/authContext";
import {user} from "../../firebase-config";


const FormForgetPassword = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const {resetPassword} = useAuth()
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => setShow(!show)

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const cred = await resetPassword (
                inputs.current[0].value
            )
            formRef.current.reset();
            setSuccess("Un email de réinitialisation de mot de passe vous a été envoyé")
            setEmail("");
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        }
        catch (err) {
            setError(err.message)
            setEmail("")
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
            <form onSubmit={formSubmit} ref={formRef}>
                <FormControl isRequired marginBottom="1rem">
                    <Input type='email' placeholder='E-mail' bg='#f0fff4' color="#1A202C" name="email" ref={addInputs}/>
                </FormControl >
                <FormControl margin="1rem 0">
                    <Button
                        width="100%"
                        bg="#48BB78"
                        _hover={{ bgColor: "#a0aec0" }}
                        onClick={() => formSubmit()}
                    >
                        Envoyer
                    </Button>
                </FormControl>
            </form>
        </Box>

    )
}

export {FormForgetPassword};