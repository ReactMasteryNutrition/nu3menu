// Imports
import React from 'react'
import { Box } from '@chakra-ui/react'
import Query from '../../components/SearchAndFilter/Query'
import SearchBar from '../../components/SearchAndFilter/SearchBar'
// Functions
export default function SearchAndFilter({ index, category, weekMenu, setWeekMenu }) {
    // Recette recherchée, valeur de l'input text de la search bar
    const [recipe, setRecipe] = React.useState('')

    // Ensemble des paramètres pour réaliser la requête html dont les filtres
    const [filter, setFilter] = React.useState({
        type: 'public',
        beta: 'true',
        q: '', //recipe => mot clé recherché
        app_id: process.env.REACT_APP_EDAMAM_API_ID,
        app_key: process.env.REACT_APP_EDAMAM_API_KEY ,
    })
    // Mise à jour des paramètres en fonction des filtres renseignés et de la recette recherchée
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
                <Query index={index} category={category} setWeekMenu={setWeekMenu} weekMenu={weekMenu} thingSearched={recipe} filter={filter} />
            </Box>
        </Box>
    )
}