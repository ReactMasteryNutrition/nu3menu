import { ResponsiveWidth, UploadImage } from '../../../utils/helper'
import { ModalMyAccount } from './Template';
import { v4 as uuidv4 } from 'uuid';
import {
    Button,
    useToast,
    Box,
    Image,
    Avatar,
    ModalHeader,
    useDisclosure,
    CircularProgress,
    CircularProgressLabel
} from '@chakra-ui/react'
import { EditIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useAuth } from '../../../context/authContext';
import { updateProfile } from "firebase/auth";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useDataUser, useUpdateDataUser } from '../../../context/dataUserContext';

const ModalAvatar = () => {
    const { currentUser } = useAuth()
    const { avatar } = useDataUser()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0)
    const handleChange = (e) => {
        // get the image data
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        // limit the image type
        if (!["image/svg+xml", "image/png", "image/jpeg"].includes(image?.type)) {
            return toast({
                description: "Please choose an image in jpeg, jpg, png or svg format !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        try {
            // create the image path 
            let urlProfile = ''
            if (image) {
                const imageName = uuidv4() + '.' + image?.name?.split('.')?.pop();
                // upload the image to Firestore
                urlProfile = await UploadImage(image, `${currentUser?.email}/${imageName}`, setProgress);
            }
            // update the user avatar
            await updateProfile(currentUser, { photoURL: urlProfile });
            const UserInFirestoreDatabase = async () => {
                const avatarRef = doc(db, `users/${currentUser?.uid}`);
                await getDoc(avatarRef);
                await updateDoc(avatarRef, {
                    photoURL: urlProfile,
                    dateLogin: serverTimestamp()
                })
            }
            await UserInFirestoreDatabase()
            // close the modal
            onClose()
            toast({
                description: "Your avatar has been modified !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                description: "There was an error while editing your avatar !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    };
    useUpdateDataUser(currentUser, currentUser?.photoURL)
    return (
        <Box>
            <Box position='relative'>
                {currentUser?.photoURL ? <Avatar src={avatar} size="2xl" borderRadius="1rem" backgroundColor="#1A202C" />
                    : <Avatar size="2xl" />}
                <EditIcon
                    onClick={onOpen}
                    aria-label='avatar'
                    color="#48bb78"
                    cursor="pointer"
                    boxSize="5"
                    position="absolute"
                    top="6.8rem"
                    left="8.5rem" />
            </Box>
            <ModalMyAccount
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                header={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "25%"}
                    width='100%'
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <Image
                        src="./images/logo_nu3menu.svg" alt="Site logo"
                        width={ResponsiveWidth() ? "15rem" : "18rem"}
                        margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 2rem auto'}
                    />
                    <ModalHeader
                        textAlign="center"
                        fontSize="1.5rem"
                        marginBottom="1rem"
                    >
                        Edit my avatar
                    </ModalHeader>
                </Box>}
                content={<Box
                    position={ResponsiveWidth() ? null : "absolute"}
                    left={ResponsiveWidth() ? null : "50%"}
                    top={ResponsiveWidth() ? null : "50%"}
                    width={ResponsiveWidth() ? null : '90%'}
                    transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                >
                    <input type="file" onChange={handleChange} />
                    {progress >= 1 && progress < 100 ? (
                        <CircularProgress value={progress} color='green.400'>
                            <CircularProgressLabel>{`${Math.round(progress)} %`}</CircularProgressLabel>
                        </CircularProgress>
                    ) :
                        progress === 100 ? <CheckIcon color='green.400' /> : null}
                </Box>}
                footer={
                    <Button
                        onClick={handleSubmit}
                        bg='#48bb78'
                        color="#f0fff4"
                        _hover={{ bgColor: "#a0aec0" }}
                        padding={ResponsiveWidth() ? null : '1.3rem 0'}
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "70%"}
                        width={ResponsiveWidth() ? null : "90%"}
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >Confirm
                    </Button>}
            />
        </Box >
    )
}

export default ModalAvatar