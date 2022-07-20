import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase-confg'

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children}) {
    console.log("%cAuthContext", 'background: darkblue; color: white;')
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            console.log("%cAuthContext -- onAuthStateChanged -- Suscribed", 'background: lightblue; color: black;')
            if(user){
                const imgSrc = "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid"
                const title = user?.email === "admin@admin.com" ? "Maître des clefs" : "Participant"
                const pseudo =  `${user?.email.substring(0, user?.email.indexOf("@")).substring(0,1).toUpperCase()}${user?.email.substring(0, user?.email.indexOf("@")).substring(1,)}`
                setCurrentUser({
                    user: user,
                    pseudo: pseudo,
                    title: title,
                    imgSrc: imgSrc,
                })
            } else {
                setCurrentUser(user)
            }
            // setLoading(false)
        })

        return () => {
            console.log("%cAuthContext -- onAuthStateChanged -- Unsuscribed", 'background: lightblue; color: black;')
            unsuscribe()
        }
    }, [])

    const register = useCallback((email, password) => {
        console.log("%cAuthContext -- Register", 'background: lightblue; color: black;')
        return createUserWithEmailAndPassword(auth, email, password)
    },[])
    const login = useCallback((email, password) => {
        console.log("%cAuthContext -- Login", 'background: lightblue; color: black;')
        return signInWithEmailAndPassword(auth, email, password)
    },[])
    const logout = useCallback(() => {
        console.log("%cAuthContext -- Logout", 'background: lightblue; color: black;')
        return signOut(auth)
    },[])

    const value = useMemo(() => ({
        currentUser,
        loading, setLoading,
        register,
        login,
        logout
    }),[currentUser, loading, register, login, logout])

    return (
        <AuthContext.Provider value={value}>
            {/* {!loading && children} */}
            {children}
        </AuthContext.Provider>
    ) 
}