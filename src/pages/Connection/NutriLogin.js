
import './NutriConnection.css'
import { useState } from 'react';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    useMediaQuery
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const ModalForm = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [minWidth501] = useMediaQuery('(min-width: 501px)')

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
            {minWidth501 ? (<>
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
            </>) : (<>
                <FormControl textAlign='start'>
                    <FormHelperText>Mot de passe oublié ?</FormHelperText>
                </FormControl>
                <FormControl>
                    <Button
                        width='100%'
                        _hover={{ bgColor: "#a0aec0" }}
                    >
                        Se connecter
                    </Button>
                </FormControl>
                <FormControl>
                    <Button
                        style={{ top: "4rem", width: '100%' }}
                        _hover={{ bgColor: "#a0aec0" }}
                    >
                        <img src="./images/google.svg" alt="Icône de Google" style={{ width: "1rem" }} />
                        <p>Se connecter avec Google</p>
                    </Button>
                </FormControl>
            </>)
            }
        </>
    )
}

const ModalDesktopLogin = ({ setLogin }) => {
    return (
        <>
            <div className="body__bg--gray"></div>
            <div id="modalLogin">
                <div className="modal">
                    <div className="modal__img">
                        <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
                    </div>
                    <button className="modal__btn--close" onClick={() => setLogin(false)}>
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

const NutriLogin = () => {
    const [login, setLogin] = useState(false);
    const [minWidth501] = useMediaQuery('(min-width: 501px)')

    return (
        <>
            {login && <ModalDesktopLogin setLogin={setLogin} />}
            {minWidth501 ? (
                <Link to="/login">
                    <Button
                        bg="#1A202C"
                        _hover={{ bg: "#1A202C" }}
                        onClick={() => setLogin(true)}>
                        Se connecter
                    </Button>
                </Link>
            ) : (
                <Link to="/login">
                    <Button
                        bg="#f0fff4"
                        _hover={{ bg: "#f0fff4" }}
                        fontSize="1.4rem"
                        onClick={() => setLogin(true)}>
                        <img src='./images/login.svg'
                            alt='Une porte et une flèche'
                            style={{ marginRight: '1rem', width: "2rem" }}
                        />
                        Se connecter
                    </Button>
                </Link>
            )}
        </>
    );
}

export default NutriLogin;