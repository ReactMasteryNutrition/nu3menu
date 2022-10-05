import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
} from '@chakra-ui/react'
import { ResponsiveWidth } from '../../../utils/helper'
import PropTypes from 'prop-types'

const ModalMyAccount = ({ isOpen, onClose, header, content, footer }) => {
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg={ResponsiveWidth() ? "rgba(160, 174, 192, 0.5)" : "inherit"} />
                <ModalContent
                    position={ResponsiveWidth() ? null : "fixed"}
                    minHeight={ResponsiveWidth() ? null : "100vh"}
                    minWidth={ResponsiveWidth() ? null : "100vw"}
                    borderRadius={ResponsiveWidth() ? null : 0}
                    bg="#1A202C"
                    color="#F0FFF4"
                >
                    {header}
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
                    <ModalBody>{content}</ModalBody>
                    <ModalFooter>{footer}</ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

ModalMyAccount.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    header: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    footer: PropTypes.object.isRequired
}

export { ModalMyAccount }