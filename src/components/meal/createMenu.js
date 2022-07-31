import React from "react";
import { meal } from "../data/recipeFake";
//import { weekMenu } from "../data/weekMenu";
import { FormControl, FormLabel, Select, Button, Radio, RadioGroup, Image, Stack, Center } from '@chakra-ui/react'
//import { useLocalStorage } from "./localStorage";

const CreateMenu = ({ onDayyChange, onCategorychange }) => {

    const [dayyMeal, setMealDay] = React.useState("")
    const [recipe, setRecipe] = React.useState()
    const [category, setCategory] = React.useState("")
    const [weekMenu, setweekMenu] = React.useState ( [
        { day: "lundi", matin: "", deujeuner: "", diner: "" },
        { day: "mardi", matin: "", deujeuner: "", diner: "" },
        { day: "mercredi", matin: "", deujeuner: "", diner: "" },
        { day: "jeudi", matin: "", deujeuner: "", diner: "" },
        { day: "vendredi", matin: "", deujeuner: "", diner: "" },
        { day: "samedi", matin: "", deujeuner: "", diner: "" },
        { day: "dimanche", matin: "", deujeuner: "", diner: "" }
    ])

   
    localStorage.setItem( 'week' , JSON.stringify(weekMenu));
    console.log(`ici les weekmenu ${weekMenu[2].day}`)



    



    //function ajoutjour() {
    //    let add = weekMenu[0].lundi.matin = meal[1].titre 
    //    console.log(`weekMenu ajout aaa jour ${add}`)
    //    console.log(`teste dans ajout ${weekMenu[0].lundi.matin} `)
    //}

    const handleCategoryChange = (e) => {
        //setCategory(e.target.value)
        //onCategorychange(category)
    }

    const handleDayMealChange = (e) => {
        setMealDay(e.target.value)
    }
    const handleRecipeChange = (e) => {
        setRecipe(e.target.value)
    }

    let arrayCategory = meal.filter((meal) => meal.category === category)
    let weekFilter = weekMenu.filter((weekMenu) => weekMenu.day === dayyMeal)

    //console.log(`le jour choisi ${dayyMeal} `)
    //console.log(`le jour choisi ${category} `)
    //console.log(`casssttte ${arrayCategory}`)
    //console.log(`recette chois ${recipe}`)
    console.log(`jour filter  ${weekFilter}`)
    //console.log(`weekMenu ajout jour ${weekMenu[0].lundi.matin}`)
    //console.log(`les meal miteux ${meal}`)

    return (
        <Center flexDirection={"column"}>
            <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"}>
                <FormLabel>Choissez un jour de la semaine</FormLabel>
                <Select w={"80%"} value={dayyMeal} onChange={handleDayMealChange} placeholder='Le jour'>
                    <option  value="lundi">Lundi</option>
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



            <Button marginBottom={"3"} w={"25%"} color={"green.400"} >Ajout</Button>


        </Center>
    )
}

export default CreateMenu;

