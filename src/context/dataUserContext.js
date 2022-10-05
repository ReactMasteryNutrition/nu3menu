import { createContext, useContext, useReducer, useCallback, useMemo, useEffect } from "react"
import { useAuth } from "./authContext"

const DataUserContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateAvatar':
      return {
        ...state,
        avatar: action.payload,
      }
    case 'updateName':
      return {
        ...state,
        name: action.payload,
      }
    case 'updateEmail':
      return {
        ...state,
        email: action.payload,
      }
    default:
      throw new Error('Unknown error')
  }
}

const DataUserProvider = props => {
  const [state, dispatch] = useReducer(reducer, {
    avatar: '', name: '', email: ''
  })
  const updateAvatar = useCallback(avatar => {
    dispatch({
      type: 'updateAvatar',
      payload: avatar,
    })
  }, [])
  const updateName = useCallback(name => {
    dispatch({
      type: 'updateName',
      payload: name,
    })
  }, [])
  const updateEmail = useCallback(email => {
    dispatch({
      type: 'updateEmail',
      payload: email,
    })
  }, [])
  const { avatar, name, email } = state
  const value = useMemo(() => {
    return { avatar, name, email, updateAvatar, updateName, updateEmail }
  }, [avatar, email, name, updateAvatar, updateEmail, updateName])

  return <DataUserContext.Provider value={value} {...props} />
}

const useDataUser = () => {
  const context = useContext(DataUserContext)
  if (!context) {
    throw new Error("useDataUser() is used with <DataUserContext.Provider>")
  }
  return context
}

const useUpdateDataUser = (user, data) => {
  const { updateAvatar, updateName, updateEmail } = useDataUser()
  const { currentUser } = useAuth()
  useEffect(() => {
    if (user) {
      if (data === currentUser?.photoURL) {
        updateAvatar(currentUser?.photoURL)
      }
      if (data === currentUser?.displayName) {
        updateName(currentUser?.displayName)
      }
      if (data === currentUser?.email) {
        updateEmail(currentUser?.email)
      }
    }
  }, [currentUser?.displayName, currentUser?.email, currentUser?.photoURL, data, updateAvatar, updateEmail, updateName, user])
}

export { DataUserContext, DataUserProvider, useDataUser, useUpdateDataUser }