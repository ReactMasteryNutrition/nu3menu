import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider,UserCredential, sendPasswordResetEmail} from 'firebase/auth'
import {auth, db} from '../../firebase-config'
import {Avatar} from "@chakra-ui/react";
import {setDoc, doc, getDoc} from "firebase/firestore";
import {FieldValue} from "@firebase/firestore";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth() s'utilise avec <AuthContext.provider>")
    }
    return context
}

export default function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    },[])

    const login = useCallback((email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }, []);

    const logout = useCallback(() => {
        return signOut(auth)
    },[]);

    const resetPassword = useCallback((email) => {
        return sendPasswordResetEmail(auth, email)
    }, []);

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const imgSrc = <Avatar size="sm" />
                setCurrentUser({
                    user: currentUser,
                    imgSrc: imgSrc,
                    email: currentUser.email,
                });
            } else {
                setCurrentUser(currentUser);
            }
        });

    }, [])

    useEffect(() => {
        authCheck()
        return () => {
            authCheck()
        }
    }, [auth]);

    const authCheck = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            const newUser = currentUser
            setCurrentUser(newUser)
        } else {
            setCurrentUser(currentUser);
        }
    } );

    const signInWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    },[])

    const NewCreateUserInFirestoreDatabase = async (UserCredential) => {
        const userRef = doc(db, "users", UserCredential.user.uid)
        const userDoc = await getDoc(userRef)
        if (!userDoc.exists) {
            setDoc(userRef, {
                id : UserCredential.user.uid,
                //name: cred.user.displayName,
                email: UserCredential.user.email,
                imgSrc: UserCredential.user.imgSrc,
                createdAt: FieldValue.serverTimestamp()
            })
        }

    }



    const provider = new GoogleAuthProvider();

    const value = useMemo(() => ({
        currentUser,
        register,
        login,
        logout,
        loading,
        setLoading,
        resetPassword,
        NewCreateUserInFirestoreDatabase,
        signInWithGoogle
    }),[currentUser, register, login, logout, loading, setLoading, resetPassword, NewCreateUserInFirestoreDatabase, signInWithGoogle])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}