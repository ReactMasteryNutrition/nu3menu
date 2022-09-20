import FormLogin from './FormLogin';
import { ResponsiveWidth } from "../../utils/helper"
import { Link, useNavigate } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Box,
    Image,
    useDisclosure
} from '@chakra-ui/react'
import { IoLogInSharp } from "react-icons/io5"

const ModalLogin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const handleClose = () => {
        onClose()
        setTimeout(() => {
            navigate('/')
        }, 100)
    }
    return (
        <Box>
            <Link to="/login" onClick={onOpen}>
                {ResponsiveWidth() ? <Box
                    bg="#1A202C"
                    _hover={{
                        color: "#f0fff4",
                        bg: "#1A202C"
                    }}
                    _active={{ bg: "#1A202C" }}
                    fontSize="1.2rem"
                    fontWeight="700"
                    color="#48bb78">Se connecter</Box> :
                    <IoLogInSharp
                        size="50"
                        bg="#1A202C"
                        _hover={{
                            color: "#f0fff4",
                            bg: "#1A202C"
                        }}
                        _active={{ bg: "#1A202C" }}
                        fontSize="1.2rem"
                        fontWeight="700"
                        color="#48bb78"
                        aria-label='login'
                    />}
            </Link>
            <Modal isOpen={isOpen} isCentered >
                <ModalOverlay bg={ResponsiveWidth() ? "rgba(160, 174, 192, 0.5)" : "inherit"} />
                <ModalContent
                    position={ResponsiveWidth() ? null : "fixed"}
                    minHeight={ResponsiveWidth() ? "30rem" : "100vh"}
                    minWidth={ResponsiveWidth() ? "30rem" : "100vw"}
                    borderRadius={ResponsiveWidth() ? null : 0}
                    bg="#1A202C"
                    color="#F0FFF4"
                >
                    <ModalHeader>
                        <Image
                            src="./images/logo_nu3menu.svg" alt="Logo du site"
                            position="absolute"
                            top={ResponsiveWidth() ? "4rem" : "10rem"}
                            left="50%"
                            width={ResponsiveWidth() ? null : "18rem"}
                            transform="translate(-50%, -50%)"
                        />
                    </ModalHeader>
                    <Button
                        onClick={handleClose}
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
                    >
                        <CloseIcon color="#1A202C" />
                    </Button>
                    <ModalBody>
                        <FormLogin />
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default ModalLogin