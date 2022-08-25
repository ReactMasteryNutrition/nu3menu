import {
    createContext,
    useCallback,
    useMemo,
    useState,
    useEffect,
    useContext
} from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    EmailAuthProvider,
    sendEmailVerification,
    UserCredential
} from 'firebase/auth'
import {auth, db} from '../firebase-config';
import {setDoc, doc, getDoc, collection, addDoc, serverTimestamp} from "firebase/firestore";
import {Avatar} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();

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

    const emailProvider = useCallback((email) => {
        return EmailAuthProvider(auth, email)
    }, []);

    const verifyEmail = useCallback(() => {
        return sendEmailVerification(auth.currentUser)
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setCurrentUser(currentUser)
            } else {
                setCurrentUser()
            }
        })
        return () => {
            unsubscribe() // on désinscrit l'écouteur de l'authentification
        }
    } , []) // on ne déclenche pas l'écouteur de l'authentification si on ne change pas le currentUser

    const signInWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    },[]);

    const newCreateUserInFirestoreDatabase = async ({UserCredential}) => {
        const userRef = doc(db, `users/${ UserCredential.user.uid }`);
        const userData = await getDoc(userRef);
        if (!userData.exists) { // si l'utilisateur n'existe pas dans la base de données
            setDoc(userRef, {
                displayName: UserCredential.user.displayName,
                email: UserCredential.user.email,
                id: UserCredential.user.uid,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                isVerified: UserCredential.user.emailVerified,
                imgSrc: UserCredential.user.imgSrc
            })
        }
    }

    const value = useMemo(() => ({
        currentUser,
        loading,
        setLoading,
        register,
        login,
        logout,
        signInWithGoogle,
        resetPassword,
        newCreateUserInFirestoreDatabase,
        emailProvider,
        verifyEmail,
    }),[currentUser, loading, setLoading, register, login, logout, resetPassword, signInWithGoogle, newCreateUserInFirestoreDatabase, emailProvider, verifyEmail])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}