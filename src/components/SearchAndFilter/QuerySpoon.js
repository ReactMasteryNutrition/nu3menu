// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import FetchAxiosWithSpoon from '../../utils/FetchAxiosWithSpoon'
import CardRecipeWithSpoon from '../Card/CardRecipeWithSpoon';
//import CardWithGrid from '../Card/CardWithGrid';
// Function
export default function QuerySpoon({index, category, setWeekMenu, weekMenu, thingSearched, filter}) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        const controller = new AbortController();
        if (!thingSearched) {
            return
        }
        setData()
        FetchAxiosWithSpoon(thingSearched, filter)
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
        <CardRecipeWithSpoon indexOfDay={index} categoryOfMeal={category} weekMenu={weekMenu} setWeekMenu={setWeekMenu} datas={data}/>
    )
}