
import { FormRegister, FormLogin } from './Form';
import { ResponsiveWidth } from "../../utils/helper"
import { Link } from 'react-router-dom';
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

const ModalRegister = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Link to="/register">
                <Button
                    onClick={onOpen}
                    bg={ResponsiveWidth() ? "#1A202C" : "#f0fff4"}
                    _hover={{
                        color: ResponsiveWidth() ? "#f0fff4" : "#1A202C",
                        bg: ResponsiveWidth() ? "#1A202C" : "#f0fff4"
                    }}
                    _active={{ bg: ResponsiveWidth() ? "#1A202C" : "#f0fff4" }}
                    fontSize={ResponsiveWidth() ? "1.2rem" : "1.4rem"}
                    fontWeight="700"
                    color={ResponsiveWidth() ? "#48bb78" : null}
                >
                    {ResponsiveWidth() ? null :
                        <BsFillPersonPlusFill style={{ marginRight: "1rem", size: "70", color: "#48BB78" }} />}
                    S'inscrire
                </Button>
            </Link>
            <Modal isOpen={isOpen} isCentered>
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
                        <FormRegister />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

const ModalLogin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Link to="/login">
                <Button
                    onClick={onOpen}
                    bg={ResponsiveWidth() ? "#1A202C" : "#f0fff4"}
                    _hover={{
                        color: ResponsiveWidth() ? "#f0fff4" : "#1A202C",
                        bg: ResponsiveWidth() ? "#1A202C" : "#f0fff4"
                    }}
                    _active={{ bg: ResponsiveWidth() ? "#1A202C" : "#f0fff4" }}
                    fontSize={ResponsiveWidth() ? "1.2rem" : "1.4rem"}
                    fontWeight="700"
                    color={ResponsiveWidth() ? "#48bb78" : null}
                >
                    {ResponsiveWidth() ? null :
                        <IoLogInSharp style={{ marginRight: "1rem", size: "70", color: "#48BB78" }} />}
                    <Box>Se connecter</Box>
                </Button>
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
                        <FormLogin />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export { ModalRegister, ModalLogin }