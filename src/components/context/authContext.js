import {createContext, useCallback, useMemo, useState, useEffect, useContext} from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
})



export default function AuthContextProvider(props) {
    //console.log("%cAuthContext", 'background: darkblue; color: white;')
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = useCallback((email, password) => {
        //console.log("%cAuthContext -- Register", 'background: lightblue; color: black;')
        return createUserWithEmailAndPassword(auth, email, password)
    },[])

    const value = useMemo(() => ({
        currentUser,
        loading,
        setLoading,
        register,
    }),[currentUser, loading, register])

    return (
        <AuthContext.Provider value={value}>
            {/* {!loading && children} */}
            {props.children}
        </AuthContext.Provider>
    ) 
}