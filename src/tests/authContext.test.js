import AuthContextProvider, { useAuth } from '../context/authContext'
import { renderHook } from '@testing-library/react'

test('default values in useAuth()', () => {
    const { result } = renderHook(() => useAuth(), {
        wrapper: AuthContextProvider
    })
    expect(result.current).toEqual({
        currentUser: null,
        register: expect.any(Function),
        login: expect.any(Function),
        logout: expect.any(Function),
        signInWithGoogle: expect.any(Function),
        resetPassword: expect.any(Function),
        newCreateUserInFirestoreDatabase: expect.any(Function),
        verifyEmail: expect.any(Function),
    })
})