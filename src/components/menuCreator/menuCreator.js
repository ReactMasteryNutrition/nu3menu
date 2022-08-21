// Imports
import React from "react";
import { Center,  Flex } from "@chakra-ui/react";
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


    const blabla = 'blablablablabla'

  
    return (
        <Flex flexGrow={1}>
            <Flex py='2rem'>
                <WeekTable onIndexChange={handleIndexDeloc} />
            </Flex>
            <Center w='100%' p='2rem' flexDirection={"column"}>
                <MealCategory onCategoryChange={handleCategoryChange} />
                <SearchAndFilter onChangeRecipe={handleChangeRecipe} index={tabIndexDeloc} category={categoryDeloc} bla={blabla} setWeekMenu={setWeekMenu} weekMenu={weekMenu}/>
                <ButtonToAddRecipe index={tabIndexDeloc} category={categoryDeloc} bla={blabla}/>
            </Center>
        </Flex>
    )
}