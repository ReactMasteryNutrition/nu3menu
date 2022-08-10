import React from "react"

import { meal } from "../data/recipeFake";

import { FormControl, FormLabel, Select, RadioGroup, Stack, Radio, Image } from "@chakra-ui/react";

const RepasBarre = ({onCategoryChange, onChangeRecipe}) => {
    const [category, setCategory] = React.useState("")
    const [recipe, setRecipe] = React.useState()

    let arrayCategory = meal.filter((meal) => meal.category === category)

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
        //onCategorychange(category)
    }
    const handleRecipeChange = (e) => {
        setRecipe(e.target.value)
    }

    onChangeRecipe(recipe)
    onCategoryChange(category)
    console.log(`recepiteeeeee ${recipe}`)

    return (
        <>   
            <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"}>
                <FormLabel>Category</FormLabel>
                <Select w={"80%"} value={category} onChange={handleCategoryChange} placeholder='category'>
                    <option value="matin">Petit déjeuner</option>
                    <option value="deujeuner">Déjeuné</option>
                    <option value="diner">Dîner</option>

                </Select>
            </FormControl>

            <RadioGroup marginX={"auto"} textAlign={"center"} display={"flex"} defaultValue={recipe} onClick={handleRecipeChange} color={"green.400"}>
                <Stack display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    {arrayCategory?.map((data) => <Radio w={"75%"} key={data.id} value={data.id} checked={recipe === { data }}>
                        <Image height={"sm"} width={"sm"} src={data.picture} alt="imgggg" />
                        <h2>{data.titre}</h2>
                        <p>{data.recipe}</p>
                    </Radio>)}
                </Stack>

            </RadioGroup>


        </>
    )
}

export default RepasBarre;