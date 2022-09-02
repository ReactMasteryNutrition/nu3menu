import React from "react"

import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function MealCategory({onCategoryChange}){

    const [category, setCategory] = React.useState("")
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    
    React.useEffect(() => {
        onCategoryChange(category)
        //console.log('useEffect pour mettre à jour le MEAL dans MenuCreator via onCategoryChange()')
    }, [category, onCategoryChange])

    //onCategoryChange(category)

    return (
        <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"} px={['','1rem']}>
            <FormLabel>Category</FormLabel>
            <Select w='100%' value={category} onChange={handleCategoryChange} placeholder='Select your meal choice'>
                <option value="Matin">Petit-déjeuner</option>
                <option value="Déjeuner">Déjeuner</option>
                <option value="Dîner">Dîner</option>
            </Select>
        </FormControl>
    )
}