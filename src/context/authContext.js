import { createContext, useCallback, useMemo, useState, useEffect, useContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth'
import { auth, db } from '../firebase-config';
import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";

export const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth() is used with <AuthContext.Provider>")
    }
    return context
}

export default function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const register = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }, [])

    const login = useCallback((email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }, []);

    const logout = useCallback(() => {
        return signOut(auth)
    }, []);

    const resetPassword = useCallback((email) => {
        return sendPasswordResetEmail(auth, email)
    }, []);

    const verifyEmail = useCallback(() => {
        return sendEmailVerification(auth.currentUser)
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setCurrentUser(currentUser)
            } else {
                setCurrentUser(null)
            }
        })
        return () => {
            unsubscribe() // on désinscrit l'écouteur de l'authentification
        }
    }, []) // on ne déclenche pas l'écouteur de l'authentification si on ne change pas le currentUser

    const signInWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }, []);

    const newCreateUserInFirestoreDatabase = async (UserCredential) => {
        const userRef = doc(db, `users/${UserCredential.user.uid}`);
        const userData = await getDoc(userRef);
        if (!userData.exists()) { // si l'utilisateur n'existe pas dans la base de données
            await setDoc(userRef, {
                displayName: UserCredential.user.displayName,
                email: UserCredential.user.email,
                createdAt: new Date(),
                id: UserCredential.user.uid,
                updatedAt: serverTimestamp(),
                photoURL: UserCredential.user.photoURL,
                isVerified: UserCredential.user.emailVerified ? true : false
            })
        }
    }

    const value = useMemo(() => ({
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        resetPassword,
        newCreateUserInFirestoreDatabase,
        verifyEmail,
    }), [currentUser, register, login, logout, signInWithGoogle, resetPassword, verifyEmail])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}