import * as React from 'react';
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingApp from './components/loadingApp/LoadingApp';
import ErrorFallback from './components/error/ErrorFallback';
import NavDesktop from './components/navBar/NavDesktop';
import NavMobile from './components/navBar/NavMobile';
import NutriFooter from './components/footer/nutriFooter'
import { PrivateRoute } from './utils/helper';
// pages loaded immediately
const Home = React.lazy(() => import('./pages/Home'))
const Register = React.lazy(() => import('./pages/Register'))
const Login = React.lazy(() => import('./pages/Login'))
const Error404 = React.lazy(() => import('./pages/Error404'))
// pages prefetch then loaded after connection
const MyAccount = React.lazy(() => import(/* webpackPrefetch: true */ './pages/MyAccount'))
const CreateMenu = React.lazy(() => import(/* webpackPrefetch: true */ './pages/CreateMenu'))
const CurrentMenu = React.lazy(() => import(/* webpackPrefetch: true */ './pages/CurrentMenu'))

const UserApp = () => {
    return (
        <Box display='flex' flexDirection='column' minH='100vh'>
            <React.Suspense fallback={<LoadingApp />}>
                <NavDesktop />
                <NavMobile />
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route element={<PrivateRoute />}>
                            <Route path='/myaccount' element={<MyAccount />} />
                            <Route path='/createmenu' element={<CreateMenu />} />
                            <Route path='/menu' element={<CurrentMenu />} />
                        </Route>
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </ErrorBoundary>
                <NutriFooter />
            </React.Suspense>
        </Box>
    )
}

export default UserApp;