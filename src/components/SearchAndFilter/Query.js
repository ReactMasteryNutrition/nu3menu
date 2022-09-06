// Imports
import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
// import test
import { useEdamam } from '../../utils/helper'
import CardRecipe from '../Card/CardRecipe';
//import CardWithGrid from '../Card/CardWithGrid';
// Function
export default function Query({ thingSearched, filter, index, category, weekMenu, setWeekMenu }) {
    const [data, setData] = React.useState();
    const fetchAxios = useEdamam(thingSearched, filter)

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
    if (!data) {
        return (
            <Center paddingY='2rem'>
                <Spinner color='green.400' />
                <Text marginLeft='1rem'>Chargement...</Text>
            </Center>
        )
    }
    return (
        <CardRecipe indexOfDay={index} categoryOfMeal={category} weekMenu={weekMenu} setWeekMenu={setWeekMenu} datas={data} />
    )
}