import { useAuth } from '../../../context/authContext'
import { ResponsiveWidth, ModalMyAccount } from '../../../utils/helper'
import {
    Button,
    useToast,
    Box,
    Image,
    Input,
    FormControl,
    FormLabel,
    ModalHeader
} from '@chakra-ui/react'
import { useRef } from 'react'
import { updateProfile } from "firebase/auth"

const ModalName = () => {
    const { currentUser } = useAuth()
    const toast = useToast()
    const input = useRef([])
    // add value in current object
    const addData = (el) => {
        if (el && !input.current.includes(el)) {
            input.current.push(el);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!input?.current[0]?.value){
            return toast({
                description: "Veuillez remplir ce champ !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        try {
            // update the user displayname
            await updateProfile(currentUser, { displayName: input?.current[0]?.value });
            toast({
                description: "Votre prénom a bien été modifié !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "Il y a eu une erreur lors de la modification de votre prénom !",
                status: error.message,
                duration: 4000,
                isClosable: true,
            })
        }
    }
    return (
        <Box>
            <ModalMyAccount
                ariaLabel={"name"}
                header={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "20%"}
                    width='100%'
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <Image
                        src="./images/logo_nu3menu.svg" alt="Logo du site"
                        width={ResponsiveWidth() ? "15rem" : "18rem"}
                        margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 3rem auto'}
                    />
                    <ModalHeader
                        textAlign="center"
                        fontSize="1.5rem"
                        marginBottom="1rem"
                    >
                        Modifier mon prénom
                    </ModalHeader>
                </Box>}
                content={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "50%"}
                    width={ResponsiveWidth() ? null : '90%'}
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <FormLabel>Nouveau prénom</FormLabel>
                    <FormControl marginBottom="1rem">
                        <Input type="text" bg='#f0fff4' color="#1A202C" ref={addData} aria-label="new name"
                        />
                    </FormControl>
                </Box>}
                footer={
                    <Button
                        onClick={handleSubmit}
                        bg='#48bb78'
                        color="#f0fff4"
                        _hover={{ bgColor: "#a0aec0" }}
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "75%"}
                        width={ResponsiveWidth() ? null : "90%"}
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >Valider
                    </Button>}
            />
        </Box>
    )
}

export default ModalName