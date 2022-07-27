
import './NutriConnection.css'
import {useState, useRef, useContext} from 'react';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  useMediaQuery
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {AuthContext} from "../../contexts/AuthContext";


const ModalForm = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [minWidth501] = useMediaQuery('(min-width: 501px)')
  const inputs = useRef([]);
  const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
  }
  const formRef = useRef();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const cred = await signUp(
              inputs.current[0].value,
              inputs.current[1].value,
              inputs.current[2].value,
          )
          formRef.current.reset();
          console.log(cred)
      } catch (err) {
          console.dir(err);
  }
}

    return (
      <>
       <form ref={formRef} onSubmit={handleSubmit}>
        <FormControl isRequired marginBottom="1rem">
          <Input placeholder='Prénom' bg='#f0fff4' ref={addInputs} name='prenom' />
        </FormControl>
        <FormControl isRequired marginBottom="1rem">
          <Input type='email' placeholder='E-mail' bg='#f0fff4' ref={addInputs} name='email' />
        </FormControl >
        <InputGroup size='md'>
          <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Mot de passe'
              bg='#f0fff4'
              isRequired
              ref={addInputs}
              name='password'
          />
          <InputRightElement width='4.5rem' >
            <div size='sm' bg='#f0fff4' onClick={handleClick}>
              {show ? <ViewOffIcon color='#48bb78' /> : <ViewIcon color='#48bb78' />}
            </div>
          </InputRightElement>
        </InputGroup>
        {minWidth501 ? (<>
          <FormControl >
            <Button
                style={{ padding: '0.5rem 5.25rem' }}
                _hover={{ bgColor: "#a0aec0" }}
            >
              S'inscrire
            </Button>
          </FormControl>
        </>) : (<>
          <FormControl >
            <Button
                width='100%'
                _hover={{ bgColor: "#a0aec0" }}
            >
              S'inscrire
            </Button>
          </FormControl>
        </>)
        }
        </form>
      </>
  )
}

const ModalDesktopRegister = ({ setRegister }) => {
  return (
    <>
      <div className="body__bg--gray"></div>
      <div id="modalRegister">
        <div className="modal">
          <div className="modal__img">
            <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
          </div>
          <button className="modal__btn--close" onClick={() => setRegister(false)}>
            <CloseIcon color="#1A202C" />
          </button>
          <div className="modal__form">
            <ModalForm />
          </div>
        </div>
      </div>
    </>
  );
}

const NutriRegister = () => {

  const { modalState, toggleModals, signUp } = useContext(AuthContext);
  console.log(signUp);

  const [register, setRegister] = useState(false);
  const [minWidth501] = useMediaQuery('(min-width: 501px)')

  return (
    <>
      {register && <ModalDesktopRegister setRegister={setRegister} />}
      {minWidth501 ? (
          // desktop screen
        <Link to="/register">
          <Button bg="#1A202C" _hover={{ bg: "#1A202C" }} onClick={() => setRegister(true)}>
            S'inscrire
          </Button>
        </Link>
      ) : (
          // mobile screen
        <Link to="/register">
          <Button 
          bg="#f0fff4" 
          _hover={{ bg: "#f0fff4" }} 
          fontSize="1.4rem" 
          onClick={() => setRegister(true)}>
            <img src='./images/register.svg'
              alt='Deux avatars' style={{marginRight:'1rem', width:"2rem" }} />
            S'inscrire
          </Button>
        </Link>
      )}
    </>
  );
}

export default NutriRegister;