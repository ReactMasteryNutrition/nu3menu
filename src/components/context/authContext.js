import {createContext, useCallback, useMemo, useState, useEffect} from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {
    //console.log("%cAuthContext", 'background: darkblue; color: white;')
    const register = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        //console.log("register", 'background: lightblue; color: black;')
    },[])

    const login = useCallback((email, password) => {
        //console.log("%cAuthContext -- Login", 'background: lightblue; color: black;')
        return signInWithEmailAndPassword(auth, email, password)
    },[])


    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])


    const value = useMemo(() => ({
        currentUser,
        loading,
        setLoading,
        register,
        login,
    }),[currentUser, loading, register, login])

    return (
        <AuthContext.Provider value={value}>
            {/* !loading && props.children} */}
            {props.children}
        </AuthContext.Provider>
    )
}