import {
    Box,
    Button,
    FormControl,
    Input,
    InputGroup,
    InputRightElement, ModalBody,
    Text,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import {ResponsiveWidth} from "../../utils/helper";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {useAuth} from "../../context/authContext";
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
    const toast = useToast()
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const closeModal = () => {
        onClose();
        setSuccess("");
    };

    const formRef = useRef();

    const formSubmit = async () => {
        try {
            const cred = await resetPassword (
                inputs?.current[0]?.value
            )
            toast({
                description: "Un email de réinitialisation de mot de passe vous a été envoyé",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            closeModal()
            setTimeout(() => {
                navigate('/login')
            }, 4000)

        } catch (err) {
            switch (err.code) {
                case "auth/user-not-found":
                    toast( {
                        description: "Cet utilisateur n'existe pas",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                case "auth/invalid-email":
                    toast( {
                        description: "Cet email n'est pas valide",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                case "auth/user-disabled":
                    toast( {
                        description: "Cet utilisateur est désactivé",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
               case "auth/missing-email":
                    toast( {
                        description: "Veuillez indiquer une adresse email !",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    break;
                default:
                    toast( {
                        description: "Une erreur est survenue",
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
            top={ResponsiveWidth() ? "17rem" : "25rem"}
            left="50%"
            width={ResponsiveWidth() ? "70%" : "80%"}
            transform="translate(-50%, -50%)"
        >
            Il semble que vous ayez oublié le mot de passe de votre compte .
            <br/>Entrez votre adresse email ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de passe.
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
                        Récupérer mon mot de passe
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}

export {FormForgetPassword};