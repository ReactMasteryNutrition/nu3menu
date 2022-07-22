import { createContext, useState, useEffect } from 'react';

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

import {auth} from '../firebaseConfig';

export const AuthContext = createContext();

export function AuthContextProvider(props) {

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        })
        return unsubscribe();
    }, [user]);

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    });

    const toggleModals = modal => {
        if(modal === 'SignIn') {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === 'SignUp') {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === 'Close') {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    return (
        <AuthContext.Provider value={{modalState, toggleModals, signUp}}>
            {!isLoading && props.children}
        </AuthContext.Provider>
    );
}

