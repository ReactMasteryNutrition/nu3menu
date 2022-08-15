import React from "react";
//import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
//import JourBarre from "./joursBarre";
import { Center,  Flex } from "@chakra-ui/react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import JourBarre from "./joursBarre";
import RepasBarre from "./repasBarre";
import AjoutJour from "./ajoutjour";
//import CardRecipe from "../Card/CardRecipe";


//import { weekMenu } from "../data/weekMenu";


const Mealy = () => {
    //const [dayyMeal, setDayyMeal] = React.useState("")
    const [categoryDeloc, setCategoryDeloc] = React.useState("")
    const [tabIndexDeloc, setTabIndexDeloc] = React.useState()
    const [recipeDeloc , setRecipeDeloc] =React.useState()
    
   

    const handleIndexDeloc = (tabIndexDeloc) => {
        setTabIndexDeloc(tabIndexDeloc)
    }
    const handleCategoryChange = (categoryDeloc) => {
        setCategoryDeloc(categoryDeloc)
    }
    const handleChangeRecipe= (recipeDeloc) =>  {
        setRecipeDeloc(recipeDeloc)
 
    }
console.log(`les recipe delocé   ${recipeDeloc}`)
    
    return (
        <>
            <Flex>
                <Flex w={'20%'}>
                    <JourBarre onIndexChange={handleIndexDeloc} />

                </Flex>
                <Center w={'75%'} flexDirection={"column"}>

                    <RepasBarre onCategoryChange={handleCategoryChange} />
                    <SearchAndFilter onChangeRecipe={handleChangeRecipe} index ={tabIndexDeloc} category ={categoryDeloc} />
                    <AjoutJour index ={tabIndexDeloc} category ={categoryDeloc} recipe={recipeDeloc} />
            
                </Center>

            </Flex>
        </>
    )
}

export default Mealy;