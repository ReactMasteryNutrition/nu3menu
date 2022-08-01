import React from 'react'
import { Box } from '@chakra-ui/react'

import Filter from '../../components/SearchAndFilter/Filter'
import Query from '../../components/SearchAndFilter/Query'
import SearchBar from '../../components/SearchAndFilter/SearchBar'

export default function NutriHomeUser() {
    const [recipe, setRecipe] = React.useState('')


    const [filter, setFilter] = React.useState({
        type: 'public',
        beta: 'true',
        q: '', //recipe => mot clé recherché
        app_id: '9aa229ff',
        app_key: 'b0cc99c6ca952ed1d898610b97dece87',
    })

    const handleSearch = recipeName => {
        console.log('recipeName : ', recipeName)
        setRecipe(recipeName)
        setFilter({
            ...filter, 
            q: recipeName,
        })
    }



<<<<<<< HEAD:src/pages/Home/NutriHomeUser.js
=======
const Home = () => {
>>>>>>> develop:src/pages/Home.js
    return (
        <Box w="100%" display='flex' flexDir={['column', 'row']}>
            <Box display={['none', 'none', 'flex']}>
                <Filter filter={filter} setFilter={setFilter}/>
            </Box>
            <Box w="100%" color='green.50' >
                <SearchBar thingSearched={recipe} handleSearch={handleSearch} filter={filter} setFilter={setFilter}/>
                <Query thingSearched={recipe} filter={filter}/>
            </Box>
        </Box>      
    )
}
<<<<<<< HEAD:src/pages/Home/NutriHomeUser.js
=======

export default Home;
>>>>>>> develop:src/pages/Home.js
