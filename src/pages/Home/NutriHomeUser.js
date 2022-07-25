import React from 'react'
import { Box } from '@chakra-ui/react'

import { SearchBar } from '../../components/SearchAndFilter/SearchBar'
import { Filter } from '../../components/SearchAndFilter/Filter'
import ResultOfQuery from '../../components/SearchAndFilter/ResultOfQuery'

export default function NutriHomeUser() {
    const [recipe, setRecipe] = React.useState('')

    const [filter, setFilter] = React.useState({
        type: 'public',
        beta: 'true',
        q: '', //recipe, // mot clé recherché
        app_id: '9aa229ff',
        app_key: 'b0cc99c6ca952ed1d898610b97dece87',
    })

    const handleSearch = recipeName => {
        setRecipe(recipeName)
        setFilter(...filter, filter.q = recipeName)
    }

    const handleFilter = newFilter => {
        setFilter(...filter, newFilter)
    }


    return (
        <>
            <Box w="100%" display='flex' flexDir={['column', 'row']}>
                <Box display={['none', 'none', 'flex']}>
                    <Filter handleFilter={handleFilter}/>
                </Box>
                <Box w="100%" color='green.50' >
                    <SearchBar thingSearched={recipe} handleSearch={handleSearch} filter={filter} handleFilter={handleFilter}/>
                    <ResultOfQuery thingSearched={recipe} filter={filter} setFilter={setFilter}/>
                </Box>
            </Box>        
        </>
    )
}
