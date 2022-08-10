import {
  Button,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react'

const ResponsiveWidth = () => {
  const [minWidth501] = useMediaQuery('(min-width: 501px)')

  return minWidth501
}

const ModalMyAccount = ({ title, header, content, footer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button
        onClick={onOpen}
        padding="0.5rem 1.5rem"
        title={title}
        bg='#48bb78'
        color="#f0fff4"
        width="100%"
        _hover={{ bgColor: "#a0aec0" }}
      >
        Modifier
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="rgba(160, 174, 192, 0.5)" />
        <ModalContent
          bg="#1A202C"
          color="#F0FFF4"
          width={ResponsiveWidth() ? null : "90%"}
        >
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton
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
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export { ResponsiveWidth, ModalMyAccount }