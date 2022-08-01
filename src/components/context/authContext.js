import {createContext, useCallback, useMemo, useState, useEffect, useContext} from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
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

    const logout = useCallback(() => {
        //console.log(logout);
        return signOut(auth);
    }, [])

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                //const imgSrc = "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid"
                //const name = currentUser.displayName
                setCurrentUser({
                    currentUser : currentUser
                    //name : name,
                    //imgSrc : imgSrc
                })
            } else {
                setCurrentUser(currentUser)
                //setLoading(false)
            }
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
        logout
    }),[currentUser, loading, register, login,logout])

    return (
        <AuthContext.Provider value={value}>
           {/* !loading && props.children} */}
              {props.children}
        </AuthContext.Provider>
    ) 
}