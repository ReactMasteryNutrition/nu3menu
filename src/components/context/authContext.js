import {createContext, useContext, useEffect, useMemo, useState} from "react";
import * as authApi from '../../api/authApi'
import {useFetchData} from "../../hook/useFetchData";
import {clientAuth} from "../../api/clientApi";

const AuthContext = createContext()

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth() s'utilise avec <AuthContext.provider>")
    }
    return context
}

const getUserByToken = async () => {
    let user = null
    const token = await authApi.getToken()
    if (token) {
        await clientAuth('me', {token}).then(res => res.json()).then(data => user = data.user)
    }
    return user
}

const AuthProvider = props => {
    const [authError, setAuthError] = useState()
    const {data: authUser, execute, status, setData} = useFetchData()
    useEffect(() => {
        execute(getUserByToken())
    }, [execute])
    const login = async(data) => {
        await authApi
            .login(data)
            .then(user => {
                setData(user)
                setAuthError(null)
            })
            .catch(err => {
                setAuthError(err)
            })
    }
    const register = async(data) => {
        await authApi
            .register(data)
            .then(user => setData(user))
            .catch(err => setAuthError(err))
    }


    const logout = () => {
        authApi.logout()
        setData(null)
    }
    const isUserExists = async (user) => {
        return new Promise((resolve, reject) => clientAuth('user', {data: {user}})
            .then(res => {
                if (res.ok) {
                    resolve()
                } else {
                    reject()
                }
            }))
        // .catch(()=>false)
    }
    const value = useMemo(
        () => ({authUser, login,register, logout, authError, isUserExists}),
        [authError, authUser, login,register, logout, isUserExists],
    )
    if (status === 'fetching' || status === 'idle') {
        return <div>Loading...</div>
    }

    if (status === 'done') {
        return <AuthContext.Provider value={value} {...props} />
    }
}

export {AuthContext, useAuth, AuthProvider}