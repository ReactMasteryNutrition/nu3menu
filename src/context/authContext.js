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
    GoogleAuthProvider
} from 'firebase/auth'
import { auth,db } from '../firebase-config'
import {setDoc, doc, getDoc} from "firebase/firestore";
import {FieldValue} from "@firebase/firestore";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth() s'utilise avec <AuthContext.Provider>")
    }
    return context
}

export default function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const register = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }, [])
    const login = useCallback((email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }, [])
    const logout = useCallback(() => {
        return signOut(auth)
    }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoading(false)
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
                id : UserCredential.user.uid,
                //name: cred.user.displayName,
                email: UserCredential.user.email,
                imgSrc: UserCredential.user.imgSrc,
                createdAt: FieldValue.serverTimestamp()
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
        NewCreateUserInFirestoreDatabase
    }), [currentUser, loading, register, login, logout, signInWithGoogle])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}