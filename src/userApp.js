import * as React from 'react';
import { Box} from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingApp from './components/loadingApp/LoadingApp';
import ErrorFallback from './components/error/ErrorFallback';
import NavDesktop from './components/navBar/NavDesktop';
import NavMobile from './components/navBar/NavMobile';
import NutriFooter from './components/footer/nutriFooter'
import CreateMenu from './pages/CreateMenu';
import CurrentMenu from './pages/CurrentMenu';
import { PrivateRoute } from './utils/helper';
import Favorite from './pages/Favorite';
import AllMenus from './pages/AllMenus'
// pages loaded immediately
const Home = React.lazy(() => import('./pages/Home'))
const Register = React.lazy(() => import('./pages/Register'))
const Login = React.lazy(() => import('./pages/Login'))
const Error404 = React.lazy(() => import('./pages/Error404'))
// pages prefetch then loaded after connection
const MyAccount = React.lazy(() => import(/* webpackPrefetch: true */ './pages/MyAccount'))

// import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
// import DayMeal from './components/meal/dayMeal';
// import MenuCreator from './components/menuCreator/menuCreator';

const UserApp = () => {
    return (
        <Box display='flex' flexDirection='column' minH='100vh'>
            <React.Suspense fallback={<LoadingApp />}>
                <NavDesktop />
                <NavMobile />
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/myaccount' element={<PrivateRoute><MyAccount/></PrivateRoute>} />
                        {/* <Route path='/findRecipe' element={<SearchAndFilter />} /> */}
                        <Route path='/menu' element={<PrivateRoute><CurrentMenu/></PrivateRoute>} />
                        <Route path='/createMenu' element={<PrivateRoute><CreateMenu/></PrivateRoute>} />
                        <Route path='/favorite' element={<PrivateRoute><Favorite/></PrivateRoute>} />
                        <Route path='/allmenus' element={<PrivateRoute><AllMenus/></PrivateRoute>} />
                        {/*<Route path='/menu' element={<UserMenu/>} />*/}
                        {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                        {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </ErrorBoundary>
                <NutriFooter />
            </React.Suspense>
        </Box>
    )
}

export default UserApp;