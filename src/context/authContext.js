import { createContext, useCallback, useMemo, useState, useEffect, useContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from 'firebase/auth'
import { auth, db } from '../firebase-config'
import { setDoc, doc, getDoc } from "firebase/firestore";
import { FieldValue } from "@firebase/firestore";
import LoadingApp from '../components/loadingApp/LoadingApp';
import { useLoading } from '../utils/helper';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth() s'utilise avec <AuthContext.Provider>")
    }
    return context
}

export default function AuthContextProvider(props) {
    const [authError, setAuthError] = useState()
    const [currentUser, setCurrentUser] = useState(null)
    const { status } = useLoading()
    const register = useCallback((email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .catch(err => setAuthError(err))
    }, [])
    const login = useCallback((email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .catch(err => setAuthError(err))
    }, [])
    const logout = useCallback(() => {
        signOut(auth)
        setCurrentUser(null)
    }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const signInWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }, [])
    const NewCreateUserInFirestoreDatabase = async (UserCredential) => {
        const userRef = doc(db, "users", UserCredential.user.uid)
        const userDoc = await getDoc(userRef)
        if (!userDoc.exists) {
            setDoc(userRef, {
                id: UserCredential.user.uid,
                //name: cred.user.displayName,
                email: UserCredential.user.email,
                imgSrc: UserCredential.user.imgSrc,
                createdAt: FieldValue.serverTimestamp()
            })
        }
    }
    const value = useMemo(() => ({
        currentUser,
        status,
        authError,
        register,
        login,
        logout,
        signInWithGoogle,
        NewCreateUserInFirestoreDatabase
    }), [currentUser, status, authError, register, login, logout, signInWithGoogle])

    // display a loading component waiting for the connection
    if (status === 'fetching') {
        return <LoadingApp />
    }
    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}