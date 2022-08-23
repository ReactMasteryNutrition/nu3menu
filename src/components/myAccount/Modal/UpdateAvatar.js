import { ResponsiveWidth, UploadImage } from '../../../utils/helper'
import { v4 as uuidv4 } from 'uuid';
import {
    Button,
    useToast,
    Box,
    Image,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useAuth } from '../../../context/authContext';
import { updateProfile } from "firebase/auth";

const ModalAvatar = () => {
    const { currentUser } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        // get the image data
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        // limit the image type
        if (!["image/svg/xml", "image/png", "image/jpeg"].includes(image?.type)) {
            return toast({
                description: "Veuillez choisir une image au format jpeg, jpg, png ou svg !",
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
                urlProfile = await UploadImage(image, `${currentUser?.email}/${imageName}`);
            }
            // update the user avatar
            await updateProfile(currentUser, { photoURL: urlProfile });
            // close the modal
            onClose()
            toast({
                description: "Votre avatar a bien été modifié !",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            
        } catch (error) {
            toast({
                description: "Il y a eu une erreur lors de la modification de votre avatar !",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    };
    return (
        <Box>
            <Box position='relative'>
                {currentUser?.photoURL ? <Avatar src={currentUser?.photoURL} size="2xl" borderRadius="1rem" backgroundColor="#1A202C" />
                    : <Avatar size="2xl" />}
                <EditIcon
                    aria-label='edit'
                    onClick={onOpen}
                    color="#48bb78"
                    cursor="pointer"
                    boxSize="5"
                    position="absolute"
                    top="6.8rem"
                    left="8.5rem" />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg={ResponsiveWidth() ? "rgba(160, 174, 192, 0.5)" : "inherit"} />
                <ModalContent
                    bg="#1A202C"
                    color="#F0FFF4"
                    position={ResponsiveWidth() ? null : "fixed"}
                    minHeight={ResponsiveWidth() ? null : "100vh"}
                    minWidth={ResponsiveWidth() ? null : "100vw"}
                    borderRadius={ResponsiveWidth() ? null : 0}
                >
                    <Box
                        position={ResponsiveWidth() ? null : "absolute"}
                        left={ResponsiveWidth() ? null : "50%"}
                        top={ResponsiveWidth() ? null : "25%"}
                        width='100%'
                        transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                    >
                        <Image
                            src="./images/logo_nu3menu.svg" alt="Logo du site"
                            width={ResponsiveWidth() ? "15rem" : "18rem"}
                            margin={ResponsiveWidth() ? '1rem auto' : '1rem auto 2rem auto'}
                        />
                        <ModalHeader
                            textAlign="center"
                            fontSize="1.5rem"
                            marginBottom="1rem"
                        >
                            Modifier mon avatar
                        </ModalHeader>
                    </Box>
                    <ModalCloseButton
                        onClick={onClose}
                        position="absolute"
                        right="0"
                        top="0"
                        transition={ResponsiveWidth() ? "all 0.25s ease" : null}
                        margin={ResponsiveWidth() ? "-0.5rem -0.4rem 0 0" : null}
                        padding="0.25rem 0.5rem"
                        borderRadius={ResponsiveWidth() ? "0.5rem" : null}
                        borderBottomRightRadius={ResponsiveWidth() ? null : 0}
                        borderBottomLeftRadius={ResponsiveWidth() ? 'null' : "1rem"}
                        borderTopLeftRadius={ResponsiveWidth() ? null : 0}
                        borderTopRightRadius={ResponsiveWidth() ? null : 0}
                        bg="#48bb78"
                        cursor="pointer"
                        _hover={{
                            transform: ResponsiveWidth() ? "translate(-0.35rem, 0.4rem)" : null
                        }}
                    />
                    <ModalBody>
                        <Box
                            position={ResponsiveWidth() ? null : "absolute"}
                            left={ResponsiveWidth() ? null : "50%"}
                            top={ResponsiveWidth() ? null : "50%"}
                            width={ResponsiveWidth() ? null : '90%'}
                            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
                        >
                            <input type="file" onChange={handleChange} />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
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
                        >Valider
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    )
}

export default ModalAvatar