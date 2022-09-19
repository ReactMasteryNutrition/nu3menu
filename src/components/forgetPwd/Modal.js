import { FormForgetPassword } from './Form';
import { ResponsiveWidth } from "../../utils/helper"
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
import { BsFillPersonPlusFill } from "react-icons/bs"
import {Link} from "react-router-dom";

const ModalForgetPassword = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Link to='/forgetpassword' size="xs" color='gray.500' _hover={{ textDecoration:"none" }} onClick={onOpen}>
                Mot de passe oublié ?
            </Link>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
                            top={ResponsiveWidth() ? "4rem" : "11rem"}
                            left="50%"
                            width={ResponsiveWidth() ? null : "18rem"}
                            transform="translate(-50%, -50%)"
                        />
                    </ModalHeader>
                    <Button
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
                    >
                        <CloseIcon color="#1A202C" />
                    </Button>
                    <ModalBody>
                        <FormForgetPassword />
                    </ModalBody>
                    <ModalFooter/>
                </ModalContent>
            </Modal>
        </Box>
    );
}



export {ModalForgetPassword}