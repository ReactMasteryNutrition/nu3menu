import React from "react";
//import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
//import JourBarre from "./joursBarre";

import { FormControl, FormLabel, Select, Button, Radio, RadioGroup, Image, Stack, Center } from '@chakra-ui/react'
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import JourBarre from "./joursBarre";


const Mealy = () => {
    const [dayyMeal, setMealDay] = React.useState("")

    const [tabIndexDeloc, setTabIndexDeloc]= React.useState()
    const [weekMenu, setWeekMenu] = React.useState({
        lundi: { matin: "patantouille", deujeuner: "", diner: "" },
        mardi: { matin: "patantouille", deujeuner: "", diner: "" },
        mercredi: { matin: "patantouille", deujeuner: "", diner: "" },
        jeudi: { matin: "patantouille", deujeuner: "", diner: "" },
        vendredi: { matin: "patantouille", deujeuner: "", diner: "" },
        samedi: { matin: "patantouille", deujeuner: "", diner: "" },
        dimanche: { matin: "patantouille", deujeuner: "", diner: "" }
    })


    const handleIndexDeloc = (tabIndexDeloc)=>{
        setTabIndexDeloc(tabIndexDeloc)
    }

    console.log(` les index venu d'ailleur ${tabIndexDeloc}`)



    localStorage.setItem('week', JSON.stringify(weekMenu));

    //console.log(`ici les weekmenu ${tabIndex}`)

    const ajoutjour = () => {

        for (const [key, value] of Object.entries(weekMenu)) {
            //let valueN = Object.getOwnPropertyNames(value)
            
            console.log(`les key ${value}`)
            if (key === dayyMeal && key === "lundi") {
                
                setWeekMenu({
                    ...weekMenu,
                   lundi: {
                        matin: "illlllll",
                        deujeuner: " un autre truc ",
                        diner: "et voilà "
                    }
                })
        
        }
        if (key === dayyMeal && key === "mardi") {
            setWeekMenu({
                ...weekMenu,
                mardi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (key === dayyMeal && key === "mercredi") {
            setWeekMenu({
                ...weekMenu,
                mercredi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (key === dayyMeal && key === "jeudi") {
            setWeekMenu({
                ...weekMenu,
                jeudi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (key === dayyMeal && key === "vendredi") {
            setWeekMenu({
                ...weekMenu,
                vendredi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (key === dayyMeal && key === "samedi") {
            setWeekMenu({
                ...weekMenu,
                samedi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (key === dayyMeal && key === "dimanche") {
            setWeekMenu({
                ...weekMenu,
                dimanche: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        
    }
}



console.log(`les meal day est le dayy ${dayyMeal}`)
//console.log(`mealday setter   ${dayyMeal}`)


//console.log(`${weekMenu[2].day} c'est l'état initial`)

// console.log(`le jour choisi ${dayyMeal} `)
//console.log(`le jour choisi ${category} `)
//console.log(`casssttte ${arrayCategory}`)
//console.log(`recette chois ${recipe}`)
//console.log(`jour filter  ${weekFilter}`)

//const handleIndexChange = (tabIndex) => {
  //  setTabIndex(tabIndex)
//}
//console.log(`le jour choisi ${tabIndex} `)


return (
    <>

        <SearchAndFilter />

        <JourBarre onIndexChange={handleIndexDeloc}/> 
       
        <Center flexDirection={"column"}>

            <Button marginBottom={"3"} w={"25%"} color={"green.400"} onClick={ajoutjour} >Ajout</Button>

        </Center>

    
    </>
)}

export default Mealy;