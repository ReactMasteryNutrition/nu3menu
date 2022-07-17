
import './NutriNavDesktopConnection.css'
import { useState } from 'react';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
  Button
} from '@chakra-ui/react'

const ModalForm = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  
  return (
    <>
      <FormControl isRequired marginBottom="1rem">
        <Input type='email' placeholder='E-mail' bg='#f0fff4' />
      </FormControl >
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Mot de passe'
          bg='#f0fff4'
          isRequired
        />
        <InputRightElement width='4.5rem' >
          <div size='sm' bg='#f0fff4' onClick={handleClick}>
            {show ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
          </div>
        </InputRightElement>
      </InputGroup>
    </>
  )
}

const ModalDesktopRegister = ({ setRegister }) => {
  return (
    <>
      <div className="body__bg--gray"></div>
      <div id="modalRegister">
        <div className="modal">
          <div className="modal__title">
            <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
          </div>
          <button className="modal__btn--close" onClick={() => setRegister(false)}>
            <CloseIcon color="#1A202C" />
          </button>
          <div className="modal__form">
            <FormControl isRequired marginBottom="1rem">
              <Input placeholder='Prénom' bg='#f0fff4' />
            </FormControl>
            <ModalForm />
            <FormControl>
              <Button
                style={{ padding: "0.5rem 5.25rem" }}
                _hover={{ bgColor: "#a0aec0" }}
              >
                S'inscrire
              </Button>
            </FormControl>
            <FormControl>
              <Button
                style={{ top: "3.5rem", padding: "0.5rem 1.4rem" }}
                _hover={{ bgColor: "#a0aec0" }}
              >
                <img src="./images/google.svg" alt="Icône de Google" style={{ width: "1rem" }} />
                <p>S'inscrire avec Google</p>
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

const ModalDesktopLogin = ({ setLogin }) => {
  return (
    <>
      <div className="body__bg--gray"></div>
      <div id="modalLogin">
        <div className="modal">
          <div className="modal__title">
            <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
          </div>
          <button className="modal__btn--close" onClick={() => setLogin(false)}>
            <CloseIcon color="#1A202C" />
          </button>
          <div className="modal__form">
            <ModalForm />
            <FormControl textAlign='start'>
              <FormHelperText>Mot de passe oublié ?</FormHelperText>
            </FormControl>
            <FormControl>
              <Button
                style={{ padding: "0.5rem 4.3rem" }}
                _hover={{ bgColor: "#a0aec0" }}
              >
                Se connecter
              </Button>
            </FormControl>
            <FormControl>
              <Button
                style={{ top: "4rem", padding: "0.5rem" }}
                _hover={{ bgColor: "#a0aec0" }}
              >
                <img src="./images/google.svg" alt="Icône de Google" style={{ width: "1rem" }} />
                <p>Se connecter avec Google</p>
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

const NutriNavDesktopConnection = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
      {login && <ModalDesktopLogin setLogin={setLogin} />}
      <Button bg="#1A202C" _hover={{bg:"#1A202C"}} onClick={() => setLogin(true)}>
        Se connecter
      </Button>
      <Button bg="#1A202C" _hover={{bg:"#1A202C"}} onClick={() => setRegister(true)}>
        S'inscrire
      </Button>
      {register && <ModalDesktopRegister setRegister={setRegister} />}
    </>
  );
}

export default NutriNavDesktopConnection