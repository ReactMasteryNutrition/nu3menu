import React from "react";
import { meal } from "../data/recipeFake";
//import { weekMenu } from "../data/weekMenu";
import { FormControl, FormLabel, Select, Button, Radio, RadioGroup, Image, Stack, Center } from '@chakra-ui/react'
//import { useLocalStorage } from "./localStorage";

const CreateMenu = ({ onDayyChange, onCategorychange }) => {

    const [dayyMeal, setMealDay] = React.useState("")
    const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")
    const [weekMenu, setWeekMenu] = React.useState({
    lundi : {matin : "patantouille",deujeuner : "",diner : ""},
    mardi :{
        matin : "",
        deujeuner : "",
        diner : ""},
    mercredi :{
        matin : "",
        deujeuner : "",
        diner : ""
    },
    jeudi :{
        matin : "",
        deujeuner : "",
        diner : ""
    },
    vendredi : {
        matin : "",
        deujeuner : "",
        diner : ""
    } ,
    samedi :{
        matin : "",
        deujeuner : "",
        diner : ""
    },
    dimanche : {
        matin : "",
        deujeuner : "",
        diner : ""
    }

})
    let arrayCategory = meal.filter((meal) => meal.category === category)
    
    localStorage.setItem('week', JSON.stringify(weekMenu));
    //console.log(`ici les weekmenu ${weekMenu[2].day}`)

    //const ajoutjour = () => {

      //  for (const [key , value] of Object.entries(weekMenu)){
        //    let keyN = key.toString()
        //    let valueN = value
    
        //} if ()
    
    //}

    const handleCategoryChange = (e) => {
        //setCategory(e.target.value)
        //onCategorychange(category)
    }

    const handleDayMealChange = (e) => {
        setMealDay(e.target.value)
    }

    //console.log(`mealday setter   ${dayyMeal}`)
    const handleRecipeChange = (e) => {
        setRecipe(e.target.value)
    }

    //console.log(`${weekMenu[2].day} c'est l'état initial`)

    console.log(`le jour choisi ${dayyMeal} `)
    //console.log(`le jour choisi ${category} `)
    //console.log(`casssttte ${arrayCategory}`)
    //console.log(`recette chois ${recipe}`)
    //console.log(`jour filter  ${weekFilter}`)


    return (
        <Center flexDirection={"column"}>
            <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"}>
                <FormLabel>Choissez un jour de la semaine</FormLabel>
                <Select w={"80%"} value={dayyMeal} onChange={handleDayMealChange} placeholder='Le jour'>
                    <option value="lundi">Lundi</option>
                    <option value="mardi">Mardi</option>
                    <option value="mercredi">Mercredi</option>
                    <option value="jeudi">Jeudi</option>
                    <option value="vendredi">Vendredi</option>
                    <option value="samedi">Samedi</option>
                    <option value="dimanche">Dimanche</option>
                </Select>
            </FormControl>
            <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"}>
                <FormLabel>Category</FormLabel>
                <Select w={"80%"} value={category} onChange={handleCategoryChange} placeholder='category'>
                    <option value="matin">Petit déjeuner</option>
                    <option value="déjeuner">Déjeuné</option>
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



            <Button marginBottom={"3"} w={"25%"} color={"green.400"} onClick={ajoutjour} >Ajout</Button>


        </Center>
    )
}

export default CreateMenu;

