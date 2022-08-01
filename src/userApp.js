import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NutriNavDesktop from './components/NutriNavDesktop/NutriNavDesktop';
import NutriNavMobile from './components/NutriNavMobile/NutriNavMobile';
import Card from './components/Card/Card';
import NutriFooter from './components/footer/nutriFooter'
//import NutriHomeVisitor from './pages/Home/NutriHomeVisitor'
import NutriRegister from './pages/Connection/NutriRegister'
import NutriLogin from './pages/Connection/NutriLogin'
import NutriHomeUser from './pages/Home/NutriHomeUser'
import CreateMenu from './components/meal/createMenu';
import DayMeal from './components/meal/dayMeal';
import { Box } from '@chakra-ui/react';


const UserApp = () => {


    return (
        <Box display={"flex"} flexDirection={"column"} minH={"full"} >
            <NutriNavDesktop  />
            
            <Routes>
               {/* <Route path='/' element={<NutriHomeVisitor/>}/> */}
                <Route path='/register' element={<NutriRegister />} />
                <Route path='/login' element={<NutriLogin />} />
                <Route path='/user' element={<NutriHomeUser />} />
                <Route path='/' element={<Card />} />
                <Route path='/createmenu' element={<CreateMenu  />} />
                <Route path='/menu' element={<DayMeal />} />
                {/*<Route path='/useraccount' element={<UserAccount />} />*/}
                {/*<Route path='/usermenu' element={<UserMenu/>} />*/}
                {/*<Route path='/menu/:id' element={<MenuDetail/>} />*/}
                {/*<Route path='/recipe/:id' element={<Recipe/>} />*/}
            </Routes>
            <NutriFooter /> 
            <NutriNavMobile />
        </Box>
    )

}


export default UserApp;