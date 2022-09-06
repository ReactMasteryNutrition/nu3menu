// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import FetchAxiosWithSpoon from '../../utils/FetchAxiosWithSpoon'
import CardRecipeWithSpoon from '../Card/CardRecipeWithSpoon';
//import CardWithGrid from '../Card/CardWithGrid';
// Function
export default function QuerySpoon({searched, setSearched}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        const controller = new AbortController();
        if (!searched) {
            return
        }
        setData()
        FetchAxiosWithSpoon(searched)
        .then(response => {
            setData(response)
        })
        .catch(error => setError(error))
        .finally( ()=> controller.abort())
    }, [searched])

    if (error) {
        throw error
    }
    if(!searched) {
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
        <CardRecipeWithSpoon datas={data}/>
    )
}