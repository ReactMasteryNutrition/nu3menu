
import './ModalConnection.css'
import { ResponsiveWidth } from "../../utils/helper"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup,
    Button
} from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { IoLogInSharp } from "react-icons/io5"

const Form = () => {
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
            <FormControl textAlign='start'>
                <FormHelperText>Mot de passe oublié ?</FormHelperText>
            </FormControl>
            <FormControl>
                <Button
                    style={{ padding: "0.5rem 4.3rem" }}
                    width={ResponsiveWidth() ? null : "100%"}
                    _hover={{ bgColor: "#a0aec0" }}
                >
                    Se connecter
                </Button>
            </FormControl>
            <FormControl>
                <Button
                    style={{ top: "4rem", padding: "0.4rem" }}
                    width={ResponsiveWidth() ? null : "100%"}
                    _hover={{ bgColor: "#a0aec0" }}
                >
                    <AiOutlineGoogle size="20" />Se connecter avec Google
                </Button>
            </FormControl>
        </>
    )
}

const ModalDesktopLogin = () => {
    const [desktop, setDesktop] = useState(false);

    return (
        <>
            <Link to="/login">
                <Button
                    bg="#1A202C"
                    _hover={{ bg: "#1A202C" }}
                    _active={{ bg: "#1A202C" }}
                    onClick={() => setDesktop(true)}>
                    Se connecter
                </Button>
            </Link>
            {desktop && (
                <>
                    <div className="body__bg--gray"></div>
                    <div id="modalDesktopLogin">
                        <div className="modal">
                            <div className="modal__img">
                                <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
                            </div>
                            <button className="modal__btn--close" onClick={() => setDesktop(false)}>
                                <CloseIcon color="#1A202C" />
                            </button>
                            <div className="modal__form">
                                <Form />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

const ModalMobileLogin = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <>
            <Link to="/login">
                <Button
                    bg="#f0fff4"
                    _hover={{ bg: "#f0fff4" }}
                    fontSize="1.4rem"
                    onClick={() => setMobile(true)}>
                    <IoLogInSharp style={{ marginRight: "1rem", size: "70", color: "48BB78" }} />
                    Se connecter
                </Button>
            </Link>
            {mobile && (
                <>
                    <div className="body__bg--gray"></div>
                    <div id="modalMobileLogin">
                        <div className="modal">
                            <div className="modal__img">
                                <img src="./images/logo_nu3menu.svg" alt="Logo du site" />
                            </div>
                            <button className="modal__btn--close" onClick={() => setMobile(false)}>
                                <CloseIcon color="#1A202C" />
                            </button>
                            <div className="modal__form">
                                <Form />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export { ModalDesktopLogin, ModalMobileLogin }
