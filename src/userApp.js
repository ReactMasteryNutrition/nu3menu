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
import ForgetPassword from "./pages/ForgetPassword";

const UserApp = () => {
    return (
        <Box display='flex' flexDirection='column' minH='100vh'>
            <NavDesktop />
            <NavMobile />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgetpassword' element={<ForgetPassword />} />
                {/* <Route path='/user' element={<NutriHomeUser />} /> */}
                <Route path='/findRecipe' element={<SearchAndFilter />} />
                {/*<Route path='/createmenu' element={<CreateMenu />} />*/}
                <Route path='/myaccount' element={<MyAccount />} />
                {/*<Route path='/menu' element={<UserMenu/>} />*/}
                {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
            </Routes>
            <NutriFooter />
        </Box>
    )

}


export default UserApp;