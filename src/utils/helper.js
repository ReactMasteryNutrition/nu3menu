import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
} from '@chakra-ui/react'

const ResponsiveWidth = () => {
  const [minWidth501] = useMediaQuery('(min-width: 501px)')

  return minWidth501
}

const ModalMyAccount = ({ header, content }) => {
  const [minWidth501] = useMediaQuery('(min-width: 501px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        padding="0.5rem 1.5rem"
        bg='#48bb78'
        color="#f0fff4"
        _hover={{ bgColor: "#a0aec0" }}
      >
        Modifier
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay bg="rgba(160, 174, 192, 0.5)" />
        <ModalContent
          bg="#1A202C"
          color="#F0FFF4"
          width={minWidth501 ? null : "90%"}
        >
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton
            position="absolute"
            right="0"
            top="0"
            transition={minWidth501 ? "all 0.25s ease" : null}
            margin={minWidth501 ? "-0.5rem -0.4rem 0 0" : null}
            padding="0.25rem 0.5rem"
            borderRadius={minWidth501 ? "0.5rem" : null}
            borderBottomRightRadius={minWidth501 ? null : 0}
            borderBottomLeftRadius={minWidth501 ? 'null' : "1rem"}
            borderTopLeftRadius={minWidth501 ? null : 0}
            bg="#48bb78"
            cursor="pointer"
            _hover={{
              transform: minWidth501 ? "translate(-0.35rem, 0.4rem)" : null
            }}
          />
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg='#48bb78'
              color="#f0fff4"
              _hover={{ bgColor: "#a0aec0" }}
            >Valider
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ModalMyAccount, ResponsiveWidth }