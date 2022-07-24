import { ModalMyAccount } from '../../utils/helper'
import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const ModalName = () => {
  return (
    <ModalMyAccount
      header={"Modifier mon prénom"}
      content={
        <FormControl isRequired marginBottom="1rem">
          <Input bg='#f0fff4' color="#1A202C" />
        </FormControl>
      }
    />
  )
}

const ModalEmail = () => {
  return (
    <ModalMyAccount
      header={"Modifier mon e-mail"}
      content={
        <FormControl isRequired marginBottom="1rem">
          <Input type='email' bg='#f0fff4' color="#1A202C" />
        </FormControl >
      }
    />
  )
}

const ModalPassword = () => {
  const [oldPassword, setOldPassword] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  const handleOldPassword = () => setOldPassword(!oldPassword)
  const handleNewPassword = () => setNewPassword(!newPassword)
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword)

  return (
    <ModalMyAccount
      header={"Modifier mon mot de passe"}
      content={<>
        <FormLabel>Ancien mot de passe</FormLabel>
        <InputGroup size='md' marginBottom="1rem" >
          <Input
            type={oldPassword ? 'text' : 'password'}
            bg='#f0fff4'
            isRequired
            color="#1A202C" />
          <InputRightElement width='4.5rem' >
            <Box size='sm' bg='#f0fff4' onClick={handleOldPassword}>
              {oldPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <FormLabel>Nouveau mot de passe</FormLabel>
        <InputGroup size='md' marginBottom="1rem" >
          <Input
            type={newPassword ? 'text' : 'password'}
            bg='#f0fff4'
            isRequired
            color="#1A202C" />
          <InputRightElement width='4.5rem' >
            <Box size='sm' bg='#f0fff4' onClick={handleNewPassword}>
              {newPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <FormLabel>Confirmer mon mot de passe</FormLabel>
        <InputGroup size='md' marginBottom="1rem" >
          <Input
            type={confirmPassword ? 'text' : 'password'}
            bg='#f0fff4'
            isRequired
            color="#1A202C" />
          <InputRightElement width='4.5rem' >
            <Box size='sm' bg='#f0fff4' onClick={handleConfirmPassword}>
              {confirmPassword ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
            </Box>
          </InputRightElement>
        </InputGroup>
      </>}
    />
  )
}

export { ModalName, ModalEmail, ModalPassword }