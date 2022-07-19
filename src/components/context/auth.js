const localStorageTokenKey = 'airbnb_auth_token'

const clientAuthApi = (endpoint, data) => {
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    return (
        fetch(`/auth/${endpoint}`, config)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
                throw new Error(res.status.toString())
            })
            .catch(err => console.log(err))
    )


}
const getToken = async () => {
    return window.localStorage.getItem(localStorageTokenKey)
}

const storeToken = ({user}) => {
    window.localStorage.setItem(localStorageTokenKey, user.token)
    return user
}

const login = ({username, password}) => clientAuthApi('login', {username, password}).then(storeToken)

const register = ({username, password}) => {
    return clientAuthApi('register', {username, password}).then(storeToken)
}

const logout = async () => {
    window.localStorage.removeItem(localStorageTokenKey)
}

export {login, register, logout, getToken, clientAuthApi}