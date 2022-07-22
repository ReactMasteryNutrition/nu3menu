import React from "react";
import { meal } from "../data/recipeFake";
import { weekMenu } from "../data/weekMenu";
import { FormControl, FormLabel, Box, Select, Button,Radio ,RadioGroup,Stack, Image } from '@chakra-ui/react'


const CreateMenu = () => {


    const [dayMeal, setMealDay] = React.useState("")
    //const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")

    function ajoutjour() {
        weekMenu[0].lundi.matin = meal[0].titre
        console.log(weekMenu)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleDayMealChange = (e) => {
        setMealDay(e.target.value)
    }
    //const handleRecipeChange = (e) => {
        //e.preventDefault()
      //  setRecipe(e.target.value)
    //}
    console.log(`le jour choisi ${dayMeal} `)

    return (
        <Box>
            <FormControl color={"green.400"}>
                <FormLabel>Choissez un jour de la semaine</FormLabel>
                <Select value={dayMeal} onChange={handleDayMealChange} placeholder='Le jour'>
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
                <Select value={category} onChange={handleCategoryChange} placeholder='category'>
                    <option value="petit déjeuner">Petit déjeuner</option>
                    <option value="déjeuner">Déjeuné</option>
                    <option value="diner">Dîner</option>
                </Select>
            </FormControl>
            <RadioGroup defaultValue='' color={"green.400"}>
                <Stack>
                    <Radio value='1' >
                        <Image src={meal[0].picture}  alt="imgggg"/>
                        <p>{meal[0].titre}</p> 
                    </Radio>
                    <Radio value='2'>Unchecked</Radio>
                    <Radio value='3'>Unchecked</Radio>
                </Stack>
            </RadioGroup>
            <Image src={meal[2].picture}  alt="imgggg"/>

            <Button color={"green.400"} onClick={ajoutjour}>Ajout</Button>

        </Box>
    )
}

export default CreateMenu;