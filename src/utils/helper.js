import {
  Button,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase-config';

const ResponsiveWidth = () => {
  const [minWidth501] = useMediaQuery('(min-width: 501px)')
  return minWidth501
}

const ModalMyAccount = ({ ariaLabel, header, content, footer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Button onClick={onOpen} padding="0.5rem 1.5rem" aria-label={ariaLabel} bg='#48bb78' color="#f0fff4" width="100%" _hover={{ bgColor: "#a0aec0" }}>
        Modifier
      </Button>
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

const UploadImage = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    // create a ref for the image url
    const storageRef = ref(storage, filePath);
    try {
      // upload an image
      await uploadBytes(storageRef, file);
      // get the image url
      const url = await getDownloadURL(storageRef);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};

export { ResponsiveWidth, ModalMyAccount, UploadImage }