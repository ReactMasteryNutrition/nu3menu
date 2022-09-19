// Imports
import React from 'react'
import { Box, Center, Divider } from '@chakra-ui/react'

import QuerySpoon from '../../components/SearchAndFilter/QuerySpoon'

import SearchBarSpoon from './SearchBarSpoon'
// Functions
export default function SearchAndFilter({ index, category, weekMenu, setWeekMenu }) {
    // // Recette recherchée, valeur de l'input text de la search bar
    // const [recipe, setRecipe] = React.useState('')

    // // Ensemble des paramètres pour réaliser la requête html dont les filtres
    // const [filter, setFilter] = React.useState({
    //     type: 'public',
    //     beta: 'true',
    //     q: '', //recipe => mot clé recherché
    //     app_id: process.env.REACT_APP_EDAMAM_API_ID,
    //     app_key: process.env.REACT_APP_EDAMAM_API_KEY ,
    // })
    // // Mise à jour des paramètres en fonction des filtres renseignés et de la recette recherchée
    // const handleSearch = recipeName => {
    //     setRecipe(recipeName)
    //     setFilter({
    //         ...filter,
    //         q: recipeName,
    //     })
    // }

    //SPOONACULAR //
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
    // React.useEffect(()=>{
    //     console.log('Params : ', params)
    // }, [params])

    return (
        <Box w="100%" h='auto' display='flex' flexDir={['column', 'row']}>
            <Box w="100%" color='green.50' display='flex' flexDir='column' alignItems='center'>
                <SearchBarSpoon thingSearched={spoonRecipe} handleSearch={handleSpoon} params={params} setParams={setParams}/>
                <QuerySpoon index={index} category={category} setWeekMenu={setWeekMenu} weekMenu={weekMenu} thingSearched={spoonRecipe} filter={params}/>
                {/* <Divider my='3rem'/>
                <SearchBar thingSearched={recipe} handleSearch={handleSearch} filter={filter} setFilter={setFilter} />
                <Query index={index} category={category} setWeekMenu={setWeekMenu} weekMenu={weekMenu} thingSearched={recipe} filter={filter} /> */}
            </Box>
        </Box>
    )
}