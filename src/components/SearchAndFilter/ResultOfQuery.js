// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
import {FetchRecipe, getRecipes, qs} from '../../util/FetchRecipe';
import Card from '../Cards/CardMenu';
// Function
export default function ResultOfQuery({thingSearched, filter, setFilter}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        console.log('useEffect de ResultOfQuery')
        console.log('thingSearched initial : ', thingSearched)
        console.log('filter initial : ', filter)
        const controller = new AbortController();
        if (!thingSearched) {
            return
        }

        // fourre tout
        // let truc = {
        //     'nutrients[CHOCDF]': '100 ', // glucide
        //     'nutrients[FAT]': '100', // lipide
        //     'nutrients[PROCNT]': '100-400',
        // }
        // console.log('qs.parse : ')
        // console.log(qs.parse(truc))
        // console.log('qs.stringify : ')
        // console.log(qs.stringify(truc))
        // fin fourre tout
        console.log('useEffect de ResultOfQuery pour lancer le fetch axios')
        setData()
        //FetchRecipe(thingSearched)
        getRecipes(thingSearched, filter)
        .then(response => {
            setData(response)
            console.log('on a mis response dans data')
        })
        .catch(error => setError(error))
        .finally( ()=> controller.abort())
    }, [thingSearched, filter])

    if (error) {
        throw error
    }
    if(!thingSearched) {
        return (
            <Center color='green.50' paddingY='2rem'>Rechercher une recette</Center>
        )
    }
    if(!data) {
        return (
            <Center paddingY='2rem'>
                <Spinner color='green.400'/>
                <Text marginLeft='1rem'>Chargement...</Text>
            </Center>
        )
    }
    return (
        console.log('RecipeSearch : ', thingSearched),
        console.log('Data :', data)
    )
}