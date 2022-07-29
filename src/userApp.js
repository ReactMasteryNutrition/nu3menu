import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavDesktop from './components/navBar/NavDesktop';
import NavMobile from './components/navBar/NavMobile';
import Card from './components/Card/Card';
import NutriFooter from './components/footer/nutriFooter'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
//import MyAccount from './pages/MyAccount';

const UserApp = () => {
    return (
        <>
            <NavDesktop />
            {/* <Card/> */}
            <NavMobile />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/*<Route path='/createmenu' element={<CreateMenu />} />*/}
                {/*<Route path='/myaccount' element={<MyAccount />} /> */}
                {/*<Route path='/menu' element={<UserMenu/>} />*/}
                {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
            </Routes>
            <NutriFooter />
        </>
    )

}


export default UserApp;