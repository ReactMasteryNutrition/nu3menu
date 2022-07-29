// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import FetchAxios from '../../util/FetchAxios'
// Function
export default function Query({thingSearched, filter}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        console.log('useEffect de ResultOfQuery')
        console.log('thingSearched initial : ', thingSearched)
        //console.log('filter initial : ', filter)
        const controller = new AbortController();
        if (!thingSearched) {
            return
        }
        console.log('useEffect de ResultOfQuery pour lancer le fetch axios')
        setData()
        //FetchRecipe(thingSearched)
        FetchAxios(thingSearched, filter)
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
            console.log('Filter : ', filter),
            <>
                <Center color='green.50' paddingY='2rem'>Rechercher une recette</Center>
                <Text noOfLines={1} color='green.50'>{JSON.stringify(filter)}</Text>
            </>
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
        //console.log('RecipeSearch : ', thingSearched),
        //console.log('Data : ', data),
        console.log('Filter : ', filter),
        <Text noOfLines={1} color='green.50'>{JSON.stringify(filter)}</Text>
    )
}