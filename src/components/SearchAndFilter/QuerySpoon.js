// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import CardRecipeWithSpoon from '../Card/CardRecipeWithSpoon';
import { useSpoon } from '../../utils/helper';
//import CardWithGrid from '../Card/CardWithGrid';
// Function

export default function QuerySpoon({ index, category, setWeekMenu, weekMenu, thingSearched, filter }) {
    const [data, setData] = React.useState();
    const fetchAxios = useSpoon(thingSearched, filter)

    React.useEffect(() => {
        if (!thingSearched) {
            return
        }
        setData(fetchAxios)
    }, [thingSearched, fetchAxios])
    if (!thingSearched) {
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