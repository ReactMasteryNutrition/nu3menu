import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../../firebase-config'

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

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoading(false)
        });

    }, [])

    const provider = new GoogleAuthProvider();


    const value = useMemo(() => ({
        currentUser,
        register,
        login,
        logout,
        loading,
        setLoading
    }),[currentUser, register, login, logout, loading, setLoading])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}