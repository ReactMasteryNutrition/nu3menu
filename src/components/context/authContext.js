import {createContext, useCallback, useMemo, useState, useContext} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'

export const AuthContext = createContext(
    {
        currentUser: null,
        register: () => Promise,
    }
)

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

    const value = useMemo(() => ({
        currentUser,
        register,
    }),[currentUser, register])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}