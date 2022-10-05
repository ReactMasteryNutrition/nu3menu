import { useAuth } from '../../../context/authContext'
import { ResponsiveWidth } from '../../../utils/helper'
import { ModalMyAccount } from './Template'
import { EditButton } from '../EditButton'
import { useState, useRef } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  useToast,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  ModalHeader,
  Image,
  useDisclosure
} from '@chakra-ui/react'
import {
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
  updatePassword
} from "firebase/auth"

const ModalPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [oldPassword, setOldPassword] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  const handleOldPassword = () => setOldPassword(!oldPassword)
  const handleNewPassword = () => setNewPassword(!newPassword)
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword)
  const { currentUser } = useAuth()
  const toast = useToast()
  const inputs = useRef([])
  // add values in current object
  const addData = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(inputs?.current[0]?.value && inputs?.current[1]?.value && inputs?.current[2]?.value)) {
      return toast({
        description: "Please fill in all the fields !",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    // data for reauthentication
    const credential = EmailAuthProvider.credential(
      currentUser?.email,
      inputs?.current[0]?.value
    )
    // create a Google provider
    const provider = new GoogleAuthProvider()
    try {
      // reauthenticate directly on the site or with Google
      if (currentUser?.providerData[0]?.providerId !== 'google.com') {
        await reauthenticateWithCredential(currentUser, credential)
      } else {
        await reauthenticateWithPopup(currentUser, provider)
      }
      if (inputs?.current[1]?.value === inputs?.current[2]?.value) {
        updatePassword(currentUser, inputs?.current[1]?.value)
        // close the modal
        onClose()
        toast({
          description: "Your password has been changed !",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }
    } catch (error) {
      if (inputs?.current[1]?.value !== inputs?.current[2]?.value) {
        toast({
          description: "Your new password and confirmation password do not match !",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
      toast({
        description: "There was an error while changing your password !",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }
  return (
    <Box>
      <EditButton onOpen={onOpen} ariaLabel={"password"} />
      <form onSubmit={handleSubmit}>
        <ModalMyAccount
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          header={<Box
            position={ResponsiveWidth() ? null : "absolute"}
            left={ResponsiveWidth() ? null : "50%"}
            top={ResponsiveWidth() ? null : "20%"}
            width='100%'
            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
          >
            <Image
              src="./images/logo_nu3menu.svg" alt="Site logo"
              width={ResponsiveWidth() ? "15rem" : "18rem"}
              margin={ResponsiveWidth() ? '1rem auto' : '1rem auto'}
            />
            <ModalHeader
              textAlign="center"
              fontSize="1.5rem"
              marginBottom={ResponsiveWidth() ? "2rem" : "3rem"}
            >
              Edit my password
            </ModalHeader>
          </Box>}
          content={<Box
            position={ResponsiveWidth() ? null : "absolute"}
            left={ResponsiveWidth() ? null : "50%"}
            top={ResponsiveWidth() ? null : "50%"}
            width={ResponsiveWidth() ? null : '90%'}
            transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
          >
            <FormLabel>Please log in with your password</FormLabel>
            <InputGroup size='md' marginBottom="1rem" >
              <Input
                type={oldPassword ? 'text' : 'password'}
                bg='#f0fff4'
                color="#1A202C"
                ref={addData}
              />
              <InputRightElement width='4.5rem' >
                <Box size='sm' bg='#f0fff4' onClick={handleOldPassword}>
                  {oldPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                </Box>
              </InputRightElement>
            </InputGroup>
            <FormLabel>New password</FormLabel>
            <InputGroup size='md' marginBottom="1rem" >
              <Input
                type={newPassword ? 'text' : 'password'}
                bg='#f0fff4'
                color="#1A202C"
                ref={addData}
              />
              <InputRightElement width='4.5rem' >
                <Box size='sm' bg='#f0fff4' onClick={handleNewPassword}>
                  {newPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                </Box>
              </InputRightElement>
            </InputGroup>
            <FormLabel>Confirm your password</FormLabel>
            <InputGroup size='md' marginBottom="1rem" >
              <Input
                type={confirmPassword ? 'text' : 'password'}
                bg='#f0fff4'
                color="#1A202C"
                ref={addData}
              />
              <InputRightElement width='4.5rem' >
                <Box size='sm' bg='#f0fff4' onClick={handleConfirmPassword}>
                  {confirmPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
                </Box>
              </InputRightElement>
            </InputGroup>
          </Box>}
          footer={
            <Button
              onClick={handleSubmit}
              bg='#48bb78'
              color="#f0fff4"
              _hover={{ bgColor: "#a0aec0" }}
              position={ResponsiveWidth() ? null : "absolute"}
              left={ResponsiveWidth() ? null : "50%"}
              top={ResponsiveWidth() ? null : "75%"}
              width={ResponsiveWidth() ? null : "90%"}
              transform={ResponsiveWidth() ? null : "translate(-50%, -50%)"}
            >Confirm
            </Button>}
        />
      </form>
    </Box>
  )
}

export default ModalPassword 