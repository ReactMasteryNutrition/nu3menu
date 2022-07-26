import { ResponsiveWidth } from "../../utils/helper"
import { useRef } from "react"
import {
    useDisclosure,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton
} from "@chakra-ui/react"

const Alert = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    return (
        <>
            <Button
                onClick={onOpen}
                padding={ResponsiveWidth() ? "0.5rem 7rem" : "0.5rem 1rem"}
                width="100%"
                marginTop="6rem"
                bg="red"
                color="#f0fff4"
                _hover={{ bgColor: "#a0aec0" }}
            >
                Supprimer mon compte
            </Button>

            <AlertDialog
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay bg="rgba(160, 174, 192, 0.5)" />
                <AlertDialogContent
                    bg="#1A202C"
                    color="#F0FFF4"
                    width={ResponsiveWidth() ? null : "90%"}
                >
                    <AlertDialogHeader></AlertDialogHeader>
                    <AlertDialogCloseButton
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
                        bg="#48bb78"
                        cursor="pointer"
                        _hover={{
                            transform: ResponsiveWidth() ? "translate(-0.35rem, 0.4rem)" : null
                        }}
                    />
                    <AlertDialogBody>
                       Etes-vous sûr de vouloir supprimer votre compte ?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            ref={cancelRef}
                            onClick={onClose}
                            bg='#48bb78'
                            color="#f0fff4"
                            _hover={{ bgColor: "#a0aec0" }}
                        >
                            Non
                        </Button>
                        <Button
                            bg='red'
                            ml={3}
                            _hover={{ bgColor: "#a0aec0" }}
                        >
                            Oui
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default Alert;