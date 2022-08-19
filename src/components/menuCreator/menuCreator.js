// Imports
import React from "react";
import { Center,  Flex, Text } from "@chakra-ui/react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import MealCategory from "./mealCategory";
import WeekTable from "./weekTable";
import ButtonToAddRecipe from "./buttonToAddRecipe";

export default function MenuCreator(){
    const [categoryDeloc, setCategoryDeloc] = React.useState("")
    const handleCategoryChange = (categoryDeloc) => {
        setCategoryDeloc(categoryDeloc)
    }

    const [tabIndexDeloc, setTabIndexDeloc] = React.useState(0)
    const handleIndexDeloc = (tabIndexDeloc) => {
        setTabIndexDeloc(tabIndexDeloc)
    }

    const [recipeDeloc , setRecipeDeloc] =React.useState()
    const handleChangeRecipe= (recipeDeloc) =>  {
        setRecipeDeloc(recipeDeloc)
    }

    const[menuIsCompleted, setMenuIsCompleted] = React.useState(false)


    const [weekMenu, setWeekMenu] = React.useState({
        lundi: { matin: "", deujeuner: "", diner: "" },
        mardi: { matin: "", deujeuner: "", diner: "" },
        mercredi: { matin: "", deujeuner: "", diner: "" },
        jeudi: { matin: "", deujeuner: "", diner: "" },
        vendredi: { matin: "", deujeuner: "", diner: "" },
        samedi: { matin: "", deujeuner: "", diner: "" },
        dimanche: { matin: "", deujeuner: "", diner: "" }
    })
    localStorage.setItem('week', JSON.stringify(weekMenu));

    React.useEffect(() => {
        //console.log("WeekMenu a été modifié")
        let countEmptyMeal = 21
        for (const [day, meals] of Object.entries(weekMenu)) {
            console.log(`${day}: ${meals}`);
            for( const [meal, thereIsARecipe] of Object.entries(meals)) {
                console.log(`${meal}: ${thereIsARecipe}`)
                if(thereIsARecipe === '') {
                    console.log('Il y a au moins un espace vide')
                    //countEmptyMeal += 1
                } else {
                    countEmptyMeal -= 1
                }
            }
        }
        console.log('countEmptyMeal :', countEmptyMeal)
        if(countEmptyMeal === 0){
            console.log("CHANGER AFFICHAGE")
            setMenuIsCompleted(true)
        }
    },[weekMenu])

    return (
        <Flex flexGrow={1}>
            <Flex py='2rem'>
                <WeekTable onIndexChange={handleIndexDeloc} />
            </Flex>
            {!menuIsCompleted ?
                <Center w='100%' p='2rem' flexDirection={"column"}>
                    <MealCategory onCategoryChange={handleCategoryChange} />
                    <SearchAndFilter onChangeRecipe={handleChangeRecipe} index={tabIndexDeloc} category={categoryDeloc} setWeekMenu={setWeekMenu} weekMenu={weekMenu}/>
                </Center>
                :
                <Center w='100%' p='2rem'>
                    <Text color='green.50' fontSize='3xl'>Nouvel affichage</Text>
                </Center>
            }
                
            
        </Flex>
    )
}