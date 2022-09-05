import AuthContextProvider, { useAuth } from '../context/authContext'
import { renderHook } from '@testing-library/react'

test('default values in useAuth()', () => {
    const { result } = renderHook(() => useAuth(), {
        wrapper: AuthContextProvider
    })
    expect(result.current).toEqual({
        currentUser: null,
        status: 'idle',
        authError: undefined,
        register: expect.any(Function),
        login: expect.any(Function),
        logout: expect.any(Function),
        signInWithGoogle: expect.any(Function),
        NewCreateUserInFirestoreDatabase: expect.any(Function)
    })
})