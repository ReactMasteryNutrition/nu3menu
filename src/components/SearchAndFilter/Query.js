// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import FetchAxios from '../../utils/FetchAxios'
import CardRecipe from '../Card/CardRecipe';
//import CardWithGrid from '../Card/CardWithGrid';
// Function
export default function Query({thingSearched, filter, index, category}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);
    console.log(`je suis dans query hahaha ${index} et ${category}`)
    React.useEffect(() => {
        const controller = new AbortController();
        if (!thingSearched) {
            return
        }
        setData()
        FetchAxios(thingSearched, filter)
        .then(response => {
            setData(response)
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
        <CardRecipe index={index} category={category} datas={data}/>
    )
}