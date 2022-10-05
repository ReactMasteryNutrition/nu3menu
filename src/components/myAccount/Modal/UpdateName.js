import { useAuth } from '../../../context/authContext'
import { useUpdateDataUser } from '../../../context/dataUserContext'
import { ResponsiveWidth } from '../../../utils/helper'
import { ModalMyAccount } from './Template'
import { EditButton } from '../EditButton'
import {
    Button,
    useToast,
    Box,
    Image,
    Input,
    FormControl,
    FormLabel,
    ModalHeader,
    useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import { updateProfile } from "firebase/auth"
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const ModalName = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
        if (!input?.current[0]?.value) {
            return toast({
                description: "Please fill in this field !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        try {
            // update the user displayname
            await updateProfile(currentUser, { displayName: input?.current[0]?.value });
            const UserInFirestoreDatabase = async () => {
                const userRef = doc(db, `users/${currentUser?.uid}`);
                const userSnap = await getDoc(userRef);
                await updateDoc(userRef, {
                    displayName: input?.current[0]?.value,
                    dateLogin: serverTimestamp()
                });
            }
            await UserInFirestoreDatabase();
            // close the modal
            onClose()
            toast({
                description: "Your name has been modified !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "There was an error while modifying your name !",
                status: error.message,
                duration: 4000,
                isClosable: true,
            })
        }
    }
    useUpdateDataUser(currentUser, currentUser?.displayName)
    return (
        <Box>
            <EditButton onOpen={onOpen} ariaLabel={"name"} />
            <ModalMyAccount
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                header={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "20%"}
                    width='100%'
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <Image
                        src="./images/logo_nu3menu.svg" alt="Site logo"
                        width={ResponsiveWidth() ? "15rem" : "18rem"}
                        margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 3rem auto'}
                    />
                    <ModalHeader
                        textAlign="center"
                        fontSize="1.5rem"
                        marginBottom="1rem"
                    >
                        Edit my name
                    </ModalHeader>
                </Box>}
                content={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "50%"}
                    width={ResponsiveWidth() ? null : '90%'}
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <FormLabel>New name</FormLabel>
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
                    >Confirm
                    </Button>}
            />
        </Box>
    )
}

export default ModalName