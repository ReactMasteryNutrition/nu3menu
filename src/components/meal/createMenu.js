import React from "react";
import { meal } from "../data/recipeFake";
import { weekMenu } from "../data/weekMenu";
import { FormControl, FormLabel, Box, Select, Button, Radio, RadioGroup, Stack, Image } from '@chakra-ui/react'


const CreateMenu = () => {


    const [dayMeal, setMealDay] = React.useState("")
    const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")



    function ajoutjour() {
        weekMenu[0].lundi.matin = meal[0].titre
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleDayMealChange = (e) => {
        setMealDay(e.target.value)
    }
    const handleRecipeChange = (e) => {
        e.preventDefault()
        setRecipe(e.target.value)

    }

    let arrayCategory = meal.filter((meal) => meal.category === category)
    console.log(`le jour choisi ${dayMeal} `)
    console.log(`le jour choisi ${category} `)
    console.log(`casssttte ${arrayCategory}`)

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

            <RadioGroup defaultValue={recipe} onClick={handleRecipeChange} color={"green.400"}>
                <Stack>
                    {arrayCategory?.map((data) => <Radio key={data.id} value={data.id} >
                        <Image src={data.picture} alt="imgggg" />
                        <h2>{data.titre}</h2>
                        <p>{data.recipe}</p>
                    </Radio>)}

                </Stack>
            </RadioGroup>



            <Button color={"green.400"} onClick={ajoutjour}>Ajout</Button>


        </Box>
    )
}

export default CreateMenu;

