import React from "react";
//import { meal } from "../data/recipeFake";
import {  FormControl, FormLabel, Box, Select} from '@chakra-ui/react'


const CreateMenu = () => {

    const [dayMeal, setMealDay] = React.useState("")
    //const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")
    //const weekMenu = []
    const handleCategoryChange = (e) =>{
        //e.preventDefault()
        setCategory(e.target.value)
        console.log(`la catégory ${category}`)
    }
    const handleDayMealChange = (e) =>{
        e.preventDefault()
        setMealDay(e.target.value)
        console.log(`le jour choisi ${dayMeal} `)
    }
    //const handleRecipeChange =(e) =>{
    //    e.preventDefault()
    //    setRecipe(e.target.value)
    //}
    

    return (
        <Box>
            <FormControl color={"green.400"} >
                <FormLabel>Choissez un jour de la semaine</FormLabel>
                <Select value= {dayMeal}  onClick ={handleDayMealChange} placeholder='Le jour'>
                    <option value="lundi">Lundi</option>
                    <option value="mardi">Mardi</option>
                    <option value="mercredi">Mercredi</option>
                    <option value="jeudi">Jeudi</option>
                    <option value="vendredi">Vendredi</option>
                    <option value="samedi">Samedi</option>
                    <option value="dimanche">Dimanche</option>
                </Select>
            </FormControl>
            <FormControl color={"green.400"}>
                <FormLabel>Category</FormLabel>
                <Select value= {category}  onChange ={handleCategoryChange} placeholder='category'>
                    <option value="petit déjeuner">Petit déjeuner</option>
                    <option value="déjeuner">Déjeuné</option>
                    <option value="diner">Dîner</option>
                </Select>
            </FormControl>
        </Box>
    )
}

export default CreateMenu;