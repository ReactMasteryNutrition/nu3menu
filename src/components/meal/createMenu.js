import React from "react";
import { meal } from "../data/recipeFake";
import { weekMenu } from "../data/weekMenu";
import { FormControl, FormLabel, Box, Select, Button, Radio, RadioGroup, Image, Stack } from '@chakra-ui/react'


const CreateMenu = () => {

    const [dayMeal, setMealDay] = React.useState("")
    const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")

    function ajoutjour() {
        
        console.log(`weekMenu ajout jour ${weekMenu[0].samedi}`)
    }
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleDayMealChange = (e) => {
        setMealDay(e.target.value)
    }
    const handleRecipeChange = (e) => {
        setRecipe(e.target.value)
    }

    let arrayCategory = meal.filter((meal) => meal.category === category)
    let weekFilter =weekMenu.filter((weekMenu) => weekMenu.day === dayMeal)
    
    console.log(`le jour choisi ${dayMeal} `)
    console.log(`le jour choisi ${category} `)
    console.log(`casssttte ${arrayCategory}`)
    console.log(`recette chois ${recipe}`)
    console.log(`jour filter  ${weekFilter}`)

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
                    <option value="matin">Petit déjeuner</option> 
                    <option value="déjeuner">Déjeuné</option>
                    <option value="diner">Dîner</option>

                </Select>
            </FormControl>

            <RadioGroup defaultValue={recipe} onClick={handleRecipeChange} color={"green.400"}>
                <Stack>
                    {arrayCategory?.map((data) => <Radio key={data.id} value={data.id} checked={recipe === {data}}>
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

