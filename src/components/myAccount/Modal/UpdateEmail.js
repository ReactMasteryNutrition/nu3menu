import { useAuth } from '../../../context/authContext'
import { useUpdateDataUser } from '../../../context/dataUserContext'
import { ResponsiveWidth } from '../../../utils/helper'
import { ModalMyAccount } from './Template'
import { EditButton } from '../EditButton'
import { useState, useRef } from 'react'
import {
    Button,
    FormControl,
    Box,
    useToast,
    ModalHeader,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    FormLabel,
    useDisclosure
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    reauthenticateWithCredential,
    reauthenticateWithPopup,
    GoogleAuthProvider,
    updateEmail,
    EmailAuthProvider,
    sendEmailVerification
} from 'firebase/auth'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebase-config'

const ModalEmail = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currentUser } = useAuth()
    const [passwordVerify, setPasswordVerify] = useState(false)
    const toast = useToast()
    const inputs = useRef([])
    const addData = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }
    const handlePassword = () => setPasswordVerify(!passwordVerify)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(inputs?.current[0]?.value && inputs?.current[1]?.value)) {
            return toast({
                description: "Please fill in all the fields !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        // data for reauthentication
        const credential = EmailAuthProvider.credential(
            currentUser?.email,
            inputs?.current[0]?.value
        )
        // create a Google provider
        const provider = new GoogleAuthProvider()
        try {
            // reauthenticate directly on the site or with Google
            if (currentUser?.providerData[0]?.providerId !== 'google.com') {
                await reauthenticateWithCredential(currentUser, credential)
            } else {
                await reauthenticateWithPopup(currentUser, provider)
            }
            await updateEmail(currentUser, inputs?.current[1]?.value)
            // close the modal
            onClose()
            toast({
                description: "Your email address has been modified !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            await sendEmailVerification(currentUser)
            if (currentUser?.emailVerified === true) {
                setTimeout(() => {
                    toast({
                        description: "A verification email has been sent to you !",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    })
                }, 3000);
            }
            const UserInFirestoreDatabase = async () => {
                // get the user's data from the database
                const mailRef = doc(db, `users/${currentUser?.uid}`);
                await getDoc(mailRef)
                await updateDoc(mailRef, {
                    email: inputs?.current[1]?.value,
                    dateLogin: serverTimestamp()
                })
            }
            await UserInFirestoreDatabase() // update the user's data in the database
        } catch (error) {
            toast({
                description: "There was an error while modifying your email address !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
            if (currentUser?.emailVerified === false) {
                toast({
                    description: "There was an error sending the verification email !",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            }
        }
    }
    useUpdateDataUser(currentUser, currentUser?.email)
    return (
        <Box>
            <EditButton onOpen={onOpen} ariaLabel={"email"} />
            <form onSubmit={handleSubmit}>
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
                            Edit my email address
                        </ModalHeader>
                    </Box>}
                    content={<Box
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "50%"}
                        width={ResponsiveWidth() ? null : '90%'}
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >
                        <FormControl>
                            <FormLabel>Please log in with your password</FormLabel>
                            <InputGroup size='md' marginBottom="1rem" >
                                <Input
                                    id='reauthentifyEmail'
                                    type={passwordVerify ? 'text' : 'password'}
                                    bg='#f0fff4'
                                    color="#1A202C"
                                    ref={addData}
                                />
                                <InputRightElement width='4.5rem' >
                                    <Box size='sm' bg='#f0fff4' onClick={handlePassword}>
                                        {passwordVerify ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl marginBottom="1rem">
                            <FormLabel>New email address</FormLabel>
                            <Input type='email' bg='#f0fff4' color="#1A202C"
                                ref={addData}
                            />
                        </FormControl >
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
            </form>
        </Box>
    )
}

export default ModalEmail