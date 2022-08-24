import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavDesktop from './components/navBar/NavDesktop';
import NavMobile from './components/navBar/NavMobile';
import NutriFooter from './components/footer/nutriFooter'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount';
import { Box } from '@chakra-ui/react'
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
import DayMeal from './components/meal/dayMeal';
import MenuCreator from './components/menuCreator/menuCreator';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/error/ErrorFallback';
import Error404 from './pages/Error404'

const UserApp = () => {
    return (
        <Box display='flex' flexDirection='column' minH='100vh'>
            <NavDesktop />
            <NavMobile />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/findRecipe' element={<SearchAndFilter />} />
                    <Route path='/menu' element={<DayMeal />} />
                    <Route path='/myaccount' element={<MyAccount />} />
                    <Route path='/createMenu' element={<MenuCreator />} />
                    {/*<Route path='/menu' element={<UserMenu/>} />*/}
                    {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                    {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
                    <Route path='*' element={<Error404/>}/>
                </Routes>
            </ErrorBoundary>
            <NutriFooter />
        </Box>
    )

}


export default UserApp;