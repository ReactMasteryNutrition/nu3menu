import { useAuth } from '../../../context/authContext'
import { ModalMyAccount } from '../../../utils/helper'
import { useState, useRef } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  useToast,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box
} from '@chakra-ui/react'
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth"

const ModalPassword = () => {
  const [oldPassword, setOldPassword] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  const handleOldPassword = () => setOldPassword(!oldPassword)
  const handleNewPassword = () => setNewPassword(!newPassword)
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword)
  const { currentUser } = useAuth()
  const toast = useToast()
  const inputs = useRef([])
  const addData = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credential = EmailAuthProvider.credential(
      currentUser?.email,
      inputs?.current[0]?.value
    );
    try {
      await reauthenticateWithCredential(currentUser, credential)
      if (inputs?.current[1]?.value !== inputs?.current[2]?.value) {
        toast({
          description: "Votre nouveau mot de passe et votre mot de passe de confirmation ne correspondent pas !",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      } else {
        updatePassword(currentUser, inputs?.current[1]?.value)
        toast({
          description: "Votre mot de passe a bien été modifié !",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        description: "Il y a eu une erreur lors de la modification de votre mot de passe !",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <ModalMyAccount
          title={"password"}
          header={"Modifier mon mot de passe"}
          content={<>
            <FormLabel>Veuillez-vous authentifier avec votre mot de passe</FormLabel>
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
            <FormLabel>Nouveau mot de passe</FormLabel>
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
            <FormLabel>Confirmer votre mot de passe</FormLabel>
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
          </>}
          footer={
            <Button
              onClick={handleSubmit}
              bg='#48bb78'
              color="#f0fff4"
              _hover={{ bgColor: "#a0aec0" }}
            >Valider
            </Button>}
        />
      </form>
    </Box>
  )
}

export default ModalPassword 