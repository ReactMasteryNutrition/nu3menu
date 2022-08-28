import { Button, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, Box, useDisclosure } from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase-config';
import PropTypes from 'prop-types'
import { useReducer, useCallback } from 'react';

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
          <ModalBody>{content}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

ModalMyAccount.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired
}

const UploadImage = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    // create a ref for the image url
    const storageRef = ref(storage, filePath)
    try {
      // upload an image
      await uploadBytes(storageRef, file);
      // get the image url
      const url = await getDownloadURL(storageRef)
      resolve(url)
    } catch (error) {
      reject(error)
    }
  })
}

UploadImage.propTypes = {
  file: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired
}

const useLoading = () => {
  // handle data status
  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetching':
        return { status: 'fetching', data: null, error: null }
      case 'done':
        return { status: 'done', data: action.payload, error: null }
      case 'fail':
        return { status: 'error', data: null, error: action.payload }
      default:
        throw new Error('Action non supporté')
    }
  }
  const initialState = {
    data: null,
    error: null,
    status: 'idle',
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, error, status } = state
  // fetch data
  const execute = useCallback(promise => {
    dispatch({ type: 'fetching' })
    promise
      .then(data => dispatch({ type: 'done', payload: data }))
      .catch(error => dispatch({ type: 'fail', error: error }))
  }, [])
  // memoize data fetched
  const setData = useCallback(
    data => dispatch({ type: 'done', payload: data }),
    [dispatch],
  )
  return { data, error, status, execute, setData }
}

export { ResponsiveWidth, ModalMyAccount, UploadImage, useLoading }