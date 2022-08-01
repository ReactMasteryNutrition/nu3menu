import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NutriNavDesktop from './components/NutriNavDesktop/NutriNavDesktop';
import NutriNavMobile from './components/NutriNavMobile/NutriNavMobile';

import NutriHomeVisitor from './pages/Home/NutriHomeVisitor'
import NutriRegister from './pages/Connection/NutriRegister'
import NutriLogin from './pages/Connection/NutriLogin'
// import NutriHomeUser from './pages/Home/NutriHomeUser'

import Footer from './components/footer/nutriFooter'

import { Box } from '@chakra-ui/react'
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';

const UserApp = () => {
    return (
        <Box display='flex' flexDirection='column' minH='100vh'>
            <NutriNavDesktop />
            <NutriNavMobile />
            <Routes>
                <Route path='/' element={<NutriHomeVisitor/>}/>
                <Route path='/register' element={<NutriRegister />} />
                <Route path='/login' element={<NutriLogin />} />
                {/* <Route path='/user' element={<NutriHomeUser />} /> */}
                <Route path='/findRecipe' element={<SearchAndFilter />} />
                {/*<Route path='/createmenu' element={<CreateMenu />} />*/}
                {/*<Route path='/useraccount' element={<UserAccount />} />*/}
                {/*<Route path='/usermenu' element={<UserMenu/>} />*/}
                {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
            </Routes>
            <Footer />
        </Box>
    )

}


export default UserApp;