// Imports
import React from 'react'
import { Box } from '@chakra-ui/react'

import QuerySpoon from '../../components/SearchAndFilter/QuerySpoon'

import SearchBarSpoon from './SearchBarSpoon'
// Functions
export default function SearchAndFilter({ index, category, weekMenu, setWeekMenu }) {
    // Init Params
    const [params, setParams] = React.useState({
        apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
        addRecipeInformation: true, 
        addRecipeNutrition: true, 
        number: 18,
        query: '' //recipe => mot clé recherché
    })
    // Recette recherchée //
    const [spoonRecipe, setSpoonRecipe] = React.useState('')
    // Mise à jour de PARAMS en fonction des filtres renseignés et de la recette recherchée
    const handleSpoon = recipeName => {
        setSpoonRecipe(recipeName)
        setParams({
            ...params,
            query: recipeName,
        })
    }
    //

    return (
        <Box w="100%" h='auto' display='flex' flexDir={['column', 'row']}>
            <Box w="100%" color='green.50' display='flex' flexDir='column' alignItems='center'>
                <SearchBarSpoon thingSearched={spoonRecipe} handleSearch={handleSpoon} params={params} setParams={setParams}/>
                <QuerySpoon index={index} category={category} setWeekMenu={setWeekMenu} weekMenu={weekMenu} thingSearched={spoonRecipe} filter={params}/>
            </Box>
        </Box>
    )
}