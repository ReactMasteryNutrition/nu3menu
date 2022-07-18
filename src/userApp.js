import * as React from 'react';
import Card from './components/Card/Card';
import NutriNavDesktop from './components/NutriNavDesktop/NutriNavDesktop';
import NutriNavMobile from './components/NutriNavMobile/NutriNavMobile';
import NutriFooter from './components/footer/nutriFooter'
import { Routes, Route } from 'react-router-dom';


const UserApp = () => {
    return (
        <>
            <NutriNavDesktop />
            <NutriNavMobile />
            <Routes>
                <Route path='/' element={<Card />} />
                {/*<Route path='/login' element={<Login />} />*/}
                {/*<Route path='/register' element={<Register />} />*/}
                {/*<Route path='/createmenu' element={<CreateMenu />} />*/}
                {/*<Route path='/useraccount' element={<UserAccount />} />*/}
                {/*<Route path='/usermenu' element={<UserMenu/>} />*/}
                {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
                   
            </Routes>
            <NutriFooter />
        </>
    )

}

export default UserApp;