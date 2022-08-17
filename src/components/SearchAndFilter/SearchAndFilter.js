import React from 'react'
import { Box } from '@chakra-ui/react'

import Query from '../../components/SearchAndFilter/Query'
import SearchBar from '../../components/SearchAndFilter/SearchBar'

export default function SearchAndFilter({ onChangeRecipe, index, category, bla, weekMenu, setWeekMenu }) {
    const [recipe, setRecipe] = React.useState('')


    const [filter, setFilter] = React.useState({
        type: 'public',
        beta: 'true',
        q: '', //recipe => mot clé recherché
        app_id: process.env.REACT_APP_EDAMAM_API_ID,
        app_key: process.env.REACT_APP_EDAMAM_API_KEY,
    })

    const handleSearch = recipeName => {
        setRecipe(recipeName)
        setFilter({
            ...filter,
            q: recipeName,
        })
    }





    return (

        <Box w="100%" h='auto' display='flex' flexDir={['column', 'row']}>


            <Box w="100%" color='green.50' >
                <SearchBar thingSearched={recipe} handleSearch={handleSearch} filter={filter} setFilter={setFilter} />
                <Query index={index} category={category} onChangeRecipe={onChangeRecipe} bla={bla} setWeekMenu={setWeekMenu} weekMenu={weekMenu} thingSearched={recipe} filter={filter} />
            </Box>
        </Box>
    )
}