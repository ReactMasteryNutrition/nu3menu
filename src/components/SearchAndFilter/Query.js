// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import FetchAxios from '../../utils/FetchAxios'
import CardRecipe from '../Card/CardRecipe';
// Function
export default function Query({thingSearched, filter}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        // console.log('useEffect de ResultOfQuery')
        // console.log('thingSearched à la validation : ', thingSearched)
        // console.log('filter à la validation : ', filter)
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
        console.log('Filter : ', filter),
        <CardRecipe datas={data}/>
    )
}